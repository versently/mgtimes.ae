import { i as useLocalePath$1, b as useRoute, h as useRouter, j as getComposer, f as useNuxtApp, k as useSwitchLocalePath$1, l as useLocaleHead$1 } from '../server.mjs';

function useLocalePath(options) {
  const { route, router, i18n } = options || {};
  return useLocalePath$1({
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}
function useSwitchLocalePath(options) {
  const { route, router, i18n } = options || {};
  return useSwitchLocalePath$1({
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}
function useLocaleHead(options) {
  const { addDirAttribute, addSeoAttributes, identifierAttribute, route, router, i18n } = options || {};
  return useLocaleHead$1({
    addDirAttribute: addDirAttribute || false,
    addSeoAttributes: addSeoAttributes || false,
    identifierAttribute: identifierAttribute || "hid",
    route: route || useRoute(),
    router: router || useRouter(),
    i18n: i18n || getComposer(useNuxtApp().$i18n)
  });
}

export { useSwitchLocalePath as a, useLocaleHead as b, useLocalePath as u };
//# sourceMappingURL=composables-0959ee17.mjs.map
