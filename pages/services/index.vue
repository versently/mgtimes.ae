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
          <nuxt-img
            class="services-img"
            src="/img/services/w-info.webp"
            alt=""
          />

          <div class="services__info-content">
            <!----- Заголовок ----->
            <div class="services__info-title">
              {{ t("Services 'MGTIMES'") }}
            </div>

            <div class="services__info-line"></div>

            <!----- Основной текст ----->
            <div class="services__info-p">
              <p>{{ t("At MGTimes paragraph") }}</p>

              <p class="services__info-p">
                {{ t("Our elite escort heading") }}
              </p>

              <ul class="requirements__list">
                <li class="requirements__list-item">
                  {{ t("Focus on appearance and communication") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Strict selection standards") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Professionalism and discretion") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Personal luxurious touch") }}
                </li>
              </ul>

              <p class="services__info-p">
                {{ t("Business or pleasure paragraph") }}
              </p>
            </div>

            <!----- Декоративный текст ----->
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
.services-img {
  object-position: right;
  object-fit: cover;
}
.services__info-p {
  padding: 10px 0;
}
.requirements__list-item::before {
  min-width: 8px;
}
</style>

<i18n lang="json">
{
  "en": {
    "title": "Elite escort in Dubai! VIP escort services form MGTimes",
    "description": "Selection of escort models for escort meetings, as well as for events of any format, exhibitions, shooting, promo in Dubai 📞 +971 58 525 2213 ⚡",

    "Home page": "Home page",
    "More information": "More information",

    "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Moscow.": "At MGTimes, we provide premium-class escort services that bring elegance, charm, and energy to every occasion. Our escort services dubai are designed for those who appreciate not just physical beauty but also captivating personalities. We carefully select only the most stunning, well-groomed, and sophisticated young women. Each of our companions is not only attractive but also bright, memorable, and socially confident — the kind of woman who can light up any room with ease.",

    "Services": "Services",
    "Services 'MGTIMES'": "Exceptional Escort Services Dubai",
    "From": "From",

    "At MGTimes paragraph": "At MGTimes, we provide premium-class escort services that bring elegance, charm, and energy to every occasion. Our escort services dubai are designed for those who appreciate not just physical beauty but also captivating personalities. We carefully select only the most stunning, well-groomed, and sophisticated young women. Each of our companions is not only attractive but also bright, memorable, and socially confident — the kind of woman who can light up any room with ease.",
    "Our elite escort heading": "WWhat makes our escort services dubai truly elite:",
    "Focus on appearance and communication": "A focus on both appearance and communication skills",
    "Strict selection standards": "Strict selection standards that prioritize elegance and intelligence",
    "Professionalism and discretion": "Professionalism, discretion, and genuine connection",
    "Personal luxurious touch": "A personal touch that ensures your leisure is luxurious and unforgettable",
    "Business or pleasure paragraph": "Whether you're visiting Dubai for business, pleasure, or both — MGTimes provides the perfect companion to elevate your experience with the finest escort services the city has to offer.",
    "No one is perfect": "No one is perfect but me."
  },

  "ru": {
    "title": "Элитный эскорт в Дубае! VIP эскорт услуги от MGTimes",
    "description": "Подбор эскорт моделей для сопровождения встреч, а так же для мероприятий любого формата, выставок, съемок, промо в Дубае 📞 +971 58 525 2213 ⚡",

    "Home page": "Главная страница",
    "More information": "Больше информации",

    "Our escort agency employs young and beautiful girls who can brighten up any evening. Each of them is a memorable and bright personality. The MGTimes agency puts up not only a high standard of appearance, but also monitors communicative qualities: the ability to present and sell oneself, and also pays great attention to reputation and personal qualities. Our main goal is to make your leisure unforgettable and spectacular in the company of an attractive girl for a vacation in Moscow.": "В нашем агентстве эскорта работают молодые и красивые девушки, способные скрасить любой вечер. Каждая из них — яркая запоминающаяся личность. Агентство «MGTimes» предъявляет высокий ценз к внешности и тщательно оценивает коммуникативные навыки, уделяя большое внимание репутации и личным качествам. Наша цель — сделать ваш отдых незабываемым и эффектным в компании привлекательной девушки в Дубае.",

    "Services": "Услуги",
    "Services 'MGTIMES'": "Услуги MGTimes: Премиальный эскорт в Дубае",
    "From": "От",

    "At MGTimes paragraph": "Агентство MGTimes предлагает эксклюзивные эскорт услуги для тех, кто ценит не только внешнюю привлекательность, но и харизму, интеллект и утонченное общение. В нашей команде работают молодые, красивые и ухоженные девушки, способные скрасить любой вечер и подарить вам яркие эмоции. Каждая из них — это запоминающаяся личность с живым темпераментом и безупречными манерами.",
    "Our elite escort heading": "Мы предъявляем строгие требования не только к внешним данным, но и к личным качествам наших моделей. Особое внимание уделяется:",
    "Focus on appearance and communication": "Умению поддержать интересную беседу",
    "Strict selection standards": "Способности элегантно себя преподнести",
    "Professionalism and discretion": "Репутации и внутренней культуре",
    "Personal luxurious touch": "Деликатности и такту в общении",
    "Business or pleasure paragraph": "Основная миссия MGTimes — сделать ваш отдых в Эмиратах по-настоящему роскошным и незабываемым. С нашими эскорт услуги в Дубае каждый вечер становится особенным, наполненным стилем, комфортом и приятным сопровождением от девушек премиум-класса.",
    "No one is perfect": "No one is perfect but me."
  }
}
</i18n>
