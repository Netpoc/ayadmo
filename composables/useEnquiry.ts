export interface EnquiryPayload {
  name: string
  email: string
  phone: string
  message: string
}

export function useEnquiry() {
  const loading = ref(false)
  const error = ref<string | null>(null)
  const success = ref(false)

  const submitEnquiry = async (payload: EnquiryPayload) => {
    loading.value = true
    error.value = null
    success.value = false

    try {
      await $fetch('/api/enquiry', {
        method: 'POST',
        body: payload,
      })
      success.value = true
    } catch (e: any) {
      error.value =
        e?.data?.statusMessage ||
        e?.statusMessage ||
        'Unable to send your enquiry right now. Please try again later.'
      throw e
    } finally {
      loading.value = false
    }
  }

  return {
    loading,
    error,
    success,
    submitEnquiry,
  }
}

