import { i as useLocalePath$1, g as useRouter, b as useRoute, j as getComposer, e as useNuxtApp, k as useSwitchLocalePath$1, l as useLocaleHead$1 } from '../server.mjs';

function useLocalePath() {
  return useLocalePath$1({
    router: useRouter(),
    route: useRoute(),
    i18n: getComposer(useNuxtApp().$i18n)
  });
}
function useSwitchLocalePath() {
  return useSwitchLocalePath$1({
    router: useRouter(),
    route: useRoute(),
    i18n: getComposer(useNuxtApp().$i18n)
  });
}
function useLocaleHead(options = {
  addDirAttribute: false,
  addSeoAttributes: false,
  identifierAttribute: "hid"
}) {
  const { addDirAttribute, addSeoAttributes, identifierAttribute } = options;
  return useLocaleHead$1({
    addDirAttribute,
    addSeoAttributes,
    identifierAttribute,
    router: useRouter(),
    route: useRoute(),
    i18n: getComposer(useNuxtApp().$i18n)
  });
}

export { useSwitchLocalePath as a, useLocaleHead as b, useLocalePath as u };
//# sourceMappingURL=composables-b4d0c703.mjs.map
