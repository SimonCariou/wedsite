
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
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      {
        rel: 'icon', type: 'image/x-icon', href: '/favicon.ico',
      },
      {
        rel: 'stylesheet',
        href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.0.0/animate.min.css'
      }
    ],
    script: [
      { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js' },
      { src: 'https://code.jquery.com/ui/1.12.0/jquery-ui.min.js' },
      { src: 'https://static.miniclipcdn.com/js/game-embed.js' },
      { src: 'https://unpkg.com/@lottiefiles/lottie-player@0.4.0/dist/lottie-player.js' },
      { src: 'https://unpkg.com/@lottiefiles/lottie-interactivity@latest/dist/lottie-interactivity.min.js' },
      {
        rel: "preconnect",
        src:
          "https://polyfill.io/v3/polyfill.min.js?flags=gated&features=smoothscroll%2CIntersectionObserver%2CResizeObserver",
        body: true
      }


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
    '@/assets/css/main.sass'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  //we need to put the JS file externally because it needs to be intanciate in hte nuxtconfig.js as "no-ssr" to run on the clients'.
  plugins: [

    { src: '@/plugins/form_submission_handler.js', ssr: false },
    //{ src: '@/assets/js/game.js', ssr: false }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [

  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/modules/tree/master/packages/bulma
    // '@nuxtjs/bulma',
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
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
