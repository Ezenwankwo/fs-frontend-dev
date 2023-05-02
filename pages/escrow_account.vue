<template>
    <form action="" class="frm Idi">
        <div class="qs qs2">
            <span class="spq spq2">
                <span class="sp sp2 sp3">
                    <p class="top">Kindly make your transfer into the account below</p>
                </span>
            </span>

            <span class="spq">
                <span class="sp sp2">
                    <div class="details">
                        <div class="det">
                            <p class="tx tx1">Account Number</p>
                            <span class="spt">

                                <p class="tx tx2">0464791406 </p>
                                <Icon name="material-symbols:file-copy-outline" />
                            </span>
                        </div>
                        <div class="det">
                            <p class="tx tx1">Account Name</p>
                            <span class="spt">

                                <p class="tx tx2">Peter Mavrick Jones </p>
                            </span>
                        </div>
                        <div class="det">
                            <p class="tx tx1">Bank</p>
                            <span class="spt">

                                <p class="tx tx2">Guaranty Trust Bank </p>
                            </span>
                        </div>
                        <div class="det">
                            <p class="tx tx1">Expected payment</p>
                            <span class="spt">

                                <p class="tx tx2">₦150,000.00 </p>
                            </span>
                        </div>
                    </div>
                </span>
            </span>

            <span class="spq">
                <div class="links">
                    <NuxtLink to="/confirmation" class="a a2 a3">
                        I have transferred<b> $1000 </b>to the account above!
                    </NuxtLink>
                </div>
            </span>

            <span class="spq">
                <p class="pr">
                    Having issues? <a class="a" onclick={backclick}>Try another account</a>
                </p>
            </span>

            <span class="spq spy">
                <ProcessingAnimation />
            </span>
        </div>
    </form>
</template>

<script setup>
definePageMeta({
    layout: "conversion",
});
</script>