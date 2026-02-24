<script setup lang="ts">
interface PricingFeature {
  text: string
}

interface Props {
  plan: string
  featured?: boolean
  features: PricingFeature[] | string[]
  ctaLabel: string
  ctaLink: string
  onboardingPrice?: string
  onboardingStrikethrough?: string
  savingsBadge?: string
  monthlyPrice: string
  setupFee?: string
}

const props = withDefaults(defineProps<Props>(), {
  featured: false,
  onboardingPrice: '',
  onboardingStrikethrough: '',
  savingsBadge: '',
  setupFee: '',
})

const featureList = computed(() =>
  props.features.map((f) => (typeof f === 'string' ? { text: f } : f))
)
</script>

<template>
  <div
    class="relative rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full"
    :class="
      featured
        ? 'border-accent-teal bg-primary-dark dark:bg-primary-dark/90 text-white shadow-lg scale-[1.02]'
        : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-accent-teal/50'
    "
  >
    <div v-if="savingsBadge" class="absolute -top-3 left-1/2 -translate-x-1/2">
      <span
        class="inline-block rounded-full bg-accent-gold px-3 py-1 text-xs font-semibold text-primary-dark"
      >
        {{ savingsBadge }}
      </span>
    </div>

    <h3
      class="text-xl font-bold"
      :class="featured ? 'text-white' : 'text-primary-dark dark:text-accent-teal'"
    >
      {{ plan }}
    </h3>

    <div class="mt-4 flex flex-wrap items-baseline gap-2">
      <template v-if="onboardingStrikethrough">
        <span
          class="text-lg"
          :class="featured ? 'text-white/80 line-through' : 'text-gray-500 dark:text-gray-400 line-through'"
        >
          {{ onboardingStrikethrough }}
        </span>
        <span
          class="text-2xl font-bold"
          :class="featured ? 'text-white' : 'text-primary-dark dark:text-accent-teal'"
        >
          {{ onboardingPrice }}
        </span>
        <span :class="featured ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'">
          onboarding
        </span>
      </template>
      <template v-if="setupFee && !onboardingStrikethrough">
        <span
          class="text-lg font-semibold"
          :class="featured ? 'text-white' : 'text-primary-dark dark:text-accent-teal'"
        >
          {{ setupFee }}
        </span>
        <span :class="featured ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'">
          setup
        </span>
      </template>
    </div>

    <div class="mt-2">
      <span
        class="text-2xl font-bold"
        :class="featured ? 'text-white' : 'text-primary-dark dark:text-accent-teal'"
      >
        {{ monthlyPrice }}
      </span>
      <span :class="featured ? 'text-white/80' : 'text-gray-600 dark:text-gray-400'">/month</span>
    </div>

    <ul class="mt-6 flex-1 space-y-3">
      <li
        v-for="(feature, i) in featureList"
        :key="i"
        class="flex items-start gap-2 text-sm"
        :class="featured ? 'text-white/90' : 'text-gray-700 dark:text-gray-300'"
      >
        <span class="mt-0.5 shrink-0 text-accent-teal" :class="featured ? 'text-accent-gold' : ''">
          ✓
        </span>
        {{ feature.text }}
      </li>
    </ul>

    <NuxtLink
      :to="ctaLink"
      class="mt-8 inline-flex justify-center rounded-lg px-6 py-3 text-center font-semibold transition-all duration-200 hover:scale-[1.02]"
      :class="
        featured
          ? 'bg-accent-teal text-white hover:bg-accent-teal/90 shadow-md'
          : 'bg-primary-dark dark:bg-accent-teal text-white hover:opacity-90'
      "
    >
      {{ ctaLabel }}
    </NuxtLink>
  </div>
</template>
