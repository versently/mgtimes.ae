<script setup>
const { t, locale } = useI18n({
  useScope: "local",
});
const route = useRoute();
// формируем каноникал
const canonicalUrl = `https://mgtimes.ae${route.path}`;

const vipText = computed(() => {
  return locale.value === "ru" ? vipTextRu : vipTextEn;
});

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
              "For those who appreciate beauty, grooming and sexuality in girls",
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
                "Our agency introduces the confidential services for the VIP-escort, in Dubai according to your preferences. We will help you to enjoy, the women’s attention, show the successful status, receiving the, service from our elite professionals of any existing beauty, standard. While using the services of MGTimes, you can rest assured, that the model picked for the event will be impeccable in every, aspect, from appearance to manners.",
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
                "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.",
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

    <!-- Новая секция с текстом о VIP эскорте -->
    <section class="vip-text-section">
      <div class="vip-text-section__container">
        <div class="vip-text-section__section-name">
          <h2 class="vip-text-section-h2">{{ t("vipTitle1") }}</h2>
        </div>
        <div class="vip-text-section__content">
          <div class="vip-text-section__text aboutNew-text">
            <p>{{ t("vipText1") }}</p>
            <p>{{ t("vipText2") }}</p>

            <h2>{{ t("vipTitle2") }}</h2>
            <p>{{ t("vipText3") }}</p>
            <p>{{ t("vipText4") }}</p>

            <h2>{{ t("vipTitle3") }}</h2>
            <p>{{ t("vipText5") }}</p>
            <ul>
              <li>
                {{ t("vipLi1") }}
              </li>
              <li>
                {{ t("vipLi2") }}
              </li>
              <li>
                {{ t("vipLi3") }}
              </li>
              <li>
                {{ t("vipLi4") }}
              </li>
              <li>
                {{ t("vipLi5") }}
              </li>
            </ul>
            <p>{{ t("vipText6") }}</p>

            <h2>{{ t("vipTitle4") }}</h2>
            <p>{{ t("vipText7") }}</p>
            <p>{{ t("vipText8") }}</p>

            <h2>{{ t("vipTitle5") }}</h2>
            <p>{{ t("vipText9") }}</p>
            <p>{{ t("vipText10") }}</p>

            <h2>{{ t("vipTitle6") }}</h2>
            <p>{{ t("vipText11") }}</p>
            <p>{{ t("vipText12") }}</p>
          </div>
        </div>
      </div>
    </section>

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
                    "More than 500 of satisfied clients due to the individual work with every case and strict classification of the personnel within the agency",
                  )
                }}
              </div>
            </div>
            <div class="advantages-section__rows-item">
              <div class="advantages-section__item-num">100%</div>
              <div class="advantages-section__item-text">
                {{
                  t(
                    "100% real photos of every candidate, allowing to pick the escort that fully corresponds to the set preferences",
                  )
                }}
              </div>
            </div>
            <div class="advantages-section__rows-item">
              <div class="advantages-section__item-num">100%</div>
              <div class="advantages-section__item-text">
                {{
                  t(
                    "100% confidentiality for the clients and safety of the database",
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
          <div style="max-width: 400px" class="vip-section__title">
            {{ t("VIP — escort") }}
          </div>
          <div class="vip-section__line"></div>
          <div class="vip-section__text">
            {{
              t(
                "Any additional information can be requested via sent e-mail or phone call request.",
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
    "titleMeta": "VIP Escort Agency Dubai, Luxury & Elite Escorts – MGTimes",
    "descriptionMeta": "MGTimes, a VIP escort agency in Dubai, offers first-class service, confidentiality, and a luxurious experience. Top models!",

    "Elite escort in Dubai": "Escort models in Dubai",

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
    "Age": "Age",

    "vipTitle1": "MGTimes — Elite VIP Escort Agency in Dubai",
    "vipText1": "MGTimes is a premium VIP Escort Agency in Dubai, offering a refined experience for clients who value discretion, elegance, and exceptional companionship. We specialize in connecting sophisticated individuals with carefully selected companions who embody beauty, intelligence, and impeccable manners.",
    "vipText2": "In a city known for luxury and high standards, MGTimes stands out by delivering a service that goes beyond expectations. Every detail is handled with precision — from the first contact to the final moment — ensuring a seamless and confidential experience.",
    "vipTitle2": "Exclusive Companionship for a Discerning Lifestyle",
    "vipText3": "At MGTimes, we understand that our clients seek more than just company. They are looking for presence, charm, and meaningful connection. Our companions are chosen not only for their appearance but also for their personality, communication skills, and ability to adapt to different social environments.",
    "vipText4": "Whether you need a stunning partner for a high-profile event, a private evening, or a business trip, our Dubai VIP escort service is tailored to your individual preferences.",
    "vipTitle3": "Why Choose MGTimes",
    "vipText5": "Choosing the right escort agency in Dubai is about trust and quality. MGTimes has built its reputation on:",
    "vipLi1": "Absolute discretion and privacy",
    "vipLi2": "Carefully verified and professional companions",
    "vipLi3": "Personalized service for each client",
    "vipLi4": "Availability for local and international arrangements",
    "vipLi5": "High standards of safety and professionalism",
    "vipText6": "We work with clients who expect excellence — and we deliver it consistently.",
    "vipTitle4": "A Luxury Experience in Dubai",
    "vipText7": "Dubai is a city where luxury is part of everyday life, and your experience should reflect that. As a trusted VIP escort agency in Dubai, MGTimes provides access to companions who fit seamlessly into this world of sophistication.",
    "vipText8": "From exclusive dinners in five-star restaurants to private yacht experiences or luxury hotel stays, our service complements the lifestyle you deserve.",
    "vipTitle5": "Confidentiality Comes First",
    "vipText9": "We prioritize your privacy above all else. Every interaction with MGTimes is handled with complete confidentiality. Our clients include business professionals, travelers, and individuals who value discretion and a high level of service.",
    "vipText10": "You can be confident that your identity and preferences remain strictly protected.",
    "vipTitle6": "Book with Confidence",
    "vipText11": "If you are searching for a reliable and refined Dubai escort agency, MGTimes offers a level of service designed for those who expect the best.",
    "vipText12": "Contact us today to discover a new standard of luxury companionship in Dubai — where elegance meets discretion, and every moment is tailored to you."
  },
  "ru": {
    "titleMeta": "Элитное эскорт-агентство Дубай, услуги сопровождения – MGTimes",
    "descriptionMeta": "VIP эскорт-агентство в Дубае — MGTimes: предлагаем первоклассное сопровождение, конфиденциальность и роскошные впечатления. Лучшие модели!",
    "Elite escort in Dubai": "Эскорт услуги в Дубае – агентство MGTimes",

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
    "Age": "Возраст",
    "vipTitle1": "MGTimes — Элитное VIP эскорт-агентство в Дубае",
    "vipText1": "MGTimes — это премиальное VIP эскорт-агентство в Дубае, предлагающее изысканный сервис для клиентов, которые ценят конфиденциальность, элегантность и исключительное сопровождение. Мы специализируемся на подборе утончённых спутниц, сочетающих в себе красоту, интеллект и безупречные манеры.",
    "vipText2": "В городе, где роскошь является стандартом, MGTimes выделяется высоким уровнем сервиса и вниманием к деталям. Каждый этап — от первого обращения до завершения встречи — организован так, чтобы обеспечить комфортный и полностью конфиденциальный опыт.",
    "vipTitle2": "Эксклюзивное сопровождение для требовательных клиентов",
    "vipText3": "В MGTimes мы понимаем, что наши клиенты ищут не просто компанию. Им важны харизма, стиль и живое общение. Наши спутницы отбираются не только по внешности, но и по личным качествам, умению вести беседу и адаптироваться к различным ситуациям.",
    "vipText4": "Будь то сопровождение на закрытое мероприятие, частный вечер или деловая поездка — наш VIP эскорт в Дубае подстраивается под ваши пожелания.",
    "vipTitle3": "Почему выбирают MGTimes",
    "vipText5": "Выбор надежного эскорт-агентства в Дубае — это вопрос доверия и качества. MGTimes строит свою репутацию на:",
    "vipLi1": "полной конфиденциальности",
    "vipLi2": "тщательном отборе и профессионализме спутниц",
    "vipLi3": "индивидуальном подходе к каждому клиенту",
    "vipLi4": "возможности организации встреч как в Дубае, так и за его пределами",
    "vipLi5": "высоких стандартах безопасности и сервиса",
    "vipText6": "Мы работаем с клиентами, которые привыкли к лучшему — и соответствуем этим ожиданиям.",
    "vipTitle4": "Роскошный опыт в Дубае",
    "vipText7": "Дубай — это город, где роскошь является частью повседневной жизни, и ваш опыт должен соответствовать этому уровню. Как проверенное VIP эскорт-агентство в Дубае, MGTimes предоставляет доступ к спутницам, которые органично вписываются в мир высокого класса.",
    "vipText8": "Ужин в ресторане уровня five-star, прогулка на яхте или отдых в люксовом отеле — наше сопровождение идеально дополняет ваш образ жизни.",
    "vipTitle5": "Конфиденциальность прежде всего",
    "vipText9": "Мы ставим приватность на первое место. Все взаимодействия с MGTimes проходят с максимальной осторожностью и анонимностью. Среди наших клиентов — бизнесмены, путешественники и люди, ценящие высокий уровень сервиса.",
    "vipText10": "Вы можете быть уверены: ваша личность и ваши предпочтения остаются строго конфиденциальными.",
    "vipTitle6": "Бронируйте с уверенностью",
    "vipText11": "Если вы ищете надежное и премиальное эскорт-агентство в Дубае, MGTimes предлагает сервис, созданный для тех, кто привык к лучшему.",
    "vipText12": "Свяжитесь с нами уже сегодня, чтобы открыть для себя новый уровень сопровождения в Дубае — где элегантность сочетается с конфиденциальностью, а каждый момент продуман до мелочей."
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
    "Age": "عمر",
    "VIP escort Dubai": "عن VIP مرافقة في دبي",
    "vipText": "",
    "vipTitle1": "VIP Escort in Dubai - Premium Companionship & Exclusive Services by MGTimes",
    "vipText": "VIP Escort in Dubai - Premium Companionship & Exclusive Services by MGTimes",
    "vipText1": "Dubai is a global symbol of luxury, prestige, and uncompromising quality. From five-star hotels and private yachts to exclusive business events and elite social gatherings, the city sets exceptionally high standards. That is why VIP escort in Dubai services have become an essential part of the premium lifestyle for discerning clients.",
    "vipText2": "MGTimes offers refined companionship designed for individuals who value discretion, elegance, and sophistication. If you are searching for VIP escorts in Dubai who truly represent class, beauty, and intelligence, it is important to understand what defines a genuine luxury experience.",
    "vipTitle2": "What Is VIP Escort in Dubai?",
    "vipText3": "A VIP escort in Dubai represents more than just companionship. It is a carefully curated experience tailored to meet the expectations of high-profile clients. Unlike standard services, VIP-level companionship emphasizes refinement, cultural awareness, conversational skills, and impeccable presentation.",
    "vipText4": "An authentic luxury escort in Dubai combines elegance with emotional intelligence, ensuring every interaction feels natural, polished, and effortless. Clients seeking a high class escort in Dubai often expect not only beauty but also education, etiquette, and the ability to adapt seamlessly to various social environments.",
    "vipText5": "Similarly, an elite escort in Dubai or high end escort in Dubai provides a level of service aligned with international luxury standards. Whether attending a private gala, a corporate dinner, or traveling abroad, these companions enhance your experience with grace and discretion.",
    "vipTitle3": "Why Choose VIP Escorts in Dubai?",
    "vipText6": "Dubai attracts business leaders, investors, celebrities, and international travelers. For many, booking VIP escorts in Dubai is about enhancing social presence and enjoying exclusive moments without compromising privacy.",
    "vipTitle4": "Absolute Discretion & Privacy",
    "vipText7": "Discretion is fundamental. Professional premium escort in Dubai services prioritize confidentiality above all. From secure communication to private arrangements, every detail is handled with care to protect client privacy.",
    "vipTitle5": "Elite Appearance & Education",
    "vipText8": "Clients who choose luxury escorts in Dubai expect polished appearance, elegant style, and strong interpersonal skills. A true high class escort in Dubai understands global etiquette and can comfortably accompany you to upscale venues or international events.",
    "vipTitle6": "High-Level Social Skills",
    "vipText9": "An experienced elite escort in Dubai brings confidence, charm, and the ability to engage in meaningful conversation. Whether discussing business, art, travel, or culture, communication flows naturally.",
    "vipTitle7": "International Standards",
    "vipText10": "The most reputable agencies provide high end escorts in Dubai who meet global luxury expectations. From punctuality to presentation, every aspect reflects professionalism and refinement.",
    "vipTitle8": "Types of VIP Escort Services in Dubai",
    "vipText11": "Premium companionship can be tailored to different occasions and lifestyles.",
    "vipTitle9": "Private Companionship",
    "vipText12": "A premium escort in Dubai can accompany you for private dinners, luxury hotel stays, or exclusive evenings in the city's finest venues.",
    "vipTitle10": "Business & Corporate Events",
    "vipText13": "For executives attending conferences or corporate meetings, a high class escort in Dubai offers elegant presence and confident social interaction.",
    "vipTitle11": "Luxury Travel Companionship",
    "vipText14": "Many clients request luxury escort in Dubai services for international trips, ensuring seamless companionship during travel, resort stays, or global events.",
    "vipTitle12": "Yacht Parties & Private Events",
    "vipText15": "Dubai's elite social scene often includes yacht gatherings and private celebrations. Elite escorts in Dubai are perfectly suited for high-profile environments where image and sophistication matter.",
    "vipTitle13": "Gala Dinners & Red Carpet Events",
    "vipText16": "A high end escort in Dubai enhances your presence at formal occasions, providing elegance and composure under the spotlight.",
    "vipTitle14": "Who Books VIP Escorts in Dubai?",
    "vipText17": "Clients seeking VIP escort in Dubai services typically include:",
    "vipLi1": "Business executives and investors",
    "vipLi2": "International entrepreneurs",
    "vipLi3": "High-net-worth travelers",
    "vipLi4": "Event guests attending exclusive gatherings",
    "vipLi5": "Individuals valuing refined companionship",
    "vipText18": "For many, booking premium escorts in Dubai is about elevating experiences, not just appearances.",
    "vipTitle15": "How to Book a VIP Escort in Dubai",
    "vipText19": "Booking a VIP escort in Dubai through a professional agency such as MGTimes is straightforward and discreet.",
    "vipLi6": "Selection Process – Review curated profiles of luxury escorts in Dubai.",
    "vipLi7": "Private Consultation – Discuss preferences, schedule, and expectations.",
    "vipLi8": "Confirmation - Finalize details securely and confidentially.",
    "vipLi9": "Discreet Arrangement – Receive private confirmation with full respect for privacy.",
    "vipLi10": "Experience Delivery – Enjoy seamless, polished companionship.",
    "vipText20": "Reliable agencies ensure the entire process remains smooth, respectful, and highly confidential.",
    "vipTitle16": "Safety, Privacy & Professional Standards",
    "vipText21": "Dubai is known for its strict regulations and cultural expectations. Choosing an established agency that provides high end escorts in Dubai ensures professionalism and adherence to discretion.",
    "vipText22": "Clients are advised to:",
    "vipLi11": "Respect local customs",
    "vipLi12": "Prioritize private communication",
    "vipLi13": "Work only with verified agencies",
    "vipLi14": "Maintain confidentiality",
    "vipText23": "A responsible approach guarantees comfort and peace of mind for all parties involved.",
    "vipTitle17": "What Makes MGTimes Different",
    "vipText24": "MGTimes focuses on quality over quantity. Every elite escort in Dubai presented by the agency undergoes a careful selection process based on appearance, education, communication skills, and professionalism.",
    "vipText25": "Key advantages include:",

    "vipLi15": "Curated selection of high class escorts in Dubai",
    "vipLi16": "Verified profiles",
    "vipLi17": "24/7 client support",
    "vipLi18": "International clientele",
    "vipLi19": "Commitment to premium standards",
    "vipText26": "The agency specializes in delivering a refined premium escort in Dubai experience that aligns with global luxury expectations.",
    "vipTitle18": "FAQ — VIP Escort in Dubai",
    "vipText27": "Is VIP escort in Dubai discreet?",
    "vipText28": "Is VIP escort in Dubai discreet? Yes. Professional agencies ensure full confidentiality and secure arrangements.",
    "vipText29": "What defines a luxury escort in Dubai? A combination of elegance, intelligence, etiquette, and polished presentation.",
    "vipText30": "Can I book elite escorts in Dubai for events or travel? Yes. Many clients arrange companionship for business trips, yacht parties, and international travel.",
    "vipText31": "Are premium escorts in Dubai available on short notice? Availability depends on schedules, but agencies strive to accommodate urgent requests when possible.",
    "vipText32": "Do escorts speak multiple languages? Many high class escorts in Dubai speak several languages and have international experience.",
    "vipTitle19": "Pricing Overview",
    "vipText33": "The cost of a VIP escort in Dubai depends on:",

    "vipLi20": "Duration of booking",
    "vipLi21": "Type of event",
    "vipLi22": "Location",
    "vipLi23": "Travel requirements ",
    "vipLi24": "Level of exclusivity",
    "vipText34": "Generally, high end escorts in Dubai and elite escorts in Dubai reflect premium pricing due to experience, presentation, and discretion. Clients seeking luxury escorts in Dubai value quality, exclusivity, and professionalism over standard options.",
    "vipTitle20": "Book the Best VIP Escort in Dubai Today",
    "vipText35": "Choosing a VIP escort in Dubai is about enhancing your lifestyle with sophistication and privacy. Whether you require a luxury escort in Dubai, a high class escort in Dubai, or one of the most refined premium escorts in Dubai, the key is selecting a trusted agency that prioritizes discretion and excellence.",
    "vipText36": "MGTimes delivers carefully selected VIP escorts in Dubai who embody elegance, intelligence, and global standards. Elevate your experience in one of the world's most luxurious cities with a companion who reflects your status and expectations.",

    "vipLi25": "",
    "vipLi26": "",
    "vipLi27": "",
    "vipLi28": "",
    "vipLi29": "",

    "vipText38": "",

    "vipTitle22": "",

    "vipText39": "",

    "vipLi30": "",
    "vipLi31": "",
    "vipLi32": "",
    "vipLi33": "",

    "vipText40": "",

    "vipTitle23": "",

    "vipText41": "",
    "vipText42": "",
    "vipText43": "",
    "vipText44": "",

    "vipTitle24": "",

    "vipText45": "",

    "vipLi34": "",
    "vipLi35": "",
    "vipLi36": "",
    "vipLi37": "",

    "vipText46": "",

    "vipTitle25": "",

    "vipText47": "",
    "vipText48": ""
  }
}
</i18n>
<style scoped>
.vip-text-section {
  padding: 80px 0;
  background-color: #fff;
  width: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  margin: 150px auto 0px !important;
}

.vip-text-section__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.vip-text-section__section-name {
  margin-bottom: 30px;
}

.vip-text-section__section-name h3 {
  font-family: "Lora";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 130%;
  color: #1c1b1b;
  opacity: 0.7;
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 0;
}

.vip-text-section__content {
  width: 100%;
}

/* Стили для текстового контента */
.vip-text-section .aboutNew-text {
  font-family:
    "Lora",
    "Inter",
    -apple-system,
    BlinkMacSystemFont,
    "Segoe UI",
    Roboto,
    serif;
  color: #1c1b1b;
  line-height: 1.6;
  font-size: 16px;
  max-width: 900px;
  margin: 0;
  padding: 0;
}

/* Заголовки h2 */
.vip-text-section .aboutNew-text h2 {
  font-family: "Lora";
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 130%;
  color: #1c1b1b;
  max-width: 100%;
  margin-top: 50px;
  margin-bottom: 25px;
  letter-spacing: normal;
  border: none;
  padding-bottom: 0;
}

/* Первый заголовок h2 */
.vip-text-section .aboutNew-text h2:first-of-type {
  margin-top: 0;
}

/* Заголовки h3 */
.vip-text-section .aboutNew-text h3 {
  font-family: "Lora";
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 130%;
  color: #1c1b1b;
  margin-top: 35px;
  margin-bottom: 20px;
}

/* Параграфы */
.vip-text-section .aboutNew-text p {
  margin-bottom: 20px;
  font-size: 16px;
  color: #4a4a4a;
  font-family: "Lora", "Inter", serif;
}

/* Списки */
.vip-text-section .aboutNew-text ul,
.vip-text-section .aboutNew-text ol {
  margin: 20px 0;
  padding-left: 20px;
}

.vip-text-section .aboutNew-text li {
  margin-bottom: 10px;
  position: relative;
  color: #4a4a4a;
  font-family: "Lora", "Inter", serif;
  font-size: 16px;
}

/* Маркированный список */
.vip-text-section .aboutNew-text ul li {
  list-style-type: none;
  padding-left: 25px;
}

.vip-text-section .aboutNew-text ul li::before {
  content: "•";
  color: #1c1b1b;
  font-weight: bold;
  position: absolute;
  left: 0;
  font-size: 20px;
}

/* Нумерованный список */
.vip-text-section .aboutNew-text ol li {
  padding-left: 5px;
  list-style-type: decimal;
}

/* Вложенные p в li */
.vip-text-section .aboutNew-text li p {
  margin: 0;
  display: inline;
}

/* Стили для FAQ (с <br>) */
.vip-text-section .aboutNew-text p:has(br) {
  background-color: #f9f9f9;
  padding: 15px;
  border-radius: 8px;
  border-left: 4px solid #1c1b1b;
  margin: 25px 0;
}

/* Стили для вопросов в FAQ */
.vip-text-section .aboutNew-text p strong {
  color: #1c1b1b;
  font-weight: 600;
  display: block;
  margin-bottom: 5px;
}

/* Премиум акценты */
.vip-text-section .aboutNew-text strong {
  color: #1c1b1b;
  font-weight: 600;
}

/* Горизонтальные линии (если нужны) */
.vip-text-section .aboutNew-text hr {
  border: none;
  height: 1px;
  background: linear-gradient(to right, transparent, #e0e0e0, transparent);
  margin: 40px 0;
}

/* Адаптивность для планшетов */
@media (max-width: 992px) {
  .vip-text-section {
    padding: 60px 0;
  }

  .vip-text-section .aboutNew-text h2 {
    font-size: 28px;
    margin-top: 40px;
  }

  .vip-text-section .aboutNew-text h3 {
    font-size: 22px;
  }
}

/* Адаптивность для мобильных */
@media (max-width: 768px) {
  .vip-text-section {
    padding: 40px 0;
  }

  .vip-text-section__container {
    padding: 0 15px;
  }

  .vip-text-section__section-name h3 {
    font-size: 18px;
  }

  .vip-text-section .aboutNew-text {
    padding: 0;
    font-size: 15px;
  }

  .vip-text-section .aboutNew-text h2 {
    font-size: 24px;
    margin-top: 35px;
    margin-bottom: 20px;
  }

  .vip-text-section .aboutNew-text h3 {
    font-size: 20px;
    margin-top: 25px;
    margin-bottom: 15px;
  }

  .vip-text-section .aboutNew-text p {
    font-size: 15px;
    margin-bottom: 15px;
  }

  .vip-text-section .aboutNew-text ul,
  .vip-text-section .aboutNew-text ol {
    margin: 15px 0;
    padding-left: 15px;
  }

  .vip-text-section .aboutNew-text li {
    font-size: 15px;
    margin-bottom: 8px;
  }

  .vip-text-section .aboutNew-text p:has(br) {
    padding: 12px;
    margin: 20px 0;
  }
}

/* Адаптивность для маленьких мобильных */
@media (max-width: 480px) {
  .vip-text-section .aboutNew-text h2 {
    font-size: 22px;
  }

  .vip-text-section .aboutNew-text h3 {
    font-size: 18px;
  }
}
</style>
