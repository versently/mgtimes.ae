import { h as useI18n, d as useHead } from '../server.mjs';
import { u as useLocalePath } from './composables-d4c87181.mjs';
import { unref, useSSRContext } from 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderStyle } from 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ofetch/dist/node.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/hookable/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unctx/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@unhead/ssr/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unhead/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/vue-router/dist/vue-router.node.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/h3/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ufo/dist/index.mjs';
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
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/ohash/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/radix3/dist/index.mjs';
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

function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "title": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Contacts - Escort agency \xABMgtimes\xBB in Dubai" } },
        "description": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Contact the contact numbers of the elite escort agency Mgtimes, the best models of Dubai! Organization of rest and meetings! \u{1F4DE} +971 58 525 2213 \u26A1" } },
        "Home page": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Home page" } },
        "Order an escort": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Order an escort" } },
        "escort agency Mgtimes": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "escort agency Mgtimes" } },
        "Call or write for any question.": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Call or write for any question." } },
        "Contacts": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "Contacts" } }
      },
      "ru": {
        "title": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B - \u042D\u0441\u043A\u043E\u0440\u0442 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u043E \xABMgtimes\xBB" } },
        "description": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "\u041E\u0431\u0440\u0430\u0449\u0430\u0439\u0442\u0435\u0441\u044C \u043F\u043E \u043A\u043E\u043D\u0442\u0430\u043A\u0442\u043D\u044B\u043C \u0442\u0435\u043B\u0435\u0444\u043E\u043D\u0430\u043C \u044D\u043B\u0438\u0442\u043D\u043E\u0433\u043E \u044D\u0441\u043A\u043E\u0440\u0442 \u0430\u0433\u0435\u043D\u0442\u0441\u0442\u0432\u0430 Mgtimes, \u043B\u0443\u0447\u0448\u0438\u0435 \u043C\u043E\u0434\u0435\u043B\u0438 \u0414\u0443\u0431\u0430\u044F! \u041E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u044F \u043E\u0442\u0434\u044B\u0445\u0430 \u0438 \u0432\u0441\u0442\u0440\u0435\u0447! \u{1F4DE} +971 58 525 2213 \u26A1" } },
        "Home page": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "\u0413\u043B\u0430\u0432\u043D\u0430\u044F" } },
        "Order an escort": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "\u0417\u0430\u043A\u0430\u0437\u0430\u0442\u044C \u044D\u0441\u043A\u043E\u0440\u0442" } },
        "escort agency Mgtimes": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "\u044D\u0441\u043A\u043E\u0440\u0442-\u0430\u0433\u0435\u043D\u0441\u0442\u0432\u043E Mgtimes" } },
        "Call or write for any question.": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "\u0417\u0432\u043E\u043D\u0438\u0442\u0435 \u0438\u043B\u0438 \u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E \u043B\u044E\u0431\u043E\u043C\u0443 \u0432\u043E\u043F\u0440\u043E\u0441\u0443." } },
        "Contacts": { "type": 0, "body": { "type": 2, "items": [{ "type": 3 }], "static": "\u041A\u043E\u043D\u0442\u0430\u043A\u0442\u044B" } }
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

export { _sfc_main as default };
//# sourceMappingURL=contacts-7e150620.mjs.map
