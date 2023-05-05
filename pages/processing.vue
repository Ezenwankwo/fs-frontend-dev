<template>
    <div>
        <div class="grid lg:grid-cols-10">
            <div class="col-span-7 ml-auto mt-auto">
                <NuxtLink to="confirmation"><img src="~/assets/rename.svg" alt=""></NuxtLink>
                <p class="mb-6 text-center">Please wait while we connect you with <br> one of our agents</p>
            </div>
        </div>
    </div>
</template>

<script setup>
definePageMeta({
    layout: "conversion",
});
</script>