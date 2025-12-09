<script setup>
const { t, locale } = useI18n({
  useScope: "local",
});
const localePath = useLocalePath();
const route = useRoute();

// Динамическая ссылка на Telegram в зависимости от языка
const telegramLink = computed(() => {
  return locale.value === 'ru' 
    ? 'https://t.me/mgtimes_ru' 
    : 'https://t.me/mgtimes_en';
});

// формируем каноникал
const canonicalUrl = `https://mgtimes.ae${route.path}`

useHead({
  title: t("title"),

  meta: [
    {
      name: "description",
      content: t("description"),
    },
  ],
  link: [
    {
      rel: "canonical",
      href: canonicalUrl,
    },
  ],
});

onMounted(() => {
  // Код выполнится только на клиенте
  setTimeout(() => {
    const telegramBtnWrapper = document.getElementById('telegramBtnWrapperContacts');
    if (telegramBtnWrapper) {
      telegramBtnWrapper.classList.add('show');
    }
  }, 500);
});

</script>
<template>
  <main>
    <div class="contacts">
      <div class="contacts__container">
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
              <span itemprop="name">{{ t("Contacts") }} </span>
              <meta itemprop="position" content="2" />
            </div>
          </li>
        </div>
        <div class="contacts__title">
          {{ t("Contacts") }} /
          <h1 style="display: inline">{{ t("escort agency Mgtimes") }}</h1>
        </div>
        <div class="contacts__line"></div>
        <div class="contacts__subtitle">
          {{ t("Call or write for any question.") }}
        </div>
        <div class="contacts__line-02"></div>
        <div class="contacts__list">
          <!-- <div class="contacts__list-item">
            <div class="contacts__social-name">WhatsApp</div>
            <a href="https://wa.me/+79775944345" class="contacts__social-link">
              +7 993 909‒70‒00
            </a>
          </div> -->
          <div class="contacts__list-item">
            <div class="contacts__social-name">Telegram</div>
            <a href="https://t.me/mgtimes" class="contacts__social-link">
              @{{ t("mgtimes_en") }}
            </a>
          </div>
          <div class="contacts__list-item">
            <div class="contacts__social-name">Mail</div>
            <a href="mailto:info@mgtimes.ae" class="contacts__social-link">
              info@mgtimes.ru
            </a>
          </div>
        </div>
        <button class="contacts__btn btn-order">
          {{ t("Order an escort") }}
        </button>
        <br/>
        <!-- Кнопка Telegram с оберткой для анимации -->
                    <div class="telegram-btn-wrapper" id="telegramBtnWrapperContacts">
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
    </div>
  </main>
</template>

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
    opacity: 0;
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
    "title": "Contacts - Escort agency «Mgtimes» in Dubai",
    "description": "Contact the contact numbers of the elite escort agency Mgtimes, the best models of Dubai! Organization of rest and meetings! 📞 +971 58 525 2213 ⚡",
    "Home page": "Home page",
    "Order an escort": "Order an escort",
    "escort agency Mgtimes": "escort agency Mgtimes",
    "Call or write for any question.": "Call or write for any question.",
    "Contacts": "Contacts",
    "Our telegram": "Our telegram",
    "mgtimes_en": "mgtimes_en"
  },
  "ru": {
    "title": "Наши контакты 🖤 Агентство Mgtimes",
    "description": "Обращайтесь по контактным телефонам элитного эскорт-агентства Mgtimes, лучших моделей в США и во всем мире 🌎 Организация отдыха и встреч! 🔒 Строго конфиденциально",
    "Home page": "Главная",
    "Order an escort": "Заказать эскорт",
    "escort agency Mgtimes": "эскорт-Агентство Mgtimes",
    "Call or write for any question.": "Звоните или пишите по любому вопросу.",
    "Contacts": "Контакты",
    "Our telegram": "Наш телеграм",
    "mgtimes_en": "mgtimes_ru"
  }
}
</i18n>

