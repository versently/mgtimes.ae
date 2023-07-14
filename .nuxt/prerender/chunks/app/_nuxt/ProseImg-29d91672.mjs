import { e as useRuntimeConfig } from '../server.mjs';
import { defineComponent, computed, mergeProps, unref, useSSRContext } from 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue/index.mjs';
import { withBase } from 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ufo/dist/index.mjs';
import { ssrRenderAttrs } from 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/cookie-es/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/is-https/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/defu/dist/defu.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/radix3/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/packrup/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/pathe/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unified/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/mdast-util-to-string/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/micromark/lib/preprocess.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/micromark/lib/postprocess.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unist-util-stringify-position/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/micromark-util-character/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/micromark-util-chunked/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/micromark-util-resolve-all/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/remark-emoji/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/rehype-slug/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/remark-squeeze-paragraphs/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/rehype-external-links/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/remark-gfm/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/rehype-sort-attribute-values/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/rehype-sort-attributes/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/rehype-raw/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/remark-mdc/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/remark-parse/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/remark-rehype/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/mdast-util-to-hast/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/detab/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unist-builder/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/mdurl/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/slugify/slugify.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unist-util-position/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unist-util-visit/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/shiki-es/dist/shiki.node.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unenv/runtime/npm/consola.mjs';

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
  __name: "ProseImg",
  __ssrInlineRender: true,
  props: {
    src: {
      type: String,
      default: ""
    },
    alt: {
      type: String,
      default: ""
    },
    width: {
      type: [String, Number],
      default: void 0
    },
    height: {
      type: [String, Number],
      default: void 0
    }
  },
  setup(__props) {
    const props = __props;
    const refinedSrc = computed(() => {
      if (_optionalChain([props, "access", (_) => _.src, "optionalAccess", (_2) => _2.startsWith, "call", (_3) => _3("/")]) && !props.src.startsWith("//")) {
        return withBase(props.src, useRuntimeConfig().app.baseURL);
      }
      return props.src;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<img${ssrRenderAttrs(mergeProps({
        src: unref(refinedSrc),
        alt: __props.alt,
        width: __props.width,
        height: __props.height
      }, _attrs))}>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/@nuxt/content/dist/runtime/components/Prose/ProseImg.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=ProseImg-29d91672.mjs.map
