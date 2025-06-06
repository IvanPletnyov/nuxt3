// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  vite: {
    server: {
      allowedHosts: ['dev.nuxt3.com']
    }
  }
})
