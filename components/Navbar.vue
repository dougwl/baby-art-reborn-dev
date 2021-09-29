<template>
    <section class="nav">
    </section>
</template>

<style scoped>

.nav{
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    transform: translateX(-100%);
    z-index: 99;
    align-items: stretch;
    background: lightyellow;
    transition: var(--navTransition);
}

@media screen and (max-width: 1023px){
    .nav{
        display: none;
    }
}

@media screen and (min-width: 1024px){
    .nav{
        left: 75px;
        max-width: 75px;
    }
}

</style>