<script setup lang="ts">
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Product',
      name: 'AYADMO Analytics Enterprise',
      description: 'Full platform access with unlimited uploads, all economic indicators, ML models, 5-year forecasts, API, and priority support.',
      offers: {
        '@type': 'Offer',
        price: '25',
        priceCurrency: 'USD',
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      },
    },
    {
      '@type': 'Product',
      name: 'AYADMO Analytics Starter',
      description: 'Basic analysis with limited uploads and core indicators.',
      offers: {
        '@type': 'Offer',
        price: '15',
        priceCurrency: 'USD',
        priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toISOString().slice(0, 10),
      },
    },
  ],
}

useHead({
  title: 'Pricing – AYADMO Analytics',
  meta: [
    {
      name: 'description',
      content:
        'Enterprise and Starter plans. Full platform access, unlimited uploads, 5-year forecasts, API, and priority support.',
    },
  ],
  link: [{ rel: 'canonical', href: 'https://ayadmo-analytics.com/pricing' }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify(structuredData),
    },
  ],
})

const enterpriseFeatures = [
  'Full platform access',
  'Unlimited data uploads',
  'All economic indicators',
  'Advanced ML models',
  '5-year forecasts',
  'API access',
  'Priority support',
  'Custom reporting',
]

const starterFeatures = ['Basic analysis only', 'Limited uploads', 'Core indicators', 'Email support']

const comparisonRows = [
  { feature: 'Full platform access', enterprise: true, starter: false },
  { feature: 'Unlimited uploads', enterprise: true, starter: false },
  { feature: 'All economic indicators', enterprise: true, starter: false },
  { feature: 'Advanced ML & 5-year forecasts', enterprise: true, starter: false },
  { feature: 'API access', enterprise: true, starter: false },
  { feature: 'Priority support', enterprise: true, starter: false },
  { feature: 'Custom reporting', enterprise: true, starter: false },
]

const billingMonthly = ref(true)
const contactModalOpen = ref(false)

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: 'Yes. You can upgrade from Starter to Enterprise at any time. We will prorate the onboarding fee.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept major credit cards and bank transfer for annual commitments.',
  },
  {
    q: 'Is there a free trial?',
    a: 'Contact us for a tailored demo and trial period for Enterprise.',
  },
]

</script>

<template>
  <div class="min-h-screen">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      <ContactModal v-model="contactModalOpen" />
      <header class="text-center mb-12">
        <h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">Pricing</h1>
        <p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Choose the plan that fits your export intelligence needs. Start with Starter or go full power with Enterprise.
        </p>
        <div class="mt-6 flex justify-center">
          <PriceToggle v-model="billingMonthly" disabled />
        </div>
      </header>

      <div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <PricingCard
          plan="Starter"
          :features="starterFeatures"
          cta-label="Get Started"
          cta-link="#signup"
          setup-fee="$500"
          monthly-price="$15.00"
        />
        <PricingCard
          plan="Enterprise"
          :featured="true"
          :features="enterpriseFeatures"
          cta-label="Start Your Analysis"
          cta-link="#signup"
          onboarding-price="$1,400.00"
          onboarding-strikethrough="$1,500.00"
          savings-badge="Save $100.00 on onboarding"
          monthly-price="$25.00"
        />
      </div>

      <!-- Comparison table -->
      <section class="mt-16">
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8">
          Enterprise vs Starter
        </h2>
        <div class="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto">
          <table class="w-full text-left">
            <thead class="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th class="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Feature</th>
                <th class="px-4 py-3 font-semibold text-primary-dark dark:text-accent-teal">Enterprise</th>
                <th class="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Starter</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr
                v-for="row in comparisonRows"
                :key="row.feature"
                class="bg-white dark:bg-gray-800/50"
              >
                <td class="px-4 py-3 text-gray-700 dark:text-gray-300">{{ row.feature }}</td>
                <td class="px-4 py-3">
                  <span v-if="row.enterprise" class="text-accent-teal font-medium">✓</span>
                  <span v-else class="text-gray-400">—</span>
                </td>
                <td class="px-4 py-3">
                  <span v-if="row.starter" class="text-accent-teal font-medium">✓</span>
                  <span v-else class="text-gray-400">—</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <!-- FAQ -->
      <section class="mt-16 max-w-2xl mx-auto">
        <h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8">
          Pricing FAQ
        </h2>
        <ul class="space-y-6">
          <li
            v-for="faq in faqs"
            :key="faq.q"
            class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800/50"
          >
            <h3 class="font-semibold text-gray-900 dark:text-gray-100">{{ faq.q }}</h3>
            <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">{{ faq.a }}</p>
          </li>
        </ul>
      </section>

      <div id="signup" class="mt-16 text-center">
        <button
          type="button"
          @click="contactModalOpen = true"
          class="inline-flex rounded-lg bg-primary-dark dark:bg-accent-teal px-8 py-4 font-semibold text-white transition hover:opacity-90"
        >
          Start Your Analysis
        </button>
      </div>
    </div>
  </div>
</template>
