<script setup lang="ts">
const emit = defineEmits<{
  submit: [payload: { name: string; email: string; phone: string; message: string }]
}>()

const name = ref('')
const email = ref('')
const phone = ref('')
const message = ref('')
const submitting = ref(false)

async function onSubmit() {
  submitting.value = true
  try {
    emit('submit', {
      name: name.value,
      email: email.value,
      phone: phone.value,
      message: message.value,
    })
    name.value = ''
    email.value = ''
    phone.value = ''
    message.value = ''
  } finally {
    submitting.value = false
  }
}
</script>

<template>
  <form class="space-y-4" @submit.prevent="onSubmit">
    <div>
      <label for="contact-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Name
      </label>
      <input
        id="contact-name"
        v-model="name"
        type="text"
        required
        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal"
        placeholder="Your name"
      />
    </div>
    <div>
      <label for="contact-email" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Email
      </label>
      <input
        id="contact-email"
        v-model="email"
        type="email"
        required
        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal"
        placeholder="you@example.com"
      />
    </div>
    <div>
      <label for="contact-phone" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Phone
      </label>
      <input
        id="contact-phone"
        v-model="phone"
        type="tel"
        required
        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal"
        placeholder="+234…"
      />
    </div>
    <div>
      <label for="contact-message" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
        Message
      </label>
      <textarea
        id="contact-message"
        v-model="message"
        rows="4"
        required
        class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal"
        placeholder="Your message"
      />
    </div>
    <button
      type="submit"
      :disabled="submitting"
      class="w-full rounded-lg bg-primary-dark dark:bg-accent-teal px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
    >
      {{ submitting ? 'Sending...' : 'Send message' }}
    </button>
  </form>
</template>
