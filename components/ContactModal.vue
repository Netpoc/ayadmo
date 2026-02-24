<script setup lang="ts">
const open = defineModel<boolean>({ default: false })

function onClose() {
  open.value = false
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && open.value) onClose()
}

useEventListener(document, 'keydown', onKeydown)

const { loading, error, success, submitEnquiry } = useEnquiry()

async function handleSubmit(payload: { name: string; email: string; phone: string; message: string }) {
  try {
    await submitEnquiry(payload)
    setTimeout(() => {
      onClose()
    }, 1500)
  } catch {
    // error already set in composable
  }
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="open"
        class="fixed inset-0 z-[100] flex items-center justify-center p-4"
        aria-modal="true"
        role="dialog"
        aria-label="Contact form"
      >
        <div
          class="absolute inset-0 bg-black/50"
          aria-hidden="true"
          @click="onClose"
        />
        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 scale-95"
          enter-to-class="opacity-100 scale-100"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 scale-100"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-if="open"
            class="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl"
            @click.stop
          >
            <div class="flex items-center justify-between mb-4">
              <h2 class="text-xl font-bold text-primary-dark dark:text-accent-teal">
                Contact us
              </h2>
              <button
                type="button"
                class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700"
                aria-label="Close"
                @click="onClose"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <p
              v-if="error"
              class="mb-3 rounded-md bg-red-50 text-red-700 text-sm px-3 py-2 dark:bg-red-900/30 dark:text-red-200"
            >
              {{ error }}
            </p>
            <p
              v-if="success"
              class="mb-3 rounded-md bg-green-50 text-green-700 text-sm px-3 py-2 dark:bg-green-900/30 dark:text-green-200"
            >
              Your enquiry has been sent. Thank you.
            </p>
            <ContactForm @submit="handleSubmit" />
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>
