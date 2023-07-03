import { i as useLocalePath$1, b as useRouter, d as useRoute, j as getComposer, f as useNuxtApp, k as useSwitchLocalePath$1, l as useLocaleHead$1 } from "../server.mjs";
import "vue";
import "destr";
import "devalue";
import "js-cookie";
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
export {
  useSwitchLocalePath as a,
  useLocaleHead as b,
  useLocalePath as u
};
//# sourceMappingURL=composables-170d3d4c.js.map
