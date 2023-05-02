<template>
    <div>
        <ConversionHeader />
        <div class="flex">
            <div class="p-12 mx-auto">
                <div class="w-full text-center">
                    <img src="~/assets/star.svg" alt="" class="mx-auto" />
                    <div class="mb-6">
                        <p class="text-[#373D4A] font-bold">Woohoo!</p>
                        <p class="text-lg text-[#373D4A]">Thank you for choosing FinStack!</p>
                    </div>
                    <div class="mb-6">
                        <p class="text-[#373D4A] mb-2">Rate our service</p>
                        <div class="rating rating-lg">
                            <input type="radio" name="rating-9" class="rating-hidden" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" checked />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                            <input type="radio" name="rating-9" class="mask mask-star-2" />
                        </div>
                    </div>
                    <p>Leave a review on</p>
                    <button class="btn btn-block normal-case bg-[#2F67FA] mb-6 border border-0 mx-auto">facebook</button>
                    <button class="btn btn-block outline outline-[#2F67FA] bg-white text-[#2F67FA] normal-case mb-6 border border-0 mx-auto">twitter</button>
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