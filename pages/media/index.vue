<script setup>
const { t } = useI18n({
  useScope: "local",
});

const localePath = useLocalePath();
const route = useRoute();
// формируем каноникал
const canonicalUrl = `https://mgtimes.ae${route.path}`
useHead({
  title: t("title"),
  meta: [
    {
      name: "description",
      content: t("description"),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: canonicalUrl
    }
  ],
});
</script>

<template>
  <main>
    <div class="media">
      <div class="media__container">
        <div
          class="casting__way-block bread-crumblist"
          itemscope=""
          itemtype="https://schema.org/BreadcrumbList"
        >
          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="https://schema.org/ListItem"
          >
            <a itemprop="item" :href="localePath('index')">
              <span itemprop="name">{{ t("Home page") }}</span>
              <meta itemprop="position" content="1" />
            </a>
          </li>
          /

          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="https://schema.org/ListItem"
          >
            <div itemprop="item">
              <span itemprop="name">{{ t("Media") }}</span>
              <meta itemprop="position" content="2" />
            </div>
          </li>
        </div>
        <div class="media__title">
          <h1>{{ t("Media") }}</h1>
        </div>
        <ContentList
          :path="localePath('/media')"
          :query="{
            only: [
              'title',
              'description',
              'tags',
              '_path',
              'mainImage',
              'folder',
            ],

            sort: [{ date: -1 }],
            where: {
              tags: {
                $contains: filter,
              },
            },
            $sensitivity: 'base',
          }"
        >
          <!-- Default list slot -->
          <template v-slot="{ list }">
            <div class="media__content">
              <div
                class="media__content-block odd"
                v-for="media in list"
                :key="media._path"
              >
                <nuxt-img
                  class=""
                  :src="`/assets/img/media/${media.folder}/${media.mainImage}`"
                  :alt="media.title"
                />
                <div class="media__content-block-info">
                  <div class="media__content-block-subtitle">
                    {{ media.title }}
                  </div>
                  <div class="media__content-block-text">
                    {{ media.description }}
                  </div>
                  <a
                    class="media__content-block-more"
                    :href="localePath(media._path)"
                  >
                    {{ t("More information") }}</a
                  >
                </div>
              </div>
            </div>
          </template>
          <!-- Not found slot to display message when no content us is found -->
          <template #not-found>
            <p>No media found.</p>
          </template>
        </ContentList>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style lang="scss" scoped></style>
<i18n lang="json">
{
  "en": {
    "title": "Articles about escorts | Media content Mgtimes Dubai",
    "description": "Escort news. The best articles about escorts on the site mgtimes.ae. Media content on the subject of escort. Escort blog.",

    "Home page": "Home page",
    "Media": "Media",
    "More information": "More information"
  },
  "ru": {
    "title": "Статьи об эскорте | Медиаконтент Mgtimes Дубай",
    "description": "Эскорт новости. Лучшие статьи об эскорте на сайте mgtimes.ae. Медийный контент на тему сопровождения. Эскорт блог.",

    "Home page": "Главная",
    "Media": "Медиа",
    "More information": "Узнать подробнее"
  }
}
</i18n>
