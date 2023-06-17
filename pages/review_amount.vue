<template>
  <form action="" class="frm Idi">
    <div class="review-amount">
      <p class="t1">Review Amount</p>
      <p class="t2">Enter your personal details as required below</p>
      <div class="qs">
        <CurrencyConverter
          :disableButton="true"
          :disableHeader="true"
          :noShadow="true"
        />

        <div class="spq">
          <div class="links">
            <button class="a a1" type="button" @click="() => $router.go(-1)">
              Back
            </button>
            <button
              class="a a2"
              type="button"
              @click="handleNextPage"
              v-if="store.exchange.value > 0"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useConversionStore } from "~~/store/conversion";

const router = useRouter();
const store = useConversionStore().$state;

definePageMeta({
  layout: "conversion",
  middleware: ["auth"],
});

const handleNextPage = () => {
  const exchange = store.exchange;
  if (exchange.value > 0) {
    useConversionStore().setTradeProgress("review");
    router.replace("/originating_account");
  }
};

onMounted(() => {
    useConversionStore().setActiveTradeProgress("review");
})
</script>

<style lang="less">
.review-amount {
  max-width: 445px;
  margin: 0 auto;
}
.Aumain .section .cnt .frm .t1 {
  font-family: "Lora", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 150%;
  color: #373d4a;
}
.Aumain .section .cnt .frm .t2 {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #373d4a;
  margin: 10px 0 30px;
}
</style>
