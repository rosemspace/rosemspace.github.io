import { resolve } from 'path'
import { NuxtConfig } from '@nuxt/types'
import { normalizeTitle } from './utils/content'

// const isProduction = process.env.NODE_ENV === 'production'
const baseURL = process.env.BASE_URL || 'https://rosem.space'
const locale = process.env.ROSEM_LOCALE || 'en'

const config: NuxtConfig = {
  mode: 'universal',
  target: 'static',
  publicRuntimeConfig: {
    baseURL,
    locale,
  },
  /*
   ** Headers of the page
   */
  head: {
    title: normalizeTitle(process.env.npm_package_name || ''),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'preconnect',
        href: 'https://fonts.googleapis.com',
        crossorigin: 'anonymous',
      },
      {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    ],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fbf' },
  /*
   ** Global CSS
   */
  css: ['~assets/css/main.css', '~assets/css/theme.pcss'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-analytics',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://http.nuxtjs.org/guide/usage.html
    '@nuxt/http',
    // Doc: https://content.nuxtjs.org
    '@nuxt/content',
    // Doc: https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
  ],
  /*
   ** Build configuration
   */
  build: {
    publicPath: '/assets',
    extractCSS: true,
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, ctx) {},
  },
  /*
   ** Generation configuration
   */
  generate: {
    // @ts-ignore
    exclude: [''],
    routes: ['/experiments/1'],
    fallback: true, // 404.html
  },
  router: {
    linkActiveClass: 'link-active',
    linkExactActiveClass: 'link-exact-active',
  },
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-darcula.css',
      },
    },
  },
  /*
   ** HTTP module configuration
   ** See https://http.nuxtjs.org/api/#options
   */
  http: {},
  googleAnalytics: {
    id: 'UA-170187104-1',
  },
  pwa: {
    icon: {
      iconSrc: resolve(__dirname, './assets/images/logo.png'),
    },
    manifest: {
      background_color: '#333',
      name: 'Rosem Space',
      orientation: 'portrait',
      short_name: 'Rosem',
    },
    workbox: {
      runtimeCaching: [
        { urlPattern: 'https://fonts.(googleapis|gstatic).com/.*' },
      ],
    },
  },
}

export default config
