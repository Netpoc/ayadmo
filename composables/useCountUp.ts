export function useCountUp(
  target: number | Ref<number> | (() => number),
  options: {
    duration?: number
    start?: number
    decimals?: number
    elementRef?: Ref<HTMLElement | null>
  } = {}
) {
  const { duration = 1500, start = 0, decimals = 0, elementRef } = options
  const current = ref(start)
  const isClient = typeof window !== 'undefined'
  const targetVal = computed(() =>
    typeof target === 'function' ? (target as () => number)() : unref(target)
  )
  const hasAnimated = ref(!elementRef)

  if (elementRef) {
    useIntersectionObserver(
      elementRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting) hasAnimated.value = true
      },
      { threshold: 0.2 }
    )
  }

  watch(
    [hasAnimated, targetVal],
    () => {
      if (!hasAnimated.value) return
      const end = typeof targetVal.value === 'number' ? targetVal.value : Number(targetVal.value) || 0

       // On the server (or when requestAnimationFrame is not available),
       // just set the final value immediately to avoid runtime errors.
       if (!isClient || typeof requestAnimationFrame === 'undefined') {
         current.value = Number(end.toFixed(decimals))
         return
       }

      const startVal = current.value
      const startTime = performance.now()

      const step = (now: number) => {
        const elapsed = now - startTime
        const progress = Math.min(elapsed / duration, 1)
        const easeOutQuart = 1 - (1 - progress) ** 4
        const value = startVal + (end - startVal) * easeOutQuart
        current.value = Number(value.toFixed(decimals))
        if (progress < 1) requestAnimationFrame(step)
      }

      requestAnimationFrame(step)
    },
    { immediate: true }
  )

  watch(
    targetVal,
    (val) => {
      if (!hasAnimated.value) current.value = start
    },
    { immediate: true }
  )

  return { current, hasAnimated }
}
