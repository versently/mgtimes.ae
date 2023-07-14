import { _ as __nuxt_component_1 } from "./nuxt-img-5b94f9e5.js";
import _sfc_main$1 from "./ContentDoc-a5c59cd8.js";
import _sfc_main$2 from "./ContentList-9870115f.js";
import { a as useI18n, b as useRoute, u as useHead } from "../server.mjs";
import { u as useLocalePath } from "./composables-0959ee17.js";
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import { u as useAsyncData, q as queryContent } from "./query-78cd0dad.js";
import "destr";
import "devalue";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "defu";
import "ufo";
import "h3";
import "./ContentRenderer-44088b12.js";
import "./ContentRendererMarkdown-30b2a030.js";
import "scule";
import "property-information";
import "./ContentQuery-3fcff742.js";
import "ohash";
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
import "cookie-es";
import "js-cookie";
import "is-https";
import "./utils-3b18a1a6.js";
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "Home page": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Home page" } },
        "Services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Services" } },
        "Order a service": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Order a service" } },
        "More information": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "More information" } },
        "Additional services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Additional services" } },
        "From": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "From" } }
      },
      "ru": {
        "Home page": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Главная страница" } },
        "Services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Сервисы" } },
        "Order a service": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Заказать услугу" } },
        "More information": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Больше информации" } },
        "Additional services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Дополнительные услуги" } },
        "From": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "От" } }
      }
    }
  });
}
const _sfc_main = {
  __name: "[...slug]",
  __ssrInlineRender: true,
  async setup(__props) {
    let __temp, __restore;
    const { t } = useI18n({
      useScope: "local"
    });
    const localePath = useLocalePath();
    useRoute();
    const { path } = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`content-${path}`, async () => {
      let service = queryContent().where({ _path: path }).findOne();
      let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
      return {
        service: await service,
        surround: await surround
      };
    })), __temp = await __temp, __restore(), __temp);
    data.value.surround;
    useHead({
      title: data.value.service.title,
      meta: [
        { name: "description", content: data.value.service.description }
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: `https://site.com/${data.value.service .img}`,
        // },
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_1;
      const _component_ContentDoc = _sfc_main$1;
      const _component_ContentList = _sfc_main$2;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="service private-events"><div class="service__container private-events__container"><div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item"${ssrRenderAttr("href", unref(localePath)("index"))}><span itemprop="name">${ssrInterpolate(unref(t)("Home page"))}</span><meta itemprop="position" content="1"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a${ssrRenderAttr("href", unref(localePath)("/services"))} itemprop="item"><span itemprop="name">${ssrInterpolate(unref(t)("Services"))}</span><meta itemprop="position" content="2"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><span itemprop="name">${ssrInterpolate(unref(data).service.h1)}</span><meta itemprop="position" content="3"></li></div><h1 class="service__title private-events__title">${ssrInterpolate(unref(data).service.h1)}</h1><div class="service__main-content private-events__main-content"><p class="service__text-01 private-events__text-01">${ssrInterpolate(unref(data).service.about)}</p><div class="service__price private-events__price">${ssrInterpolate(unref(t)("From"))} ${ssrInterpolate(unref(data).service.price)}$ </div><button class="service__btn private-events__btn btn-order">${ssrInterpolate(unref(t)("Order a service"))}</button></div><div class="service__page-wrapper-img private-events__page-wrapper-img">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: `/assets/img/services/${unref(data).service.img}.webp`,
        alt: unref(data).service.title
      }, null, _parent));
      _push(`</div><div class="service__main-content private-events__main-content">`);
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      _push(`</div></div><div class="additional-services-section"><div class="additional-services-section__container"><div class="additional-services-section__section-name"><h3>${ssrInterpolate(unref(t)("Additional services"))}</h3></div><div class="additional-services-section__content"><div class="additional-services-section__swiper">`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: unref(localePath)("/services"),
        query: {
          only: ["h1", "about", "tags", "_path", "img"],
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
            _push2(`<div class="additional-services-section__swiper-wrapper"${_scopeId}><!--[-->`);
            ssrRenderList(list, (services) => {
              _push2(`<div class="additional-services-section__swiper-slide"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `/assets/img/services/${services.img}.webp`,
                alt: services.title
              }, null, _parent2, _scopeId));
              _push2(`<div class="additional-services-section__slide-description"${_scopeId}><div class="additional-services-section__slide-title"${_scopeId}>${ssrInterpolate(services.h1)}</div><div class="additional-services-section__slide-text"${_scopeId}>${ssrInterpolate(services.about)}</div><div class="additional-services-section__slide-more"${_scopeId}><a${ssrRenderAttr("href", services._path)}${_scopeId}>${ssrInterpolate(unref(t)("More information"))}</a></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "additional-services-section__swiper-wrapper" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (services) => {
                  return openBlock(), createBlock("div", {
                    class: "additional-services-section__swiper-slide",
                    key: services._path
                  }, [
                    createVNode(_component_nuxt_img, {
                      src: `/assets/img/services/${services.img}.webp`,
                      alt: services.title
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "additional-services-section__slide-description" }, [
                      createVNode("div", { class: "additional-services-section__slide-title" }, toDisplayString(services.h1), 1),
                      createVNode("div", { class: "additional-services-section__slide-text" }, toDisplayString(services.about), 1),
                      createVNode("div", { class: "additional-services-section__slide-more" }, [
                        createVNode("a", {
                          href: services._path
                        }, toDisplayString(unref(t)("More information")), 9, ["href"])
                      ])
                    ])
                  ]);
                }), 128))
              ])
            ];
          }
        }),
        "not-found": withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>No services found.</p>`);
          } else {
            return [
              createVNode("p", null, "No services found.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="additional-services-section__swiper-scrollbar"></div></div></div></div></div></div></main>`);
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-9f071308.js.map
