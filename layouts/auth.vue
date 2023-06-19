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
                <section class="container section">
                    <div class="lists">
                        <p class="p1">Become a seller</p>
                        <p class="p2">Create or accept offers at your preferred rate.</p>
                        <ul>
                            <li :class="{ active: current.personal_information }" @click="changeView('personal_information')">
                                <span>
                                    <i class="material-icons-outlined">
                                        <Icon name="carbon:user-avatar" />
                                    </i>
                                </span>
                                <p>Personal details <Icon name="ic:round-check" class="relative pr-2 left-20 text-3xl" style="color: grey;" v-if="completed.personal_information"/></p>
                            </li>
                            <li :class="{ active: current.identity }" @click="changeView('identity')">
                                <span>
                                    <i class="material-icons-outlined">
                                        <Icon name="majesticons:money-line" />
                                    </i>
                                </span>
                                <p>ID information <Icon name="ic:round-check" class="relative pr-2 left-20 text-3xl" style="color: grey;" v-if="completed.identity"/></p>
                            </li>
                            <li :class="{ active: current.identity_confirm }" @click="changeView('identity_confirm')">
                                <span>
                                    <i class="material-icons-outlined">
                                        <Icon name="solar:folder-line-duotone" />
                                    </i>
                                </span>
                                <p>Preview <Icon name="ic:round-check" class="relative ml-32 text-4xl" style="color: grey;" v-if="completed.identity"/></p>
                            </li>
                        </ul>
                    </div>
                    <div class="cnt">
                        <div class="fl1">

                            <slot />

                        </div>
                    </div>


            </section>

        </main>
    </div>
</div>
</template>

<script setup>
const current = ref({
	personal_information: true,
	identity: false,
	identity_confirm: false
})
const completed = ref({
	personal_information: false,
	identity: false,
	identity_confirm: false
})

const changeView = (val) => {
  Object.keys(completed.value).map((v) => completed.value[val] === true ? navigateTo('/' + val) : '')
}

watchEffect(() => {
	const route = useRoute()
	const path = route.path.replace('/', '')

	Object.keys(current.value).map((curr) => curr === path ? current.value[curr] = true : current.value[curr] = false)

	if(process.client) {
		if(localStorage.getItem("firstName") && localStorage.getItem("lastName") && localStorage.getItem("phoneNumber") && localStorage.getItem("dateOfBirth") && localStorage.getItem("address") && localStorage.getItem("countryResidence") && localStorage.getItem("stateRegion")) {
			completed.value.personal_information = true
		}
		if(localStorage.getItem("identityFile") && localStorage.getItem("identityName") && localStorage.getItem("identitySize") && localStorage.getItem("selfieFile") && localStorage.getItem("selfieName") && localStorage.getItem("selfieSize") && localStorage.getItem("idType") && localStorage.getItem("country")) {
			completed.value.identity = true
		}
	}
}, current.value)
</script>