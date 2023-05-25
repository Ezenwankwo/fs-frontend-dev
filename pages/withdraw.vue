<template>
  <div>
		<!-- Header -->
		<ConversionHeader />
    <!-- loader -->
		<Spinner v-if="loading"/>  
		<div class="cont">
			<div class="Close_auth" id="close_auth">
				<div class="modal">
					<span class="sp1">
						<i class="material-icons-outlined">close</i>
					</span>
					<!-- <img src="~/assets/qmark.svg" alt=""> -->
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
					<div class="lists">
						<p class="p1">Wallet Withdrawal</p>
						<p class="p2">Create or accept offers at your preferred rate.</p>
						<ul>
							<li :class="{active: current.wallet}" @click="changeView('wallet', 0)">
								<span>
										<i class="material-icons-outlined"><Icon name="tabler:wallet" class="text-4xl"/></i> 
								</span>
								<p class="">Choose wallet <Icon name="ic:round-check" class="relative left-20 text-2xl" style="color: grey;" v-if="completed.wallet"/></p> 
							</li>
							<li :class="{active: current.acceptance}" @click="changeView('acceptance', 1)">
								<span>
										<i class="material-icons-outlined"><Icon name="bi:bank" /></i> 
								</span>
								<p>Means of acceptance <Icon name="ic:round-check" class="relative left-7 text-2xl" style="color: grey;" v-if="completed.acceptance"/></p> 
							</li>
							<li :class="{active: current.amount}" @click="changeView('amount', 2)">
								<span>
										<i class="material-icons-outlined"><Icon name="majesticons:money-line" /></i> 
								</span>
								<p>Withdrawal amount <Icon name="ic:round-check" class="relative left-10 text-2xl" style="color: grey;" v-if="completed.amount"/></p> 
							</li>
							<li :class="{active: current.transfer}" @click="changeView('transfer', 3)">
								<span>
										<i class="material-icons-outlined"><Icon name="solar:folder-line-duotone" /></i> 
								</span>
								<p>Make transfer <Icon name="ic:round-check" class="relative left-20 text-2xl" style="color: grey;" v-if="completed.transfer"/></p> 
							</li>
						</ul>
					</div>
					<div class="cnt">
						<div class="fl1">
							<!-- CHOOSE WALLET -->
							<div action="" class="frm Idi" v-if="current.wallet">
								<p class="t1">Select wallet</p>
								<p class="t2">Enter your personal details as required below</p>
								<div class="qs">
									<span class="spq">
										<span class="sp sp2 spC">
											<label htmlFor="fname">Choose wallet</label>
											<div class="box">
												<select name="" id="" style="width: 100%; height: 55px; border-radius: 30px;" v-model="withdrawal.wallet">
													<option v-for="(wallet, index) in wallets" :key="index" :value="wallet.currency">{{ wallet.currency }}</option>
												</select>
											</div>
											<div class='AvailableBalance'>
												<!-- <img src='~/assets/wallet_img_gray.svg' alt="" /> -->
												<Icon name="tabler:wallet" class="text-4xl"/>
												<div class="txt">
													<p class="amount">$00.0</p>
													<p class="sub_txt">Available balance</p>
												</div>
											</div>
											<span v-show="walletError" class="text-red-500 font-bold">{{ walletError }}</span>
										</span>
									</span>
									<span class="spq">
										<div class="links">
											<button onClick={backclick} class="a a1">Back</button>
											<button @click="walletProceed" type="submit" class="a a2">Proceed</button>
										</div>
									</span>
								</div>
							</div>
							<!-- ENDS HERE -->

							<!-- Originating amount -->
							<div action="" class="frm Idi" v-if="current.acceptance">
								<p class="t1">Payment method</p>
								<p class="t2">How do you intend paying into your wallet?</p>
				
								<div class="qs">
									<span class="spq">
										<span class="sp sp2">
										<label htmlFor="fname">Method of payment</label>
										<!-- <span class="els">
												<span class="el">
												<input type="radio" id="el2" name="el" value="fiat" />
												<label htmlFor="el2">Fiat</label>
												</span>
												<span class="el">
												<input type="radio" id="el" name="el" value="crypto" />
												<label htmlFor="el">Crypto</label>
												</span>
										</span> -->
										</span>
									</span>
									<!-- FIAT SECTION -->
									<span class="qs fiat_div" v-if="withdrawal.acceptance === 'Fiat'">    
										<span class="spq">
											<span class="sp sp2">
											<label htmlFor="fname">Select type</label>
											<select style="width: 100%; height: 55px; border-radius: 30px;" v-model="details.method" disabled>
												<option v-for="options in withdrawalOption" :key="options" :value="details.method">{{ options }}</option>
											</select>
											</span>
										</span>
										<span class="spq">
											<div class="line"></div>
										</span>
										<span class="spq">
											<span class="sp sp2">
											<label htmlFor="fname">Bank</label>
											<select name="" id="" style="width: 100%; height: 55px; border-radius: 30px;" v-model="details.bank">
												<option selected>Select Bank</option>
												<option :value="bank" v-for="bank in banks" :key="bank">{{ bank }}</option>
											</select>
											<span v-show="fiatPaymentError.bank" class="text-red-500 font-bold">{{ fiatPaymentError.bank }}</span>
											</span>
										</span>
										<span class="spq">
											<span class="sp sp2">
											<label htmlFor="fname">Account number</label>
											<input type="number" placeholder="Account number" v-model="details.account_number" @keyup="fiatPaymentError.account_number = ''" maxlength="1"/>
											<span v-show="fiatPaymentError.account_number" class="text-red-500 font-bold">{{ fiatPaymentError.account_number }}</span>
											</span>
										</span>
										<span class="spq">
											<span class="sp sp2">
											<label htmlFor="fname">Account holder's name</label>
											<input type="text" placeholder="Mavrick Owen" v-model="details.account_name" @keyup="fiatPaymentError.account_name = ''"/>
											<span v-show="fiatPaymentError.account_name" class="text-red-500 font-bold">{{ fiatPaymentError.account_name }}</span>
											</span>
										</span>
									</span> 
					
									<!-- CRYPTO SECTION -->
									<span class="qs crypto_div" v-if="withdrawal.acceptance === 'Crypto'">     
										<span class="spq">
											<span class="sp sp2">
											<label htmlFor="fname">Network</label>
											<input type="text" name="fname" id="" placeholder="e.g tron"/>
											</span>
										</span>
									</span> 

									<span class="spq">
										<div class="links">
											<button @click="backClick" class="a a1">
												Back
											</button>
											<button @click="paymentProceed" type="submit" class="a a2">
												Proceed
											</button>
										</div>
									</span>
								</div>
							</div>
							<!-- ENDS HERE -->

							<!-- ENTER AMOUNT  -->

							<div action="" class="frm Idi" v-if="current.amount">
								<p class="t1">Enter Amount</p>
								<p class="t2">Enter your personal details as required below</p>
						
								<div class="qs">
									<span class="spq">
										<span class="sp sp2 ">
											<label htmlFor="fname">Amount to withdraw</label>
											<input type="number" placeholder="Amount to withdraw" v-model="amount" @keyup="fee = amount * 0.02, amountError = ''"/>
											<span class="text-red-600 font-bold" v-show="amountError">{{ amountError }}</span>
												<div class="tr_div">
													<div class="tt">
														<p class="p1">Amount to withdraw</p>
														<p class="p2">₦{{ Number(amount).toLocaleString() }}</p>
													</div>
													<div class="tt">
														<p class="p1">Transaction method</p>
														<div class="p2">Bank transfer</div>
													</div>
													<div class="tt">
														<p class="p1">Transaction fee</p>
														<p class="p2">₦{{ Number(fee).toLocaleString()}}</p>
													</div>
													<div class="tt">
													<div class="p1">Actual payment 
														<span class="info">
															<!-- Actual payment prompt modal -->
															<div class="modal"> <p>This is the equivalent amount to be paid to your wallet</p>  </div>
															<!--  -->
															<Icon name="solar:info-circle-line-duotone" class="ml-3 text-xl" />
														</span>
													</div>
													<p class="p2">₦{{ Number(amount).toLocaleString() }}</p>
												</div>
											</div>
										</span>
									</span>
									<span class="spq">
										<span class="sp">
										</span>
									</span>
									<span class="spq">
										<div class="links">
											<button @click="backClick" class="a a1">Go Back</button>
											<button @click="amountProceed" class="a a2">Save & continue</button>
										</div>
									</span>
								</div>
							</div>
							<!-- ENDS HERE -->

							<!-- Email verfification -->
							<div class='mnWalletWithdrawEmail frm' v-if="current.transfer"> 
							<section class="sectioni WalletWithdrawEmail ">
								<p class="t1 d ">Verify transaction</p>
								<p class="t2 d ">Verify transaction to help us know it’s really you</p>
								<p class="to d">
								Kindly enter the 6-digit code sent to your email <br /><span class='ap'>{{ alterEmail(email) }}</span>
								</p>
								<div action="" class='form2'>
									<span class="ct">
										<input type="text" style="border: 1px solid grey;" id="input-o" @keyup="changeFocus('first')" maxlength="1" v-model="inputField.first"/>
										<input type="text" style="border: 1px solid grey;" id="input-o" @keyup="changeFocus('second')" maxlength="1" v-model="inputField.second"/>
										<input type="text" style="border: 1px solid grey;" id="input-o" @keyup="changeFocus('third')" maxlength="1" v-model="inputField.third"/>
										<input type="text" style="border: 1px solid grey;" id="input-o" @keyup="changeFocus('fourth')" maxlength="1" v-model="inputField.fourth"/>
										<input type="text" style="border: 1px solid grey;" id="input-o" @keyup="changeFocus('fifth')" maxlength="1" v-model="inputField.fifth"/>
										<input type="text" style="border: 1px solid grey;" id="input-o" @keyup="changeFocus('sixth')" maxlength="1" v-model="inputField.sixth"/>
									</span>
									<span class="text-red-600 font-bold mt-5" v-show="otpError">{{ otpError }}</span>
									<p class="to to2">Expires in <span class='ap'> 00:34</span> </p>
									<p class="to to2">Didn’t get the code? <a to="" class='a'>Resend code</a></p>
									<div class="links">
										<button @click="backClick" class="a a1">Back</button>
										<button @click="transfer" type="submit" class="a a2">Proceed</button>
									</div>
								</div>
								</section>
							</div>
						</div>
						<p class="cl"><Icon name="material-symbols:close" @click="close" /> Close</p>
					</div>
				</section>
			</main>
		</div>
  </div>
</template>

<script setup>
import { useAuthStore } from '~/store/auth.ts'

const config = useRuntimeConfig()
const email = useAuthStore().$state.user.email

const loading = ref(false)
const wallets = ref([])
const defaultWallet = ref("")
const escrow = ref("")
const fiat = ref([])
const banks = ref([])
const withdrawal = ref({
	wallet: '',
	acceptance: '',
	amount: '',
	transfer: ''
})
const withdrawalOption = ref(["Bank transfer", "Crypto"])
const withdrawalDetails = ref({})
const current = ref({
	wallet: true,
	acceptance: false,
	amount: false,
	transfer: false
})
const details = ref({
	method: '',
	bank: 'Select Bank',
	account_number: null,
	account_name: ''
})
const fiatPaymentError = ref({
	method: '',
	bank: '',
	account_number: '',
	account_name: ''
})
const cryptoDetails = ref({
	address: '',
	network: ''
})
const amount = ref(null)
const amountError = ref('')
const fee = ref(0)
const inputField = ref({
	first: null,
	second: null,
	third: null,
	fourth: null,
	fifth: null,
	sixth: null,
})
const walletError = ref("")
const otpError = ref("")
const completed = ref({
	wallet: false,
	acceptance: false,
	amount: false,
	transfer: false
})

const walletProceed = () => {
	if(withdrawal.value.wallet !== '' && withdrawal.value.wallet !== null) {
		Object.keys(current.value).map((a) => {
			if(a !== 'acceptance') {
				current.value[a] = false
			} else {
				current.value[a] = true
			}
		})
		completed.value.wallet = true
		withdrawal.value.acceptance = fiat.value.includes(withdrawal.value.wallet) ? 'Fiat' : 'Crypto'
		details.value.method = withdrawal.value.acceptance === 'Fiat' ? "Transfer" : "Crypto"
		Object.keys(fiatPaymentError.value).map((error) => fiatPaymentError.value[error] = '')
	} else {
		walletError.value = "Choose a wallet"
	}
}

const paymentProceed = async () => {
	if(withdrawal.value.acceptance === 'Fiat') {
		if(Object.keys(details.value).some((key) => details.value[key] === '' || details.value[key] === null)) {
			Object.keys(details.value).map((key) => {
				fiatPaymentError.value[key] = details.value[key] === '' || details.value[key] === null || details.value[key] === 'Select Bank' ? 'This field is required': ''
			})
		} else {
			loading.value = true
			const { data } = await useFetch(`${config.public.baseURL}` + '/wallets/accounts/', {
				method: "POST",
				body: {
					account_type: withdrawal.value.acceptance,
					currency: withdrawal.value.wallet,
					holder_name: details.value.account_name,
					bank_or_network: details.value.bank ? details.value.bank : cryptoDetails.value.network,
					number_or_address: details.value.account_number ? JSON.stringify(details.value.account_number) : cryptoDetails.value.address
				},
				headers: {
					Authorization: useAuthStore().$state.access
				}
			})
			if(data.value) {
				loading.value = false
				completed.value.acceptance = true
				withdrawalDetails.value = data.value.data
				Object.keys(current.value).map((a) => {
          if(a !== 'amount') {
            current.value[a] = false
          } else current.value[a] = true
        })
			} else {
				loading.value = false
				useNotification().toast.error('Error processing your request')
			}
		}
	}
}

const amountProceed = async () => {
	if(amount.value !== null && amount.value !== '' && amount.value !== 0) {
		loading.value = true
		const { data } = await useFetch(`${config.public.baseURL}` + '/wallets/transactions/escrow-account/', {
			method: "POST",
			body: {
				account_type: withdrawal.value.acceptance,
				currency: withdrawal.value.wallet,
				bank_or_network: details.value.bank ? details.value.bank : cryptoDetails.value.network
			},
			headers: {
				Authorization: useAuthStore().$state.access
			}
		})
		if(data.value) {
			const { data: confirmation } = await useFetch(`${config.public.baseURL}` + '/users/otp/', {
				method: "POST",
				body: {
					action: "send",
					email
				},
				headers: {
					Authorization: useAuthStore().$state.access
				}
			})
			if(confirmation.value) {
				loading.value = false
				escrow.value = data.value.data.public_id
				Object.keys(current.value).map((a) => {
					if(a !== 'transfer') {
						current.value[a] = false
					} else current.value[a] = true
				})
				completed.value.amount = true
			} else {
				loading.value = false
				useNotification().toast.error('Error processing your request')
			}
		} else {
			loading.value = false
			useNotification().toast.error('Error processing your request')
		}
	} else {
		amountError.value = 'This field is required'
	}
}

const transfer = async () => {
	if(Object.keys(inputField.value).every((input) => inputField.value[input] !== '' && inputField.value[input] !== null)) {
		loading.value = true
		var otp = Object.keys(inputField.value).map((input) => inputField.value[input]).join('')
		const { data } = await useFetch(`${config.public.baseURL}` + '/users/otp/', {
			method: "POST",
			body: {
				action: "verify",
				email,
				otp
			},
			headers: {
				Authorization: useAuthStore().$state.access
			}
		})
		if(data.value) {
			const { data: conclusion } = await useFetch(`${config.public.baseURL}` + '/wallets/transactions/', {
				method: "POST",
				body: {
					wallet: withdrawal.value.wallet,
					user_account: withdrawalDetails.value.public_id,
					escrow: escrow.value,
					transaction_type: "Withdrawal",
					transaction_method: "Transfer",
					transaction_amount: amount.value,
					transaction_fee: fee,
					status: "Completed"
				},
				headers: {
					Authorization: useAuthStore().$state.access
				}
			})
			if(conclusion.value) {
				loading.value = false
				navigateTo('/withdraw_success')	
			}
		} else {
			loading.value = false
			useNotification().toast.error('Error processing your request')
		}
	} else {
		otpError.value = 'Fill in all input fields'
	}
}

const changeFocus = (value) => {
	otpError.value = ''
	var inputElement = document.querySelectorAll('#input-o')
	var i = 0
	for(const input in inputField.value) {
		if(input === value) {
			if(inputField.value[input].length === 1 && i === 5) {
				inputElement[i].blur()
			}
			else if(inputField.value[input].length === 1) {
				inputElement[i].blur()
				inputElement[i + 1].focus()
			}
		}
		i += 1
	}
}

const changeView = (value, i) => {
	// if(current.value.transfer === true) {
	// 	Object.keys(current.value).map((a) => a === value ? current.value[a] = true : current.value[a] = false)
	// } else if(Object.keys(current.value).every((a) => current.value[a] === false)) {
	// 	current.value['wallet'] = true
	// }
	Object.keys(current.value).map((a, index) => a === value && completed.value[a] === true ? current.value[a] = true : current.value[a] = false)
}

const backClick = () => {
	const value = Object.keys(current.value).filter((a) => current.value[a] !== false).join('')
	const index = ref(0)
	Object.keys(current.value).filter((a, i) => {
		if(a === value) index.value = i
	})
	const num = index.value - 1
	Object.keys(current.value).map((a, i) => {
		if(i === num) current.value[a] = true
		else current.value[a] = false
	})
	Object.keys(inputField.value).map((input) => inputField.value[input] = '')
}

const close = () => {
	Object.keys(current.value).map((a) => current.value[a] = false)
}

const alterEmail = (val) => {
	var emailLength = val.split('@')[0].length
	var companyName = val.split('@')[1]
	var name = val.split('@')[0]
	var userEmail = ''
	var star = ''
	if(emailLength <= 6) {
		var initial = name.split('').slice(0, 1)
		var end = name.split('').slice(-1)
		var astericks = emailLength - 2
		for(let i = 0; i < astericks; i++) {
			star += '*'
		}
		userEmail = initial + star + end + '@' + companyName
	} else {
		var initial = name.split('').slice(0, 2).join('')
		var end = name.split('').slice(-2).join('')
		var astericks = emailLength - 4
		for(let i = 0; i < astericks; i++) {
			star += '*'
		}
		userEmail = initial + star + end + '@' + companyName
	}
	return userEmail
}

onMounted(async () => {
	await nextTick(async () => {
		const { data } = await useFetch(`${config.public.baseURL}` + '/wallets/', {
			headers: {
				Authorization: useAuthStore().$state.access
			}
		})
		wallets.value = data.value.data
		wallets.value.map((wallet, index) => {
			if(index === 0) {
				defaultWallet.value = wallet.currency
			}
		})
		withdrawal.value.wallet = defaultWallet.value

		const { data: currencies } = await useFetch(`${config.public.baseURL}` + '/trades/currencies', {
			headers: {
				Authorization: useAuthStore().$state.access
			}
		})
		fiat.value = currencies.value.data

		const { data: bank } = await useFetch(`${config.public.baseURL}` + '/wallets/accounts/banks', {
			headers: {
				Authorization: useAuthStore().$state.access
			}
		})
		banks.value = bank.value.data
	})
})
</script>

<style>

</style>