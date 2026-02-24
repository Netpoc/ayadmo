import { defineComponent, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { u as useHead } from "./v3-C_DeqUUn.js";
import "/Users/peterayenoto/netpoc/analytics/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "/Users/peterayenoto/netpoc/analytics/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/peterayenoto/netpoc/analytics/node_modules/hookable/dist/index.mjs";
import "/Users/peterayenoto/netpoc/analytics/node_modules/unctx/dist/index.mjs";
import "/Users/peterayenoto/netpoc/analytics/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/peterayenoto/netpoc/analytics/node_modules/defu/dist/defu.mjs";
import "/Users/peterayenoto/netpoc/analytics/node_modules/ufo/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "features",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "How it works – AYADMO Analytics",
      meta: [
        {
          name: "description",
          content: "Upload your export data, we process and enrich it with economic indicators, run analysis and ML, and deliver 5-year forecasts and reports."
        }
      ]
    });
    const steps = [
      {
        number: 1,
        title: "Upload Your Data",
        description: "Upload Excel files containing your export transactions. We support multiple formats and column layouts."
      },
      {
        number: 2,
        title: "We Process & Enrich",
        description: "We clean and structure your data, then fetch real-time economic indicators (FX, commodities, GDP, inflation) to enrich each record."
      },
      {
        number: 3,
        title: "Analysis & Insights",
        description: "ML models identify patterns and correlations. You get clear drivers of export performance and risk factors."
      },
      {
        number: 4,
        title: "Forecasts & Reports",
        description: "Receive 5-year projections, scenario analysis, and export-ready reports and dashboards."
      }
    ];
    const sampleInsights = [
      { label: "Top export commodity", value: "Cocoa" },
      { label: "Strongest correlation", value: "USD/NGN" },
      { label: "Forecast growth (5Y)", value: "+12% CAGR" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"><header class="text-center mb-16"><h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">How it works</h1><p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> From raw export data to strategic insights in four clear steps. </p></header><section class="space-y-12"><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="flex flex-col md:flex-row gap-6 items-start"><div class="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary-dark dark:bg-accent-teal text-white text-xl font-bold">${ssrInterpolate(step.number)}</div><div class="flex-1"><h2 class="text-xl font-semibold text-primary-dark dark:text-accent-teal">${ssrInterpolate(step.title)}</h2><p class="mt-2 text-gray-600 dark:text-gray-400">${ssrInterpolate(step.description)}</p></div></div>`);
      });
      _push(`<!--]--></section><section class="mt-20"><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-10"> Data flow </h2><div class="flex flex-wrap items-center justify-center gap-4 sm:gap-6 py-8 px-4 rounded-2xl bg-neutral-light dark:bg-gray-800/50"><span class="rounded-lg bg-white dark:bg-gray-700 px-4 py-2 font-medium shadow">Data</span><span class="text-gray-400">→</span><span class="rounded-lg bg-white dark:bg-gray-700 px-4 py-2 font-medium shadow">Process</span><span class="text-gray-400">→</span><span class="rounded-lg bg-white dark:bg-gray-700 px-4 py-2 font-medium shadow">Analysis</span><span class="text-gray-400">→</span><span class="rounded-lg bg-white dark:bg-gray-700 px-4 py-2 font-medium shadow">Reports</span></div></section><section class="mt-20"><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8"> Example insights </h2><div class="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto"><!--[-->`);
      ssrRenderList(sampleInsights, (insight) => {
        _push(`<div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-4 text-center"><div class="text-sm text-gray-600 dark:text-gray-400">${ssrInterpolate(insight.label)}</div><div class="mt-1 text-lg font-semibold text-primary-dark dark:text-accent-teal">${ssrInterpolate(insight.value)}</div></div>`);
      });
      _push(`<!--]--></div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/features.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=features-B6NxdOLW.js.map
