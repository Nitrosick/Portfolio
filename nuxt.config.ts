const title = 'NB Portfolio'
// const backend = 'https://hommbase.ru/api/index.php/'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  // routeRules: {
  //   '/auth/**': { ssr: false },
  //   '/user/**': { ssr: false },
  //   '/admin/**': { ssr: false }
  // },
  runtimeConfig: {
    public: {
      projectTitle: title,
      // backendUrl: backend
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      title: title,
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' }
      ],
      noscript: [{ children: 'JavaScript is required' }]
    }
    // pageTransition: { name: 'page', mode: 'out-in' }
  },
  components: {
    dirs: [
      'components/ui',
      'components/app',
      'components/section'
    ]
  },
  modules: [
    // '@nuxtjs/style-resources',
    // '@pinia/nuxt',
    // '@nuxtjs/i18n',
    // 'dayjs-nuxt',
    // 'nuxt-gtag',
    // 'yandex-metrika-module-nuxt3',
    // 'nuxt-aos',
    // '@vite-pwa/nuxt',
    // '@nuxtjs/device'
  ],
  router: {
    options: {
      linkActiveClass: 'active-link',
      linkExactActiveClass: 'exact-active-link'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern',
          silenceDeprecations: ['import'],
          additionalData: '@import "@/assets/style/variables.scss";'
        },
      },
    },
  },
  css: [
    '@/assets/style/normalize.scss',
    '@/assets/style/main.scss'
  ],
  imports: {
    dirs: ['store']
  }
  // aos: {
  //   delay: 150,
  //   duration: 1000,
  //   easing: 'ease-out',
  //   once: true
  // }
})
