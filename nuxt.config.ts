import tailwindcss from '@tailwindcss/vite'

const SITE_URL = 'https://arthmelikyan.github.io'

export default defineNuxtConfig({
  compatibilityDate: '2025-01-01',
  future: { compatibilityVersion: 4 },

  modules: [
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    'nuxt-gtag',
  ],

  gtag: {
    id: 'G-1ZKP93WMWD',
    initCommands: [['config', 'G-1ZKP93WMWD']],
  },

  fonts: {
    families: [
      {
        name: 'Inter',
        provider: 'google',
        weights: [400, 600, 700],
        styles: ['normal'],
        display: 'swap',
        subsets: ['latin'],
        preload: false,
      },
    ],
    defaults: {
      preload: false,
      fallbacks: {
        'sans-serif': ['system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
    },
  },

  ssr: true,
  devtools: { enabled: true },

  css: ['~/assets/css/main.css'],

  vite: {
    plugins: [tailwindcss()],
  },

  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/png', href: '/img/favicon.png' }],
      meta: [{ name: 'theme-color', content: '#0a0e1a' }],
      script: [
        {
          innerHTML:
            "try{if(localStorage.getItem('color-mode')==='light')document.documentElement.classList.add('light')}catch(_){}",
          tagPosition: 'head',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },

  site: {
    url: SITE_URL,
    name: 'Arthur Melikyan',
    description:
      'Senior PHP/Laravel fullstack developer — portfolio, experience and CV of Arthur Melikyan.',
    defaultLocale: 'en',
  },

  sitemap: {
    autoLastmod: true,
    xsl: false,
  },

  robots: {
    blockNonSeoBots: true,
  },

  image: {
    format: ['avif', 'webp', 'jpg'],
    quality: 80,
    densities: [1, 2],
    screens: {
      xs: 360,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      xxl: 1536,
    },
  },

  nitro: {
    prerender: {
      crawlLinks: true,
      routes: ['/', '/cv', '/cv-print', '/sitemap.xml', '/robots.txt'],
      ignore: ['/routes'],
    },
  },

  experimental: {
    payloadExtraction: true,
    viewTransition: true,
  },

  features: {
    inlineStyles: true,
  },

  routeRules: {
    '/': { prerender: true },
    '/cv': { prerender: true },
    '/cv-print': { prerender: true },
    '/routes/**': { prerender: false },
  },

  typescript: {
    strict: true,
    typeCheck: false,
  },
})
