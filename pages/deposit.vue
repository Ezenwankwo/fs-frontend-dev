<template>
  <div>
    <!-- <ConvertModal /> -->
    <ConversionHeader />
    <!-- Sidenav -->
    <!-- <WalletNav /> -->
    <!-- Sidenav -->
    <section>
      <div class="cont">
        <div class="Close_auth" id="close_auth">
          <div class="modal">
            <span class="sp1">
              <i class="material-icons-outlined">close</i>
            </span>
            <!-- <img src="/static/media/qmark.efab86979ad52a61e7ce1eb5da22b079.svg" alt=""> -->
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
              <p class="p1">Wallet Deposit</p>
              <p class="p2">Create or accept offers at your preferred rate.</p>
              <ul>
                <li class="" @click="changeView('wallet')" :class="{ active: current.wallet}">
                  <span>
                      <i class="material-icons-outlined"><Icon name="tabler:wallet" class="text-4xl"/></i> 
                  </span>
                  <p>Choose wallet <i class="material-icons ic">check</i></p> 
                </li>
                <li class="" @click="changeView('payment')" :class="{ active: current.payment}">
                  <span>
                    <i class="material-icons-outlined"><Icon name="majesticons:money-line" /></i> 
                  </span>
                  <p>Payment method  </p> 
                </li>
                <li class="last" @click="changeView('amount')" :class="{ active: current.amount}">
                  <span>
                    <i class="material-icons-outlined"><Icon name="solar:folder-line-duotone" /></i> 
                  </span>
                  <p>Enter amount  </p>
                </li>
                <li class="last" @click="changeView('transfer')" :class="{ active: current.transfer}">
                  <span>
                    <i class="material-icons-outlined"><Icon name="bi:bank" /></i> 
                  </span>
                  <p>Make transfer </p>
                </li>
              </ul>
            </div>
            <div class="cnt">
              <div class="fl1">
                <!-- TRANSFER DETAILS -->
                <!-- <form action="" class="frm Idi" >
                  <div class="qs qs2">
                    <span class="spq spq2">
                      <span class="sp sp2 sp3">
                        <p class="top">Kindly make your transfer into the account below</p>
                      </span>
                    </span>
            
                    <span class="spq">
                      <span class="sp sp2">
                        <div class="details">
                          <div class="det">
                            <p class="tx tx1">Account Number</p>
                            <span class="spt">
                              
                              <p class="tx tx2">0464791406 </p>
                              <Icon name="tabler:copy" />
                            </span>
                          </div>
                          <div class="det">
                            <p class="tx tx1">Account Name</p>
                            <span class="spt">
                              
                              <p class="tx tx2">Peter Mavrick Jones </p>
                            </span>
                          </div>
                          <div class="det">
                            <p class="tx tx1">Bank</p>
                            <span class="spt">
                              
                              <p class="tx tx2">Guaranty Trust Bank </p>
                            </span>
                          </div>
                          <div class="det">
                            <p class="tx tx1">Expected payment</p>
                            <span class="spt">
                              
                              <p class="tx tx2">₦150,000.00 </p>
                            </span>
                          </div>
                        </div>
                      </span>
                    </span>
            
                    <span class="spq">
                      <div class="links">
                        <a to="/CalcAuthSuccess" class="a a2 a3" onClick={handleLinkClick}>
                        I have transferred<b> $1000 </b>to the account above!
                        </a>
                      </div>
                    </span>
            
                    <span class="spq">
                      <p class="pr">
                        Having issues? <a class="a" onclick={backclick} >Try another account</a>
                      </p>
                    </span>
            
                    <span class="spq spy">
                      <ProcessingAnimation />
                    </span>
                  </div>
                </form> -->
                <!-- ENDS HERE -->

                <!-- CHOOSE WALLET -->
                <div class="frm Idi" v-if="current.wallet">
                  <p class="t1">Select wallet</p>
                  <p class="t2">Enter your personal details as required below</p>
              
                  <div class="qs">
                    <span class="spq">
                      <span class="sp sp2 spC">
                        <label htmlFor="fname">Choose wallet</label>
                        <div class="box">
                          <select name="" id="" style="width: 100%; height: 55px; border-radius: 30px;" v-model="deposit.wallet">
                            <option value="ngn">Naira NGN</option>
                            <option value="usd">Dollar USD</option>
                            <option value="eth">Ethereum</option>
                          </select>
                          
                        </div>
                        <div class='AvailableBalance'>
                          <Icon name="tabler:wallet" class="text-4xl"/>
                          <div class="txt">
                            <p class="amount">$00.0</p>
                            <p class="sub_txt">Available balance</p>
                          </div>
                        </div>
                      </span>
                    </span>
                    <span class="spq">
                      <div class="links">
                        <button @click="backClick" class="a a1">Back</button>
                        <button @click="walletProceed" type="submit" class="a a2">Proceed</button>
                      </div>
                    </span>
                  </div>
                </div>
                <!-- ENDS HERE -->

              <!-- Originating amount -->
              <div class="frm Idi" v-if="current.payment">
                  <p class="t1">Payment method</p>
                  <p class="t2">How do you intend paying into your wallet?</p>
          
                  <div class="qs">
                  <!-- <span class="spq">
                      <span class="sp sp2">
                      <label htmlFor="fname">Method of payment</label>
                      <span class="els">
                          <span class="el">
                          <input
                              type="radio"
                              id="el2"
                              name="el"
                              value="fiat"
                              v-model="deposit.payment.method"
                              @change="setTransferOption('fiat')"
                          />
                          <label for="el2">Fiat</label>
                          </span>
                          <span class="el">
                          <input
                              type="radio"
                              id="el"
                              name="el"
                              value="crypto"
                              v-model="deposit.payment.method"
                              @change="setTransferOption('crypto')"
                          />
                          <label for="el">Crypto</label>
                          </span>
                      </span>
                      </span>
                  </span> -->
          <!-- FIAT SECTION -->
                  <span class="qs fiat_div" v-if="deposit.payment.method === 'fiat'">    
                      <span class="spq">
                          <span class="sp sp2">
                          <label htmlFor="fname">Select type</label>
                          <input type="text" name="account_number" id="" placeholder="Account number" :value="transferOption" readonly/>
                          </span>
                      </span>
          
                      <span class="spq">
                          <div class="line"></div>
                      </span>
                      <span class="spq">
                          <span class="sp sp2">
                          <label htmlFor="fname">Account name</label>
                          <input type="text" name="account_number" id="" placeholder="Account name" @keyup="error.account_name = ''" v-model="deposit.payment.account_name"/>
                          <span v-show="error.account_name" class="text-red-500 font-bold">{{ error.account_name }}</span>
                          </span>
                      </span>
                      <span class="spq">
                          <div class="line"></div>
                      </span>
                      <span class="spq">
                          <span class="sp sp2">
                          <label htmlFor="fname">Account number</label>
                          <input type="number" name="account_number" id="" placeholder="Account number" @keyup="error.account_number = ''" v-model="deposit.payment.account_number"/>
                          <span v-show="error.account_number" class="text-red-500 font-bold">{{ error.account_number }}</span>
                          </span>
                      </span>
                      <span class="spq">
                          <div class="line"></div>
                      </span>
                      <span class="spq">
                        <span class="sp sp2">
                        <label htmlFor="fname">Bank</label>
                        <input type="text" name="bank" id="" placeholder="Bank" v-model="deposit.payment.bank" @keyup="error.bank = ''"/>
                        <span v-show="error.bank" class="text-red-500 font-bold">{{ error.bank }}</span>
                        </span>
                      </span>
                  </span> 
          
          <!-- CRYPTO SECTION -->
                  <span class="qs crypto_div" v-if="deposit.payment.method === 'crypto'">     
                      <span class="spq">
                          <span class="sp sp2">
                          <label htmlFor="fname">Network</label>
                          <input type="text" name="network" id="" placeholder="e.g tron" v-model="deposit.payment.network" @keyup="error.network = ''"/>
                          <span v-show="error.network" class="text-red-500 font-bold">{{ error.network }}</span>
                          </span>
                      </span>

                      <span class="spq">
                          <span class="sp sp2">
                          <label htmlFor="fname">Wallet Address</label>
                          <input type="text" name="address" id="" placeholder="e.g 0x7f00xddcbdfs552d" v-model="deposit.payment.address" @keyup="error.address = ''"/>
                          <span v-show="error.address" class="text-red-500 font-bold">{{ error.address }}</span>
                          </span>
                      </span>
          
                  </span>
                  <span class="spq">
                      <div class="links">
                      <button @click="backClick" class="a a1">
                          Back
                      </button>
                      <button @click="paymentProceed" type="submit" class="a a2">
                          Save & Continue
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
                        <label htmlFor="fname">Amount to deposit</label>
                        <span class="spq">
                          <span class="sp sp2">
                          <input type="number" name="amount" id="" placeholder="Amount" v-model="amount" @keyup="error.amount = ''" />
                          <span class="text-red-600 font-bold" v-show="error.amount">{{ error.amount }}</span>
                          </span>
                        </span>
                          <!-- <EditableCurrencyOpt /> -->
                          <div class="tr_div">
                            <div class="tt">
                              <p class="p1">Amount to deposit</p>
                              <p class="p2">₦{{ Number(amount).toLocaleString()}}</p>
                            </div>
                            <div class="tt">
                              <p class="p1">Transaction method</p>
                              <div class="">
                                <p class="p2">{{ transferOption }}</p>
                                <!-- <p class="change text-blue-600" >Change</p> -->
                              </div>
                            </div>
                            <div class="tt">
                              <p class="p1">Transaction fee</p>
                              <p class="p2">₦00.0</p>
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
                              <p class="p2">₦{{ Number(amount).toLocaleString()}}</p>
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
                        <button @click="amountProceed" type="submit" class="a a2">Save & continue</button>
                      </div>
                    </span>
              
              
                  </div>
              </div>

              <!-- ENDS HERE -->

              <!-- TRANSFER DETAILS -->
              <form action="" class="frm Idi" v-if="current.transfer" @submit.prevent>
                <div class="qs qs2 text-center">
                  <span class="spq spq2">
                    <span class="sp sp2 sp3">
                      <p class="top">Kindly make your transfer into the account below</p>
                    </span>
                  </span>
          
                  <span class="spq">
                    <span class="sp sp2">
                      <div class="details">
                        <div class="det">
                          <p class="tx tx1">Account Number</p>
                          <span class="spt">
                            <p class="tx tx2">0464791406 </p>
                            <Icon name="tabler:copy" @click="copyURL('0464791406')"/>
                            <p v-show="copy">copied</p>
                          </span>
                        </div>
                        <div class="det">
                          <p class="tx tx1">Account Name</p>
                          <span class="spt">
                            <p class="tx tx2">Peter Mavrick Jones </p>
                          </span>
                        </div>
                        <div class="det">
                          <p class="tx tx1">Bank</p>
                          <span class="spt">
                            
                            <p class="tx tx2">Guaranty Trust Bank </p>
                          </span>
                        </div>
                        <div class="det">
                          <p class="tx tx1">Expected payment</p>
                          <span class="spt">
                            
                            <p class="tx tx2">₦{{ Number(amount).toLocaleString() }} </p>
                          </span>
                        </div>
                      </div>
                    </span>
                  </span>
          
                  <span class="spq">
                    <div class="links text-center">
                      <button class="a a2 a3" onClick={handleLinkClick}> I have made the transfer!</button>
                    </div>
                  </span>
          
                  <span class="spq">
                    <p class="pr">
                      Having issues? <a class="a" onclick={backclick} >Try another account</a>
                    </p>
                  </span>
          
                  <!-- <span class="spq spy">
                    <ProcessingAnimation />
                  </span> -->
                </div>
              </form>
              <!-- ENDS HERE -->
              </div>
              <p class="cl" @click="close"><i class="fa-solid fa-x"></i> Close</p>
            </div>
          </section>
        </main>
      </div>
    </section>
  </div>
</template>

<script setup>
  import { useAuthStore } from '~~/store/auth'

  const config = useRuntimeConfig()
  const email = useAuthStore().$state.user.email
  
  const fiat = ref(["ngn", 'usd'])
  const current = ref({
    wallet: true,
    payment: false,
    amount: false,
    transfer: false
  })
  const deposit = ref({
    wallet: 'ngn',
    payment: {
      method: 'fiat',
      account_number: null,
      account_name: null,
      bank: '',
      network: '',
      address: ''
    }
  })
  const copy = ref(false)
  const error = ref({
    amount: '',
    account_number: '',
    account_name: '',
    address: '',
    bank: ''
  })
  const transferOption = deposit.value.payment.method === 'fiat' ? 'Bank transfer' : 'Cryptocurrency'
  const amount = ref(null)
  const walletProceed = () => {
    if(deposit.value.wallet !== '' || deposit.wallet.value !== null) {
      Object.keys(current.value).map((a) => {
        if(a !== 'payment') {
          current.value[a] = false
        } else {
          current.value[a] = true
          deposit.value.payment.method = fiat.value.includes(deposit.value.wallet) ? 'fiat' : 'crypto'
        }
      }) 
    }
    Object.keys(error.value).map((err) => error.value[err] = '')
  }
  const paymentProceed = async () => {
    // if(deposit.value.payment.method === 'fiat') {
    //   if(deposit.value.payment.account_number !== null && deposit.value.payment.bank !== null && deposit.value.payment.account_number !== '' && deposit.value.payment.bank !== '' && deposit.value.payment.account_name !== null && deposit.value.payment.account_name !== '') {
    //     Object.keys(current.value).map((a) => {
    //       if(a !== 'amount') {
    //         current.value[a] = false
    //       } else current.value[a] = true
    //     })
    //   } else if(Object.keys(deposit.value.payment).some((val) => deposit.value.payment[val] === null || deposit.value.payment[val] === '')) {
    //     Object.keys(deposit.value.payment).filter((val) => {
    //       if(deposit.value.payment[val] === null || deposit.value.payment[val] === '' && val !== 'network' && val !== 'address') {
    //         error.value[val] = 'This field is required'
    //       }
    //     })
    //   }
    // } 
    if(Object.keys(deposit.value.payment).some((val) => deposit.value.payment[val] === null || deposit.value.payment[val] === '')) {
      Object.keys(deposit.value.payment).filter((val) => {
        if(deposit.value.payment[val] === null || deposit.value.payment[val] === '' && val !== 'network' && val !== 'address') {
          error.value[val] = 'This field is required'
        } else if(deposit.value.payment[val] === null || deposit.value.payment[val] === '' && val === 'network' || val === 'address') {
          error.value[val] = 'This field is required'
        }
      })
    }
    // if(deposit.value.payment.method === 'crypto' && deposit.value.payment.network !== null && deposit.value.payment.network !== '') {
    //   Object.keys(current.value).map((a) => {
    //     if(a !== 'amount') {
    //       current.value[a] = false
    //     } else current.value[a] = true
    //   })
    // } else {
    //   error.value.network = 'This field is required'
    //   error.value.address = 'This field is required'
    // }
    if(Object.keys(error.value).every((err) => error.value[err] === '' || error.value[err] === null)) {
      const { data } = await useFetch(
        `${config.public.baseURL}/wallets/account`,
        {
          method: "POST",
          body: {
            account_type: deposit.value.payment.method,
            currency: deposit.value.wallet,
            holder_name: deposit.value.payment.account_name,
            bank_or_network: deposit.value.payment.bank ? deposit.value.payment.bank : deposit.value.payment.network,
            number_or_address: deposit.value.payment.account_number ? JSON.stringify(deposit.value.payment.account_number) : deposit.value.payment.address
          }
        }
      )
      if(data.value) {
        Object.keys(current.value).map((a) => {
          if(a !== 'amount') {
            current.value[a] = false
          } else current.value[a] = true
        })
      }
    }
  }
  const amountProceed = () => {
    if(amount.value !== null && amount.value !== 0 && amount.value !== '') {
      Object.keys(current.value).map((a) => {
        if(a !== 'transfer') {
          current.value[a] = false
        } else current.value[a] = true
      })
    } else {
      error.value.amount = 'Please input an amount'
    }
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
  }
  const changeView = (value) => {
    if(current.value.transfer === true) {
      Object.keys(current.value).map((a) => a === value ? current.value[a] = true : current.value[a] = false)
    } else if(Object.keys(current.value).every((a) => current.value[a] === false)) {
      current.value['wallet'] = true
    }
  }
  const setTransferOption = (val) => {
    transferOption.value = val === 'fiat' ? 'Bank transfer' : 'Cryptocurrency'
    Object.keys(error.value).map((val) => error.value[val] = '')
  }
  const copyURL = async (text) => {
    await navigator.clipboard.writeText(text)
    copy.value = true
    setTimeout(() => {
      copy.value = false
    }, 800)
  }
  const transfer = async () => {

  }
  const close = () => {
    Object.keys(current.value).map((a) => current.value[a] = false)
    console.log(current.value)
  }
</script>

<style>

</style>