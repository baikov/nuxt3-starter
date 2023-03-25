// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // apiSecret: '123',
    public: {
      apiUrl: process.env.API_URL,
    },
  },
  components: true,
  ssr: true,
  typescript: {
    strict: true,
    typeCheck: true,
    shim: false,
  },
  modules: [
    '@vueuse/nuxt',
    '@nuxtjs/color-mode',
    'nuxt-icon',
    'nuxt-vitest',
    '@nuxt/image-edge',
    //   "nuxt-headlessui",
    //   "@pinia/nuxt",
  ],
  experimental: {
    reactivityTransform: true,
  },
  // css: ["@/assets/css/main.css"],
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //     ...(process.env.NODE_ENV === "production" ? { cssnano: {} } : {}),
  //   },
  // },
  vueuse: {
    ssrHandlers: true,
  },
  colorMode: {
    classSuffix: '',
  },
  // headlessui: {
  //   prefix: "",
  // },
  image: {
    domains: ['fakestoreapi.com'],
  },
})
