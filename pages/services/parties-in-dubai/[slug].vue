<script setup>
const { t } = useI18n({
  useScope: "local",
});
const localePath = useLocalePath();
const route = useRoute();
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let service = queryContent().where({ _path: path }).findOne();

  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);
  return {
    service: await service,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;

// set the meta
useHead({
  title: data.value.service.title,

  meta: [
    { name: "description", content: data.value.service.description },
    // {
    //   hid: "og:image",
    //   property: "og:image",
    //   content: `https://site.com/${data.value.service .img}`,
    // },
  ],
});
</script>
<template>
  <main class="">
    <div class="service private-events">
      <div class="service__container private-events__container">
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
            <a :href="localePath('/services')" itemprop="item">
              <span itemprop="name">{{ t("Services") }}</span>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          /
          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="https://schema.org/ListItem"
          >
            <a :href="localePath('/services/parties-in-dubai')" itemprop="item">
              <span itemprop="name">{{ t("Parties in Dubai") }}</span>
              <meta itemprop="position" content="2" />
            </a>
          </li>
          /
          <li
            itemprop="itemListElement"
            itemscope=""
            itemtype="https://schema.org/ListItem"
          >
            <span itemprop="name">{{ data.service.h1 }}</span>
            <meta itemprop="position" content="3" />
          </li>
        </div>
        <h1 class="service__title private-events__title">
          {{ data.service.h1 }}
        </h1>
        <div class="service__main-content private-events__main-content">
          <p class="service__text-01 private-events__text-01">
            {{ data.service.about }}
          </p>
          <div class="service__price private-events__price">
            {{ t("From") }} {{ data.service.price }}$
          </div>
          <button class="service__btn private-events__btn btn-order">
            {{ t("Order a service") }}
          </button>
        </div>

        <div class="service__page-wrapper-img private-events__page-wrapper-img">
          <nuxt-img
            :src="`/assets/img/services/${data.service.img}.webp`"
            :alt="data.service.title"
          />
        </div>

        <div class="service__main-content private-events__main-content">
          <ContentDoc />
        </div>
      </div>

      <div class="additional-services-section">
        <div class="additional-services-section__container">
          <div class="additional-services-section__section-name">
            <h3>{{ t("Parties in Dubai") }}</h3>
          </div>
          <div class="additional-services-section__content">
            <div class="additional-services-section__swiper">
              <ContentList
                :path="localePath('/services/parties-in-dubai/')"
                :query="{
                  only: ['h1', 'about', 'tags', '_path', 'img'],
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
                  <!-- Additional required wrapper -->
                  <div class="additional-services-section__swiper-wrapper">
                    <!-- Slides -->
                    <div
                      class="additional-services-section__swiper-slide"
                      v-for="services in list.slice(1)"
                      :key="services._path"
                    >
                      <nuxt-img
                        :src="`/assets/img/services/${services.img}.webp`"
                        :alt="services.title"
                      />
                      <div
                        class="additional-services-section__slide-description"
                      >
                        <div class="additional-services-section__slide-title">
                          {{ services.h1 }}
                        </div>
                        <div class="additional-services-section__slide-text">
                          {{ services.about }}
                        </div>
                        <div class="additional-services-section__slide-more">
                          <a :href="services._path">{{
                            t("More information")
                          }}</a>
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

              <!-- If we need scrollbar -->
              <div class="additional-services-section__swiper-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<i18n lang="json">
{
  "en": {
    "Home page": "Home page",
    "Services": "Services",
    "Order a service": "Order a service",
    "More information": "More information",
    "Parties in Dubai": "Parties in Dubai",
    "Choose your party": "Choose your party",
    "From": "From"
  },
  "ru": {
    "Home page": "Главная страница",
    "Services": "Сервисы",
    "Order a service": "Заказать услугу",
    "More information": "Больше информации",
    "Parties in Dubai": "Вечеринки в Дубае",
    "Choose your party": "Выберите свою вечеринку",

    "From": "От"
  }
}
</i18n>
