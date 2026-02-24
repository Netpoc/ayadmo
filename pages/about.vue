<script setup lang="ts">
useHead({
  title: 'About – AYADMO Analytics',
  meta: [
    {
      name: 'description',
      content:
        'Mission, team, and technology behind AYADMO Analytics. Python, FRED, World Bank API, and ML for export intelligence.',
    },
  ],
})

const contactModalOpen = ref(false)

const team = [
  { name: 'Placeholder One', role: 'Lead Analyst', image: 'https://placehold.co/150x150?text=1' },
  { name: 'Placeholder Two', role: 'Data Engineer', image: 'https://placehold.co/150x150?text=2' },
  { name: 'Placeholder Three', role: 'Product', image: 'https://placehold.co/150x150?text=3' },
]

const techStack = [
  'Python (Pandas, Scikit-learn, Statsmodels)',
  'FRED API, World Bank API',
  'Jupyter notebooks',
  'Machine learning models',
]
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header class="text-center mb-16">
        <h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">About us</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Economic intelligence for export growth.
        </p>
      </header>

      <!-- Mission / vision -->
      <section class="max-w-3xl mx-auto mb-16">
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mb-4">Mission</h2>
        <p class="text-gray-700 dark:text-gray-300">
          AYADMO Analytics exists to turn scattered export data and global economic indicators into clear, actionable intelligence. We help exporters and policymakers understand what drives performance and how to plan for the next five years.
        </p>
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mt-10 mb-4">Vision</h2>
        <p class="text-gray-700 dark:text-gray-300">
          We aim to be the default platform for export intelligence: trusted data processing, real-time indicators, rigorous correlation analysis, and forecasts that support strategic decisions.
        </p>
      </section>

      <!-- Team -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8">
          Team
        </h2>
        <div class="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          <div
            v-for="member in team"
            :key="member.name"
            class="text-center rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition hover:shadow-lg"
          >
            <img
              :src="member.image"
              :alt="member.name"
              class="mx-auto h-32 w-32 rounded-full object-cover"
              width="128"
              height="128"
              loading="lazy"
            />
            <div class="mt-3 font-semibold text-primary-dark dark:text-accent-teal">{{ member.name }}</div>
            <div class="text-sm text-gray-600 dark:text-gray-400">{{ member.role }}</div>
          </div>
        </div>
      </section>

      <!-- Tech stack -->
      <section class="mb-16">
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8">
          Technology
        </h2>
        <ul class="max-w-2xl mx-auto space-y-2 text-gray-700 dark:text-gray-300">
          <li v-for="tech in techStack" :key="tech" class="flex items-center gap-2">
            <span class="text-accent-teal">•</span>
            {{ tech }}
          </li>
        </ul>
      </section>

      <!-- Contact -->
      <section class="max-w-xl mx-auto">
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-6">
          Contact
        </h2>
        <p class="text-center text-gray-600 dark:text-gray-400 mb-6">
          Email: contact@ayadmo-analytics.com · Phone: +1 (555) 000-0000
        </p>
        <button
          type="button"
          class="mx-auto block rounded-lg bg-primary-dark dark:bg-accent-teal px-6 py-3 font-semibold text-white transition hover:opacity-90"
          @click="contactModalOpen = true"
        >
          Send a message
        </button>
      </section>
    </div>

    <ContactModal v-model="contactModalOpen" />
  </div>
</template>
