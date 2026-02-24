<script setup lang="ts">
useHead({
  title: 'AYADMO Analytics – Export Intelligence Platform',
  meta: [
    {
      name: 'description',
      content:
        'Transform your export data into strategic economic insights. Real-time global indicators, correlation analysis, and 5-year forecasts.',
    },
  ],
})

const features = [
  {
    title: 'Data Processing',
    description: 'Clean and structure raw export data from multiple sources into analysis-ready formats.',
    icon: '📊',
  },
  {
    title: 'Economic Intelligence',
    description: 'Real-time global indicator integration: exchange rates, commodity prices, GDP, inflation.',
    icon: '🌐',
  },
  {
    title: 'Correlation Analysis',
    description: 'Identify key drivers and relationships between your exports and economic indicators.',
    icon: '🔗',
  },
  {
    title: 'Machine Learning',
    description: 'Predict export performance using advanced ML models trained on your data.',
    icon: '🤖',
  },
  {
    title: 'Forecasting',
    description: 'Get 5-year projections and scenario analysis to support strategic planning.',
    icon: '📈',
  },
  {
    title: 'Interactive Dashboards',
    description: 'Explore your data with intuitive visualizations and drill-down capabilities.',
    icon: '📉',
  },
]

const stats = [
  { value: '15+', label: 'Economic Indicators Tracked', animate: true },
  { value: '5-Year', label: 'Forecasts', animate: false },
  { value: 'Real-time', label: 'API Integration', animate: false },
  { value: 'Multi-format', label: 'Export Support', animate: false },
]

const testimonials = [
  {
    quote:
      'AYADMO Analytics turned our scattered export data into a clear strategic asset. The correlation with FX and commodity prices is a game-changer.',
    author: 'Sarah Chen',
    role: 'Head of Trade, Export Co.',
  },
  {
    quote:
      'We now run 5-year scenarios in minutes. The platform is intuitive and the support team is responsive.',
    author: 'James Okonkwo',
    role: 'CFO, AgriExports Ltd',
  },
  {
    quote:
      'Finally, export intelligence that matches the quality of what we had for oil. Highly recommended.',
    author: 'Amina Hassan',
    role: 'Director of Strategy',
  },
]
</script>

<template>
  <div>
    <!-- Hero -->
    <section
      class="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-[#0d3a8c] dark:from-primary-dark dark:to-[#051a4a] py-20 sm:py-28"
    >
      <div
        class="absolute inset-0 opacity-30 bg-[length:200%_200%] animate-gradient-x"
        style="
          background-image: linear-gradient(
            90deg,
            transparent,
            rgba(12, 171, 168, 0.2),
            transparent,
            rgba(255, 179, 71, 0.1)
          );
        "
      />
      <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
          AYADMO Analytics: Export Intelligence Platform
        </h1>
        <p class="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
          Transform your export data into strategic economic insights
        </p>
        <div class="mt-10 flex flex-wrap items-center justify-center gap-4">
          <NuxtLink
            to="/pricing"
            class="inline-flex rounded-lg bg-accent-teal px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
          >
            Get Started
          </NuxtLink>
          <NuxtLink
            to="/demo"
            class="inline-flex rounded-lg border-2 border-white/80 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
          >
            View Demo
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Features grid -->
    <section class="py-16 sm:py-24 bg-neutral-light dark:bg-gray-900/30">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-primary-dark dark:text-accent-teal mb-12">
          Key capabilities
        </h2>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            v-for="f in features"
            :key="f.title"
            :title="f.title"
            :description="f.description"
            :icon="f.icon"
          />
        </div>
      </div>
    </section>

    <!-- Stats -->
    <section class="py-16 sm:py-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <StatsCard
            v-for="s in stats"
            :key="s.label"
            :value="s.value"
            :label="s.label"
            :animate="s.animate"
          />
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-16 sm:py-24 bg-neutral-light dark:bg-gray-900/30">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-center text-primary-dark dark:text-accent-teal mb-12">
          What our clients say
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <TestimonialCard
            v-for="t in testimonials"
            :key="t.author"
            :quote="t.quote"
            :author="t.author"
            :role="t.role"
          />
        </div>
      </div>
    </section>
  </div>
</template>
