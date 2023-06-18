<template>
  <div>
    <NavBar>
    <div class="flex mt-12">
      <div class="p-12 mx-auto">
        <div class="w-full text-center">
          <img src="~/assets/star.svg" alt="" class="mx-auto" />
          <div class="mb-6">
            <p class="text-[#373D4A] font-bold">Woohoo!</p>
            <p class="text-lg text-[#373D4A]">
              Thank you for choosing FinStack!
            </p>
          </div>
          <div class="mb-6">
            <p class="text-[#373D4A] mb-2">Rate our service</p>
            <div class="rating">
              <input type="radio" name="rating-1" class="mask mask-star" />
              <input
                type="radio"
                name="rating-1"
                class="mask mask-star"
                checked
              />
              <input type="radio" name="rating-1" class="mask mask-star" />
              <input type="radio" name="rating-1" class="mask mask-star" />
              <input type="radio" name="rating-1" class="mask mask-star" />
            </div>
          </div>
          <p class="mb-2">Leave a review on</p>
          <button
            class="btn btn-block normal-case bg-[#2F67FA] mb-4 border border-0 mx-auto"
          >
            facebook
          </button>
          <button
            class="btn btn-block outline outline-[#2F67FA] bg-white text-[#2F67FA] normal-case mb-6 border border-0 mx-auto"
          >
            twitter
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useConversionStore } from "~~/store/conversion";
import { useAuthStore } from "~~/store/auth";
definePageMeta({
  middleware: ["auth"],
});
const token = useAuthStore().$state.user.access;
const config = useRuntimeConfig();
const trade = useConversionStore().$state.trade;
const exchange = useConversionStore().$state.exchange;
const score = ref(2);
const rateTrade = () => {
  const res = useFetch(`${config.public.baseURL}/trades/${trade.public_id}/`, {
    method: "PATCH",
    body: {
      rating: score.value,
    },
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = `Bearer ${token}`;
    },
    onResponse({ request, response, options }) {
      if (response.ok) {
        useConversionStore().setTrade(response._data.data);
        useNotification().toast.success("Thank you for your feedback.");
      } else {
        useNotification().toast.error(response._data.message);
      }
    },
  });
};
</script>
