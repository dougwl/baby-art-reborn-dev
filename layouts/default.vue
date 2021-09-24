<template>
    <div class="container">
        <Navbar />
        <Nuxt />
        <ShoppingCartDrawer />
    </div>
</template>

<style>

:root{
    --navTransition: all 125ms ease-in;
}


:where(html, body, .container, .container > *){
    margin: 0;
    padding: 0;
    border: none;
}

@media screen and (max-width: 1023px) {
    :where(html){
        overflow-x: hidden;
    }
}


@media screen and (min-width: 1024px){
    .container > :nth-child(2) {
        padding: 0 75px;
        transition: var(--navTransition);
    }
}

</style>