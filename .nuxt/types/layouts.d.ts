import { ComputedRef, Ref } from 'vue'
export type LayoutKey = "default"
declare module "/Users/vitaly/Sites/hostiman_artur/mgtimes_nuxt/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}