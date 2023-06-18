<template>
  <div class="qs">
    <!-- FIAT SECTION -->
    <div class="qs fiat_div" v-if="isFiat">
      <div class="spq">
        <div class="sp sp2">
          <label>Bank</label>
          <select
            v-model.trim="bank_or_network"
            required
            name="bank_or_network"
            @change="updateOriginatingAcctount"
            class="select w-full font-medium"
          >
            <option v-for="(bank, index) in banks" :key="index">
              {{ bank }}
            </option>
            <option>Other</option>
          </select>
          <input
            required
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
        </div>
      </div>

      <span class="spq">
        <span class="sp sp2">
          <label htmlFor="fname">Account number</label>
          <input
            required
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
            required
            v-model.trim="holder_name"
            @change="updateOriginatingAcctount"
            type="text"
            name="holder_name"
            id=""
            placeholder="Maverick Owen"
          />
        </span>
      </span>
    </div>

    <!-- CRYPTO SECTION -->
    <span v-else-if="isCrypto" class="qs crypto_div">
      <span class="spq">
        <div class="line"></div>
      </span>
      <span class="spq">
        <span class="sp sp2">
          <label htmlFor="fname">Network</label>
          <input
            required
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
            required
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
            required
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
        <NuxtLink :to="backTo" class="a a1"> Back </NuxtLink>
        <button class="a a2" type="button" @click="handleCreateAccount">
          Save & Continue
        </button>
      </div>
    </span>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useConversionStore } from "~~/store/conversion";
import { useAuthStore } from "~~/store/auth";

const props = defineProps({
  handleCreateAccount: {
    type: Object,
    required: true,
  },
  backTo: {
    type: String,
    required: true,
  },
  storeType: {
    type: String,
    required: true,
  },
});
const store = useConversionStore();
const { originatingAccount, receivingAccount } = storeToRefs(store);

const dataStore =
  props.storeType === "originating" ? originatingAccount : receivingAccount;

const {
  account_type,
  other_bank,
  bank_or_network,
  holder_name,
  number_or_address,
} = dataStore.value;

const changeMethod = (value) => {
  account_type = value;
};
const other = computed(() => dataStore.value.bank_or_network == "Other");
const exchange = useConversionStore().$state.exchange;

const fiat = ["NGN", "USD", "GBP", "EUR", "GHS", "XAF", "XOF"];
const crypto = ["BTC", "ETH", "USDT", "USDC", "MATIC", "XRP", "BUSD"];
const isFiat = computed(() => fiat.includes(exchange.from_currency));
const isCrypto = computed(() => crypto.includes(exchange.from_currency));

const token = useAuthStore().$state.user.access;
const config = useRuntimeConfig();

const banks = ref([]);

const updateOriginatingAcctount = (event) => {
  const data = {
    ...dataStore.value,
    [`${event.target.name}`]: event.target.value,
  };

  props.storeType === "originating"
    ? store.setOriginatingAccount(data)
    : store.setReceivingAccount(data);
};
onMounted(async () => {
  nextTick(()=>{
    useConversionStore().setActiveTradeProgress("bank");
    useFetch(`${config.public.baseURL}/wallets/accounts/banks/`, {
      method: "get",
      onRequest({ request, options }) {
        options.headers = options.headers || {};
        options.headers.authorization = `Bearer ${token}`;
      },
      onResponse({ request, response, options }) {
        banks.value = response._data.data;
      },
    });
  })
});
</script>

<style lang="less" scoped>
.originating {
  max-width: 455px;
  margin: auto;
}
</style>
