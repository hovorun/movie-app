// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  css: [
    '~/assets/defaults.scss',
  ],
  target: 'static',
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
});
