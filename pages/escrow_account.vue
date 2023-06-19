<template>
  <form action="" class="frm Idi escrow">
    <div class="qs qs2">
      <div class="spq spq2">
        <div class="sp sp2 sp3">
          <p class="top">Kindly make your transfer into the account below</p>
        </div>
      </div>

      <div class="spq">
        <div class="sp sp2">
          <div class="details">
            <div class="det">
              <p class="tx tx1">Account Number</p>
              <div class="spt">
                <p class="tx tx2">{{ escrow.number_or_address }}</p>
                <Icon
                  v-if="escrow.number_or_address"
                  @click="coptToClip"
                  name="material-symbols:file-copy-outline"
                />
              </div>
            </div>
            <div class="det">
              <p class="tx tx1">Account Name</p>
              <div class="spt">
                <p class="tx tx2">{{ escrow.holder_name }}</p>
              </div>
            </div>
            <div class="det">
              <p class="tx tx1">Bank</p>
              <div class="spt">
                <p class="tx tx2">{{ escrow.bank_or_network }}</p>
              </div>
            </div>
            <div class="det">
              <p class="tx tx1">Expected payment</p>
              <div class="spt">
                <p class="tx tx2">
                  {{ payment.from_currency }} {{ payment.amount }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="spq">
        <div class="links">
          <button
            @click="handleNext"
            type="button"
            class="a a2 text-center w-full"
          >
            I have transferred<b class="mx-2"
              >{{ payment.from_currency }} {{ payment.amount }}</b
            >to the account above!
          </button>
        </div>
      </div>
      <div class="spq">
        <p class="pr">
          Having issues?
          <a class="a" href="mailto:finstackhq@gmail.com">Contact support</a>
        </p>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useConversionStore } from "~~/store/conversion";
import { useAuthStore } from "~~/store/auth";
definePageMeta({
  layout: "conversion",
  middleware: ["auth"],
});

const referral = computed(() => useRouter().options.history.state.back);

const escrow = computed(() => {
  if (referral.value === "/receiving_account") {
    return useConversionStore().$state.escrowAccount;
  } else {
    return {
      number_or_address: useRoute().query.account,
      holder_name: useRoute().query.name,
      bank_or_network: useRoute().query.bank,
    };
  }
});

const payment = useConversionStore().$state.exchange;
const token = useAuthStore().$state.user.access;
const config = useRuntimeConfig();

const originatingAccount = useConversionStore().$state.originatingAccount;
// const escrow = ref(useConversionStore().$state.escrowAccount)
const receivingAccount = useConversionStore().$state.receivingAccount;
const exchange = useConversionStore().$state.exchange;

useFetch(`${config.public.baseURL}/trades/`, {
  method: "post",
  body: {
    seller: "finstack",
    buyer_payment_account: originatingAccount.public_id,
    buyer_receive_account: receivingAccount.public_id,
    escrow_account: escrow.public_id,
    object_public_id: exchange.public_id,
    price: exchange.rate,
    buy_currency: exchange.from_currency,
    amount: exchange.amount,
  },
  onRequest({ request, options }) {
    options.headers = options.headers || {};
    options.headers.authorization = `Bearer ${token}`;
  },
  onResponse({ request, response, options }) {
    if (response.ok) {
      useConversionStore().setTrade(response._data.data);
    } else {
      useNotification().toast.error(response._data.message);
      useConversionStore().setTradeProgress("confirm", true);
    }
  },
});

const handleNext = () => {
  useConversionStore().setTradeProgress("confirm");
  navigateTo("/processing");
};

const coptToClip = () => {
  navigator.clipboard.writeText(escrow.value.number_or_address);
  useNotification().toast.success("Account Copied!");
};

onMounted(() => {
  nextTick(() => {
    useConversionStore().setActiveTradeProgress("confirm");
    if (!escrow.value.number_or_address) {
      useNotification().toast.error("Please check your entry, and try again!");
      useConversionStore().setTradeProgress("review", true);
      navigateTo("/review_amount");
    }
  });
});
</script>

<style lang="less" scoped>
.escrow {
  max-width: 455px;
  margin: auto;
}
@media screen and (max-width: 600px) {
  .Aumain .section .cnt .frm .qs .spq .links .a2 {
    font-size: 12px;
  }
  .Aumain .section .cnt .frm .qs .spq .sp2 .details {
    row-gap: 20px;
  }
  .Aumain .section .cnt .frm .qs .spq .sp2 .details .det {
    row-gap: 5px;
  }
}
</style>
