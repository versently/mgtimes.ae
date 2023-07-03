import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
const error_vue_vue_type_style_index_0_lang = "";
const _sfc_main = {
  __name: "error",
  __ssrInlineRender: true,
  props: ["error"],
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<section${ssrRenderAttrs(mergeProps({ class: "nofound" }, _attrs))}><div class="front-section__container nofound__wrapper"><h1 class="front-section__title">404</h1><div class="front-section__line"></div><div class="front-section__text">Page not found</div><a href="/" class="front-section__text">Go back to the main page</a></div></section>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("error.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _sfc_main$1 = _sfc_main;
export {
  _sfc_main$1 as default
};
//# sourceMappingURL=error-component-73e9a13f.js.map
