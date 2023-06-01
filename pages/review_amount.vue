<template>
    <form action="" class="frm Idi">
        <p class="t1">Review Amount</p>
        <p class="t2">Enter your personal details as required below</p>

        <div class="qs">
            <form action="" class='calculatorform'>
                <div class='spc'>
                    <div class='spc1'>
                        <p class='txt'>I want to convert</p>
                        <input v-model.trim="amount" type="number" class='input' @change="getRate" />
                    </div>
                    <div class='spc1'>
                        <p class='txt'>Currency</p>
                        <select v-model.trim="fromCurrency" class='input select' @change="getRate">
                            <option v-for="item in currencies">{{ item }}</option>
                        </select>

                    </div>
                </div>
                <span class='icon'>
                    <span class='line'></span>
                    <img src='~/assets/two-arrow.png' alt='wae' class='arrow_img' />
                </span>
                <div class='spc'>
                    <div class='spc1'>
                        <p class='txt'>To</p>
                        <input v-model.trim="result" type="number" class='input' />
                    </div>
                    <div class='spc1'>
                        <p class='txt'>Currency</p>
                        <select v-model.trim="toCurrency" class='input select' @change="getRate">
                            <option v-for="item in currencies">{{ item }}</option>
                        </select>
                    </div>
                </div>
                <p class='conv'>1 {{ toCurrency }} = {{ rate }} {{ fromCurrency }}</p>
            </form>

            <div class="spq">
                <div class="links">
                    <NuxtLink to="/" class="a a1">Back</NuxtLink>
                    <NuxtLink to="originating_account" class="a a2">Proceed</NuxtLink>
                </div>
            </div>


        </div>

    </form>
</template>

<script setup>
import { useConversionStore } from '~~/store/conversion';
definePageMeta({
    layout: "conversion",
    middleware: ['auth',],
});

const exchange = useConversionStore().$state.exchange
const fromCurrency = ref(exchange.from_currency)
const toCurrency = ref(exchange.to_currency)
const amount = ref(exchange.amount)
const result = ref(exchange.value)
const rate = ref(exchange.rate)

const config = useRuntimeConfig()
const currencies = ref([])
const currenciesRes = await useFetch(
    `${config.public.baseURL}/trades/currencies/`,
    {
        'method': 'get',
        onResponse({ request, response, options }) {
            currencies.value = response._data.data
        }
    }
)

const getRate = () => {
    const res = useFetch(
        `${config.public.baseURL}/trades/converter/`,
        {
            'method': 'post',
            'body': {
                "from_currency": fromCurrency.value,
                "to_currency": toCurrency.value,
                "amount": amount.value,
            },
            onRequestError({ request, options, error }) {
            // console.log('request error')
            },
            onResponse({ request, response, options }) {
                const data = response._data.data
                data.amount = amount.value
                useConversionStore().setExchange(data),
                    result.value = useConversionStore().$state.exchange.value
                    rate.value = useConversionStore().$state.exchange.rate
            },
            onResponseError({ request, response, options }) {
                useNotification().toast.error(response._data.message)
            }
        }
    )
}
</script>