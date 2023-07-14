import _sfc_main$1 from "./ContentList-8e5c205f.js";
import { _ as __nuxt_component_1 } from "./nuxt-img-f1f12a9c.js";
import { h as useI18n, b as useRoute, d as useHead } from "../server.mjs";
import { resolveComponent, unref, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import "destr";
import "devalue";
import { u as useLocalePath } from "./composables-d4c87181.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "./ContentQuery-0318a8c4.js";
import "./query-7e240301.js";
import "ufo";
import "ohash";
import "cookie-es";
import "h3";
import "./utils-6cb5eff9.js";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "js-cookie";
import "is-https";
import "defu";
const index_vue_vue_type_style_index_0_lang = "";
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Elite escort in Dubai! VIP escort services form MGTimes" } },
        "description": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Selection of escort models for escort meetings, as well as for events of any format, exhibitions, shooting, promo in Dubai 📞 +971 58 525 2213 ⚡" } },
        "Home page": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Home page" } },
        "More information": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "More information" } },
        "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Moscow.": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Dubai." } },
        "Services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Services" } },
        "Services 'MGTIMES'": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Services 'MGTIMES'" } },
        "From": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "From" } }
      },
      "ru": {
        "title": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Элитный эскорт в Дубае! VIP эскорт услуги от MGTimes" } },
        "description": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Подбор эскорт моделей для сопровождения встреч, а так же для мероприятий любого формата, выставок, съемок, промо в Дубае 📞 +971 58 525 2213 ⚡" } },
        "Home page": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Главная страница" } },
        "More information": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Больше информации" } },
        "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Moscow.": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "В нашем агентстве эскорта работают молодые и красивые девушки, способные скрасить любой вечер. Каждая из них запоминающаяся и яркая личность. Агентство «MGTimes» выставляет не только высокий ценз внешности, но и проводит мониторинг коммуникативных качеств: умения подавать и продавать себя, а также уделяет огромное внимание репутации и личным качествам. Основная наша цель – осуществить ваш досуг незабываемым и эффектным в компании с привлекательной девушкой для отдыха в Дубае." } },
        "Services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Сервисы" } },
        "Services 'MGTIMES'": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Сервисы 'MGTIMES'" } },
        "From": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "От" } }
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
    const route = useRoute();
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
      const _component_H1 = resolveComponent("H1");
      const _component_ContentList = _sfc_main$1;
      const _component_nuxt_img = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="services"><div class="services__container"><div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item"${ssrRenderAttr("href", unref(localePath)("index"))}><span itemprop="name">${ssrInterpolate(unref(t)("Home page"))}</span><meta itemprop="position" content="1"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><div itemprop="item"><span itemprop="name">${ssrInterpolate(unref(t)("Services"))}</span><meta itemprop="position" content="2"></div></li></div><div class="services__title">`);
      _push(ssrRenderComponent(_component_H1, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`${ssrInterpolate(unref(t)("Services 'MGTIMES'"))}`);
          } else {
            return [
              createTextVNode(toDisplayString(unref(t)("Services 'MGTIMES'")), 1)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: unref(route).path,
        query: {
          only: ["about", "h1", "tags", "_path", "img", "price"],
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
            _push2(`<div class="services__list"${_scopeId}><!--[-->`);
            ssrRenderList(list, (services) => {
              _push2(`<div class="services__service-item service-item"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `/assets/img/services/${services.img}.webp`,
                alt: services.title
              }, null, _parent2, _scopeId));
              _push2(`<div class="service-item__shell"${_scopeId}><div class="service-item__title"${_scopeId}>${ssrInterpolate(services.h1)}</div><div class="service-item__text"${_scopeId}>${ssrInterpolate(services.about)}</div><div class="service__price private-events__price"${_scopeId}>${ssrInterpolate(unref(t)("From"))} ${ssrInterpolate(services.price)}$ </div><div class="service-item__more-more"${_scopeId}><a${ssrRenderAttr("href", services._path)} class="service-item__more"${_scopeId}>${ssrInterpolate(unref(t)("More information"))}</a></div></div></div>`);
            });
            _push2(`<!--]--></div>`);
          } else {
            return [
              createVNode("div", { class: "services__list" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (services) => {
                  return openBlock(), createBlock("div", {
                    class: "services__service-item service-item",
                    key: services._path
                  }, [
                    createVNode(_component_nuxt_img, {
                      src: `/assets/img/services/${services.img}.webp`,
                      alt: services.title
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "service-item__shell" }, [
                      createVNode("div", { class: "service-item__title" }, toDisplayString(services.h1), 1),
                      createVNode("div", { class: "service-item__text" }, toDisplayString(services.about), 1),
                      createVNode("div", { class: "service__price private-events__price" }, toDisplayString(unref(t)("From")) + " " + toDisplayString(services.price) + "$ ", 1),
                      createVNode("div", { class: "service-item__more-more" }, [
                        createVNode("a", {
                          href: services._path,
                          class: "service-item__more"
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
      _push(`<div class="services__info">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: "/img/services/w-info.webp",
        alt: ""
      }, null, _parent));
      _push(`<div class="services__info-content"><div class="services__info-title">${ssrInterpolate(unref(t)("Services 'MGTIMES'"))}</div><div class="services__info-line"></div><div class="services__info-p">${ssrInterpolate(unref(t)(
        "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Moscow."
      ))}</div><div class="services__info-text-decoration"> No one is perfect but me. </div></div></div></div></div></main>`);
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/services/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-c96eec18.js.map
