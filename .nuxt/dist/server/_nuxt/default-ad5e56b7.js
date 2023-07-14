import { defineComponent, mergeProps, unref, useSSRContext, withCtx, createTextVNode, toDisplayString, createVNode, openBlock, createBlock, Fragment, renderList, renderSlot } from "vue";
import "./index-e12b288f.js";
import { u as useHead, _ as _export_sfc, a as useI18n, b as useRoute } from "../server.mjs";
import { u as useLocalePath, a as useSwitchLocalePath, b as useLocaleHead } from "./composables-0959ee17.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderClass, ssrRenderComponent, ssrRenderList, ssrRenderSlot } from "vue/server-renderer";
import "hookable";
import "destr";
import "devalue";
import "klona";
import "unhead";
import "ofetch";
import "#internal/nitro";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "@unhead/ssr";
import "@unhead/shared";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "defu";
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
const Header_vue_vue_type_style_index_0_scoped_f81b9fa1_lang = "";
function block0$1(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "Home": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Home" } },
        "Models": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Models" } },
        "Services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Services" } },
        "Casting": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Casting" } },
        "Contacts": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Contacts" } },
        "Media": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Media" } },
        "Dubai": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Dubai" } },
        "Moskow": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Moskow" } },
        "Sankt-Peterburg": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Sankt-Peterburg" } },
        "Order an escort": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Order an escort" } }
      },
      "ru": {
        "Home": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Главная" } },
        "Models": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Модели" } },
        "Services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Сервисы" } },
        "Casting": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Кастинг" } },
        "Contacts": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Контакты" } },
        "Media": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Медиа" } },
        "Dubai": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Дубай" } },
        "Moskow": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Москва" } },
        "Sankt-Peterburg": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Санкт-Петербург" } },
        "Order an escort": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Заказать эскорт" } }
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "header" }, _attrs))} data-v-f81b9fa1><div class="header__container" data-v-f81b9fa1><div class="header__logo" data-v-f81b9fa1><a${ssrRenderAttr("href", unref(localePath)("index"))} data-v-f81b9fa1>MGTimes</a></div><div class="header__menu menu" data-v-f81b9fa1><div class="menu__list" data-v-f81b9fa1><div class="menu__item" data-v-f81b9fa1><a${ssrRenderAttr("href", unref(localePath)("index"))} class="menu__link" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Home"))}</a></div><div class="menu__item" data-v-f81b9fa1><a${ssrRenderAttr("href", unref(localePath)("/models"))} class="menu__link" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Models"))}</a></div><div class="menu__item" data-v-f81b9fa1><a${ssrRenderAttr("href", unref(localePath)("/services"))} class="menu__link" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Services"))}</a></div><div class="menu__item" data-v-f81b9fa1><a${ssrRenderAttr("href", unref(localePath)("/casting"))} class="menu__link" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Casting"))}</a></div><div class="menu__item" data-v-f81b9fa1><a${ssrRenderAttr("href", unref(localePath)("/contacts"))} class="menu__link" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Contacts"))}</a></div><div class="menu__item" data-v-f81b9fa1><a${ssrRenderAttr("href", unref(localePath)("/media"))} class="menu__link" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Media"))}</a></div></div></div><div class="header__select-city select-city" data-v-f81b9fa1><div class="select-city__select" data-v-f81b9fa1><div class="select-city__title" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Dubai"))}</div><div class="select-city__content" data-v-f81b9fa1><label class="select-city__label" data-v-f81b9fa1><a href="/" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Dubai"))}</a></label><label class="select-city__label" data-v-f81b9fa1><a href="https://mgtimes.ru/en" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Moskow"))}</a></label><label class="select-city__label" data-v-f81b9fa1><a href="https://mgtimes.ru/en/escort-modeli-sankt-peterburg.html" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Sankt-Peterburg"))}</a></label></div></div></div><div class="header__select-language lang-box" data-v-f81b9fa1><div class="lang-box__ru" data-v-f81b9fa1><a class="${ssrRenderClass({ active: unref(locale) === "en" })}"${ssrRenderAttr("href", unref(switchLocalePath)("en"))} data-v-f81b9fa1>EN</a></div><div class="lang-box__line" data-v-f81b9fa1></div><div class="lang-box__en" data-v-f81b9fa1><a class="${ssrRenderClass({ active: unref(locale) === "ru" })}"${ssrRenderAttr("href", unref(switchLocalePath)("ru"))} data-v-f81b9fa1>RU</a></div></div><button class="header__btn-order btn-order" data-v-f81b9fa1>${ssrInterpolate(unref(t)("Order an escort"))}</button><div class="header__mobile-menu" data-v-f81b9fa1></div><button class="header__btn-mobile-menu btn-mobile-menu" data-v-f81b9fa1><span class="btn-mobile-menu__line-up" data-v-f81b9fa1></span><span class="btn-mobile-menu__line-middle" data-v-f81b9fa1></span><span class="btn-mobile-menu__line-bottom" data-v-f81b9fa1></span></button></div></header>`);
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
const __nuxt_component_6 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-f81b9fa1"]]);
const _imports_0 = "" + __publicAssetsURL("img/popup-order/sprite.svg");
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "Home": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Home" } },
        "Models": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Models" } },
        "Services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Services" } },
        "Casting": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Casting" } },
        "Contacts": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Contacts" } },
        "Media": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Media" } },
        "The agency does not provide intimate services.": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "The agency does not provide intimate services." } },
        "Order an escort": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Order an escort" } },
        "Contact us": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Contact us" } },
        "Go ahead and write to us in a message convenient for you": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Go ahead and§ write to us in a message convenient for you" } },
        "Describe your wishes": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Describe your wishes" } },
        "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment.": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment." } },
        "Have fun": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Have fun" } },
        "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you" } },
        "Go to Telegram": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Go to Telegram" } },
        "Go to WhatsApp": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Go to WhatsApp" } },
        "Privacy policy": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Privacy policy" } }
      },
      "ru": {
        "Home": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Главная" } },
        "Models": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Модели" } },
        "Services": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Сервисы" } },
        "Casting": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Кастинг" } },
        "Contacts": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Контакты" } },
        "Media": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Медиа" } },
        "The agency does not provide intimate services.": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Агенство не предоставляет услуги интимного характера." } },
        "Order an escort": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Заказать эскорт" } },
        "Contact us": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Свяжитесь с нами" } },
        "Go ahead and write to us in a message convenient for you": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Перейдите и напишите нам в удобном для вас месседжере" } },
        "Describe your wishes": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Опишите пожелания" } },
        "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment.": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Укажите услугу, которая вас интересует, и наш менеджер подберет модель по вашим предпочтениям. Для новых клиентов подбор модели производится по предоплате." } },
        "Have fun": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Получите удовольствие" } },
        "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Договоритесь о встрече, после обсуждения всех деталей, менеджер нашего агенства организует для вас встречу с девушкой" } },
        "Go to Telegram": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Перейти в Telegram" } },
        "Go to WhatsApp": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Перейти в WhatsApp" } },
        "Privacy policy": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Политика конфиденциальности" } }
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
      _push(`<div${ssrRenderAttrs(_attrs)}><footer class="footer"><div class="footer__container"><div class="footer__up-block"><div class="footer__logo"><a${ssrRenderAttr("href", _ctx.localePath("index"))}>MGTimes</a></div><div class="footer__clarification">${ssrInterpolate(unref(t)("The agency does not provide intimate services."))}</div></div><div class="footer__main-block"><div class="footer__menu"><div class="footer__list"><div class="footer__item"><a${ssrRenderAttr("href", _ctx.localePath("index"))} class="footer__link">${ssrInterpolate(unref(t)("Home"))}</a></div><div class="footer__item"><a${ssrRenderAttr("href", _ctx.localePath("/models"))} class="footer__link">${ssrInterpolate(unref(t)("Models"))}</a></div><div class="footer__item"><a${ssrRenderAttr("href", _ctx.localePath("/services"))} class="footer__link">${ssrInterpolate(unref(t)("Services"))}</a></div><div class="footer__item"><a${ssrRenderAttr("href", _ctx.localePath("/casting"))} class="footer__link">${ssrInterpolate(unref(t)("Casting"))}</a></div><div class="footer__item"><a${ssrRenderAttr("href", _ctx.localePath("/contacts"))} class="footer__link">${ssrInterpolate(unref(t)("Contacts"))}</a></div><div class="footer__item"><a${ssrRenderAttr("href", _ctx.localePath("/media"))} class="footer__link">${ssrInterpolate(unref(t)("Media"))}</a></div></div><div class="footer__social"><div class="footer__item"><a href="https://www.facebook.com/mgtmodel" target="_blank" class="footer__link">Facebook</a></div><div class="footer__item"><a href="https://instagram.com/mgtmodel" target="_blank" class="footer__link">Instagram</a></div></div></div></div><div class="footer__bottom-block"><div class="footer__legal">© 2023 MGTimes</div><a${ssrRenderAttr("href", _ctx.localePath("/privacy-policy"))} class="footer__legal">${ssrInterpolate(unref(t)("Privacy policy"))}</a></div></div></footer><div class="popup-order"><div class="popup-order__block"><button class="popup-order__close"><svg class="popup-order__close-svg"><use${ssrRenderAttr("xlink:href", _imports_0)}></use></svg></button><div class="popup-order__title">${ssrInterpolate(unref(t)("Order an escort"))}</div><div class="popup-order__list"><div class="popup-order__list-item"><div class="popup-order__item-number">01</div><div class="popup-order__item-title">${ssrInterpolate(unref(t)("Contact us"))}</div><div class="popup-order__item-text">${ssrInterpolate(unref(t)("Go ahead and write to us in a message convenient for you"))}</div></div><div class="popup-order__list-item"><div class="popup-order__item-number">02</div><div class="popup-order__item-title">${ssrInterpolate(unref(t)("Describe your wishes"))}</div><div class="popup-order__item-text">${ssrInterpolate(unref(t)(
        "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment."
      ))}</div></div><div class="popup-order__list-item"><div class="popup-order__item-number">03</div><div class="popup-order__item-title">${ssrInterpolate(unref(t)("Have fun"))}</div><div class="popup-order__item-text">${ssrInterpolate(unref(t)(
        "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you"
      ))}</div></div></div><div class="popup-order__buttons"><a href="https://t.me/mgtimes" target="_blank" class="popup-order__btn">${ssrInterpolate(unref(t)("Go to Telegram"))} <svg class="popup-order__btn-svg"><use${ssrRenderAttr("xlink:href", _imports_0 + "#telegram")}></use></svg></a><a href="https://wa.me/79775944345" target="_blank" class="popup-order__btn">${ssrInterpolate(unref(t)("Go to WhatsApp"))} <svg class="popup-order__btn-svg"><use${ssrRenderAttr("xlink:href", _imports_0 + "#whatsapp")}></use></svg></a></div></div></div></div>`);
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
const __nuxt_component_7 = _sfc_main$1;
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
export {
  _sfc_main as default
};
//# sourceMappingURL=default-ad5e56b7.js.map
