<script setup>
const { t, locale } = useI18n({
  useScope: "local",
});
const route = useRoute();
// формируем каноникал
const canonicalUrl = `https://mgtimes.ae${route.path}`

useHead({
  title: t("titleMeta"),

  meta: [
    {
      name: "description",
      content: t("descriptionMeta"),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: canonicalUrl,
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
console.log(locale.value);

</script>
<template>
  <main>
    <section class="front-section">
      <img src="/img/index/front-section/bg-image.webp" alt="" />
      <div class="front-section__container">
        <h1 class="front-section__title">
          <!-- Elite escort in Dubai -->
          {{ t("Elite escort in Dubai") }}
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
          <p class="services-section__text services-section__text-arab">
            {{
              t(
                "Our agency introduces the confidential services for the VIP-escort, in Dubai according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners."
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
              <a
                class="services-section__list-link"
                href="/services/models-for-accompanying"
                >{{ t("Escorts") }}</a
              >
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
              <a
                class="services-section__list-link"
                href="/services/models-for-relationships"
                >{{ t("Relationships") }}</a
              >
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
          <p class="models-section__content-text">
            {{
              t(
                "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance."
              )
            }}
          </p>
          <div class="models-section__swiper">
            <!-- Additional required wrapper -->
            <ContentList
              :path="localePath('/girls')"
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
          <h3>{{ t("VIP-girls in Dubai") }}</h3>
        </div>
        <div class="vip-section__content">
          <div style="max-width: 400px;" class="vip-section__title">{{ t("VIP — escort") }}</div>
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
          <a :href="localePath('/media')" class="media-section__item-btn">
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
    "titleMeta": "VIP high class escort Dubai, luxury escorts - MGTimes",
    "descriptionMeta": "VIP escort in Dubai by MGTimes — offering premium companionship, discretion, and luxury experiences. Elite VIP escorts in Dubai for exclusive events, private meetings.",

    "Elite escort in Dubai": "VIP Escort Dubai",

    "For those who appreciate beauty, grooming and sexuality in girls": "For those who admire beauty, charm, and elegance in women, our elite escort offerings in the UAE deliver an exceptional experience through refined companionship and exclusive treatment.",

    "Order an escort": "Order an escort",

    "Services": "VIP Escort Dubai",

    "VIP — escort": "VIP — escort",

    "Elite escort from MGTimes agency": "Elite escort from MGTimes agency",

    "Our agency introduces the confidential services for the VIP-escort, in Dubai according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners.": "Welcome to MGTimes — a distinguished Dubai escort agency that offers personalized and confidential escort services for discerning clients in the United Arab Emirates. Whether you seek attention, companionship, or a way to reflect your success, our vip escort dubai packages are curated to your preferences.",

    "In our agency you can order girls for:": "In our agency you can order girls :",

    "Romantic meetings:": "Romantic meetings:",

    "Private events:": "Private events:",

    "Relationships": "Relationships",

    "Travel and business trips": "Travel and business trips",

    "Escorts": "Escorts",

    "Reviews": "Reviews",

    "Models": "Escort Girls Dubai",

    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": "Each of our escort models dubai has a verified profile with 100% real photos. These dubai escort girls embody femininity, poise, and allure, making them the perfect companions for your events or travels. Explore our elite escort site dubai to view the profiles and select a model who perfectly matches your style and preferences.",

    "Advantages": "Advantages",

    "More than 500 of satisfied clients due to the individual work with every case and strict classification of the personnel within the agency": "We’ve proudly served over 500 clients with individual care and attention to detail. Our strict internal standards ensure you always meet top-tier escort dubai companions.",

    "100%": "100%",

    "100% confidentiality for the clients and safety of the database": "All escort girls dubai showcased on our platform use genuine, updated photos. What you see is exactly what you get.",

    "100% real photos of every candidate, allowing to pick the escort that fully corresponds to the set preferences": "Your privacy is our priority. From your first inquiry to the end of the meeting, we guarantee 100% discretion and data security.",

    "Casting": "Casting",

    "More information": "More information",

    "Workingin": "Interested in becoming part of our elite escort dubai team? Our casting process is open to confident, ambitious women who want a luxurious lifestyle, unforgettable travel, and respectful clients. Working in escort services is a conscious, empowered choice. MGTimes supports its models in every step — from onboarding to connecting with generous patrons seeking the best escort services dubai.",

    "VIP-girls in Dubai": "SERVICES",

    "Any additional information can be requested via sent e-mail or phone call request.": "Explore genuine reviews from clients who’ve experienced our vip escort offerings first-hand. For more information on bookings, availability, or the escort agency dubai process, feel free to reach out: Email or Call us directly  Our team is ready to assist with everything you need to find the ideal escort dubai companion.",

    "Media": "Media",

    "What is an escort?": "What is an escort?",

    "In modern society there are professions that are rarely spoken out loud. One of these is the activity of escorts. Let's figure out what an escort is and what the representatives of the direction are doing.": "In modern society there are professions that are rarely spoken out loud. One of these is the activity of escorts. Let's figure out what an escort is and what the representatives of the direction are doing.",

    "View all": "View all",
    "Additional services": "VIP-girls in UAE",
    "Height": "Height",
    "Weight": "Weight",
    "Age": "Age"
  },
  "ru": {
    "titleMeta": "Эскорт Дубай - VIP агентство MGTimes",
    "descriptionMeta": "ВИП эскорт в Дубае от MGTimes — предлагаем первоклассное сопровождение, конфиденциальность и роскошные впечатления. Элитные VIP эскортницы в Дубае для эксклюзивных мероприятий и частных встреч.",

    "Elite escort in Dubai": "Элитный эскорт Дубай",

    "For those who appreciate beauty, grooming and sexuality in girls": "Для мужчин, которые ценят в девушках красоту, ухоженность и сексуальность, MGTimes предлагает лучшее VIP сопровождение в Объединённых Арабских Эмиратах.",

    "Order an escort": "Заказать эскорт",

    "Services": "VIP-девушки в ОАЭ",

    "VIP — escort": "Хотите получить подробности о VIP эскорте в Дубае или задать вопрос? ",

    "Elite escort from MGTimes agency": "Элитный эскорт от агентства MGTimes",

    "Our agency introduces the confidential services for the VIP-escort, in Dubai according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners.": "Эмоциональное расслабление, тонкое удовольствие и статусное сопровождение — всё это предлагает эскорт-агентство в Дубае MGTimes. Мы предоставляем услуги эскорта в Дубае для состоятельных мужчин, которые ценят качество во всём. Каждая из наших моделей эскорта из Дубая — это не просто визуальное наслаждение, но и образец утончённости и высокого уровня общения. Мы подбираем элитных девушек в Дубае с учётом всех пожеланий клиента.",

    "In our agency you can order girls for:": "В нашем агентстве можно заказать девушек для:",

    "Romantic meetings:": "Романтических встреч",

    "Private events:": "Для частных мероприятий",

    "Relationships": "Отношений",

    "Travel and business trips": "Путешествий и деловых поездок",

    "Escorts": "Сопровождения",

    "Reviews": "Отзывы",

    "Models": "Модели",

    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": "В целях конфиденциальности на сайте элитного эскорта в Дубае размещены не полные анкеты, а типажи девушек. Это позволяет передать их красоту, женственность и элегантность, не нарушая приватности. Каждая из наших моделей эскорта в Дубае прошла строгий отбор, и все фотографии на сайте являются настоящими. Вы выбираете именно ту девушку из эскорта Дубая, которую видите.",

    "Advantages": "Преимущества",

    "More than 500 of satisfied clients due to the individual work with every case and strict classification of the personnel within the agency": "Благодаря индивидуальному подходу и высокому уровню отбора моделей, наши услуги эскорта получили признание у более чем 500 мужчин.",

    "100%": "100%",

    "100% confidentiality for the clients and safety of the database": "В нашем элитном эскорт агентстве: фото моделей полностью соответствуют действительности",

    "100% real photos of every candidate, allowing to pick the escort that fully corresponds to the set preferences": "Мы строго соблюдаем приватность и обеспечиваем полную защиту данных — ваша анонимность гарантирована.",

    "Casting": "Casting",

    "More information": "Узнать подробнее",

    "Workingin": "Работа в элитном эскорте MGTimes — это выбор для уверенных и амбициозных девушек. Частные вечеринки на яхтах, поездки за границу, встречи с успешными мужчинами — всё это открывается тем, кто становится частью нашей команды. Если вы хотите стильной жизни, ярких впечатлений и щедрых поклонников — приходите на кастинг в эскорт агентство в Дубае. Возможно, именно вы станете следующей звездой среди моделей эскорта из Дубая.",

    "VIP-girls in Dubai": "Услуги",

    "Any additional information can be requested via sent e-mail or phone call request.": " Свяжитесь с нашими менеджерами через мессенджеры или по электронной почте. Мы ответим на любые вопросы и поможем выбрать лучшую девушку эскорта в Дубае для вашего случая.",

    "Charming girls": "VIP-девушки в Дубае",

    "Media": "Медиа",

    "What is an escort?": "Что такое эскорт?",

    "In modern society there are professions that are rarely spoken out loud. One of these is the activity of escorts. Let's figure out what an escort is and what the representatives of the direction are doing.": "В современном обществе есть профессии, о которых редко говорят вслух. К одной из таких относится деятельность эскортниц. Разберемся, что такое эскорт и чем занимаются представительницы направления.",

    "View all": "Посмотреть все",
    "Additional services": "Услуги",
    "Height": "Рост",
    "Weight": "Вес",
    "Age": "Возраст"
  },
  "ar": {
    "titleMeta": "VIP high class escort Dubai, luxury escorts - MGTimes",
    "descriptionMeta": "VIP escort in Dubai by MGTimes — offering premium companionship, discretion, and luxury experiences. Elite VIP escorts in Dubai for exclusive events, private meetings.",

    "Elite escort in Dubai": "النخبة المرافقة في دبي",

    "For those who appreciate beauty, grooming and sexuality in girls": "لأولئك الذين يقدّرون الجمال والأناقة والجاذبية في الفتيات",

    "Order an escort": "طلب الخدمة",

    "Services": "الخدمات",

    "VIP — escort": "مرافقة VIP",

    "Elite escort from MGTimes agency": " مرافقة النخبة من وكالة MGTimes",

    "Our agency introduces the confidential services for the VIP-escort, in Dubai according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners.": " .تقدم وكالتنا خدمات سرية لمرافقة الشخصيات المهمة في دبي، وفقًا لتفضيلاتك. سنساعدك على الاستمتاع باهتمام السيدات وإبراز مكانتك المرموقة من خلال خدمات نخبة من المحترفات بمختلف معايير الجمال. عند استخدام خدمات MGTimes، يمكنك أن تطمئن إلى أن العارضة المختارة للفعالية ستكون مثالية من جميع الجوانب، بدءًا من المظهر وصولاً إلى الآداب والسلوك",

    "In our agency you can order girls for:": ":في وكالتنا يمكنك طلب فتيات من أجل",

    "Romantic meetings:": "اللقاءات الرومانسية",

    "Private events:": "الفعاليات الخاصة",

    "Relationships": " العلاقات",

    "Travel and business trips": " الرحلات والسفر للأعمال",

    "Escorts": "المرافقة",

    "Reviews": "التقييمات",

    "Models": "العارضات",

    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": ".فيما يلي يمكنك مشاهدة ملفات تعريف الفتيات الجميلات التي تعكس جمالهن وأنوثتهن ورقتهن",

    "Advantages": " المميزات ",

    "More than 500 of satisfied clients due to the individual work with every case and strict classification of the personnel within the agency": ".أكثر من 500 عميل راضٍ بفضل العمل الفردي مع كل حالة والتصنيف الدقيق للموظفين داخل الوكالة",

    "100%": "100%",

    "100% confidentiality for the clients and safety of the database": ".سرية تامة بنسبة 100% للعملاء وأمان كامل لقاعدة البيانات",

    "100% real photos of every candidate, allowing to pick the escort that fully corresponds to the set preferences": ".صور حقيقية بنسبة 100% لكل مرشحة، مما يتيح اختيار المرافقة التي تتوافق تمامًا مع التفضيلات المحددة",

    "Casting": "تجارب الأداء",

    "More information": " مزيد من المعلومات",

    "Workingin": ".العمل في خدمات المرافقة هو اختيار واعٍ لكل فتاة. إنها فرصة جيدة للحصول على وظيفة ذات دخل مرتفع، وبدء حياة جديدة مليئة بالمعارف المميزة، والرحلات الممتعة، والمشاعر التي لا تُنسى. تساعد وكالة MGTimes الفتيات الجميلات من ذوات المظهر النموذجي على أن يصبحن مصدر إلهام حقيقي لرعاة أثرياء. هؤلاء الأشخاص مستعدون لدفع المال لقاء الرفقة الممتعة وقضاء أوقات الفراغ المشتركة",

    "VIP-girls in Dubai": " فتيات VIP في دبي",

    "Any additional information can be requested via sent e-mail or phone call request.": ".يمكن طلب أي معلومات إضافية عبر البريد الإلكتروني المرسل أو عن طريق الاتصال الهاتفي",

    "Media": "وسائط",

    "What is an escort?": "What is an escort?",

    "In modern society there are professions that are rarely spoken out loud. One of these is the activity of escorts. Let's figure out what an escort is and what the representatives of the direction are doing.": "In modern society there are professions that are rarely spoken out loud. One of these is the activity of escorts. Let's figure out what an escort is and what the representatives of the direction are doing.",

    "View all": "عرض الكل",
    "Additional services": "الخدمات",
    "Height": "ارتفاع",
    "Weight": "وزن",
    "Age": "عمر"
  }
}
</i18n>
