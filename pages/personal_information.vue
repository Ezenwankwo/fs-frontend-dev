<template>
   <div>
    <form class="frm PID" @submit.prevent="createPersonalInformation">
        <p class="t1">Personal information</p>
        <p class="t2">Enter your personal details as required below</p>

        <div class="qs">
            <div class="spq">
                <div class="sp">
                    <label>First name</label>
                    <input v-model.trim="firstName" type="text" placeholder="Enter your first name" required />
                </div>

                <div class="sp">
                    <label>Last name</label>
                    <input v-model.trim="lastName" type="text" placeholder="Last name" required />
                </div>
            </div>

            <div class="spq">
                <div class="sp">
                    <label>Phone number</label>
                    <input v-model.trim="phoneNumber" type="tel" placeholder="8183096264" required />
                </div>

                <div class="sp">
                    <label>Date of birth</label>
                    <input v-model.trim="dateOfBirth" type="date" placeholder="YYYY-MM-DD" required />
                </div>
            </div>

            <div class="spq">
                <div class="sp sp2">
                    <label>Address</label>
                    <input v-model.trim="address" type="text" placeholder="Enter Address" required />
                </div>
            </div>

            <ClientOnly>
              <div class="spq">
                <div class="sp">
                    <label>Country of residence</label>
                    <select v-model.trim="country" class="select w-full font-medium"
                    style="border-radius: 30px; border: solid 1px #DCDEE5; padding: 0 25px; height: 55px; outline: none;"
                    required>
                      <option v-for="country in countries" :key="country">{{ country }}</option>
                  </select>
                </div>

                <div class="sp">
                    <label>Region/State</label>
                    <input v-model.trim="stateRegion" type="text" placeholder="Region or state" required />
                </div>
              </div>
            </ClientOnly>

            <div class="spq">
                <p class="dt_info"><i class="material-icons-outlined"><Icon name="mdi:calendar-text" /></i> Ensure your name matches the name on
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
    layout: "auth",
});
const token = useAuthStore().$state.user.access
const config = useRuntimeConfig()

const countries = ref([])
const firstName = ref('')
const lastName = ref('')
const phoneNumber = ref('')
const dateOfBirth = ref('')
const address = ref('')
const country = ref('')
const stateRegion = ref('')
const createPersonalInformation = () => {
  localStorage.setItem("firstName", firstName.value)
  localStorage.setItem("lastName", lastName.value)
  localStorage.setItem("phoneNumber", phoneNumber.value)
  localStorage.setItem("dateOfBirth", dateOfBirth.value)
  localStorage.setItem("address", address.value)
  localStorage.setItem("countryResidence", country.value)
  localStorage.setItem("stateRegion", stateRegion.value)
  navigateTo('/identity')
}
onMounted(async () => {
  if(localStorage.getItem("firstName")) {
    firstName.value = localStorage.getItem("firstName")
    lastName.value = localStorage.getItem("lastName") ? localStorage.getItem("lastName") : ''
    phoneNumber.value = localStorage.getItem("phoneNumber") ? localStorage.getItem("phoneNumber") : ''
    dateOfBirth.value = localStorage.getItem("dateOfBirth") ? localStorage.getItem("dateOfBirth") : ''
    address.value = localStorage.getItem("address") ? localStorage.getItem("address") : ''
    country.value = localStorage.getItem("countryResidence") ? localStorage.getItem("countryResidence") : ''
    stateRegion.value = localStorage.getItem("stateRegion") ? localStorage.getItem("stateRegion") : ''
  }
  await useFetch(
    `${config.public.baseURL}/users/countries/`,
    {
        method: 'get',
        onResponse({ request, response, options }) {
            countries.value = response._data.data
        },
    },
  )
})
</script>

<style scoped>
* {
  background-color: white;
}
</style>