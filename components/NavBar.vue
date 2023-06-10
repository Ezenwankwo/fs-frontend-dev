<template>
  <nav class="nav-fixed">
    <div class="container">
      <div class="sidebar" id="sidebar">
        <div class="sd">
          <div class="main_sidenav">
            <header>
              <nav>
                <a href="" class="logo_a">
                  <img src="~/assets/logo.png " alt="wame" class="logo" /></a
                ><i class="x ii material-icons" id="x">close</i>
              </nav>
            </header>
            <div class="nav_items">
              <span class="sp">
                <a class="a" href="javascript:void(0)"
                  >Home <i class="material-icons">navigate_next</i></a
                > </span
              ><span class="sp">
                <a class="a" href="javascript:void(0)"
                  >Our blog <i class="material-icons">navigate_next</i></a
                ></span
              ><span class="sp">
                <a class="a" href="javascript:void(0)"
                  >Become a seller
                  <i class="material-icons">navigate_next</i></a
                ></span
              ><span class="sp">
                <a class="a" href="javascript:void(0)"
                  >P2P marketplace<i class="material-icons">navigate_next</i></a
                ></span
              ><span class="sp">
                <a class="a" href="javascript:void(0)">Contact us</a></span
              ><span class="sp">
                <a class="a" href="javascript:void(0)"
                  >All currency listings</a
                ></span
              >
              <div class="st">
                <span class="sp1"
                  ><a href=""><i class="fa-brands fa-facebook"></i></a
                  ><a href=""
                    ><i class="fa fa-twitter" aria-hidden="true"></i></a
                  ><a href=""
                    ><i
                      class="fa fa-instagram"
                      aria-hidden="true"
                    ></i></a></span
                ><span class="sp2"
                  ><a href="">Terms and conditions. Privacy Policy</a
                  ><a href="">© All rights reserved. Finstack 2022.</a></span
                >
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
      <div class="log">
        <NuxtLink class="link login" to="/login">Login</NuxtLink>
        <NuxtLink class="link signup" to="/signup">Get Started</NuxtLink>
      </div>
      <i class="i ii material-icons" id="i">
        <Icon name="ic:baseline-menu" />
      </i>
    </div>
  </nav>
</template>

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
    align-items: center;
    padding: 20px;
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

  .i {
    color: white;
    background-color: #2f67fa;
    border-radius: 100%;
    padding: 10px;
    font-size: 16px !important;
    display: flex !important;
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

.sidebar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  position: fixed;
  z-index: 5;
  width: 100%;
  height: 100vh;
  /* background-color: rgba(129, 129, 129, 0.6); */
  top: -110%;
  /* top: 0; */
  left: 0;
  transition: 300ms;
  /* background-color: black; */
  /* border: solid brown; */
  /* margin: 0 auto; */
  padding: 0 7%;
}

.sidebar header {
  width: 100%;
}

.sidebar nav {
  /* border: solid 5px blue; */
  width: 100% !important;
  margin: 0 auto;
  position: static !important;
  /* pos */
  height: 70px !important;
  -webkit-backdrop-filter: 0;
  backdrop-filter: 0;
  box-shadow: none;
  box-shadow: 5px -1px 10px -5px rgb(168, 168, 168);
}

.sidebar .sd {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  /* margin-top: 100px; */
  padding: 0;
  /* background-color: rgb(247, 247, 247); */
  background-color: white;
  margin: 15px 0;
  border-radius: 10px;
  overflow: hidden;
  border: solid 5px white;
  box-shadow: 0 0 3px 1px rgb(128, 128, 128, 0.1);
  box-shadow: 0px 0px 30px 10px rgba(130, 130, 130, 0.3);

  position: relative;
}

#x {
  display: block !important;
  cursor: pointer;
}

.sidebar .products {
  width: 100%;
  height: 100%;
  /* position: absolute; */
  background-color: blue;
  position: relative;
  z-index: 2;
  right: -100%;
}

.sidebar .sd .main_sidenav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 100%;
  padding: 0;
  overflow: hidden;
  position: absolute;
  z-index: 1;
}

.sidebar .main_sidenav .nav_items {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  margin-top: auto;
  padding: 10px 0;
  /* border: solid; */
  overflow-x: scroll;
}

.sidebar .main_sidenav .nav_items .sp {
  width: 100%;
  display: inline-block;
}

.sidebar .main_sidenav .nav_items .sp .a {
  width: 100%;
  padding: 20px 7%;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #3f4b66;
  font-size: 15px;
  flex-direction: row;
}

.sidebar .main_sidenav .nav_items .sp + .sp::before {
  content: "";
  border-bottom: 1.5px solid rgba(206, 206, 206, 0.2);
  /* border-spacing: 10px; */
  border-bottom-style: dashed;
  /* border-inline-style:; */
  /* border-style:ridge; */
  display: block;
  margin: 0 auto;
}

.sidebar .main_sidenav .nav_items .st {
  width: 100%;
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  /* border: solid; */
  padding: 0 7%;
}

.sidebar .main_sidenav .nav_items .st .sp1 {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  gap: 10px;
}

.sidebar .main_sidenav .nav_items .st .sp1 a i {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 32px;
  width: 32px;
  font-size: 16px;
  box-shadow: 0 0 8px 1px rgb(47, 103, 250, 0.2);
  border-radius: 100%;
  background-color: #2f67fa;
  color: white;
}

.sidebar .main_sidenav .nav_items .st .sp2 {
  width: 100%;
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 15px;
  flex-wrap: wrap;
  margin-bottom: 5px;
  gap: 10px;
}

.sidebar .main_sidenav .nav_items .st .sp2 a {
  display: flex;
  justify-content: left;
  align-items: center;
  flex-direction: row;
  gap: 5px;
  color: #3f4b66;
  font-size: 14px;
}

.sidebar .main_sidenav .in {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  margin-top: auto;
  padding: 10px 0;
  background-color: rgba(245, 245, 245, 0.7);
}

.sidebar .main_sidenav .in .a {
  padding: 8px 20px;
  border-radius: 30px;
  background-color: #2f67fa;
  color: white;
  font-size: 14px;
  font-weight: 600;
  box-shadow: 0 0 8px 3px rgb(47, 103, 250, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 5px;
  /* border: solid; */
}

.sidebar .main_sidenav .in .a i {
  color: white;
  font-size: 18px;
  /* background-color: rgb(247, 247, 247); */
}

@media screen and (max-width: 1000px) {
  .sidebar .main_sidenav .nav_items .sp .a {
    padding: 20px 5%;
  }
}

@media screen and (max-width: 1000px) {
  /* nav{
        padding: %;   
    } */

  .sp {
    display: none;
  }

  .i {
    color: #2f67fa;
    display: flex !important;
  }
}

@media screen and (max-width: 600px) {
  .sidebar .main_sidenav .nav_items .sp .a {
    padding: 20px 7%;
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
</style>
