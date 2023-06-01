<template>
    <div>
        <NuxtLayout :name="updateLayout">
            <div class="mt-32">
               <img src="~/assets/load.gif" alt="" class="w-2/5 m-auto">
                <p v-if="referral === '/receiving_account'" class="mb-6 text-center" @click="moveTo">Please wait while we connect you with <br> one of our agents</p>
                <p v-else class="mb-6 text-center mx-auto" @click="moveTo">Please wait while we confirm and<br> process your payment...</p>
                <p v-if="referral === '/buy-details'" class="mb-6 text-center" @click="moveTo">Processing, please wait</p>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
import { useConversionStore } from '~~/store/conversion';
import { useAuthStore } from '~~/store/auth';
const referral = computed(() => useRouter().options.history.state.back)
const updateLayout = computed(() => {
    if (referral.value === '/receiving_account') {
        return 'conversion'
    } else if (referral.value === '/buy-details') {
        return 'p2p'
    } else {
        return 'conversion'
    }
})

definePageMeta({
    layout: false,
    middleware: ['auth',],
});
const moveTo = () => {
    if (referral.value === '/receiving_account') {
        navigateTo('/escrow_account')
    } else if (referral.value === '/buy-details') {
        navigateTo('/seller-processing')
    } else {
        navigateTo('/confirmation')
    }
}

const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()

const originatingAccount = useConversionStore().$state.originatingAccount
const receivingAccount = useConversionStore().$state.receivingAccount
const exchange = useConversionStore().$state.exchange

const tradeRes = await useFetch(
    `${config.public.baseURL}/trades/`,
    {
        'method': 'post',
        'body': {
            "seller": "finstack",
            "buyer_payment_account": originatingAccount.public_id,
            "buyer_receive_account": receivingAccount.public_id,
            "object_public_id": exchange.public_id,
            "price": exchange.rate,
            "buy_currency": exchange.from_currency,
            "amount": exchange.amount
        },
        onRequest({ request, options }) {
            options.headers = options.headers || {}
            options.headers.authorization = `Bearer ${token}`
        },
        onResponse({ request, response, options }) {
            if (response.ok) {
                useConversionStore().setTrade(response._data.data)
            } else {
                useNotification().toast.error(response._data.message)
            }
        }
    }
)
</script>