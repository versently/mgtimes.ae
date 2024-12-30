<script setup>
const { t } = useI18n({
  useScope: "local",
});
</script>
<template>
  <div>
    <footer class="footer">
      <div class="footer__container">
        <div class="footer__up-block">
          <div class="footer__logo">
            <a :href="localePath('index')">MGTimes</a>
          </div>
          <div class="footer__clarification">
            {{ t("The agency does not provide intimate services.") }}
          </div>
        </div>
        <div class="footer__main-block">
          <div class="footer__menu">
            <div class="footer__list">
              <div class="footer__item">
                <a :href="localePath('index')" class="footer__link">{{
                  t("Home")
                }}</a>
              </div>
              <div class="footer__item">
                <a :href="localePath('/models')" class="footer__link">{{
                  t("Models")
                }}</a>
              </div>
              <div class="footer__item">
                <a :href="localePath('/services')" class="footer__link">{{
                  t("Services")
                }}</a>
              </div>
              <div class="footer__item">
                <a :href="localePath('/casting')" class="footer__link">{{
                  t("Casting")
                }}</a>
              </div>
              <div class="footer__item">
                <a :href="localePath('/contacts')" class="footer__link">{{
                  t("Contacts")
                }}</a>
              </div>
              <div class="footer__item">
                <a :href="localePath('/media')" class="footer__link">{{
                  t("Media")
                }}</a>
              </div>
            </div>
            <div class="footer__social">
              <div class="footer__item">
                <a
                  href="https://www.facebook.com/mgtmodel"
                  target="_blank"
                  class="footer__link"
                  >Facebook</a
                >
              </div>
              <div class="footer__item">
                <a
                  href="https://instagram.com/mgtmodel"
                  target="_blank"
                  class="footer__link"
                  >Instagram</a
                >
              </div>
            </div>
          </div>
        </div>

        <div class="footer__bottom-block">
          <div class="footer__legal">© 2024 MGTimes</div>

          <span class="footer__legal">
            <a
              class="footer-banner"
              href="https://www.eurogirlsescort.com"
              target="_blank"
              title="EuroGirlsEscort.com"
              ><img
                src="https://www.eurogirlsescort.com/dist/images/banners/88X31.jpg"
                alt="EuroGirlsEscort.com"
                title="EuroGirlsEscort.com"
            /></a>
            <a class="footer__legal" :href="localePath('/sitemap')">{{ t("sitemap") }}</a>
            <a
              class="footer__legal footer__legal-2"
              :href="localePath('/privacy-policy')"
              >{{ t("Privacy policy") }}</a
            >
          </span>
          <!-- <a href="/public-offer" class="footer__legal">Privacy policy</a> -->
        </div>
      </div>
    </footer>
    <div class="popup-order">
      <div class="popup-order__block">
        <button class="popup-order__close">
          <svg class="popup-order__close-svg">
            <use xlink:href="/img/popup-order/sprite.svg"></use>
          </svg>
        </button>
        <div class="popup-order__title">{{ t("Order an escort") }}</div>
        <div class="popup-order__list">
          <div class="popup-order__list-item">
            <div class="popup-order__item-number">01</div>
            <div class="popup-order__item-title">{{ t("Contact us") }}</div>
            <div class="popup-order__item-text">
              {{
                t("Go ahead and write to us in a message convenient for you")
              }}
            </div>
          </div>
          <div class="popup-order__list-item">
            <div class="popup-order__item-number">02</div>
            <div class="popup-order__item-title">
              {{ t("Describe your wishes") }}
            </div>
            <div class="popup-order__item-text">
              {{
                t(
                  "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment."
                )
              }}
            </div>
          </div>
          <div class="popup-order__list-item">
            <div class="popup-order__item-number">03</div>
            <div class="popup-order__item-title">{{ t("Have fun") }}</div>
            <div class="popup-order__item-text">
              {{
                t(
                  "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you"
                )
              }}
            </div>
          </div>
        </div>
        <div class="popup-order__buttons">
          <a
            href="https://t.me/mgtimes"
            target="_blank"
            class="popup-order__btn"
          >
            {{ t("Go to Telegram") }}

            <svg class="popup-order__btn-svg">
              <use xlink:href="/img/popup-order/sprite.svg#telegram"></use>
            </svg>
          </a>
          <a
            href="https://wa.me/+79775944345"
            target="_blank"
            class="popup-order__btn"
          >
            {{ t("Go to WhatsApp") }}

            <svg class="popup-order__btn-svg">
              <use xlink:href="/img/popup-order/sprite.svg#whatsapp"></use>
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer-banner {
  position: relative;
  top: -5px;
}
@media (max-width: 575px) {
  .footer-banner {
    position: absolute;
    top: -25px;
    right: 0px;
  }
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

    "The agency does not provide intimate services.": "The agency does not provide intimate services.",
    "Order an escort": "Order an escort",
    "Contact us": "Contact us",
    "Go ahead and write to us in a message convenient for you": "Go ahead and§ write to us in a message convenient for you",
    "Describe your wishes": "Describe your wishes",
    "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment.": "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment.",
    "Have fun": "Have fun",
    "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you": "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you",
    "Go to Telegram": "Go to Telegram",
    "Go to WhatsApp": "Go to WhatsApp",
    "sitemap": "Site map",
    "Privacy policy": "Privacy policy"
  },
  "ru": {
    "Home": "Главная",
    "Models": "Модели",
    "Services": "Услуги",
    "Casting": "Кастинг",
    "Contacts": "Контакты",
    "Media": "Медиа",

    "The agency does not provide intimate services.": "Агентство не предоставляет услуги интимного характера.",
    "Order an escort": "Заказать эскорт",
    "Contact us": "Свяжитесь с нами",
    "Go ahead and write to us in a message convenient for you": "Перейдите и напишите нам в удобном для вас месседжере",
    "Describe your wishes": "Опишите пожелания",
    "Specify the service that interests you, and our manager will, select the model according to your preferences. For new customers, the selection of Models is made by prepayment.": "Укажите услугу, которая вас интересует, и наш менеджер подберет модель по вашим предпочтениям. Для новых клиентов подбор модели производится по предоплате.",
    "Have fun": "Получите удовольствие",
    "Arrange a meeting, after discussing all the details, the manager of our agency will arrange a meeting with the girl for you": "Договоритесь о встрече, после обсуждения всех деталей, менеджер нашего агенства организует для вас встречу с девушкой",
    "Go to Telegram": "Перейти в Telegram",
    "Go to WhatsApp": "Перейти в WhatsApp",

    "sitemap": "Карта сайта",
    "Privacy policy": "Политика конфиденциальности"
  }
}
</i18n>
