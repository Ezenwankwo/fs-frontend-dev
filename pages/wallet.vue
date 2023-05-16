<template>
  <div>
    <!-- <ConvertModal /> -->
    <header class='home_main'>
      <!-- <Blog_nav /> -->
      
    <nav class='navbarClass' >
        <!-- <Notification_bar />
        <Sidenav /> -->
       <a to='/' class='logo_a'><img src="~/assets/logo.png" alt="wame" class='logo' /></a>
        <div class='sp'>
            <NuxtLink to='/blog_index' class='link no-underline'>Our blog</NuxtLink>
            <NuxtLink to='/contactus' class='link no-underline'>Contact us</NuxtLink>
            <NuxtLink to="/seller_up" class='link no-underline'>Become a seller</NuxtLink>
            <NuxtLink to='/P2PIndex' class='link no-underline'>P2P marketplace</NuxtLink>
        </div>
        <div class="user">
          <div class="n_icon" onClick={openNote}>
            <Icon name="ic:round-notifications-none" class="text-9xl" />
            <!-- <div class="not -mr-px"></div> -->
          </div>
          
          <div class="profile flex">
            <div  class='prof' onClick={handleProfile} ref={profRef}>
              <div class="user_descrpt">
                <p class="username">Maverick Egubson</p>
                <p class="usermail">maverick.eth@gmail.com</p>
              </div>
              <div class="userimage">
                <p class="me">ME</p>
                <div class="img"></div>
              </div>
              <Icon name="ic:baseline-keyboard-arrow-down" class="ml-2" />
            </div>
           <!-- {profModal &&   -->
            <div class="profile_modal" id='profile_modal' >
                <!-- <a to={-1} class='a'><i class="material-icons-outlined">person</i> My Profile</a>
                <a class='a'><i class="material-icons-outlined">payment</i> Deposit</a>
                <a class='a'><i class="material-icons-outlined">sell</i> Sell</a>
                <a class='a'><i class="material-icons-outlined">account_balance_wallet</i> Wallet</a>
                <a class='a'><i class="material-icons-outlined">insert_drive_file</i> Transaction history</a>
                <a class='a'><i class="material-icons-outlined">logout</i> Logout</a>
                 -->
              </div>
            <!-- } -->
          </div>
             
        </div>
      <Icon name="solar:hamburger-menu-line-duotone" class="text-4xl" />
        <!-- {/* <i class="x ii material-icons" id='x'>close</i> */} -->
  
    </nav>

        <div class="blg_main">
            <section class="sectionprof_top">
            <p class="p1">My Profile</p>
            <p class="p2">Wallet ID: <span> TNF/82T38RT904-01</span></p>
            </section>
            <section class="sectionu1">
                <div class='name_profile'>
                  <div class="grid grid-cols-2 gap-2">
                    <div class="u_img -ml-36">
                      <p class="txt">ME</p>
                      <!-- <div class="img" style=''></div> -->
                    </div>
                    <div class="u_txt -ml-52 w-64">
                      <p class="p1">
                        Mavrick Egbuson
                      </p>
                      <p class="p2">
                        @mavrick.eth
                      </p>
                    </div>
                  </div>
                </div>
                <div class="balance">
                  <div class="grid grid-cols-3 gap-4 pt-7">
                    <div class="-ml-20">
                      <Icon name="tabler:wallet" class="text-4xl"/>
                    </div>
                    <div>
                      <div class="flex">
                        <span class="txt">
                          <p class="p1">Total wallet value</p>
                          <p class="p2">₦254,328,723.00</p>
                        </span>
                        <Icon name="ic:outline-remove-red-eye" class="ml-40 -mt-6" />
                      </div>
                    </div>
                    <div class="grid grid-cols-2 gap-5">
                      <div class="ml-20">NGN</div>
                      <div class="ml-20">
                        <Icon name="ic:baseline-keyboard-arrow-down" class="ml-2" />
                      </div>
                    </div>
                  </div>
                    <!-- <img src={wallet_img} alt="" /> -->
                    
                    <!-- <MinDrp /> -->
                </div>
            </section>
            <section class="sectionu2">
              <a class='a a1' href="javascript:void(0)">View transaction history <Icon name="ic:baseline-arrow-forward-ios" class="ml-2" /></a>
              <span class='spa'>
                <a class='a a2' to='/WalletDepositAuth' >Make deposit</a>
                <a class='a a2' to='/WalletWithdrawAuth'>Withdraw</a>
                <a class='a a2' onClick={openNew}>Convert currency</a>
              </span>
            </section>
        </div>
    </header>
    <main class='blg_main blg_main2'>
          <section class="sectionbrk">
            <p class="p1">Breakdown</p>

            <!-- CURREENCY BREAKDOWN CARD -->
            <div class="brks">
                <div class='CurrencyBrkCard'>
                    <span class="img">
                        <img src="~/assets/country_img1.svg" alt="" />
                        <p class='esc'>Escrowed: 54328723</p>
                    </span>
                    
                    <div class="t1">Dollar <p class="tt1">USD</p> </div>
                    <div class="cr"><p class="crt">&#36; {{ Number(54328723).toLocaleString()}} </p> <Icon name="ic:outline-remove-red-eye" /> </div>
                </div>
                
            </div>
            <!-- ENDS HERE -->


          </section>
          
          <section class="sectiontable">
            <span class="top">
              <span class="txt"><p class="t1">Recent Transactions</p> <p class="t2">Your recent transactions</p></span>
              <span class="options">
                <p class='none'>Deposits</p>
                <p class='actit'>Withdrawals</p>
              </span>
            </span>
            <div class="deposits_div">

                <!-- DESKTOP TABLE VERSION -->

                <table class="DynamicTable" style='width: 100%; table-layout: auto;' >
                  <thead>
                    <tr>
                      <th class="dateTime">DateTime</th>
                      <th class="txnId">txnId</th>
                      <th>Type</th>
                      <th>Wallet</th>
                      <th>Source</th>
                      <th class="amt">Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                      <tr >



                        <td class="dateTime">
                            <p class='txt'>30 Jan 2023 | 15:43</p>
                        </td>
          
                        <td class="txnId">   
                           <span class="txn-id-wrapper">
                            <div class="txn-id-content">
                              <div class='txt'>TN-6t4872y387by3939bkjkgkhhgkhhh </div>
                              <span class="copy-icon" >
                                <Icon name="tabler:copy" />
                              </span>
                            </div>
                          </span>   
                           
                        </td>
          
                        <td class="typ">
                            <div  class="type credit text-center rounded-b-xl rounded-t-xl mr-7">
                              <p class="px-4">credit</p>
                            </div>
                          
                        </td>
          
                        <td class="walle">
                            <!-- Dollar -->
                            <div class='wallet'>
                                Dollar
                              <div class="currency">USD</div>
                            
                            </div>
                        </td>
          
                        <td class="source">
                            Access
                        </td>

                        <td class="amt">
                            <div class="">$1,500,000.00</div>
                        </td>

                        <td class="status">
                            <div class="type canceled text-center rounded-b-xl rounded-t-xl">canceled</div>
                            
                        </td>


                      </tr>
                  </tbody>
                </table>

                <!-- ENDS HERE -->
            

                <!-- MOBILE TABLE VERSION -->


                <div class="DynamicHistory" id="DynamicHistory">
                      <div  class="DynamicHistoryCrd" >
                        <div class="sect1">
                          <p class="source">Access</p>
                          <p class="amount"><i class="material-symbols-outlined">add</i> $100,000.00</p>
                        </div>
                        <div class="sect1">
                          <p class="dateTime">2023-03-29 10:23</p>
                          <p class='status pending'>pending</p>
                        </div>
                      </div>


                            <!-- DYNAMIC TABLE MOBILE MODAL -->
                        <div class="modal " id="DynamicHistoryModal">
                        <div class="modal-content">
                          <p class='bck' onclick="closeMobileTable()"><i class="material-symbols-outlined close" onClick={handleModalClose}>navigate_before</i> Go back</p>
                          
                          <span class="amount_div">
                            <div class="top"> <p class='status pending'>pending</p> </div>
                            <span class="amt">
                              <p class="amount"><i class="material-symbols-outlined">add</i> $100,000.00</p>
                              <span class="mindet">
                                <div class='typ'>Type <div class='type status debit' >Debit</div> </div>    
                                <div class='typ'>Transaction Amount <div class='sub-typ'> $100,000.00</div></div>    
                                <div class='typ'>Source <div class='sub-typ'>Access</div></div>    
              
                              </span>
                              <!-- {/* <p class={`status ${selectedRow.type}`}>{selectedRow.type}</p>  */} -->
                            </span>
                            <span class="details">
                              <div class='typ'>Date / Time <div class='sub-typ'>2023-03-29 10:23</div></div>
                              <div class='typ'>Txn ID <div class='sub-typ txn'><div class='p1'>TN-6t4872y387by3939bkjkgkhhgkhhh</div>
                              <Icon name="tabler:copy" /></div></div>
                            </span>
                          </span>

                        </div>
                      </div>
                        <!-- ENDS HERE  -->

                </div>


                <!-- ENDS HERE -->
            
            </div>
          </section>
    </main>

    <!-- FOOTER -->
      <footer>
        <div class="one">
            <span class="sp">
                <img src="~/assets/logo.png" alt="" class="logo" />
                <p class="t">Finstack is a non-profit organization or accept offers at your preferred rate on our Peer to peer marketplace.</p>
            </span>
            <span class="sp asp">
                <a href="" class="title">REACH US</a>
                <a to="/blog_index">our blog</a>
                <a to="/contactus">Contact us</a>
                <a to="/seller_up">Become a seller</a>
            </span>
            <span class="sp">
                <p class="tt1">Subscribe to our Newsletter</p>
                <p class="tt2">Never stay out of the loop.</p>
                <form action="">
                    <input type="email" name="" id="" placeholder='email@domain.co'/>
                    <button type="submit"><Icon name="tabler:arrow-narrow-right" /></button>
                </form>
            </span>
        </div>
        <div class="two">
            <span class="sp1">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-instagram"></i></a>
            </span>
            <span class="sp2">
                <a href="">Terms and conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">&copy; All rights reserved. Finstack 2022.</a>
            </span>
        </div>
    </footer>
<!-- ENDS HERE -->
  </div>
</template>

<script setup>

</script>

<style scoped>
.link {
  text-decoration: none;
}

</style>