<template>
    <div>
        <NuxtLayout :name="updateLayout">
            <div class="mt-32">
               <img src="~/assets/load.gif" alt="" class="w-2/5 m-auto">
                <p v-if="referral === '/receiving_account'" class="mb-6 text-center" @click="moveTo">Please wait while we connect you with <br> one of our agents</p>
                <p v-if="referral === '/buy-details'" class="mb-6 text-center" @click="moveTo">Processing, please wait</p>
            </div>
        </NuxtLayout>
    </div>
</template>

<script setup>
const referral = computed(() => useRouter().options.history.state.back)
const updateLayout = computed(() => {
    if (referral.value === '/receiving_account') {
        return 'conversion'
      } else if (referral.value === '/buy-details') {
        return 'p2p'
    }
})

definePageMeta({
    layout: false,
});
const moveTo = () => {
    if (referral.value === '/receiving_account') {
        navigateTo('/escrow_account')
    } else if (referral.value === '/buy-details') {
        navigateTo('/seller-processing')
    }
}
</script>