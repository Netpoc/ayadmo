<script setup lang="ts">
defineProps<{
  title: string
  description: string
  icon?: string
}>()
</script>

<template>
  <div
    class="group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent-teal/30"
  >
    <div
      v-if="icon"
      class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-dark/10 dark:bg-accent-teal/20 text-primary-dark dark:text-accent-teal text-2xl"
    >
      {{ icon }}
    </div>
    <h3 class="text-lg font-semibold text-primary-dark dark:text-accent-teal">
      {{ title }}
    </h3>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
      {{ description }}
    </p>
  </div>
</template>
