<script setup lang="ts">
defineProps<{
  quote: string
  author: string
  role?: string
  avatar?: string
}>()
</script>

<template>
  <div
    class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 transition-all duration-300 hover:shadow-lg hover:border-accent-teal/30"
  >
    <p class="text-gray-700 dark:text-gray-300 italic">"{{ quote }}"</p>
    <div class="mt-4 flex items-center gap-3">
      <img
        v-if="avatar"
        :src="avatar"
        :alt="author"
        class="h-10 w-10 rounded-full object-cover"
        width="40"
        height="40"
        loading="lazy"
      />
      <div v-else class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-accent-teal/20 text-primary-dark dark:text-accent-teal font-semibold">
        {{ author.charAt(0) }}
      </div>
      <div>
        <div class="font-semibold text-primary-dark dark:text-accent-teal">{{ author }}</div>
        <div v-if="role" class="text-sm text-gray-500 dark:text-gray-400">{{ role }}</div>
      </div>
    </div>
  </div>
</template>
