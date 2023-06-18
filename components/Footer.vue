<template>
  <footer>
    <div class="one">
      <span class="sp"
        ><img src="~/assets/logo.png" alt="" class="logo" />
        <p class="t">
          Finstack is a non-profit organization or accept offers at your
          preferred rate on our Peer to peer marketplace.
        </p> </span
      ><span class="sp asp"
        ><a href="" class="title">REACH US</a><a href="/blog_index">our blog</a
        ><a href="/contactus">Contact us</a
        ><a href="/seller_up">Become a seller</a></span
      ><span class="sp">
        <p class="tt1">Subscribe to our Newsletter</p>
        <p class="tt2">Never stay out of the loop.</p>
        <form action="">
          <input
            type="email"
            name=""
            id=""
            placeholder="email@domain.co"
          /><button type="submit">
            <i class="material-icons"><Icon name="bi:arrow-right" /></i>
          </button>
        </form>
      </span>
    </div>
    <div class="two">
      <span class="sp1"
        ><a href=""><Icon name="ic:round-facebook" /></a
        ><a href=""><Icon name="mdi:twitter" /></a
        ><a href=""><Icon name="mdi:instagram" /></a></span
      ><span class="sp2"
        ><NuxtLink to="/terms">Terms and conditions</NuxtLink
        ><NuxtLink to="/privacy">Privacy Policy</NuxtLink
        ><a href="">© All rights reserved. Finstack 2022.</a></span
      >
    </div>
  </footer>
</template>

<style lang="less" scoped>
footer {
  width: 100%;
  padding: 30px 8%;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1440px;
  margin: 0 auto;
}

footer .one {
  width: 100%;
  display: flex;
  justify-content: center;
  border-bottom: solid 1px silver;
  padding: 100px 0 30px 0;
  height: -moz-fit-content;
  height: fit-content;
  padding-bottom: 60px;
}

footer .one .sp {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  row-gap: 10px;
}

footer .one .sp p {
  font-size: 16px;
  color: #7c859d;
}

footer .one .asp {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: -moz-fit-content;
  width: fit-content;
  margin: 0 10%;
}

footer .one .asp .title {
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
  text-transform: uppercase;
  color: #7c859d;
}

footer .one .asp a {
  white-space: nowrap;
  font-size: 15px;
  font-weight: 400;
  color: #373d4a;
}

footer .one .sp .tt1 {
  font-weight: 700;
  font-family: "lora", sans-serif;
  font-size: 22px;
  line-height: 150%;
  color: #18191b;
}

footer .one .sp .tt2 {
  font-weight: 400;
  font-size: 16px;
  line-height: 150%;
  color: #7c859d;
}

footer .one .sp form {
  display: flex;
  align-items: center;
  justify-content: space-between;
  border: solid 1px #18191b;
  border-radius: 8px;
  width: 100%;
  background-color: white;
  overflow: hidden;
  height: 50px;
  margin-top: 10px;
}

footer .one .sp form input {
  padding: 0 15px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
}

footer .one .sp form button {
  height: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  /* border: solid; */
  background-color: transparent;
}

footer .two {
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 30px 0;
}

footer .two .sp1 {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
}

footer .two .sp1 a {
  color: #7c859d;
}

footer .two .sp1 a i {
  font-size: 20px;
}

footer .two .sp2 {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 20px;
  flex-wrap: wrap;
}

footer .two .sp2 a {
  font-size: 14px;
  color: #7c859d;
  white-space: nowrap;
}

@media screen and (max-width: 1000px) {
  footer {
    width: 100%;
    padding: 30px 7%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}

@media screen and (max-width: 800px) {
  footer .one .asp {
    margin: 0 4%;
  }

  footer {
    padding: 30px 4%;
  }
}

@media screen and (max-width: 750px) {
  footer .one {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: solid 1px silver;
    padding: 50px 0;
    flex-direction: column;
    height: -moz-fit-content;
    height: fit-content;
    padding-bottom: 60px;
    row-gap: 40px;
    align-items: center;
  }

  footer .one .sp {
    width: 95%;
  }
  footer .one .asp {
    margin: 0 0;
    margin-right: auto;
    margin-left: 4%;
    /* border: solid; */
  }

  footer .two {
    row-gap: 20px;
    flex-direction: column;
  }

  footer .two .sp2 {
    justify-content: flex-start;
  }
}

@media screen and (max-width: 650px) {
  footer .one {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: solid 1px silver;
    flex-direction: column;
    height: -moz-fit-content;
    height: fit-content;
    padding-bottom: 60px;
    row-gap: 40px;
    align-items: center;
  }

  footer .one .sp {
    width: 95%;
  }
  footer .one .asp {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: -moz-fit-content;
    width: fit-content;
    margin: 0 0;
    margin-right: auto;
    margin-left: 4%;
  }

  footer .one .sp .tt1 {
    font-size: 18px;
  }

  footer .one .sp .tt2 {
    font-size: 14px;
  }

  footer .two {
    padding-left: 5%;
  }

  footer .two .sp2 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
    flex-wrap: wrap;
  }

  footer .two .sp1 a i {
    font-size: 26px;
  }
}
</style>
