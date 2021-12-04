<template>
    <section class="hero">
        <a href="/loja">
            <div class="identity">
                <div class="photo">
                    <nuxt-img :alt="'carrinho de boneca'" src="/Cart.png"  style="object-fit:contain;"/>
                    <client-only v-if="!isMobile">
                        <div class="illustration decor animated">
                                <div class="flower" v-for="i in 2" :key="i + 'ff'" :id="extras.desktop.flowers.fancy.id + i" >
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.fancy.svg" /> -->
                                    <component :is="extras.desktop.flowers.fancy.svg" />
                                </div>
                                <div class="flower" v-for="i in 2" :key="i + 'fb'" :id="extras.desktop.flowers.boring.id + i">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.boring.svg" /> -->
                                    <component :is="extras.desktop.flowers.boring.svg" />
                                </div>
                                <div class="flower" :id="extras.desktop.flowers.average.id" :key="'fa'">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.average.svg" /> -->
                                    <component :is="extras.desktop.flowers.average.svg" />
                                </div>
                        </div>
                    </client-only>
                </div>
                <div class="art animated">
                    <client-only v-if="isMobile">
                        <div class="mobile decor">
                            <div class="duck" v-for="i in 2" :key="i + 'd'" :id="extras.mobile.duck.id + i" >
                                <!-- <SvgLoader :rawHTML="extras.mobile.duck.svg" /> -->
                                <component :is="extras.mobile.duck.svg" />
                            </div>
                            
                            <div class="bear" v-for="j in 2" :key="j + 'b'" :id="extras.mobile.bear.id + j"> 
                                <!-- <SvgLoader :rawHTML="extras.mobile.bear.svg" /> -->
                                <component :is="extras.mobile.bear.svg" />
                            </div>
                            <div class="rattle" v-for="k in 2" :key="k + 'c'" :id="extras.mobile.rattle.id + k">
                                <!-- <SvgLoader :rawHTML="extras.mobile.rattle.svg" />
                                </div> --> 
                                <component :is="extras.mobile.rattle.svg" />
                            </div>
                        </div>
                    </client-only>    
                    <client-only v-else-if="!isMobile">
                        <div class="desktop decor">
                            <div class="sky">
                                <div class="flower grow" v-for="i in 2" :key="i + 'fs'" :id="extras.desktop.flowers.top.id + i">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.top.svg" /> -->
                                    <component :is="extras.desktop.flowers.top.svg" />
                                </div>
                            </div>
                            <div class="bears">
                                <div class="bear" :id="extras.desktop.bears.withoutRattle.id">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.bears.withoutRattle.svg" /> -->
                                    <component :is="extras.desktop.bears.withoutRattle.svg" />
                                </div>
                                <div class="bear" :id="extras.desktop.bears.withRattle.id">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.bears.withRattle.svg" /> -->
                                    <component :is="extras.desktop.bears.withRattle.svg" />
                                </div>
                            </div>
                            <div class="ground">
                                <div class="flower" v-for="i in 4" :key="i + 'fb'" :id="extras.desktop.flowers.bottom.id + i">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.bottom.svg" /> -->
                                    <component :is="extras.desktop.flowers.bottom.svg" />
                                </div>
                            </div>
                        </div>
                    </client-only>
                </div>
                <client-only>
                    <div class="wave-separator">
                        <!-- <SvgLoader :rawHTML="extras.responsive.waveSeparator.svg" /> -->
                        <component :is="extras.responsive.waveSeparator.svg" />
                    </div>
                </client-only>
            </div>
            <div class="filler">
                <p class="caption">A arte que transforma bonecas comuns <br> em bebês quase reais</p>
            </div>
            <div class="foto-boneca"></div>
        </a>
    </section>
</template>

<style scoped>

    :where(.hero){
        --sidebar-size: 75px;
    }

    :where(.hero, .hero > a){
        display: flex;
        flex-direction: column;
        width: 100%;
        align-items: center;
    }

    .hero{
        height: auto;
        overflow: hidden;
        position: relative;
        background: var(--secondary-color);
    }

    .identity{
        position: relative;
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        /* padding: 160px 30px 30px; */
        padding: 160px 30px 45px;
        width: 100%;
        z-index: 2;
        margin-bottom: 40px;
    }

    .photo{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 40px;
        width: 100%;
        margin: 0 auto;
        position: relative;
    }

    :where(.photo, .caption){
        max-width: 330px;
    }
    
    .photo img{
        aspect-ratio: 1.442;
        width: 100%;
        /* max-width: 330px; */
        object-fit: contain;
        object-position: bottom;
        z-index: 5;
        transform: translateY(-15px);
    }

    :where(.art, .illustration){
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        /* z-index: 1; */
        display: flex;
    }

    :where(.animated, .wave-separator :where(svg)){
        animation: fadeIn 0.75s cubic-bezier(0.85, 0, 0.15, 1);
    }

    @keyframes fadeIn {
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    /* @keyframes shrink{
        from{
            transform: scale(1.5);
        }
        to{
            transform: scale(1);
        }
    }

    @keyframes growAndRotate{
        from{
            transform: translateY(-50px) scale(0.5) rotate(-60deg);
        }
        to{
            transform: translateY(0) scale(1) rotate(1deg);
        }
    }

    @keyframes growAndRotateInverted{
        from{
            transform: translateY(-50px) scaleY(0.5) scaleX(-0.5) rotate(-60deg);
        }
        to{
            transform: translateY(0) scaleY(1) scaleX(-1) rotate(0deg);
        }
    }

    .grow{
        animation: growAndRotate 0.4s ease-in-out;
    }

    .sky > :nth-child(2){
        animation: growAndRotateInverted 0.3s ease-in-out;
    }

    .shrink{
        animation: shrink 0.325s ease-in-out;
    }

    .ground div{
        animation-delay: 20s;
    } */

    .art .ground{
        animation-delay: 5s;
    }

    .art :where(.decor){
        width: 100%;
        height: 100%;
    }

    .art :where(.decor > div, .decor > div > div){
        position: absolute;
        height: min-content;
        width: min-content;
    }

    .illustration > div{
        position: absolute;
        height: min-content;
        width: min-content;
    }

    .art :where(.decor svg){
        height: 100%;
    }

    :where(.filler){
        /* z-index: 1; */
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
        background: var(--mobile-background-color);
        transform: translateY(-45px);
        padding-top: 10px;
        min-height: 120px;
        z-index: 1;
    }

    :where(.caption){
        font-family: 'Caveat';
        line-height: 20px;
        font-weight: 400;
    }

    .caption{
        font-size: 20px;
        letter-spacing: .05em;
        text-align: center;
        /* transform: translateY(-40px); */
    }

    .wave-separator {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 140%;
        overflow: hidden;
        line-height: 0;
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


    @media screen and (max-width: 480px){
        :where(.photo, .caption){
            max-width: 300px;
        }
    }

    
    @media screen{
        .photo::before{
            --shape-width: min(33%, 130px);
            content: '';
            position: absolute;
            width: var(--shape-width);
            background: var(--mobile-background-color);
            border: 10px solid var(--mobile-background-color);
            height: min(200px,50vw);
            clip-path: ellipse(50% 49% at 50% 50%);
            transform: translateY(-50px);
        }

        .photo::after{
            --shape-width: min(34.61%, 135px);
            content: '';
            position: absolute;
            width: var(--shape-width);
            background: var(--secondary-color);
            height: min(200px,50vw);
            clip-path: ellipse(50% 49% at 50% 50%);
            transform: translateY(-50px);
        }

        .art :where(.mobile > div){
            z-index: 3;
        }

        #duck-1{
            top: 75%;
            left: 10%;
            transform: rotate(300deg);
        }

        #duck-2{
            top: 10%;
            right: 5%;
        }

        #bear-1{
            top: 40%;
            left: 15%;
        }

        #bear-2{
            top: 65%;
            right: 10%;
            z-index: 3;
        }

        #rattle-1{
            top: 40%;
            right: 15%;
        }

        #rattle-2{
            top: 85%;
            left: 30%;
        }
    }

    @media screen and (min-width: 768px) and (min-height: 500px) {

        .photo::before,
        .photo::after{
            display: none;
        }

        .identity{
            padding-top: 250px;
        }

        .wave-separator :where(.shape-fill){
            fill: var(--desktop-background-color);
        }

        .filler{
            background: var(--desktop-background-color);
        }

        :where(.sky){
            --sky-decor-width: 130px;
        }

        .sky :where(svg){
            max-width: var(--sky-decor-width);
        }
        
        #top-flower-1{
            top: 0;
            right: 15%;
        }

        #top-flower-2{
            top: 0;
            left: 15%;
            transform: scaleX(-1);
        }

        .art :where(.decor > div){
            height: 100%;
            width: 100%;
        }

        :where(.ground){
            --ground-decor-height: 60px;
        }

        .ground :where(div,svg){
            width: min-content;
        }

        .ground :where(svg){
            height: var(--ground-decor-height);
        }

        #bottom-flower-1{
            top: calc((100% - 220px) + 35px);
            left: 10%;
            transform: rotateZ(20deg);
        }

        #bottom-flower-2 :where(svg){
            height: calc(var(--ground-decor-height) / 1.3);
        }

        #bottom-flower-2{
            top: calc((100% - 220px) + 75px);
            left: 25%;
            transform: rotateZ(10deg);
        }

        #bottom-flower-3{
            top: calc((100% - 220px) - 15px);
            right: 20%;
            transform: rotateZ(-10deg);
        }

        #bottom-flower-4 :where(svg){
            height: calc(var(--ground-decor-height) / 1.2);
        }

        #bottom-flower-4{
            top: calc((100% - 220px) - 30px);
            right: 10%;
            transform: rotateZ(-5deg);
        }

        #bear-without-rattle-{
            right: 10%;
            bottom: -40%;
            z-index: 1;
        }

        #bear-with-rattle-{
            left: 10%;
            bottom: -40%;
            z-index: 3;
        }

        #fancy-flower-1{
            transform: scale(0.8);
            top: calc(50% - 50px);
            left: calc(50% - 130px);
        }

        #fancy-flower-2{
            transform: scaleX(-1) scale(0.8);
            top: calc(50% - 60px);
            right: calc(50% - 130px);
        }

        #boring-flower-1{
            transform: scale(0.8);
            top: calc(50% - 130px);
            right: calc(50% - 140px);
        }

        #boring-flower-2{
            transform: scale(-0.8, 0.8) rotateZ(-10deg);
            top: calc(50% - 145px);
            left: calc(50% - 110px);
        }

        #average-flower-{
            transform: scale(0.8);
            top: calc(50% - 200px);
            left: calc(50% - 55px);
        }
    }
    
    @media screen and (min-width: 1024px){
        :where(.hero){
            padding-left: var(--sidebar-size);
            padding-right: var(--sidebar-size);  
        }
    }
    

</style>

<script>
import svgLoader from '../svgLoader.vue';

export default {
  components: { svgLoader },
    data() {
        return {
            extras: {
                mobile: {
                    duck: {
                        id: 'duck-',
                        svg: require('~/assets/svg/home/mobile/decoration/duck.svg?raw')
                    },
                    bear: {
                        id: 'bear-',
                        svg: require('~/assets/svg/home/mobile/decoration/bear.svg?raw')
                    },
                    rattle: {
                        id: 'rattle-',
                        svg: require('~/assets/svg/home/mobile/decoration/rattle.svg?raw')
                    }
                },
                desktop: {
                    flowers: {
                        fancy: {
                            id: 'fancy-flower-',
                            svg: require('~/assets/svg/home/desktop/decoration/cart-flower-fancy.svg?inline')
                        },
                        average: {
                            id: 'average-flower-',
                            svg: require('~/assets/svg/home/desktop/decoration/cart-flower-average.svg?inline')
                        },
                        boring: {
                            id: 'boring-flower-',
                            svg: require('~/assets/svg/home/desktop/decoration/cart-flower-boring.svg?inline')
                        },
                        top: {
                            id: 'top-flower-',
                            svg: require('~/assets/svg/home/desktop/decoration/top-flower.svg?inline')
                        },
                        bottom: {
                            id: 'bottom-flower-',
                            svg: require('~/assets/svg/home/desktop/decoration/bottom-flower.svg?inline')
                        }
                    },
                    bears: {
                        withRattle: {
                            id: 'bear-with-rattle-',
                            svg: require('~/assets/svg/home/desktop/decoration/bear-with-rattle.svg?inline')
                        },
                        withoutRattle: {
                            id: 'bear-without-rattle-',
                            svg: require('~/assets/svg/home/desktop/decoration/bear-without-rattle.svg?inline')
                        }
                    },
                    others: {
                        sparkles: {
                            id: 'sparkles-',
                            svg: require('~/assets/svg/home/desktop/decoration/sparkles.svg?inline')
                        },
                    }
                },
                responsive: {
                    waveSeparator: {
                        id: 'wave-separator-',
                        svg: require('~/assets/svg/home/wave-header.svg?inline')
                    },
                }
            }
        }
    },
    computed: {
        isMobile() {
            if(this.$screen.sm || this.$screen.md){
                if(this.$screen.landscape && this.$screen.height < 600){
                    return true;
                }
            }
            return this.$screen.xs && !this.$screen.md;
        }
    }
}
</script>

/* ratio = width(588) / heigth(848)
new height = new width * ratio; */

