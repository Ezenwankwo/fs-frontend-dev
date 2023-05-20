<template>
    <div>
        <!-- <ConvertModal /> -->
        <header class='home_main'>
            <!-- <Blog_nav /> -->
            <ExternalHeader />

            <div class="blg_main ">
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
                                <input class='inp' type="text" placeholder='1,000' />
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
                        <p>Date</p>
                        <RegularNoIconDrp placeholder='' options={status} />
                        <input type="text" class="filter_input" placeholder="Search date">
                    </label>
                    <label htmlFor="">
                        <p>Amount</p>
                        <input type="text" class="filter_input" placeholder="Enter amount">
                    </label>
                    <label htmlFor="">
                        <p>Status</p>
                        <input type="text" class="filter_input" placeholder="Pending">
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
                        <tr>
                            <td class="td1">
                                <div class="pdiv">
                                    <p class="uimg">ME</p>
                                    <div class="content">
                                        <p class="uname">Jane Cooper <img src='images/verified_img.svg' alt="" /></p>
                                        <p class="udescrpt">1040 orders • 99.60% completion</p>
                                    </div>
                                </div>
                            </td>

                            <td class="td2">
                                <div class="pdiv">
                                    <p class="uprice">735.90 <span>NGN</span></p>
                                </div>
                            </td>

                            <td class="td3">

                                <div class="pdiv">
                                    <div class="content">
                                        <p class="avail">Available <span>1000.45 USD</span></p>
                                        <p class="avail">Limit <span><span class="">₦</span>100,000 - <span
                                                    class="">₦</span>736,231.15 </span></p>
                                    </div>
                                </div>

                            </td>

                            <td class="td4">

                                <div class="listdiv2">
                                    <p>Gtbank</p>
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
                                    <div class="source">Jane Cooper</div> <img src='images/verified_img.svg' alt="" />
                                </div>
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
                            <p class='bck'><i class="material-symbols-outlined close"
                                >navigate_before</i> Go back</p>

                            <span class="amount_div">
                                <div class="top">
                                    <p class='status'>Jane Cooper</p> <img src='images/verified_img.svg' alt="" />
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