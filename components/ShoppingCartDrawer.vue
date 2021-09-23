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
    background: lightcoral;
    transition: var(--navTransition);;
}

@media screen and (min-width: 1024px){
    .cart-drawer{
        right: 75px;
        width: 75px;
    }
}

</style>