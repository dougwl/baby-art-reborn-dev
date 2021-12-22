<template>
    <div class="container">
        <Navbar />
        <Header />
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
    src: url('~/assets/fonts/Prociono-VF.woff2') format("woff2 supports variations"),
         url('~/assets/fonts/Prociono-VF.woff2') format('woff2-variations') 
        /*  url('~/assets/fonts/Prociono-Regular-webfont.eot') format('embedded-opentype'),
         url('~/assets/fonts/Prociono-Regular-webfont.svg') format('svg'),
         url('~/assets/fonts/Prociono-Regular-webfont.ttf') format('truetype'); */
}

@font-face {
    font-family: 'Goudy Bookletter 1911';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~/assets/fonts/GoudyBookletter1911-VF.woff2') format("woff2 supports variations"),
         url('~/assets/fonts/Prociono-VF.woff2') format('woff2-variations')
         /* url('~/assets/fonts/goudy_bookletter_1911-webfont.eot') format('embedded-opentype'),
         url('~/assets/fonts/goudy_bookletter_1911-webfont.svg') format('svg'),
         url('~/assets/fonts/goudy_bookletter_1911-webfont.ttf') format('truetype'); */
}

@font-face {
    font-family: 'Work Sans';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~/assets/fonts/WorkSans[wght].woff2') format("woff2 supports variations"),
         url('~/assets/fonts/WorkSans[wght].woff2') format('woff2-variations')
}

@font-face {
    font-family: 'Caveat';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('~/assets/fonts/Caveat-VariableFont_wght.woff2') format("woff2 supports variations"),
         url('~/assets/fonts/Caveat-VariableFont_wght.woff2') format('woff2-variations')
}

:root{
    --navTransition: all 125ms ease-in;
    --main-color: #d3838e;
    --secondary-color: #c3d5e2;
    --alternative-blue: #D3E0E9;
    --illustration-color: #7BA9B2;
    --desktop-background-color: #F9F7F2;
    --mobile-background-color: white;
}

:where(*){
    box-sizing: border-box;
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

:where(html){
    font-family: 'Prociono', system-ui, -apple-system;
}

:where(a,p){
    text-decoration: none;
    color: #d3838e;
}

.visually-hidden{
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0,0,0,0);
    white-space: nowrap;
    border: 0;
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

<script>
export default {
    name: 'Layout',
    methods: {
        isMobile() {
            if(this.$screen.sm || this.$screen.md){
                if(this.$screen.landscape && this.$screen.height < 600){
                    this.$storage.set('isMobile', true);
                    return true;
                }
            }
            if (this.$screen.xs && !this.$screen.md){
                    this.$storage.set('isMobile', true);
                    return true; 
            }
            else{
                this.$storage.set('isMobile', false);
                return false;
            }
        }
    },
    mounted(){
        this.isMobile();
    }
}
</script>