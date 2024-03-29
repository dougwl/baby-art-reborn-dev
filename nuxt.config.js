export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  fetchOnServer: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Baby Art Reborn',
    htmlAttrs: {
      lang: 'pt-BR'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg', type: "image/svg+xml"},
      /* { rel: 'stylesheet', href:'/assets/styles/fonts.css', as:'text/css'},
      { rel: 'stylesheet', href:'/assets/styles/main.css', as:'text/css'}, */
      /* { rel: 'stylesheet preload', href:'/assets/fonts/Caveat-VariableFont_wght.woff2', as:'style', crossorigin:''},
      { rel: 'stylesheet preload', href:'/assets/fonts/GoudyBookletter1911-VF.woff2', as:'style', crossorigin:''},
      { rel: 'stylesheet preload', href:'/assets/fonts/Prociono-VF.woff2', as:'style', crossorigin:''},
      { rel: 'stylesheet preload', href:'/assets/fonts/WorkSans[wght].woff2', as:'style', crossorigin:''}, */
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/styles/fonts.css',
    '~/assets/styles/main.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [  {src:'~/plugins/vue2-storage.js'},
              {src: '~/plugins/vue-agile', mode: 'client'},
              {src: '~/plugins/inventory-manager.js', mode: 'client'},
              {src: '~/plugins/helpers.js', mode: 'client'},
              {src: '~/plugins/directives.js', mode: 'client'},
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/image',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    'vue-screen/nuxt',
    ['nuxt-shopify',
      {
        domain: 'baby-art-reborn.myshopify.com',
        storefrontAccessToken: '3993daa65c492545b4cddef62d1ceac4',/* '9fd8bd1a7af30c7b179ec7326e896599', */
        unoptimized: true,
        /* language: 'ja-JP', */
      }
    ],
    ["@nuxtjs/svg"],
  ],

  screen: {
    extend: 'tailwind',
    tablet: 640
  },

  image: {
    dir: 'assets/images'
  },

  /* svg: {
    vueSvgLoader: {
         vue-svg-loader options
    },
    svgSpriteLoader: {
         svg-sprite-loader options
    }
  }, */
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, {isDev, isClient}) {
      if(isDev) {
        /* config.mode = 'development'; */
        config.devtool = isClient ? 'source-map' : 'inline-source-map';
      }
    }
  },
  generate: {
    fallback: true,
  },
  router: {
    prefetchPayloads: true
  }
}

