// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: [
        '~/assets/css/conversion.css',
        '~/assets/css/p2pindex.css',
        '~/assets/css/dynamictable.css',
        '~/assets/css/dynamichistory.css',
        '~/assets/css/wallethistory.css',
        '~/assets/css/sellerdetails.css',
        '~/assets/css/other.css',
        '~/assets/css/authcontent.css',
        '~/assets/css/wallet.css',
        '~/assets/css/sellerprofile.css',
        '~/assets/css/nameprofile.css',
        '~/assets/css/dynamichistorycard.css',
        '~/assets/css/currencybrkcard.css',
        '~/assets/css/p2pauth.css',
        '~/assets/css/advertiserstable.css',
        '~/assets/css/blogs.css',
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
           baseURL: 'https://finstack-production.herokuapp.com' //'http://localhost:8000' //'https://finstack.herokuapp.com'
        }
    },
})
