import { s as sharedExports, p as precompileMessages } from "../server.mjs";
import "vue";
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
import "vue/server-renderer";
import "defu";
async function i18n_options(context) {
  const loader = await import("./i18n.config-cd44f7f5.js").then((m) => m.default || m);
  const config = sharedExports.isFunction(loader) ? await loader(context) : sharedExports.isObject(loader) ? loader : {};
  {
    config.messages = await precompileMessages(config.messages, "6558258c");
    return config;
  }
}
export {
  i18n_options as default
};
//# sourceMappingURL=i18n.options-9b03bb04.js.map
