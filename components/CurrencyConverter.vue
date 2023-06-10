<template>
  <div class="div div2">
    <div class="inp">
      <p class="t1">Currency Converter</p>
      <p class="t2">Check live foreign currency exchange rates</p>
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
          </template>
          <span class="conv" v-else> ... </span>
        </div>
        <NuxtLink to="/review_amount" class="btn">Convert Currency</NuxtLink>
      </form>
    </div>
  </div>
</template>

<script setup>
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

import { useConversionStore } from "~~/store/conversion";

definePageMeta({
  layout: "external",
});

const converterLoading = ref(false);
const fromCurrency = ref("NGN");
const toCurrency = ref("USD");
const amount = ref(1000);
const result = ref(0);
const rate = ref(0);
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
header section .div2 {
  align-items: flex-end;
}

header section .div2 .inp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;
  padding-top: 25px;
  /* gap: 8px; */
  /* height: 100%; */
  background: #ffffff;
  box-shadow: 0px 0px 32px rgba(47, 103, 250, 0.12);
  border-radius: 25px;
  height: fit-content;
  width: 500px;
  z-index: 1;
  /* border: solid blue; */
}

header section .div2 .inp .t1 {
  font-family: "lora", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #373d4a;
  text-align: center;
}

header section .div2 .inp .t2 {
  font-size: 14px;
  color: #7c859d;
  margin-top: 8px;
  text-align: center;
}

header section .div2 .inp form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 40px 0;
  height: 100%;
  /* border: solid; */
}

header section .div2 .inp form .sp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* border: solid; */
}

header section .div2 .inp form .sp .sp1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 46%;
  /* border: solid; */
}

header section .div2 .inp form .sp .sp1 .txt {
  font-weight: 400;
  font-size: 14px;
  color: #373d4a;
  margin-bottom: 10px;
}

header section .div2 .inp form .sp .sp1 .input,
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

header section .div2 .inp form .sp .sp1 .input:focus,
.vs__dropdown-toggle {
  border: 1.5px solid #c5c8cf;
}

header section .div2 .inp form .sp .sp1 .select,
.vs__dropdown-toggle {
  /* border: solid blue ; */
  /* outline: blue !important; */
  background-color: white;
  cursor: pointer;
}

header section .div2 .inp form .icon {
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

header section .div2 .inp form .icon .line {
  width: 80px;
  position: absolute;
  outline: solid 0.1px #dcdee5a2;
  outline-width: 0.01px;
}

header section .div2 .inp form .icon .arrow_img {
  position: relative;
  width: 35px;
  height: 35px;
  padding: 6px;
  border: solid 0.3px #dcdee5;
  border-radius: 100%;
  background-color: white;
}
</style>
