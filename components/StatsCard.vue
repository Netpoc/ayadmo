<script setup lang="ts">
const root = ref<HTMLElement | null>(null)

const props = defineProps<{
  value: number | string
  label: string
  animate?: boolean
}>()

const target = computed(() => {
  const v = props.value
  if (typeof v === 'number') return v
  const num = parseInt(String(v).replace(/\D/g, ''), 10)
  return Number.isNaN(num) ? 0 : num
})

const isNumeric = computed(() => typeof props.value === 'number' || /^\d+/.test(String(props.value)))
const prefix = computed(() => (String(props.value).match(/^[^\d]*/)?.[0] ?? ''))
const suffix = computed(() => (String(props.value).match(/[^\d]*$/)?.[0] ?? ''))

const { current } = useCountUp(
  () => target.value,
  {
    duration: 1500,
    decimals: 0,
    elementRef: props.animate ? root : undefined,
  }
)
</script>

<template>
  <div
    ref="root"
    class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent-teal/30"
  >
    <div class="text-3xl font-bold text-primary-dark dark:text-accent-teal">
      <template v-if="animate && isNumeric">
        {{ prefix }}{{ current }}{{ suffix }}
      </template>
      <template v-else>
        {{ value }}
      </template>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {{ label }}
    </p>
  </div>
</template>
