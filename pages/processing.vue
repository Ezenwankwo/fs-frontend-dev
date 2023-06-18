<template>
  <div>
    <NuxtLayout :name="updateLayout">
      <div class="mt-32 text-center">
        <img src="~/assets/load.gif" alt="" class="w-2/5 m-auto" />
        <p v-if="referral === '/receiving_account'" class="mb-6 text-center">
          Please wait while we connect you with <br />
          one of our agents
        </p>
        <p v-else class="mb-6 text-center mx-auto">
          Please wait while we confirm and<br />
          process your payment...
        </p>
        <p v-if="referral === '/buy-details'" class="mb-6 text-center">
          Processing, please wait
        </p>
        <button
          class="my-6 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4"
          @click="checkTransaction"
        >
          Refresh!
        </button>
      </div>
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useConversionStore } from "~~/store/conversion";
const referral = computed(() => useRouter().options.history.state.back);
const updateLayout = computed(() => {
  if (referral.value === "/receiving_account") {
    return "conversion";
  } else if (referral.value === "/buy-details") {
    return "p2p";
  } else {
    return "conversion";
  }
});

definePageMeta({
  layout: false,
  middleware: ["auth"],
});
const moveTo = () => {
  if (referral.value === "/receiving_account") {
    navigateTo("/escrow_account");
  } else if (referral.value === "/buy-details") {
    navigateTo("/seller-processing");
  } else {
    navigateTo("/confirmation");
  }
};

const checkTransaction = async () => {
  const trade = useConversionStore().$state.trade;
  try {
    const response = await $api(`/trades/${trade.public_id}/`);
    const status = response.data.status.toLowerCase();
    if (status == "pending") {
      useNotification().toast.info("We are still processing this trade!");
    } else if (status == "confirmed") {
      moveTo();
    }
  } catch (error) {
    useNotification().toast.error(error.data.message);
  }
};
onMounted(() => {
  useConversionStore().setActiveTradeProgress("completed");
});
</script>
