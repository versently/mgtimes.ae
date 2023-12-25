import { h as getComposer, e as useNuxtApp, a as useRoute, g as useRouter, j as useLocalePath$1, k as useSwitchLocalePath$1, l as useLocaleHead$1 } from '../server.mjs';

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

export { useSwitchLocalePath as a, useLocaleHead as b, useLocalePath as u };
//# sourceMappingURL=composables-abe3247e.mjs.map
