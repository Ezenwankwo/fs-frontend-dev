<template>
    <form action="" class="frm PID tradeP2P">
        <div class="top_section">
            <div class="user_description">
                <div class="u_img">
                    {{ trade.listing.seller_initials }}
                </div>
                <div class="u_txt">
                    <p class="u_name">{{ trade.listing.seller_name }} <img src='images/verified_img.svg' alt=""></p>
                    <p class="orders">1040 orders • 99.60% completion</p>
                </div>
            </div>
            <div class="order_description">
                <p class="regular_txt">Order ID: {{ trade.public_id }}</p>
                <p class="regular_txt">Time created: Aug 02, 2023 • 15:43</p>
                <p class="regular_txt">View terms & conditions</p>
            </div>
        </div>
        <div class="dash">
            <div class="dash_card">
                <div class="dash_top">
                    <i class="material-icons-outlined">
                        <Icon name="solar:folder-line-duotone" />
                    </i>
                    <p class="regular_txt">Order details</p>
                </div>
                <div class="dash_order_details">
                    <div class="crd">
                        <p class="p1">You’ll be paying</p>
                        <p class="p2">{{ trade.buy_currency }} {{ trade.price * trade.amount }}</p>
                    </div>
                    <div class="crd">
                        <p class="p1">@ Unit price</p>
                        <p class="p2">{{ trade.price }}</p>
                    </div>
                    <div class="crd">
                        <p class="p1">To recieve</p>
                        <p class="p2">{{ trade.listing.sell_currency }} {{ trade.amount }}</p>
                    </div>
                </div>
            </div>
            <!-- <div class="dash_card">
                <div class="dash_top">
                    <i class="material-icons-outlined">
                        <Icon name="tabler:wallet" />
                    </i>
                    <p class="regular_txt">Wallet</p>
                    <p class="addtowish">+ Add to wallet</p>
                </div>
                <div class="dash_price">
                    <p class="currency">{{ wallet.currency }}</p>
                    <p class="amount">{{ wallet.amount }}</p>
                </div>
                <div class="dash_view_all_users">
                    <p>View all assets <i class="material-icons">
                            <Icon name="bi:chevron-right" />
                        </i></p>
                </div>
            </div> -->

        </div>
        <div class="dash">
            <div class="dash_card">
                <div class="dash_top">
                    <i class="material-icons-outlined">
                        <Icon name="bi:info-circle" />
                    </i>
                    <p class="regular_txt">Important Information</p>
                </div>
                <div class="dash_order_details">
                    <p class="regular_txt">Create or accept offers at your preferred rate. Create or accept offers at your
                        preferred rate. Create or accept offers at your preferred rate Create or accept offers at your
                        preferred rate.</p>
                </div>
            </div>
            <div class="dash_card">
                <div class="dash_top">
                    <i class="material-icons-outlined">
                        <Icon name="majesticons:money-line" />
                    </i>
                    <p class="regular_txt">My receiving account</p>
                </div>
                <div class="dash_price">
                    <form action="">
                        <input type="text">
                    </form>
                </div>
            </div>
        </div>
        <span class="process">
            <div class="process-position">
                <NuxtLink to="/p2p" class="process-item process-back">Go Back</NuxtLink>
                <NuxtLink to="/processing" class="process-item process-forward">Save & continue</NuxtLink>
            </div>
        </span>
    </form>
</template>

<script setup>
import { useAuthStore } from '~~/store/auth';
import { useConversionStore } from '~~/store/conversion';
definePageMeta({
    layout: "p2p",
});

const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()

const tradeId = useRoute().query.trade
const getTrade = await useFetch(
    `${config.public.baseURL}/trades/${tradeId}/`,
    {
        'method': 'get',
        onRequest({ request, options }) {
            options.headers = options.headers || {}
            options.headers.authorization = `Bearer ${token}`
        }
    }
)
const trade = ref(getTrade.data.value.data)

const accountId = useRoute().query.account
const getAccount = await useFetch(
    `${config.public.baseURL}/wallets/accounts/${accountId}/`,
    {
        'method': 'get',
        onRequest({ request, options }) {
            options.headers = options.headers || {}
            options.headers.authorization = `Bearer ${token}`
        }
    }
)
const account = ref(getAccount.data.value.data)
</script>

<style scoped>
.process {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    margin-top: 45px;
    margin-bottom: 45px;
}

.process-position {
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 13px;
}
.process-item {
    padding: 10px 20px;
    font-size: 14px;
    border: solid 2px #2F67FA;
    border-radius: 30px;
}

.process-back {
    color: #2F67FA;
    background-color: white;
    cursor: pointer;
}

.process-forward {
    background-color: #2F67FA;
    color: white;
    cursor: pointer;
}</style>