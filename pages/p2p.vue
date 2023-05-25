<template>
    <div>
        <div v-if="isSidebarVisible" class="merchant-details-modal">
            <div class="merchant-payment-details">

                <div class="merchant-details">
                    <p class="title-text">Merchant Details</p>
                    <div class="merchant-details-content">
                        <div class="u_img">
                            {{ selectedListing.seller_initials }}
                        </div>
                        <div class="username">{{ selectedListing.seller_name }} <Icon name="bi:check-circle-fill" /></div>
                        <p class="udescrpt">1040 orders • 99.60% completion</p>
                        <div class="price-details">
                            <div class="item">
                                <p class='regular-txt'>Price</p>
                                <p class='bold-txt'>{{ selectedListing.price }} {{ selectedListing.buy_currency }}</p>
                            </div>
                            <div class="item">
                                <p class='regular-txt'>Available Asset</p>
                                <p class='bold-txt'>{{ selectedListing.available_amount }} {{ selectedListing.sell_currency
                                }}</p>
                            </div>
                            <div class="item">
                                <p class='regular-txt'>Payment time limit</p>
                                <p class='bold-txt'>15 minutes</p>
                            </div>
                            <div class="item">
                                <p class='regular-txt'>Payment method(s)</p>
                                <p v-for="method in selectedListing.payment_methods"
                                    class="badge text-[#890620] bg-[#FDD8DF] border-[#FDD8DF]">{{ method }}</p>
                            </div>
                        </div>
                        <div class="TCs">
                            <p class="regular-txt">Terms and conditions</p>
                            <p class="regular-txt">We had set goals that we knew we would smash and made plans to provide
                                more value and improve the user experience for every one of our customers.</p>
                            <p class="regular-txt">Like a lot of companies, we started 2022 hopeful. </p>
                        </div>
                        <div class="reviews">
                            <p class="regular-txt">Reviews</p>
                            <div class="comment-card">

                                <div class="review-card">
                                    <div class="u_img">
                                        EM
                                    </div>
                                    <div class="review-txt">
                                        <p class='u_name'>Emeka Maxwell • 2 days ago</p>
                                        <p class='regular-txt'>Fast transactions! </p>
                                    </div>

                                </div>

                                <div class="review-card">
                                    <div class="u_img">
                                        EM
                                    </div>
                                    <div class="review-txt">
                                        <p class='u_name'>Emeka Maxwell • 2 days ago</p>
                                        <p class='regular-txt'>Fast transactions! </p>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="merchant-details">
                    <p class="title-text">Payment Details</p>
                    <form class="merchant-details-content payment-details-content" @submit.prevent="toOrderDetails">
                        <label htmlFor="" class='regular-txt'>
                            I want to pay
                            <div class="flex w-full">
                                <div class="relative flex items-stretch w-full">
                                    <input v-model="toPay" type="number" class="font-medium w-full"
                                        style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;"
                                        placeholder="0.00" required />
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-6 rounded-full">
                                        <span>NGN</span>
                                    </div>
                                </div>
                            </div>

                        </label>
                        <label htmlFor="" class='regular-txt'>
                            I will receive
                            <div class="flex w-full">
                                <div class="relative flex items-stretch w-full">
                                    <input v-model="amount" type="text" class="font-medium w-full"
                                        style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;"
                                        placeholder="0.00" required />
                                    <div class="absolute inset-y-0 right-0 flex items-center pr-6 rounded-full">
                                        <span>{{ currency }}</span>
                                    </div>
                                </div>
                            </div>
                        </label>
                        <label htmlFor="" class='regular-txt'>
                            <span>Choose a wallet
                                <Icon name="bi:info-circle" />
                            </span>
                            <select v-model.trim="userWallet" class="select w-full font-medium"
                                style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;"
                                required>
                                <option v-for="wallet in userWallets" :value="wallet">{{ wallet.currency }} {{ wallet.amount }}</option>
                            </select>
                        </label>


                        <div class="account">
                            <label htmlFor="" class='regular-txt'>
                                Recieving account
                                <select v-model.trim="userAccount" class="select w-full font-medium"
                                    style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;"
                                    required>
                                    <option v-for="account in userAccounts" :value="account">{{ account.holder_name }}</option>
                                </select>
                            </label>
                            <p class="addnew"><i class="material-icons">
                                    <Icon name="bi:plus-lg" />
                                </i> Add New Account </p>
                        </div>
                        
                        <div class="Terms">
                            <label htmlFor="" class='regular-txt'>
                                <input type="checkbox" name="" id="" required />
                                I have read and understood the seller’s Terms and conditions
                            </label>
                        </div>

                        <div class="submit_sect">
                            <button class='a1' @click="hideSidebar">Cancel</button>
                            <button class='a2'>Buy USD</button>

                        </div>

                    </form>
                </div>

            </div>
        </div>
        <!-- <ConvertModal /> -->
        <header class='home_main'>
            <!-- <Blog_nav /> -->
            <ExternalHeader />

            <div class="blg_main">
                <section class="sectionprof_top">
                    <div class="sectionp2ptop">
                        <p class="pt1">Peer to peer marketplace</p>
                        <p class="pt2">Trade Currencies & Giftcards with Verified Merchants</p>
                        <div class="radioselect">
                            <p class=''>Currencies</p>
                            <p class='active'>GiftCards</p>
                        </div>
                        <div class="buynsell_div">
                            <p class='active'>Buy</p>

                            <!-- Toggle button -->
                            <label class="toggle-switch">
                                <input type="checkbox" />
                                <span class="toggle-slider round"></span>
                                <span class="toggle-label"></span>
                            </label>

                            <p class=''>Sell</p>
                        </div>
                        <div class="wanttobuy">
                            <p class="txt1">I want to buy</p>
                            <form action="" class='frm'>
                                <div class="flex">
                                    <div class="relative flex items-stretch w-full">
                                        <input v-model="amount" type="text" class="w-full bg-white"
                                            style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;"
                                            placeholder="0.00" />
                                        <div class="absolute inset-y-0 right-0 flex items-center px-2 rounded-full">
                                            <select v-model="currency" class="text-gray-600 bg-transparent outline-none">
                                                <option value="USD">USD</option>
                                                <option value="EUR">EUR</option>
                                                <option value="NGN">NGN</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>
                </section>
            </div>
        </header>
        <main class='Main blg_main blg_main2 wallet_history_div'>
            <!-- HISTORY FILTER SECTION  -->
            <section class="sort">
                <form action="">
                    <label>
                        <p>Search by amount</p>
                        <RegularNoIconDrp placeholder='' options={status} />
                        <input type="text" class="w-full max-w-xs font-medium"
                            style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;"
                            placeholder="Enter amount">
                    </label>
                    <label htmlFor="">
                        <p>Currency</p>
                        <select class="select w-full max-w-xs font-medium"
                            style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;">
                            <option>First bank</option>
                            <option>First bank</option>
                            <option>Other</option>
                        </select>
                    </label>
                    <label htmlFor="">
                        <p>Payment method</p>
                        <select class="select w-full max-w-xs font-medium"
                            style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;">
                            <option>First bank</option>
                            <option>First bank</option>
                            <option>Other</option>
                        </select>
                    </label>

                    <button type='submit' class='submit'>Apply filter</button>

                </form>
            </section>
            <!-- ENDS HERE -->





            <div class="deposits_div" style=" width: 85%; padding: 30px 0;">

                <!-- DESKTOP TABLE -->
                <table class="DynamicTable AdvertisersTable" style='width: 100%; table-layout: auto; border: none;'>
                    <thead>
                        <tr>
                            <th>Advertisers</th>
                            <th>Price</th>
                            <th>Available / Limits</th>
                            <th>Payment Method</th>
                            <th>Trade</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="item in currencyListings" @click="toggleSidebar(item)">
                            <td class="td1">
                                <div class="pdiv">
                                    <p class="uimg">{{ item.seller_initials }}</p>
                                    <div class="content">
                                        <p class="uname">{{ item.seller_name }} <Icon name="bi:check-circle-fill" />
                                        </p>
                                        <p class="udescrpt">1040 orders • 99.60% completion</p>
                                    </div>
                                </div>
                            </td>

                            <td class="td2">
                                <div class="pdiv">
                                    <p class="uprice">{{ item.price }} <span>{{ item.buy_currency }}</span></p>
                                </div>
                            </td>

                            <td class="td3">

                                <div class="pdiv">
                                    <div class="content">
                                        <p class="avail">Available <span>{{ item.available_amount }} USD</span></p>
                                        <p class="avail">Limit <span><span class="">₦</span>100,000 - <span
                                                    class="">₦</span>736,231.15 </span></p>
                                    </div>
                                </div>

                            </td>

                            <td class="td4">

                                <div class="listdiv2">
                                    <p v-for="method in item.payment_methods">{{ method }}</p>
                                </div>

                            </td>


                            <td class="td5">
                                <button class="bcurrency"> Buy USD</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <!-- DESKTOP TABLE -->

                <!-- MOBILE TABLE VERSION -->


                <div class="DynamicHistory" id="DynamicHistory">
                    <div key={index} class="DynamicHistoryBox">

                        <p class="user_img">
                            ME
                        </p>
                        <div class="DynamicHistoryCrd">

                            <div class="sect1">
                                <div class="source_div">
                                    <div class="source">Jane Cooper</div><Icon name="bi:check-circle-fill" />                                </div>
                                <p class="amount" style='font-family: "lora"' ;> 735.90 NGN</p>
                            </div>

                            <div class="sect1">
                                <p class="dateTime">1040 orders • 99.60% completion</p>
                            </div>

                        </div>

                    </div>


                    <!-- DYNAMIC TABLE MOBILE MODAL -->
                    <div class="modal" id="DynamicHistoryModal">
                        <div class="modal-content">
                            <p class='bck'><i class="material-symbols-outlined close">navigate_before</i> Go back</p>

                            <span class="amount_div">
                                <div class="top">
                                    <p class='status'>Jane Cooper</p><Icon name="bi:check-circle-fill" />
                                </div>
                                <span class="amt">
                                    <p class="amount"> 735.49 NGN</p>
                                    <span class="mindet">
                                        <div class='typ'> 1040 orders • 99.60% completion</div>
                                        <div class='typ'>Available<p class='sub-typ'>1000.45 NGN</p>
                                        </div>
                                        <div class='typ'>Payment Method <p class='sub-typ'>United Bank for Africa</p>
                                        </div>
                                        <div class='typ'>Limit <p class='sub-typ'>₦100,000 - ₦736,231.15</p>
                                        </div>
                                    </span>
                                </span>
                                <span class="details">
                                    <button class="buynow-btn">
                                        Buy USD
                                    </button>
                                </span>
                            </span>
                        </div>
                    </div>
                    <!-- ENDS HERE  -->


                </div>

            </div>
            <HowItWorks />
            <section class="moviesect">
                <a href="">
                    <img src='~/assets/videolink.svg' alt="" class="md:max-w-none" />
                    <p>Watch the tutorial</p>
                </a>
            </section>
        </main>
        <ExternalFooter />
    </div>
</template>

<script setup>
import { useAuthStore } from '~~/store/auth';
import { useConversionStore } from '~~/store/conversion';

const isSidebarVisible = ref(false)
const selectedListing = ref({})
const toggleSidebar = (item) => {
    selectedListing.value = item
    isSidebarVisible.value = !isSidebarVisible.value;
}
const hideSidebar = () => {
    isSidebarVisible.value = false;
}

const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()

const getCurrencyListings = await useFetch(
    `${config.public.baseURL}/trades/listings/currencies/`,
    {
        'method': 'get',
    },
)
const currencyListings = ref(getCurrencyListings.data.value.data)

const getUserWallets = await useFetch(
    `${config.public.baseURL}/wallets/`,
    {
        'method': 'get',
        onRequest({ request, options }) {
            options.headers = options.headers || {}
            options.headers.authorization = `Bearer ${token}`
        }
    }
)
const userWallets = ref(getUserWallets.data.value.data)
const userWallet = ref('')

const getUserAccounts = await useFetch(
    `${config.public.baseURL}/wallets/accounts/`,
    {
        'method': 'get',
        onRequest({ request, options }) {
            options.headers = options.headers || {}
            options.headers.authorization = `Bearer ${token}`
        }
    }
)
const userAccounts = ref(getUserAccounts.data.value.data)
const userAccount = ref('')

const amount = ref('')
const currency = ref('USD')
const toPay = computed(() => selectedListing.value.price * amount.value)

const toOrderDetails = () => {
    const res = useFetch(
        `${config.public.baseURL}/trades/`,
        {
            'method': 'post',
            'body': {
                "seller": selectedListing.value.seller_public_id,
                "buyer_payment_wallet": userWallet.value.public_id,
                "buyer_receive_account": userAccount.value.public_id,
                "object_public_id": selectedListing.value.public_id,
                "price": selectedListing.value.price,
                "terms": selectedListing.value.terms,
                "buy_currency": selectedListing.value.buy_currency,
                "amount": amount.value,
            },
            onRequest({ request, options }) {
                options.headers = options.headers || {}
                options.headers.authorization = `Bearer ${token}`
            },
            onResponse({ request, response, options }) {
                if (response.ok) {
                    useConversionStore().setTrade(response._data.data)
                    useConversionStore().setReceivingAccount(userAccount.value)
                    useConversionStore().setWallet(userWallet.value)
                    navigateTo('/buy-details')
                } else {
                    useNotification().toast.error(response._data.message)
                }
            }
        }
    )
}
</script>