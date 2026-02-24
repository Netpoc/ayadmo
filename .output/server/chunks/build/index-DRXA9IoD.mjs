import { _ as __nuxt_component_0 } from './nuxt-link-CCHD2ZLS.mjs';
import { defineComponent, withCtx, createTextVNode, mergeProps, ref, computed, unref, watch, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { a as useIntersectionObserver } from './index-CCiy6Pq_.mjs';
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

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "FeatureCard",
  __ssrInlineRender: true,
  props: {
    title: {},
    description: {},
    icon: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "group rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent-teal/30" }, _attrs))}>`);
      if (__props.icon) {
        _push(`<div class="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary-dark/10 dark:bg-accent-teal/20 text-primary-dark dark:text-accent-teal text-2xl">${ssrInterpolate(__props.icon)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<h3 class="text-lg font-semibold text-primary-dark dark:text-accent-teal">${ssrInterpolate(__props.title)}</h3><p class="mt-2 text-sm text-gray-600 dark:text-gray-400">${ssrInterpolate(__props.description)}</p></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FeatureCard.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
function useCountUp(target, options = {}) {
  const { duration = 1500, start = 0, decimals = 0, elementRef } = options;
  const current = ref(start);
  const targetVal = computed(
    () => typeof target === "function" ? target() : unref(target)
  );
  const hasAnimated = ref(!elementRef);
  if (elementRef) {
    useIntersectionObserver(
      elementRef,
      ([{ isIntersecting }]) => {
        if (isIntersecting) hasAnimated.value = true;
      },
      { threshold: 0.2 }
    );
  }
  watch(
    [hasAnimated, targetVal],
    () => {
      if (!hasAnimated.value) return;
      const end = typeof targetVal.value === "number" ? targetVal.value : Number(targetVal.value) || 0;
      {
        current.value = Number(end.toFixed(decimals));
        return;
      }
    },
    { immediate: true }
  );
  watch(
    targetVal,
    (val) => {
      if (!hasAnimated.value) current.value = start;
    },
    { immediate: true }
  );
  return { current, hasAnimated };
}
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "StatsCard",
  __ssrInlineRender: true,
  props: {
    value: {},
    label: {},
    animate: { type: Boolean }
  },
  setup(__props) {
    const root = ref(null);
    const props = __props;
    const target = computed(() => {
      const v = props.value;
      if (typeof v === "number") return v;
      const num = parseInt(String(v).replace(/\D/g, ""), 10);
      return Number.isNaN(num) ? 0 : num;
    });
    const isNumeric = computed(() => typeof props.value === "number" || /^\d+/.test(String(props.value)));
    const prefix = computed(() => {
      var _a, _b;
      return (_b = (_a = String(props.value).match(/^[^\d]*/)) == null ? void 0 : _a[0]) != null ? _b : "";
    });
    const suffix = computed(() => {
      var _a, _b;
      return (_b = (_a = String(props.value).match(/[^\d]*$/)) == null ? void 0 : _a[0]) != null ? _b : "";
    });
    const { current } = useCountUp(
      () => target.value,
      {
        duration: 1500,
        decimals: 0,
        elementRef: props.animate ? root : void 0
      }
    );
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "root",
        ref: root,
        class: "rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 text-center transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:border-accent-teal/30"
      }, _attrs))}><div class="text-3xl font-bold text-primary-dark dark:text-accent-teal">`);
      if (__props.animate && unref(isNumeric)) {
        _push(`<!--[-->${ssrInterpolate(unref(prefix))}${ssrInterpolate(unref(current))}${ssrInterpolate(unref(suffix))}<!--]-->`);
      } else {
        _push(`<!--[-->${ssrInterpolate(__props.value)}<!--]-->`);
      }
      _push(`</div><p class="mt-2 text-sm text-gray-600 dark:text-gray-400">${ssrInterpolate(__props.label)}</p></div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/StatsCard.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "TestimonialCard",
  __ssrInlineRender: true,
  props: {
    quote: {},
    author: {},
    role: {},
    avatar: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 transition-all duration-300 hover:shadow-lg hover:border-accent-teal/30" }, _attrs))}><p class="text-gray-700 dark:text-gray-300 italic">&quot;${ssrInterpolate(__props.quote)}&quot;</p><div class="mt-4 flex items-center gap-3">`);
      if (__props.avatar) {
        _push(`<img${ssrRenderAttr("src", __props.avatar)}${ssrRenderAttr("alt", __props.author)} class="h-10 w-10 rounded-full object-cover" width="40" height="40" loading="lazy">`);
      } else {
        _push(`<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary-dark/10 dark:bg-accent-teal/20 text-primary-dark dark:text-accent-teal font-semibold">${ssrInterpolate(__props.author.charAt(0))}</div>`);
      }
      _push(`<div><div class="font-semibold text-primary-dark dark:text-accent-teal">${ssrInterpolate(__props.author)}</div>`);
      if (__props.role) {
        _push(`<div class="text-sm text-gray-500 dark:text-gray-400">${ssrInterpolate(__props.role)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/TestimonialCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "AYADMO Analytics \u2013 Data Intelligence Platform",
      meta: [
        {
          name: "description",
          content: "Transform your data into strategic economic insights. Real-time global indicators, correlation analysis, and 5-year forecasts."
        }
      ]
    });
    const features = [
      {
        title: "Data Processing",
        description: "Clean and structure raw export data from multiple sources into analysis-ready formats.",
        icon: "\u{1F4CA}"
      },
      {
        title: "Economic Intelligence",
        description: "Real-time global indicator integration: exchange rates, commodity prices, GDP, inflation.",
        icon: "\u{1F310}"
      },
      {
        title: "Correlation Analysis",
        description: "Identify key drivers and relationships between your data and economic indicators.",
        icon: "\u{1F517}"
      },
      {
        title: "Machine Learning",
        description: "Predict export performance using advanced ML models trained on your data.",
        icon: "\u{1F916}"
      },
      {
        title: "Forecasting",
        description: "Get 5-year projections and scenario analysis to support strategic planning.",
        icon: "\u{1F4C8}"
      },
      {
        title: "Interactive Dashboards",
        description: "Explore your data with intuitive visualizations and drill-down capabilities.",
        icon: "\u{1F4C9}"
      }
    ];
    const stats = [
      { value: "15+", label: "Economic Indicators Tracked", animate: true },
      { value: "5-Year", label: "Forecasts", animate: false },
      { value: "Real-time", label: "API Integration", animate: false },
      { value: "Multi-format", label: "Data Support", animate: false }
    ];
    const testimonials = [
      {
        quote: "AYADMO Analytics turned our scattered export data into a clear strategic asset. The correlation with FX and commodity prices is a game-changer.",
        author: "Sarah Chen",
        role: "Head of Trade, Data Co."
      },
      {
        quote: "We now run 5-year scenarios in minutes. The platform is intuitive and the support team is responsive.",
        author: "James Okonkwo",
        role: "CFO, AgriData Ltd"
      },
      {
        quote: "Finally, export intelligence that matches the quality of what we had for oil. Highly recommended.",
        author: "Amina Hassan",
        role: "Director of Strategy"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_FeatureCard = _sfc_main$3;
      const _component_StatsCard = _sfc_main$2;
      const _component_TestimonialCard = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(_attrs)}><section class="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary-dark to-[#0d3a8c] dark:from-primary-dark dark:to-[#051a4a] py-20 sm:py-28"><div class="absolute inset-0 opacity-30 bg-[length:200%_200%] animate-gradient-x" style="${ssrRenderStyle({ "background-image": "linear-gradient(\n            90deg,\n            transparent,\n            rgba(12, 171, 168, 0.2),\n            transparent,\n            rgba(255, 179, 71, 0.1)\n          )" })}"></div><div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center"><h1 class="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight"> AYADMO Analytics: Data Intelligence Platform </h1><p class="mt-6 text-xl text-white/90 max-w-2xl mx-auto"> Transform your export data into strategic economic insights </p><div class="mt-10 flex flex-wrap items-center justify-center gap-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/pricing",
        class: "inline-flex rounded-lg bg-accent-teal px-6 py-3 font-semibold text-white shadow-lg transition hover:scale-105 hover:shadow-xl"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Get Started `);
          } else {
            return [
              createTextVNode(" Get Started ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/demo",
        class: "inline-flex rounded-lg border-2 border-white/80 bg-white/10 px-6 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/20"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` View Demo `);
          } else {
            return [
              createTextVNode(" View Demo ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></section><section class="py-16 sm:py-24 bg-neutral-light dark:bg-gray-900/30"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center text-primary-dark dark:text-accent-teal mb-12"> Key capabilities </h2><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(features, (f) => {
        _push(ssrRenderComponent(_component_FeatureCard, {
          key: f.title,
          title: f.title,
          description: f.description,
          icon: f.icon
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-16 sm:py-24"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"><!--[-->`);
      ssrRenderList(stats, (s) => {
        _push(ssrRenderComponent(_component_StatsCard, {
          key: s.label,
          value: s.value,
          label: s.label,
          animate: s.animate
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section><section class="py-16 sm:py-24 bg-neutral-light dark:bg-gray-900/30"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"><h2 class="text-3xl font-bold text-center text-primary-dark dark:text-accent-teal mb-12"> What our clients say </h2><div class="grid md:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(testimonials, (t) => {
        _push(ssrRenderComponent(_component_TestimonialCard, {
          key: t.author,
          quote: t.quote,
          author: t.author,
          role: t.role
        }, null, _parent));
      });
      _push(`<!--]--></div></div></section></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DRXA9IoD.mjs.map
