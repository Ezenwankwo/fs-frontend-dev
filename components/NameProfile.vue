<template>
    <div class='name_profile'>
        <div class="u_img">
            <p class="txt">ME</p>
            <div class="img"></div>
        </div>
        <div class="u_txt">
            <p class="p1">Mavrick Egbuson</p>
            <p class="p2">Mavrick Egbuson</p>
        </div>
    </div>
</template>

<style scoped>
.name_profile {
    display: flex;
    align-items: center;
    justify-content: left;
    gap: 15px;
}


.name_profile .u_img {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 70px;
    height: 70px;
    /* border: solid; */
    overflow: hidden;
    position: relative;
}

.name_profile .u_img .txt {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    /* border: solid; */
    background-color: #5FA6F9;
    color: white;
    font-family: 'lora', sans-serif;
    font-weight: 600;
    font-size: 20px;
    position: absolute;
}

.name_profile .u_img .img {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    position: absolute;
    /* background-color: blue; */
}


.name_profile .u_txt {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    row-gap: 5px;
}


.name_profile .u_txt .p1 {
    font-family: 'lora', sans-serif;
    font-size: 20px;
    font-weight: 800;
}

.name_profile .u_txt .p2 {
    font-size: 15px;
    font-weight: 400;
    color: #373D4A;
}

@media screen and (max-width: 1000px) {
    .name_profile .u_img {
        width: 65px;
        height: 65px;
    }

    .name_profile .u_img .txt {
        font-size: 16px;
    }

    .name_profile .u_txt .p1 {
        font-size: 16px;
        font-weight: 700;
    }

    .name_profile .u_txt .p2 {
        font-size: 14px;
    }

}



@media screen and (max-width: 700px) {
    .name_profile .u_img {
        width: 75px;
        height: 75px;
    }

    .name_profile .u_txt {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        overflow: hidden;
        row-gap: 4px;
    }
}

@media screen and (max-width: 600px) {
    .name_profile {
        display: flex;
        align-items: center;
        justify-content: left;
        gap: 10px;
    }


    .name_profile .u_img {
        width: 50px;
        height: 50px;
    }

    .name_profile .u_img .txt {
        font-size: 14px;
        font-weight: 800;
    }



    .name_profile .u_txt .p1 {
        font-family: 'lora', sans-serif;
        font-size: 16px;
    }

    .name_profile .u_txt .p2 {
        font-size: 12px;
    }
}
</style>