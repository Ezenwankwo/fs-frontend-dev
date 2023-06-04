<template>
    <div>
        <AuthHeader />
        <div class="font-sans antialiased bg-white dark:bg-black text-black dark:text-white grid min-h-screen place-content-center overflow-hidden"
            data-v-bc8852ab="">
            <div class="fixed left-0 right-0 spotlight z-10" data-v-bc8852ab=""></div>
            <div v-if="error.statusCode === 404" class="max-w-520px text-center z-20" data-v-bc8852ab="">
                <h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bc8852ab="">{{ error.statusCode }}</h1>
                <p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bc8852ab="">Page not
                    found: {{ error.url }}</p>
                <div class="w-full flex items-center justify-center" data-v-bc8852ab=""><a href="/"
                        class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
                        data-v-bc8852ab="">Go back home</a></div>
            </div>
            <div v-else class="max-w-520px text-center z-20" data-v-bc8852ab="">
                <h1 class="text-8xl sm:text-10xl font-medium mb-8" data-v-bc8852ab="">{{ error.statusCode }}</h1>
                <p class="text-xl px-8 sm:px-0 sm:text-4xl font-light mb-16 leading-tight" data-v-bc8852ab="">Something went wrong. We have been notified and are working to fix it.</p>
                <div class="w-full flex items-center justify-center" data-v-bc8852ab=""><a href="/"
                        class="gradient-border text-md sm:text-xl py-2 px-4 sm:py-3 sm:px-6 cursor-pointer"
                        data-v-bc8852ab="">Check back shortly</a></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
  error: Object
})
</script>