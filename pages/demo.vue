<script setup lang="ts">
useHead({
  title: 'Demo – AYADMO Analytics',
  meta: [
    {
      name: 'description',
      content: 'Explore a sample dashboard and interactive chart. Download sample data and try it yourself.',
    },
  ],
})

const sampleMetrics = [
  { label: 'Total exports (YTD)', value: '$2.4M' },
  { label: 'Growth YoY', value: '+8.2%' },
  { label: 'Top market', value: 'EU' },
  { label: 'Indicators linked', value: '12' },
]

const chartOption = computed(() => ({
  tooltip: { trigger: 'axis' },
  grid: { left: '3%', right: '4%', bottom: '3%', top: '10%', containLabel: true },
  xAxis: {
    type: 'category',
    data: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  },
  yAxis: { type: 'value', name: 'Export value ($k)' },
  series: [
    {
      name: 'Export value',
      type: 'line',
      data: [120, 132, 145, 158, 168, 182, 195, 210, 228, 245, 260, 278],
      smooth: true,
      lineStyle: { color: '#0CABA8' },
      areaStyle: { color: 'rgba(12, 171, 168, 0.2)' },
    },
  ],
}))
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">Demo</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Sample dashboard and export trend. Download sample data to explore the format we expect.
        </p>
      </header>

      <!-- Metric cards -->
      <section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        <div
          v-for="m in sampleMetrics"
          :key="m.label"
          class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-4 transition hover:shadow-lg"
        >
          <div class="text-sm text-gray-600 dark:text-gray-400">{{ m.label }}</div>
          <div class="mt-1 text-2xl font-bold text-primary-dark dark:text-accent-teal">
            {{ m.value }}
          </div>
        </div>
      </section>

      <!-- Chart -->
      <section class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 mb-12">
        <h2 class="text-lg font-semibold text-primary-dark dark:text-accent-teal mb-4">
          Sample export trend (fictional data)
        </h2>
        <ClientOnly>
          <div class="h-80 w-full">
            <VueECharts
              :option="chartOption"
              class="h-full w-full"
              autoresize
            />
          </div>
          <template #fallback>
            <div class="h-80 flex items-center justify-center text-gray-500">Loading chart...</div>
          </template>
        </ClientOnly>
      </section>

      <!-- Try it yourself -->
      <section class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800/50 p-8 mb-12">
        <h2 class="text-xl font-bold text-primary-dark dark:text-accent-teal mb-4">
          Try it yourself
        </h2>
        <p class="text-gray-600 dark:text-gray-400 mb-4">
          Download a sample CSV to see the format we expect for export transactions. Use it to test your pipeline or share with your data team.
        </p>
        <a
          href="/sample-export.csv"
          download
          class="inline-flex rounded-lg bg-primary-dark dark:bg-accent-teal px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Download sample CSV
        </a>
      </section>

      <!-- Video placeholder -->
      <section class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 p-12 text-center">
        <div class="aspect-video max-w-2xl mx-auto flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400">
          Video walkthrough coming soon
        </div>
      </section>
    </div>
  </div>
</template>
