<template>
  <div>
    <NavBar />
    <div class="cont">
      <!-- <div class="Close_auth" id="close_auth">
                <div class="modal">
                    <span class="sp1">
                        <Icon name="bi:x-lg" />
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
                        <i class="material-icons-outlined">info</i>Ensure you have not made any payment in the process
                        before this cancellation, else, the fund is gone. Ensure you have not made any payment.
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
                        <textarea name="" id="otherReason" cols="30" rows="30"
                            placeholder="Please state your reason for cancellation">
                            </textarea>
                        <span class="links">
                            <a class="a a1" href="/seller_details">Go Back</a>
                            <a type="submit " class="a a2" href="/">Cancel</a>
                        </span>
                    </form>
                </div>
            </div> -->
      <main class="Aumain">
        <section class="container section">
          <div class="lists">
            <p class="p1">Convert Currency</p>
            <p class="p2">Create or accept offers at your preferred rate.</p>
            <ul>
              <li
                class="last"
                v-bind:class="{
                  done: tradeProgress && tradeProgress.includes('review'),
                  active: activeTradeProgress === 'review',
                }"
                @click="handldTradeProgress('review')"
              >
                <span>
                  <i class="material-icons-outlined"
                    ><Icon name="solar:folder-line-duotone"
                  /></i>
                </span>
                <p>
                  Review amount
                  <img
                    v-if="tradeProgress && tradeProgress.includes('review')"
                    src="~/assets/svg/check.svg"
                    alt="check"
                    class="ml-auto"
                  />
                </p>
              </li>
              <li
                class="last"
                v-bind:class="{
                  done: tradeProgress && tradeProgress.includes('bank'),
                  active: activeTradeProgress === 'bank',
                }"
                @click="handldTradeProgress('bank')"
              >
                <span>
                  <i class="material-icons-outlined"><Icon name="bi:bank" /></i>
                </span>
                <p>
                  Bank details
                  <img
                    v-if="tradeProgress && tradeProgress.includes('bank')"
                    src="~/assets/svg/check.svg"
                    alt="check"
                    class="ml-auto"
                  />
                </p>
              </li>
              <li
                class="last"
                v-bind:class="{
                  done: tradeProgress && tradeProgress.includes('confirm'),
                  active: activeTradeProgress === 'confirm',
                }"
                @click="handldTradeProgress('confirm')"
              >
                <span>
                  <i class="material-icons-outlined"
                    ><Icon name="majesticons:money-line"
                  /></i>
                </span>
                <p>
                  Confirm payment
                  <img
                    v-if="tradeProgress && tradeProgress.includes('confirm')"
                    src="~/assets/svg/check.svg"
                    alt="check"
                    class="ml-auto"
                  />
                </p>
              </li>
            </ul>
          </div>
          <div class="cnt">
            <div class="fl1">
              <slot />
            </div>
            <p class="cl" @click="handleCancelTrade">
              <Icon name="bi:x-lg" /> Close
            </p>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useConversionStore } from "~~/store/conversion";

const router = useRouter();

const store = useConversionStore();
const { tradeProgress, activeTradeProgress } = storeToRefs(store);

const handleCancelTrade = () => {
  const cancelTrade = confirm("Are you sure you want to cancel?");

  if (cancelTrade) {
    useConversionStore().resetAccount()
    navigateTo("/");
  }
};

const handldTradeProgress = (section) => {
  const navigator = {
    "review": "/review_amount",
    "bank": "/originating_account",
    "confirm": "/escrow_account",
  }
  if (tradeProgress.value && tradeProgress.value.includes(section)){
    navigateTo(navigator[section]);
  }
};

</script>

<style lang="less" scoped>
.Aumain .section {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: left;
    width: 100%;
    /* border: solid; */
    height: 100%;
    padding: 0 7%;
    padding-left: 5%;
  }
}
.Aumain .section .lists .p1 {
  font-family: "Lora", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 150%;
  color: #373d4a;
  width: 100%;
  display: flex;
  justify-content: left;
  text-align: left;
}
.Aumain .section .lists .p2 {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7c859d;
  width: 85%;
  display: flex;
  justify-content: left;
  text-align: left;
  margin-top: 10px;
}
.Aumain .section .lists ul {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  margin-top: 40px;

  @media screen and (max-width: 950px) {
    display: flex;
    flex-direction: row;
    align-items: flex-end;
    width: 100%;
    height: 100%;
    margin-top: 30px;
    justify-content: left;
  }
}
</style>
