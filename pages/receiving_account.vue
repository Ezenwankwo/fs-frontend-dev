<template>
  <form action="" class="frm Idi">
    <p class="t1">Receiving account</p>
    <p class="t2">How do you intend receiving the payment?</p>

    <div class="qs">
      <!-- FIAT SECTION -->
      <span v-if="isFiat" class="qs fiat_div">
        <span class="spq">
          <span class="sp sp2">
            <label>Bank</label>
            <input
              v-model.trim="bankOrNetwork"
              type="text"
              name="fname"
              id=""
              placeholder="Bank name"
            />
          </span>
        </span>

        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Account number</label>
            <input
              v-model.trim="accountOrAddress"
              type="number"
              name="fname"
              id=""
              placeholder="Account number"
            />
          </span>
        </span>

        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Account holder’s name</label>
            <input
              v-model.trim="holderName"
              type="text"
              name="fname"
              id=""
              placeholder="Maverick Owen"
            />
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
            <input
              v-model.trim="bankOrNetwork"
              type="text"
              name="fname"
              id=""
              placeholder="e.g tron"
            />
          </span>
        </span>

        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Wallet address</label>
            <input
              v-model.trim="accountOrAddress"
              type="text"
              name="fname"
              id=""
              placeholder="Enter address"
            />
          </span>
        </span>

        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Wallet holder’s name</label>
            <input
              v-model.trim="holderName"
              type="text"
              name="fname"
              id=""
              placeholder="Maverick Owen"
            />
          </span>
        </span>
      </span>

      <span class="spq">
        <div class="links">
          <NuxtLink to="/originating_account" class="a a1"> Back </NuxtLink>
          <NuxtLink class="a a2" @click="createAccount">
            Save & Continue
          </NuxtLink>
        </div>
      </span>
    </div>
  </form>
</template>

<script setup>
import { useConversionStore } from "~~/store/conversion";
import { useAuthStore } from "~~/store/auth";
definePageMeta({
  layout: "conversion",
  middleware: ["auth"],
});
const currencyType = ref("fiat");
const bankOrNetwork = ref("");
const holderName = ref("");
const accountOrAddress = ref("");
const changeMethod = (value) => {
  currencyType.value = value;
};

const exchange = useConversionStore().$state.exchange;

const fiat = ["NGN", "USD", "GBP", "EUR", "GHS", "XAF", "XOF"];
const crypto = ["BTC", "ETH", "USDT", "USDC", "MATIC", "XRP", "BUSD"];
const isFiat = computed(() => fiat.includes(exchange.to_currency));
const isCrypto = computed(() => crypto.includes(exchange.to_currency));

const token = useAuthStore().$state.user.access;
const config = useRuntimeConfig();

const originatingAccount = useConversionStore().$state.originatingAccount;
const createAccount = () => {
  const accountRes = useFetch(`${config.public.baseURL}/wallets/accounts/`, {
    method: "post",
    body: {
      account_type:
        currencyType.value.charAt(0).toUpperCase() +
        currencyType.value.slice(1),
      currency: exchange.to_currency,
      holder_name: holderName.value,
      bank_or_network: bankOrNetwork.value,
      number_or_address: accountOrAddress.value,
    },
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = `Bearer ${token}`;
    },
    onResponse({ request, response, options }) {
      if (response.ok) {
        useConversionStore().setReceivingAccount(response._data.data);
      } else {
        useNotification().toast.error(response._data.message);
      }
    },
  });
  const escrowRes = useFetch(
    `${config.public.baseURL}/wallets/transactions/escrow-account/`,
    {
      method: "post",
      body: {
        account_type: originatingAccount.account_type,
        currency: originatingAccount.currency,
        bank_or_network: originatingAccount.bank_or_network,
      },
      onRequest({ request, options }) {
        options.headers = options.headers || {};
        options.headers.authorization = `Bearer ${token}`;
      },
      onResponse({ request, response, options }) {
        console.log(response._data.message);
        if (response.ok) {
          useConversionStore().setEscrowAccount(response._data.data);
          navigateTo("/escrow_account");
        } else {
          // useNotification().toast.error(response._data.message)
          navigateTo("/processing");
        }
      },
    }
  );
};
</script>
