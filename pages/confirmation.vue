<template>
  <div>
    <div class="flex confirmation">
      <div class="w-7/10 py-12 mx-auto confirmation-box">
        <div class="w-full text-center">
          <img src="~/assets/success.svg" alt="" class="mx-auto" />
          <!-- <nuxt-img src="/nuxt.png" /> -->
          <div class="mb-[32px]">
            <p class="text-[#373D4A] font-bold">
              You’ve been credited {{ exchange.to_currency }}
              {{ exchange.value }}
            </p>
            <p class="text-lg text-[#373D4A] mt-[8px]">
              Please confirm the credit transaction
            </p>
          </div>
          <button
            class="btn block text-white rounded-full normal-case bg-[#2F67FA] mb-6 border border-0 mx-auto"
            @click="updateTradeStatus"
          >
            Yes, I have received {{ exchange.to_currency }} {{ exchange.value }}
          </button>
          <p class="mb-2 text-[#373D4A] font-semibold">
            Didn’t get the credit?
          </p>
          <a
            href="mailto:finstackhq@gmail.com"
            class="text-[#2F67FA] font-semibold"
            >Reach out to our customer support</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConversionStore } from "~~/store/conversion";
import { useAuthStore } from "~~/store/auth";
definePageMeta({
  layout: "conversion",
  middleware: ["auth"],
});

const token = useAuthStore().$state.user.access;
const config = useRuntimeConfig();
const trade = useConversionStore().$state.trade;
const exchange = useConversionStore().$state.exchange;
const escrow = useConversionStore().$state.escrowAccount;
const updateTradeStatus = () => {
  const res = useFetch(`${config.public.baseURL}/trades/${trade.public_id}/`, {
    method: "PATCH",
    body: {
      status: "Completed",
      escrow_account: escrow.public_id,
    },
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = `Bearer ${token}`;
    },
    onResponse({ request, response, options }) {
      if (response.ok) {
        useConversionStore().setTrade(response._data.data);
        useConversionStore().setEscrowAccount({});
        useConversionStore().setOriginatingAccount({});
        useConversionStore().setReceivingAccount({});
        navigateTo("/rating");
      } else {
        useNotification().toast.error(response._data.message);
      }
    },
  });
};
</script>

<style lang="less" scoped>
.confirmation {
  @media screen and (max-width: 600px) {
    button {
      font-size: 12px;
    }
  }
}
</style>
