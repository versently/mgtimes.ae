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
    <div class="casting">
      <div class="casting__container">
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
            <a itemprop="item" href="/">
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
              <span itemprop="name">{{ t("Casting") }}</span>
              <meta itemprop="position" content="2" />
            </div>
          </li>
        </div>
        <div class="casting__title">
          <h1 style="display: inline">{{ t("Working in в MGTimes") }}</h1>
        </div>
        <div class="casting__p">
          {{
            t(
              "Working in escort services is a conscious choice of every girl. It isa good opportunity for you to get a high-paying job, start a new life,fill it with cool acquaintances, bright trips and unforgettableemotions. The MGTimes agency helps beautiful model girls to becomereal muses of rich patrons. They are willing to pay money for pleasantcompany and joint leisure."
            )
          }}
        </div>
        <div class="casting__img-main-wrapper">
          <nuxt-img src="/img/casting/main-img.webp" alt="" />
        </div>

        <section class="casting__section-work-with-us work-with-us">
          <div class="work-with-us__section-name genscasting-section-name">
            <h3>{{ t("Working in our agency") }}</h3>
          </div>
          <div class="work-with-us__content genscasting-content">
            <div class="work-with-us__subtitle genscasting-subtitle">
              {{ t("Why should you work with us?") }}
            </div>
            <div class="work-with-us__row">
              <div class="work-with-us__item">
                <div class="work-with-us__item-num">01</div>
                <div class="work-with-us__item-text">
                  {{ t("You can meet your soulmate") }}
                </div>
              </div>
              <div class="work-with-us__item">
                <div class="work-with-us__item-num">02</div>
                <div class="work-with-us__item-text">
                  {{ t("We guarantee you complete safety") }}
                </div>
              </div>
              <div class="work-with-us__item">
                <div class="work-with-us__item-num">03</div>
                <div class="work-with-us__item-text">
                  {{
                    t("We do not place the information in the public domain")
                  }}
                </div>
              </div>
              <div class="work-with-us__item">
                <div class="work-with-us__item-num">04</div>
                <div class="work-with-us__item-text">
                  {{ t("High salary + bonuses") }}
                </div>
              </div>
              <div class="work-with-us__item">
                <div class="work-with-us__item-num">05</div>
                <div class="work-with-us__item-text">
                  {{ t("The ability to travel all over the world") }}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section class="casting__section-agency agency">
          <div class="agency__section-name genscasting-section-name">
            <h3>{{ t("Agency") }}</h3>
          </div>
          <div class="agency__content genscasting-content">
            <div class="agency__images-block">
              <div class="agency__img-left">
                <nuxt-img src="/img/casting/agency/left.webp" alt="" />
              </div>
              <div class="agency__img-right">
                <nuxt-img src="/img/casting/agency/right.webp" alt="" />
              </div>
              <div class="agency__text-decoration">
               Young beautiful girls
              </div>
            </div>

            <div class="agency__info-block">
              <div class="agency__subtitle genscasting-subtitle">MGTimes</div>
              <div class="agency__line"></div>
              <div class="agency__text genscasting-def-text">
                {{
                  t(
                    "Working in our escort agency is a destiny for the elite, who arewaiting for yachts, exclusive private events, trips to differentcountries. If you have a dream to get a prestigious job thatbrings pleasure and dating with successful men, we invite you tothe casting to escort. Vacancies are open in MGTimes. It isquite possible you will become the escort model whom all thedoors to the world of chic life are open."
                  )
                }}
              </div>
            </div>
          </div>
        </section>
        <section class="casting__section-requirements requirements">
          <div class="requirements__section-name genscasting-section-name">
            <h3>{{ t("Our requirements") }}</h3>
          </div>
          <div class="requirements__content genscasting-content">
            <div class="requirements__necessarily">
              <div class="requirements__subtitle genscasting-subtitle">
                {{
                  t(
                    "To be the model in our agency you should necessarily have:"
                  )
                }}
              </div>
              <ul class="requirements__list">
                <li class="requirements__list-item">
                  {{ t("Height from 164 cm") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Positive attitude") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Well-groomed appearance") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("The ability to maintain a conversation") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Age from 18 years") }}
                </li>
              </ul>
            </div>
            <div class="requirements__advantage">
              <div class="requirements__subtitle genscasting-subtitle">
                {{ t("You will have the advantages, if you:") }}
              </div>
              <ul class="requirements__list">
                <li class="requirements__list-item">
                  {{ t("Know foreign languages") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Take part in beauty contests") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Have open US visas") }}
                </li>
                <li class="requirements__list-item">
                  {{ t("Participate in photo shoots for magazines") }}
                </li>
              </ul>
            </div>
          </div>
        </section>
        <div class="models-section">
          <div class="models-section__container">
            <div class="models-section__section-name">
              <h3>{{ t("Models") }}</h3>
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
                  path="/models"
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
                        v-for="models in list"
                        :key="models._path"
                      >
                        <nuxt-img
                          :src="`/assets/img/models/${models.folder}/${models.mainImage}`"
                          :alt="`${models.folder}`"
                        />
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
                              {{ t("Weight") }}:
                              <span>{{ models.weight }}</span>
                            </div>
                            <div class="models-section__slide-property">
                              {{ t("Age") }}: <span>{{ models.age }}</span>
                            </div>
                          </div>
                          <div class="models-section__slide-more">
                            <a :href="models._path">{{
                              t("More information")
                            }}</a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- If we need scrollbar -->
                    <div class="models-section__swiper-scrollbar"></div>
                  </template>
                  <!-- Not found slot to display message when no content us is found -->
                  <template #not-found>
                    <p>{{ t("No services found.") }}</p>
                  </template>
                </ContentList>
              </div>
            </div>
          </div>
        </div>

        <section class="casting__section-advantage advantage">
          <div class="advantage__section-name genscasting-section-name">
            <h3>{{ t("Advantages") }}</h3>
          </div>
          <div class="advantage__content genscasting-content">
            <div class="advantage__subtitle genscasting-subtitle">
              {{ t("Advantages of working in our elite escort agency") }}
            </div>
            <div class="advantage__line"></div>
            <div class="advantage__p">
              {{
                t(
                  "There are a lot of wealthy men in Dubai who need women for VIP escort at various events. Working at the MGTimes agency isassociated with many advantages:"
                )
              }}
            </div>
            <ul class="advantage__list">
              <div class="advantage__item">
                {{
                  t(
                    "Regular dating with successful men and a chance to find your soul mate."
                  )
                }}
              </div>
              <div class="advantage__item">
                {{
                  t(
                    "Guarantee of complete security and confidentiality. Profiles of our models are only in private access."
                  )
                }}
              </div>
              <div class="advantage__item">
                {{ t("High level of remuneration.") }}
              </div>
              <div class="advantage__item">
                {{
                  t("The opportunity to develop, travel, reach new heights.")
                }}
              </div>
            </ul>
            <div class="advantage__decoration">
              <div class="advantage__img">
                <nuxt-img src="/img/casting/advantage/img.webp" alt="" />
              </div>

              <div class="advantage__text">Elite escort</div>
            </div>
          </div>
        </section>
        <section class="casting__section-necessarily necessarily">
          <div class="necessarily__section-name genscasting-section-name">
            <h3>{{ t("Requirements") }}</h3>
          </div>
          <div class="necessarily__content genscasting-content">
            <div class="necessarily__content-img">
              <nuxt-img src="/img/casting/necessarily/full-img.webp" alt="" />
            </div>
            <div class="necessarily__info">
              <div class="necessarily__subtitle genscasting-subtitle">
                {{ t("Requirements for girls") }}
              </div>
              <div class="necessarily__line"></div>
              <div class="necessarily__info-p">
                {{
                  t(
                    "Our agency works with rich men who are used to get everything out of life. Therefore, they will not be confused by the high cost of services. Are you interested in a high-paying job?"
                  )
                }}
                <br /><br />
                {{
                  t(
                    "Your advantages will be proficiency in foreign languages, availability of an open American visa, participation in beauty contests and other high-quality media projects. We invite beautiful, smart and liberated girls to the casting at MGTimes. Take an important step in your life, and tomorrow it will change for the better."
                  )
                }}
              </div>
            </div>
          </div>
        </section>
        <!-- <div class="casting__questionnaire questionnaire">
                <div class="questionnaire__container">
                    <div class="questionnaire__title">
                        Profile
                    </div>
                    <form method="post" action="#" enctype="multipart/form-data" class="casting__form form" id="sendform" novalidate>

                        <div class="form__form-data-shell">
                            <div class="form__form-data">
                                <div class="form__form-name">
                                    Your data
                                </div>
                                <input class="form__input-data required" type="text" placeholder="Name" name="name">
                                <input class="form__input-data required phone_number" type="text" placeholder="Phone number" name="tel">
                                <input class="form__input-data required" type="text" placeholder="Your city" name="city">
                            </div>
                            <div class="form__form-about">
                                <div class="form__form-name">
                                    Tell about yourself
                                </div>

                                <textarea class="form__textarea-about required" name="textabout" style="margin-bottom:15px" placeholder="Message"></textarea>
                            </div>
                        </div>
                        <div class="form__form-images">


                            <div class="form__form-name">
                                Your photo (preferably at least 4)
                            </div>

                            <div class="upload__box">
                                <div class="upload__btn-box">
                                    <label class="upload__btn">
                                        <p>Choose a photo</p>
                                        <input type="file" name="files[]" multiple="" accept="image/*" data-max_length="20" class="upload__inputfile required">
                                    </label>
                                    <p style="margin-top:20px">Press and hold CTRL to select more photos</p>
                                </div>
                                <div class="upload__img-wrap"></div>
                            </div>
                        </div>
                        <div class="form__text-explanation">
                            By clicking the “Submit a request” button I confirm my consent to the processing of personal data and agree to the <a href="/public-offer.php">privacy policy</a> .
                        </div>

                        <div class="preloader" style="color:#9e2220;padding:35px 0 0;display:none">Please wait, sending a form</div>

                        <div class="contact-form__message"></div>

                        <button id="sendMailBtn" class="form__btn" name="sendMail" type="submit">Submit a request</button>

                    </form>
                </div>

             <script src="https://code.jquery.com/jquery-1.12.4.min.js"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.17.0/jquery.validate.min.js"></script>
                <script src="/assets/js/masked.js"></script>
                <script>
                    jQuery(document).ready(function() {
                        $(".phone_number").inputmask("+7(V99) 999-99-99", {
                            "clearIncomplete": true,
                            definitions: {
                                "V": {
                                    validator: "[0-6-9]",
                                    casing: "upper"
                                }
                            }
                        });
                        ImgUpload();
                    });

                    function ImgUpload() {
                        var imgWrap = "";
                        var imgArray = [];

                        $('.upload__inputfile').each(function() {
                            $(this).on('change', function(e) {
                                imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
                                imgWrap.empty();
                                var maxLength = $(this).attr('data-max_length');

                                var files = e.target.files;
                                var filesArr = Array.prototype.slice.call(files);
                                var iterator = 0;
                                filesArr.forEach(function(f, index) {

                                    if (!f.type.match('image.*')) {
                                        return;
                                    }

                                    if (imgArray.length > maxLength) {
                                        return false
                                    } else {
                                        var len = 0;
                                        for (var i = 0; i < imgArray.length; i++) {
                                            if (imgArray[i] !== undefined) {
                                                len++;
                                            }
                                        }
                                        if (len > maxLength) {
                                            return false;
                                        } else {
                                            imgArray.push(f);

                                            var reader = new FileReader();
                                            reader.onload = function(e) {
                                                var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                                                imgWrap.append(html);
                                                iterator++;
                                            }
                                            reader.readAsDataURL(f);
                                        }
                                    }
                                });
                            });
                        });

                        $('body').on('click', ".upload__img-close", function(e) {
                            var file = $(this).parent().data("file");
                            for (var i = 0; i < imgArray.length; i++) {
                                if (imgArray[i].name === file) {
                                    imgArray.splice(i, 1);
                                    break;
                                }
                            }
                            $(this).parent().parent().remove();
                        });
                    }

                    $(document).ready(function() {
                        var errorTxt = 'Sending error';
                        $("#sendform").validate({
                            rules: {
                                name: {
                                    required: true
                                },
                                tel: {
                                    required: true
                                },
                                city: {
                                    required: true
                                },
                                textabout: {
                                    required: true
                                }
                            },
                            messages: {
                                name: {
                                    required: "Fill Name",
                                },
                                tel: {
                                    required: "Fill Phone number"
                                },
                                city: {
                                    required: "Specify which city you are from",
                                },
                                textabout: {
                                    required: "Tell about yourself",
                                },
                                'files[]': {
                                    required: "Attach the photos",
                                }
                            },
                            submitHandler: function(form) {

                                let successSendText = "Your message has been sent. We will contact you as soon as possible";
                                let errorSendText = "Error. Message not sent!";
                                let requiredFieldsText = "Error. You have not filled in all the required fields!";

                                let message = $(form).find(".contact-form__message");

                                let fd = new FormData(form);
                                $.ajax({
                                    url: "/telegramform/php/send-message-to-telegram.php",
                                    type: "POST",
                                    data: fd,
                                    processData: false,
                                    contentType: false,
                                    beforeSend: () => {
                                        $("#sendMailBtn").attr("disabled", true);
                                        $(".preloader").show();
                                    },
                                    success: function success(res) {
                                        $("#sendMailBtn").attr("disabled", false);
                                        $(".preloader").hide();

                                        // Посмотреть на статус ответа, если ошибка
                                        // console.log(res);
                                        let respond = $.parseJSON(res);

                                        if (respond === "SUCCESS") {
                                            $("#sendform").html('<div class="contact-form__message" style="color:#2bb52b">' + successSendText + '</div>');
                                            setTimeout(function() {
                                                location.href = "/casting.php"
                                            }, 5000);
                                        } else if (respond === "NOTVALID") {
                                            message.text(requiredFieldsText).css("color", "#9e2220");
                                            setTimeout(() => {
                                                message.text("");
                                            }, 3000);
                                        } else {
                                            message.text(errorSendText).css("color", "#9e2220");
                                            setTimeout(() => {
                                                message.text("");
                                            }, 4000);
                                        }
                                    },
                                });
                            }
                        });
                    })
                </script> 

            </div> -->
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped></style>
<i18n lang="json">
{
  "en": {
    "title": "Work as an escort in Dubai - get a job as an escort Mgtimes",
    "description": "We offer work for girls in an escort agency. MGTIMES! Elite escort in Dubai! VIP escort in Dubai! Organization of recreation and the best models of Dubai for an escort! 📞 +971 58 525 2213 ⚡",


    "More information":"More information",
    "Working in в MGTimes": "Working in в MGTimes",
    "Working in escort services is a conscious choice of every girl. It isa good opportunity for you to get a high-paying job, start a new life,fill it with cool acquaintances, bright trips and unforgettableemotions. The MGTimes agency helps beautiful model girls to becomereal muses of rich patrons. They are willing to pay money for pleasantcompany and joint leisure.": "Working in escort services is a conscious choice of every girl. It isa good opportunity for you to get a high-paying job, start a new life,fill it with cool acquaintances, bright trips and unforgettableemotions. The MGTimes agency helps beautiful model girls to becomereal muses of rich patrons. They are willing to pay money for pleasantcompany and joint leisure.",
    "Working in our agency": "Working in our agency",
    "Why should you work with us?": "Why should you work with us?",
    "Home page": "Home page",
    "Casting": "Casting",
    "You can meet your soulmate": "You can meet your soulmate",
    "We guarantee you complete safety": "We guarantee you complete safety",
    "We do not place the information in the public domain": "We do not place the information in the public domain",
    "High salary + bonuses": "High salary + bonuses",
    "The ability to travel all over the world": "The ability to travel all over the world",
    "Agency": "Agency",
    "Young beautiful girls": "Young beautiful girls",
    "Working in our escort agency is a destiny for the elite, who arewaiting for yachts, exclusive private events, trips to differentcountries. If you have a dream to get a prestigious job thatbrings pleasure and dating with successful men, we invite you tothe casting to escort. Vacancies are open in MGTimes. It isquite possible you will become the escort model whom all thedoors to the world of chic life are open.": "Working in our escort agency is a destiny for the elite, who arewaiting for yachts, exclusive private events, trips to differentcountries. If you have a dream to get a prestigious job thatbrings pleasure and dating with successful men, we invite you tothe casting to escort. Vacancies are open in MGTimes. It isquite possible you will become the escort model whom all thedoors to the world of chic life are open.",
    "Our requirements": "Our requirements",
    "To be the model in our agency you should necessarily have:": "To be the model in our agency you should necessarily have:",
    "Height from 164 cm": "Height from 164 cm",
    "Positive attitude": "Positive attitude",
    "Well-groomed appearance": "Well-groomed appearance",
    "The ability to maintain a conversation": "The ability to maintain a conversation",
    "Age from 18 years": "Age from 18 years",
    "You will have the advantages, if you:": "You will have the advantages, if you:",
    "Know foreign languages": "Know foreign languages",
    "Take part in beauty contests": "Take part in beauty contests",
    "Have open US visas": "Have open US visas",
    "Participate in photo shoots for magazines": "Participate in photo shoots for magazines",
    "High level of remuneration.": "High level of remuneration.",
    "Models": "Models",
    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.",
    "Height": "Height",
    "Weight": "Weight",
    "Age": "Age",
    "No services found.": "No services found.",
    "Advantages": "Advantages",
    "Advantages of working in our elite escort agency": "Advantages of working in our elite escort agency",
    "There are a lot of wealthy men in Dubai who need women for VIP escort at various events. Working at the MGTimes agency isassociated with many advantages:": "There are a lot of wealthy men in Dubai who need women for VIP escort at various events. Working at the MGTimes agency isassociated with many advantages:",
    "Regular dating with successful men and a chance to find your soul mate.": "Regular dating with successful men and a chance to find your soul mate.",
    "Guarantee of complete security and confidentiality. Profiles of our models are only in private access.": "Guarantee of complete security and confidentiality. Profiles of our models are only in private access.",
    "The opportunity to develop, travel, reach new heights.": "The opportunity to develop, travel, reach new heights.",
    "Requirements": "Requirements",
    "Requirements for girls": "Requirements for girls",
    "Our agency works with rich men who are used to get everything out of life. Therefore, they will not be confused by the high cost of services. Are you interested in a high-paying job?": "Our agency works with rich men who are used to get everything out of life. Therefore, they will not be confused by the high cost of services. Are you interested in a high-paying job?",
    "Your advantages will be proficiency in foreign languages, availability of an open American visa, participation in beauty contests and other high-quality media projects. We invite beautiful, smart and liberated girls to the casting at MGTimes. Take an important step in your life, and tomorrow it will change for the better.": "Your advantages will be proficiency in foreign languages, availability of an open American visa, participation in beauty contests and other high-quality media projects. We invite beautiful, smart and liberated girls to the casting at MGTimes. Take an important step in your life, and tomorrow it will change for the better."
  },
  "ru": {
    "title": "Работа в качестве эскорта в Дубае - эскорт агентство Mgtimes",
    "description": "Предлагаем работу для девушек в эскорт агентстве. MGTIMES! Элитный эскорт в Дубае! VIP сопровождение в Дубае! Организация отдыха и лучшие модели Дубая для эскорта! 📞 +971 58 525 2213 ⚡",


    "More information":"Узнать больше",
    "Working in в MGTimes": "Работа моделью в MGTimes",
    "Working in escort services is a conscious choice of every girl. It isa good opportunity for you to get a high-paying job, start a new life,fill it with cool acquaintances, bright trips and unforgettableemotions. The MGTimes agency helps beautiful model girls to becomereal muses of rich patrons. They are willing to pay money for pleasantcompany and joint leisure.": "Работа в сфере элитных эскорт-услуг – сознательный выбор каждой девушки. Сегодня это возможность получить высокооплачиваемую работу, начать новую жизнь, наполнить ее крутыми знакомствами, яркими путешествиями и незабываемыми эмоциями. Агентство «MGTimes» помогает красивым девушкам с модельной внешностью стать настоящими музами богатых покровителей, которые готовы платить деньги за приятное общество и совместный досуг.",
    "Working in our agency": "Работа у нас",
    "Why should you work with us?": "Почему вам стоит работать у нас?",
    "Home page": "Главная страница",
    "Casting": "Кастинг",
    "You can meet your soulmate": "Вы можете встретить свою вторую половинку",
    "We guarantee you complete safety": "Мы гарантируем Вам полную безопасность",
    "We do not place the information in the public domain": "Мы не размещаем анкеты в открытом доступе",
    "High salary + bonuses": "Высокая заработная плата + бонусы",
    "The ability to travel all over the world": "Возможность путешествовать по всему миру",
    "Agency": "Агенство",
    "High level of remuneration.": "Высокий уровень вознаграждения.",
    "Our requirements": "Наши требования",
    "Working in our escort agency is a destiny for the elite, who arewaiting for yachts, exclusive private events, trips to differentcountries. If you have a dream to get a prestigious job thatbrings pleasure and dating with successful men, we invite you tothe casting to escort. Vacancies are open in MGTimes. It isquite possible you will become the escort model whom all thedoors to the world of chic life are open.": "Работа в нашем эскорт-агентстве – это удел для избранных, которых ждут яхты, эксклюзивные частные мероприятия, поездки по разным странам. Если вы мечтаете устроиться на престижную работу, которая приносит удовольствие и знакомства с успешными мужчинами, приглашаем пройти кастинг. В «MGTimes» открыты вакансии, и вполне возможно, что именно вы станете теми моделями, перед которыми будут открыты все двери в мир шикарной жизни.",
    "To be the model in our agency you should necessarily have:": "Для работы моделью в нашем агентстве Вам необходимо обязательно иметь:",
    "Height from 164 cm": "Рост от 164 см",
    "Positive attitude": "Позитивный настрой",
    "Well-groomed appearance": "Ухоженный внешний вид",
    "The ability to maintain a conversation": "Умение поддержать беседу",
    "Age from 18 years": "Возраст от 18 лет",
    "You will have the advantages, if you:": "",
    "Know foreign languages": "Знание иностранных языков",
    "Take part in beauty contests": "Участие в конкурсах красоты",
    "Have open US visas": "Наличие открытых виз США",
    "Participate in photo shoots for magazines": "Участие в фотосессиях для журналов",
    "Below you can see profiles of beautiful girl to convey their beauty, femininity and elegance.": "Ниже вы можете увидеть профили красивых девушек, чтобы передать их красоту, женственность и элегантность.",
    "Models": "Модели",
    "Height": "Рост",
    "Weight": "Вес",
    "Age": "Возраст",
    "No services found.": "Услуги не найдены.",
    "Advantages": "Преимущества",
    "Advantages of working in our elite escort agency": "Преимущества работы в нашем агентстве элитного эскорта",
    "There are a lot of wealthy men in Dubai who need women for VIP escort at various events. Working at the MGTimes agency isassociated with many advantages:": "В Москве очень много состоятельных мужчин, которым нужны женщины для VIP сопровождения на разных мероприятиях. Работа в агентстве «MGTimes» связана со множеством преимуществ:",
    "Regular dating with successful men and a chance to find your soul mate.": "Регулярные знакомства с успешными мужчинами и шанс найти свою вторую половинку",
    "Guarantee of complete security and confidentiality. Profiles of our models are only in private access.": "Гарантия полной безопасности и конфиденциальности. Анкеты моделей находятся только в закрытом доступе.",
    "The opportunity to develop, travel, reach new heights.": "Возможность развиваться, путешествовать, достигать новых высот.",
    "Requirements": "Требования",
    "Requirements for girls": "Требования к девушкам",
    "Our agency works with rich men who are used to get everything out of life. Therefore, they will not be confused by the high cost of services. Are you interested in a high-paying job?": "Наше агентство работает с богатыми мужчинами, которые привыкли получать от жизни все. Поэтому их не смутит высокая стоимость услуг. Заинтересованы в высокооплачиваемой работе?",
    "Your advantages will be proficiency in foreign languages, availability of an open American visa, participation in beauty contests and other high-quality media projects. We invite beautiful, smart and liberated girls to the casting at MGTimes. Take an important step in your life, and tomorrow it will change for the better.": "Вашими преимуществами станут владение иностранными языками, наличие открытой американской визы, участие в конкурсах красоты и других медийных проектах высокого качества."
  }
}
</i18n>
