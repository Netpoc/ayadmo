<script setup lang="ts">
const model = defineModel<boolean>({ default: false })
defineProps<{
  disabled?: boolean
  monthlyLabel?: string
  annualLabel?: string
}>()
</script>

<template>
  <div class="inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 p-1">
    <button
      type="button"
      class="rounded-full px-4 py-2 text-sm font-medium transition-all"
      :class="
        !model
          ? 'bg-white dark:bg-gray-700 text-primary-dark dark:text-accent-teal shadow'
          : 'text-gray-600 dark:text-gray-400'
      "
      :disabled="disabled"
      @click="model = false"
    >
      {{ monthlyLabel ?? 'Monthly' }}
    </button>
    <button
      type="button"
      class="rounded-full px-4 py-2 text-sm font-medium transition-all"
      :class="
        model
          ? 'bg-white dark:bg-gray-700 text-primary-dark dark:text-accent-teal shadow'
          : 'text-gray-600 dark:text-gray-400'
      "
      :disabled="disabled"
      @click="model = true"
    >
      {{ annualLabel ?? 'Annual' }}
    </button>
    <span
      v-if="disabled"
      class="ml-2 text-xs text-gray-500 dark:text-gray-400"
    >
      (Yearly only for now)
    </span>
  </div>
</template>
