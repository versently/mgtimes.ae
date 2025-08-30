<script setup>
const { t } = useI18n({
  useScope: "local",
});
const localePath = useLocalePath();

// используем route корректно
const route = useRoute();
const path = route.path;

// получаем документ и surround
const { data } = await useAsyncData(`content-${path}`, async () => {
  // fetch document where the document path matches with the current route
  const media = queryContent().where({ _path: path }).findOne();

  // get the surround information
  const surround = queryContent()
    .only(["_path", "title", "description"])
    .sort({ date: 1 })
    .findSurround(path);

  return {
    media: await media,
    surround: await surround,
  };
});

// destrucure `prev` and `next` value from data
const [prev, next] = data.value.surround;

// вычисляем seoTitle и description (fallback на title)
const seoTitle = data.value?.media?.seoTitle ?? data.value?.media?.title ?? "MGTimes";
const seoDescription = data.value?.media?.description ?? "MGTimes – лучшие модели и услуги";

// ставим head — теперь будет использоваться seoTitle
useHead({
  title: seoTitle,
  meta: [
    { name: "description", content: seoDescription },
    { property: "og:title", content: seoTitle },
    { property: "og:description", content: seoDescription },
    // При необходимости можно раскомментировать og:image и подставить путь:
    // { property: "og:image", content: `https://your-site.com/assets/img/media/${data.value.media.folder}/${data.value.media.mainImage}` }
  ],
});

const images = data.value.media.images;
</script>
<template>
  <main>
    <div class="news">
      <div class="news__container">
        <div class="casting__way-block bread-crumblist" itemscope="" itemtype="https://schema.org/BreadcrumbList">
						<li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
							<a itemprop="item" :href="localePath('index')">
								<span itemprop="name">{{ t("Home page") }}</span>
								<meta itemprop="position" content="1">
							</a>
						</li>
						/
						
						<li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
							<a :href="localePath('/media')" itemprop="item">
								<span itemprop="name">{{ t("Media") }}</span>
								<meta itemprop="position" content="2">
							</a>
						</li>
						/
						<li itemprop="itemListElement" itemscope="" itemtype="https://schema.org/ListItem">
							<span itemprop="name">{{ data.media.title }}</span>
							<meta itemprop="position" content="3">

						</li>
					</div>

        <div class="news__content">
          <h1 class="news__title">{{ data.media.title }}</h1>
          <!-- <p class="news__p">
            {{ data.media.description }}
          </p>-->
          <!-- <p class="news__p">
            <nuxt-img
              class="news__img-main"
              :src="`/assets/img/media/${data.media.folder}/${data.media.mainImage}`"
              :alt="data.media.title"
            />
          </p> -->

          <ContentRenderer :value="data.media"  />
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="css" >
.news p{
margin-top: 2.5rem;

}
</style>
<i18n lang="json">
  {
    "en": {
      "Home page": "Home page",
      "Media": "Media"
      
    
    },
    "ru": {
      "Home page": "Главная",
      "Media": "Медиа"

     
    
    }
  }
  </i18n>
  