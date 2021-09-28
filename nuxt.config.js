export default {
  ssr: false,
  target: 'static',
  head: {
    title: 'matheussturiao',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/css/font-awesome/css/all.min.css',
    '@/assets/css/bootstrap-icons/bootstrap-icons.css',
    '@/assets/css/bootstrap.min.css',
    '@/assets/css/aos.css',
    '@/assets/css/main.css'
  ],
  plugins: [
    '@/plugins/aos.js'
  ],
  components: true,
  buildModules: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
  ],
  axios: {},
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  build: {
  }
}
