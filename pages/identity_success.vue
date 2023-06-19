<template>
   <div>
    <NavBar/>
    <main class='Aumain'>
        <section class='section'>
            <div class="cnt">
                <div class="fl1">
                    <div class="success">
                        <img src="~/assets/success.svg" alt="" class='gif' />
                        <p class="p1">Thanks for applying!</p>
                        <p class="p2">We will send you and email shortly once your account is verified.</p>
                        <a class='a' @click="logout">Awesome thanks</a>
                    </div>
                </div>
            </div>
        </section>
    </main>
   </div>
</template>

<script setup>
import { useAuthStore } from "~~/store/auth";

definePageMeta({
    middleware: ['auth',],
});

const logout = (event) => {
  event.preventDefault();
  useAuthStore().logout();
  window.location.reload();
};
</script>