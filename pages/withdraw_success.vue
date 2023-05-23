<template>
  <div>
    <!-- Header -->
		<ConversionHeader />
            
    <div class="cont">
            <div class="Close_auth" id="close_auth">
                <div class="modal">
                    <span class="sp1">
                        <i class="material-icons-outlined">close</i>
                    </span>
                    <img src="/static/media/qmark.efab86979ad52a61e7ce1eb5da22b079.svg" alt="">
                    <p class="p1">Are you sure to cancel ?</p>
                    <p class="p2">You wil lose your data.</p>
                    <span class="links">
                        <a class="a a1" href="/seller_details">Continue with order</a>
                        <a class="a a2" href="/seller_details">Yes, cancel</a>
                    </span>
                </div>
                <div class="modalq" id="modalq">
                    <p class="top">Reason for Cancellation <i class="fa-solid fa-x"></i></p>
                    <p class="info">
                        <i class="material-icons-outlined">info</i>Ensure you have not made any payment in the process before this cancellation, else, the fund is gone. Ensure you have not made any payment.
                    </p>
                    <form action="" class="frm_inf" id="frm_inf">
                        <span class="sp">
                            <input type="radio" id="f1" name="f">
                            <label for="f1">Just trying things out</label>
                        </span>
                        <span class="sp">
                            <input type="radio" id="f2" name="f">
                            <label for="f2">Lost interest in the process</label>
                        </span>
                        <span class="sp">
                            <input type="radio" id="f3" name="f">
                            <label for="f3">Just carrying out a research</label>
                        </span>
                        <span class="sp">
                            <input type="radio" id="f4" name="f">
                            <label for="f4">I prefer to use another merchant</label>
                        </span>
                        <span class="sp">
                            <input type="radio" id="f5" name="f">
                            <label for="f5">Poor customer service</label>
                        </span>
                        <span class="sp">
                            <input type="radio" id="f6" name="f">
                            <label for="f6">Others</label>
                        </span>
                        <textarea name="" id="otherReason" cols="30" rows="30" placeholder="Please state your reason for cancellation">
                        </textarea>
                        <span class="links">
                            <a class="a a1" href="/seller_details">Go Back</a>
                            <a type="submit " class="a a2" href="/">Cancel</a>
                        </span>
                    </form>
                </div>
            </div>
            <main class="Aumain">
                <section class="section">
                    <div class="cnt">
                        <div class="fl1">
                            <div class="success">
                                <img src='~/assets/success.svg' alt="" class='gif'/>
                                <p class="p1">Deposit Order Submitted</p>
                                <p class="p2">You’ll be notified once you’ve been credited</p>
                                <NuxtLink to="/wallet" class='a a1'>View Wallet</NuxtLink>
                                <a  class='a at2'>Resume P2P transaction</a>
                                <a  class='a at3' @click="close">Close and exit</a>

                            </div>
                    </div>
                    <p class="cl"><Icon name="material-symbols:close" /> Close</p>
                </div>
            </section>
        </main>
    </div>
  </div>
</template>

<script setup>
  const close = async () => {
    await navigateTo('/wallet')
  }
</script>

<style>

</style>