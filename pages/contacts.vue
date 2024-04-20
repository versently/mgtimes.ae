<script setup>
const { t } = useI18n({
  useScope: "local",
});
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
          <div class="contacts__list-item">
            <div class="contacts__social-name">WhatsApp</div>
            <a href="https://wa.me/79775944345" class="contacts__social-link">
              +7 977 594-43-45
            </a>
          </div>
          <div class="contacts__list-item">
            <div class="contacts__social-name">Telegram</div>
            <a href="https://t.me/mgtimes" class="contacts__social-link">
              @mgtimes
            </a>
          </div>
          <div class="contacts__list-item">
            <div class="contacts__social-name">Mail</div>
            <a href="mailto:info@mgtimes.ru" class="contacts__social-link">
              info@mgtimes.ru
            </a>
          </div>
        </div>
        <button class="contacts__btn btn-order">
          {{ t("Order an escort") }}
        </button>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>


<i18n lang="json">
  {
    "en": {
      "title": "Contacts - Escort agency «Mgtimes» in Dubai",
      "description": "Contact the contact numbers of the elite escort agency Mgtimes, the best models of Dubai! Organization of rest and meetings! 📞 +971 58 525 2213 ⚡",  "Home page": "Home page",
      "Order an escort": "Order an escort",
      "escort agency Mgtimes": "escort agency Mgtimes",
      "Call or write for any question.": "Call or write for any question.",
      "Contacts": "Contacts"
    
    },
    "ru": {
      "title": "Наши контакты 🖤 Агентство Mgtimes",
      "description": "Обращайтесь по контактным телефонам элитного эскорт-агентства Mgtimes, лучших моделей в США и во всем мире 🌎 Организация отдыха и встреч! 🔒 Строго конфиденциально",
      "Home page": "Главная",
      "Order an escort": "Заказать эскорт",
      "escort agency Mgtimes": "эскорт-Агентство Mgtimes",
      "Call or write for any question.": "Звоните или пишите по любому вопросу.",
      "Contacts": "Контакты"
    
    }
  }  
  </i18n>
  