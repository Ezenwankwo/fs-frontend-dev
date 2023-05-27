<template>
    <nav class='nav-fixed'>
        <!--<SideNav />-->
        <NuxtLink to='/' class='logo_a'> <img src="~/assets/logo.png" alt="wame" class='logo' /></NuxtLink>
        <div class='sp'>
            <a to='/blog_index' class='link no-underline'>Our blog</a>
            <a to='/contactus' class='link no-underline'>Contact us</a>
            <!-- <NuxtLink to="/identity" class='link no-underline'>Become a seller</NuxtLink> -->
            <NuxtLink to='p2p' class='link no-underline'>P2P marketplace</NuxtLink>
        </div>
        <span class='log'>
            <NuxtLink to="/login" class='link login no-underline'>Login</NuxtLink>
            <NuxtLink to="/signup" class='link signup no-underline'>Get Started</NuxtLink>
        </span>
        <Icon id="i" class="i ii material-icons" name="mdi:menu" onClick={sidebarOpen} />

    </nav>
</template>