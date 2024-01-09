<script setup>
const { t, locale } = useI18n({
  useScope: "local",
});

useHead({
  title: t("titleMeta"),

  meta: [
    {
      name: "description",
      content: t("descriptionMeta"),
    },
  ],
});

const revCont = ref(null);

revCont.value = 3;
if (locale.value == "en") {
  revCont.value = 3;
} else {
  revCont.value = 10;
}
</script>
<template>
  <main>
    <div class="models">
      <div class="models__container">
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
              <span itemprop="name">{{ t("sitemap") }}</span>
              <meta itemprop="position" content="2" />
            </div>
          </li>
        </div>
        <h1 class="models__title">{{ t("sitemap") }}</h1>

        <div class="sitemp-link">
          <ul>
            <li>
              <a :href="localePath('index')">{{ t("Home page") }}</a>
            </li>
            <li>
              <a :href="localePath('/models')">{{ t("Models") }}</a>
            </li>
            <li>
              <a :href="localePath('/services')">{{ t("Services") }}</a>
            </li>
            <li>
              <a :href="localePath('/casting')">{{ t("Casting") }}</a>
            </li>
            <li>
              <a :href="localePath('/contacts')">{{ t("Contacts") }}</a>
            </li>
            <li>
              <a :href="localePath('/media')">{{ t("Media") }}</a>
            </li>
            <li>
              <a :href="localePath('/privacy-policy')">{{ t("Privacy Policy") }}</a>
            </li>
            
            <ContentList
              :path="localePath('/cities')"
              :query="{
                only: ['h1','_path'],
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
                <li v-for="models in list" :key="models._path">
                  <a :href="models._path">
                    {{ models.h1 }}
                  </a>
                </li>
              </template>
              <!-- Not found slot to display message when no content us is found -->
              <template #not-found>
                <p>No services found.</p>
              </template>
            </ContentList>
            <ContentList
              :path="localePath('/models')"
              :query="{
                only: [
                  'title',
                  'description',
                  'tags',
                  '_path',
                  'img',
                  'folder',
                  'mainImage',
                  'height',
                  'weight',
                  'age',
                ],
                where: {
                  tags: {
                    $contains: filter,
                  },
                },
                $sensitivity: 'base',
              }"
            >
              <template v-slot="{ list }">
                <li v-for="models in list" :key="models._path">
                  <a :href="models._path">
                    {{ models.title }}
                  </a>
                </li>
              </template>

              <template #not-found>
                <p>No services found.</p>
              </template>
            </ContentList>
            <ContentList
              :path="localePath('/services')"
              :query="{
                only: ['h1', '_path'],
                where: {
                  tags: {
                    $contains: filter,
                  },
                },
                $sensitivity: 'base',
              }"
            >
              <template v-slot="{ list }">
                <li v-for="models in list" :key="models._path">
                  <a :href="models._path">
                    {{ models.h1 }}
                  </a>
                </li>
              </template>

              <template #not-found>
                <p>No services found.</p>
              </template>
            </ContentList>
            <ContentList
              :path="localePath('/media')"
              :query="{
                only: ['title', '_path'],
                where: {
                  tags: {
                    $contains: filter,
                  },
                },
                $sensitivity: 'base',
              }"
            >
              <template v-slot="{ list }">
                <li v-for="models in list" :key="models._path">
                  <a :href="models._path">
                    {{ models.title }}
                  </a>
                </li>
              </template>

              <template #not-found>
                <p>No services found.</p>
              </template>
            </ContentList>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>
<i18n lang="json">
{
  "en": {
    "titleMeta": "Elite escort services in Dubai 🖤 VIP girls / MGTIMES",
    "descriptionMeta": "Escort services and model escorts in Dubai. Elite escort agency for successful men! Selection of VIP models to accompany. Strictly confidential 📞 +971 58 525 2213 ⚡",

    "sitemap": "Site map",
    "Home page": "Home page",
    "Models": "Models",
    "Services": "Services",
    "Casting": "Casting",
    "Contacts": "Contacts",
    "Media": "Media",
    "Privacy Policy":"Privacy Policy"
  },
  "ru": {
    "titleMeta": "Элитные эскорт услуги в Дубае 🖤 VIP девушки / MGTIMES",
    "descriptionMeta": "Эскорт услуги и сопровождение моделей в Дубае. Элитное эскорт агентство для успешных мужчин! Подбор VIP моделей для сопровождения. Строго конфиденциально 📞 +971 58 525 2213 ⚡",

    "sitemap": "Карта сайта",
    "Home page": "Главная",
    "Models": "Модели",
    "Services": "Услуги",
    "Casting": "Кастинг",
    "Contacts": "Контакты",
    "Media": "Медиа",
    "Privacy Policy":"Политика конфиденциальности"
  }
}
</i18n>
