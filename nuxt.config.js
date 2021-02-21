export default {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: "Wedsite Rox & Sim",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Bienvenue sur notre wedsite, toutes les infos sur le fameux 5 décembre 2020. Le site sera mis à jour très souvent au fur et à mesure des préparatifs. Bisous à tous!" }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',

      }
    ],
    script: [
      {
        rel: "preconnect",
        src:
          "https://polyfill.io/v3/polyfill.min.js?flags=gated&features=smoothscroll%2CIntersectionObserver%2CResizeObserver",
        body: true
      },
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/css/main.sass',
    '@/assets/css/Global/animate-text.css',
    '@/assets/css/Global/transitions.sass',
  ],
  /*
  ** Plugins to load before mounting the App
  */
  //we need to put the JS file externally because it needs to be intanciate in hte nuxtconfig.js as "no-ssr" to run on the clients'.
  plugins: [

    { src: '@/plugins/form_submission_handler.js', ssr: false },
    { src: '~plugins/ga.js', mode: 'client' }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: ['nuxt-lazysizes'],

  lazySizes: {
    extendAssetUrls: {
      img: 'data-src',
    },
    plugins: {
      blurUp: true,
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    [
      'nuxt-i18n', {
        locales: [
          {
            name: 'Français',
            code: 'fr',
            iso: 'fr-FR',
            file: 'fr-FR.js'
          },
          {
            name: 'English',
            code: 'en',
            iso: 'en-US',
            file: 'en-US.js'
          },
        ],
        langDir: 'lang/',
        defaultLocale: 'fr',
        strategy: 'prefix',
        lazy: true,
      }],
  ],

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
  },
  /*
  ** Build configuration
  */
  build: {
    analyze: true,
    postcss: {
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
    }
  }
}
