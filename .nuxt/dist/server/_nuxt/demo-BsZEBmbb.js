import { defineComponent, createElementBlock, shallowRef, getCurrentInstance, provide, cloneVNode, h, computed, mergeProps, withCtx, createVNode, useSSRContext } from "vue";
import "/Users/peterayenoto/netpoc/analytics/node_modules/hookable/dist/index.mjs";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { u as useHead } from "./v3-C_DeqUUn.js";
import "/Users/peterayenoto/netpoc/analytics/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "/Users/peterayenoto/netpoc/analytics/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/peterayenoto/netpoc/analytics/node_modules/unctx/dist/index.mjs";
import "/Users/peterayenoto/netpoc/analytics/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/peterayenoto/netpoc/analytics/node_modules/defu/dist/defu.mjs";
import "/Users/peterayenoto/netpoc/analytics/node_modules/ufo/dist/index.mjs";
defineComponent({
  name: "ServerPlaceholder",
  render() {
    return createElementBlock("div");
  }
});
const clientOnlySymbol = /* @__PURE__ */ Symbol.for("nuxt:client-only");
const __nuxt_component_0 = defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  ...false,
  setup(props, { slots, attrs }) {
    const mounted = shallowRef(false);
    const vm = getCurrentInstance();
    if (vm) {
      vm._nuxtClientOnly = true;
    }
    provide(clientOnlySymbol, true);
    return () => {
      if (mounted.value) {
        const vnodes = slots.default?.();
        if (vnodes && vnodes.length === 1) {
          return [cloneVNode(vnodes[0], attrs)];
        }
        return vnodes;
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return h(slot);
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "demo",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Demo – AYADMO Analytics",
      meta: [
        {
          name: "description",
          content: "Explore a sample dashboard and interactive chart. Download sample data and try it yourself."
        }
      ]
    });
    const sampleMetrics = [
      { label: "Total data (YTD)", value: "$2.4M" },
      { label: "Growth YoY", value: "+8.2%" },
      { label: "Top market", value: "EU" },
      { label: "Indicators linked", value: "12" }
    ];
    computed(() => ({
      tooltip: { trigger: "axis" },
      grid: { left: "3%", right: "4%", bottom: "3%", top: "10%", containLabel: true },
      xAxis: {
        type: "category",
        data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
      },
      yAxis: { type: "value", name: "Data value ($k)" },
      series: [
        {
          name: "Data value",
          type: "line",
          data: [120, 132, 145, 158, 168, 182, 195, 210, 228, 245, 260, 278],
          smooth: true,
          lineStyle: { color: "#0CABA8" },
          areaStyle: { color: "rgba(12, 171, 168, 0.2)" }
        }
      ]
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ClientOnly = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"><header class="text-center mb-12"><h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">Demo</h1><p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> Sample dashboard and export trend. Download sample data to explore the format we expect. </p></header><section class="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"><!--[-->`);
      ssrRenderList(sampleMetrics, (m) => {
        _push(`<div class="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-4 transition hover:shadow-lg"><div class="text-sm text-gray-600 dark:text-gray-400">${ssrInterpolate(m.label)}</div><div class="mt-1 text-2xl font-bold text-primary-dark dark:text-accent-teal">${ssrInterpolate(m.value)}</div></div>`);
      });
      _push(`<!--]--></section><section class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/50 p-6 mb-12"><h2 class="text-lg font-semibold text-primary-dark dark:text-accent-teal mb-4"> Sample export trend (fictional data) </h2>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, {
        fallback: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="h-80 flex items-center justify-center text-gray-500"${_scopeId}>Loading chart...</div>`);
          } else {
            return [
              createVNode("div", { class: "h-80 flex items-center justify-center text-gray-500" }, "Loading chart...")
            ];
          }
        })
      }, _parent));
      _push(`</section><section class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-neutral-light dark:bg-gray-800/50 p-8 mb-12"><h2 class="text-xl font-bold text-primary-dark dark:text-accent-teal mb-4"> Try it yourself </h2><p class="text-gray-600 dark:text-gray-400 mb-4"> Download a sample CSV to see the format we expect for export transactions. Use it to test your pipeline or share with your data team. </p><a href="/sample-export.csv" download class="inline-flex rounded-lg bg-primary-dark dark:bg-accent-teal px-6 py-3 font-semibold text-white transition hover:opacity-90"> Download sample CSV </a></section><section class="rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-800/50 p-12 text-center"><div class="aspect-video max-w-2xl mx-auto flex items-center justify-center rounded-lg bg-gray-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"> Video walkthrough coming soon </div></section></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/demo.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=demo-BsZEBmbb.js.map
