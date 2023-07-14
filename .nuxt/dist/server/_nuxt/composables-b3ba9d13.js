import { i as getComposer, e as useNuxtApp, b as useRoute, g as useRouter, j as useLocalePath$1, k as useSwitchLocalePath$1, l as useLocaleHead$1 } from "../server.mjs";
import "vue";
import "destr";
import "devalue";
import "js-cookie";
function useLocalePath(options = {}) {
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return useLocalePath$1({
    router,
    route,
    i18n
  });
}
function useSwitchLocalePath(options = {}) {
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return useSwitchLocalePath$1({
    router,
    route,
    i18n
  });
}
function useLocaleHead(options = {
  addDirAttribute: false,
  addSeoAttributes: false,
  identifierAttribute: "hid"
}) {
  const { addDirAttribute, addSeoAttributes, identifierAttribute } = options;
  const i18n = options.i18n || getComposer(useNuxtApp().$i18n);
  const route = useRoute();
  const router = useRouter();
  return useLocaleHead$1({
    addDirAttribute,
    addSeoAttributes,
    identifierAttribute,
    router,
    route,
    i18n
  });
}
export {
  useSwitchLocalePath as a,
  useLocaleHead as b,
  useLocalePath as u
};
//# sourceMappingURL=composables-b3ba9d13.js.map
