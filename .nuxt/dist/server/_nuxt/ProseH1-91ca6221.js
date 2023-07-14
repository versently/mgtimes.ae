import { u as useRuntimeConfig } from "../server.mjs";
import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import "destr";
import "devalue";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderSlot } from "vue/server-renderer";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "h3";
import "ufo";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "defu";
function _optionalChain(ops) {
  let lastAccessLHS = void 0;
  let value = ops[0];
  let i = 1;
  while (i < ops.length) {
    const op = ops[i];
    const fn = ops[i + 1];
    i += 2;
    if ((op === "optionalAccess" || op === "optionalCall") && value == null) {
      return void 0;
    }
    if (op === "access" || op === "optionalAccess") {
      lastAccessLHS = value;
      value = fn(value);
    } else if (op === "call" || op === "optionalCall") {
      value = fn((...args) => value.call(lastAccessLHS, ...args));
      lastAccessLHS = void 0;
    }
  }
  return value;
}
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "ProseH1",
  __ssrInlineRender: true,
  props: {
    id: null
  },
  setup(__props) {
    const heading = 1;
    const { anchorLinks } = useRuntimeConfig().public.content;
    const generate = _optionalChain([anchorLinks, "optionalAccess", (_) => _.depth]) >= heading && !_optionalChain([anchorLinks, "optionalAccess", (_2) => _2.exclude, "access", (_3) => _3.includes, "call", (_4) => _4(heading)]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<h1${ssrRenderAttrs(mergeProps({ id: __props.id }, _attrs))}>`);
      if (unref(generate)) {
        _push(`<a${ssrRenderAttr("href", `#${__props.id}`)}>`);
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
        _push(`</a>`);
      } else {
        ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      }
      _push(`</h1>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseH1.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ProseH1-91ca6221.js.map
