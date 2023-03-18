// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/google-fonts"],
  googleFonts: {
    families: {
      Lexend: [300,400, 600],
      Inter: [300, 400, 600, 700],
    },
  },
});
