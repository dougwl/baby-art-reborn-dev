<template>
    <section class="hero">
        <a href="/loja">
            <div class="identity">
                <div class="photo">
                    <nuxt-img class="fade-in baby-cart" :class="{animated: extrasHasLoaded}" :alt="'carrinho de boneca'" src="/Cart.png"  style="object-fit:contain;" v-on:animationend.native="finishLoading($event)"/> <!-- due to the lazy loading, we need to wait for the image to load before we can start the animation; and because nuxt-img has a bug/limitation regarding DOM events, we need to use the native event option. -->
                    <client-only v-if="!isMobile">
                        <div class="illustration decor">
                                <div class="flower fade-in bloom animated" v-for="i in 2" :key="i + 'ff'" :id="extras.desktop.flowers.fancy.id + i" v-on:animationend="finishLoading($event)">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.fancy.svg" /> -->
                                    <component :is="extras.desktop.flowers.fancy.svg" />
                                </div>
                                <div class="flower fade-in bloom animated" v-for="i in 2" :key="i + 'fb'" :id="extras.desktop.flowers.boring.id + i" v-on:animationend="finishLoading($event)">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.boring.svg" /> -->
                                    <component :is="extras.desktop.flowers.boring.svg" />
                                </div>
                                <div class="flower fade-in bloom animated" :id="extras.desktop.flowers.average.id" :key="'fa'" v-on:animationend="finishLoading($event)">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.average.svg" /> -->
                                    <component :is="extras.desktop.flowers.average.svg" />
                                </div>
                        </div>
                    </client-only>
                </div>
                <div class="art">
                    <client-only v-if="isMobile">
                        <div class="mobile decor">
                            <div class="duck fade-in animated" v-for="i in 2" :key="i + 'd'" :id="extras.mobile.duck.id + i" >
                                <!-- <SvgLoader :rawHTML="extras.mobile.duck.svg" /> -->
                                <component :is="extras.mobile.duck.svg" />
                            </div>
                            
                            <div class="bear fade-in animated" v-for="j in 2" :key="j + 'b'" :id="extras.mobile.bear.id + j"> 
                                <!-- <SvgLoader :rawHTML="extras.mobile.bear.svg" /> -->
                                <component :is="extras.mobile.bear.svg" />
                            </div>
                            <div class="rattle fade-in animated" v-for="k in 2" :key="k + 'c'" :id="extras.mobile.rattle.id + k">
                                <!-- <SvgLoader :rawHTML="extras.mobile.rattle.svg" />
                                </div> --> 
                                <component :is="extras.mobile.rattle.svg" />
                            </div>
                        </div>
                    </client-only>    
                    <client-only v-else-if="!isMobile">
                        <div class="desktop decor">
                            <div class="sky">
                                <div v-for="(i,index) in ['grow-left','grow-right']" :key="(index + 1) + 'fs'" :id="extras.desktop.flowers.top.id + (index + 1)" :class="['flower','fade-in', 'animated', i]">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.top.svg" /> -->
                                    <component :is="extras.desktop.flowers.top.svg" />
                                </div>
                            </div>
                            <div class="ground">
                                <div class="flower fade-in animated" v-for="i in 4" :key="i + 'fb'" :id="extras.desktop.flowers.bottom.id + i">
                                    <!-- <SvgLoader :rawHTML="extras.desktop.flowers.bottom.svg" /> -->
                                    <component :is="extras.desktop.flowers.bottom.svg" />
                                </div>
                            </div>
                        </div>
                    </client-only>
                </div>
                <client-only>
                    <div class="wave-separator fade-in animated">
                        <!-- <SvgLoader :rawHTML="extras.responsive.waveSeparator.svg" /> -->
                        <component :is="extras.responsive.waveSeparator.svg" />
                    </div>
                </client-only>
            </div>
            <div class="filler">
                <p class="caption">A arte que transforma bonecas comuns <br> em bebês quase reais</p>
            </div>
            <client-only>
                <div class="foto-boneca-container" v-if="isMobile">
                    <div class="mobile-divider-top">
                        <component :id="this.extras.responsive.mobileDivider.id + '-top'" :is="this.extras.responsive.mobileDivider.svg"></component>
                    </div>
                    <div class="foto-boneca"></div>
                    <div class="mobile-divider-bottom">
                        <component :id="this.extras.responsive.mobileDivider.id + '-bottom'" :is="this.extras.responsive.mobileDivider.svg"></component>
                    </div>
                </div>
            </client-only>
        </a>
    </section>
</template>

<style>
    @keyframes fadeIn { 
        from{
            opacity: 0;
        }
        to{
            opacity: 1;
        }
    }

    @keyframes shrink{
        from{
            transform: scale(1.5);
        }
        to{
            transform: scale(1);
        }
    }

    @keyframes grow{
        from{
            transform: translateY(var(--startTranslateY)) scaleY(var(--startScaleY)) scaleX(var(--startScaleX)) rotate(var(--startRotate));
        }
        to{
            transform: translateY(var(--endTranslateY)) scaleY(var(--endScaleY)) scaleX(var(--endScaleX)) rotate(var(--endRotate));
        }
    }

    @keyframes bloom{
        from{
            transform: var(--before-bloom);
        }
        to{
            transform: var(--after-bloom);
        }
    }
    
</style>

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
        /* margin-bottom: 40px; */
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

    :where(.animated){
        animation: var(--fadeIn, none), var(--grow, none), var(--shrink, none) var(--bloom, none);
        animation-delay: var(--delay, unset);
    }

    :where(.fade-in){
        --fadeIn: fadeIn 0.4s cubic-bezier(0.85, 0, 0.15, 1);
    }

    .ground > div{
        animation-duration: 0.8s;
    }

    .grow-left{
        --startTranslateY: -50px;
        --endTranslateY: 0;
        --startScaleY: 0.5;
        --endScaleY: 1;
        --startScaleX: 0.5;
        --endScaleX: 1;
        --startRotate: -60deg;
        --endRotate: 1deg;
        --grow: grow 0.45s ease-in-out;
    }

    .grow-right{
        --startTranslateY: -50px;
        --endTranslateY: 0;
        --startScaleY: 0.5;
        --endScaleY: 1;
        --startScaleX: -0.5;
        --endScaleX: -1;
        --startRotate: -60deg;
        --endRotate: 0deg;
        --grow: grow 0.45s ease-in-out;
    }

    .shrink{
        --shrink: shrink 0.325s ease-in-out;
    }

    .baby-cart{
        opacity: 0;
        --delay: 0.2s;
        animation-duration: 0.3s;
    }

    .loaded{
        opacity: 1;
    }

    .photo .illustration > .animated{
        opacity: 0;
        --delay: 0.4s;
    }

    .photo .illustration > .animated.loaded{
        opacity: 1;
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
        /* transform: translateY(-45px); */
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

    .foto-boneca-container{
        width: 100%;
        height: min-content;
        display: flex;
        flex-direction: column;
        position: relative;
    }

    .foto-boneca-container > div{
        width: 100%;
        position: absolute;
        left: 0;
    }

    .foto-boneca-container > .mobile-divider-top{
        top: 0;
        transform: scaleY(-1);
        display: flex;
        margin-top: -1px;
    }

    .foto-boneca-container > .mobile-divider-bottom{
        bottom: 0;
    }

    .foto-boneca-container > .foto-boneca{
        height: 250px;
        max-height: 250px;
        display: flex;
        position: relative;
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
            right: 10%;
        }

        #top-flower-2{
            top: 0;
            left: 10%;
            transform: scaleX(-1);
        }

        .art :where(.decor > div){
            height: 100%;
            width: 100%;
        }

        :where(.ground){
            --ground-decor-height: 50px;
        }

        .ground :where(div,svg){
            width: min-content;
        }

        .ground :where(svg){
            height: var(--ground-decor-height);
        }

        #bottom-flower-1{
            top: calc((100% - 220px) + 42px);
            left: 10%;
            transform: rotateZ(20deg);
        }

        #bottom-flower-2 :where(svg){
            height: calc(var(--ground-decor-height) / 1.3);
        }

        #bottom-flower-2{
            top: calc((100% - 220px) + 80px);
            left: 25%;
            transform: rotateZ(10deg);
        }

        #bottom-flower-3{
            top: calc((100% - 220px) - 10px);
            right: 20%;
            transform: rotateZ(-10deg);
        }

        #bottom-flower-4 :where(svg){
            height: calc(var(--ground-decor-height) / 1.2);
        }

        #bottom-flower-4{
            top: calc((100% - 220px) - 25px);
            right: 10%;
            transform: rotateZ(-5deg);
        }

        .bears > .bear{
            position: fixed;
            top: 50%;
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

        .bloom{
            --bloom: bloom 0.5s ease-in-out;
        }

        .illustration #fancy-flower-1{
            --before-bloom: scale(0.8) translateX(50px) rotateZ(30deg);
            --after-bloom: scale(0.8) translateX(0) rotateZ(0deg);
            transform: scale(0.8);
            top: calc(50% - 50px);
            left: calc(50% - 130px);
        }

        .illustration #fancy-flower-2{
            --before-bloom: scaleX(-1) scale(0.8) translateX(50px) rotateZ(30deg);
            --after-bloom: scaleX(-1) scale(0.8) translateX(0) rotateZ(0deg);
            transform: scaleX(-1) scale(0.8);
            top: calc(50% - 60px);
            right: calc(50% - 130px);
        }

        .illustration #boring-flower-1{
            --before-bloom: scale(0.8) translateX(-50px) rotateZ(-40deg);
            --after-bloom: scale(0.8) translateX(0) rotateZ(0deg);
            transform: scale(0.8);
            top: calc(50% - 130px);
            right: calc(50% - 140px);
        }

        .illustration #boring-flower-2{
            --before-bloom: scale(-0.8, 0.8) translateX(-20px) rotateZ(-40deg);
            --after-bloom: scale(-0.8, 0.8) translateX(0) rotateZ(-10deg);
            transform: scale(-0.8, 0.8) rotateZ(-10deg);
            top: calc(50% - 145px);
            left: calc(50% - 110px);
        }

        .illustration #average-flower-{
            --before-bloom: scale(0.8) translateY(30px);
            --after-bloom: scale(0.8) translateY(0);
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
            isMobile: false,
            extrasHasLoaded: false,
            babyCart: {},
            extras: {
                mobile: {
                    duck: {
                        id: 'duck-',
                        svg: require('~/assets/svg/home/mobile/decoration/duck.svg?inline')
                    },
                    bear: {
                        id: 'bear-',
                        svg: require('~/assets/svg/home/mobile/decoration/bear.svg?inline')
                    },
                    rattle: {
                        id: 'rattle-',
                        svg: require('~/assets/svg/home/mobile/decoration/rattle.svg?inline')
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
                    mobileDivider: {
                        id: 'mobile-divider-',
                        svg: require('~/assets/svg/home/mobile/divider.svg?inline')
                    },
                }
            }
        }
    },
    methods: {
        finishLoading(el){          
            if(!el.target.classList.contains('loaded')){
                el.target.classList.add('loaded');
            }
        },
        checkIfAllLoaded: async function(callback) {
            await this.$nextTick();
            callback();
        }
    },
    beforeMount(){
        window.addEventListener('on-breakpoint-change', (e) => {
            this.isMobile = e.detail.isMobile;
            console.log('whatsup');
        });
    },
    updated() {
        this.checkIfAllLoaded(() => {
            if(!this.extrasHasLoaded) this.extrasHasLoaded = true;
        });
    },
}
</script>

/* ratio = width(588) / heigth(848)
new height = new width * ratio; */

