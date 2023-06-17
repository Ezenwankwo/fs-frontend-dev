<template>
  <form action="" class="frm Idi originating">
    <p class="t1">Originating account</p>
    <p class="t2">How do you intend making the payment?</p>

    <account-form
      backTo="/review_amount"
      storeType="originating"
      :handleCreateAccount="()=> navigateTo('/receiving_account')"
    />
  </form>
</template>

<script setup>

definePageMeta({
  layout: "conversion",
  middleware: ["auth"],
});
</script>

<style lang="less" scoped>
.originating {
  max-width: 455px;
  margin: auto;
}
</style>
