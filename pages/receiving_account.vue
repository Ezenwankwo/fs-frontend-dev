<template>
  <form action="" class="frm Idi receiving">
    <p class="t1">Receiving account</p>
    <p class="t2">How do you intend receiving the payment?</p>

    <account-form
      backTo="/originating_account"
      storeType="receiving"
      :handleCreateAccount="createAccount"
    />
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
const { receivingAccount } = storeToRefs(store);
const {
  account_type,
  other_bank,
  bank_or_network,
  holder_name,
  number_or_address,
} = receivingAccount.value;

const exchange = useConversionStore().$state.exchange;

const token = useAuthStore().$state.user.access;
const config = useRuntimeConfig();

const bank = computed(() => {
  if (bank_or_network == "Other") {
    return other_bank;
  } else {
    return bank_or_network;
  }
});

const createAccount = () => {
  useFetch(`${config.public.baseURL}/wallets/accounts/`, {
    method: "post",
    body: {
      account_type:
        account_type.charAt(0).toUpperCase() + account_type.slice(1),
      currency: exchange.to_currency,
      holder_name,
      bank_or_network: bank,
      number_or_address,
    },
    onRequest({ request, options }) {
      options.headers = options.headers || {};
      options.headers.authorization = `Bearer ${token}`;
    },
    onResponse({ request, response, options }) {
      if (response.ok) {
        useConversionStore().setReceivingAccount(response._data.data);
        useFetch(
          `${config.public.baseURL}/wallets/transactions/escrow-account/`,
          {
            method: "post",
            body: {
              account_type:
                account_type.charAt(0).toUpperCase() + account_type.slice(1),
              currency: exchange.to_currency,
              bank_or_network: bank,
              holder_name,
              number_or_address,
            },
            onRequest({ request, options }) {
              options.headers = options.headers || {};
              options.headers.authorization = `Bearer ${token}`;
            },
            onResponse({ request, response, options }) {
              if (response.ok) {
                useConversionStore().setEscrowAccount(response._data.data);
                useConversionStore().setTradeProgress("bank");
                navigateTo("/escrow_account");
              } else {
                // useNotification().toast.error(response._data.message)
                navigateTo("/processing");
              }
            },
          }
        );
      } else {
        useNotification().toast.error(response._data.message);
      }
    },
  });
};
</script>

<style lang="less" scoped>
.receiving {
  max-width: 455px;
  margin: auto;
}
</style>
