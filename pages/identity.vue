<template>
    <form action="" class="frm Idi" @submit.prevent="submitIdentity">
        <p class="t1">Identity information</p>
        <p class="t2">Subtext comes here on identity details</p>

        <div class="qs">

            <span class="spq">
                <span class="sp sp2">
                    <label htmlFor="fname">Select ID type</label>
                    <!-- <input type="text" name="fname" id="" placeholder="International passport" /> -->
                    <select v-model="idType" class="select w-full max-w-xs font-medium" style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;" required>
                        <option v-for="item in idTypes">{{ item }}</option>
                    </select>
                </span>
            </span>
            <span class="spq">
                <span class="sp sp2">
                    <label htmlFor="fname">Issuing country</label>
                    <!-- <input type="text" name="fname" id="" placeholder="Select country" /> -->
                    <select v-model="issuingCountry" class="select w-full max-w-xs font-medium" style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;" required>
                        <option v-for="item in countries">{{ item }}</option>
                    </select>
                </span>
            </span>
            <span class="spq">
                <span class="sp sp2">
                    <label htmlFor="fname">Upload means of identity</label>
                    <span class="sp_inp">
                        <span class="msg">
                            <img src="~/assets/upload.svg" alt="img" />
                            <p class="p1">{{ identityName }}</p>
                            <p class="p2">Accepted format: .pdf, .img, .jpg, .png should not be more than 100kb</p>
                        </span>
                        <input type="file" accept=".png, .jpg, .jpeg, .pdf" name="fname" id="" required @change="handleIdentityUpload" />
                    </span>
                </span>
            </span>

            <span class="spq">
                <div class="line"></div>
            </span>

            <span class="spq">
                <div class="nt">
                    <p class="p1">
                        <Icon name="bi:info-circle" />NOTE
                    </p>
                    <p class="p2">Upload a selfie of you holding the identity card and a piece of paper bearing the word
                        FINSTACk and today’s date. Remove any hat or glasses and avoid using a camera filter at this point.
                        Also, ensure enough illumination in the surrounding area.</p>
                </div>
            </span>

            <span class="spq">
                <span class="sp sp2">
                    <label htmlFor="fname">Upload selfie</label>
                    <span class="sp_inp">
                        <span class="msg">
                            <img src="~/assets/upload.svg" alt="img" />
                            <p class="p1">{{ selfieName }}</p>
                            <p class="p2">Accepted format: .pdf, .img, .jpg, .png should not be more than 100kb</p>
                        </span>
                        <input type="file" accept=".png, .jpg, .jpeg, .pdf" name="fname" id="" required @change="handleSelfieUpload" />
                    </span>
                </span>
            </span>

            <span class="spq">
                <div class="links">
                    <NuxtLink to="/personal_information" class="a a1">Back</NuxtLink>
                    <button type="submit" class="a a2">Save & continue</button>
                </div>
            </span>

        </div>
    </form>
</template>

<script setup>
definePageMeta({
    layout: "auth",
});
const config = useRuntimeConfig()
const countries = ref([])
const countriesRes = await useFetch(
    `${config.public.baseURL}/users/countries/`,
    {
        'method': 'get',
        onResponse({ request, response, options }) {
            countries.value = response._data.data
        },
    },
)
const idTypes = ref([])
const idRes = await useFetch(
    `${config.public.baseURL}/users/id-types/`,
    {
        'method': 'get',
        onResponse({ request, response, options }) {
            idTypes.value = response._data.data
        },
    },
)
const idType = ref('')
const issuingCountry = ref('')
const identity = ref(null)
const selfie = ref(null)
const identityName = ref('Upload image')
const selfieName = ref('Upload image')

const handleIdentityUpload = (event) => {
    identity.value = event.target.files[0]
    if (identity.value.size > 100 * 1024) {
        useNotification().toast.error("Too large. must be less than 100kb")
        event.target.value = ''
    } else {
        const reader = new FileReader()
        reader.onload = () => {
            localStorage.setItem('identityFile', reader.result)
            identityName.value = identity.value.name
            localStorage.setItem('identityName', identity.value.name)
            localStorage.setItem('identitySize', identity.value.size)
        }
        reader.readAsDataURL(identity.value)
    }
}
    
const handleSelfieUpload = (event) => {
    selfie.value = event.target.files[0]
    if (selfie.value.size > 100 * 1024) {
        useNotification().toast.error("Too large. must be less than 100kb")
        event.target.value = ''
    } else {
        const reader = new FileReader()
        reader.onload = () => {
            localStorage.setItem('selfieFile', reader.result)
            selfieName.value = selfie.value.name
            localStorage.setItem('selfieName', selfie.value.name)
            localStorage.setItem('selfieSize', selfie.value.size)
        }
        reader.readAsDataURL(selfie.value)
    }
}
const submitIdentity = () => {
    localStorage.setItem('idType', idType.value)
    localStorage.setItem('country', issuingCountry.value)
    navigateTo('/identity_confirm')
}
</script>