import _sfc_main$1 from "./ContentList-9870115f.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-5b94f9e5.js";
import { a as useI18n, u as useHead } from "../server.mjs";
import { u as useLocalePath } from "./composables-0959ee17.js";
import "./index-e12b288f.js";
import { unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "./ContentQuery-3fcff742.js";
import "hookable";
import "./query-78cd0dad.js";
import "ufo";
import "ohash";
import "cookie-es";
import "h3";
import "destr";
import "devalue";
import "klona";
import "./utils-3b18a1a6.js";
import "defu";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "js-cookie";
import "is-https";
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "type": 0, "body": { "type": 1, "cases": [{ "type": 2, "items": [{ "type": 3 }], "static": "Articles about escorts" }, { "type": 2, "items": [{ "type": 3 }], "static": "Media content Mgtimes Dubai" }] } },
        "description": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Escort news. The best articles about escorts on the site mgtimes.ae. Media content on the subject of escort. Escort blog." } },
        "Home page": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Home page" } },
        "Media": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Media" } },
        "More information": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "More information" } }
      },
      "ru": {
        "title": { "type": 0, "body": { "type": 1, "cases": [{ "type": 2, "items": [{ "type": 3 }], "static": "Статьи об эскорте" }, { "type": 2, "items": [{ "type": 3 }], "static": "Медиаконтент Mgtimes Дубай" }] } },
        "description": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Эскорт новости. Лучшие статьи об эскорте на сайте mgtimes.ae. Медийный контент на тему сопровождения. Эскорт блог." } },
        "Home page": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Главная" } },
        "Media": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Медиа" } },
        "More information": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Узнать подробнее" } }
      }
    }
  });
}
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { t } = useI18n({
      useScope: "local"
    });
    const localePath = useLocalePath();
    useHead({
      title: t("title"),
      meta: [
        {
          name: "description",
          content: t("description")
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_ContentList = _sfc_main$1;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="media"><div class="media__container"><div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item"${ssrRenderAttr("href", unref(localePath)("index"))}><span itemprop="name">${ssrInterpolate(unref(t)("Home page"))}</span><meta itemprop="position" content="1"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><div itemprop="item"><span itemprop="name">${ssrInterpolate(unref(t)("Media"))}</span><meta itemprop="position" content="2"></div></li></div><div class="media__title"><h1>${ssrInterpolate(unref(t)("Media"))}</h1></div>`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: unref(localePath)("/media"),
        query: {
          only: [
            "title",
            "description",
            "tags",
            "_path",
            "mainImage",
            "folder"
          ],
          sort: [{ date: -1 }],
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
            _push2(`<div class="media__content"${_scopeId}><!--[-->`);
            ssrRenderList(list, (media) => {
              _push2(`<div class="media__content-block odd"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `/assets/img/media/${media.folder}/${media.mainImage}`,
                alt: media.title
              }, null, _parent2, _scopeId));
              _push2(`<div class="media__content-block-info"${_scopeId}><div class="media__content-block-subtitle"${_scopeId}>${ssrInterpolate(media.title)}</div><div class="media__content-block-text"${_scopeId}>${ssrInterpolate(media.description)}</div><a class="media__content-block-more"${ssrRenderAttr("href", unref(localePath)(media._path))}${_scopeId}>${ssrInterpolate(unref(t)("More information"))}</a></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "media__content" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (media) => {
                  return openBlock(), createBlock("div", {
                    class: "media__content-block odd",
                    key: media._path
                  }, [
                    createVNode(_component_nuxt_img, {
                      src: `/assets/img/media/${media.folder}/${media.mainImage}`,
                      alt: media.title
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "media__content-block-info" }, [
                      createVNode("div", { class: "media__content-block-subtitle" }, toDisplayString(media.title), 1),
                      createVNode("div", { class: "media__content-block-text" }, toDisplayString(media.description), 1),
                      createVNode("a", {
                        class: "media__content-block-more",
                        href: unref(localePath)(media._path)
                      }, toDisplayString(unref(t)("More information")), 9, ["href"])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>No media found.</p>`);
          } else {
            return [
              createVNode("p", null, "No media found.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/media/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-84c1559f.js.map
