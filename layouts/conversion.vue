<template>
    <div>
        <NavBar />
        <div class="cont">
            <!-- <div class="Close_auth" id="close_auth">
                <div class="modal">
                    <span class="sp1">
                        <Icon name="bi:x-lg" />
                    </span>
                    <img src="/static/media/qmark.efab86979ad52a61e7ce1eb5da22b079.svg" alt="">
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
                        <i class="material-icons-outlined">info</i>Ensure you have not made any payment in the process
                        before this cancellation, else, the fund is gone. Ensure you have not made any payment.
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
                        <textarea name="" id="otherReason" cols="30" rows="30"
                            placeholder="Please state your reason for cancellation">
                            </textarea>
                        <span class="links">
                            <a class="a a1" href="/seller_details">Go Back</a>
                            <a type="submit " class="a a2" href="/">Cancel</a>
                        </span>
                    </form>
                </div>
            </div> -->
            <main class="Aumain">
                <section class="section">
                    <div class="lists">
                        <p class="p1">Convert Currency</p>
                        <p class="p2">Create or accept offers at your preferred rate.</p>
                        <ul>
                            <li class="last">
                                <span>
                                    <i class="material-icons-outlined"><Icon name="solar:folder-line-duotone" /></i>
                                </span>
                                <p>Review amount </p>
                            </li>
                            <li class="last">
                                <span>
                                    <i class="material-icons-outlined"><Icon name="bi:bank" /></i>
                                </span>
                                <p>Bank details </p>
                            </li>
                            <li class="last">
                                <span>
                                    <i class="material-icons-outlined"><Icon name="majesticons:money-line" /></i>
                                </span>
                                <p>Confirm payment </p>
                            </li>
                        </ul>
                    </div>
                    <div class="cnt">
                        <div class="fl1">

                            <slot />

                        </div>
                        <p class="cl"><Icon name="bi:x-lg" /> Close</p>
                    </div>


                </section>

            </main>
        </div>
    </div>
</template>