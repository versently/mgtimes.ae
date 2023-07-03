import { h as useI18n, e as useHead } from "../server.mjs";
import { u as useLocalePath } from "./composables-170d3d4c.js";
import "./index-e12b288f.js";
import { unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
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
import "destr";
import "devalue";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "defu";
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contacts - Escort agency «Mgtimes» in Dubai"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contact the contact numbers of the elite escort agency Mgtimes, the best models of Dubai! Organization of rest and meetings! 📞 +971 58 525 2213 ⚡"]);
        },
        "Home page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home page"]);
        },
        "Order an escort": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Order an escort"]);
        },
        "escort agency Mgtimes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["escort agency Mgtimes"]);
        },
        "Call or write for any question.": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Call or write for any question."]);
        },
        "Contacts": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Contacts"]);
        }
      },
      "ru": {
        "title": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Контакты - Эскорт агентство «Mgtimes»"]);
        },
        "description": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Обращайтесь по контактным телефонам элитного эскорт агентства Mgtimes, лучшие модели Дубая! Организация отдыха и встреч! 📞 +971 58 525 2213 ⚡"]);
        },
        "Home page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Главная"]);
        },
        "Order an escort": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Заказать эскорт"]);
        },
        "escort agency Mgtimes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["эскорт-агенство Mgtimes"]);
        },
        "Call or write for any question.": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Звоните или пишите по любому вопросу."]);
        },
        "Contacts": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Контакты"]);
        }
      }
    }
  });
}
const _sfc_main = {
  __name: "contacts",
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
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="contacts"><div class="contacts__container"><div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item"${ssrRenderAttr("href", unref(localePath)("index"))}><span itemprop="name">${ssrInterpolate(unref(t)("Home page"))}</span><meta itemprop="position" content="1"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><div itemprop="item"><span itemprop="name">${ssrInterpolate(unref(t)("Contacts"))}</span><meta itemprop="position" content="2"></div></li></div><div class="contacts__title">${ssrInterpolate(unref(t)("Contacts"))} / <h1 style="${ssrRenderStyle({ "display": "inline" })}">${ssrInterpolate(unref(t)("escort agency Mgtimes"))}</h1></div><div class="contacts__line"></div><div class="contacts__subtitle">${ssrInterpolate(unref(t)("Call or write for any question."))}</div><div class="contacts__line-02"></div><div class="contacts__list"><div class="contacts__list-item"><div class="contacts__social-name">WhatsApp</div><a href="https://wa.me/79775944345" class="contacts__social-link"> +971 58 525 2213 </a></div><div class="contacts__list-item"><div class="contacts__social-name">Telegram</div><a href="https://t.me/mgtimes" class="contacts__social-link"> @mgtimes </a></div><div class="contacts__list-item"><div class="contacts__social-name">Mail</div><a href="mailto:info@mgtimes.ru" class="contacts__social-link"> info@mgtimes.ru </a></div></div><button class="contacts__btn btn-order">${ssrInterpolate(unref(t)("Order an escort"))}</button></div></div></main>`);
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/contacts.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=contacts-bb449929.js.map
