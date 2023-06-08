<template>
  <div>
    <header class="home_main">
      <nav class="nav-fixed">
        <div class="sidebar" id="sidebar">
          <div class="sd">
            <div class="main_sidenav">
              <header>
                <nav>
                  <a href="" class="logo_a">
                    <img src="~/assets/logo.png " alt="wame" class="logo" /></a><i class="x ii material-icons"
                    id="x">close</i>
                </nav>
              </header>
              <div class="nav_items">
                <span class="sp">
                  <a class="a" href="javascript:void(0)">Home <i class="material-icons">navigate_next</i></a>
                </span><span class="sp">
                  <a class="a" href="javascript:void(0)">Our blog <i
                      class="material-icons">navigate_next</i></a></span><span class="sp">
                  <a class="a" href="javascript:void(0)">Become a seller
                    <i class="material-icons">navigate_next</i></a></span><span class="sp">
                  <a class="a" href="javascript:void(0)">P2P marketplace<i
                      class="material-icons">navigate_next</i></a></span><span class="sp">
                  <a class="a" href="javascript:void(0)">Contact us</a></span><span class="sp">
                  <a class="a" href="javascript:void(0)">All currency listings</a></span>
                <div class="st">
                  <span class="sp1"><a href=""><i class="fa-brands fa-facebook"></i></a><a href=""><i
                        class="fa fa-twitter" aria-hidden="true"></i></a><a href=""><i class="fa fa-instagram"
                        aria-hidden="true"></i></a></span><span class="sp2"><a href="">Terms and conditions. Privacy
                      Policy</a><a href="">© All rights reserved. Finstack 2022.</a></span>
                </div>
              </div>
              <div class="in">
                <NuxtLink class="a" to="/login">
                  Sign in
                  <i class="material-icons">
                    <Icon name="ic:round-chevron-right" />
                  </i>
                </NuxtLink>
              </div>
            </div>
            <div class="products"></div>
          </div>
        </div>
        <a class="logo_a" href="/">
          <img src="~/assets/logo.png " alt="wame" class="logo" />
        </a>
        <!-- <div class="sp">
          <a class="link" href="/blog_index">Our blog</a><a class="link" href="/contactus">Contact us</a><a class="link"
            href="/seller_up">Become a seller</a><a class="link" href="/P2PIndex">P2P marketplace</a>
        </div> -->
        <span class="log">
          <NuxtLink class="link login" to="/login">Login</NuxtLink>
          <NuxtLink class="link signup" to="/signup">Get Started</NuxtLink>
        </span>
        <i class="i ii material-icons" id="i">
          <Icon name="ic:baseline-menu" />
        </i>
      </nav>
      <section class="sectioni1">
        <div class="div div1">
          <p class="txt1">BANKING THE UNBANKED</p>
          <h1>Currency Trading Made Simple and Easy</h1>
          <p class="txt2">
            Creating seamless exchange procedure for everyone. Buy, sell, save,
            trade and exchange fiat currencies with 3 simple steps.
          </p>
          <span class="links">
            <NuxtLink class="a1" to="/signup">Get Started</NuxtLink>
            <NuxtLink class="a2" to="/review_amount">Convert Currency
              <i class="material-icons">
                <Icon name="ic:round-chevron-right" />
              </i>
            </NuxtLink>
          </span>
        </div>
        <div class="div div2">
          <div class="inp">
            <p class="t1">Currency Converter</p>
            <p class="t2">Check live foreign currency exchange rates</p>
            <form action="" class="calculatorform">
              <div class="sp">
                <span class="sp1">
                  <p class="txt">I want to convert</p>
                  <input v-model.trim="amount" type="number" placeholder="1,000" class="input" @keyup="getRate"/>
                </span>
                <span class="sp1">
                  <p class="txt">Currency</p>
                  <select v-model.trim="fromCurrency" class="input select" @change="getRate">
                    <option v-for="item in currencies" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </span>
              </div>
              <span class="icon">
                <span class="line"></span>
                <img src="~/assets/two-arrow.png" alt="wae" class="arrow_img" />
              </span>
              <div class="sp">
                <span class="sp1">
                  <p class="txt">To</p>
                  <input v-model.trim="result" type="number" class="input" />
                </span>
                <span class="sp1">
                  <p class="txt">Currency</p>
                  <select v-model.trim="toCurrency" class="input select" @change="getRate">
                    <option v-for="item in currencies" :key="item" :value="item">
                      {{ item }}
                    </option>
                  </select>
                </span>
              </div>
              <p class="conv">1 {{ toCurrency }} = {{ rate }} {{ fromCurrency }}</p>
              <NuxtLink to="/review_amount" class="btn">Convert Currency</NuxtLink>
            </form>
          </div>
        </div>
      </section>
      <div class="div3">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill=" #0A1128" fill-opacity="1" d="M0,128L1440,320L1440,320L0,320Z"></path>
        </svg>
      </div>
    </header>
    <div class="Main">
      <section class="section_descrpt">
        <div>
          <div class="img"></div>
        </div>
        <div class="text">
          <p class="txt1">WE ARE ON AN INVALUABLE MISSION</p>
          <p class="txt2">Reducing the hassle of currency exchange</p>
          <span class="spans"><span class="bc"><img src="~/assets/icon_img1.svg" alt="wame" /></span><span class="txt">
              <p class="top">Peer to Peer Marketplace</p>
              <p class="btm">
                Create or accept offers at your preferred rate on our Peer to
                peer marketplace
              </p>
            </span></span><span class="spans"><span class="bc"><img src="~/assets/icon_img2.svg" alt="wame" /></span><span
              class="txt">
              <p class="top">Exchange Giftcards</p>
              <p class="btm">
                Create or accept offers at your preferred rate on our Peer to
                peer marketplace
              </p>
            </span></span><span class="spans"><span class="bc"><img src="~/assets/icon_img3.svg" alt="wame" /></span><span
              class="txt">
              <p class="top">Fast and Secure Transactions</p>
              <p class="btm">
                Create or accept offers at your preferred rate on our Peer to
                peer marketplace
              </p>
            </span></span><span class="spans"><span class="bc"><img src="~/assets/icon_img4.svg" alt="wame" /></span><span
              class="txt">
              <p class="top">24/7 Customer Support</p>
              <p class="btm">
                Create or accept offers at your preferred rate on our Peer to
                peer marketplace
              </p>
            </span></span><span class="links">
            <NuxtLink class="a1">Get Started</NuxtLink><a href="" class="a2">Start trading
              <i class="material-icons">
                <Icon name="ic:round-chevron-right" />
              </i></a>
          </span>
        </div>
      </section>
      <section class="section2">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill=" #0A1128" fill-opacity="1" d="M0,192L1440,64L1440,0L0,0Z"></path>
        </svg>
      </section>
      <ClientOnly>
        <section class="section3">
          <div class="top">
            <span class="sp1">
              <p class="t1">Currency Price Listings</p>
              <p>
                <Icon name="bi:calendar" /> Last Updated: Feb 02, 2023
              </p>
            </span>
            <form>
              <select>
                <option class="opt">Select Currency</option>
                <option value="" v-for="currency in currencies" :key="currency">
                  {{ currency }}
                </option>
              </select>
            </form>
          </div>
          <div class="wame">
            <div class="items">
              <div class="lists top_lists">
                <p class="c c1"><span>Currency</span></p>
                <p class="c c2"><span>Price</span></p>
                <p class="c c3"><span>Change</span></p>
                <p class="c c4"> </p>
              </div>
              <!-- <div class="lists" v-for="curr in currChange" :key="curr">
              <p class="c c1">
                <img src="~/assets/country_img1.svg" alt="" />
                <a class="ct2">
                  <h4>{{ curr.name }}</h4>
                  <span>{{ curr.abbv }}</span>
                </a>
              </p>
              <p class="c c2">
                <a class="price" href="javascript:void(0)"><span class="N">{{ curr.price }}</span></a>
              </p>
              <p class="c c3">
                <span class="perct">{{ curr.change }}</span>
              </p>
              <p class="c c4">
                <NuxtLink to="/signup">
                  <span>Buy/Sell</span>
                  <Icon name="ic:round-chevron-right" />
                </NuxtLink>
              </p>
            </div> -->
              <NuxtLink class="lists"><span class="c c1"><img src="~/assets/country_img1.svg" alt="" />
                  <span class="ct2">
                    <h4>Dollar</h4>
                    <p>USD</p>
                  </span></span><span class="c c2">
                  <p class="price"><span class="N">₦ 730</span></p>
                </span><span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <span class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </span>
              </NuxtLink>
              <NuxtLink class="lists"><span class="c c1"><img src="~/assets/country_img2.svg" alt="" />
                  <span class="ct2">
                    <h4>Pounds</h4>
                    <p>GBP</p>
                  </span></span><span class="c c2">
                  <p class="price"><span class="N">₦</span> 905</p>
                </span><span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
              <NuxtLink class="lists"><span class="c c1"><img src="~/assets/nigeria.png" alt="" class="rounded-full" />
                  <span class="ct2">
                    <h4>Naira</h4>
                    <p>NGN</p>
                  </span></span><span class="c c2">
                  <p class="price"><span class="N">₦ 745</span></p>
                </span><span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
              <NuxtLink class="lists"><span class="c c1"><img src="~/assets/country_img4.svg" alt="" />
                  <span class="ct2">
                    <h4>Ethereum</h4>
                    <p>ETH</p>
                  </span></span><span class="c c2">
                  <p class="price"><span class="N">₦ 730</span></p>
                </span><span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
              <NuxtLink class="lists"><span class="c c1"><img src="~/assets/country_img5.svg" alt="" />
                  <span class="ct2">
                    <h4>USDT</h4>
                    <p>USDT</p>
                  </span></span><span class="c c2">
                  <p class="price"><span class="N">₦ 730</span></p>
                </span><span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
            </div>
            <div class="items">
              <div class="lists top_lists top_lists2">
                <span class="c c1">
                  <p>Currency</p>
                </span><span class="c c2">
                  <p>Price</p>
                </span><span class="c c3">
                  <p>Change</p>
                </span>
              </div>
              <NuxtLink class="lists"><span class="c c1"><img src="~/assets/country_img3.svg" alt="" />
                  <span class="ct2">
                    <h4>Euro</h4>
                    <p>EUR</p>
                  </span></span><span class="c c2">
                  <p class="price"><span class="N">₦ 745</span></p>
                </span><span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
              <NuxtLink class="lists"><span class="c c1"><img src="~/assets/Binance-BNB-Icon-Logo.wine.svg" alt="" />
                  <span class="ct2">
                    <h4>BNB</h4>
                    <p>BNB</p>
                  </span></span><span class="c c2">
                  <p class="price"><span class="N">₦ 905</span></p>
                </span><span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
              <NuxtLink class="lists"><span class="c c1"><img src="~/assets/litecoin-ltc-logo.svg" alt="" />
                  <span class="ct2">
                    <h4>Lite coin</h4>
                    <p>LTC</p>
                  </span></span><span class="c c2">
                  <p class="price"><span class="N">₦ 745</span></p>
                </span><span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
              <NuxtLink to="/signup" class="lists">
                <span class="c c1"><img src="~/assets/country_img5.svg" alt="" />
                  <span class="ct2">
                    <h4>USDT</h4>
                    <p>USDT</p>
                  </span></span>
                <span class="c c2">
                  <p class="price">
                    <span class="N">₦ 730</span>
                  </p>
                </span>
                <span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
              <NuxtLink to="/signup" class="lists">
                <span class="c c1"><img src="~/assets/country_img5.svg" alt="" />
                  <span class="ct2">
                    <h4>USDT</h4>
                    <p>USDT</p>
                  </span></span>
                <span class="c c2">
                  <p class="price">
                    <span class="N">₦ 730</span>
                  </p>
                </span>
                <span class="c c3">
                  <p class="perct">+0.87%</p>
                </span>
                <div class="c c4">
                  <NuxtLink to="/signup">
                    <p>Buy/Sell</p>
                    <Icon name="ic:round-chevron-right" />
                  </NuxtLink>
                </div>
              </NuxtLink>
            </div>
          </div>
          <div class="see">
            <a href="/listings">See all Listings
              <i class="material-icons">
                <Icon name="ic:round-chevron-right" />
              </i></a>
          </div>
        </section>
      </ClientOnly>
      <section class="section4">
        <p class="t1">3 EASY STEPS</p>
        <p class="t2">How It Works</p>
        <p class="t3">
          Create or accept offers at your preferred rate on our Peer to peer
          marketplace
        </p>
        <div class="fl">
          <span>
            <div class="box">
              <img src="~/assets/icon_img5.svg" alt="wame" />
            </div>
            <p class="txt1">Select currency pair</p>
            <p class="t">
              Create or accept offers at your preferred rate on our Peer to peer
              marketplace offers at your preferred
            </p>
          </span><span>
            <div class="box">
              <img src="~/assets/icon_img6.svg" alt="wame" />
            </div>
            <p class="txt1">Transfer Local Money</p>
            <p class="t">
              Create or accept offers at your preferred rate on our Peer to peer
              marketplace offers at your preferred
            </p>
          </span><span>
            <div class="box">
              <img src="~/assets/icon_img7.svg" alt="wame" />
            </div>
            <p class="txt1">Receive funds</p>
            <p class="t">
              Create or accept offers at your preferred rate on our Peer to peer
              marketplace offers at your preferred
            </p>
          </span>
        </div>
      </section>
      <section class="section5">
        <p class="t1">TESTIMONIAL</p>
        <p class="t2">Hear what our customers say about us</p>
        <div class="twit">
          <div class="sp">
            <div>
              <div class="twitter-tweet twitter-tweet-rendered" style="
                  width: 100%;
                  margin-left: 10px;
                  float: right;
                  display: flex;
                  max-width: 350px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                ">
                <iframe id="twitter-widget-0" scrolling="no" frameborder="0" allowtransparency="true"
                  allowfullscreen="true" class="" title="Twitter Tweet"
                  src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-0&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19iaXJkd2F0Y2hfcGl2b3RzX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd191c2VfcHJvZmlsZV9pbWFnZV9zaGFwZV9lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19sZWdhY3lfdGltZWxpbmVfc3Vuc2V0Ijp7ImJ1Y2tldCI6dHJ1ZSwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideCard=true&amp;hideThread=true&amp;id=1636672121429524480&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A3000%2F&amp;sessionId=0672f6d150c289d10a5dff756a6b552da6e406a5&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=350px"
                  style="
                    position: static;
                    visibility: visible;
                    width: 0px;
                    height: 0px;
                    display: block;
                    flex-grow: 1;
                  " data-tweet-id="1636672121429524480"></iframe>
              </div>
            </div>
            <div>
              <div class="twitter-tweet twitter-tweet-rendered" style="
                  width: 100%;
                  margin-left: 10px;
                  float: right;
                  display: flex;
                  max-width: 350px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                ">
                <iframe id="twitter-widget-1" scrolling="no" frameborder="0" allowtransparency="true"
                  allowfullscreen="true" class="" title="Twitter Tweet"
                  src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-1&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19iaXJkd2F0Y2hfcGl2b3RzX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd191c2VfcHJvZmlsZV9pbWFnZV9zaGFwZV9lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19sZWdhY3lfdGltZWxpbmVfc3Vuc2V0Ijp7ImJ1Y2tldCI6dHJ1ZSwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideCard=true&amp;hideThread=false&amp;id=1638835223692734464&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A3000%2F&amp;sessionId=0672f6d150c289d10a5dff756a6b552da6e406a5&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=350px"
                  style="
                    position: static;
                    visibility: visible;
                    width: 0px;
                    height: 0px;
                    display: block;
                    flex-grow: 1;
                  " data-tweet-id="1638835223692734464"></iframe>
              </div>
            </div>
          </div>
          <div class="sp">
            <div>
              <div class="twitter-tweet twitter-tweet-rendered" style="
                  width: 100%;
                  margin-left: 10px;
                  float: right;
                  display: flex;
                  max-width: 350px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                ">
                <iframe id="twitter-widget-2" scrolling="no" frameborder="0" allowtransparency="true"
                  allowfullscreen="true" class="" title="Twitter Tweet"
                  src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-2&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19iaXJkd2F0Y2hfcGl2b3RzX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd191c2VfcHJvZmlsZV9pbWFnZV9zaGFwZV9lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19sZWdhY3lfdGltZWxpbmVfc3Vuc2V0Ijp7ImJ1Y2tldCI6dHJ1ZSwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideCard=false&amp;hideThread=false&amp;id=1638835223692734464&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A3000%2F&amp;sessionId=0672f6d150c289d10a5dff756a6b552da6e406a5&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=350px"
                  style="
                    position: static;
                    visibility: visible;
                    width: 0px;
                    height: 0px;
                    display: block;
                    flex-grow: 1;
                  " data-tweet-id="1638835223692734464"></iframe>
              </div>
            </div>
          </div>
          <div class="sp">
            <div>
              <div class="twitter-tweet twitter-tweet-rendered" style="
                  width: 100%;
                  margin-left: 10px;
                  float: right;
                  display: flex;
                  max-width: 350px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                ">
                <iframe id="twitter-widget-3" scrolling="no" frameborder="0" allowtransparency="true"
                  allowfullscreen="true" class="" title="Twitter Tweet"
                  src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-3&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19iaXJkd2F0Y2hfcGl2b3RzX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd191c2VfcHJvZmlsZV9pbWFnZV9zaGFwZV9lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19sZWdhY3lfdGltZWxpbmVfc3Vuc2V0Ijp7ImJ1Y2tldCI6dHJ1ZSwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideCard=true&amp;hideThread=true&amp;id=1636672121429524480&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A3000%2F&amp;sessionId=0672f6d150c289d10a5dff756a6b552da6e406a5&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=350px"
                  style="
                    position: static;
                    visibility: visible;
                    width: 0px;
                    height: 0px;
                    display: block;
                    flex-grow: 1;
                  " data-tweet-id="1636672121429524480"></iframe>
              </div>
            </div>
            <div>
              <div class="twitter-tweet twitter-tweet-rendered" style="
                  width: 100%;
                  margin-left: 10px;
                  float: right;
                  display: flex;
                  max-width: 350px;
                  margin-top: 10px;
                  margin-bottom: 10px;
                ">
                <iframe id="twitter-widget-4" scrolling="no" frameborder="0" allowtransparency="true"
                  allowfullscreen="true" class="" title="Twitter Tweet"
                  src="https://platform.twitter.com/embed/Tweet.html?dnt=true&amp;embedId=twitter-widget-4&amp;features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfbWl4ZWRfbWVkaWFfMTU4OTciOnsiYnVja2V0IjoidHJlYXRtZW50IiwidmVyc2lvbiI6bnVsbH0sInRmd19leHBlcmltZW50c19jb29raWVfZXhwaXJhdGlvbiI6eyJidWNrZXQiOjEyMDk2MDAsInZlcnNpb24iOm51bGx9LCJ0Zndfc2hvd19iaXJkd2F0Y2hfcGl2b3RzX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2R1cGxpY2F0ZV9zY3JpYmVzX3RvX3NldHRpbmdzIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd191c2VfcHJvZmlsZV9pbWFnZV9zaGFwZV9lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd192aWRlb19obHNfZHluYW1pY19tYW5pZmVzdHNfMTUwODIiOnsiYnVja2V0IjoidHJ1ZV9iaXRyYXRlIiwidmVyc2lvbiI6bnVsbH0sInRmd19sZWdhY3lfdGltZWxpbmVfc3Vuc2V0Ijp7ImJ1Y2tldCI6dHJ1ZSwidmVyc2lvbiI6bnVsbH0sInRmd190d2VldF9lZGl0X2Zyb250ZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH19&amp;frame=false&amp;hideCard=true&amp;hideThread=false&amp;id=1638835223692734464&amp;lang=en&amp;origin=http%3A%2F%2Flocalhost%3A3000%2F&amp;sessionId=0672f6d150c289d10a5dff756a6b552da6e406a5&amp;theme=light&amp;widgetsVersion=aaf4084522e3a%3A1674595607486&amp;width=350px"
                  style="
                    position: static;
                    visibility: visible;
                    width: 0px;
                    height: 0px;
                    display: block;
                    flex-grow: 1;
                  " data-tweet-id="1638835223692734464"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section6">
        <div class="content">
          <div><span class="img"></span></div>
          <div class="text">
            <p class="t1">BECOME A SELLER</p>
            <p class="t2">
              Become a Seller. Place your offer on the Peer 2 Peer Marketplace
            </p>
            <p class="t3">
              Create or accept offers at your preferred rate on our Peer to peer
              marketplace Create or accept offers at your preferred rate on our
              Peer to peer marketplaceCreate or accept offers at your preferred
              rate on our Peer to peer marketplace
            </p>
            <span class="links"><a class="a1" href="/seller_up">Start registration</a><a class="a2" href="/">Start
                selling
                <i class="material-icons">
                  <Icon name="ic:round-chevron-right" />
                </i> </a></span>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#ffff" fill-opacity="1" d="M0,320L1440,96L1440,320L0,320Z"></path>
        </svg>
      </section>
      <section class="section7" id="FAQ">
        <div class="content">
          <div class="sp">
            <div class="txt">
              <p class="t1">Frequently Asked Questions</p>
              <p class="t2">
                Create or accept offers at your preferred rate on our Peer to
                peer marketplace Create or accept offers.
              </p>
            </div>
            <div class="scp" v-for="(faq, index) in faqs" :key="index" @click="toggleAccordion(index)">
              <a class="top">{{ faq.question
              }}<i class="material-icons">
                  <Icon name="ic:baseline-keyboard-arrow-down" />
                </i></a>
              <div class="" v-show="faq.isOpen" style="padding: 20px; text-align: start">
                <p class="text-start">{{ faq.answer }}</p>
              </div>
            </div>
            <!-- <div class="scp">
              <a class="top"
                >How does Finstack really work?<i class="material-icons"
                  ><Icon name='ic:baseline-keyboard-arrow-down' /></i
                ></a
              >
              <div class="answer_none" id="oo">
                <p class="det">
                  Create or accept offers at your preferred rate on our Peer to
                  peer marketplace Create or accept offers.Create or accept
                  offers at your preferred rate on our Peer to peer marketplace
                  Create or accept offers.1
                </p>
              </div>
            </div>
            <div class="scp">
              <a class="top"
                >How does Finstack really work?<i class="material-icons"
                  ><Icon name='ic:baseline-keyboard-arrow-down' /></i
                ></a
              >
              <div class="answer_none" id="oo">
                <p class="det">Create or a Lorem ipsum dolor sit amet.</p>
              </div>
            </div> -->
          </div>
          <!-- <div class="sp">
            <div class="scp">
              <a class="top"
                >How does Finstack really work?<i class="material-icons"
                  ><Icon name='ic:baseline-keyboard-arrow-down' /></i
                ></a
              >
              <div class="answer_none" id="oo">
                <p class="det">Create or a Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="scp">
              <a class="top"
                >How does Finstack really work?<i class="material-icons"
                  ><Icon name='ic:baseline-keyboard-arrow-down' /></i
                ></a
              >
              <div class="answer_none" id="oo">
                <p class="det">
                  Create or accept offers at your preferred rate on our Peer to
                  peer marketplace Create or accept offers.Create or accept
                  offers at your preferred rate on our Peer to peer marketplace
                  Create or accept offers.1
                </p>
              </div>
            </div>
            <div class="scp">
              <a class="top"
                >How does Finstack really work?<i class="material-icons"
                  ><Icon name='ic:baseline-keyboard-arrow-down' /></i
                ></a
              >
              <div class="answer_none" id="oo">
                <p class="det">Create or a Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="scp">
              <a class="top"
                >How does Finstack really work?<i class="material-icons"
                  ><Icon name='ic:baseline-keyboard-arrow-down' /></i
                ></a
              >
              <div class="answer_none" id="oo">
                <p class="det">Create or a Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
            <div class="scp">
              <a class="top"
                >How does Finstack really work?<i class="material-icons"
                  ><Icon name='ic:baseline-keyboard-arrow-down' /></i
                ></a
              >
              <div class="answer_none" id="oo">
                <p class="det">Create or a Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </div> -->
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#0A1128" fill-opacity="1" d="M0,160L1440,288L1440,320L0,320Z"></path>
        </svg>
      </section>
      <section class="section8">
        <div class="top">
          <span class="sp">
            <p class="t1">Stay up to date</p>
            <p class="t2">
              Stay on the grind. Stay on the grind. Stay on the grind
            </p>
          </span><a href="/blog_index">
            <p>View all updates</p>
            <i class="material-icons">
              <Icon name="ic:round-chevron-right" />
            </i>
          </a>
        </div>
        <div class="content">
          <a href="/blog_index">
            <!-- <div
              class="img"
              style="background-image: url('~/assets/img1.jpg');"
            ></div> -->
            <img src="~/assets/img1.jpg" alt="">
            <p class="t1">CBN on Digital Asset Tax</p>
            <p class="t2">
              Create or accept offers at your preferred rate on our Peer to peer
              marketplace Create or...
            </p>
            <p class="t3">
              Read more
              <i class="material-icons">
                <Icon name="ic:round-chevron-right" />
              </i>
            </p>
          </a><a href="/blog_index">
            <!-- <div
              class="img"
              style="
                background-image: url('~/assets/img2.jpg');
              "
            ></div> -->
            <img src="~/assets/img2.jpg" alt="">
            <p class="t1">Future of Gold and Silver</p>
            <p class="t2">
              Create or accept offers at your preferred rate on our Peer to peer
              marketplace Create or...
            </p>
            <p class="t3">
              Read more
              <i class="material-icons">
                <Icon name="ic:round-chevron-right" />
              </i>
            </p>
          </a><a href="/blog_index">
            <!-- <div
              class="img"
              style="
                background-image: url('~/assets/img3.jpg');
              "
            ></div> -->
            <img src="~/assets/img3.jpg" alt="">
            <p class="t1">Impact of Emmigration on Currency</p>
            <p class="t2">
              Create or accept offers at your preferred rate on our Peer to peer
              marketplace Create or...
            </p>
            <p class="t3">
              Read more
              <i class="material-icons">
                <Icon name="ic:round-chevron-right" />
              </i>
            </p>
          </a>
        </div>
      </section>
      <section class="section9">
        <div class="back">
          <!-- <img
            src="/static/media/big_logo.2262ec201d33c61112541fa86399cdfe.svg"
            alt=""
          /><img
            src="/static/media/big_logo.2262ec201d33c61112541fa86399cdfe.svg"
            alt=""
            class="img2"
          /> -->
        </div>
        <div class="text">
          <p class="t1">Ready to join the train?</p>
          <p class="t2">One - liner body text comes here</p>
          <NuxtLink>Create a free account</NuxtLink>
        </div>
      </section>
    </div>

    <footer>
      <div class="one">
        <span class="sp"><img src="~/assets/logo.png" alt="" class="logo" />
          <p class="t">
            Finstack is a non-profit organization or accept offers at your
            preferred rate on our Peer to peer marketplace.
          </p>
        </span><span class="sp asp"><a href="" class="title">REACH US</a><a href="/blog_index">our blog</a><a
            href="/contactus">Contact us</a><a href="/seller_up">Become a seller</a></span><span class="sp">
          <p class="tt1">Subscribe to our Newsletter</p>
          <p class="tt2">Never stay out of the loop.</p>
          <form action="">
            <input type="email" name="" id="" placeholder="email@domain.co" /><button type="submit"><i
                class="material-icons">east</i></button>
          </form>
        </span>
      </div>
      <div class="two">
        <span class="sp1"><a href=""><i class="fa-brands fa-facebook"></i></a><a href=""><i class="fa fa-twitter"
              aria-hidden="true"></i></a><a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a></span><span
          class="sp2"><a href="">Terms and conditions</a><a href="">Privacy Policy</a><a href="">© All rights reserved.
            Finstack 2022.</a></span>
      </div>
    </footer>

    <iframe scrolling="no" frameborder="0" allowtransparency="true"
      src="https://platform.twitter.com/widgets/widget_iframe.2b2d73daf636805223fb11d48f3e94f7.html?origin=http%3A%2F%2Flocalhost%3A3000"
      title="Twitter settings iframe" style="display: none"></iframe><iframe id="rufous-sandbox" scrolling="no"
      frameborder="0" allowtransparency="true" allowfullscreen="true" style="
        position: absolute;
        visibility: hidden;
        display: none;
        width: 0px;
        height: 0px;
        padding: 0px;
        border: none;
      " title="Twitter analytics iframe"></iframe>
  </div>
</template>

<script setup>
import { useConversionStore } from "~~/store/conversion";
definePageMeta({
  layout: "external",
});

const fromCurrency = ref("NGN");
const toCurrency = ref("USD");
const amount = ref(1000);
const result = ref(0);
const rate = ref(0);
const config = useRuntimeConfig();
const currencies = ref([]);

const faqs = ref([
  {
    question: "What services does your platform offer?",
    isOpen: false,
    answer:
      "Our platform specializes in cryptocurrency exchange, gift card trading (coming soon) money conversion services. We provide a secure and user-friendly environment for buying, selling, and trading cryptocurrencies, as well as converting money between different fiat currencies and payment methods.",
  },
  {
    question: "How can I create an account on your platform? ",
    isOpen: false,
    answer:
      "To create an account, simply visit our website and click on the 'Sign Up' button. Fill in the required information, including your email address and password, and complete the registration process. Once registered, you can access all the features and functionalities of our platform.",
  },
  {
    question: "What currency and cryptocurrencies are available for trading on your platform?",
    isOpen: false,
    answer:
      "We offer US Dollar (USD), Euro (EUR), Great Britain Pounds (GBP), Chinese Yuan (CNY), Central African CFA Franc (XAF) West African CFA Franc (XOF) Canadian Dollars (CAD) United Arab Emirate Dirham (AED), Ghana Cedi (GHS), Bitcoin (BTC), Ethereum (ETH), US Dollar Tether (USDT), Ripple (XRP). Our platform continually adds new currency and cryptocurrencies to provide a diverse selection for our users.",
  },
  {
    question: "How can I trade/convert/exchange funds into my account?",
    isOpen: false,
    answer:
      "You can trade/convert/exchangt funds into your account using various payment methods, including bank transfers, credit/debit cards, and electronic wallets. Simply navigate to the 'Deposit' section of your account, choose your preferred payment method, and follow the provided instructions to initiate the deposit.",
  },
  {
    question: "How long does it take to process transactions on your platform?",
    isOpen: false,
    answer:
      "The processing time for transactions may vary depending on several factors, including blockchain confirmations (for cryptocurrency transactions), network congestion, and the verification process. In general, transactions are processed within minutes to a few hours. However, please note that under certain circumstances, additional time may be required to ensure the security and accuracy of the transaction.",
  },
  {
    question: "Are there any transaction fees associated with using your platform? ",
    isOpen: false,
    answer:
      "Yes, our platform charges transaction fees, which may vary depending on the type of transaction, currency pair, and other factors. The applicable fees are transparently displayed during the transaction process, allowing you to review and confirm them before completing the transaction.",
  },
  {
    question: "Can I convert money between different fiat currencies on your platform? ",
    isOpen: false,
    answer:
      "Absolutely! Our platform allows you to convert money between various fiat currencies, offering a convenient solution for currency exchange. You can initiate the conversion by selecting the desired currencies and entering the amount you wish to convert.",
  },
  {
    question: "What should I do if the currency I want to convert is not available? ",
    isOpen: false,
    answer:
      "If the currency you wish to convert is currently not supported on our platform, we recommend reaching out to our customer support team for assistance. Please use the provided contact information to get in touch with us, and we will be happy to help you find a suitable solution.",
  },
  {
    question: "Is my personal and financial information secure on your platform?",
    isOpen: false,
    answer:
      "We prioritize the security and privacy of our users' information. Our platform implements robust security measures, including encryption protocols and multi-factor authentication, to safeguard your personal and financial data. We adhere to strict privacy policies and do not share your information with third parties without your consent.",
  },
]);

const toggleAccordion = (index) => {
  faqs.value.map((faq, i) => (i !== index ? (faq.isOpen = false) : true));
  faqs.value[index].isOpen = !faqs.value[index].isOpen;
}

const currChange = ref([
  { name: "Dollar", abbv: "USD", src: "~/assets/country_img1.svg", price: "₦ 730", change: "+0.87%" },
  { name: "Pounds", abbv: "GBP", src: "~/assets/country_img2.svg", price: "₦ 905", change: "+0.87%" },
  { name: "Naira", abbv: "NGN", src: "~/assets/nigeria.png", price: "₦ 745", change: "+0.87%" },
  { name: "Ethereum", abbv: "ETH", src: "~/assets/country_img4.svg", price: "₦ 730", change: "+0.87%" },
  { name: "USDT", abbv: "USDT", src: "~/assets/country_img5.svg", price: "₦ 730", change: "+0.87%" },
])

onMounted(async () => {
  await nextTick(async () => {
    const { data, pending, error, refresh } = await useFetch(
      `${config.public.baseURL}/trades/converter/`,
      {
        method: "post",
        body: {
          from_currency: fromCurrency.value,
          to_currency: toCurrency.value,
          amount: amount.value,
        },
        onResponse({ request, response, options }) {
          const data = response._data.data;
          data.amount = amount.value;
          useConversionStore().setExchange(data);
          result.value = useConversionStore().$state.exchange.value;
          rate.value = useConversionStore().$state.exchange.rate;
        },
      }
    );
    const currenciesRes = await useFetch(
      `${config.public.baseURL}/trades/currencies/`,
      {
        method: "get",
        onResponse({ request, response, options }) {
          currencies.value = response._data.data;
        },
      }
    );
  });
});
const getRate = () => {
  const res = useFetch(`${config.public.baseURL}/trades/converter/`, {
    method: "post",
    body: {
      from_currency: fromCurrency.value,
      to_currency: toCurrency.value,
      amount: amount.value,
    },
    onRequestError({ request, options, error }) {
      // console.log('request error')
    },
    onResponse({ request, response, options }) {
      const data = response._data.data;
      data.amount = amount.value;
      useConversionStore().setExchange(data),
        (result.value = useConversionStore().$state.exchange.value);
      rate.value = useConversionStore().$state.exchange.rate;
    },
    onResponseError({ request, response, options }) {
      useNotification().toast.error(response._data.message);
    },
  });
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Open sans", sans-serif;
  text-decoration: none;
  letter-spacing: 0px;
  transition: 300ms;
  -webkit-tap-highlight-color: transparent;
  /* background-color: white; */
}

nav {
  /* background: #fff; */
  z-index: 1;
  width: 100vw;
  /* border-bottom: solid 1px silver; */
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 0 7%;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.98);
  box-shadow: 5px -1px 12px -5px grey;
  /* height: 85px; */
  /* top: 0;  */
  /* z-index: 2; */
  /* overflow: hidden; */
  /* background-color: black; */
  /* backdrop-filter: blur(5px); */
  /* max-width: 2000px; */
  /* margin: 0 auto; */
  justify-self: center;
}

.home_main {
  background-image: url("~/assets/Rectangle_3.jpg");
}

header section .div1 .txt1 {
  font-family: "lora", sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #890620;
}

footer {
  padding: 0 20px;
}

.logo {
  height: 55px;
  width: 55px;
  margin: 0;
}

.logo_a {
  margin-right: 40px;
  display: flex;
  align-items: center;
}

.sp .link {
  margin: 0 15px;
  color: #1f1f1f;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
}

.sp .link:hover {
  color: #2f67fa;
}

.log {
  margin-left: auto;
}

.log .link {
  padding: 9px 24px;
  border-radius: 30px;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
}

.login {
  color: #2f67fa;
  margin-right: 20px;
  font-weight: 500;
}

.signup {
  /* border: solid 1px silver; */
  /* background-color: #2F67FA; */
  background-color: #2f67fa;
  color: white;
  font-size: 16px;
}

.signup:hover {
  background-color: rgb(37, 150, 190, 0.8);
}

/* .material-icons{
    display: none;
} */

.i {
  display: none !important;
  /* border: solid; */
}

.x {
  margin-left: auto;
  display: none !important;
  color: #2f67fa;
}

@media screen and (max-width: 1100px) {
  nav {
    padding: 0 5%;
  }
}

@media screen and (max-width: 1000px) {
  /* nav{
        padding: %;   
    } */

  .sp {
    display: none;
  }

  .log {
    margin-right: auto;
  }

  .i {
    color: #2f67fa;
    display: flex !important;
  }
}

@media screen and (max-width: 600px) {
  nav {
    padding: 0 7%;
  }

  .logo_a {
    margin-right: auto;
  }

  .log {
    display: none;
  }

  .i {
    color: white;
    background-color: #2f67fa;
    border-radius: 100%;
    padding: 10px;
    font-size: 16px !important;
    display: flex !important;
  }
}

header {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  height: fit-content;
  /* background-image: url(/src/Assets/Components/images/back_pic.svg); */
}

header section {
  width: 100%;
  /* height: ; */
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10% 7%;
  padding-bottom: 0%;
}

header section div {
  width: 52%;
  /* border: solid; */
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

header section .div1 {
  width: 48%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

header section .div1 .txt1 {
  font-family: "lora", sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #890620;
}

header section .div1 h1 {
  font-family: "lora", sans-serif;
  font-weight: 700;
  font-weight: 700;
  font-size: 48px;
  line-height: 140%;
  color: #0a1128;
  margin: 22px 0;
}

header section .div1 .txt2 {
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #373d4a;
  width: 88%;
}

header section .div1 .links {
  display: flex;
  align-items: center;
  margin-top: 32px;
}

header section .div1 .links a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 30px;
  border-radius: 60px;
  font-size: 16px;
  height: 56px;
}

header section .div1 .links .a1 {
  background-color: #2f67fa;
  color: white;
  border: solid 2px #2f67fa;
}

header section .div1 .links .a2 {
  border: solid 2px #2f67fa;
  color: #2f67fa;
  margin-left: 12px;
  font-weight: 500;
}

header section .div1 .links .a2 i {
  font-size: 30px;
  font-weight: 100 !important;
}

header section .div2 {
  align-items: flex-end;
}

header section .div2 .inp {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0 30px;
  padding-top: 25px;
  /* gap: 8px; */
  /* height: 100%; */
  background: #ffffff;
  box-shadow: 0px 0px 32px rgba(47, 103, 250, 0.12);
  border-radius: 25px;
  height: fit-content;
  width: 500px;
  /* border: solid blue; */
}

header section .div2 .inp .t1 {
  font-family: "lora", sans-serif;
  font-size: 22px;
  font-weight: 600;
  color: #373d4a;
  text-align: center;
}

header section .div2 .inp .t2 {
  font-size: 14px;
  color: #7c859d;
  margin-top: 8px;
  text-align: center;
}

header section .div2 .inp form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 40px 0;
  height: 100%;
  /* border: solid; */
}

header section .div2 .inp form .sp {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  /* border: solid; */
}

header section .div2 .inp form .sp .sp1 {
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: center;
  width: 46%;
  /* border: solid; */
}

header section .div2 .inp form .sp .sp1 .txt {
  font-weight: 400;
  font-size: 14px;
  color: #373d4a;
  margin-bottom: 10px;
}

header section .div2 .inp form .sp .sp1 .input {
  width: 100%;
  border-radius: 48px;
  height: 50px;
  border: none;
  border: 1px solid #dcdee5;
  transition: 100ms;
  outline: none;
  padding: 0 20px;
  font-size: 15px;
  font-weight: 400;
  color: #373d4a;
}

header section .div2 .inp form .sp .sp1 .input:focus {
  border: 1.5px solid #c5c8cf;
}

header section .div2 .inp form .sp .sp1 .select {
  /* border: solid blue ; */
  /* outline: blue !important; */
  background-color: white;
  cursor: pointer;
}

.opt {
  background-color: pink;
  padding: 10px 0;
}

header section .div2 .inp form .icon {
  width: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  /* outline: solid 0.1px #7C859D; */
  /* border: solid; */
  transform: rotate(90deg);
  margin: 20px 0;
}

header section .div2 .inp form .icon .line {
  width: 80px;
  position: absolute;
  outline: solid 0.1px #dcdee5a2;
  outline-width: 0.01px;
}

header section .div2 .inp form .icon .arrow_img {
  position: relative;
  width: 35px;
  height: 35px;
  padding: 6px;
  border: solid 0.3px #dcdee5;
  border-radius: 100%;
  background-color: white;
}

header section .div2 .inp form .conv {
  padding: 10px 15px;
  background-color: #ebf0ff;
  border-radius: 30px;
  margin: 30px 0;
  color: #2f67fa;
}

header section .div2 .inp form .btn {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 55px;
  background-color: #2f67fa;
  border-radius: 30px;
  border: none;
  color: white;
  font-size: 16px;
  cursor: pointer;
}

/* header section .div2 .inp form button:hover {
    
} */

header .div3 {
  width: 100%;
  margin-top: -70px;
}

header .div3 svg {
  display: block;
}

.Main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: white;
}

.Main section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100% !important;
  /* border: solid; */
}

.Main .section_descrpt {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #0a1128;
  height: fit-content;
  width: 100%;
  padding: 60px;
  margin: -0.3px 0;
  /* padding-bottom: 40px; */
  /* margin-bottom: -40px; */
  padding-bottom: 40px;
}

.Main .section_descrpt div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  /* border: solid white; */
}

.Main .section_descrpt .img {
  width: 500px;
  height: 700px;
  background-image: url(./assets/man_siiting.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 17px;
}

.Main .section_descrpt .text {
  gap: 26px;
}

.Main .section_descrpt .text .txt1 {
  font-family: "lora", sans-serif;
  font-weight: 700;
  font-size: 12px;
  color: #f9c55f;
}

.Main .section_descrpt .text .txt2 {
  font-family: "lora", sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 150%;
  color: white;
  width: 88%;
  line-height: 130%;
}

.Main .section_descrpt .text .spans {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  column-gap: 15px;
}

.Main .section_descrpt .text .spans .bc {
  background-color: #ffff;
  padding: 13px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: fit-content;
  width: fit-content;
}

.Main .section_descrpt .text .spans .bc img {
  width: 22px;
  height: 22px;
}

.Main .section_descrpt .text .spans .txt .top {
  color: white;
  font-size: 18px;
  font-family: "lora", sans-serif;
  font-weight: 600;
  margin: 3px 0;
  margin-bottom: 10px;
}

.Main .section_descrpt .text .spans .txt .btm {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: rgba(255, 255, 255, 0.88);
}

.Main .section_descrpt .text .links {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  column-gap: 20px;
  margin-top: 20px;
}

.Main .section_descrpt .text .links a {
  padding: 14px 34px;
  border: solid 1.5px #2f67fa;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
}

.Main .section_descrpt .text .links .a1 {
  border: solid 1.5px #2f67fa;
  border-radius: 30px;
  color: white;
  background-color: #2f67fa;
}

.Main .section_descrpt .text .links .a2 {
  color: #2f67fa;
  background-color: white;
  border-radius: 30px;
}

.Main .section2 {
  width: 100%;
}

.Main .section2 svg {
  width: 100%;
}

.Main .section3 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: fit-content;
  /* border: solid; */
  margin-top: -2%;
  padding-bottom: 80px;
}

.Main .section3 .top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 7%;
}

.Main .section3 .top .sp1 {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}

.Main .section3 .top .sp1 .t1 {
  font-family: "Lora", sans-serif;
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 10px;
}

.Main .section3 .top .sp1 .t2 {
  display: flex;
  align-items: center;
  font-size: 15px;
  color: #373d4a;
  font-weight: 500;
}

.Main .section3 .top .sp1 .t2 i {
  font-size: 14px;
  margin-right: 10px;
}

.Main .section3 form select {
  height: 45px;
  padding: 10px 20px;
  border-radius: 30px;
  border: none;
  outline: solid 0.3px #7c859d;
  font-size: 16px;
}

.Main .section3 .wame {
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* border: solid;  */
  width: 100%;
  height: fit-content;
  padding: 0 7%;
  margin-top: 20px;
}

.Main .section3 .wame .items {
  width: 46%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /* border: solid ; */
  height: fit-content;
  margin-top: 20px;
}

.Main .section3 .wame .items .lists {
  display: flex;
  align-items: center;
  justify-content: left;
  width: fit-content;
  height: 90px;
  width: 100%;
  border-bottom: solid 1px silver;
}

.Main .section3 .wame .items .top_lists {
  border: none;
  height: 50px;
}

.Main .section3 .wame .items .top_lists .c p {
  color: #7c859d;
  font-weight: 400;
  font-size: 16px;
}

.Main .section3 .wame .items .lists .c {
  /* border: solid 1px;  */
  display: flex;
  align-items: center;
  justify-content: left;
  flex-direction: row;
  width: 100%;
  height: 100%;
}

.Main .section3 .wame .items .lists .c1 {
  width: 35%;
}

.Main .section3 .wame .items .lists .c2 {
  width: 22.5%;
  align-items: flex-start;
  height: 40px;
  /* border: solid 1px; */
}

.Main .section3 .wame .items .lists .c3 {
  width: 22.5%;
  align-items: flex-start;
  height: 40px;
  /* border: solid 1px; */
}

.Main .section3 .wame .items .lists .c4 {
  width: 20%;
  justify-content: flex-end;
}

.Main .section3 .wame .items .lists .c4 a {
  padding: 10px 25px;
  border-radius: 30px;
  color: #2f67fa;
  border: solid 1px;
  display: flex;
  align-items: center;
}

.Main .section3 .wame .items .lists .c4 a i {
  display: none;
}

.Main .section3 .wame .items .lists .c4 a:hover {
  background-color: #2f67fa;
  color: white;
  cursor: pointer;
}

.Main .section3 .wame .items .lists .c img {
  width: 35px;
  height: 35px;
}

.Main .section3 .wame .items .lists .c .ct2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 15px;
  row-gap: 1px;
}

.Main .items .lists .c .ct2 h4 {
  font-weight: 500;
  font-size: 17px;
  color: #373d4a;
  letter-spacing: 0.5px;
  width: 100px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}

.Main .section3 .wame .items .lists .c .ct2 p {
  font-weight: 300;
  font-size: 16px;
  color: #7c859d;
}

.Main .section3 .wame .items .lists .c .price {
  display: flex;
  align-items: center;
  justify-content: left;
  font-weight: 500;
  font-size: 18px;
  color: #373d4a;
}

.Main .section3 .wame .items .lists .c .perct {
  color: #008000;
}

.Main .section3 .wame .items .top_lists .c {
  height: 100%;
  align-items: center;
}

.Main .section3 .see {
  display: flex;
  justify-content: right;
  width: 100%;
  margin-top: 35px;
  padding: 0 7%;
}

.Main .section3 .see a {
  font-size: 20px;
  padding: 10px 25px;
  border-radius: 30px;
  background-color: #2f67fa;
  color: white;
  display: flex;
  align-items: center;
}

.Main .section3 .see a i {
  font-size: 28px;
}

.Main .section4 {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ebf0ff;
  padding: 100px 0;
  gap: 20px;
}

.Main .section4 p {
  text-align: center;
  width: fit-content;
}

.Main .section4 .t1 {
  font-size: 12px;
  font-weight: 700;
  font-family: "lora", sans-serif;
  color: #890620;
}

.Main .section4 .t2 {
  font-size: 36px;
  font-weight: 700;
  font-family: "lora", sans-serif;
  color: #18191b;
}

.Main .section4 .t3 {
  font-size: 16px;
  font-weight: 400;
  color: #373d4a;
  width: 45%;
}

.Main .section4 .fl {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 5%;
  width: 100%;
  flex-wrap: wrap;
}

.Main .section4 .fl span {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 13px;
  margin-top: 40px;
  /* border: solid; */
  width: 350px;
}

.Main .section4 .fl span .box {
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Main .section4 .fl span .box img {
  width: 100%;
  height: 100%;
}

.Main .section4 .fl span .txt1 {
  font-family: "Lora";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  color: #373d4a;
}

.Main .section4 .fl span .t {
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  color: #373d4a;
}

.Main .section5 {
  width: 100%;
  height: fit-content;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 13px;
  padding: 30px 7%;
  height: 400px;
  /* border: solid; */
  flex-direction: column;
}

.Main .section5 .t1 {
  font-size: 12px;
  font-weight: 700;
  font-family: "lora", sans-serif;
  color: #890620;
}

.Main .section5 .t2 {
  font-size: 36px;
  font-weight: 700;
  font-family: "lora", sans-serif;
  color: #18191b;
  width: 50%;
  text-align: center;
  margin-bottom: 40px;
}

.Main .section6 {
  width: 100%;
  background-color: #f9c55f;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
}

.Main .section6 .content {
  width: 100%;
  padding: 0 7%;
  margin: 120px 0;
  margin-bottom: -60px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.Main .section6 .content div {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}

.Main .section6 .content .img {
  width: 500px;
  height: 700px;
  background-image: url(./assets/seller_img.svg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 17px;
}

.Main .section6 .text {
  gap: 26px;
}

.Main .section6 .text .t1 {
  font-size: 12px;
  font-weight: 700;
  font-family: "lora", sans-serif;
  color: #890620;
}

.Main .section6 .text .t2 {
  font-size: 36px;
  font-weight: 700;
  font-family: "lora", sans-serif;
  color: #18191b;
  width: 90%;
  text-align: left;
  line-height: 130%;
}

.Main .section6 .text .t3 {
  font-size: 16px;
  font-weight: 400;
  color: #373d4a;
  width: 80%;
}

.Main .section6 .links {
  display: flex;
  align-items: center;
  width: 100%;
  gap: 15px;
}

.Main .section6 .links a {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border: none #2f67fa 1px;
  border-radius: 30px;
  padding: 15px 30px;
  font-weight: 500;
  font-size: 16px;
}

.Main .section6 .links .a1 {
  color: white;
  background-color: #2f67fa;
}

.Main .section6 .links .a2 {
  color: #2f67fa;
  background-color: white;
}

.Main .section7 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
}

.Main .section7 .content {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  padding: 0 7%;
  /* border: solid; */
  height: fit-content;
  gap: 5%;
  margin-top: 80px;
  margin-bottom: -60px;
  /* position: relative ; */
  /* flex-wrap: wrap;
    height: 300px; */
}

.Main .section7 .content .sp {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  /* border: solid; */
  /* height: fit-content; */
  height: 100%;
  /* position: absolute; */
}

.Main .section7 .content .sp .t1 {
  font-size: 40px;
  font-family: "Lora", sans-serif;
  font-weight: 800;
  width: 91%;
  line-height: 150%;
  /* border: solid; */
  /* position: absolute; */
}

.Main .section7 .content .sp .t2 {
  font-weight: 400;
  font-size: 18px;
  line-height: 180%;
  color: #373d4a;
  margin-top: 10px;
  margin-bottom: 60px;
  letter-spacing: 0;
}

.Main .section7 .content .scp {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* padding: 40px 20px; */
  padding: 0px;
  border: solid 1px #dcdee5;
  border-radius: 8px;
  margin-bottom: 20px;
  /* height: 408px; */
  /* height: 78px; */
  overflow: hidden;
  cursor: pointer;
  background-color: white;
  /* border: solid; */
  /* height: 70px; */
  height: fit-content;
}

.Main .section7 .content .scp .top {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  font-weight: 400;
  color: #18191b;

  /* border: solid; */
  /* margin-bottom: 20px; */
  background-color: white;
  padding: 24px;
  /* height: 70px; */
}

.Main .section7 .content .scp .top2 {
  display: none;
}

.Main .section7 .content .scp .top i {
  font-size: 26px;
  font-weight: 100;
  color: #18191ba4;
}

.Main .section7 .content .scp .answer {
  width: 100%;
  /* display: flex; align-items: center; justify-content: space-between; */
  line-height: 150%;
  height: 0;
  overflow: hidden;
  position: relative;
  padding: 0 24px;
  padding-top: 0;
  /* border: solid; */
  height: fit-content;
  transition: 400ms;
}

.Main .section7 .content .scp .answer_none {
  height: 0px;
}

.Main .section7 .content .scp .answer .det {
  font-size: 18px;
  font-weight: 400;
  color: #18191baf;
  /* padding-top: 24px; */
  padding-bottom: 20px;
}

#height {
  height: fit-content;
  background-color: blue;
}

.Main .section8 {
  background-color: #0a1128;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: flex-end;
  padding: 00px 7%;
  padding-bottom: 100px;
}

.Main .section8 .top {
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
}

.Main .section8 .top .sp {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.Main .section8 .top .sp .t1 {
  color: white;
  font-family: "Lora";
  font-style: normal;
  font-weight: 700;
  font-size: 38px;
  letter-spacing: 1px;
  line-height: 130%;
}

.Main .section8 .top .sp .t2 {
  font-family: "Open Sans";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: white;
  margin-top: 10px;
}

.Main .section8 .top a {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 13px 30px;
  gap: 10px;
  color: #2f67fa;
  background-color: white;
  border: solid 1.5px #2f67fa;
  border-radius: 30px;
}

.Main .section8 .content {
  width: 100%;
  display: flex;
  height: fit-content;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}

.Main .section8 .content a {
  width: 360px;
  height: 400px;
  /* border: solid white; */
  margin-top: 60px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}

.Main .section8 .content a .img {
  width: 100%;
  height: 50%;
  border-radius: 15px;
  background-image: url("../assets/blog_img1.svg");
  background-size: cover;
  background-position: center;
}

.Main .section8 .content a .t1 {
  text-align: left;
  font-size: 20px;
  font-family: "lora", sans-serif;
  color: white;
  font-weight: 600;
  letter-spacing: 1px;
  margin: 35px 0 20px 0;
}

.Main .section8 .content a .t2 {
  text-align: left;
  font-size: 14px;
  color: #f9fafbb2;
  font-weight: 400;
}

.Main .section8 .content a .t3 {
  display: flex;
  align-items: center;
  text-align: left;
  gap: 6px;
  color: white;
  font-size: 16px;
  margin-top: auto;
}

.Main .section8 .content a .t3 i {
  font-weight: 200;
  font-size: 25px;
}

.Main .section9 {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ebf0ff;
  position: relative;
  background-image: url("~/assets/image.jpg");
}

.Main .section9 .back {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  position: absolute;
  padding: 0;
  overflow: hidden;
}

.Main .section9 .back .img2 {
  transform: matrix(-1, 0, 0, 1, 0, 0);
}

.Main .section9 .text {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  row-gap: 25px;
  position: relative;
}

.Main .section9 .text .t1 {
  font-family: "lora", san-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  text-align: center;
}

.Main .section9 .text .t2 {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  text-align: center;
}

.Main .section9 .text a {
  padding: 14px 25px;
  background-color: #2f67fa;
  border-radius: 30px;
  color: white;
  font-size: 14px;
}

.Main .section9 .text a:hover {
  background-color: rgb(47, 103, 250, 0.6);
}

#active {
  height: fit-content;
  /* background-color: purple; */
}

@media screen and (min-width: 1400px) {
  header section .div1 h1 {
    font-size: 60px;
  }
}

@media screen and (max-width: 1280px) {
  .Main .section8 .content {
    justify-content: space-evenly;
  }
}

@media screen and (max-width: 1200px) {
  header section {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12% 7%;
    padding-bottom: 0%;
  }

  .Main .section_descrpt {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #0a1128;
    height: fit-content;
    flex-direction: column;
    width: 100%;
    padding: 60px 7%;
    margin: -0.3px 0;
    /* padding-bottom: 40px; */
    /* margin-bottom: -40px; */
    padding-bottom: 0;
  }

  .Main .section_descrpt div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .Main .section_descrpt .img {
    width: 80%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 17px;
    /* align-items: flex-start; */
  }

  .Main .section_descrpt .text {
    gap: 26px;
    width: fit-content;
    align-items: flex-start;
    margin-top: 5%;
  }

  .Main .section6 .content {
    flex-direction: column;
  }

  .Main .section6 .content div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .Main .section6 .content .img {
    width: 80%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 17px;
    /* align-items: flex-start; */
  }

  /* .Main .section6 .text .t1 {
        border: solid;
    } */

  .Main .section6 .content .text {
    gap: 26px;
    width: fit-content;
    align-items: flex-start;
    margin-top: 5%;
    width: 80%;
  }

  .Main .section6 .text .t2 {
    width: 100%;
  }

  .Main .section6 .text .t3 {
    width: 100%;
  }
}

@media screen and (max-width: 1150px) {
  header section {
    padding: 14% 5%;
    flex-direction: column;
    padding-bottom: 3%;
  }

  header section .div1 {
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    margin-bottom: 80px;
  }

  header section .div2 {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    /* border: solid; */
  }

  .Main .section3 {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: fit-content;
    /* border: solid; */
    margin-top: -5%;
    padding-bottom: 80px;
  }

  .Main .section3 .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 14%;
  }

  .Main .section3 .wame {
    flex-direction: column;
    padding: 0 7%;
  }

  .Main .section3 .wame .items {
    width: 83%;
    height: fit-content;
    margin-top: 20px;
  }

  .Main .section3 .wame .items .top_lists2 {
    display: none;
  }
}

@media screen and (max-width: 1000px) {
  .Main .section_descrpt .img {
    width: 90%;
    height: 400px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 17px;
    /* align-items: flex-start; */
  }

  .Main .section_descrpt .text {
    gap: 26px;
    width: 90%;
    align-items: flex-start;
    margin-top: 5%;
  }

  .Main .section5 .t2 {
    width: 70%;
  }

  .Main .section6 .content .img {
    width: 90%;
    height: 400px;
  }

  .Main .section6 .content .text {
    width: 90%;
  }
}

@media screen and (max-width: 900px) {
  .Main .section4 {
    padding: 80px 0;
    gap: 10px;
  }

  .Main .section4 .t2 {
    font-size: 30px;
  }

  .Main .section4 .t3 {
    font-size: 14px;
    max-width: 280px;
  }

  .Main .section4 .fl {
    gap: 5%;
    row-gap: 25px;
  }

  .Main .section4 .fl span {
    gap: 18px;
  }

  .Main .section4 .fl span .box {
    width: 50px;
    height: 50px;
  }

  .Main .section4 .fl span .txt1 {
    font-size: 20px;
  }

  .Main .section4 .fl span .t {
    font-size: 16px;
    max-width: 300px;
  }

  .Main .section7 .content {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  }

  .Main .section7 .content .sp {
    width: 100%;
  }

  .Main .section7 .content .sp .t1 {
    width: 100%;
    font-size: 38px;
  }
}

@media screen and (max-width: 800px) {
  header section {
    padding: 22% 5%;
  }

  header section .div1 {
    width: 98%;
  }

  /* header section .div2 {} */

  .Main .section3 .top {
    padding: 0 5%;
  }

  .Main .section3 .top .sp1 .t1 {
    font-size: 28px;
  }

  .Main .section3 .wame .items {
    width: 100%;
  }

  .Main .section3 .wame {
    flex-direction: column;
    padding: 0 7%;
  }

  .Main .section3 .wame .items .top_lists .c1 {
    width: 38%;
    align-items: flex-start;
  }

  .Main .section3 .wame .items .lists .c2 {
    width: 23.5%;
    align-items: flex-start;
  }

  .Main .section3 .wame .items .lists .c3 {
    width: 23.5%;
    align-items: flex-start;
  }

  .Main .section3 .wame .items .lists .c4 {
    width: 5%;
    justify-content: flex-end;
  }

  .Main .section3 .wame .items .lists .c4 a {
    padding: 0px 0px;
    border-radius: 30px;
    color: #2f67fa;
    border: 1px;
    display: flex;
    align-items: center;
  }

  .Main .section3 .wame .items .lists .c4 a p {
    display: none;
  }

  .Main .section3 .wame .items .lists .c4 a i {
    display: flex;
  }

  .Main .section4 .t3 {
    width: 60%;
  }

  .Main .section4 .fl span {
    margin-top: 70px;
  }

  .Main .section6 .content {
    width: 100%;
    padding: 0 7%;
    margin: 120px 0;
    margin-bottom: -20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .Main .section8 {
    padding-top: 40px;
    padding-bottom: 100px;
  }

  .Main .section8 .top .sp .t1 {
    font-size: 28px;
    letter-spacing: 1px;
  }

  .Main .section8 .top .sp .t2 {
    font-size: 14px;
    width: 80%;
  }

  .Main .section8 .top a {
    padding: 10px;
    gap: 10px;
    border-radius: 100%;
  }

  .Main .section8 .top a p {
    display: none;
  }
}

@media screen and (max-width: 600px) {
  header section {
    padding: 150px 5%;
    padding-bottom: 4%;
  }

  header section .div1 {
    width: 98%;
  }

  header section .div1 h1 {
    font-size: 28px;
    line-height: 140%;
    margin: 22px 0;
  }

  header section .div1 .txt2 {
    font-size: 16px;
    line-height: 150%;
    width: 100%;
  }

  header section .div1 .links {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin-top: 32px;
    gap: 20px;
    width: 100%;
  }

  header section .div1 .links a {
    padding: 0 30px;
    border-radius: 60px;
    font-size: 16px;
    height: 45px;
  }

  header section .div1 .links .a2 {
    margin-left: auto;
    gap: 8px;
  }

  header section .div2 {
    margin-bottom: 80px;
    /* position: relative; */
    /* border: solid; */
  }

  header section .div2 .inp {
    padding: 0 25px;
    padding-top: 35px;
    box-shadow: 0px 0px 5px rgba(47, 103, 250, 0.12);
    border-radius: 15px;
    width: 100%;
  }

  header section .div2 .inp .t1 {
    font-size: 20px;
    font-weight: 600;
  }

  header section .div2 .inp .t2 {
    font-size: 14px;
    width: 240px;
  }

  header section .div2 .inp form .sp .sp1 .input {
    border-radius: 10px;
    height: 45px;
    border: 1px solid #dcdee5;
    outline: none;
    padding: 0 15px;
    font-size: 15px;
    font-weight: 400;
    color: #373d4a;
    /* border: solid blue; */
  }

  header section .div2 .inp form .conv {
    font-size: 14px;
  }

  header section .div2 .inp form .btn {
    height: 45px;
    font-size: 16px;
    font-weight: 600;
  }

  .Main .section_descrpt {
    padding: 60px 7%;
    /* padding-bottom: 40px; */
    /* margin-bottom: -40px; */
    padding-bottom: 45px;
  }

  .Main .section_descrpt .img {
    width: 98%;
    height: 300px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    border-radius: 17px;
    /* align-items: flex-start; */
  }

  .Main .section_descrpt .text {
    gap: 32px;
    width: 98%;
    align-items: flex-start;
    margin-top: 13%;
  }

  .Main .section_descrpt .text .txt2 {
    font-weight: 700;
    font-size: 22px;
    line-height: 150%;
    color: white;
    width: 100%;
    line-height: 130%;
  }

  .Main .section_descrpt .text .spans .txt .btm {
    font-size: 14px;
  }

  .Main .section_descrpt .text .spans .bc img {
    width: 18px;
    height: 18px;
  }

  .Main .section_descrpt .text .links {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    row-gap: 21px;
    width: 100%;
    margin-top: 20px;
  }

  .Main .section_descrpt .text .links .a2 {
    margin-left: auto;
  }

  .Main .section_descrpt .text .links a {
    padding: 0 30px;
    height: 45px;
  }

  .Main .section3 {
    margin-top: 5%;
    padding-bottom: 80px;
  }

  .Main .section3 .wame .items .top_lists .c1 {
    /* width: 43%; */
    align-items: flex-start;
  }

  .Main .section3 .top {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 7%;
    /* border: solid; */
  }

  .Main .section3 .top .sp1 .t1 {
    font-size: 20px;
  }

  .Main .section3 .top .sp1 .t2 {
    font-size: 13px;
  }

  .Main .section3 .top .sp1 .t2 i {
    font-size: 12px;
  }

  /* .Main .section3 form {
        border: solid;
    } */

  .Main .section3 form select {
    height: 45px;
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    outline: solid 0.3px #7c859d;
    font-size: 16px;
    width: 45px;
  }

  .Main .section3 .top {
    padding: 0 7%;
  }

  .Main .section3 .top .sp1 {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    /* border: solid; */
  }

  .Main .section3 .wame .items {
    margin-top: 20px;
    /* border: solid; */
  }

  .Main .section3 .wame .items .top_lists .c p {
    font-size: 14px;
  }

  .Main .items .lists .c .ct2 h4 {
    width: 70px;
    font-size: 15px;
  }

  .Main .section3 .wame .items .lists .c .ct2 p {
    font-size: 14px;
  }

  .Main .section3 .wame .items .lists .c .price {
    font-size: 16px;
  }

  .Main .section3 .wame .items .lists .c1 {
    width: 43%;
  }

  .Main .section3 .wame .items .lists .c2 {
    width: 28.5%;
    align-items: flex-start;
  }

  .Main .section3 .wame .items .lists .c3 {
    width: 28.5%;
    align-items: flex-start;
  }

  .Main .section3 .see a {
    font-size: 16px;
    padding: 10px 25px;
    border-radius: 30px;
    background-color: #2f67fa;
    color: white;
    display: flex;
    align-items: center;
  }

  .Main .section3 .see a i {
    font-size: 24px;
    margin-left: 10px;
  }

  .Main .section4 {
    gap: 20px;
  }

  .Main .section4 .t2 {
    font-size: 26px;
  }

  .Main .section4 .t3 {
    width: 92%;
  }

  .Main .section4 .fl span {
    margin-top: 70px;
    width: 90%;
  }

  .Main .section5 .t2 {
    width: 95%;
    font-size: 22px;
    max-width: 250px;
  }

  .Main .section6 .content {
    padding: 0 7%;
    margin: 40px 0;
    margin-bottom: 20px;
  }

  .Main .section6 .content .img {
    width: 100%;
    height: 400px;
  }

  .Main .section6 .content .text {
    margin-top: 40px;
    width: 100%;
    gap: 15px;
  }

  .Main .section6 .text .t2 {
    font-size: 22px;
  }

  .Main .section6 .links {
    display: flex;
    align-items: flex-start;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    margin-top: 8px;
  }

  .Main .section6 .links .a2 {
    margin-left: auto;
  }

  .Main .section7 .content {
    padding-bottom: 60px;
    margin-top: 50px;
  }

  .Main .section7 .content .sp .t1 {
    font-size: 23px;
  }

  .Main .section7 .content .sp .t2 {
    font-size: 14px;
    margin-top: 10px;
    margin-bottom: 30px;
  }

  .Main .section7 .content .scp {
    margin-bottom: 20px;
  }

  .Main .section7 .content .scp .top {
    font-size: 16px;
    padding: 25px 15px;
  }

  .Main .section7 .content .scp .top i {
    font-size: 24px;
  }

  .Main .section7 .content .scp .answer {
    width: 100%;
    line-height: 150%;
    padding: 0 15px;
  }

  .Main .section7 .content .scp .answer .det {
    font-size: 14px;
    /* padding-top: 24px; */
  }

  .Main .section8 .top .sp .t1 {
    font-size: 22px;
    letter-spacing: 0px;
  }

  .Main .section8 .top .sp .t2 {
    font-size: 15px;
    line-height: 150%;
  }

  .Main .section8 .content a {
    height: 300px;
    margin-top: 60px;
    width: 100%;
  }

  .Main .section8 .content a .img {
    height: 50%;
  }

  .Main .section8 .content a .t1 {
    text-align: left;
    font-size: 18px;
    font-weight: 800;
    letter-spacing: 0px;
    margin: 25px 0 20px 0;
    /* border: solid white; */
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
    position: static;
  }

  .Main .section8 .content a .t2 {
    text-align: left;
    font-size: 14px;
    color: #f9fafbb2;
    font-weight: 400;
    width: 98%;
  }

  .Main .section9 .text .t1 {
    font-size: 24px;
  }
}

@media screen and (max-width: 400px) {}
</style>