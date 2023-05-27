<template>
    <div>
        <div class="flex">
            <div class="w-7/10 p-12 mx-auto">
                <div class="w-full text-center">
                    <img src="~/assets/success.svg" alt="" class="mx-auto" />
                    <!-- <nuxt-img src="/nuxt.png" /> -->
                    <div class="mb-6">
                        <p class="text-[#373D4A] font-bold">You’ve been credited {{ exchange.to_currency }} {{ exchange.value }}</p>
                        <p class="text-lg text-[#373D4A]">Please confirm the credit transaction</p>
                    </div>
                    <button class="btn block rounded-full normal-case bg-[#2F67FA] mb-6 border border-0 mx-auto" @click="updateTradeStatus">Yes, I have
                        received {{ exchange.to_currency }} {{ exchange.value }}</button>
                    <p class="mb-2">Didn’t get the credit?</p>
                    <p class="text-[#2F67FA]">Reach out to our customer support</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useConversionStore } from '~~/store/conversion';
import { useAuthStore } from '~~/store/auth';
definePageMeta({
    layout: "conversion",
});

const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()
const trade = useConversionStore().$state.trade
const exchange = useConversionStore().$state.exchange
const escrow = useConversionStore().$state.escrowAccount
const updateTradeStatus = () => {
    const res = useFetch(
        `${config.public.baseURL}/trades/${trade.public_id}/`,
        {
            'method': 'PATCH',
            'body': {
                "status": "Completed",
                "escrow_account": escrow.public_id
            },
            onRequest({ request, options }) {
                options.headers = options.headers || {}
                options.headers.authorization = `Bearer ${token}`
            },
            onResponse({ request, response, options }) {
                if (response.ok) {
                    useConversionStore().setTrade(response._data.data)
                    useConversionStore().setEscrowAccount({})
                    useConversionStore().setOriginatingAccount({})
                    useConversionStore().setReceivingAccount({})
                    navigateTo('/rating')
                } else {
                    useNotification().toast.error(response._data.message)
                }
            }
        }
    )
}
</script>