
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */
  mode: 'universal',
  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: '«Моя Квартира» — приложение для решения текущих вопросов по своему дому онлайн',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '//176428.selcdn.ru/MyApartment/favicon/favicon-16x16.png' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=latin,cyrillic' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=PT+Serif:400,700&amp;subset=latin,cyrillic' },
      { rel: 'stylesheet', type: 'text/css', href: '//fonts.googleapis.com/css?family=PT+Sans:400,700&amp;subset=latin,cyrillic' }
    ]
  },

  /*
  ** Global CSS
  */
  css: [
    './assets/scss/style.scss'
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/fontawesome',
    '@nuxtjs/router'
  ],
  fontawesome: {
    icons: {
      solid: true,
      brands: true
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: ['@nuxtjs/style-resources'],
  styleResources: {
        scss: [
            './assets/scss/*.scss'
        ]
    },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
