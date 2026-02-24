import { _ as __nuxt_component_0 } from './nuxt-link-CCHD2ZLS.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, toDisplayString, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { b as useDark, c as useToggle } from './index-CCiy6Pq_.mjs';
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

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const isDark = useDark({ storageKey: "ayadmo-theme" });
    useToggle(isDark);
    const mobileMenuOpen = ref(false);
    const navLinks = [
      { label: "Home", to: "/" },
      { label: "Features", to: "/features" },
      { label: "Pricing", to: "/pricing" },
      { label: "Demo", to: "/demo" },
      { label: "About", to: "/about" },
      { label: "Docs", to: "/docs" }
    ];
    function closeMobileMenu() {
      mobileMenuOpen.value = false;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen flex flex-col" }, _attrs))}><header class="sticky top-0 z-50 border-b border-gray-200 dark:border-gray-700 bg-white/95 dark:bg-[#1a1a2e]/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"><nav class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Main navigation"><div class="flex h-16 items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex items-center gap-2 text-primary-dark dark:text-accent-teal font-bold text-xl transition-opacity hover:opacity-90"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` AYADMO Analytics `);
          } else {
            return [
              createTextVNode(" AYADMO Analytics ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="hidden md:flex md:items-center md:gap-6"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          class: "text-gray-700 dark:text-gray-300 hover:text-primary-dark dark:hover:text-accent-teal transition-colors text-sm font-medium"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><button type="button" aria-label="Toggle dark mode" class="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">`);
      if (unref(isDark)) {
        _push(`<span class="text-lg">\u2600\uFE0F</span>`);
      } else {
        _push(`<span class="text-lg">\u{1F319}</span>`);
      }
      _push(`</button></div><div class="flex items-center gap-2 md:hidden"><button type="button" aria-label="Toggle dark mode" class="p-2 rounded-lg">`);
      if (unref(isDark)) {
        _push(`<span>\u2600\uFE0F</span>`);
      } else {
        _push(`<span>\u{1F319}</span>`);
      }
      _push(`</button><button type="button" aria-label="Open menu" class="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"><svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">`);
      if (!unref(mobileMenuOpen)) {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>`);
      } else {
        _push(`<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>`);
      }
      _push(`</svg></button></div></div><div class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4 space-y-1" style="${ssrRenderStyle(unref(mobileMenuOpen) ? null : { display: "none" })}"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          class: "block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg",
          onClick: closeMobileMenu
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></nav></header><main class="flex-1">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main><footer class="border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50 mt-auto"><div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12"><div class="flex flex-col md:flex-row md:items-center md:justify-between gap-6"><div class="text-gray-600 dark:text-gray-400 text-sm"> \xA9 ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} AYADMO Analytics. All rights reserved. </div><div class="flex flex-wrap gap-6"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.to,
          to: link.to,
          class: "text-sm text-gray-600 dark:text-gray-400 hover:text-primary-dark dark:hover:text-accent-teal transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.label)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.label), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></div></footer></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-DAxOxNz4.mjs.map
