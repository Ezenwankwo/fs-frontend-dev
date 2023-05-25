<template>
    <div>
        <div>
            <div class="mt-32">
                <img src="~/assets/waiting-animation.gif" alt="" class="w-2/5 m-auto">
                <p class="mb-6 text-center">Please wait while the seller <br> process your payment...</p>
                <hr class="w-2/5 m-auto">
                <p class="mt-6 text-center font-light">Estimated time remaining</p>
                <p class="text-center mt-2 font-bold" @click="moveTo">14m:30s</p>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: 'p2p',
});
const moveTo = () => {
    navigateTo('/buy-confirmation')
}
</script>