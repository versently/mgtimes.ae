<script setup>
import { onMounted, onBeforeMount } from "vue";

const { t } = useI18n({
  useScope: "local",
});
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const { locale } = useI18n();

onMounted(() => {
  /*-------menu--------*/

  let menuBtn = document.querySelector(".header__btn-mobile-menu");
  let menu = document.querySelector(".header__mobile-menu");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
});

const route = useRoute();
const src = ref(null);
if (route.path.startsWith('/cities/')) {
  src.value = "/cities/" + route.params.slug[0];
} else {
  src.value = null;
}
</script>
<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <a :href="localePath('index')">MGTimes</a>
      </div>
      <div class="header__menu pc menu">
        <div class="menu__list">
          <div class="menu__item">
            <a :href="localePath('index')" class="menu__link">{{
              t("Home")
              }}</a>
          </div>
          <div class="menu__item">
            <a :href="localePath('/models')" class="menu__link">
              {{ t("Models") }}</a>
          </div>
          <div class="menu__item">
            <!-- <a :href="localePath('/services')" class="menu__link">{{
              t("Services")
            }}</a> -->
            <div class="menu__services">
              <div class="select-city__select">
                <a :href="localePath('/services')" class="select-city__title">
                  {{ t("Services") }}
                </a>

                <div class="select-city__content">
                  <ContentList :path="localePath('/services')" :query="{
                    only: ['title', '_path', 'h1'],
                    where: {
                      tags: {
                        $contains: filter,
                      },
                    },
                    $sensitivity: 'base',
                  }">
                    <template v-slot="{ list }">
                      <label class="select-city__label" v-for="сities in list" :key="сities._path">
                        <a :href="сities._path">{{ сities.h1 }}</a>
                      </label>
                    </template>
                    <template #not-found>
                      <p>error сities</p>
                    </template>
                  </ContentList>
                </div>
              </div>
            </div>
          </div>
          <div class="menu__item">
            <a :href="localePath('/casting')" class="menu__link">{{
              t("Casting")
              }}</a>
          </div>
          <div class="menu__item">
            <a :href="localePath('/contacts')" class="menu__link">{{
              t("Contacts")
              }}</a>
          </div>
          <div class="menu__item">
            <a :href="localePath('/media')" class="menu__link">{{
              t("Media")
              }}</a>
          </div>
        </div>
      </div>
      <div class="header__select-city select-city">
        <div class="select-city__select">

          <div v-if="!(src == null)" class="select-city__title">
            <span class="select-city__before">{{ t("City") }}</span>
            <ContentList :path="localePath('/cities')" :query="{
              only: ['title', '_path', 'h1'],
              where: {
                tags: {
                  $contains: filter,
                },
              },
              $sensitivity: 'base',
            }">
              <template v-slot="{ list }">
                <span v-for="сities in list" :key="сities._path">
                  <span v-if="сities._path == src">{{ сities.h1 }} </span>
                  <span v-else-if="сities._path == '/ru' + src">{{
                    сities.h1
                    }}</span>
                </span>
              </template>
              <template #not-found>
                <p>error сities</p>
              </template>
            </ContentList>
          </div>
          <div v-else-if="src == null" class="select-city__title ">
            <span class="select-city__before">{{ t("City") }}</span>
            {{ t("Dubai") }}
          </div>

          <div class="select-city__content">
            <label class="select-city__label"><a :href="localePath('/')">{{ t("Dubai") }}</a></label>

            <ContentList :path="localePath('/cities')" :query="{
              only: ['title', '_path', 'h1'],
              where: {
                tags: {
                  $contains: filter,
                },
              },
              $sensitivity: 'base',
            }">
              <template v-slot="{ list }">
                <label class="select-city__label" v-for="сities in list" :key="сities._path">
                  <a :href="сities._path">{{ сities.h1 }}</a>
                </label>
              </template>
              <template #not-found>
                <p>error сities</p>
              </template>
            </ContentList>
            <label class="select-city__label"><a href="https://mgtimes.ru/en">{{ t("Moscow") }}</a></label>
            <label class="select-city__label"><a href="https://mgtimes.ru/en/escort-modeli-sankt-peterburg.html">{{
              t("Sankt-Peterburg") }}</a></label>
          </div>
        </div>
      </div>

      <div class="header__select-language pc lang-box">
        <div class="lang-box__ru">
          <a :class="{ active: locale === 'en' }" :href="switchLocalePath('en')">EN</a>
        </div>
        <div class="lang-box__line"></div>
        <div class="lang-box__en">
          <a :class="{ active: locale === 'ru' }" :href="switchLocalePath('ru')">RU</a>
        </div>
        <div class="lang-box__line"></div>
        <div class="lang-box__en">
          <a :class="{ active: locale === 'ar' }" :href="switchLocalePath('ar')">AR</a>
        </div>
      </div>
      <button class="header__btn-order pc btn-order">
        {{ t("Order an escort") }}
      </button>

      <div class="header__mobile-menu">
        <div class="header__menu menu">
          <div class="menu__list">
            <div class="menu__item">
              <a :href="localePath('index')" class="menu__link">{{
                t("Home")
                }}</a>
            </div>
            <div class="menu__item">
              <a :href="localePath('/models')" class="menu__link">
                {{ t("Models") }}</a>
            </div>
            <!-- <div class="menu__item">
              <a href="/services" class="menu__link">Services</a>
            </div> -->
            <div class="menu__item mob-menu__services">
              <div class="select-city__select">
                <div class="select-city__title">
                  <a :href="localePath('/services')">{{ t("Services") }}</a>
                  <div class="ar"></div>
                </div>

                <div class="select-city__content">
                  <ContentList :path="localePath('/services')" :query="{
                    only: ['title', '_path', 'h1'],
                    where: {
                      tags: {
                        $contains: filter,
                      },
                    },
                    $sensitivity: 'base',
                  }">
                    <template v-slot="{ list }">
                      <label class="select-city__label" v-for="сities in list" :key="сities._path">
                        <a :href="сities._path">{{ сities.h1 }}</a>
                      </label>
                    </template>
                    <template #not-found>
                      <p>error сities</p>
                    </template>
                  </ContentList>
                </div>
              </div>
            </div>
            <div class="menu__item">
              <a :href="localePath('/casting')" class="menu__link">{{
                t("Casting")
                }}</a>
            </div>
            <div class="menu__item">
              <a :href="localePath('/contacts')" class="menu__link">{{
                t("Contacts")
                }}</a>
            </div>
            <div class="menu__item">
              <a :href="localePath('/media')" class="menu__link">{{
                t("Media")
                }}</a>
            </div>
          </div>
        </div>

      </div>

    </div>
  </header>
</template>
<style>
.select-city__title a {
  color: #000;
}

.ar {
  content: url(/img/header/arrow.svg);
  transform: rotate(0deg);
  position: relative;
  top: 0px;
  left: 5px;
  display: block;
}

.menu__services .select-city__select {
  margin: 0;
  position: relative;
  top: 1.5px;
}
</style>
<i18n lang="json">{
  "en": {
    "Home": "Home",
    "Models": "Models",
    "Services": "Services",
    "Casting": "Casting",
    "Contacts": "Contacts",
    "Media": "Media",
    "Dubai": "Dubai",
    "Moscow": "Moscow",
    "Sankt-Peterburg": "Saint Petersburg",
    "Order an escort": "Order an escort",
    "City": "City:"
  },
  "ru": {
    "Home": "Главная",
    "Models": "Модели",
    "Services": "Услуги",
    "Casting": "Кастинг",
    "Contacts": "Контакты",
    "Media": "Медиа",
    "Dubai": "Дубай",
    "Moscow": "Москва",
    "Sankt-Peterburg": "Санкт-Петербург",
    "Order an escort": "Заказать эскорт",
    "City": "Город:"
  },
  "ar": {
    "Services": "الخدمات",
    "Home": "الرئيسية",
    "Models": "العارضات",
    "Casting": "التجارب",
    "Contacts": "التواصل",
    "Media": "الوسائط",
    "Dubai": "دبي",
    "Moscow": "موسكو",
    "Sankt-Peterburg": "سانت بطرسبرغ",
    "Order an escort": "طلب الخدمة",
    "City": "المدينة:"
  }
}</i18n>
