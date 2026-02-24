<script setup lang="ts">
const isDark = useDark({ storageKey: 'ayadmo-theme' })
const toggleDark = useToggle(isDark)
const mobileMenuOpen = ref(false)

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Features', to: '/features' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Demo', to: '/demo' },
  { label: 'About', to: '/about' },
  { label: 'Docs', to: '/docs' },
]

function closeMobileMenu() {
  mobileMenuOpen.value = false
}
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <header
      class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-[#1a1a2e]/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
    >
      <nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div class="flex h-16 items-center justify-between">
          <NuxtLink
            to="/"
            class="flex items-center gap-2 text-primary-dark dark:text-accent-teal font-bold text-xl transition-opacity hover:opacity-90"
          >
            AYADMO Analytics
          </NuxtLink>

          <div class="hidden md:flex md:items-center md:gap-6">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-accent-teal transition-colors text-sm font-medium"
            >
              {{ link.label }}
            </NuxtLink>
            <button
              type="button"
              aria-label="Toggle dark mode"
              class="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              @click="toggleDark()"
            >
              <span v-if="isDark" class="text-lg">☀️</span>
              <span v-else class="text-lg">🌙</span>
            </button>
          </div>

          <div class="flex items-center gap-2 md:hidden">
            <button
              type="button"
              aria-label="Toggle dark mode"
              class="p-2 rounded-lg"
              @click="toggleDark()"
            >
              <span v-if="isDark">☀️</span>
              <span v-else>🌙</span>
            </button>
            <button
              type="button"
              aria-label="Open menu"
              class="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
              @click="mobileMenuOpen = !mobileMenuOpen"
            >
              <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  v-if="!mobileMenuOpen"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
                <path
                  v-else
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>

        <Transition
          enter-active-class="transition ease-out duration-200"
          enter-from-class="opacity-0 -translate-y-2"
          enter-to-class="opacity-100 translate-y-0"
          leave-active-class="transition ease-in duration-150"
          leave-from-class="opacity-100 translate-y-0"
          leave-to-class="opacity-0 -translate-y-2"
        >
          <div
            v-show="mobileMenuOpen"
            class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-1"
          >
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              @click="closeMobileMenu"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </Transition>
      </nav>
    </header>

    <main class="flex-1">
      <slot />
    </main>

    <footer class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 mt-auto">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div class="text-gray-600 dark:text-gray-400 text-sm">
            © {{ new Date().getFullYear() }} AYADMO Analytics. All rights reserved.
          </div>
          <div class="flex flex-wrap gap-6">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.to"
              :to="link.to"
              class="text-sm text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-accent-teal transition-colors"
            >
              {{ link.label }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
