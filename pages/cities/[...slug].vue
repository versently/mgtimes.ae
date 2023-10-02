<script setup>
const { t, locale } = useI18n({
  useScope: "local",
});
const localePath = useLocalePath();
const { path } = useRoute();
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the cuurent route
  let cities = queryContent().where({ _path: path }).findOne();

  // get the surround information,
  // which is an array of documeents that come before and after the current document
  let surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);
  return {
    cities: await cities,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;

// set the meta
useHead({
  title: data.value.cities.title,

  meta: [
    { name: "description", content: data.value.cities.description },
    // {
    //   hid: "og:image",
    //   property: "og:image",
    //   content: `https://site.com/${data.value.cities .img}`,
    // },
  ],
});
const images = data.value.cities.images;

const revCont = ref(null);
console.log(locale.value)
 revCont.value = 3;
if (locale.value == "en") {
  revCont.value = 3;
} else {
  revCont.value = 10;
}
</script>
<template>
  <main>
    <section class="front-section">
      <img src="/img/index/front-section/bg-image.webp" alt="" />
      <div class="front-section__container">
        <h1 class="front-section__title">
          <!-- Elite escort in  -->
          {{ t("Elite escort in") }} {{ data.cities.titleEnd }}
        </h1>
        <div class="front-section__line"></div>
        <p class="front-section__text">
          {{
            t(
              "For those who appreciate beauty, grooming and sexuality in girls"
            )
          }}
        </p>
        <button class="header__btn-order btn-order front__btn">
          {{ t("Order an escort") }}
        </button>
      </div>
    </section>
    <section class="services-section">
      <div class="services-section__container">
        <div class="services-section__section-name">
          <h3>
            {{ t("Services") }}
          </h3>
        </div>
        <div class="services-section__content">
          <h2 class="services-section__title">
            {{ t("Elite escort from MGTimes agency") }}
          </h2>
          <div class="services-section__line"></div>
          <p class="services-section__text">
            {{
              t(
                "Our agency introduces the confidential services for the VIP-escort, in"
              )
            }}
            {{ data.cities.titleEnd }}
            {{
              t(
                "according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners."
              )
            }}
          </p>
          <button class="services-section__btn btn-order">
            {{ t("Order an escort") }}
          </button>
          <div class="services-section__list">
            <div class="services-section__list-title">
              {{ t("In our agency you can order girls for:") }}
            </div>
            <div class="services-section__list-item">
              <a
                class="services-section__list-link"
                href="/services/romantic-escort-meetings"
              >
                {{ t("Romantic meetings:") }}</a
              >
              <nuxt-img
                loading="lazy"
                src="/img/index/services-section/list/item01.webp"
                alt=""
                sizes="sm:100vw md:50vw lg:400px"
              />
            </div>
            <div class="services-section__list-item">
              <a
                class="services-section__list-link"
                href="/services/models-for-private-events"
              >
                {{ t("Private events:") }}</a
              >
              <nuxt-img
                loading="lazy"
                src="/img/index/services-section/list/item02.webp"
                alt=""
                sizes="sm:100vw md:50vw lg:400px"
              />
            </div>
            <div class="services-section__list-item">
              <a href="/services/models-for-accompanying">{{ t("Escorts") }}</a>
              <nuxt-img
                loading="lazy"
                src="/img/index/services-section/list/item03.webp"
                alt=""
                sizes="sm:100vw md:50vw lg:400px"
              />
            </div>
            <div class="services-section__list-item">
              <a
                class="services-section__list-link"
                href="/services/models-for-travel-support"
                >{{ t("Travel and business trips") }}</a
              >
              <nuxt-img
                loading="lazy"
                src="/img/index/services-section/list/item04.webp"
                alt=""
                sizes="sm:100vw md:50vw lg:400px"
              />
            </div>

            <div class="services-section__list-item">
              <a href="/services/models-for-relationships">{{
                t("Relationships")
              }}</a>
              <nuxt-img
                loading="lazy"
                src="/img/index/services-section/list/item05.webp"
                alt=""
                sizes="sm:100vw md:50vw lg:400px"
              />
            </div>
          </div>
        </div>
        <div class="services-section__decoration">
          <div class="services-section__decoration-img-first">
            <nuxt-img
              loading="lazy"
              src="/img/index/services-section/first-girl.webp"
              alt=""
              sizes="sm:100vw md:50vw lg:400px"
            />
          </div>

          <div class="services-section__decoration-text">Beautiful</div>
          <div class="services-section__decoration-img-second">
            <nuxt-img
              loading="lazy"
              src="/img/index/services-section/second-girl.webp"
              alt=""
              sizes="sm:100vw md:50vw lg:400px"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="models-section">
      <div class="models-section__container">
        <div class="models-section__section-name">
          <h3>
            {{ t("Models") }}
          </h3>
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
              <!-- Default list slot -->
              <template v-slot="{ list }">
                <div class="models-section__swiper-wrapper">
                  <!-- Slides -->
                  <div
                    class="models-section__swiper-slide"
                    v-for="(models, index) in list.slice(0, 20)"
                    :key="models._path"
                  >
                    <nuxt-img
                      loading="lazy"
                      :src="`/assets/img/models/${models.folder}/${models.mainImage}`"
                      :alt="`${models.folder}`"
                      sizes="sm:100vw md:50vw lg:400px"
                    />

                    <div class="models-section__slide-description">
                      <div class="models-section__slide-name">
                        {{ models.title }}
                      </div>
                      <div class="models-section__slide-characteristics">
                        <div class="models-section__slide-property">
                          {{ t("Height") }}: <span>{{ models.height }}</span>
                        </div>
                        <div class="models-section__slide-property">
                          {{ t("Weight") }}: <span>{{ models.weight }}</span>
                        </div>
                        <div class="models-section__slide-property">
                          {{ t("Age") }}: <span>{{ models.age }}</span>
                        </div>
                      </div>
                      <div class="models-section__slide-more">
                        <a :href="models._path">{{ t("More information") }}</a>
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
    <section class="advantages-section">
      <div class="advantages-section__container">
        <div class="advantages-section__section-name">
          <h3>{{ t("Advantages") }}</h3>
        </div>
        <div class="advantages-section__content">
          <div class="advantages-section__rows">
            <div class="advantages-section__rows-item">
              <div class="advantages-section__item-num">500 +</div>
              <div class="advantages-section__item-text">
                {{
                  t(
                    "More than 500 of satisfied clients due to the individual work with every case and strict classification of the personnel within the agency"
                  )
                }}
              </div>
            </div>
            <div class="advantages-section__rows-item">
              <div class="advantages-section__item-num">100%</div>
              <div class="advantages-section__item-text">
                {{
                  t(
                    "100% real photos of every candidate, allowing to pick the escort that fully corresponds to the set preferences"
                  )
                }}
              </div>
            </div>
            <div class="advantages-section__rows-item">
              <div class="advantages-section__item-num">100%</div>
              <div class="advantages-section__item-text">
                {{
                  t(
                    "100% confidentiality for the clients and safety of the database"
                  )
                }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="girl__swiper-w">
      <section class="girl__swiper" data-swiper-autoplay="2000">
        <div class="swiper-wrapper">
          <!-- Slides -->
          <div class="swiper-slide">
            <video
              loading="lazy"
              autoplay
              loop
              muted
              playsinline
              src="/img/video/01.mp4"
            ></video>
          </div>
          <div class="swiper-slide">
            <video
              loading="lazy"
              loop
              muted
              playsinline
              src="/img/video/02.mp4"
            ></video>
          </div>
          <div class="swiper-slide">
            <video
              loading="lazy"
              loop
              muted
              playsinline
              src="/img/video/03.mp4"
            ></video>
          </div>
          <div class="swiper-slide">
            <video
              loading="lazy"
              loop
              muted
              playsinline
              src="/img/video/04.mp4"
            ></video>
          </div>
          <div class="swiper-slide">
            <video
              loading="lazy"
              loop
              muted
              playsinline
              src="/img/video/05.mp4"
            ></video>
          </div>
          <div class="swiper-slide">
            <video
              loading="lazy"
              loop
              muted
              playsinline
              src="/img/video/06.mp4"
            ></video>
          </div>
          <div class="swiper-slide">
            <video
              loading="lazy"
              loop
              muted
              playsinline
              src="/img/video/07.mp4"
            ></video>
          </div>
          <!-- <div class="swiper-slide">
            <div></div>
          </div> -->
        </div>
        <!-- If we need scrollbar -->
        <div
          style="margin-top: 1.25rem; display: none !important"
          class="model__swiper-scrollbar-img"
        ></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
      </section>
    </div>
    <section class="casting-section">
      <div class="casting-section__container">
        <div class="casting-section__section-name">
          <h3>{{ t("Casting") }}</h3>
        </div>
        <div class="casting-section__content">
          <div class="casting-section__content-img">
            <nuxt-img
              src="/img/index/casting-section/main-img.webp"
              alt=""
              sizes="sm:100vw md:50vw lg:400px"
            />
          </div>
          <div class="casting-section__text">
            {{ t("Workingin") }}
          </div>
          <a href="/casting" class="casting-section__item-btn">
            {{ t("More information") }}
          </a>
          <div class="casting-section__decoration">
            <div class="casting-section__decoration-text">
              {{ t("Casting") }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <div class="additional-reviews-section">
      <div class="additional-reviews-section__container">
        <div class="additional-reviews-section__section-name">
          <h3>{{ t("Reviews") }}</h3>
        </div>
        <div class="additional-reviews-section__content">
          <div class="additional-reviews-section__swiper reviews">
            <!-- Additional required wrapper -->
            <div class="additional-reviews-section__swiper-wrapper reviews">
              <!-- Slides -->
              <div
                class="additional-reviews-section__swiper-slide reviews"
                v-for="reviews in revCont"
                :key="reviews"
              >
                <nuxt-img
                  loading="lazy"
                  :src="`/img/reviews/${$i18n.locale}/${reviews}.webp`"
                  alt="reviews"
                  sizes="sm:100vw md:50vw lg:400px"
                />
              </div>
            </div>
            <!-- If we need scrollbar -->
            <div
              class="additional-reviews-section__swiper-scrollbar reviews"
            ></div>
          </div>
        </div>
      </div>
    </div>
    <section class="vip-section">
      <div class="vip-section__container">
        <div class="vip-section__section-name">
          <h3>{{ t("VIP-girls in") }}  {{ data.cities.titleEnd }}</h3>
        </div>
        <div class="vip-section__content">
          <div class="vip-section__title">{{ t("VIP — escort") }}</div>
          <div class="vip-section__line"></div>
          <div class="vip-section__text">
            {{
              t(
                "Any additional information can be requested via sent e-mail or phone call request."
              )
            }}
          </div>

          <div class="vip-section__decoration">
            <div class="vip-section__decoration-text">Charming girls</div>
            <div class="vip-section__side-img">
              <nuxt-img
                loading="lazy"
                src="/img/index/vip-section/side-img.webp"
                alt=""
                sizes="sm:100vw md:50vw lg:400px"
              />
            </div>
            <div class="vip-section__main-img">
              <nuxt-img
                loading="lazy"
                src="/img/index/vip-section/main-img.webp"
                alt=""
                sizes="sm:100vw md:50vw lg:400px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="additional-services-section">
      <div class="additional-services-section__container">
        <div class="additional-services-section__section-name">
          <h3>{{ t("Additional services") }}</h3>
        </div>
        <div class="additional-services-section__content">
          <div class="additional-services-section__swiper">
            <ContentList
              :path="localePath('/services')"
              :query="{
                only: ['title', 'about', 'tags', '_path', 'img'],
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
                    v-for="services in list"
                    :key="services._path"
                  >
                    <nuxt-img
                      loading="lazy"
                      :src="`/assets/img/services/${services.img}.webp`"
                      :alt="services.title"
                      sizes="sm:100vw md:50vw lg:400px"
                    />

                    <div class="additional-services-section__slide-description">
                      <div class="additional-services-section__slide-title">
                        {{ services.title }}
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

    <section class="media-section">
      <div class="media-section__container">
        <div class="media-section__section-name">
          <h3>{{ t("Media") }}</h3>
        </div>

        <div class="media-section__content">
          <div class="media-section__list">
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
                  'date',
                ],
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
                <div
                  class="media-section__list-item"
                  v-for="(media, index) in list.slice(-1)"
                  :key="media._path"
                >
                  <nuxt-img
                    loading="lazy"
                    :src="`/assets/img/media/${media.folder}/${media.mainImage}`"
                    :alt="media.title"
                  />
                  <div class="media-section__item-content">
                    <div class="media-section__item-shell-title-date">
                      <div class="media-section__item-title">
                        {{ media.title }}
                      </div>
                      <div class="media-section__item-date">
                        {{ media.date }}
                      </div>
                    </div>
                    <div class="media-section__item-text">
                      {{ media.description }}
                    </div>
                    <div class="media-section__item-more">
                      <a :href="media._path" class="media-section__more-link">
                        {{ t("More information") }}</a
                      >
                    </div>
                  </div>
                </div>
              </template>
              <!-- Not found slot to display message when no content us is found -->
              <template #not-found>
                <p>No services found.</p>
              </template>
            </ContentList>
          </div>
          <a href="/media" class="media-section__item-btn">
            {{ t("View all") }}</a
          >
        </div>
        <div class="media-section__decoration">
          <div class="media-section__decoration-text">News</div>
        </div>
      </div>
    </section>
  </main>
</template>
<i18n lang="json">
{
  "en": {
    "titleMeta": "Elite escort services in Dubai 🖤 VIP girls / MGTIMES",
    "descriptionMeta": "Escort services and model escorts in Dubai. Elite escort agency for successful men! Selection of VIP models to accompany. Strictly confidential 📞 +971 58 525 2213 ⚡",

    "Elite escort in ": "Elite escort in",

    "For those who appreciate beauty, grooming and sexuality in girls": "For those who appreciate beauty, grooming and sexuality in girls",

    "Order an escort": "Order an escort",

    "Services": "Services",

    "VIP — escort": "VIP — escort",

    "Elite escort from MGTimes agency": "Elite escort from MGTimes agency",

    "Our agency introduces the confidential services for the VIP-escort, in": "Our agency introduces the confidential services for the VIP-escort, in",
    
    "according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners.": "according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners.",

    "In our agency you can order girls for:": "In our agency you can order girls for:",

    "Romantic meetings:": "Romantic meetings:",

    "Private events:": "Private events:",

    "Relationships": "Relationships",

    "Travel and business trips": "Travel and business trips",

    "Escorts": "Escorts",

    "Reviews": "Reviews",

    "Models": "Models",

    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.",

    "Advantages": "Advantages",

    "More than 500 of satisfied clients due to the individual work with every case and strict classification of the personnel within the agency": "More than 500 of satisfied clients due to the individual work with every case and strict classification of the personnel within the agency",

    "100%": "100%",

    "100% confidentiality for the clients and safety of the database": "100% confidentiality for the clients and safety of the database",

    "100% real photos of every candidate, allowing to pick the escort that fully corresponds to the set preferences": "100% real photos of every candidate, allowing to pick the escort that fully corresponds to the set preferences",

    "Casting": "Casting",

    "More information": "More information",

    "Workingin": "Working in escort services is a conscious choice of every girl. It is a good opportunity for you to get a high-paying job, start a new life, fill it with cool acquaintances, bright trips and unforgettable emotions. The MGTimes agency helps beautiful model girls to become real muses of rich patrons. They are willing to pay money for pleasant company and joint leisure. ",

    "VIP-girls in ": "VIP-girls in ",

    "Any additional information can be requested via sent e-mail or phone call request.": "Any additional information can be requested via sent e-mail or phone call request.",

    "Media": "Media",

    "What is an escort?": "What is an escort?",

    "In modern society there are professions that are rarely spoken out loud. One of these is the activity of escorts. Let's figure out what an escort is and what the representatives of the direction are doing.": "In modern society there are professions that are rarely spoken out loud. One of these is the activity of escorts. Let's figure out what an escort is and what the representatives of the direction are doing.",

    "View all": "View all",
    "Additional services": "Services",
    "Height": "Height",
    "Weight": "Weight",
    "Age": "Age"
  },
  "ru": {
    "titleMeta": "Элитные эскорт услуги в Дубае 🖤 VIP девушки / MGTIMES",
    "descriptionMeta": "Эскорт услуги и сопровождение моделей в Дубае. Элитное эскорт агентство для успешных мужчин! Подбор VIP моделей для сопровождения. Строго конфиденциально 📞 +971 58 525 2213 ⚡",

    "Elite escort in": "VIP Эскорт № 1 в",

    "For those who appreciate beauty, grooming and sexuality in girls": "Для тех, кто ценит в девушках красоту, ухоженность и сексуальность",

    "Order an escort": "Заказать эскорт",

    "Services": "Услуги",

    "VIP — escort": "VIP — эскорт",

    "Elite escort from MGTimes agency": "Элитный эскорт от агенства MGTimes",

    "Our agency introduces the confidential services for the VIP-escort, in": "VIP-сопровождение в",
    
    "according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners.": "требуется состоятельному мужчине чтобы получать удовольствие от того, что он отдыхает с красивой девушкой. Это эмоциональная разгрузка и наслаждение! Данную услугу предлагает наше эскорт-агентство MGTimes. Мы гарантируем VIP-эскорт высокого качества, подбираем моделей в строгом соответствии с требованиями и пожеланиями клиентов.",

    "In our agency you can order girls for:": "В нашем агенстве можно заказать девушек для:",

    "Romantic meetings:": "Романтических встреч",

    "Private events:": "Для частных мероприятий",

    "Relationships": "Отношений",

    "Travel and business trips": "Путешествий и деловых поездок",

    "Escorts": "Сопровождения",

    "Reviews": "Отзывы",

    "Models": "Модели",

    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": "В целях конфиденциальности на сайте представлены анкеты - типажи, чтобы передать красоту, женственность и элегантность наших девушек.",

    "Advantages": "Преимущества",

    "More than 500 of satisfied clients due to the individual work with every case and strict classification of the personnel within the agency": "Довольных клиентов благодаря индивидуальному подходу к каждому и строгому отбору моделей, наши клиенты остаются довольны",

    "100%": "100%",

    "100% confidentiality for the clients and safety of the database": "Мы гарантируем полную анонимность и конфиденциальность для наших клиентов",

    "100% real photos of every candidate, allowing to pick the escort that fully corresponds to the set preferences": "В нашем элитном эскорт агенстве: фото моделей полностью соответствуют действительности",

    "Casting": "Casting",

    "More information": "Узнать подробнее",

    "Workingin": "Работа в нашем эскорт-агентстве – это удел для избранных, которых ждут яхты, эксклюзивные частные мероприятия, поездки по разным странам. Если вы мечтаете устроиться на престижную работу, которая приносит удовольствие и знакомства с успешными мужчинами, приглашаем пройти кастинг. В «MGTimes» открыты вакансии, и вполне возможно, что именно вы станете теми моделями, перед которыми будут открыты все двери в мир шикарной жизни.",

    "VIP-girls in": "VIP-девушки в",

    "Any additional information can be requested via sent e-mail or phone call request.": "Все вопросы по VIP-сопровождению и прочим услугам нашего эскорт-агентства можно задать нашим менеджерам через мессенджеры или отправив письмо по электронной почте.",

    "Charming girls": "Charming girls",

    "Media": "Медиа",

    "What is an escort?": "Что такое эскорт?",

    "In modern society there are professions that are rarely spoken out loud. One of these is the activity of escorts. Let's figure out what an escort is and what the representatives of the direction are doing.": "В современном обществе есть профессии, о которых редко говорят вслух. К одной из таких относится деятельность эскортниц. Разберемся, что такое эскорт и чем занимаются представительницы направления.",

    "View all": "Посмотреть все",
    "Additional services": "Услуги",
    "Height": "Рост",
    "Weight": "Вес",
    "Age": "Возраст"
  }
}
</i18n>
