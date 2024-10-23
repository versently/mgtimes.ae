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

const route = useRoute();



const filterHairColor = ref('')
const filterHairColorModels = (list) => {
  
  if (!filterHairColor.value) return list;
  return list.filter((model) => {
    return model.hairColor === filterHairColor.value;
  });
}

const filterAge = ref('')
const filterAgeModels = (list) => {
  if (!filterAge.value) return list;
  return list.filter((model) => {
    return Number(model.age) <= Number(filterAge.value);
  });
}

const bustSize = ref('')
const filterBustSizeModels = (list) => {
  if (!bustSize.value) return list;
  return list.filter((model) => {
    console.log(model.bustSize, bustSize.value)
    return Number(model.bustSize) === Number(bustSize.value);
  });
}

const visaFilter = ref('')
const visaFilterModels = (list) => {
  if (!visaFilter.value) return list;
  return list.filter((model) => {
     return model.visa ===visaFilter.value;
   
  });
}


const uniqueModels = (models) => models.filter((item, index) => {
  
   const firstIndex = models.findIndex(t => t.title === item.title);
  
  return index === firstIndex;
});
</script>

<template>
  <main>
    <div class="models">
      <div class="models__container">
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
              <span itemprop="name">{{ t("Models") }}</span>
              <meta itemprop="position" content="2" />
            </div>
          </li>
        </div>
        <h1 class="models__title">{{ t("Models") }}</h1>
        <div>
          <div class="filters">
<div class="filter">

  <label for="filterHairColor"> {{ t("HairColor") }}</label>
<select v-model="filterHairColor" id="filterHairColor">
  <option value="">{{ t("All") }}</option>
    <option value="brunet">{{ t("Brunettes") }}</option>
    <option value="blonde">{{ t("Blondes") }}</option>
  </select>
</div>

<div class="filter">

  <label for="filterAge">{{ t("Age") }}</label>
<select v-model="filterAge" id="filterAge">
  <option value="">{{ t("All") }}</option>
    <option value="21">18 - 21</option>
    <option value="25">22-25</option>
    <option value="29">26-29</option>
  </select>
</div>
  
<div class="filter">

  <label for="bustSize">{{ t("BustSize") }}</label>
<select v-model="bustSize" id="bustSize">
   <option value="">{{ t("All") }}</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</div>

<div class="filter">

  <label for="visaFilter">{{ t("Visa") }}</label>
<select v-model="visaFilter" id="visaFilter">
   <option value="">{{ t("All") }}</option>
    <option value="usa">{{ t("USA") }}</option>
    <option value="europe">{{ t("Europe") }}</option>
    <option value="GB">{{ t("Great Britain") }}</option>
    <option value="japan">{{ t("Japan") }}</option>
  </select>
</div>
          </div>
          <ContentList
            :path="route.path"
            :query="{
              only: [
              'title',
                'age',                
                'description',
                'bustSize',
                'visa',
                'weight',
                'height',
                '_path',
                'hairColor',
                'folder',
                'mainImage',
              ],
            }"
          >
            <template v-slot="{ list }">
              <div class="services__list">
                <div
                  class="models__model-item"
                  v-for="model in uniqueModels(visaFilterModels(filterBustSizeModels(filterAgeModels(filterHairColorModels(list)))))"
                  :key="model._path"
                >
                  <nuxt-img
                    :src="`/assets/img/models/${model.folder}/${model.mainImage}`"
                    :alt="model.title"
                    loading="lazy"
                    sizes="sm:100vw md:50vw lg:400px"
                  />
                  <div class="models__model-description">
                    <div class="models__model-name">{{ model.title }}</div>
                    <div class="models__model-characteristics">
                      <div class="models__model-property">
                        {{ t("Height:") }} <span>{{ model.height }}</span>
                      </div>
                      <div class="models__model-property">
                        {{ t("Weight:") }} <span>{{ model.weight }}</span>
                      </div>
                      <div class="models__model-property">
                        {{ t("Age:") }} <span>{{ model.age }}</span>
                      </div>
                    </div>
                  </div>
                  <a :href="model._path" class="models__model-more">
                    {{ t("More information") }}</a
                  >
                </div>
              </div>
            </template>
          </ContentList>
        </div>

        <section class="models__agency-section agency-section">
          <div class="agency-section__section-name">
            <h3>{{ t("Agency") }}</h3>
          </div>
          <div class="agency-section__content">
            <div class="agency-section__text">
              {{
                t(
                  "An elite agency that offers escort services in Moscow for high-status and self-confident men. We guarantee our clients 100% confidentiality, high quality service, because we have an impeccable reputation. In the database of our agency, luxurious and educated Models are available who possess all the subtleties of seduction, the ability to emphasize the solidity of their companion at any VIP event."
                )
              }}
              <br /><br />
              {{
                t(
                  "You can choose an elegant, intellectually developed and sociable young girl for VIP Escorts. You can order elite ladies for escort at an affordable price."
                )
              }}
            </div>
            <button class="agency-section__btn-order btn-order">
              {{ t("Order an escort") }}
            </button>
          </div>
          <div class="agency-section__img">
            <nuxt-img src="/img/models/agency-section/img-girl.webp" alt="" />
          </div>
        </section>
        <section
          class="models__features-models-section features-models-section"
        >
          <div class="features-models-section__section-name">
            <h3>{{ t("Features of our expensive models") }}</h3>
          </div>
          <div class="features-models-section__content">
            <div class="features-models-section__main-image">
              <nuxt-img
                src="/img/models/features-models-section/main-image.webp"
                alt=""
              />
            </div>
            <div class="features-models-section__text">
              {{
                t(
                  "The models of our agency are stunning companions who will be the perfect decoration for a man at a VIP event, during a romantic date, a visit to a restaurant, a theater. The girls will brighten up a business trip, negotiations with partners, and also make the trip memorable and incredibly bright."
                )
              }}
              <br /><br />
              {{
                t(
                  "Our database contains elite beautiful ladies who are distinguished by the following advantages:"
                )
              }}
            </div>
            <div class="features-models-section__list">
              <div class="features-models-section__list-item">
                {{ t("Grooming") }}
              </div>
              <div class="features-models-section__list-item">
                {{ t("Fluency in foreign languages") }}
              </div>
              <div class="features-models-section__list-item">
                {{ t("Fit figure") }}
              </div>
              <div class="features-models-section__list-item">
                {{ t("Participation in beauty contests") }}
              </div>
              <div class="features-models-section__list-item">
                {{ t("Attractive appearance") }}
              </div>
              <div class="features-models-section__list-item">
                {{
                  t("The ability to maintain a conversation on various topics")
                }}
              </div>
            </div>
            <div class="features-models-section__text-under-list">
              {{
                t(
                  "«MGTimes» gives you the opportunity to find pleasant acquaintances with beautiful girls of high qualification for an hour, a night and longer."
                )
              }}
            </div>
          </div>
          <div class="features-models-section__text-decoration">
            {{ t("Dreams come true... You just have to want to") }}
          </div>
        </section>
        <section class="models__vip-escort-section vip-escort-section">
          <div class="vip-escort-section__section-name">
            <h3>{{ t("VIP escort") }}</h3>
          </div>
          <div class="vip-escort-section__content">
            <div class="vip-escort-section__main-img">
              <nuxt-img
                src="/img/models/vip-escort-section/main-image.webp"
                alt=""
              />
            </div>
            <div class="vip-escort-section__title">
              {{
                t("VIP escort is the prerogative of strong and successful men")
              }}
            </div>
            <div class="vip-escort-section__text">
              {{
                t(
                  "Expensive escort services are the fate of exceptionally strong men. By contacting our agency, each client gets access to a database of elegant, slender and very beautiful VIP girls who are ideal companions."
                )
              }}
              <br /><br />
              {{
                t(
                  "We offer successful men VIP conditions at a premium cost. You have the opportunity to order elite escort girls at any time, according to your personal fantasies and preferences."
                )
              }}
              <br /><br />
              {{
                t(
                  "Our escort service agency will open the door to the world of unforgettable VIP escort for any event!"
                )
              }}
            </div>
            <div class="vip-escort-section__text-decoration">
              {{ "VIP escort" }}
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style  scoped>
.filters {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem; 
}

.filter {
  flex: 1 1 calc(25% - 1rem); 
  min-width: 150px; /* Минимальная ширина фильтров */
}

.filter label {
  display: block;
  margin-bottom: 0.5rem; /* Отступ между меткой и выбором */
  font-weight: bold; /* Жирный шрифт для меток */
}

.filter select {
  width: 100%; /* Полная ширина для селектов */
  padding: 0.5rem; /* Отступ внутри селектов */
  border: 1px solid #ccc; /* Граница селектов */
  border-radius: 4px; /* Закругление углов */
  transition: border-color 0.3s; /* Плавный переход для цвета границы */
}

.filter select:focus {
  border-color: #007bff; /* Цвет границы при фокусе */
  outline: none; /* Убираем стандартный контур */
}

@media (max-width: 768px) {
  .filters {
    flex-direction: column; /* Вертикальное расположение на малых экранах */
  }

  .filter {
    flex: 1 1 auto; /* Позволяет фильтрам занимать всю ширину */
  }
}


</style>
<i18n lang="json">
{
  "en": {
    "title": "Catalog of escort models and VIP girls in Dubai - MGTimes",
    "description": "Looking for an elite escort in Dubai? Profiles of escort models from MGTimes modeling agency in Dubai are waiting for you. Full access to the gallery with VIP girls.📞 +971 58 525 2213 ⚡",

    "Models": "Models",
    "Home page": "Home page",
    "Height": "Height",
    "Weight": "Weight",
    "Age": "Age",
    "More information": "More information",
    "Agency": "Agency",
    "An elite agency that offers escort services in Moscow for high-status and self-confident men. We guarantee our clients 100% confidentiality, high quality service, because we have an impeccable reputation. In the database of our agency, luxurious and educated Models are available who possess all the subtleties of seduction, the ability to emphasize the solidity of their companion at any VIP event.": "An elite agency that offers escort services in Moscow for high-status and self-confident men. We guarantee our clients 100% confidentiality, high quality service, because we have an impeccable reputation. In the database of our agency, luxurious and educated Models are available who possess all the subtleties of seduction, the ability to emphasize the solidity of their companion at any VIP event.",
    "You can choose an elegant, intellectually developed and sociable young girl for VIP Escorts. You can order elite ladies for escort at an affordable price.": "You can choose an elegant, intellectually developed and sociable young girl for VIP Escorts. You can order elite ladies for escort at an affordable price.",
    "Order an escort": "Order an escort",
    "Features of our expensive models": "Features of our expensive models",
    "The models of our agency are stunning companions who will be the perfect decoration for a man at a VIP event, during a romantic date, a visit to a restaurant, a theater. The girls will brighten up a business trip, negotiations with partners, and also make the trip memorable and incredibly bright.": "The models of our agency are stunning companions who will be the perfect decoration for a man at a VIP event, during a romantic date, a visit to a restaurant, a theater. The girls will brighten up a business trip, negotiations with partners, and also make the trip memorable and incredibly bright.",
    "Our database contains elite beautiful ladies who are distinguished by the following advantages:": "Our database contains elite beautiful ladies who are distinguished by the following advantages:",
    "Fluency in foreign languages": "Fluency in foreign languages",
    "Participation in beauty contests": "Participation in beauty contests",
    "Attractive appearance": "Attractive appearance",
    "Grooming": "Grooming",
    "Fit figure": "Fit figure",
    "The ability to maintain a conversation on various topics": "The ability to maintain a conversation on various topics",
    "«MGTimes» gives you the opportunity to find pleasant acquaintances with beautiful girls of high qualification for an hour, a night and longer.": "«MGTimes» gives you the opportunity to find pleasant acquaintances with beautiful girls of high qualification for an hour, a night and longer.",
    "VIP escort": "VIP escort",
    "VIP escort is the prerogative of strong and successful men": "VIP escort is the prerogative of strong and successful men",
    "Expensive escort services are the fate of exceptionally strong men. By contacting our agency, each client gets access to a database of elegant, slender and very beautiful VIP girls who are ideal companions.": "Expensive escort services are the fate of exceptionally strong men. By contacting our agency, each client gets access to a database of elegant, slender and very beautiful VIP girls who are ideal companions.",
    "We offer successful men VIP conditions at a premium cost. You have the opportunity to order elite escort girls at any time, according to your personal fantasies and preferences.": "We offer successful men VIP conditions at a premium cost. You have the opportunity to order elite escort girls at any time, according to your personal fantasies and preferences.",
    "Our escort service agency will open the door to the world of unforgettable VIP escort for any event!": "Our escort service agency will open the door to the world of unforgettable VIP escort for any event!",
    "Visa": "Visa availability",
    "BustSize": "Bust size",
    "HairColor": "Hair color",
    "Brunettes": "Brunettes",
    "Blondes": "Blondes",
    "All": "All",
    "USA": "USA",
    "Europe": "Europe",
    "Great Britain": "Great Britain",
    "Japan": "Japan"
  },
  "ru": {
    "title": "Каталог эскорт моделей и VIP девушек в Дубае - MGTimes",
    "description": "Ищете элитный эскорт в Дубае? Анкеты эскорт-моделей от модельного агентства MGTimes в Дубае ждут вас. Полный доступ в галерею с VIP девушками.📞 +971 58 525 2213 ⚡",

    "Models": "Модели",
    "Home page": "Главная страница",
    "Height": "Рост",
    "Weight": "Вес",
    "Age": "Возраст",
    "More information": "Больше информации",
    "Agency": "Агентство",
    "Fit figure": "Спортивная фигура",
    "An elite agency that offers escort services in Moscow for high-status and self-confident men. We guarantee our clients 100% confidentiality, high quality service, because we have an impeccable reputation. In the database of our agency, luxurious and educated Models are available who possess all the subtleties of seduction, the ability to emphasize the solidity of their companion at any VIP event.": "Элитное агентство, которое предлагает услуги эскорта в Москве для статусных и уверенных в себе мужчин. Мы гарантируем своим клиентам 100% конфиденциальность, сервис высокого качества, поскольку владеем безупречной репутацией. В базе нашего агентства доступны роскошные и образованные модели, которые владеют всеми тонкостями обольщения, умением подчеркнуть солидность своего спутника на любом ВИП мероприятии.",
    "You can choose an elegant, intellectually developed and sociable young girl for VIP Escorts. You can order elite ladies for escort at an affordable price.": "Вы можете выбрать элегантную, интеллектуально развитую и коммуникабельную молодую девушку для VIP сопровождения. Заказать элитных леди для эскорта можно по доступной цене.",
    "Order an escort": "Заказать эскорт",
    "Features of our expensive models": "Особенности наших дорогих девушек",
    "The models of our agency are stunning companions who will be the perfect decoration for a man at a VIP event, during a romantic date, a visit to a restaurant, a theater. The girls will brighten up a business trip, negotiations with partners, and also make the trip memorable and incredibly bright.": "Модели нашего агентства – сногсшибательные спутницы, которые станут идеальным украшением мужчины на ВИП мероприятии, во время романтического свидания, посещения ресторана, театра. Девушки скрасят деловую поездку, переговоры с партнерами, а также сделают путешествие запоминающимся и невероятно ярким.",
    "Our database contains elite beautiful ladies who are distinguished by the following advantages:": "В нашей базе представлены элитные красивые леди, которые отличаются такими преимуществами:",
    "Fluency in foreign languages": "Свободное владение иностранными языками",
    "Participation in beauty contests": "Участие в конкурсах красоты",
    "Attractive appearance": "Привлекательная внешность",
    "Grooming": "Ухоженность",
    "The ability to maintain a conversation on various topics": "Умение поддержать разговор на разные темы",
    "«MGTimes» gives you the opportunity to find pleasant acquaintances with beautiful girls of high qualification for an hour, a night and longer.": "«MGTimes» дает возможность обрести приятные знакомства с прекрасными девушками высокой квалификации на час, ночь и дольше.",
    "VIP escort": "VIP сопровождение",
    "VIP escort is the prerogative of strong and successful men": "VIP сопровождение – прерогатива сильных и успешных мужчин",
    "Expensive escort services are the fate of exceptionally strong men. By contacting our agency, each client gets access to a database of elegant, slender and very beautiful VIP girls who are ideal companions.": "Дорогие услуги эскорта – участь исключительно сильных мужчин. Обращаясь в наше агентство, каждый клиент получает доступ к базе изящных, стройных и безумно красивых девушек, которые станут идеальными спутницами.",
    "We offer successful men VIP conditions at a premium cost. You have the opportunity to order elite escort girls at any time, according to your personal fantasies and preferences.": "Мы предлагаем успешным мужчинам ВИП условия по премиальной стоимости. У вас есть возможность заказать элитную девушку на вызов в любое время с учетом ваших личных фантазий и предпочтений.",
    "Our escort service agency will open the door to the world of unforgettable VIP escort for any event!": "Наше агентство эскорт-услуг откроет вам дверь в мир незабываемого VIP сопровождения на любые мероприятия!",
    "Visa": "Наличие визы",
    "BustSize": "Pазмер груди",
    "HairColor": "Цвет волос",
    "Brunettes": "Брюнетки",
    "Blondes": "Блондинки",
    "All": "Все",
    "USA": "США",
    "Europe": "Европа",
    "Great Britain": "Великобритания",
    "Japan": "Япония"
    
  }
}
</i18n>
