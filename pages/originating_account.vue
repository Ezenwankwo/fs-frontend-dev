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

const gotoNextPage = () => {
  const account = { ...originatingAccount.value };
  delete account.other_bank;
  if (!Object.values(account).includes("")) {
    navigateTo("/receiving_account");
  }
};
</script>

<style lang="less" scoped>
.originating {
  max-width: 455px;
  margin: auto;
}
</style>
