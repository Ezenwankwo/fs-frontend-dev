<template>
    <form action="" class="frm Idi">
        <div class="qs qs2">
            <span class="spq spq2">
                <span class="sp sp2 sp3">
                    <p class="top">Kindly make your transfer into the account below</p>
                </span>
            </span>

            <span class="spq">
                <span class="sp sp2">
                    <div class="details">
                        <div class="det">
                            <p class="tx tx1">Account Number</p>
                            <span class="spt">

                                <p class="tx tx2">{{ escrow.number_or_address }} </p>
                                <Icon name="material-symbols:file-copy-outline" />
                            </span>
                        </div>
                        <div class="det">
                            <p class="tx tx1">Account Name</p>
                            <span class="spt">

                                <p class="tx tx2">{{ escrow.holder_name }} </p>
                            </span>
                        </div>
                        <div class="det">
                            <p class="tx tx1">Bank</p>
                            <span class="spt">

                                <p class="tx tx2">{{ escrow.bank_or_network }} </p>
                            </span>
                        </div>
                        <div class="det">
                            <p class="tx tx1">Expected payment</p>
                            <span class="spt">

                                <p class="tx tx2">{{ payment.from_currency }} {{ payment.amount }} </p>
                            </span>
                        </div>
                    </div>
                </span>
            </span>

            <span class="spq">
                <div class="links">
                    <NuxtLink to="/processing" class="a a2 text-center">
                        I have transferred<b class="mx-2">{{ payment.from_currency }} {{ payment.amount }}</b>to the account above!
                    </NuxtLink>
                </div>
            </span>
            <span class="spq">
                <p class="pr">
                    Having issues? <a class="a">Try another account</a>
                </p>
            </span>
        </div>
    </form>
</template>

<script setup>
import { useConversionStore } from '~~/store/conversion';
import { useAuthStore } from '~~/store/auth';
definePageMeta({
    layout: "conversion",
    middleware: ['auth',],
});

const referral = computed(() => useRouter().options.history.state.back)

const escrow = computed(() => {
    if (referral.value === '/receiving_account') {
        return useConversionStore().$state.escrowAccount
    } else {
        return {
            "number_or_address": useRoute().query.account,
            "holder_name": useRoute().query.name,
            "bank_or_network": useRoute().query.bank,
        }
    }
})

const payment = useConversionStore().$state.exchange
const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()

const originatingAccount = useConversionStore().$state.originatingAccount
// const escrow = ref(useConversionStore().$state.escrowAccount)
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
            "escrow_account": escrow.public_id,
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