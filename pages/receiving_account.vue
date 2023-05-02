<template>
    <form action="" class="frm Idi">
        <p class="t1">Receiving account</p>
        <p class="t2">How do you intend receiving the payment?</p>

        <div class="qs">
            <span class="spq">
                <span class="sp sp2">
                    <label>Currency type</label>
                    <span class="els">
                        <span class="el">
                            <input v-model="currencyType" type="radio" value="fiat" @change="changeMethod('fiat')" />
                            <label>Fiat</label>
                        </span>
                        <span class="el">
                            <input v-model="currencyType" type="radio" value="crypto" @change="changeMethod('crypto')" />
                            <label>Crypto</label>
                        </span>
                    </span>
                </span>
            </span>
            <!-- FIAT SECTION -->
            <span v-if="isFiat" class="qs fiat_div">

                <span class="spq">
                    <div class="line"></div>
                </span>

                <span class="spq">
                    <span class="sp sp2">
                        <label>Bank</label>
                        <input v-model.trim="bankOrNetwork" type="text" name="fname" id="" placeholder="Bank name" />
                    </span>
                </span>

                <span class="spq">
                    <span class="sp sp2">
                        <label htmlFor="fname">Account number</label>
                        <input v-model.trim="accountOrAddress" type="text" name="fname" id="" placeholder="Account number" />
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
                    <NuxtLink to="/review_amount" Class="a a1">
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
});
const currencyType = ref('fiat')
const bankOrNetwork = ref('')
const holderName = ref('')
const accountOrAddress = ref('')
const changeMethod = (value) => {
  currencyType.value = value
}
const isFiat = computed(() => currencyType.value === 'fiat')
const isCrypto = computed(() => currencyType.value === 'crypto')

const exchange = useConversionStore().$state.exchange
const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()

const createAccount = () => {
    const res = useFetch(
        `${config.public.baseURL}/wallets/accounts/`,
        {
            'method': 'post',
            'body': {
                "account_type": currencyType.value.charAt(0).toUpperCase() + currencyType.value.slice(1),
                "currency": exchange.to_currency,
                "holder_name": holderName.value,
                "bank_or_network": bankOrNetwork.value,
                "number_or_address": accountOrAddress.value
            },
            onRequest({ request, options }) {
                options.headers = options.headers || {}
                options.headers.authorization = `Bearer ${token}`
            },
            onResponse({ request, response, options }) {
                if (response.ok) {
                    navigateTo('/processing')
                } else {
                    useNotification().toast.error(response._data.message)
                }
            }
        }
    )
}
</script>