<script setup>
const route = useRoute();
const pathArray = route.path.split("/");

const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();
const { t } = useI18n({
  useScope: "local",
});

const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let models = queryContent().where({ _path: path }).findOne();

  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);
  return {
    models: await models,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;

// set the meta
useHead({
  title:
    t("Top Model") +
    " " +
    data.value.models.title +
    ". " +
    t("Height") +
    " " +
    data.value.models.height + ". " +
    t("Age") +
    " " +
    data.value.models.age + " " +
    t("years old - MGtimes VIP escort in Dubai"),

  meta: [
    {
      name: "description",
      content:
        t("My name is") +
        " " +
        data.value.models.title +
        " " +
        t("Age") +
        " " +
        data.value.models.age +
        " " +
        t("Height") +
        " " +
        data.value.models.height +
        " " +
        t("Weight") +
        " " +
        data.value.models.weight +
        "." +
        " " +
        t(
          "Want to know my phone number? Order VIP escort services in Dubai in the best escort agency in Dubai MGtimes"
        ),
    },
    // {
    //   hid: "og:image",
    //   property: "og:image",
    //   content: `https://site.com/${data.value.models .img}`,
    // },
  ],
});
const images = data.value.models.images;
</script>
<template>
  <div class="model">
    <div class="model__container">
      <div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList">
        <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a itemprop="item" :href="localePath('index')">
            <span itemprop="name">{{ t("Home page") }}</span>
            <meta itemprop="position" content="1" />
          </a>
        </li>
        /

        <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <a :href="localePath('models')" itemprop="item">
            <span itemprop="name">{{ t("Models") }}</span>
            <meta itemprop="position" content="2" />
          </a>
        </li>
        /
        <li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
          <span itemprop="name">{{ data.models.title }}</span>
          <meta itemprop="position" content="3" />
        </li>
      </div>
      <div class="model__content">
        <div class="model__images">
          <nuxt-img :src="`/assets/img/models/${data.models.folder}/${data.models.mainImage}`"
            :alt="`${data.models.folder}`" />
          <nuxt-img v-for="(image, index) in images" :key="index"
            :src="`/assets/img/models/${data.models.folder}/${image}`" :alt="`${data.models.folder}`" />
        </div>
        <div class="model__info">
          <h1 class="model__info-name">{{ data.models.title }}</h1>
          <div class="model__info-characteristics">
            <div class="model__info-property">
              {{ t("Height") }}: <span>{{ data.models.height }}</span>
            </div>
            <div class="model__info-property">
              {{ t("Weight") }}: <span>{{ data.models.weight }}</span>
            </div>
            <div class="model__info-property">
              {{ t("Age") }}: <span>{{ data.models.age }}</span>
            </div>
          </div>
          <div class="model__title-about">{{ t("About me") }}</div>

          <div class="model__about-p">
            {{ data.models.description }}
          </div>
          <div class="model__info-price-block">
            <div class="model__info-price">
              {{ data.models.Price }}
            </div>
          </div>
          <button class="model__info-btn btn-order">
            {{ t("Invite a model") }}
          </button>
        </div>
        <div class="model__swiper-img">
          <div class="model__swiper-wrapper-img">
            <div class="model__swiper-slide-img" v-for="(image, index) in images" :key="index">
              <nuxt-img :src="`/assets/img/models/${data.models.folder}/${image}`" alt="" />
            </div>
          </div>
          <div class="model__swiper-scrollbar-img"></div>
        </div>
      </div>

      <div class="models-section">
        <div class="models-section__container">
          <div class="models-section__section-name">
            <h3>{{ t("More models") }}</h3>
          </div>
          <div class="models-section__content">
            <p>
              {{
                t(
                  "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance."
                )
              }}
            </p>
            <div class="models-section__swiper">
              <!-- Additional required wrapper -->
              <ContentList :path="localePath('/models')" :query="{
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
              }">
                <!-- Default list slot -->
                <template v-slot="{ list }">
                  <div class="models-section__swiper-wrapper">
                    <!-- Slides -->
                    <div class="models-section__swiper-slide" v-for="models in list" :key="models._path">
                      <nuxt-img :src="`/assets/img/models/${models.folder}/${models.mainImage}`"
                        :alt="`${models.folder}`" />
                      <div class="models-section__slide-description">
                        <div class="models-section__slide-name">
                          {{ models.title }}
                        </div>
                        <div class="models-section__slide-characteristics">
                          <div class="models-section__slide-property">
                            {{ t("Height") }}:
                            <span>{{ models.height }}</span>
                          </div>
                          <div class="models-section__slide-property">
                            {{ t("Weight") }}: <span>{{ models.weight }}</span>
                          </div>
                          <div class="models-section__slide-property">
                            {{ t("Age") }}: <span>{{ models.age }}</span>
                          </div>
                        </div>
                        <div class="models-section__slide-more">
                          <a :href="models._path">{{ t("Invite a model") }}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- If we need scrollbar -->
                  <div class="models-section__swiper-scrollbar"></div>
                </template>
                <!-- Not found slot to display message when no content us is found -->
                <template #not-found>
                  <p>No services found.</p>
                </template>
              </ContentList>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>

<i18n lang="json">{
  "en": {
    "Top Model": "Top Model",
    "years old - MGtimes VIP escort in Dubai": "years old - MGtimes VIP escort in Dubai",
    "My name is": "My name is",
    "Want to know my phone number? Order VIP escort services in Dubai in the best escort agency in Dubai MGtimes": "Want to know my phone number? Order VIP escort services in Dubai in the best escort agency in Dubai MGtimes",
    "Models": "Models",
    "Home page": "Home page",
    "Height": "Height",
    "Weight": "Weight",
    "Age": "Age",
    "About me": "About me",
    "Invite a model": "Invite a model",
    "More information": "More information",
    "More models": "More information",
    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance."
  },
  "ru": {
    "Top Model": "Топ Модель",
    "years old - MGtimes VIP escort in Dubai": "лет - VIP эскорт MGtimes в Дубае",
    "My name is": "Меня зовут",
    "Want to know my phone number? Order VIP escort services in Dubai in the best escort agency in Dubai MGtimes": "Хотите Узнать мой телефон? Закажи VIP эскорт услуги в лучшем эскорт-агентстве Дубая MGtimes ",
    "Models": "Модели",
    "Home page": "Главная страница",
    "Height": "Рост",
    "Weight": "Вес",
    "Age": "Возраст",
    "About me": "Обо мне",
    "Invite a model": "Пригласить модель",
    "More information": "Больше информации",
    "More models": "Ещё модели",
    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": "Ниже вы можете увидеть больше красивых девушек"
  }
}</i18n>
