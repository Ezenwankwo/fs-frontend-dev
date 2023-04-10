<template>
    <footer>
        <div class="one">
            <span class="sp">
                <img src="~/assets/logo.png" alt="" class="logo" />
                <p class="t">Finstack is a non-profit organization or accept offers at your preferred rate on our Peer
                    to peer marketplace.</p>
            </span>
            <span class="sp asp">
                <a href="" class="title">REACH US</a>
                <a href="/blog_index">Our blog</a>
                <a href="/contactus">Contact us</a>
                <a href="">Become a seller</a>
            </span>
            <span class="sp">
                <p class="tt1">Subscribe to our Newsletter</p>
                <p class="tt2">Never stay out of the loop.</p>
                <form action="">
                    <input type="email" name="" id="" placeholder='email@domain.co' />
                    <button type="submit"><Icon name="bi:arrow-right" class="material-icons" /></button>
                </form>
            </span>
        </div>
        <div class="two">
            <span class="sp1">
                <a href=""><Icon name="bi:facebook" /></a>
                <a href=""><Icon name="bi:twitter" /></a>
                <a href=""><Icon name="bi:instagram" /></a>
            </span>
            <span class="sp2">
                <a href="">Terms and conditions</a>
                <a href="">Privacy Policy</a>
                <a href="">&copy; All rights reserved. Finstack 2022.</a>
            </span>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100%;
    padding: 30px 8%;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 2000px;
    margin: 0 auto;
}

footer .one {
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: solid 1px silver;
    padding: 30px 0;
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
    font-size: 14px;
    color: #7C859D;
}

footer .one .asp {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: fit-content;
    margin: 0 10%;
}

footer .one .asp .title {
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    text-transform: uppercase;
    color: #7C859D;
}

footer .one .asp a {
    white-space: nowrap;
    font-size: 15px;
    font-weight: 400;
    color: #373D4A;
}

footer .one .sp .tt1 {
    font-weight: 700;
    font-family: 'lora', sans-serif;
    font-size: 22px;
    line-height: 150%;
    color: #18191B;
}

footer .one .sp .tt2 {
    font-weight: 400;
    font-size: 16px;
    line-height: 150%;
    color: #7C859D;
}

footer .one .sp form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: solid 1px #18191B;
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
    padding-top: 30px;
}

footer .two .sp1 {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 20px;
}

footer .two .sp1 a {
    color: #7C859D;
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
    color: #7C859D;
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
        padding: 30px 0;
        flex-direction: column;
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
        padding: 30px 0;
        flex-direction: column;
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

* {
    /* outline: solid 1px greenyellow; */
}

nav {
    /* background: #fff; */
    z-index: 1;
    width: 100%;
    /* height: 89px; */
    /* border-bottom: solid 1px silver; */
    display: flex;
    justify-content: left;
    align-items: center;
    padding: 0 7%;
    position: fixed;
    /* top: 0;  */
    /* z-index: 2; */
    /* overflow: hidden; */
    /* background-color: black; */
    /* backdrop-filter: blur(5px); */
    /* max-width: 2000px; */
    /* margin: 0 auto; */
    justify-self: center;
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

.sp {}

.sp .link {
    margin: 0 15px;
    color: #1f1f1f;
    font-size: 16px;
    font-weight: 400;

}

.sp .link:hover {
    color: #2F67FA;
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
    color: #2F67FA;
    margin-right: 20px;
    font-weight: 500;
}

.signup {
    /* border: solid 1px silver; */
    /* background-color: #2F67FA; */
    background-color: #2F67FA;
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
    color: #2F67FA;
}

@media screen and (min-width: 1300px) {
    nav {
        /* padding: 0 5%; */
        /* border: solid; */
    }
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
        color: #2F67FA;
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
        background-color: #2F67FA;
        border-radius: 100%;
        padding: 10px;
        font-size: 16px !important;
        display: flex !important;
    }
}

@media screen and (max-width: 400px) {
    nav {
        /* height: 30px; */
    }

}
</style>