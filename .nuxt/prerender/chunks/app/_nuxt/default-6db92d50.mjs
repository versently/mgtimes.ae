import { p as publicAssetsURL } from '../../renderer.mjs';
import { unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot, useSSRContext, defineComponent, ref, mergeProps, createCommentVNode } from 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue/index.mjs';
import { u as useHead } from './index-6a088328.mjs';
import _sfc_main$3 from './ContentList-3cc27dc7.mjs';
import { a as useRoute, u as useI18n, _ as _export_sfc } from '../server.mjs';
import { b as useLocaleHead, u as useLocalePath, a as useSwitchLocalePath } from './composables-abe3247e.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderSlot, ssrRenderAttr, ssrRenderClass } from 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/devalue/index.js';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ufo/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import '../../nitro/nitro-prerenderer.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/node-fetch-native/dist/polyfill.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/destr/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/scule/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/klona/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/defu/dist/defu.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/drivers/memory.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/radix3/dist/index.mjs';
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
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@unhead/shared/dist/index.mjs';
import './ContentQuery-e032db68.mjs';
import './query-d51f290d.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/cookie-es/dist/index.mjs';
import './utils-2bbdf9e2.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@intlify/core-base/dist/core-base.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue-devtools-stub/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@intlify/vue-devtools/dist/vue-devtools.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/is-https/dist/index.mjs';

const removeUndefinedProps = (props) => Object.fromEntries(Object.entries(props).filter(([, value]) => value !== void 0));
const setupForUseMeta = (metaFactory, renderChild) => (props, ctx) => {
  useHead(() => metaFactory({ ...removeUndefinedProps(props), ...ctx.attrs }, ctx));
  return () => {
    var _a, _b;
    return renderChild ? (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a) : null;
  };
};
const globalProps = {
  accesskey: String,
  autocapitalize: String,
  autofocus: {
    type: Boolean,
    default: void 0
  },
  class: [String, Object, Array],
  contenteditable: {
    type: Boolean,
    default: void 0
  },
  contextmenu: String,
  dir: String,
  draggable: {
    type: Boolean,
    default: void 0
  },
  enterkeyhint: String,
  exportparts: String,
  hidden: {
    type: Boolean,
    default: void 0
  },
  id: String,
  inputmode: String,
  is: String,
  itemid: String,
  itemprop: String,
  itemref: String,
  itemscope: String,
  itemtype: String,
  lang: String,
  nonce: String,
  part: String,
  slot: String,
  spellcheck: {
    type: Boolean,
    default: void 0
  },
  style: String,
  tabindex: String,
  title: String,
  translate: String
};
const Link = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Link",
  inheritAttrs: false,
  props: {
    ...globalProps,
    as: String,
    crossorigin: String,
    disabled: Boolean,
    fetchpriority: String,
    href: String,
    hreflang: String,
    imagesizes: String,
    imagesrcset: String,
    integrity: String,
    media: String,
    prefetch: {
      type: Boolean,
      default: void 0
    },
    referrerpolicy: String,
    rel: String,
    sizes: String,
    title: String,
    type: String,
    /** @deprecated **/
    methods: String,
    /** @deprecated **/
    target: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((link) => ({
    link: [link]
  }))
});
const Title = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Title",
  inheritAttrs: false,
  setup: setupForUseMeta((_, { slots }) => {
    var _a, _b, _c;
    return {
      title: ((_c = (_b = (_a = slots.default) == null ? void 0 : _a.call(slots)) == null ? void 0 : _b[0]) == null ? void 0 : _c.children) || null
    };
  })
});
const Meta = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Meta",
  inheritAttrs: false,
  props: {
    ...globalProps,
    charset: String,
    content: String,
    httpEquiv: String,
    name: String,
    body: Boolean,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((props) => {
    const meta = { ...props };
    if (meta.httpEquiv) {
      meta["http-equiv"] = meta.httpEquiv;
      delete meta.httpEquiv;
    }
    return {
      meta: [meta]
    };
  })
});
const Head = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Head",
  inheritAttrs: false,
  setup: (_props, ctx) => () => {
    var _a, _b;
    return (_b = (_a = ctx.slots).default) == null ? void 0 : _b.call(_a);
  }
});
const Html = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Html",
  inheritAttrs: false,
  props: {
    ...globalProps,
    manifest: String,
    version: String,
    xmlns: String,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((htmlAttrs) => ({ htmlAttrs }), true)
});
const Body = /* @__PURE__ */ defineComponent({
  // eslint-disable-next-line vue/no-reserved-component-names
  name: "Body",
  inheritAttrs: false,
  props: {
    ...globalProps,
    renderPriority: [String, Number]
  },
  setup: setupForUseMeta((bodyAttrs) => ({ bodyAttrs }), true)
});
function block0$1(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "Home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home"]);
        },
        "Models": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Models"]);
        },
        "Services": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Services"]);
        },
        "Casting": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Casting"]);
        },
        "Contacts": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contacts"]);
        },
        "Media": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Media"]);
        },
        "Dubai": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Dubai"]);
        },
        "Moscow": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Moscow"]);
        },
        "Sankt-Peterburg": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Sankt-Peterburg"]);
        },
        "Order an escort": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Order an escort"]);
        },
        "City": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["City:"]);
        }
      },
      "ru": {
        "Home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"]);
        },
        "Models": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041C\u043E\u0434\u0435\u043B\u0438"]);
        },
        "Services": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0423\u0441\u043B\u0443\u0433\u0438"]);
        },
        "Casting": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041A\u0430\u0441\u0442\u0438\u043D\u0433"]);
        },
        "Contacts": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"]);
        },
        "Media": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041C\u0435\u0434\u0438\u0430"]);
        },
        "Dubai": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0414\u0443\u0431\u0430\u0439"]);
        },
        "Moscow": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041C\u043E\u0441\u043A\u0432\u0430"]);
        },
        "Sankt-Peterburg": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0421\u0430\u043D\u043A\u0442-\u041F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433"]);
        },
        "Order an escort": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u044D\u0441\u043A\u043E\u0440\u0442"]);
        },
        "City": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0413\u043E\u0440\u043E\u0434:"]);
        }
      }
    }
  });
}
const _sfc_main$2 = {
  __name: "Header",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    const localePath = useLocalePath();
    const switchLocalePath = useSwitchLocalePath();
    const { locale } = useI18n();
    const route = useRoute();
    const src = ref(null);
    if (route.path.startsWith("/cities/")) {
      src.value = "/cities/" + route.params.slug[0];
    } else {
      src.value = null;
    }
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentList = _sfc_main$3;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))}><div class="header__container"><div class="header__logo"><a${ssrRenderAttr("href", unref(localePath)("index"))}>MGTimes</a></div><div class="header__menu pc menu"><div class="menu__list"><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("index"))} class="menu__link">${ssrInterpolate(unref(t)("Home"))}</a></div><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("/models"))} class="menu__link">${ssrInterpolate(unref(t)("Models"))}</a></div><div class="menu__item"><div class="menu__services"><div class="select-city__select"><a${ssrRenderAttr("href", unref(localePath)("/services"))} class="select-city__title">${ssrInterpolate(unref(t)("Services"))}</a><div class="select-city__content">`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: unref(localePath)("/services"),
        query: {
          only: ["title", "_path", "h1"],
          where: {
            tags: {
              $contains: _ctx.filter
            }
          },
          $sensitivity: "base"
        }
      }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list, (\u0441ities) => {
              _push2(`<label class="select-city__label"${_scopeId}><a${ssrRenderAttr("href", \u0441ities._path)}${_scopeId}>${ssrInterpolate(\u0441ities.h1)}</a></label>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list, (\u0441ities) => {
                return openBlock(), createBlock("label", {
                  class: "select-city__label",
                  key: \u0441ities._path
                }, [
                  createVNode("a", {
                    href: \u0441ities._path
                  }, toDisplayString(\u0441ities.h1), 9, ["href"])
                ]);
              }), 128))
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>error \u0441ities</p>`);
          } else {
            return [
              createVNode("p", null, "error \u0441ities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("/casting"))} class="menu__link">${ssrInterpolate(unref(t)("Casting"))}</a></div><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("/contacts"))} class="menu__link">${ssrInterpolate(unref(t)("Contacts"))}</a></div><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("/media"))} class="menu__link">${ssrInterpolate(unref(t)("Media"))}</a></div></div></div><div class="header__select-city select-city"><div class="select-city__select">`);
      if (!(unref(src) == null)) {
        _push(`<div class="select-city__title"><span class="select-city__before">${ssrInterpolate(unref(t)("City"))}</span>`);
        _push(ssrRenderComponent(_component_ContentList, {
          path: unref(localePath)("/cities"),
          query: {
            only: ["title", "_path", "h1"],
            where: {
              tags: {
                $contains: _ctx.filter
              }
            },
            $sensitivity: "base"
          }
        }, {
          default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<!--[-->`);
              ssrRenderList(list, (\u0441ities) => {
                _push2(`<span${_scopeId}>`);
                if (\u0441ities._path == unref(src)) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(\u0441ities.h1)}</span>`);
                } else if (\u0441ities._path == "/ru" + unref(src)) {
                  _push2(`<span${_scopeId}>${ssrInterpolate(\u0441ities.h1)}</span>`);
                } else {
                  _push2(`<!---->`);
                }
                _push2(`</span>`);
              });
              _push2(`<!--]-->`);
            } else {
              return [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (\u0441ities) => {
                  return openBlock(), createBlock("span", {
                    key: \u0441ities._path
                  }, [
                    \u0441ities._path == unref(src) ? (openBlock(), createBlock("span", { key: 0 }, toDisplayString(\u0441ities.h1), 1)) : \u0441ities._path == "/ru" + unref(src) ? (openBlock(), createBlock("span", { key: 1 }, toDisplayString(\u0441ities.h1), 1)) : createCommentVNode("", true)
                  ]);
                }), 128))
              ];
            }
          }),
          "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<p${_scopeId}>error \u0441ities</p>`);
            } else {
              return [
                createVNode("p", null, "error \u0441ities")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div>`);
      } else if (unref(src) == null) {
        _push(`<div class="select-city__title"><span class="select-city__before">${ssrInterpolate(unref(t)("City"))}</span> ${ssrInterpolate(unref(t)("Dubai"))}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="select-city__content"><label class="select-city__label"><a${ssrRenderAttr("href", unref(localePath)("/"))}>${ssrInterpolate(unref(t)("Dubai"))}</a></label>`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: unref(localePath)("/cities"),
        query: {
          only: ["title", "_path", "h1"],
          where: {
            tags: {
              $contains: _ctx.filter
            }
          },
          $sensitivity: "base"
        }
      }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list, (\u0441ities) => {
              _push2(`<label class="select-city__label"${_scopeId}><a${ssrRenderAttr("href", \u0441ities._path)}${_scopeId}>${ssrInterpolate(\u0441ities.h1)}</a></label>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list, (\u0441ities) => {
                return openBlock(), createBlock("label", {
                  class: "select-city__label",
                  key: \u0441ities._path
                }, [
                  createVNode("a", {
                    href: \u0441ities._path
                  }, toDisplayString(\u0441ities.h1), 9, ["href"])
                ]);
              }), 128))
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>error \u0441ities</p>`);
          } else {
            return [
              createVNode("p", null, "error \u0441ities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<label class="select-city__label"><a href="https://mgtimes.ru/en">${ssrInterpolate(unref(t)("Moscow"))}</a></label><label class="select-city__label"><a href="https://mgtimes.ru/en/escort-modeli-sankt-peterburg.html">${ssrInterpolate(unref(t)("Sankt-Peterburg"))}</a></label></div></div></div><div class="header__select-language pc lang-box"><div class="lang-box__ru"><a class="${ssrRenderClass({ active: unref(locale) === "en" })}"${ssrRenderAttr("href", unref(switchLocalePath)("en"))}>EN</a></div><div class="lang-box__line"></div><div class="lang-box__en"><a class="${ssrRenderClass({ active: unref(locale) === "ru" })}"${ssrRenderAttr("href", unref(switchLocalePath)("ru"))}>RU</a></div></div><button class="header__btn-order pc btn-order">${ssrInterpolate(unref(t)("Order an escort"))}</button><div class="header__mobile-menu"><div class="header__menu menu"><div class="menu__list"><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("index"))} class="menu__link">${ssrInterpolate(unref(t)("Home"))}</a></div><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("/models"))} class="menu__link">${ssrInterpolate(unref(t)("Models"))}</a></div><div class="menu__item mob-menu__services"><div class="select-city__select"><div class="select-city__title"><a${ssrRenderAttr("href", unref(localePath)("/services"))}>${ssrInterpolate(unref(t)("Services"))}</a><div class="ar"></div></div><div class="select-city__content">`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: unref(localePath)("/services"),
        query: {
          only: ["title", "_path", "h1"],
          where: {
            tags: {
              $contains: _ctx.filter
            }
          },
          $sensitivity: "base"
        }
      }, {
        default: withCtx(({ list }, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<!--[-->`);
            ssrRenderList(list, (\u0441ities) => {
              _push2(`<label class="select-city__label"${_scopeId}><a${ssrRenderAttr("href", \u0441ities._path)}${_scopeId}>${ssrInterpolate(\u0441ities.h1)}</a></label>`);
            });
            _push2(`<!--]-->`);
          } else {
            return [
              (openBlock(true), createBlock(Fragment, null, renderList(list, (\u0441ities) => {
                return openBlock(), createBlock("label", {
                  class: "select-city__label",
                  key: \u0441ities._path
                }, [
                  createVNode("a", {
                    href: \u0441ities._path
                  }, toDisplayString(\u0441ities.h1), 9, ["href"])
                ]);
              }), 128))
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>error \u0441ities</p>`);
          } else {
            return [
              createVNode("p", null, "error \u0441ities")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("/casting"))} class="menu__link">${ssrInterpolate(unref(t)("Casting"))}</a></div><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("/contacts"))} class="menu__link">${ssrInterpolate(unref(t)("Contacts"))}</a></div><div class="menu__item"><a${ssrRenderAttr("href", unref(localePath)("/media"))} class="menu__link">${ssrInterpolate(unref(t)("Media"))}</a></div></div></div><div class="header__select-language lang-box"><div class="lang-box__ru"><a class="${ssrRenderClass({ active: unref(locale) === "en" })}"${ssrRenderAttr("href", unref(switchLocalePath)("en"))}>EN</a></div><div class="lang-box__line"></div><div class="lang-box__en"><a class="${ssrRenderClass({ active: unref(locale) === "ru" })}"${ssrRenderAttr("href", unref(switchLocalePath)("ru"))}>RU</a></div></div><button class="header__btn-order btn-order">Order an escort</button></div><button class="header__btn-mobile-menu btn-mobile-menu"><span class="btn-mobile-menu__line-up"></span><span class="btn-mobile-menu__line-middle"></span><span class="btn-mobile-menu__line-bottom"></span></button></div></header>`);
    };
  }
};
if (typeof block0$1 === "function")
  block0$1(_sfc_main$2);
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Header.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_6 = _sfc_main$2;
const _imports_0 = "" + publicAssetsURL("img/popup-order/sprite.svg");
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "Home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home"]);
        },
        "Models": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Models"]);
        },
        "Services": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Services"]);
        },
        "Casting": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Casting"]);
        },
        "Contacts": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contacts"]);
        },
        "Media": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Media"]);
        },
        "The agency does not provide intimate services.": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["The agency does not provide intimate services."]);
        },
        "Order an escort": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Order an escort"]);
        },
        "Contact us": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contact us"]);
        },
        "Go ahead and write to us in a message convenient for you": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Go ahead and\xA7 write to us in a message convenient for you"]);
        },
        "Describe your wishes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Describe your wishes"]);
        },
        "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment.": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment."]);
        },
        "Have fun": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Have fun"]);
        },
        "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you"]);
        },
        "Go to Telegram": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Go to Telegram"]);
        },
        "Go to WhatsApp": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Go to WhatsApp"]);
        },
        "Privacy policy": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Privacy policy"]);
        }
      },
      "ru": {
        "Home": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0413\u043B\u0430\u0432\u043D\u0430\u044F"]);
        },
        "Models": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041C\u043E\u0434\u0435\u043B\u0438"]);
        },
        "Services": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0423\u0441\u043B\u0443\u0433\u0438"]);
        },
        "Casting": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041A\u0430\u0441\u0442\u0438\u043D\u0433"]);
        },
        "Contacts": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B"]);
        },
        "Media": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041C\u0435\u0434\u0438\u0430"]);
        },
        "The agency does not provide intimate services.": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0410\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \u043D\u0435 \u043F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u043B\u044F\u0435\u0442 \u0443\u0441\u043B\u0443\u0433\u0438 \u0438\u043D\u0442\u0438\u043C\u043D\u043E\u0433\u043E \u0445\u0430\u0440\u0430\u043A\u0442\u0435\u0440\u0430."]);
        },
        "Order an escort": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u044D\u0441\u043A\u043E\u0440\u0442"]);
        },
        "Contact us": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u0441 \u043D\u0430\u043C\u0438"]);
        },
        "Go ahead and write to us in a message convenient for you": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0434\u0438\u0442\u0435 \u0438 \u043D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043D\u0430\u043C \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u043C \u0434\u043B\u044F \u0432\u0430\u0441 \u043C\u0435\u0441\u0441\u0435\u0434\u0436\u0435\u0440\u0435"]);
        },
        "Describe your wishes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041E\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E\u0436\u0435\u043B\u0430\u043D\u0438\u044F"]);
        },
        "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment.": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0423\u043A\u0430\u0436\u0438\u0442\u0435 \u0443\u0441\u043B\u0443\u0433\u0443, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u0432\u0430\u0441 \u0438\u043D\u0442\u0435\u0440\u0435\u0441\u0443\u0435\u0442, \u0438 \u043D\u0430\u0448 \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043F\u043E\u0434\u0431\u0435\u0440\u0435\u0442 \u043C\u043E\u0434\u0435\u043B\u044C \u043F\u043E \u0432\u0430\u0448\u0438\u043C \u043F\u0440\u0435\u0434\u043F\u043E\u0447\u0442\u0435\u043D\u0438\u044F\u043C. \u0414\u043B\u044F \u043D\u043E\u0432\u044B\u0445 \u043A\u043B\u0438\u0435\u043D\u0442\u043E\u0432 \u043F\u043E\u0434\u0431\u043E\u0440 \u043C\u043E\u0434\u0435\u043B\u0438 \u043F\u0440\u043E\u0438\u0437\u0432\u043E\u0434\u0438\u0442\u0441\u044F \u043F\u043E \u043F\u0440\u0435\u0434\u043E\u043F\u043B\u0430\u0442\u0435."]);
        },
        "Have fun": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u0443\u0434\u043E\u0432\u043E\u043B\u044C\u0441\u0442\u0432\u0438\u0435"]);
        },
        "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u0414\u043E\u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0435\u0441\u044C \u043E \u0432\u0441\u0442\u0440\u0435\u0447\u0435, \u043F\u043E\u0441\u043B\u0435 \u043E\u0431\u0441\u0443\u0436\u0434\u0435\u043D\u0438\u044F \u0432\u0441\u0435\u0445 \u0434\u0435\u0442\u0430\u043B\u0435\u0439, \u043C\u0435\u043D\u0435\u0434\u0436\u0435\u0440 \u043D\u0430\u0448\u0435\u0433\u043E \u0430\u0433\u0435\u043D\u0441\u0442\u0432\u0430 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0443\u0435\u0442 \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0441\u0442\u0440\u0435\u0447\u0443 \u0441 \u0434\u0435\u0432\u0443\u0448\u043A\u043E\u0439"]);
        },
        "Go to Telegram": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 Telegram"]);
        },
        "Go to WhatsApp": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u0435\u0440\u0435\u0439\u0442\u0438 \u0432 WhatsApp"]);
        },
        "Privacy policy": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["\u041F\u043E\u043B\u0438\u0442\u0438\u043A\u0430 \u043A\u043E\u043D\u0444\u0438\u0434\u0435\u043D\u0446\u0438\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0438"]);
        }
      }
    }
  });
}
const _sfc_main$1 = {
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)} data-v-58f1e224><footer class="footer" data-v-58f1e224><div class="footer__container" data-v-58f1e224><div class="footer__up-block" data-v-58f1e224><div class="footer__logo" data-v-58f1e224><a${ssrRenderAttr("href", _ctx.localePath("index"))} data-v-58f1e224>MGTimes</a></div><div class="footer__clarification" data-v-58f1e224>${ssrInterpolate(unref(t)("The agency does not provide intimate services."))}</div></div><div class="footer__main-block" data-v-58f1e224><div class="footer__menu" data-v-58f1e224><div class="footer__list" data-v-58f1e224><div class="footer__item" data-v-58f1e224><a${ssrRenderAttr("href", _ctx.localePath("index"))} class="footer__link" data-v-58f1e224>${ssrInterpolate(unref(t)("Home"))}</a></div><div class="footer__item" data-v-58f1e224><a${ssrRenderAttr("href", _ctx.localePath("/models"))} class="footer__link" data-v-58f1e224>${ssrInterpolate(unref(t)("Models"))}</a></div><div class="footer__item" data-v-58f1e224><a${ssrRenderAttr("href", _ctx.localePath("/services"))} class="footer__link" data-v-58f1e224>${ssrInterpolate(unref(t)("Services"))}</a></div><div class="footer__item" data-v-58f1e224><a${ssrRenderAttr("href", _ctx.localePath("/casting"))} class="footer__link" data-v-58f1e224>${ssrInterpolate(unref(t)("Casting"))}</a></div><div class="footer__item" data-v-58f1e224><a${ssrRenderAttr("href", _ctx.localePath("/contacts"))} class="footer__link" data-v-58f1e224>${ssrInterpolate(unref(t)("Contacts"))}</a></div><div class="footer__item" data-v-58f1e224><a${ssrRenderAttr("href", _ctx.localePath("/media"))} class="footer__link" data-v-58f1e224>${ssrInterpolate(unref(t)("Media"))}</a></div></div><div class="footer__social" data-v-58f1e224><div class="footer__item" data-v-58f1e224><a href="https://www.facebook.com/mgtmodel" target="_blank" class="footer__link" data-v-58f1e224>Facebook</a></div><div class="footer__item" data-v-58f1e224><a href="https://instagram.com/mgtmodel" target="_blank" class="footer__link" data-v-58f1e224>Instagram</a></div></div></div></div><div class="footer__bottom-block" data-v-58f1e224><div class="footer__legal" data-v-58f1e224>\xA9 2023 MGTimes</div><span class="footer__legal" data-v-58f1e224><a class="footer-banner" href="https://www.eurogirlsescort.com" target="_blank" title="EuroGirlsEscort.com" data-v-58f1e224><img src="https://www.eurogirlsescort.com/dist/images/banners/88X31.jpg" alt="EuroGirlsEscort.com" title="EuroGirlsEscort.com" data-v-58f1e224></a><a class="footer__legal"${ssrRenderAttr("href", _ctx.localePath("/privacy-policy"))} data-v-58f1e224>${ssrInterpolate(unref(t)("Privacy policy"))}</a></span></div></div></footer><div class="popup-order" data-v-58f1e224><div class="popup-order__block" data-v-58f1e224><button class="popup-order__close" data-v-58f1e224><svg class="popup-order__close-svg" data-v-58f1e224><use${ssrRenderAttr("xlink:href", _imports_0)} data-v-58f1e224></use></svg></button><div class="popup-order__title" data-v-58f1e224>${ssrInterpolate(unref(t)("Order an escort"))}</div><div class="popup-order__list" data-v-58f1e224><div class="popup-order__list-item" data-v-58f1e224><div class="popup-order__item-number" data-v-58f1e224>01</div><div class="popup-order__item-title" data-v-58f1e224>${ssrInterpolate(unref(t)("Contact us"))}</div><div class="popup-order__item-text" data-v-58f1e224>${ssrInterpolate(unref(t)("Go ahead and write to us in a message convenient for you"))}</div></div><div class="popup-order__list-item" data-v-58f1e224><div class="popup-order__item-number" data-v-58f1e224>02</div><div class="popup-order__item-title" data-v-58f1e224>${ssrInterpolate(unref(t)("Describe your wishes"))}</div><div class="popup-order__item-text" data-v-58f1e224>${ssrInterpolate(unref(t)(
        "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment."
      ))}</div></div><div class="popup-order__list-item" data-v-58f1e224><div class="popup-order__item-number" data-v-58f1e224>03</div><div class="popup-order__item-title" data-v-58f1e224>${ssrInterpolate(unref(t)("Have fun"))}</div><div class="popup-order__item-text" data-v-58f1e224>${ssrInterpolate(unref(t)(
        "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you"
      ))}</div></div></div><div class="popup-order__buttons" data-v-58f1e224><a href="https://t.me/mgtimes" target="_blank" class="popup-order__btn" data-v-58f1e224>${ssrInterpolate(unref(t)("Go to Telegram"))} <svg class="popup-order__btn-svg" data-v-58f1e224><use${ssrRenderAttr("xlink:href", _imports_0 + "#telegram")} data-v-58f1e224></use></svg></a><a href="https://wa.me/79775944345" target="_blank" class="popup-order__btn" data-v-58f1e224>${ssrInterpolate(unref(t)("Go to WhatsApp"))} <svg class="popup-order__btn-svg" data-v-58f1e224><use${ssrRenderAttr("xlink:href", _imports_0 + "#whatsapp")} data-v-58f1e224></use></svg></a></div></div></div></div>`);
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main$1);
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_7 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-58f1e224"]]);
const _sfc_main = {
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    useI18n();
    const head = useLocaleHead({
      addDirAttribute: true,
      identifierAttribute: "id",
      addSeoAttributes: true
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Html = Html;
      const _component_Head = Head;
      const _component_Title = Title;
      const _component_Link = Link;
      const _component_Meta = Meta;
      const _component_Body = Body;
      const _component_Header = __nuxt_component_6;
      const _component_Footer = __nuxt_component_7;
      _push(`<div${ssrRenderAttrs(_attrs)}>`);
      _push(ssrRenderComponent(_component_Html, {
        lang: unref(head).htmlAttrs.lang,
        dir: unref(head).htmlAttrs.dir
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_Head, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_Title, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`${ssrInterpolate(_ctx.title)}`);
                      } else {
                        return [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(head).link, (link) => {
                    _push3(ssrRenderComponent(_component_Link, {
                      id: link.id,
                      rel: link.rel,
                      href: link.href,
                      hreflang: link.hreflang
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]--><!--[-->`);
                  ssrRenderList(unref(head).meta, (meta) => {
                    _push3(ssrRenderComponent(_component_Meta, {
                      id: meta.id,
                      property: meta.property,
                      content: meta.content
                    }, null, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    createVNode(_component_Title, null, {
                      default: withCtx(() => [
                        createTextVNode(toDisplayString(_ctx.title), 1)
                      ]),
                      _: 1
                    }),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(head).link, (link) => {
                      return openBlock(), createBlock(_component_Link, {
                        key: link.id,
                        id: link.id,
                        rel: link.rel,
                        href: link.href,
                        hreflang: link.hreflang
                      }, null, 8, ["id", "rel", "href", "hreflang"]);
                    }), 128)),
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(head).meta, (meta) => {
                      return openBlock(), createBlock(_component_Meta, {
                        key: meta.id,
                        id: meta.id,
                        property: meta.property,
                        content: meta.content
                      }, null, 8, ["id", "property", "content"]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Body, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="page" id="body"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Header, null, null, _parent3, _scopeId2));
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                  _push3(ssrRenderComponent(_component_Footer, null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", {
                      class: "page",
                      id: "body"
                    }, [
                      createVNode(_component_Header),
                      renderSlot(_ctx.$slots, "default"),
                      createVNode(_component_Footer)
                    ])
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_Head, null, {
                default: withCtx(() => [
                  createVNode(_component_Title, null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ]),
                    _: 1
                  }),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(head).link, (link) => {
                    return openBlock(), createBlock(_component_Link, {
                      key: link.id,
                      id: link.id,
                      rel: link.rel,
                      href: link.href,
                      hreflang: link.hreflang
                    }, null, 8, ["id", "rel", "href", "hreflang"]);
                  }), 128)),
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(head).meta, (meta) => {
                    return openBlock(), createBlock(_component_Meta, {
                      key: meta.id,
                      id: meta.id,
                      property: meta.property,
                      content: meta.content
                    }, null, 8, ["id", "property", "content"]);
                  }), 128))
                ]),
                _: 1
              }),
              createVNode(_component_Body, null, {
                default: withCtx(() => [
                  createVNode("div", {
                    class: "page",
                    id: "body"
                  }, [
                    createVNode(_component_Header),
                    renderSlot(_ctx.$slots, "default"),
                    createVNode(_component_Footer)
                  ])
                ]),
                _: 3
              })
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-6db92d50.mjs.map
