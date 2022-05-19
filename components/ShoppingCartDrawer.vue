<template>
    <section class="cart-drawer">
    </section>
</template>

<style scoped>

.cart-drawer{
    position: fixed;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100vh;
    transform: translateX(100%);
    z-index: 99;
    align-items: stretch;
    background: #f9f7f2;
    transition: var(--navTransition);;
}

@media screen and (max-width: 1023px){
    .cart-drawer{
        display: none;
    }
}

@media screen and (min-width: 1024px){
    .cart-drawer{
        --size: min(75px, 5%);
        right: var(--size);
        max-width: var(--size);
        border-left: 1px solid #d3838e;
    }
}

</style>