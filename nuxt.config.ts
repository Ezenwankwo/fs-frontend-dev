// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/conversion.css',
        '~/assets/css/home.css',
    ],      
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/google-fonts',
        ['@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
        '@pinia-plugin-persistedstate/nuxt',
    ],
    googleFonts: {
        families: {
            Lora: true,
            'Open+Sans': true,
        }
    },
    runtimeConfig: {
        public: {
           baseURL: 'http://localhost:8000' //'https://finstack.herokuapp.com'
        }
    },
})
