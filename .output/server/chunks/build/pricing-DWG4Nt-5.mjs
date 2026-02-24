import { defineComponent, ref, mergeProps, isRef, unref, withCtx, createTextVNode, useModel, mergeModels, computed, toDisplayString, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderClass, ssrIncludeBooleanAttr } from 'vue/server-renderer';
import { _ as __nuxt_component_0 } from './nuxt-link-CCHD2ZLS.mjs';
import { u as useHead } from './v3-C_DeqUUn.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import './server.mjs';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'unhead/plugins';
import 'vue-router';

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "PriceToggle",
  __ssrInlineRender: true,
  props: /* @__PURE__ */ mergeModels({
    disabled: { type: Boolean },
    monthlyLabel: {},
    annualLabel: {}
  }, {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  }),
  emits: ["update:modelValue"],
  setup(__props) {
    const model = useModel(__props, "modelValue");
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "inline-flex items-center gap-2 rounded-full bg-gray-100 dark:bg-gray-800 p-1" }, _attrs))}><button type="button" class="${ssrRenderClass([
        !model.value ? "bg-white dark:bg-gray-700 text-primary-dark dark:text-accent-teal shadow" : "text-gray-600 dark:text-gray-400",
        "rounded-full px-4 py-2 text-sm font-medium transition-all"
      ])}"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}>${ssrInterpolate((_a = __props.monthlyLabel) != null ? _a : "Monthly")}</button><button type="button" class="${ssrRenderClass([
        model.value ? "bg-white dark:bg-gray-700 text-primary-dark dark:text-accent-teal shadow" : "text-gray-600 dark:text-gray-400",
        "rounded-full px-4 py-2 text-sm font-medium transition-all"
      ])}"${ssrIncludeBooleanAttr(__props.disabled) ? " disabled" : ""}>${ssrInterpolate((_b = __props.annualLabel) != null ? _b : "Annual")}</button>`);
      if (__props.disabled) {
        _push(`<span class="ml-2 text-xs text-gray-500 dark:text-gray-400"> (Monthly only for now) </span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PriceToggle.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "PricingCard",
  __ssrInlineRender: true,
  props: {
    plan: {},
    featured: { type: Boolean, default: false },
    features: {},
    ctaLabel: {},
    ctaLink: {},
    onboardingPrice: { default: "" },
    onboardingStrikethrough: { default: "" },
    savingsBadge: { default: "" },
    monthlyPrice: {},
    setupFee: { default: "" }
  },
  setup(__props) {
    const props = __props;
    const featureList = computed(
      () => props.features.map((f) => typeof f === "string" ? { text: f } : f)
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: [
          "relative rounded-2xl border-2 p-6 sm:p-8 transition-all duration-300 hover:shadow-xl flex flex-col h-full",
          __props.featured ? "border-accent-teal bg-primary-dark dark:bg-primary-dark/90 text-white shadow-lg scale-[1.02]" : "border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 hover:border-accent-teal/50"
        ]
      }, _attrs))}>`);
      if (__props.savingsBadge) {
        _push(`<div class="absolute -top-3 left-1/2 -translate-x-1/2"><span class="inline-block rounded-full bg-accent-gold px-3 py-1 text-xs font-semibold text-primary-dark">${ssrInterpolate(__props.savingsBadge)}</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="${ssrRenderClass([__props.featured ? "text-white" : "text-primary-dark dark:text-accent-teal", "text-xl font-bold"])}">${ssrInterpolate(__props.plan)}</h3><div class="mt-4 flex flex-wrap items-baseline gap-2">`);
      if (__props.onboardingStrikethrough) {
        _push(`<!--[--><span class="${ssrRenderClass([__props.featured ? "text-white/80 line-through" : "text-gray-500 dark:text-gray-400 line-through", "text-lg"])}">${ssrInterpolate(__props.onboardingStrikethrough)}</span><span class="${ssrRenderClass([__props.featured ? "text-white" : "text-primary-dark dark:text-accent-teal", "text-2xl font-bold"])}">${ssrInterpolate(__props.onboardingPrice)}</span><span class="${ssrRenderClass(__props.featured ? "text-white/80" : "text-gray-600 dark:text-gray-400")}"> onboarding </span><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      if (__props.setupFee && !__props.onboardingStrikethrough) {
        _push(`<!--[--><span class="${ssrRenderClass([__props.featured ? "text-white" : "text-primary-dark dark:text-accent-teal", "text-lg font-semibold"])}">${ssrInterpolate(__props.setupFee)}</span><span class="${ssrRenderClass(__props.featured ? "text-white/80" : "text-gray-600 dark:text-gray-400")}"> setup </span><!--]-->`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mt-2"><span class="${ssrRenderClass([__props.featured ? "text-white" : "text-primary-dark dark:text-accent-teal", "text-2xl font-bold"])}">${ssrInterpolate(__props.monthlyPrice)}</span><span class="${ssrRenderClass(__props.featured ? "text-white/80" : "text-gray-600 dark:text-gray-400")}">/month</span></div><ul class="mt-6 flex-1 space-y-3"><!--[-->`);
      ssrRenderList(unref(featureList), (feature, i) => {
        _push(`<li class="${ssrRenderClass([__props.featured ? "text-white/90" : "text-gray-700 dark:text-gray-300", "flex items-start gap-2 text-sm"])}"><span class="${ssrRenderClass([__props.featured ? "text-accent-gold" : "", "mt-0.5 shrink-0 text-accent-teal"])}"> \u2713 </span> ${ssrInterpolate(feature.text)}</li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: __props.ctaLink,
        class: [
          "mt-8 inline-flex justify-center rounded-lg px-6 py-3 text-center font-semibold transition-all duration-200 hover:scale-[1.02]",
          __props.featured ? "bg-accent-teal text-white hover:bg-accent-teal/90 shadow-md" : "bg-primary-dark dark:bg-accent-teal text-white hover:opacity-90"
        ]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(__props.ctaLabel)}`);
          } else {
            return [
              createTextVNode(toDisplayString(__props.ctaLabel), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PricingCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "pricing",
  __ssrInlineRender: true,
  setup(__props) {
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Product",
          name: "AYADMO Analytics Enterprise",
          description: "Full platform access with unlimited uploads, all economic indicators, ML models, 5-year forecasts, API, and priority support.",
          offers: {
            "@type": "Offer",
            price: "25",
            priceCurrency: "USD",
            priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3).toISOString().slice(0, 10)
          }
        },
        {
          "@type": "Product",
          name: "AYADMO Analytics Starter",
          description: "Basic analysis with limited uploads and core indicators.",
          offers: {
            "@type": "Offer",
            price: "15",
            priceCurrency: "USD",
            priceValidUntil: new Date(Date.now() + 365 * 24 * 60 * 60 * 1e3).toISOString().slice(0, 10)
          }
        }
      ]
    };
    useHead({
      title: "Pricing \u2013 AYADMO Analytics",
      meta: [
        {
          name: "description",
          content: "Enterprise and Starter plans. Full platform access, unlimited uploads, 5-year forecasts, API, and priority support."
        }
      ],
      link: [{ rel: "canonical", href: "https://ayadmo-analytics.com/pricing" }],
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify(structuredData)
        }
      ]
    });
    const enterpriseFeatures = [
      "Full platform access",
      "Unlimited data uploads",
      "All economic indicators",
      "Advanced ML models",
      "5-year forecasts",
      "API access",
      "Priority support",
      "Custom reporting"
    ];
    const starterFeatures = ["Basic analysis only", "Limited uploads", "Core indicators", "Email support"];
    const comparisonRows = [
      { feature: "Full platform access", enterprise: true, starter: false },
      { feature: "Unlimited uploads", enterprise: true, starter: false },
      { feature: "All economic indicators", enterprise: true, starter: false },
      { feature: "Advanced ML & 5-year forecasts", enterprise: true, starter: false },
      { feature: "API access", enterprise: true, starter: false },
      { feature: "Priority support", enterprise: true, starter: false },
      { feature: "Custom reporting", enterprise: true, starter: false }
    ];
    const billingMonthly = ref(true);
    const faqs = [
      {
        q: "Can I switch plans later?",
        a: "Yes. You can upgrade from Starter to Enterprise at any time. We will prorate the onboarding fee."
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept major credit cards and bank transfer for annual commitments."
      },
      {
        q: "Is there a free trial?",
        a: "Contact us for a tailored demo and trial period for Enterprise."
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_PriceToggle = _sfc_main$2;
      const _component_PricingCard = _sfc_main$1;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"><header class="text-center mb-12"><h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">Pricing</h1><p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> Choose the plan that fits your export intelligence needs. Start with Starter or go full power with Enterprise. </p><div class="mt-6 flex justify-center">`);
      _push(ssrRenderComponent(_component_PriceToggle, {
        modelValue: unref(billingMonthly),
        "onUpdate:modelValue": ($event) => isRef(billingMonthly) ? billingMonthly.value = $event : null,
        disabled: ""
      }, null, _parent));
      _push(`</div></header><div class="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">`);
      _push(ssrRenderComponent(_component_PricingCard, {
        plan: "Starter",
        features: starterFeatures,
        "cta-label": "Get Started",
        "cta-link": "#signup",
        "setup-fee": "$500",
        "monthly-price": "$15.00"
      }, null, _parent));
      _push(ssrRenderComponent(_component_PricingCard, {
        plan: "Enterprise",
        featured: true,
        features: enterpriseFeatures,
        "cta-label": "Start Your Analysis",
        "cta-link": "#signup",
        "onboarding-price": "$1,400.00",
        "onboarding-strikethrough": "$1,500.00",
        "savings-badge": "Save $100.00 on onboarding",
        "monthly-price": "$25.00"
      }, null, _parent));
      _push(`</div><section class="mt-16"><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8"> Enterprise vs Starter </h2><div class="overflow-x-auto rounded-xl border border-gray-200 dark:border-gray-700 max-w-2xl mx-auto"><table class="w-full text-left"><thead class="bg-gray-50 dark:bg-gray-800"><tr><th class="px-4 py-3 font-semibold text-gray-900 dark:text-gray-100">Feature</th><th class="px-4 py-3 font-semibold text-primary-dark dark:text-accent-teal">Enterprise</th><th class="px-4 py-3 font-semibold text-gray-700 dark:text-gray-300">Starter</th></tr></thead><tbody class="divide-y divide-gray-200 dark:divide-gray-700"><!--[-->`);
      ssrRenderList(comparisonRows, (row) => {
        _push(`<tr class="bg-white dark:bg-gray-800/50"><td class="px-4 py-3 text-gray-700 dark:text-gray-300">${ssrInterpolate(row.feature)}</td><td class="px-4 py-3">`);
        if (row.enterprise) {
          _push(`<span class="text-accent-teal font-medium">\u2713</span>`);
        } else {
          _push(`<span class="text-gray-400">\u2014</span>`);
        }
        _push(`</td><td class="px-4 py-3">`);
        if (row.starter) {
          _push(`<span class="text-accent-teal font-medium">\u2713</span>`);
        } else {
          _push(`<span class="text-gray-400">\u2014</span>`);
        }
        _push(`</td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></section><section class="mt-16 max-w-2xl mx-auto"><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8"> Pricing FAQ </h2><ul class="space-y-6"><!--[-->`);
      ssrRenderList(faqs, (faq) => {
        _push(`<li class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white dark:bg-gray-800/50"><h3 class="font-semibold text-gray-900 dark:text-gray-100">${ssrInterpolate(faq.q)}</h3><p class="mt-2 text-sm text-gray-600 dark:text-gray-400">${ssrInterpolate(faq.a)}</p></li>`);
      });
      _push(`<!--]--></ul></section><div id="signup" class="mt-16 text-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "#signup",
        class: "inline-flex rounded-lg bg-primary-dark dark:bg-accent-teal px-8 py-4 font-semibold text-white transition hover:opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Start Your Analysis `);
          } else {
            return [
              createTextVNode(" Start Your Analysis ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/pricing.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=pricing-DWG4Nt-5.mjs.map
