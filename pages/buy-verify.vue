<template>
    <main>
        <section class="sectioni">
            <p class="t1 text-left">Verify it's you</p>
            <p class="t2">Verify transaction to help us know it’s really you</p>
            <p class="to">
                Kindly enter the 6-digit code sent to your email <br /><span class='ap'> gb********43@gmail.com</span>
            </p>
            <form class='form2'>
                <span class="ct">
                    <input type="number" name="" id="" maxlength="1" />
                    <input type="number" name="" id="" min="0" max="9" step="1" />
                    <input type="number" name="" id="" min="0" max="9" step="1" />
                    <input type="number" name="" id="" min="0" max="9" step="1" />
                    <input type="number" name="" id="" min="0" max="9" step="1" />
                    <input type="number" name="" id="" min="0" max="9" step="1" />
                </span>
                <p class="to to2">Expires in <span class='ap'> 00:34</span> </p>
                <p class="to to2">Didn’t get the code?
                    <a class='a'>Resend</a>
                </p>
                <span class="process">
            <div class="process-position">
                <NuxtLink to="/p2p" class="process-item process-back">Back</NuxtLink>
                <NuxtLink to="/processing" class="process-item process-forward">Confirm</NuxtLink>
            </div>
        </span>
            </form>
        </section>
    </main>
</template>

<script setup>
definePageMeta({
    layout: 'p2p',
});
</script>

<style scoped>
.process {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    width: 100%;
    margin-top: 45px;
}

.process-position {
    width: 100%;
    display: flex;
    justify-content: right;
    gap: 13px;
}
.process-item {
    padding: 10px 20px;
    font-size: 14px;
    border: solid 2px #2F67FA;
    border-radius: 30px;
}

.process-back {
    color: #2F67FA;
    background-color: white;
    cursor: pointer;
}

.process-forward {
    background-color: #2F67FA;
    color: white;
    cursor: pointer;
}</style>