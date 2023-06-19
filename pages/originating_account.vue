<template>
  <form action="" class="frm Idi originating">
    <p class="t1">Originating account</p>
    <p class="t2">How do you intend making the payment?</p>

    <account-form
      backTo="/review_amount"
      storeType="originating"
      :handleCreateAccount="gotoNextPage"
    />
  </form>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useConversionStore } from "~~/store/conversion";
definePageMeta({
  layout: "conversion",
  middleware: ["auth"],
});

const store = useConversionStore();
const { originatingAccount } = storeToRefs(store);
const exchange = useConversionStore().$state.exchange;

const gotoNextPage = async () => {
  const {
    account_type,
    other_bank,
    holder_name,
    number_or_address,
    bank_or_network,
  } = originatingAccount.value;
  const bank = bank_or_network == "Other" ? other_bank : bank_or_network;
  const body = {
    account_type: account_type.charAt(0).toUpperCase() + account_type.slice(1),
    currency: exchange.to_currency,
    holder_name,
    bank_or_network: bank,
    number_or_address,
  };

  try {
    const response = await $api(`/wallets/accounts/`, {
      method: "POST",
      body,
    });
    useConversionStore().setOriginatingAccount(response.data);
    navigateTo("/receiving_account");
  } catch (error) {
    useNotification().toast.error(error.data.message);
  }
};
</script>

<style lang="less" scoped>
.originating {
  max-width: 455px;
  margin: auto;
}
</style>
