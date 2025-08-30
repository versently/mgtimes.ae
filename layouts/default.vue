<script setup>
const route = useRoute();
const { t } = useI18n();
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: "id",
  addSeoAttributes: true,
});

// дефолтные SEO значения
const defaultTitle = "MGTimes"
const defaultDescription = "MGTimes – лучшие модели и услуги"

// получаем данные страницы из content
const { data: content } = await useAsyncData(
  `layout-seo-${route.path}`,
  () => queryContent(route.path)
    .only(["title", "seoTitle", "description"])
    .findOne()
)

// вычисляем seoTitle и description
const seoTitle = computed(() =>
  content.value?.seoTitle || content.value?.title || defaultTitle
)
const seoDescription = computed(() =>
  content.value?.description || defaultDescription
)

// прописываем в head
useHead(computed(() => ({
  title: seoTitle.value,
  meta: [
    { name: "description", content: seoDescription.value },
    { property: "og:title", content: seoTitle.value },
    { property: "og:description", content: seoDescription.value },
    { name: "twitter:title", content: seoTitle.value },
    { name: "twitter:description", content: seoDescription.value }
  ]
})))

</script>

<template>
  <div>
    <Html :lang="head.htmlAttrs.lang" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ seoTitle }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link
            :id="link.id"
            :rel="link.rel"
            :href="link.href"
            :hreflang="link.hreflang"
            v-if="link.rel !== 'canonical'"
          />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta
           
            :id="meta.id"
            :property="meta.property"
            :content="meta.content"
          />
        </template>
      </Head>
      <Body>
        <div class="page" id="body">
          <Header />
          <slot />
          <Footer />
        </div>
      </Body>
    </Html>
  </div>
</template>

<style lang="scss" scoped></style>
