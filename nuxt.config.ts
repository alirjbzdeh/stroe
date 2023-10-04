// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
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
  ],
  ssr: false
})
