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
    background: #f9f7f2;
    transition: var(--navTransition);
}

@media screen and (max-width: 1023px){
    .nav{
        display: none;
    }
}

@media screen and (min-width: 1024px){
    .nav{
        --size: min(75px, 5%);
        left: var(--size);
        max-width: var(--size);
        border-right: 1px solid #d3838e;
    }
}

</style>