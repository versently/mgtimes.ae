import { _ as __nuxt_component_1 } from "./nuxt-img-8c6ab705.js";
import _sfc_main$1 from "./ContentDoc-0ea17033.js";
import { h as useI18n, d as useRoute, e as useHead } from "../server.mjs";
import { u as useLocalePath } from "./composables-170d3d4c.js";
import { withAsyncContext, unref, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import { a as useAsyncData, q as queryContent } from "./query-863ad99b.js";
import "destr";
import "devalue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import "defu";
import "ufo";
import "h3";
import "./ContentRenderer-51c5754f.js";
import "./ContentRendererMarkdown-b711f8f4.js";
import "scule";
import "property-information";
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
import "cookie-es";
import "js-cookie";
import "is-https";
import "./ContentQuery-871fc800.js";
import "ohash";
import "./utils-d651a5ea.js";
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "Home page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home page"]);
        },
        "Media": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Media"]);
        }
      },
      "ru": {
        "Home page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Главная"]);
        },
        "Media": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Медиа"]);
        }
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
    const { path } = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`content-${path}`, async () => {
      let media = queryContent().where({ _path: path }).findOne();
      let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
      return {
        media: await media,
        surround: await surround
      };
    })), __temp = await __temp, __restore(), __temp);
    data.value.surround;
    useHead({
      title: data.value.media.title,
      meta: [
        { name: "description", content: data.value.media.description }
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: `https://site.com/${data.value.media .img}`,
        // },
      ]
    });
    data.value.media.images;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_1;
      const _component_ContentDoc = _sfc_main$1;
      _push(`<main${ssrRenderAttrs(_attrs)}><div class="news"><div class="news__container"><div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item"${ssrRenderAttr("href", unref(localePath)("index"))}><span itemprop="name">${ssrInterpolate(unref(t)("Home page"))}</span><meta itemprop="position" content="1"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a${ssrRenderAttr("href", unref(localePath)("/media"))} itemprop="item"><span itemprop="name">${ssrInterpolate(unref(t)("Media"))}</span><meta itemprop="position" content="2"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><span itemprop="name">${ssrInterpolate(unref(data).media.title)}</span><meta itemprop="position" content="3"></li></div><div class="news__content"><h1 class="news__title">${ssrInterpolate(unref(data).media.title)}</h1><p class="news__p">${ssrInterpolate(unref(data).media.description)}</p><p class="news__p">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        class: "news__img-main",
        src: `/assets/img/media/${unref(data).media.folder}/${unref(data).media.mainImage}`,
        alt: unref(data).media.title
      }, null, _parent));
      _push(`</p>`);
      _push(ssrRenderComponent(_component_ContentDoc, null, null, _parent));
      _push(`</div></div></div></main>`);
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/media/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-5d6ff1ff.js.map
