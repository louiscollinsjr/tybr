export default {
  ssr: false,
  head: {
    titleTemplate: "BlissfulSherpa: %s",
    htmlAttrs: {
      lang: "en"
    },
    bodyAttrs: {
      // class: ["my-style"]
    },
    title: "Nuxt.js starter for CSB",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, user-scalable=no, width=device-width, height=device-height, viewport-fit=cover"
      },
      {
        hid: "description",
        name: "description",
        content: "Official Nuxt.js starter for CodeSandBox"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  modules: [],
  buildModules: ["@nuxtjs/tailwindcss"],
  components: true,
  build: {
    extractCSS: true,
    loaders: {
      limit: 0
    },
    postcss: {
      plugins: {
        "postcss-import": true
      },
      preset: {
        features: {
          // Fixes: https://github.com/tailwindcss/tailwindcss/issues/1190#issuecomment-546621554
          "focus-within-pseudo-class": false
        }
      }
    }
  },
  tailwindcss: {
    cssPath: "~/assets/css/tailwind.css",
    // configPath: 'tailwind.config.js',
    jit: true
  },
  css: []
};
