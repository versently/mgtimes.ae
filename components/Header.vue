<script setup>
import { onMounted, onBeforeMount } from "vue";

const { t } = useI18n({
  useScope: "local",
});
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const { locale } = useI18n();

onMounted(() => {
  gsap.fromTo(
  ".header__container",
  {
    y: -10,
  },
  {
    y: 0,
    opacity: 1,
    duration: 0.5,
    delay: 0.1,
  }
);
  /*-------menu--------*/

  let menuBtn = document.querySelector(".header__btn-mobile-menu");
  let menu = document.querySelector(".header__mobile-menu");

  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });

  var maxWidth_1079 = window.matchMedia("(max-width: 1079.98px)");

  function movingBlocks(maxWidth_1079) {
    if (maxWidth_1079.matches) {
      document
        .querySelector(".header__mobile-menu")
        .appendChild(document.querySelector(".header__menu"));
      document
        .querySelector(".header__mobile-menu")
        .appendChild(document.querySelector(".header__select-language"));
      document
        .querySelector(".header__mobile-menu")
        .appendChild(document.querySelector(".header__btn-order"));
    } else {
      let testActiveClass = document
        .querySelector(".header__mobile-menu")
        .classList.contains("active");
      if (testActiveClass) {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
      }
      document
        .querySelector(".header__logo")
        .insertAdjacentElement(
          "afterEnd",
          document.querySelector(".header__menu")
        );
      document
        .querySelector(".header__container")
        .appendChild(document.querySelector(".header__select-language"));
      document
        .querySelector(".header__container")
        .appendChild(document.querySelector(".header__btn-order"));
    }
  }
  movingBlocks(maxWidth_1079);
  maxWidth_1079.addListener(movingBlocks);
});
</script>
<template>
  <header class="header">
    <div class="header__container">
      <div class="header__logo">
        <a :href="localePath('index')">MGTimes</a>
      </div>
      <div class="header__menu menu">
        <div class="menu__list">
          <div class="menu__item">
            <a :href="localePath('index')" class="menu__link">{{
              t("Home")
            }}</a>
          </div>
          <div class="menu__item">
            <a :href="localePath('/models')" class="menu__link">
              {{ t("Models") }}</a
            >
          </div>
          <div class="menu__item">
            <a :href="localePath('/services')" class="menu__link">{{
              t("Services")
            }}</a>
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
          <div class="select-city__title">
            {{ t("Dubai") }}
          </div>
          <div class="select-city__content">
            <label class="select-city__label"
              ><a href="/">{{ t("Dubai") }}</a></label
            >

            <label class="select-city__label"
              ><a href="https://mgtimes.ru/en">{{ t("Moskow") }}</a></label
            >

            <label class="select-city__label"
              ><a
                href="https://mgtimes.ru/en/escort-modeli-sankt-peterburg.html"
                >{{ t("Sankt-Peterburg") }}</a
              ></label
            >
          </div>
        </div>
      </div>

  
      <div class="header__select-language lang-box">
        <div class="lang-box__ru">
          <a :class="{ active: locale === 'en' }" :href="switchLocalePath('en')"
            >EN</a
          >
        </div>
        <div class="lang-box__line"></div>
        <div class="lang-box__en">
        <a :class="{ active: locale === 'ru' }" :href="switchLocalePath('ru')">RU</a>
      </div>
      </div>
      <button class="header__btn-order btn-order">
        {{ t("Order an escort") }}
      </button>

      <div class="header__mobile-menu"></div>
      <button class="header__btn-mobile-menu btn-mobile-menu">
        <span class="btn-mobile-menu__line-up"></span>
        <span class="btn-mobile-menu__line-middle"></span>
        <span class="btn-mobile-menu__line-bottom"></span>
      </button>
    </div>
  </header>
</template>

<style scoped>
.lang-box a.active {
  color: #9e2220;
  /* Другие стили для активного языка */
}
</style>

<i18n lang="json">
{
  "en": {
    "Home": "Home",
    "Models": "Models",
    "Services": "Services",
    "Casting": "Casting",
    "Contacts": "Contacts",
    "Media": "Media",

    "Dubai": "Dubai",
    "Moskow": "Moskow",
    "Sankt-Peterburg": "Sankt-Peterburg",
    "Order an escort": "Order an escort"
  },
  "ru": {
    "Home": "Главная",
    "Models": "Модели",
    "Services": "Сервисы",
    "Casting": "Кастинг",
    "Contacts": "Контакты",
    "Media": "Медиа",

    "Dubai": "Дубай",
    "Moskow": "Москва",
    "Sankt-Peterburg": "Санкт-Петербург",
    "Order an escort": "Заказать эскорт"
  }
}
</i18n>
