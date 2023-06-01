<template>
   <div>
    <AuthHeader />
    <main class='Aumain'>
        <section class='section'>
            <div class="cnt">
                <div class="fl1">
                    <div class="success">
                        <img src="~/assets/success.svg" alt="" class='gif' />
                        <p class="p1">Thanks for applying!</p>
                        <p class="p2">You will be notified if you are qualified.</p>
                        <a class='a'>Awesome thanks</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
   </div>
</template>

<script setup>
definePageMeta({
    middleware: ['auth',],
});
</script>