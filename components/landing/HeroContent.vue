<template>
    <section class="hero">
        <a href="/loja">
            <div class="decoracao">
                <div class="photo">
                    <nuxt-img :alt="'carrinho de boneca'" src="/Cart.png" />
                </div>
                <div class="extras">
                    <div class="duck" v-for="i in 2" :key="i" :id="'duck-'+i" v-html="require('~/assets/svg/home/decoration/duck.svg?raw')"></div>
                    <div class="bear" v-for="i in 2" :key="i" :id="'bear-'+i" v-html="require('~/assets/svg/home/decoration/bear.svg?raw')"></div>
                    <div class="rattle" v-for="i in 2" :key="i" :id="'rattle-'+i" v-html="require('~/assets/svg/home/decoration/rattle.svg?raw')"></div>
                </div>
            </div>
            <div class="foto-boneca"></div>
            <client-only>
                <div class="wave-separator" v-html="require('~/assets/svg/home/wave-header.svg?raw')"></div>
            </client-only>
        </a>
    </section>
</template>

<style scoped>
    :where(.hero, .hero > a){
        display: flex;
        flex-direction: column;
        width: 100%;
    }

    .hero{
        height: auto;
        overflow: hidden;
        position: relative;
        background: var(--secondary-color);
    }

    .decoracao{
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 160px 30px 30px;
        width: 100%;
        z-index: 2;
    }

    .photo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        width: 100%;
        margin: 0 auto;
        max-width: 375px;
    }
    
    .photo img{
        aspect-ratio: 1.442;
        width: 100%;
        object-fit: contain;
        object-position: bottom;
        z-index: 5;
        transform: translateY(-15px);
    }

    .extras{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1;
        display: flex;
    }

    :where(.extras > div){
        position: absolute;
        height: min-content;
    }

    .wave-separator {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 140%;
        overflow: hidden;
        line-height: 0;
        /* z-index: -1; */
    }

    .wave-separator :where(svg) {
        position: relative;
        display: block;
        width: calc(143% + 1.3px);
        height: 220px;
    }

    .wave-separator :where(.shape-fill) {
        fill: var(--mobile-background-color);
    }
    
    @media screen and (max-width: 767px) {
        .photo::before{
            content: '';
            position: absolute;
            width: 130px;
            background: var(--mobile-background-color);
            border: 10px solid var(--mobile-background-color);
            height: 200px;
            clip-path: ellipse(50% 49% at 50% 50%);
            transform: translateY(-50px);
        }

        .photo::after{
            content: '';
            position: absolute;
            width: 135px;
            background: var(--secondary-color);
            height: 200px;
            clip-path: ellipse(50% 49% at 50% 50%);
            transform: translateY(-50px);
        }

        #duck-1{
            top: 75%;
            left: 10%;
        }

        #duck-2{
            top: 10%;
            right: 5%;
        }

        #bear-1{
            top: 10%;
            right: 5%;
        }

        #bear-2{
            top: 75%;
            left: 10%;
        }

        #rattle-1{
            top: 10%;
            right: 5%;
        }

        #rattle-2{
            top: 75%;
            left: 10%;
        }
    }

    @media screen and (min-width: 768px) {
        .wave-separator :where(.shape-fill){
            fill: var(--desktop-background-color);
        } 
    }
    
    

</style>


/* ratio = width(588) / heigth(848)
new height = new width * ratio; */

