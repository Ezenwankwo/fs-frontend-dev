<template>
  <div
    class="div div2"
    v-bind:class="{
      'w-full': disableHeader,
    }"
  >
    <div
      class="inp"
      v-bind:class="{
        'no-shadow': noShadow,
      }"
    >
      <template v-if="!disableHeader">
        <p class="t1">Currency Converter</p>
        <p class="t2">Check live foreign currency exchange rates</p>
      </template>
      <form action="" class="calculatorform">
        <div class="sp">
          <div class="sp1">
            <p class="txt">I want to convert</p>
            <input
              v-model.trim="amount"
              type="number"
              placeholder="1,000"
              class="input bg-white"
              @keyup="caluculateRate"
              @blur="getRate"
            />
          </div>
          <div class="sp1">
            <p class="txt">Currency</p>
            <vSelect
              v-model.trim="fromCurrency"
              :options="currencies"
              label="currency"
              @close="getRate"
              :loading="converterLoading"
            >
              <template #selected-option="item">
                <div style="display: flex; align-items: center">
                  <img
                    :src="currencyImages[item.currency]"
                    v-if="item.currency in currencyImages"
                  />
                  {{ item.currency }}
                </div>
              </template>
            </vSelect>
          </div>
        </div>
        <span class="icon" @click="toggleConverter">
          <span class="line"></span>
          <img src="~/assets/two-arrow.png" alt="wae" class="arrow_img" />
        </span>
        <div class="sp">
          <span class="sp1">
            <p class="txt">To</p>
            <input
              v-model.trim="result"
              type="number"
              disabled
              class="input bg-white"
            />
          </span>
          <span class="sp1">
            <p class="txt">Currency</p>
            <vSelect
              v-model.trim="toCurrency"
              :options="currencies"
              label="currency"
              @close="getRate"
              :loading="converterLoading"
            >
              <template #selected-option="item">
                <div style="display: flex; align-items: center">
                  <img
                    :src="currencyImages[item.currency]"
                    v-if="item.currency in currencyImages"
                  />
                  {{ item.currency }}
                </div>
              </template>
            </vSelect>
          </span>
        </div>
        <div class="flex gap-x-1">
          <template v-if="!converterLoading">
            <span class="conv">
              1 {{ toCurrency }} = {{ rate }} {{ fromCurrency }}
            </span>
            <span class="conv" v-if="reverseRate">
              1 {{ fromCurrency }} = {{ reverseRate }} {{ toCurrency }}
            </span>
          </template>
          <span class="conv" v-else> ... </span>
        </div>
        <NuxtLink to="/review_amount" class="btn" v-if="!disableButton"
          >Convert Currency</NuxtLink
        >
      </form>
    </div>
  </div>
</template>

<script setup>
import vSelect from "vue-select";

import { useConversionStore } from "~~/store/conversion";

definePageMeta({
  layout: "external",
});

const props = defineProps({
  disableButton: {
    type: Boolean,
    required: false,
  },
  disableHeader: {
    type: Boolean,
    required: false,
  },
  noShadow: {
    type: Boolean,
    required: false,
  },
});

const converterLoading = ref(false);
const fromCurrency = ref("NGN");
const toCurrency = ref("USD");
const amount = ref(1000);
const result = ref(0);
const rate = ref(0);
const reverseRate = ref(0);
const config = useRuntimeConfig();
const currencies = ref([]);

const currencyImages = {
  NGN: "/_nuxt/assets/nigeria.png",
  USD: "/_nuxt/assets/country_img5.svg",
  GBP: "",
  EUR: "/_nuxt/assets/country_img3.svg",
  GHS: "",
  XAF: "",
  XOF: "",
  BTC: "",
  ETH: "/_nuxt/assets/country_img4.svg",
  USDT: "/_nuxt/assets/country_img5.svg",
  USDC: "",
  MATIC: "",
  XRP: "",
  BUSD: "",
};

onMounted(() => {
  nextTick(async () => {
    const store = useConversionStore().$state;

    fromCurrency.value = store.exchange.from_currency
      ? store.exchange.from_currency
      : fromCurrency.value;
    toCurrency.value = store.exchange.from_currency
      ? store.exchange.to_currency
      : toCurrency.value;
    amount.value = store.exchange.from_currency
      ? store.exchange.amount
      : amount.value;

    useFetch(`${config.public.baseURL}/trades/converter/`, {
      method: "post",
      body: {
        from_currency: fromCurrency.value,
        to_currency: toCurrency.value,
        amount: amount.value,
      },
      onResponse({ request, response, options }) {
        const data = response._data.data;
        data.amount = amount.value;
        useConversionStore().setExchange(data);
        result.value = useConversionStore().$state.exchange.value;
        rate.value = useConversionStore().$state.exchange.rate;
        reverseRate.value = useConversionStore().$state.exchange.reverse_rate;
      },
    });
    useFetch(`${config.public.baseURL}/trades/currencies/`, {
      method: "get",
      onResponse({ request, response, options }) {
        currencies.value = response._data.data;
      },
    });
  });
});
const getRate = () => {
  converterLoading.value = true;
  const res = useFetch(`${config.public.baseURL}/trades/converter/`, {
    method: "post",
    body: {
      from_currency: fromCurrency.value,
      to_currency: toCurrency.value,
      amount: amount.value,
    },
    onRequestError({ request, options, error }) {
      converterLoading.value = false;
      useNotification().toast.error("An error occurred, please try again.");
    },
    onResponse({ request, response, options }) {
      const data = response._data.data;
      data.amount = amount.value;
      useConversionStore().setExchange(data),
        (result.value = useConversionStore().$state.exchange.value);
      rate.value = useConversionStore().$state.exchange.rate;
      reverseRate.value = useConversionStore().$state.exchange.reverse_rate;
      converterLoading.value = false;
    },
    onResponseError({ request, response, options }) {
      converterLoading.value = false;
      useNotification().toast.error(response._data.message);
    },
  });
};

const caluculateRate = () => {
  result.value = (amount.value / rate.value).toFixed(2);
};

const toggleConverter = () => {
  const initialCurrencyFrom = fromCurrency.value;
  fromCurrency.value = toCurrency.value;
  toCurrency.value = initialCurrencyFrom;
  getRate();
};
</script>

<style lang="less" scoped>
.div2 {
  align-items: flex-end;
}

.div2 .inp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px;
  /* gap: 8px; */
  /* height: 100%; */
  background: #ffffff;
  box-shadow: 0px 0px 32px rgba(47, 103, 250, 0.12);
  border-radius: 25px;
  height: fit-content;
  max-width: 500px;
  z-index: 1;
  @media (max-width: 1150px) {
    margin: auto;
  }
  @media screen and (max-width: 600px) {
    padding: 15px;
  }
}

.div2 .inp .t1 {
  font-family: "lora", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #373d4a;
  text-align: center;
}

.div2 .inp .t2 {
  font-size: 14px;
  color: #7c859d;
  margin-top: 8px;
  margin-bottom: 30px;
  text-align: center;
}

.div2 .inp form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  // margin: 40px 0;
  height: 100%;
  /* border: solid; */
}
.div2 .inp form .sp .sp1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 46%;
  /* border: solid; */
}
.div2 .inp form .sp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 500px) {
    flex-direction: column;
    .sp1 {
      width: 100%;
      margin-bottom: 10px;
    }
  }
}

.div2 .inp form .sp .sp1 .txt {
  font-weight: 400;
  font-size: 14px;
  color: #373d4a;
  margin-bottom: 10px;
}

.div2 .inp form .sp .sp1 .input,
.vs__dropdown-toggle {
  width: 100%;
  border-radius: 48px;
  height: 50px;
  border: none;
  border: 1px solid #dcdee5;
  transition: 100ms;
  outline: none;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 400;
  color: #373d4a;
  background: #fff;
}

.div2 .inp form .sp .sp1 .input:focus,
.vs__dropdown-toggle {
  border: 1.5px solid #c5c8cf;
}

.div2 .inp form .sp .sp1 .select,
.vs__dropdown-toggle {
  /* border: solid blue ; */
  /* outline: blue !important; */
  background-color: white;
  cursor: pointer;
}

.div2 .inp form .icon {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* outline: solid 0.1px #7C859D; */
  /* border: solid; */
  transform: rotate(90deg);
  margin: 20px 0;
  cursor: pointer;
}

.div2 .inp form .icon .line {
  width: 80px;
  position: absolute;
  outline: solid 0.1px #dcdee5a2;
  outline-width: 0.01px;
}

.div2 .inp form .icon .arrow_img {
  position: relative;
  width: 35px;
  height: 35px;
  padding: 6px;
  border: solid 0.3px #dcdee5;
  border-radius: 100%;
  background-color: white;
}
.div2 .no-shadow {
  &.inp {
    box-shadow: none;
    border: 1px solid #dcdee5;
    border-radius: 16px;
  }
}
.calculatorform .btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  background-color: #2f67fa;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
  margin-top: 30px;
}
.calculatorform .conv {
  padding: 10px 15px;
  background-color: #ebf0ff;
  border-radius: 30px;
  margin: 30px 0 0;
  color: #2f67fa;
}
</style>
