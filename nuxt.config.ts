// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  //   devtools: { enabled: true },
  app: {
    head: {
      meta: [
        { name: "viewport", content: "width=device-width, initial-scale=1" },
      ],
      script: [
        {
          src: "/js/jquery.js",
          async: true,
          crossorigin: "anonymous",
        },
        { src: "/js/plugins.js", body: true },
        { src: "/js/functions.js", body: true },
      ],
    },
  },
  css: [
    "@/assets/css/plugins.css",
    "@/assets/css/style.css",
    "@/assets/css/custom.css",
  ],
  modules: ["nuxt-swiper"],
});
