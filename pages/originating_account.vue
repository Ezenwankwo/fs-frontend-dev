<template>
    <form action="" class="frm Idi">
        <p class="t1">Originating account</p>
        <p class="t2">How do you intend making the payment?</p>

        <div class="qs">
            <!-- FIAT SECTION -->
            <span class="qs fiat_div">

                <span class="spq">
                    <span class="sp sp2">
                        <label>Bank</label>
                        <select v-model.trim="bankOrNetwork" class="select w-full max-w-xs font-medium" style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;" >
                            <option v-for="bank in banks">{{ bank }}</option>
                            <option>Other</option>
                        </select>
                        <input v-model.trim="otherBank" v-show="other" type="text" name="fname" id="" placeholder="Bank name" />
                        <span v-show="other" class="text-xs ml-4 p-0 text-[#2F67FA]">This will take longer to process</span>
                    </span>
                </span>

                <span class="spq">
                    <span class="sp sp2">
                        <label htmlFor="fname">Account number</label>
                        <input v-model.trim="accountOrAddress" type="number" name="fname" id="" placeholder="Account number" />
                    </span>
                </span>

                <span class="spq">
                    <span class="sp sp2">
                        <label htmlFor="fname">Account holder’s name</label>
                        <input v-model.trim="holderName" type="text" name="fname" id="" placeholder="Maverick Owen" />
                    </span>
                </span>



            </span>

            <!-- CRYPTO SECTION -->
            <span v-if="isCrypto" class="qs crypto_div">
                <span class="spq">
                    <div class="line"></div>
                </span>
                <span class="spq">
                    <span class="sp sp2">
                        <label htmlFor="fname">Network</label>
                        <input v-model.trim="bankOrNetwork" type="text" name="fname" id="" placeholder="e.g tron" />
                    </span>
                </span>

                <span class="spq">
                    <span class="sp sp2">
                        <label htmlFor="fname">Wallet address</label>
                        <input v-model.trim="accountOrAddress" type="text" name="fname" id="" placeholder="Enter address" />
                    </span>
                </span>

                <span class="spq">
                    <span class="sp sp2">
                        <label htmlFor="fname">Wallet holder’s name</label>
                        <input v-model.trim="holderName" type="text" name="fname" id="" placeholder="Maverick Owen" />
                    </span>
                </span>

            </span>

            <span class="spq">
                <div class="links">
                    <NuxtLink to="/review_amount" class="a a1">
                        Back
                    </NuxtLink>
                    <NuxtLink class="a a2" @click="createAccount">
                        Save & Continue
                    </NuxtLink>
                </div>
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
const currencyType = ref('fiat')
const bankOrNetwork = ref('')
const holderName = ref('')
const accountOrAddress = ref('')
const changeMethod = (value) => {
  currencyType.value = value
}
const other = computed(() => bankOrNetwork.value == 'Other')
const exchange = useConversionStore().$state.exchange

const fiat = ["NGN", "USD", "GBP", "EUR", "GHS", "XAF", "XOF"]
const crypto = ["BTC", "ETH", "USDT", "USDC", "MATIC", "XRP", "BUSD"]
const isFiat = computed(() => fiat.includes(exchange.from_currency))
const isCrypto = computed(() => crypto.includes(exchange.from_currency))

const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()

const banks = ref([])
const banksRes = await useFetch(
    `${config.public.baseURL}/wallets/accounts/banks/`,
    {
        'method': 'get',
        onRequest({ request, options }) {
            options.headers = options.headers || {}
            options.headers.authorization = `Bearer ${token}`
        },
        onResponse({ request, response, options }) {
            banks.value = response._data.data
        }
    }
)
const otherBank = ref('')
const bank = computed(() => {
    if (bankOrNetwork.value == "Other") {
        return otherBank.value
    } else {
        return bankOrNetwork
    }
})
const createAccount = () => {
    const res = useFetch(
        `${config.public.baseURL}/wallets/accounts/`,
        {
            'method': 'post',
            'body': {
                "account_type": currencyType.value.charAt(0).toUpperCase() + currencyType.value.slice(1),
                "currency": exchange.from_currency,
                "holder_name": holderName.value,
                "bank_or_network": bank.value,
                "number_or_address": accountOrAddress.value
            },
            onRequest({ request, options }) {
                options.headers = options.headers || {}
                options.headers.authorization = `Bearer ${token}`
            },
            onResponse({ request, response, options }) {
                if (response.ok) {
                    useConversionStore().setOriginatingAccount(response._data.data)
                    navigateTo('/receiving_account')
                } else {
                    useNotification().toast.error(response._data.message)
                }
            }
        }
    )
}
</script>