<template>
    <div class="container">
        <Navbar />
        <Nuxt />
        <ShoppingCartDrawer />
        <Footer/>
    </div>
</template>

<style>

@font-face {
    font-family: 'Prociono';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~/assets/fonts/Prociono-Regular-webfont.woff') format('woff'), 
         url('~/assets/fonts/Prociono-Regular-webfont.eot') format('embedded-opentype'),
         url('~/assets/fonts/Prociono-Regular-webfont.svg') format('svg'),
         url('~/assets/fonts/Prociono-Regular-webfont.ttf') format('truetype');
}

@font-face {
    font-family: 'Goudy Bookletter 1911';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~/assets/fonts/goudy_bookletter_1911-webfont.woff') format('woff'), 
         url('~/assets/fonts/goudy_bookletter_1911-webfont.eot') format('embedded-opentype'),
         url('~/assets/fonts/goudy_bookletter_1911-webfont.svg') format('svg'),
         url('~/assets/fonts/goudy_bookletter_1911-webfont.ttf') format('truetype');
}

@font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~/assets/fonts/WorkSans-VariableFont_wght.ttf') format('truetype');
}

:root{
    --navTransition: all 125ms ease-in;
    --main-color: #d3838e;
    --secondary-color: #c3d5e2;
}

:where(html, body, .container, .container *){
    margin: 0;
    padding: 0;
    border: none;
    scrollbar-width: none;
}

:where(body){
    text-rendering: optimizeLegibility;
    letter-spacing: .025em;
}

:where(a){
    text-decoration: none;
    color: #d3838e;
}

@media screen and (max-width: 1023px) {
    :where(html, body){
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
