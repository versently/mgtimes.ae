import { _ as __nuxt_component_1 } from "./nuxt-img-93f0105e.js";
import _sfc_main$1 from "./ContentDoc-1389021c.js";
import _sfc_main$2 from "./ContentList-3cc27dc7.js";
import { u as useI18n, a as useRoute } from "../server.mjs";
import { u as useLocalePath } from "./composables-abe3247e.js";
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import "hookable";
import { u as useHead } from "./index-6a088328.js";
import { u as useAsyncData, q as queryContent } from "./query-d51f290d.js";
import "destr";
import "devalue";
import "defu";
import "klona";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "ufo";
import "h3";
import "./ContentRenderer-96552a5f.js";
import "./ContentRendererMarkdown-326f59f8.js";
import "scule";
import "property-information";
import "./ContentQuery-e032db68.js";
import "ohash";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "./utils-2bbdf9e2.js";
function block0(Component) {
  Component.__i18n = Component.__i18n || [];
  Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "Home page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home page"]);
        },
        "Services": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Services"]);
        },
        "Order a service": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Order a service"]);
        },
        "More information": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["More information"]);
        },
        "Parties in Dubai": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Parties in Dubai"]);
        },
        "Choose your party": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Choose your party"]);
        },
        "From": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["From"]);
        }
      },
      "ru": {
        "Home page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Главная страница"]);
        },
        "Services": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Сервисы"]);
        },
        "Order a service": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Заказать услугу"]);
        },
        "More information": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Больше информации"]);
        },
        "Parties in Dubai": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Вечеринки в Дубае"]);
        },
        "Choose your party": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Выберите свою вечеринку"]);
        },
        "From": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["От"]);
        }
      }
    }
  });
}
const _sfc_main = {
  __name: "[slug]",
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
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "" }, _attrs))}><div class="service private-events"><div class="service__container private-events__container"><div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item"${ssrRenderAttr("href", unref(localePath)("index"))}><span itemprop="name">${ssrInterpolate(unref(t)("Home page"))}</span><meta itemprop="position" content="1"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a${ssrRenderAttr("href", unref(localePath)("/services"))} itemprop="item"><span itemprop="name">${ssrInterpolate(unref(t)("Services"))}</span><meta itemprop="position" content="2"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a${ssrRenderAttr("href", unref(localePath)("/services/parties-in-dubai"))} itemprop="item"><span itemprop="name">${ssrInterpolate(unref(t)("Parties in Dubai"))}</span><meta itemprop="position" content="2"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><span itemprop="name">${ssrInterpolate(unref(data).service.h1)}</span><meta itemprop="position" content="3"></li></div><h1 class="service__title private-events__title">${ssrInterpolate(unref(data).service.h1)}</h1><div class="service__main-content private-events__main-content"><p class="service__text-01 private-events__text-01">${ssrInterpolate(unref(data).service.about)}</p><div class="service__price private-events__price">${ssrInterpolate(unref(t)("From"))} ${ssrInterpolate(unref(data).service.price)}$ </div><button class="service__btn private-events__btn btn-order">${ssrInterpolate(unref(t)("Order a service"))}</button></div><div class="service__page-wrapper-img private-events__page-wrapper-img">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: `/assets/img/services/${unref(data).service.img}.webp`,
        alt: unref(data).service.title
      }, null, _parent));
      _push(`</div><div class="service__main-content private-events__main-content">`);
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      _push(`</div></div><div class="additional-services-section"><div class="additional-services-section__container"><div class="additional-services-section__section-name"><h3>${ssrInterpolate(unref(t)("Parties in Dubai"))}</h3></div><div class="additional-services-section__content"><div class="additional-services-section__swiper">`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: unref(localePath)("/services/parties-in-dubai/"),
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
            ssrRenderList(list.slice(1), (services) => {
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
                (openBlock(true), createBlock(Fragment, null, renderList(list.slice(1), (services) => {
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/parties-in-dubai/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_slug_-45966e4e.js.map
