<script setup>
const { t } = useI18n({
  useScope: "local",
});

const route = useRoute();
const localePath = useLocalePath();
useHead({
  title: t("title"),

  meta: [
    {
      name: "description",
      content: t("description"),
    },
  ],
});
</script>

<template>
  <main>
    <div class="services">
      <div class="services__container">
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
              <span itemprop="name">{{ t("Services") }}</span>
              <meta itemprop="position" content="2" />
            </div>
          </li>
        </div>
        <div class="services__title">
          <H1>{{ t("Services 'MGTIMES'") }}</H1>
        </div>
        <ContentList
          :path="route.path"
          :query="{
            only: ['about', 'h1', 'tags', '_path', 'img', 'price'],
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
            <div class="services__list">
              <div
                class="services__service-item service-item"
                v-for="services in list"
                :key="services._path"
              >
                <nuxt-img
                  :src="`/assets/img/services/${services.img}.webp`"
                  :alt="services.title"
                />
                <div class="service-item__shell">
                  <div class="service-item__title">
                    {{ services.h1 }}
                  </div>
                  <div class="service-item__text">
                    {{ services.about }}
                  </div>
                  <div class="service__price private-events__price">
                    {{ t("From") }} {{ services.price }}$
                  </div>
                  <div class="service-item__more-more">
                    <a :href="services._path" class="service-item__more">
                      {{ t("More information") }}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </template>
          <!-- Not found slot to display message when no content us is found -->
          <template #not-found>
            <p>No services found.</p>
          </template>
        </ContentList>
        <div class="services__info">
          <nuxt-img src="/img/services/w-info.webp" alt="" />
          <div class="services__info-content">
            <div class="services__info-title">
              {{ t("Services 'MGTIMES'") }}
            </div>
            <div class="services__info-line"></div>
            <div class="services__info-p">
              {{
                t(
                  "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Moscow."
                )
              }}
            </div>
            <div class="services__info-text-decoration">
              {{ t("No one is perfect but me.") }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup></script>

<style>
.service-item img {
  max-height: 272px;
  height: 100%;
  object-fit: cover;
}
</style>

<i18n lang="json">
{
  "en": {
    "title": "Elite escort in Dubai! VIP escort services form MGTimes",
    "description": "Selection of escort models for escort meetings, as well as for events of any format, exhibitions, shooting, promo in Dubai 📞 +971 58 525 2213 ⚡",

    "Home page": "Home page",
    "More information": "More information",
    "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Moscow.": "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Dubai.",
    "Services": "Services",
    "Services 'MGTIMES'": "Services 'MGTIMES'",
    "From":"From"

  },
  "ru": {
    "title": "Элитный эскорт в Дубае! VIP эскорт услуги от MGTimes",
    "description": "Подбор эскорт моделей для сопровождения встреч, а так же для мероприятий любого формата, выставок, съемок, промо в Дубае 📞 +971 58 525 2213 ⚡",

    "Home page": "Главная страница",
    "More information": "Больше информации",
    "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Moscow.": "В нашем агентстве эскорта работают молодые и красивые девушки, способные скрасить любой вечер. Каждая из них запоминающаяся и яркая личность. Агентство «MGTimes» выставляет не только высокий ценз внешности, но и проводит мониторинг коммуникативных качеств: умения подавать и продавать себя, а также уделяет огромное внимание репутации и личным качествам. Основная наша цель – осуществить ваш досуг незабываемым и эффектным в компании с привлекательной девушкой для отдыха в Дубае.",
    "Services": "Услуги",
    "Services 'MGTIMES'": "Услуги 'MGTIMES'",
    "From": "От"
  }
}
</i18n>
