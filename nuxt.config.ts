// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/defaults.scss',
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    baseURL: '/movie-app',
  },
});
