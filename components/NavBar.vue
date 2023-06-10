<template>
  <nav class="nav-fixed">
    <div class="container">
      <div class="main-nav flex w-full">
        <a class="logo_a" href="/">
          <img src="~/assets/logo.png " alt="wame" class="logo" />
        </a>
        <!-- <div class="sp">
          <a class="link" href="/blog_index">Our blog</a
          ><a class="link" href="/contactus">Contact us</a
          ><a class="link" href="/seller_up">Become a seller</a
          ><a class="link" href="/P2PIndex">P2P marketplace</a>
        </div> -->
        <div class="log">
          <NuxtLink class="link login" to="/login">Login</NuxtLink>
          <NuxtLink class="link signup" to="/signup">Get Started</NuxtLink>
        </div>
        <span class="mobile-menu" @click="toggleMenu">
          <Icon name="ic:baseline-menu" />
        </span>
      </div>
      <div v-if="isMenuOpen" class="mobile-menu-links">
        <ul>
          <li>
            <NuxtLink class="link login" to="/login">Login</NuxtLink>
          </li>
          <li>
            <NuxtLink class="link signup" to="/signup">Get Started</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style lang="less" scoped>
nav {
  z-index: 2;
  width: 100%;
  position: fixed;
  background-color: rgba(255, 255, 255, 0.98);
  justify-content: center;
  box-shadow: 5px -1px 12px -5px grey;
  .container {
    display: flex;
    margin: auto;
    padding: 20px;
    flex-direction: column;
  }
  .main-nav {
    align-items: center;
  }
}

nav .user {
  margin-left: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

nav .user .n_icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  /* border: solid; */
  height: -moz-fit-content;
  height: fit-content;
  width: -moz-fit-content;
  width: fit-content;
  width: 20px;
  height: 25px;
  margin-right: 30px;
  cursor: pointer;
}

nav .user .n_icon .bell {
  color: #7c859d;
  font-size: 26px;
  position: absolute;
}

nav .user .n_icon .not {
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: red;
  margin: 0 0 auto auto;
  position: relative;
  border: solid 2px white;
}

nav .user .profile {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
}

nav .user .profile .prof {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: -moz-fit-content;
  width: fit-content;
  position: relative;
}

nav .user .profile .profile_modal {
  width: 100%;
  height: -moz-fit-content;
  height: fit-content;
  /* border: solid; */
  background-color: white;
  border-radius: 15px;
  box-shadow: 0 0 8px 2px rgba(107, 107, 107, 0.07);
  position: absolute;
  top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 7px;
  row-gap: 10px;
  /* display: none; */
}

nav .user .profile .profile_modal .a {
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  height: 50px;
  transition: 200ms;
  gap: 10px;
  padding: 0 13px;
  color: #373d4a;
  font-size: 15px;
  /* border: solid; */
}

nav .user .profile .profile_modal .a:hover {
  background-color: rgba(132, 131, 131, 0.1);
}

nav .user .profile .profile_modal .a i {
  font-size: 32px;
  font-weight: 200;
  color: #7c859d;
  /* border: solid; */
}

nav .user .user_descrpt {
  /* border: solid; */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  row-gap: 3px;
  cursor: pointer;
}

nav .user .user_descrpt .username {
  font-weight: 500;
  font-size: 16px;
}

nav .user .user_descrpt .usermail {
  font-weight: 400;
  font-size: 14px;
  color: #7c859d;
}

nav .user .userimage {
  width: 42px;
  height: 42px;
  border-radius: 100%;
  margin-left: 20px;
  background-color: rgba(0, 0, 0, 0.07);
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
}

nav .user .userimage .me {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  font-size: 14px;
  font-weight: 500;
  color: white;
  background-color: #5fa6f9;
  position: absolute;
}

nav .user .userimage .img {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border-radius: 100%;
  position: relative;
  /* background-image: url('./images/country_image\ \(1\).svg'); */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

nav .user .dwn {
  margin-left: 8px;
  rotate: 90deg;
  font-weight: 300;
  font-size: 18px;
  cursor: pointer;
}

.log {
  .link {
    text-decoration: none;
  }
}

.mobile-menu {
  display: none;
}

.mobile-menu-links {
  background: #fff;
  text-align: center;
  width: 100%;
  padding: 40px 20px 20px;
  li {
    padding: 10px 20px;
  }
  a {
    text-decoration: none;
  }
  .signup {
    padding: 9px 24px;
    border-radius: 30px;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
  }
}

@media screen and (max-width: 1100px) {
  footer {
    padding: 0 20px 50px 20px;
  }
}

@media screen and (max-width: 1000px) {
  nav .user .dwn {
    margin-left: 8px;
    rotate: 90deg;
    font-weight: 300;
    font-size: 18px;
    cursor: pointer;
    margin-right: 40px;
  }
}
@media screen and (max-width: 600px) {
  .log {
    display: none;
  }

  .mobile-menu {
    color: white;
    background-color: #2f67fa;
    border-radius: 100%;
    font-size: 16px !important;
    width: 35px;
    height: 35px;
    text-align: center;
    display: flex;
    margin-left: auto;
    cursor: pointer;
    svg {
      align-self: center;
      width: 100%;
    }
  }

  nav .user .n_icon {
    margin-right: 25px;
  }

  nav .user .user_descrpt {
    display: none;
  }

  nav .user .userimage {
    display: none;
  }

  nav .user .dwn {
    display: none;
  }
}

@media screen and (max-width: 1000px) {
  .sp {
    display: none;
  }
}
.logo {
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

.x {
  margin-left: auto;
  display: none !important;
  color: #2f67fa;
}
</style>
