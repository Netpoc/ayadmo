<script setup lang="ts">
useHead({
  title: 'How it works – AYADMO Analytics',
  meta: [
    {
      name: 'description',
      content:
        'Upload your export data, we process and enrich it with economic indicators, run analysis and ML, and deliver 5-year forecasts and reports.',
    },
  ],
})

const steps = [
  {
    number: 1,
    title: 'Upload Your Data',
    description: 'Upload Excel files containing your export transactions. We support multiple formats and column layouts.',
  },
  {
    number: 2,
    title: 'We Process & Enrich',
    description: 'We clean and structure your data, then fetch real-time economic indicators (FX, commodities, GDP, inflation) to enrich each record.',
  },
  {
    number: 3,
    title: 'Analysis & Insights',
    description: 'ML models identify patterns and correlations. You get clear drivers of export performance and risk factors.',
  },
  {
    number: 4,
    title: 'Forecasts & Reports',
    description: 'Receive 5-year projections, scenario analysis, and export-ready reports and dashboards.',
  },
]

const sampleInsights = [
  { label: 'Top export commodity', value: 'Cocoa' },
  { label: 'Strongest correlation', value: 'USD/NGN' },
  { label: 'Forecast growth (5Y)', value: '+12% CAGR' },
]
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header class="text-center mb-16">
        <h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">How it works</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          From raw export data to strategic insights in four clear steps.
        </p>
      </header>

      <!-- Steps -->
      <section class="space-y-12">
        <div
          v-for="(step, i) in steps"
          :key="step.number"
          class="flex flex-col md:flex-row gap-6 items-start"
        >
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-dark dark:bg-accent-teal text-white text-xl font-bold"
          >
            {{ step.number }}
          </div>
          <div class="flex-1">
            <h2 class="text-xl font-semibold text-primary-dark dark:text-accent-teal">
              {{ step.title }}
            </h2>
            <p class="mt-2 text-gray-600 dark:text-gray-400">
              {{ step.description }}
            </p>
          </div>
        </div>
      </section>

      <!-- Data flow diagram -->
      <section class="mt-20">
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-10">
          Data flow
        </h2>
        <div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-8 px-4 rounded-2xl bg-neutral-light dark:bg-gray-800/50">
          <span class="rounded-lg bg-white dark:bg-gray-700 px-4 py-2 font-medium shadow">Data</span>
          <span class="text-gray-400">→</span>
          <span class="rounded-lg bg-white dark:bg-gray-700 px-4 py-2 font-medium shadow">Process</span>
          <span class="text-gray-400">→</span>
          <span class="rounded-lg bg-white dark:bg-gray-700 px-4 py-2 font-medium shadow">Analysis</span>
          <span class="text-gray-400">→</span>
          <span class="rounded-lg bg-white dark:bg-gray-700 px-4 py-2 font-medium shadow">Reports</span>
        </div>
      </section>

      <!-- Example insights -->
      <section class="mt-20">
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8">
          Example insights
        </h2>
        <div class="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div
            v-for="insight in sampleInsights"
            :key="insight.label"
            class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-4 text-center"
          >
            <div class="text-sm text-gray-600 dark:text-gray-400">{{ insight.label }}</div>
            <div class="mt-1 text-lg font-semibold text-primary-dark dark:text-accent-teal">
              {{ insight.value }}
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>
