<template>
    <div>
        <div class="flex">
            <div class="w-7/10 p-12 mx-auto">
                <p class="mb-6 text-center">Kindly transfer your asset into the <br>
                    account details below</p>
                <div class="w-full text-center">
                    <img src="~/assets/success.svg" alt="" class="mx-auto" />
                    <div class="mb-6">
                        <p class="text-[#373D4A] font-bold">You’ve been credited ₤1,200.00</p>
                        <p class="text-lg text-[#373D4A]">Please confirm the credit transaction</p>
                    </div>
                    <NuxtLink to="rating"><button class="btn block rounded-full normal-case bg-[#2F67FA] mb-6 border border-0 mx-auto">Yes, I have
                        received ₤1,200.00</button></NuxtLink>
                    <p class="mb-2">Didn’t get the credit?</p>
                    <p class="text-[#2F67FA]">Reach out to our customer support</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "conversion",
});
</script>