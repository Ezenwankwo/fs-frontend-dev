<template>
   <div>
    <form class="frm PID" @submit.prevent="createPersonalInformation">
        <p class="t1">Personal information</p>
        <p class="t2">Enter your personal details as required below</p>

        <div class="qs">
            <span class="spq">
                <span class="sp">
                    <label>First name</label>
                    <input v-model.trim="firstName" type="text" placeholder="Enter your first name" required />
                </span>

                <span class="sp">
                    <label>Last name</label>
                    <input v-model.trim="lastName" type="text" placeholder="Last name" required />
                </span>
            </span>

            <span class="spq">
                <span class="sp">
                    <label>Phone number</label>
                    <input v-model.trim="phoneNumber" type="tel" placeholder="8183096264" required />
                </span>

                <span class="sp">
                    <label>Date of birth</label>
                    <input v-model.trim="dateOfBirth" type="text" placeholder="YYYY-MM-DD" required />
                </span>
            </span>

            <span class="spq">
                <span class="sp sp2">
                    <label>Address</label>
                    <input v-model.trim="address" type="text" placeholder="Enter Address" required />
                </span>
            </span>

            <span class="spq">
                <span class="sp">
                    <label>Country</label>
                    <input v-model.trim="country" type="text" placeholder="Select country" required />
                </span>

                <span class="sp">
                    <label>Region/State</label>
                    <input v-model.trim="stateRegion" type="text" placeholder="Region or state" required />
                </span>
            </span>

            <div class="spq">
                <p class="dt_info"><i class="material-icons-outlined">event_note</i> Ensure your name matches the name on
                    your ID card</p>
            </div>

            <div class="spq">
                <div class="links">
                    <NuxtLink class="a a33">Skip</NuxtLink>
                    <button type="submit" class="a a2">Save & continue</button>
                </div>
            </div>


        </div>
    </form>
   </div>
</template>

<script setup>
import { useAuthStore } from '~~/store/auth';
definePageMeta({
    layout: "conversion",
});
const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()

const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const dateOfBirth = ref('')
const address = ref('')
const country = ref('')
const stateRegion = ref('')
const createPersonalInformation = () => {
    const res = useFetch(
        `${config.public.baseURL}/users/personal-informations/`,
        {
            'method': 'post',
            'body': {
                "country": country.value,
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
                    useAuthStore().setProfile(response._data.data)
                    navigateTo('/review_amount')
                } else {
                    useNotification().toast.error(response._data.message)
                }
            },
        }
    )
}
</script>