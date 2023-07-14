import { m as isFunction, o as isObject } from "../server.mjs";
import "vue";
import "ofetch";
import "#internal/nitro";
import "hookable";
import "unctx";
import "vue-router";
import "h3";
import "ufo";
import "destr";
import "devalue";
import "klona";
import "@unhead/ssr";
import "unhead";
import "@unhead/shared";
import "@intlify/core-base";
import "@vue/devtools-api";
import "@intlify/vue-devtools";
import "cookie-es";
import "js-cookie";
import "is-https";
import "vue/server-renderer";
import "defu";
async function i18n_options() {
  const loader = await import("./i18n.config-8b526609.js").then((m) => m.default || m);
  const config = isFunction(loader) ? await loader() : isObject(loader) ? loader : {};
  return config;
}
export {
  i18n_options as default
};
//# sourceMappingURL=i18n.options-f86d815b.js.map
