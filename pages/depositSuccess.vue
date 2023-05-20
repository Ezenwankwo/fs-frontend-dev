<template>
  <main class="Aumain">
    <section class="section">
      <div class="cnt">
        <div class="fl1">
          <div class="success">
            <img src='~/assets/success.Gif' alt="" class='gif'/>
            <p class="p1">Deposit Order Submitted</p>
            <p class="p2">You'll be notified once you've been credited</p>
            <a href="Wallet-index.html" class='a a1'>View Wallet</a>
            <a  class='a at2'>Resume P2P transaction</a>
            <a  class='a at3'>Close and exit</a>
          </div>
        </div>
        <p class="cl"><i class="fa-solid fa-x"></i> Close</p>
      </div>
    </section>
  </main>
</template>

<script setup>
const email = useAuthStore().$state.user.email
console.log(email)
</script>

<style>

</style>