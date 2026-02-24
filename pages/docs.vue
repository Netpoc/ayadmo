<script setup lang="ts">
useHead({
  title: 'Documentation – AYADMO Analytics',
  meta: [
    {
      name: 'description',
      content: 'API documentation, data format requirements, integration guides, and FAQ for AYADMO Analytics.',
    },
  ],
})

const sections = [
  { id: 'api', title: 'API overview' },
  { id: 'auth', title: 'Authentication' },
  { id: 'endpoints', title: 'Endpoints' },
  { id: 'data-format', title: 'Data format requirements' },
  { id: 'integration', title: 'Integration guides' },
  { id: 'faq', title: 'FAQ' },
]

const endpoints = [
  { method: 'GET', path: '/v1/indicators', description: 'List available economic indicators' },
  { method: 'GET', path: '/v1/indicators/:id', description: 'Get indicator time series' },
  { method: 'POST', path: '/v1/upload', description: 'Upload export data file' },
  { method: 'GET', path: '/v1/forecasts', description: 'Retrieve forecast results' },
]
</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <div class="flex flex-col lg:flex-row gap-12">
        <!-- Sidebar nav -->
        <aside class="lg:w-56 shrink-0">
          <nav class="sticky top-24 space-y-1">
            <a
              v-for="s in sections"
              :key="s.id"
              :href="`#${s.id}`"
              class="block rounded-lg px-3 py-2 text-sm text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-primary-dark dark:hover:text-accent-teal"
            >
              {{ s.title }}
            </a>
          </nav>
        </aside>

        <article class="flex-1 min-w-0 max-w-3xl">
          <header class="mb-12">
            <h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">Documentation</h1>
            <p class="mt-4 text-gray-600 dark:text-gray-400">
              API reference, data requirements, and integration guides.
            </p>
          </header>

          <section id="api" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mb-4">
              API overview
            </h2>
            <p class="text-gray-700 dark:text-gray-300">
              The AYADMO Analytics API is RESTful and returns JSON. Base URL: <code class="rounded bg-gray-100 dark:bg-gray-800 px-1">https://api.ayadmo-analytics.com</code>. All requests require an API key in the <code class="rounded bg-gray-100 dark:bg-gray-800 px-1">Authorization</code> header.
            </p>
          </section>

          <section id="auth" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mb-4">
              Authentication
            </h2>
            <p class="text-gray-700 dark:text-gray-300">
              Include your API key in the request header: <code class="rounded bg-gray-100 dark:bg-gray-800 px-1">Authorization: Bearer YOUR_API_KEY</code>. You can generate and manage keys in the dashboard under Settings → API.
            </p>
          </section>

          <section id="endpoints" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mb-4">
              Endpoints
            </h2>
            <div class="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700">
              <table class="w-full text-left text-sm">
                <thead class="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th class="px-4 py-3 font-semibold">Method</th>
                    <th class="px-4 py-3 font-semibold">Path</th>
                    <th class="px-4 py-3 font-semibold">Description</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
                  <tr
                    v-for="ep in endpoints"
                    :key="ep.path"
                    class="bg-white dark:bg-gray-800/50"
                  >
                    <td class="px-4 py-3">
                      <span
                        class="rounded px-2 py-0.5 font-mono text-xs"
                        :class="
                          ep.method === 'GET'
                            ? 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300'
                            : 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300'
                        "
                      >
                        {{ ep.method }}
                      </span>
                    </td>
                    <td class="px-4 py-3 font-mono text-gray-700 dark:text-gray-300">{{ ep.path }}</td>
                    <td class="px-4 py-3 text-gray-600 dark:text-gray-400">{{ ep.description }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="data-format" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mb-4">
              Data format requirements
            </h2>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              Upload Excel (.xlsx, .xls) or CSV files. Each row should represent one export transaction or aggregate record. Recommended columns:
            </p>
            <ul class="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li><strong>date</strong> – Transaction or period date (YYYY-MM-DD)</li>
              <li><strong>commodity</strong> – Product or HS code</li>
              <li><strong>value_usd</strong> – Value in USD</li>
              <li><strong>destination</strong> – Country or region code</li>
              <li>Optional: quantity, unit, currency (we normalize to USD)</li>
            </ul>
          </section>

          <section id="integration" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mb-4">
              Integration guides
            </h2>
            <ol class="list-decimal pl-6 space-y-2 text-gray-700 dark:text-gray-300">
              <li>Obtain your API key from the dashboard.</li>
              <li>Use the upload endpoint to send your export file (multipart/form-data).</li>
              <li>Poll the job status or use webhooks to know when processing is complete.</li>
              <li>Fetch forecasts and indicators via the REST endpoints.</li>
            </ol>
          </section>

          <section id="faq" class="mb-12 scroll-mt-24">
            <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mb-4">
              FAQ
            </h2>
            <ul class="space-y-4">
              <li class="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                <h3 class="font-semibold text-gray-900 dark:text-gray-100">What file size is supported?</h3>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Up to 50 MB per file for CSV/Excel. For larger datasets, use chunked uploads or contact us.
                </p>
              </li>
              <li class="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                <h3 class="font-semibold text-gray-900 dark:text-gray-100">Which indicators are available?</h3>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  Exchange rates (e.g. USD/NGN), commodity prices (cocoa, oil, etc.), GDP growth, inflation (CPI), and more. See the /v1/indicators list.
                </p>
              </li>
              <li class="rounded-xl border border-gray-200 dark:border-gray-700 p-4">
                <h3 class="font-semibold text-gray-900 dark:text-gray-100">How often are forecasts updated?</h3>
                <p class="mt-1 text-sm text-gray-600 dark:text-gray-400">
                  When you upload new data or run a refresh, forecasts are recomputed. Indicator data is updated at least daily.
                </p>
              </li>
            </ul>
          </section>
        </article>
      </div>
    </div>
  </div>
</template>
