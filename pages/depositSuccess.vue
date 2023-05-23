<template>
  <main class="Aumain">
    <section class="section">
      <div class="cnt">
        <div class="fl1">
          <div class="success">
            <img src='~/assets/success.svg' alt="" class='gif'/>
            <p class="p1">Deposit Order Submitted</p>
            <p class="p2">You'll be notified once you've been credited</p>
            <NuxtLink to="/wallet" class='a a1'>View Wallet</NuxtLink>
            <a  class='a at2'>Resume P2P transaction</a>
            <a  class='a at3'>Close and exit</a>
          </div>
        </div>
        <p class="cl" @click="close"><Icon name="material-symbols:close" /> Close</p>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useAuthStore } from '~/store/auth.ts'

const close = async () => {
  await navigateTo('/wallet')
}
</script>

<style>

</style>