<template>
    <header>
        <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-12" aria-label="Global">
            <div class="flex lg:flex-1">
                <a href="#" class="-m-1.5 p-1.5">
                    <span class="sr-only">Your Company</span>
                    <NuxtLink to="/"><img class="h-8 w-auto" src="~/assets/logo.png" alt="logo"></NuxtLink>
                </a>
                <div class="hidden lg:flex lg:gap-x-12 ml-12 px-1 text-white">
                    <NuxtLink to="/" activeClass="font-semibold">Home</NuxtLink>
                    <NuxtLink to="/classes" activeClass="font-semibold">Classes</NuxtLink>
                    <NuxtLink to="/pricing" activeClass="font-semibold">Pricing</NuxtLink>
                    <NuxtLink to="/contact" activeClass="font-semibold">Contact</NuxtLink>
                </div>
            </div>
            <div class="flex lg:hidden">
                <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    @click="toggle">
                    <span class="sr-only">Open main menu</span>
                    <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                        aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
            <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                <button type="button" class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900"
                    aria-expanded="false">
                    <div class="group flex items-center">
                        <div class="avatar placeholder">
                            <div class="bg-neutral-focus text-neutral-content bg-[#5FA6F9] rounded-full w-12">
                                <span>MX</span>
                            </div>
                        </div>
                        <div class="ltr:ml-3 rtl:mr-3 ml-2">
                            <p class="text-sm text-left font-medium text-slate-700 group-hover:text-slate-900">Mavrick Egbuson</p>
                            <p class="text-sm text-left font-medium text-slate-500 group-hover:text-slate-700">mavrick.eth@gmail.com
                            </p>
                        </div>
                    </div>
                    <svg class="h-5 w-5 flex-none text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
            </div>
        </nav>
        <!-- Mobile menu, show/hide based on menu open state. -->
        <div :class="[isOpen ? '' : 'hidden', 'md:hidden']" role="dialog" aria-modal="true">
            <!-- Background backdrop, show/hide based on slide-over state. -->
            <div class="fixed inset-0 z-10"></div>
            <div
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <NuxtLink to="/"><img class="h-8 w-auto" src="~/assets/img/logo.png" alt="logo"></NuxtLink>
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="toggle">
                        <span class="sr-only">Close menu</span>
                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
                            aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <NuxtLink to="/" activeClass="bg-[#136FFB] text-white"
                                class="-mx-3 block rounded-lg py-2 px-3 font-medium hover:bg-[#136FFB] hover:text-white"
                                @click="toggle">
                                Home</NuxtLink>
                            <NuxtLink to="classes" activeClass="bg-[#136FFB] text-white"
                                class="-mx-3 block rounded-lg py-2 px-3 font-medium hover:bg-[#136FFB] hover:text-white"
                                @click="toggle">
                                Classes</NuxtLink>
                            <NuxtLink to="/pricing" activeClass="bg-[#136FFB] text-white"
                                class="-mx-3 block rounded-lg py-2 px-3 font-medium hover:bg-[#136FFB] hover:text-white"
                                @click="toggle">
                                Pricing</NuxtLink>
                            <NuxtLink to="/contact" activeClass="bg-[#136FFB] text-white"
                                class="-mx-3 block rounded-lg py-2 px-3 font-medium hover:bg-[#136FFB] hover:text-white"
                                @click="toggle">
                                Contact</NuxtLink>
                        </div>
                        <div class="py-6">
                            <NuxtLink to="/register" class="btn btn-primary capitalize" @click="toggle">Register Now
                            </NuxtLink>
                            <NuxtLink to="/login" class="btn btn-primary btn-outline capitalize ml-4" @click="toggle">
                                Affiliate Login
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false
        }
    },
    methods: {
        toggle() {
            this.isOpen = !this.isOpen
        }
    }
}
</script>