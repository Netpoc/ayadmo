import { defineComponent, ref, mergeProps, unref, useSSRContext, useModel, isRef } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrRenderTeleport, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useEventListener } from "./index-CCiy6Pq_.js";
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
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ContactForm",
  __ssrInlineRender: true,
  emits: ["submit"],
  setup(__props, { emit: __emit }) {
    const name = ref("");
    const email = ref("");
    const message = ref("");
    const submitting = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ class: "space-y-4" }, _attrs))}><div><label for="contact-name" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Name </label><input id="contact-name"${ssrRenderAttr("value", unref(name))} type="text" required class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal" placeholder="Your name"></div><div><label for="contact-email" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Email </label><input id="contact-email"${ssrRenderAttr("value", unref(email))} type="email" required class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal" placeholder="you@example.com"></div><div><label for="contact-message" class="block text-sm font-medium text-gray-700 dark:text-gray-300"> Message </label><textarea id="contact-message" rows="4" required class="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-2 text-gray-900 dark:text-gray-100 focus:border-accent-teal focus:ring-1 focus:ring-accent-teal" placeholder="Your message">${ssrInterpolate(unref(message))}</textarea></div><button type="submit"${ssrIncludeBooleanAttr(unref(submitting)) ? " disabled" : ""} class="w-full rounded-lg bg-primary-dark dark:bg-accent-teal px-4 py-3 font-semibold text-white transition hover:opacity-90 disabled:opacity-50">${ssrInterpolate(unref(submitting) ? "Sending..." : "Send message")}</button></form>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactForm.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "ContactModal",
  __ssrInlineRender: true,
  props: {
    "modelValue": { type: Boolean, ...{ default: false } },
    "modelModifiers": {}
  },
  emits: ["update:modelValue"],
  setup(__props) {
    const open = useModel(__props, "modelValue");
    function onClose() {
      open.value = false;
    }
    function onKeydown(e) {
      if (e.key === "Escape" && open.value) onClose();
    }
    useEventListener(void 0, "keydown", onKeydown);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactForm = _sfc_main$2;
      ssrRenderTeleport(_push, (_push2) => {
        if (open.value) {
          _push2(`<div class="fixed inset-0 z-[100] flex items-center justify-center p-4" aria-modal="true" role="dialog" aria-label="Contact form"><div class="absolute inset-0 bg-black/50" aria-hidden="true"></div>`);
          if (open.value) {
            _push2(`<div class="relative w-full max-w-md rounded-2xl bg-white dark:bg-gray-800 p-6 shadow-xl"><div class="flex items-center justify-between mb-4"><h2 class="text-xl font-bold text-primary-dark dark:text-accent-teal"> Contact us </h2><button type="button" class="rounded-lg p-2 text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-700" aria-label="Close"><svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg></button></div>`);
            _push2(ssrRenderComponent(_component_ContactForm, { onSubmit: onClose }, null, _parent));
            _push2(`</div>`);
          } else {
            _push2(`<!---->`);
          }
          _push2(`</div>`);
        } else {
          _push2(`<!---->`);
        }
      }, "body", false, _parent);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ContactModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "about",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "About – AYADMO Analytics",
      meta: [
        {
          name: "description",
          content: "Mission, team, and technology behind AYADMO Analytics. Python, FRED, World Bank API, and ML for export intelligence."
        }
      ]
    });
    const contactModalOpen = ref(false);
    const team = [
      { name: "Placeholder One", role: "Lead Analyst", image: "https://placehold.co/150x150?text=1" },
      { name: "Placeholder Two", role: "Data Engineer", image: "https://placehold.co/150x150?text=2" },
      { name: "Placeholder Three", role: "Product", image: "https://placehold.co/150x150?text=3" }
    ];
    const techStack = [
      "Python (Pandas, Scikit-learn, Statsmodels)",
      "FRED API, World Bank API",
      "Jupyter notebooks",
      "Machine learning models"
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContactModal = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen" }, _attrs))}><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16"><header class="text-center mb-16"><h1 class="text-4xl font-bold text-primary-dark dark:text-accent-teal">About us</h1><p class="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"> Economic intelligence for export growth. </p></header><section class="max-w-3xl mx-auto mb-16"><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mb-4">Mission</h2><p class="text-gray-700 dark:text-gray-300"> AYADMO Analytics exists to turn scattered export data and global economic indicators into clear, actionable intelligence. We help exporters and policymakers understand what drives performance and how to plan for the next five years. </p><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal mt-10 mb-4">Vision</h2><p class="text-gray-700 dark:text-gray-300"> We aim to be the default platform for export intelligence: trusted data processing, real-time indicators, rigorous correlation analysis, and forecasts that support strategic decisions. </p></section><section class="mb-16"><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8"> Team </h2><div class="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto"><!--[-->`);
      ssrRenderList(team, (member) => {
        _push(`<div class="text-center rounded-xl border border-gray-200 dark:border-gray-700 p-4 transition hover:shadow-lg"><img${ssrRenderAttr("src", member.image)}${ssrRenderAttr("alt", member.name)} class="mx-auto h-32 w-32 rounded-full object-cover" width="128" height="128" loading="lazy"><div class="mt-3 font-semibold text-primary-dark dark:text-accent-teal">${ssrInterpolate(member.name)}</div><div class="text-sm text-gray-600 dark:text-gray-400">${ssrInterpolate(member.role)}</div></div>`);
      });
      _push(`<!--]--></div></section><section class="mb-16"><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-8"> Technology </h2><ul class="max-w-2xl mx-auto space-y-2 text-gray-700 dark:text-gray-300"><!--[-->`);
      ssrRenderList(techStack, (tech) => {
        _push(`<li class="flex items-center gap-2"><span class="text-accent-teal">•</span> ${ssrInterpolate(tech)}</li>`);
      });
      _push(`<!--]--></ul></section><section class="max-w-xl mx-auto"><h2 class="text-2xl font-bold text-primary-dark dark:text-accent-teal text-center mb-6"> Contact </h2><p class="text-center text-gray-600 dark:text-gray-400 mb-6"> Email: contact@ayadmo-analytics.com · Phone: +1 (555) 000-0000 </p><button type="button" class="mx-auto block rounded-lg bg-primary-dark dark:bg-accent-teal px-6 py-3 font-semibold text-white transition hover:opacity-90"> Send a message </button></section></div>`);
      _push(ssrRenderComponent(_component_ContactModal, {
        modelValue: unref(contactModalOpen),
        "onUpdate:modelValue": ($event) => isRef(contactModalOpen) ? contactModalOpen.value = $event : null
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/about.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=about-BrV16ur9.js.map
