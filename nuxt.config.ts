// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      script: [
        { src: "/assets/js/SmoothScroll.js", body: true, defer: true },
        { src: "/assets/js/gsap/gsap.min.js", body: true, defer: true },
        {
          src: "/assets/js/gsap/ScrollTrigger.min.js",
          body: true,
          defer: true,
        },
        {
          src: "/assets/js/swiper/swiper-bundle.min.js",
          body: true,
          defer: true,
        },
        { src: "/assets/js/app.js", body: true,  defer: true },
        //organization sherma
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org/",

            "@type": "Organization",

            name: "Mgtimes",

            telephone: "+7 977 594-43-45",

            email: "info@mgtimes.ru",

            image: "https://mgtimes.ae/extra-activity.png",

            address: {
              "@type": "PostalAddress",

              addressLocality: "Dubai",

              streetAddress: "Dubai, Business Bay",
            },
          }),
        },

        {
          defer: true,
          src: "https://www.googletagmanager.com/gtag/js?id=G-5ZMFKJYM1N",
        },
        {
          innerHTML: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
      
        gtag('config', 'G-5ZMFKJYM1N');`,
        },

        {
          innerHTML: `
          <!-- Yandex.Metrika counter -->
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
         `,
        },
      ],
      noscript: [
        {
          innerHTML: `
      <!-- Yandex.Metrika counter -->
      <div><img src="https://mc.yandex.ru/watch/91305537" style="position:absolute; left:-9999px;" alt="" /></div>
      <!-- Yandex.Metrika counter -->
       `,
        },
      ],

      meta: [
        {
          name: "yandex-verification",
          content: "aa730f68b9c3659c",
        },
        {
          property: "og:site_name",
          content: "Elite escort services in Dubai MGTIMES",
        },
        {
          property: "og:title",
          content: "Elite escort services in Dubai | VIP girls 🖤 | MGTIMES",
        },
        { property: "og:type", content: "website" },
        {
          property: "og:description",
          content:
            "Escort services and model escorts in Moscow. Elite escort agency for successful men! Selection of VIP models to accompany. Strictly confidential 📞 +79775944345 ⚡",
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
  modules: ["@nuxt/image", "@nuxt/content", "@nuxtjs/i18n"],
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
