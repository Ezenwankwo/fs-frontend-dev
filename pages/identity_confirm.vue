<template>
    <form action="" class="frm BAS_prev" @submit.prevent="createIdentity">
        <p class="t1">Confirm details</p>
        <p class="t2">Subtext comes here on identity details</p>

        <div class="qs qf">
            <span class="spq">
                <ul class="prof">
                    <li>
                        <p class="p1">Phone number</p>
                        <p class="p2">{{ phoneNumber }}</p>
                    </li>
                    <li>
                        <p class="p1">Country of residence</p>
                        <p class="p2">{{ countryResidence }}</p>
                    </li>
                    <li>
                        <p class="p1">State/province/region</p>
                        <p class="p2">{{ stateRegion }}</p>
                    </li>
                    <li>
                        <p class="p1">Address</p>
                        <p class="p2">{{ address }}</p>
                    </li>
                    <li>
                        <p class="p1">Date of birth</p>
                        <p class="p2">{{ dateOfBirth }}</p>
                    </li>
                    <li>
                        <p class="p1">ID Type</p>
                        <p class="p2">{{ idType }}</p>
                    </li>
                    <li>
                        <p class="p1">Issuing country</p>
                        <p class="p2">{{ country }}</p>
                    </li>
                    <li class='li_img'>
                        <p class="p1">ID Upload</p>
                        <span class="img">
                            <img :src="identity" alt="" />
                            <span class="txt">
                                <p class="name">{{ identityName }}</p>
                                <p class="size">Size: {{ Math.floor(identitySize / 1000) }}kb</p>
                            </span>
                        </span>
                    </li>
                    <li class='li_img'>
                        <p class="p1">Finstack requested selfie</p>
                        <span class="img">
                            <img :src="selfie" alt="" />
                            <span class="txt">
                                <p class="name">{{ selfieName }}</p>
                                <p class="size">Size: {{ Math.floor(selfieSize / 1000) }}kb</p>
                            </span>
                        </span>
                </li>

            </ul>
        </span>

        <span class="spq">
            <div class="links">
                <NuxtLink to="/identity" class="a a1">Back</NuxtLink>
                <button type="submit" class="a a2">Save & continue</button>

            </div>
        </span>


    </div>
</form></template>

<script setup>
import { useAuthStore } from '~~/store/auth';
definePageMeta({
    layout: "auth",
});
// identity info
const idType = ref(localStorage.getItem('idType'))
const country = ref(localStorage.getItem('country'))
const identity = ref(localStorage.getItem('identityFile'))
const identityName = ref(localStorage.getItem('identityName'))
const identitySize = ref(localStorage.getItem('identitySize'))
const selfie = ref(localStorage.getItem('selfieFile'))
const selfieName = ref(localStorage.getItem('selfieName'))
const selfieSize = ref(localStorage.getItem('selfieSize'))

// personal info
const firstName = ref(localStorage.getItem('firstName'))
const lastName = ref(localStorage.getItem('lastName'))
const phoneNumber = ref(localStorage.getItem('phoneNumber'))
const dateOfBirth = ref(localStorage.getItem('dateOfBirth'))
const address = ref(localStorage.getItem('address'))
const countryResidence = ref(localStorage.getItem('countryResidence'))
const stateRegion = ref(localStorage.getItem('stateRegion'))

const config = useRuntimeConfig()
const token = useAuthStore().$state.user.access

function dataURLtoFile(dataURL, fileName) {
  const arr = dataURL.split(',');
  const mime = arr[0].match(/:(.*?);/)[1];
  const bstr = atob(arr[1]);
  let n = bstr.length;
  const u8arr = new Uint8Array(n);

  while(n--) {
    u8arr[n] = bstr.charCodeAt(n);
  }

  return new File([u8arr], fileName, { type: mime });
}


const createIdentity = () => {
    const formData = new FormData()
    formData.append("issuing_country", country.value)
    formData.append("identity_type", idType.value)
    formData.append("identity_image", dataURLtoFile(identity.value, identityName.value))
    formData.append("selfie", dataURLtoFile(selfie.value, selfieName.value))

    const informationRes = useFetch(
        `${config.public.baseURL}/users/personal-informations/`,
        {
            'method': 'post',
            'body': {
                "country": countryResidence.value,
                "first_name": firstName.value,
                "last_name": lastName.value,
                "phone_number": phoneNumber.value,
                "date_of_birth": dateOfBirth.value,
                "residential_address": address.value,
                "region": stateRegion.value
            },
            onRequest({ request, options }) {
                options.headers = options.headers || {}
                options.headers.authorization = `Bearer ${token}`
            },
            onResponse({ request, response, options }) {
                if (response.ok) {
                    console.log("created personal information")
                } else {
                    useNotification().toast.error(response._data.message)
                }
            },
        }
    )

    const identityRes = useFetch(
        `${config.public.baseURL}/users/identity-informations/`,
        {
            'method': 'post',
            'body': formData,
            onRequest({ request, options }) {
                options.headers = options.headers || {}
                options.headers.authorization = `Bearer ${token}`
            },
            onResponse({ request, response, options }) {
                if (response.ok) {
                    console.log("created identity info")
                } else {
                    useNotification().toast.error(response._data.message)
                }
            }
        }
    )
    navigateTo('/identity_success')
}
</script>