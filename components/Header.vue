<script setup>
import { onMounted, onBeforeMount } from "vue";

const { t } = useI18n({
  useScope: "local",
});
const localePath = useLocalePath();
const switchLocalePath = useSwitchLocalePath();

const { locale } = useI18n();

// Динамическая ссылка на Telegram в зависимости от языка
const telegramLink = computed(() => {
  return locale.value === 'ru' 
    ? 'https://t.me/mgtimes_ru' 
    : 'https://t.me/mgtimes_en';
});

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
if (route.path.startsWith("/cities/")) {
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
            <a :href="localePath('/girls')" class="menu__link">
              {{ t("Models") }}</a
            >
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
                  <ContentList
                    :path="localePath('/services')"
                    :query="{
                      only: ['title', '_path', 'h1'],
                      where: {
                        tags: {
                          $contains: filter,
                        },
                      },
                      $sensitivity: 'base',
                    }"
                  >
                    <template v-slot="{ list }">
                      <label
                        class="select-city__label"
                        v-for="сities in list"
                        :key="сities._path"
                      >
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
            <ContentList
              :path="localePath('/cities')"
              :query="{
                only: ['title', '_path', 'h1'],
                where: {
                  tags: {
                    $contains: filter,
                  },
                },
                $sensitivity: 'base',
              }"
            >
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
          <div v-else-if="src == null" class="select-city__title">
            <span class="select-city__before">{{ t("City") }}</span>
            {{ t("Dubai") }}
          </div>

          <div class="select-city__content">
            <label class="select-city__label"
              ><a :href="localePath('/')">{{ t("Dubai") }}</a></label
            >

            <ContentList
              :path="localePath('/cities')"
              :query="{
                only: ['title', '_path', 'h1'],
                where: {
                  tags: {
                    $contains: filter,
                  },
                },
                $sensitivity: 'base',
              }"
            >
              <template v-slot="{ list }">
                <label
                  class="select-city__label"
                  v-for="сities in list"
                  :key="сities._path"
                >
                  <a :href="сities._path">{{ сities.h1 }}</a>
                </label>
              </template>
              <template #not-found>
                <p>error сities</p>
              </template>
            </ContentList>
            <!-- <label class="select-city__label"
              ><a href="https://mgtimes.ru/en">{{ t("Moscow") }}</a></label
            > -->
            <!-- <label class="select-city__label"
              ><a
                href="https://mgtimes.ru/en/escort-modeli-sankt-peterburg.html"
                >{{ t("Sankt-Peterburg") }}</a
              ></label
            > -->
          </div>
        </div>
      </div>

      <div class="header__select-language pc lang-box">
        <div class="lang-box__ru">
          <a :class="{ active: locale === 'en' }" :href="switchLocalePath('en')"
            >EN</a
          >
        </div>
        <div class="lang-box__line"></div>
        <div class="lang-box__en">
          <a :class="{ active: locale === 'ru' }" :href="switchLocalePath('ru')"
            >RU</a
          >
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
              <a :href="localePath('/girls')" class="menu__link">
                {{ t("Models") }}</a
              >
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
                  <ContentList
                    :path="localePath('/services')"
                    :query="{
                      only: ['title', '_path', 'h1'],
                      where: {
                        tags: {
                          $contains: filter,
                        },
                      },
                      $sensitivity: 'base',
                    }"
                  >
                    <template v-slot="{ list }">
                      <label
                        class="select-city__label"
                        v-for="сities in list"
                        :key="сities._path"
                      >
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
        <div class="header__select-language lang-box">
          <div class="lang-box__ru">
            <a
              :class="{ active: locale === 'en' }"
              :href="switchLocalePath('en')"
              >EN</a
            >
          </div>
          <div class="lang-box__line"></div>
          <div class="lang-box__en">
            <a
              :class="{ active: locale === 'ru' }"
              :href="switchLocalePath('ru')"
              >RU</a
            >
          </div>
        </div>
        <button class="header__btn-order btn-order">{{ t("Order an escort") }}</button>
      
        <!-- Кнопка Telegram с оберткой для анимации -->
                    <div class="telegram-btn-wrapper" id="telegramBtnWrapper">
                        <a :href="telegramLink" target="_blank">
                            <button class="contacts__btn-tg btn-order-tg">{{ t("Our telegram") }}
								 <!-- Иконка Telegram -->
                                <svg class="telegram-icon" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.279l-1.805 8.523c-.125.585-.463.73-.938.456l-2.605-1.92-1.256 1.211c-.139.135-.256.256-.525.256l.188-2.662 4.812-4.345c.205-.184-.045-.286-.318-.103l-5.953 3.75-2.565-.801c-.562-.175-.574-.562.117-.84l9.924-3.828c.468-.176.878.103.725.84z"/>
                                </svg>
							</button>
                        </a>
                    </div>
      
      </div>
      <button class="header__btn-mobile-menu btn-mobile-menu">
        <span class="btn-mobile-menu__line-up"></span
        ><span class="btn-mobile-menu__line-middle"></span
        ><span class="btn-mobile-menu__line-bottom"></span>
      </button>
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

<style lang="scss" scoped>
 /* Стили для кнопки */
.contacts__btn-tg {
    background: #494949;
    border-radius: 5px;
    width: 244px;
    height: 50px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    color: #ffffff;
    border: none;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px; /* Отступ между текстом и иконкой */
    padding: 0 15px;
}

.contacts__btn-tg:hover {
    background: #ffffff;
    border: 1px solid #1c1b1b;
    color: #1c1b1b;
}

/* Обертка для анимации */
.telegram-btn-wrapper {
    display: inline-block;
    opacity: 1;
    transform: translateY(20px);
    transition: opacity 0.8s ease, transform 0.8s ease;
    margin-top: 10px;
}

.telegram-btn-wrapper.show {
    opacity: 1;
    transform: translateY(0);
}

/* Адаптация для планшетов (ширина экрана до 1024px) */
@media (max-width: 1024px) {
    .contacts__btn-tg {
        width: 100%; /* Занимает всю доступную ширину */
        max-width: 350px; /* Максимальная ширина */
        height: 56px;
        font-size: 16px;
        line-height: 20px;
        padding: 0 25px; /* Увеличиваем padding для более широкого вида */
    }
    
    .telegram-btn-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    .telegram-icon {
        width: 20px;
        height: 20px;
    }
    
    .contacts__btn-tg {
        gap: 12px; /* Увеличиваем отступ на планшетах */
    }
}

/* Адаптация для мобильных устройств (ширина экрана до 768px) */
@media (max-width: 768px) {
    .contacts__btn-tg {
       
		min-width: 242px;
        height: 56px;
        font-size: 16px;
        line-height: 20px;
        padding: 0 30px; /* Увеличиваем padding для более широкого вида */
    }
    
    .telegram-btn-wrapper {
        display: flex;
        justify-content: center;
        width: 100%;
    }
    
    .telegram-icon {
        width: 22px;
        height: 22px;
    }
    
    .contacts__btn-tg {
        gap: 15px; /* Увеличиваем отступ на мобильных */
    }
    
    /* Дополнительное центрирование для очень маленьких экранов */
    .contacts__container {
        text-align: center;
    }
}

/* Для очень маленьких экранов */
@media (max-width: 575.98px) {
    .contacts__btn-tg {
		min-width: 290px;
        height: 50px;
        font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
       
        padding: 0 35px; /* Еще больше padding для очень маленьких экранов */
    }
}

.telegram-icon {
    width: 18px;
    height: 18px;
    fill: #ffffff; /* Белый цвет иконки по умолчанию */
    transition: fill 0.3s ease;
    flex-shrink: 0; /* Чтобы иконка не сжималась */
}

.contacts__btn-tg:hover .telegram-icon {
    fill: #1c1b1b; /* Цвет иконки при наведении */
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
    "Moscow": "Moscow",
    "Sankt-Peterburg": "Saint Petersburg",
    "Order an escort": "Order an escort",
    "Our telegram": "Our telegram",
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
    "Our telegram": "Наш телеграм",

    "City": "Город:"
  }
}
</i18n>
