import { createSEOMeta } from './utils/seo'
import { fetchSitemapRoutes } from './utils/sitemap'

export default async () => {
  const routes = await fetchSitemapRoutes()

  return {
    /*
     ** Nuxt rendering mode
     ** See https://nuxtjs.org/api/configuration-mode
     */
    mode: 'universal',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'static',
    /*
     ** Headers of the page
     ** See https://nuxtjs.org/api/configuration-head
     */
    head: {
      title: 'NarutoDose',
      meta: [
        ...createSEOMeta({
          title: 'NarutoDose',
          description:
            'Get to know all about Naruto and its characters in tiny bits of info.',
          image: '[Insert_NarutoDose_Image_URL]',
          url: process.env.HOST_NAME,
        }),
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        {
          rel: 'stylesheet',
          href:
            'https://cdn.jsdelivr.net/npm/prismjs@1.20.0/themes/prism-tomorrow.css',
        },
      ],
    },
    /*
     ** Global CSS
     */
    css: [],
    /*
     ** Plugins to load before mounting the App
     ** https://nuxtjs.org/guide/plugins
     */
    plugins: [],
    /*
     ** Auto import components
     ** See https://nuxtjs.org/api/configuration-components
     */
    components: true,
    /*
     ** Nuxt.js dev-modules
     */
    buildModules: [
      // Doc: https://github.com/nuxt-community/eslint-module
      '@nuxtjs/eslint-module',
      // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
      '@nuxtjs/tailwindcss',
    ],
    /*
     ** Nuxt.js modules
     */
    modules: [
      // Doc: https://axios.nuxtjs.org/usage
      '@nuxtjs/axios',
      [
        'storyblok-nuxt',
        {
          accessToken: process.env.STORYBLOK_KEY,
          cacheProvider: 'memory',
        },
      ],
      [
        '@nuxtjs/markdownit',
        { html: true, injected: true, use: ['markdown-it-prism'] },
      ],
      '@nuxtjs/sitemap',
    ],

    sitemap: {
      hostname: process.env.HOST_NAME,

      routes,
    },
    /*
     ** Axios module configuration
     ** See https://axios.nuxtjs.org/options
     */
    axios: {},
    /*
     ** Build configuration
     ** See https://nuxtjs.org/api/configuration-build/
     */
    build: {},
  }
}
