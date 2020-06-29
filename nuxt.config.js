export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: (process.env.npm_package_name || '')
      .replace(
        /^\w|-\w/g,
        (match) => ` ${match[match.length - 1].toUpperCase()}`
      )
      .trimStart(),
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
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
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://content.nuxtjs.org
    '@nuxt/content',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://pwa.nuxtjs.org
    '@nuxtjs/pwa',
  ],
  generate: {
    routes: ['/experiments/1'],
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    credentials: false,
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    extend(config, ctx) {},
  },
  googleAnalytics: {
    id: 'UA-170187104-1',
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
  workbox: {
    runtimeCaching: [
      { urlPattern: 'https://fonts.(googleapis|gstatic).com/.*' },
    ],
  },
}
