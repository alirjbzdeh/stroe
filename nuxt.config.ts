// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    // Public keys that are exposed to the client
    public: {
      apiBase: 'https://mocki.io/v1/'
    }
  },
  devtools: { 
    enabled: true ,
    timeline: {
      enabled: true
    }
  },
  modules: ['@pinia/nuxt', '@nuxtjs/tailwindcss'],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'], 
    ],
  },
  css: [
    '~/assets/styles/main.scss',
    '~/assets/styles/fonts.scss',
  ]
})
