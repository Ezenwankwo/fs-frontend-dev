<template>
  <form action="" class="frm Idi originating">
    <p class="t1">Originating account</p>
    <p class="t2">How do you intend making the payment?</p>

    <div class="qs">
      <!-- FIAT SECTION -->
      <span class="qs fiat_div" v-if="isFiat">
        <span class="spq">
          <span class="sp sp2">
            <label>Bank</label>
            <select
              v-model.trim="bank_or_network"
              name="bank_or_network"
              @change="updateOriginatingAcctount"
              class="select w-full font-medium"
              style="
                border-radius: 30px;
                border: solid 1px #dcdee5;
                padding: 0 25px;
                height: 55px;
                outline: none;
              "
            >
              <option v-for="(bank, index) in banks" :key="index">
                {{ bank }}
              </option>
              <option>Other</option>
            </select>
            <input
              v-model.trim="other_bank"
              @change="updateOriginatingAcctount"
              v-show="other"
              type="text"
              name="other_bank"
              id=""
              placeholder="Bank name"
            />
            <span v-show="other" class="text-xs ml-4 p-0 text-[#2F67FA]"
              >This will take longer to process</span
            >
          </span>
        </span>

        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Account number</label>
            <input
              v-model.trim="number_or_address"
              @change="updateOriginatingAcctount"
              name="number_or_address"
              type="number"
              id=""
              placeholder="Account number"
            />
          </span>
        </span>

        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Account holder’s name</label>
            <input
              v-model.trim="holder_name"
              @change="updateOriginatingAcctount"
              type="text"
              name="holder_name"
              id=""
              placeholder="Maverick Owen"
            />
          </span>
        </span>
      </span>

      <!-- CRYPTO SECTION -->
      <span v-else-if="isCrypto" class="qs crypto_div">
        <span class="spq">
          <div class="line"></div>
        </span>
        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Network</label>
            <input
              @change="updateOriginatingAcctount"
              v-model.trim="bank_or_network"
              type="text"
              name="bank_or_network"
              id=""
              placeholder="e.g tron"
            />
          </span>
        </span>

        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Wallet address</label>
            <input
              v-model.trim="number_or_address"
              @change="updateOriginatingAcctount"
              type="text"
              name="number_or_address"
              id=""
              placeholder="Enter address"
            />
          </span>
        </span>

        <span class="spq">
          <span class="sp sp2">
            <label htmlFor="fname">Wallet holder’s name</label>
            <input
              v-model.trim="holder_name"
              type="text"
              name="holder_name"
              @change="updateOriginatingAcctount"
              id=""
              placeholder="Maverick Owen"
            />
          </span>
        </span>
      </span>

      <span class="spq">
        <div class="links">
          <NuxtLink to="/review_amount" class="a a1"> Back </NuxtLink>
          <button class="a a2" type="button" @click="createAccount">
            Save & Continue
          </button>
        </div>
      </span>
    </div>
  </form>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useConversionStore } from "~~/store/conversion";
import { useAuthStore } from "~~/store/auth";
definePageMeta({
  layout: "conversion",
  middleware: ["auth"],
});
const store = useConversionStore();
const { originatingAccount } = storeToRefs(store);
const { account_type, other_bank, bank_or_network, holder_name, number_or_address } =
  originatingAccount.value;

  const changeMethod = (value) => {
  account_type = value;
};
const other = computed(
  () => originatingAccount.value.bank_or_network == "Other"
);
const exchange = useConversionStore().$state.exchange;

const fiat = ["NGN", "USD", "GBP", "EUR", "GHS", "XAF", "XOF"];
const crypto = ["BTC", "ETH", "USDT", "USDC", "MATIC", "XRP", "BUSD"];
const isFiat = computed(() => fiat.includes(exchange.from_currency));
const isCrypto = computed(() => crypto.includes(exchange.from_currency));

const token = useAuthStore().$state.user.access;
const config = useRuntimeConfig();

const banks = ref([]);

const bank = computed(() => {
  if (bank_or_network == "Other") {
    return other_bank;
  } else {
    return bank_or_network;
  }
});
const updateOriginatingAcctount = (event) => {
  const data = {
    ...originatingAccount.value,
    [`${event.target.name}`]: event.target.value,
  };
  store.setOriginatingAccount(data);
};
const createAccount = async () => {
  await useFetch(`${config.public.baseURL}/wallets/accounts/`, {
    method: "post",
    body: {
      account_type:
        account_type.charAt(0).toUpperCase() + account_type.slice(1),
      currency: exchange.from_currency,
      holder_name: holder_name,
      bank_or_network: bank,
      number_or_address: number_or_address,
    },
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = `Bearer ${token}`;
    },
    onResponse({ request, response, options }) {
      if (response.ok) {
        navigateTo("/receiving_account");
      } else {
        useNotification().toast.error(response._data.message);
      }
    },
  });
};
onMounted(async () => {
  useConversionStore().setActiveTradeProgress("bank");
  await useFetch(`${config.public.baseURL}/wallets/accounts/banks/`, {
    method: "get",
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = `Bearer ${token}`;
    },
    onResponse({ request, response, options }) {
      banks.value = response._data.data;
    },
  });
});
</script>

<style lang="less" scoped>
.originating {
  max-width: 455px;
  margin: auto;
}
</style>
