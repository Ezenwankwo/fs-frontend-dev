// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        'nuxt-icon',
        '@nuxtjs/google-fonts',
        ['@pinia/nuxt',
            {
                autoImports: ['defineStore', 'acceptHMRUpdate'],
            },
        ],
    ],
    googleFonts: {
        families: {
            Lora: true,
            'Open+Sans': true,
        }
    },
    runtimeConfig: {
        public: {
           baseURL: 'http://localhost:8000'
        }
    },
    // build : {
    //     transpile: ['vue-toastification']
    // },
})
