<template>
    <div class="container">
        <Navbar />
        <TopButtons />
        <Header />
        <Nuxt />
        <ShoppingCartDrawer />
        <Footer/>
    </div>
</template>

<style>

@media screen and (min-width: 1024px){
    body.nav-open{
        overflow: hidden;
    }

    @keyframes fadein{
        0%{
            opacity: 0%;
        }
        100%{
            opacity:60%;
        }
    }

    @keyframes fadeout{
        0%{
            width: 100vw;
            height: 100%;
            visibility: visible;
            opacity: 60%;
        }
        99%{
            width: 100vw;
            height: 100%;
            visibility: visible;
            opacity: 0%;
        }
        100%{
            visibility: hidden;
        }
    }

    body .container::after{
        visibility: hidden;
        content: '';
        width: 0;
        height: 0;
        position: fixed;
        background: var(--alternative-blue);
        left: 0;
        top: 0;
        z-index: 100;
        animation: fadeout 0.25s ease-out;
    }

    body.nav-open .container::after {
        visibility: visible;
        width: 100vw;
        height: 100%;
        opacity: 60%;
        animation: fadein 0.25s ease-in-out;
    }
}

</style>

<script>
export default {
    name: 'Layout',
    data: () => ({
        isMobile: false, 
    }), 
    methods: {
        breakpointChange(){
            window.dispatchEvent(new CustomEvent('on-breakpoint-change', {
                detail: {
                    isMobile: this.isMobile
                }
            }));
        },
        isThisMobile(){
            if(this.$screen.sm || this.$screen.md){
                if(this.$screen.landscape && this.$screen.height < 600){
                    if(this.isMobile === false){
                        this.$storage.set('isMobile', true);
                        this.isMobile = true;
                        this.breakpointChange();
                        return true;
                    }
                }
            }
            if (this.$screen.xs && !this.$screen.md){
                    if(this.isMobile === false){
                        this.$storage.set('isMobile', true);
                        this.isMobile = true;
                        this.breakpointChange();
                        return true; 
                    } 
            }
            else{
                if(this.isMobile === true){
                    this.$storage.set('isMobile', false);
                    this.isMobile = false;
                    this.breakpointChange();
                    return false;
                }
            }
        }
    },
    mounted(){
        this.isThisMobile();
    },
    watch: {
        '$screen.width'(){
            this.isThisMobile();
        },
    }
}
</script>