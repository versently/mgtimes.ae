// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      trailingSlash: false,
    }
  },
  devtools: { enabled: true },
  app: {
    head: {
      script: [
        { src: "/assets/js/SmoothScroll.js", body: true, defer: true },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js",
          body: true,
          defer: true,
        },
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js",
          body: true,
          defer: true,
        },

        {
          src: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.js",
          body: true,
          defer: true,
        },

        { src: "/assets/js/app.js", body: true, defer: true },

        {
          src: " https://www.googletagmanager.com/gtag/js?id=G-ED65NJF30N",
          body: true,
          defer: true,
        },
        //organization sherma
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org/",

            "@type": "Organization",

            name: "Mgtimes",

            telephone: "+7 993 909‒70‒00",

            email: "info@mgtimes.ae",

            image: "https://mgtimes.ae/extra-activity.png",

            address: {
              "@type": "PostalAddress",

              addressLocality: "Dubai",

              streetAddress: "Dubai, Business Bay",
            },
          }),
        },
        {
          innerHTML: `
		var fired = false;

		window.addEventListener('scroll', () => {
			if (fired === false) {
				fired = true;
				setTimeout(() => {
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
        
          gtag('config', 'G-ED65NJF30N');


          (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
       
          ym(91305537, "init", {
               clickmap:true,
               trackLinks:true,
               accurateTrackBounce:true,
               webvisor:true
          });
				}, 1000)
			}
		});
          `,
          body: true,
        },
      ],
      noscript: [
        {
          innerHTML: `
        <!-- Yandex.Metrika counter -->
        <div><img src="https://mc.yandex.ru/watch/69520198" style="position:absolute; left:-9999px;" alt="" /></div>
        <!-- Yandex.Metrika counter -->
         `,
          body: true,
        },
      ],

      meta: [
        {
          name: "google-site-verification",
          content: "prwQlgU9QmIFKYKc_dFmeJZVqCEjSUijDzF0b-qSs8M",
        },
        {
          name: "yandex-verification",
          content: "a74366574883d178",
        },
        {
          property: "og:site_name",
          content: "Escort Agency | MGTimes",
        },
        {
          property: "og:title",
          content: "Escort Agency | MGTimes",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "Premium Escort Service. TOP Models. Worldwide 🖤",
        },
        { property: "og:url", content: "https://mgtimes.ae" },
        {
          property: "og:image",
          content: "https://mgtimes.ae/extra-activity.png",
        },
        { property: "og:image:alt", content: "Escort Agency «Mgtimes»" },
        { property: "og:image:width", content: "600" },
        { property: "og:image:height", content: "600" },
      ],
      link: [
        {
          rel: "preload",
          as: "image",
          href: "/img/index/front-section/bg-image.webp",
        },

        {
          rel: "stylesheet",
          href: "https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.css",
        },
        // {
        //   rel: "alternate",
        //   href: `https://mgtimes.ae`,
        //   hreflang:"en"
        // },
        // {
        //   rel: "alternate",
        //   href: "https://mgtimes.ae/ru",
        //   hreflang:"ru"
        // },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
      ],
    },
  },

  css: ["@/assets/css/style.css"],
  modules: [
    "@nuxt/image",
    "@nuxt/content",
    "@nuxtjs/i18n",
    "nuxt-delay-hydration",
    // "@nuxtjs/yandex-metrika",
  ],
  // yandexMetrika: {
  //   id: "69520198",
  //   // ...
  // },
  // delayHydration: {
  //   mode: "init",
  // },
  
  // auth: {
  //   globalAppMiddleware: true
  //  },
  image: {
    provider: "netlify",
    format: ["webp"],
    quality: 70,
    domains: ["https://mgtimes.ae"],
  },
  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en",
    baseUrl: "https://mgtimes.ae",
    locales: [
      {
        code: "en",
        iso: "en-AE",
        name: "EN",
      },
      {
        code: "ru",
        iso: "ru-AE",
        name: "RU",
      },
    ],
  },
});
