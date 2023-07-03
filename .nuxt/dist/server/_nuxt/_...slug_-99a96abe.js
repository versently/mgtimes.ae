import { _ as __nuxt_component_1 } from "./nuxt-img-8c6ab705.js";
import _sfc_main$1 from "./ContentList-47ef4327.js";
import { withAsyncContext, mergeProps, unref, withCtx, createVNode, openBlock, createBlock, Fragment, renderList, toDisplayString, createTextVNode, useSSRContext } from "vue";
import "hookable";
import "./index-e12b288f.js";
import { a as useAsyncData, q as queryContent } from "./query-863ad99b.js";
import { d as useRoute, h as useI18n, e as useHead } from "../server.mjs";
import "destr";
import "devalue";
import { u as useLocalePath, a as useSwitchLocalePath } from "./composables-170d3d4c.js";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import "defu";
import "ufo";
import "h3";
import "./ContentQuery-871fc800.js";
import "ohash";
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
import "./utils-d651a5ea.js";
function block0(Component) {
  const _Component = Component;
  _Component.__i18n = _Component.__i18n || [];
  _Component.__i18n.push({
    "locale": "",
    "resource": {
      "en": {
        "Top Model": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Top Model"]);
        },
        "years old - MGtimes VIP escort in Dubai": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["years old - MGtimes VIP escort in Dubai"]);
        },
        "My name is": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["My name is"]);
        },
        "Want to know my phone number? Order VIP escort services in Dubai in the best escort agency in Dubai MGtimes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Want to know my phone number? Order VIP escort services in Dubai in the best escort agency in Dubai MGtimes"]);
        },
        "Models": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Models"]);
        },
        "Home page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Home page"]);
        },
        "Height": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Height"]);
        },
        "Weight": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Weight"]);
        },
        "Age": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Age"]);
        },
        "About me": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["About me"]);
        },
        "Invite a model": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Invite a model"]);
        },
        "More information": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["More information"]);
        },
        "More models": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["More information"]);
        },
        "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance."]);
        }
      },
      "ru": {
        "Top Model": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Топ Модель"]);
        },
        "years old - MGtimes VIP escort in Dubai": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["лет - VIP эскорт MGtimes в Дубае"]);
        },
        "My name is": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Меня зовут"]);
        },
        "Want to know my phone number? Order VIP escort services in Dubai in the best escort agency in Dubai MGtimes": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Хотите Узнать мой телефон? Закажи VIP эскорт услуги в лучшем эскорт-агентстве Дубая MGtimes "]);
        },
        "Models": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Модели"]);
        },
        "Home page": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Главная страница"]);
        },
        "Height": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Рост"]);
        },
        "Weight": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Вес"]);
        },
        "Age": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Возраст"]);
        },
        "About me": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Обо мне"]);
        },
        "Invite a model": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Пригласить модель"]);
        },
        "More information": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Больше информации"]);
        },
        "More models": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ещё модели"]);
        },
        "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": (ctx) => {
          const { normalize: _normalize } = ctx;
          return _normalize(["Ниже вы можете увидеть больше красивых девушек"]);
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
    const route = useRoute();
    route.path.split("/");
    const localePath = useLocalePath();
    useSwitchLocalePath();
    const { t } = useI18n({
      useScope: "local"
    });
    const { path } = useRoute();
    const { data } = ([__temp, __restore] = withAsyncContext(async () => useAsyncData(`content-${path}`, async () => {
      let models = queryContent().where({ _path: path }).findOne();
      let surround = queryContent().only(["_path", "title", "description"]).sort({ date: 1 }).findSurround(path);
      return {
        models: await models,
        surround: await surround
      };
    })), __temp = await __temp, __restore(), __temp);
    data.value.surround;
    useHead({
      title: t("Top Model") + " " + data.value.models.title + ". " + t("Age") + " " + data.value.models.age + " " + t("years old - MGtimes VIP escort in Dubai"),
      meta: [
        {
          name: "description",
          content: t("My name is") + " " + data.value.models.title + " " + t("Age") + " " + data.value.models.age + " " + t("Height") + " " + data.value.models.height + " " + t("Weight") + " " + data.value.models.weight + ". " + t(
            "Want to know my phone number? Order VIP escort services in Dubai in the best escort agency in Dubai MGtimes"
          )
        }
        // {
        //   hid: "og:image",
        //   property: "og:image",
        //   content: `https://site.com/${data.value.models .img}`,
        // },
      ]
    });
    const images = data.value.models.images;
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_img = __nuxt_component_1;
      const _component_ContentList = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "model" }, _attrs))}><div class="model__container"><div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList"><li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a itemprop="item"${ssrRenderAttr("href", unref(localePath)("index"))}><span itemprop="name">${ssrInterpolate(unref(t)("Home page"))}</span><meta itemprop="position" content="1"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><a${ssrRenderAttr("href", unref(localePath)("models"))} itemprop="item"><span itemprop="name">${ssrInterpolate(unref(t)("Models"))}</span><meta itemprop="position" content="2"></a></li> / <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem"><span itemprop="name">${ssrInterpolate(unref(data).models.title)}</span><meta itemprop="position" content="3"></li></div><div class="model__content"><div class="model__images">`);
      _push(ssrRenderComponent(_component_nuxt_img, {
        src: `/assets/img/models/${unref(data).models.folder}/${unref(data).models.mainImage}`,
        alt: `${unref(data).models.folder}`
      }, null, _parent));
      _push(`<!--[-->`);
      ssrRenderList(unref(images), (image, index) => {
        _push(ssrRenderComponent(_component_nuxt_img, {
          key: index,
          src: `/assets/img/models/${unref(data).models.folder}/${image}`,
          alt: `${unref(data).models.folder}`
        }, null, _parent));
      });
      _push(`<!--]--></div><div class="model__info"><h1 class="model__info-name">${ssrInterpolate(unref(data).models.title)}</h1><div class="model__info-characteristics"><div class="model__info-property">${ssrInterpolate(unref(t)("Height"))}: <span>${ssrInterpolate(unref(data).models.height)}</span></div><div class="model__info-property">${ssrInterpolate(unref(t)("Weight"))}: <span>${ssrInterpolate(unref(data).models.weight)}</span></div><div class="model__info-property">${ssrInterpolate(unref(t)("Age"))}: <span>${ssrInterpolate(unref(data).models.age)}</span></div></div><div class="model__title-about">${ssrInterpolate(unref(t)("About me"))}</div><div class="model__about-p">${ssrInterpolate(unref(data).models.description)}</div><div class="model__info-price-block"><div class="model__info-price">${ssrInterpolate(unref(data).models.Price)}</div></div><button class="model__info-btn btn-order">${ssrInterpolate(unref(t)("Invite a model"))}</button></div><div class="model__swiper-img"><div class="model__swiper-wrapper-img"><!--[-->`);
      ssrRenderList(unref(images), (image, index) => {
        _push(`<div class="model__swiper-slide-img">`);
        _push(ssrRenderComponent(_component_nuxt_img, {
          src: `/assets/img/models/${unref(data).models.folder}/${image}`,
          alt: ""
        }, null, _parent));
        _push(`</div>`);
      });
      _push(`<!--]--></div><div class="model__swiper-scrollbar-img"></div></div></div><div class="models-section"><div class="models-section__container"><div class="models-section__section-name"><h3>${ssrInterpolate(unref(t)("More models"))}</h3></div><div class="models-section__content"><p>${ssrInterpolate(unref(t)(
        "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance."
      ))}</p><div class="models-section__swiper">`);
      _push(ssrRenderComponent(_component_ContentList, {
        path: unref(localePath)("/models"),
        query: {
          only: [
            "title",
            "description",
            "tags",
            "_path",
            "img",
            "folder",
            "mainImage",
            "height",
            "weight",
            "age"
          ],
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
            _push2(`<div class="models-section__swiper-wrapper"${_scopeId}><!--[-->`);
            ssrRenderList(list, (models) => {
              _push2(`<div class="models-section__swiper-slide"${_scopeId}>`);
              _push2(ssrRenderComponent(_component_nuxt_img, {
                src: `/assets/img/models/${models.folder}/${models.mainImage}`,
                alt: `${models.folder}`
              }, null, _parent2, _scopeId));
              _push2(`<div class="models-section__slide-description"${_scopeId}><div class="models-section__slide-name"${_scopeId}>${ssrInterpolate(models.title)}</div><div class="models-section__slide-characteristics"${_scopeId}><div class="models-section__slide-property"${_scopeId}>${ssrInterpolate(unref(t)("Height"))}: <span${_scopeId}>${ssrInterpolate(models.height)}</span></div><div class="models-section__slide-property"${_scopeId}>${ssrInterpolate(unref(t)("Weight"))}: <span${_scopeId}>${ssrInterpolate(models.weight)}</span></div><div class="models-section__slide-property"${_scopeId}>${ssrInterpolate(unref(t)("Age"))}: <span${_scopeId}>${ssrInterpolate(models.age)}</span></div></div><div class="models-section__slide-more"${_scopeId}><a${ssrRenderAttr("href", models._path)}${_scopeId}>${ssrInterpolate(unref(t)("Invite a model"))}</a></div></div></div>`);
            });
            _push2(`<!--]--></div><div class="models-section__swiper-scrollbar"${_scopeId}></div>`);
          } else {
            return [
              createVNode("div", { class: "models-section__swiper-wrapper" }, [
                (openBlock(true), createBlock(Fragment, null, renderList(list, (models) => {
                  return openBlock(), createBlock("div", {
                    class: "models-section__swiper-slide",
                    key: models._path
                  }, [
                    createVNode(_component_nuxt_img, {
                      src: `/assets/img/models/${models.folder}/${models.mainImage}`,
                      alt: `${models.folder}`
                    }, null, 8, ["src", "alt"]),
                    createVNode("div", { class: "models-section__slide-description" }, [
                      createVNode("div", { class: "models-section__slide-name" }, toDisplayString(models.title), 1),
                      createVNode("div", { class: "models-section__slide-characteristics" }, [
                        createVNode("div", { class: "models-section__slide-property" }, [
                          createTextVNode(toDisplayString(unref(t)("Height")) + ": ", 1),
                          createVNode("span", null, toDisplayString(models.height), 1)
                        ]),
                        createVNode("div", { class: "models-section__slide-property" }, [
                          createTextVNode(toDisplayString(unref(t)("Weight")) + ": ", 1),
                          createVNode("span", null, toDisplayString(models.weight), 1)
                        ]),
                        createVNode("div", { class: "models-section__slide-property" }, [
                          createTextVNode(toDisplayString(unref(t)("Age")) + ": ", 1),
                          createVNode("span", null, toDisplayString(models.age), 1)
                        ])
                      ]),
                      createVNode("div", { class: "models-section__slide-more" }, [
                        createVNode("a", {
                          href: models._path
                        }, toDisplayString(unref(t)("Invite a model")), 9, ["href"])
                      ])
                    ])
                  ]);
                }), 128))
              ]),
              createVNode("div", { class: "models-section__swiper-scrollbar" })
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
      _push(`</div></div></div></div></div></div>`);
    };
  }
};
if (typeof block0 === "function")
  block0(_sfc_main);
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/models/[...slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=_...slug_-99a96abe.js.map
