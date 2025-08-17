import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  ssr: false,  // SSRをオフにして静的サイト化
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width, initial-scale=1, maximum-scale=1',
      title: 'keblog',
      link: [
      //  { rel: 'canonical', href: 'xxx'},
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
      ],
      meta: [
        { name: 'viewport', content: 'width=device-width,initial-scale=1'},
        { name: 'description', content: 'This is keblog.'},
        { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge'},
      ],
    }
  },
  devtools: { enabled: true },
  pages: true,
  modules: ['@nuxt/content', 
    '@nuxtjs/google-fonts', 
    'nuxt-gtag',
    '@nuxtjs/sitemap',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],
  gtag: {
    id: 'G-64QE574FWB'
  },
  css: [
    '/assets/scss/global.scss',
    '/assets/scss/article.scss',
//    '/assets/scss/typora-base.scss',
    '@mdi/font/css/materialdesignicons.min.css',
  ],
  sitemap: {
    hostname: 'https://keblog.org',
    gzip: true,
    xsl: true,
    routes: [
      '/',
      '/contact',
      '/blog/lenin-doc',
      '/blog/lenin-guide'
    ]
  },
  googleFonts: {
    families: {
      'Lato': true,
      'Noto+Sans+JP': true,
      'Roboto': true,
      'Open Sans': true,
    },
  },
  build: {
    transpile: ['vuetify'],
  },
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})