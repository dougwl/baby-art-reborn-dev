<template>
    <div class="filler">
        <div class="wave">
            <div class="top">
                <component :is="this.waves.topWave"/>
            </div>
        </div>
        <div class="quote">
            <p>"A perfeição está nos detalhes."</p>
        </div>
        <div class="decorations">
            <div class="decoration" id="filler-cart">
                <component :is="this.decorations.cart"/>
            </div>
            <div class="decoration" id="filler-horse">
                <component :is="this.decorations.horse"/>
            </div>
            <div class="decoration" id="filler-blocks">
                <component :is="this.decorations.block"/>
            </div>
            <div class="decoration" id="filler-clothe">
                <component :is="this.decorations.clothe"/>
            </div>
        </div>
        <div class="wave">
            <div class="bottom">
                <component :is="this.waves.bottomWave"/>
            </div>
        </div>
    </div>    
</template>

<style scoped>

.filler{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: auto;
    position: relative;
    background: #c3d5e2;
}

.filler :where(
    .wave,
    .top,
    .bottom,
    .quote,
    .decorations
){
    display: flex;
    justify-content: center;
    align-items: center;
    color: var(--main-color);
}

.quote{
    text-align: center;
    overflow-wrap: break-word;
    hyphens: manual;
    font-size: 22px;
    font-weight: 400;
    padding: 150px 0px;
}

.wave :where(.top, .bottom){
    width: 100%;
    height: auto;
}

.wave svg,
.wave path{
    fill: white;
    height: auto;
    width: 100%;
}

.wave .bottom svg,
.wave .bottom path{
    fill: var(--desktop-background-color);
}

.decorations{
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
}

.decoration{
    width: 65px;
    height: 65px;
    position: relative;
}

.decoration svg,
.decoration path{
    height: 100%;
    width: auto;
    fill: var(--illustration-color);
}

#filler-cart{
    top: clamp(-105px, -30%, -30%);
    left: -5%;
}

#filler-horse[data-v-28487283] {
    top: clamp(100px, 13%, 13%);
    left: -19.5%;
}

#filler-blocks{
    top: -20%;
    right: clamp(min(-85px, -20%), -20%, -155px);
}

#filler-clothe{
    top: clamp(90px, 13%, 13%);
    right: -3%;
}

@media (min-width: 640px){
    #filler-cart{
        top: clamp(-75px, -30%, -30%);
        left: -17%;
    }

    #filler-blocks{
        top: -10%;
        right: clamp(min(-150px, -20%), -20%, -155px);
    }

    #filler-clothe{
        top: clamp(90px, 13%, 13%);
        right: -13%;
    }

    #filler-horse{
        top: clamp(90px, 13%, 13%);
        left: -16.5%;
    }
}



</style>

<script>
export default {
    data(){
        return {
            decorations: {
                cart: require('~/assets/svg/filler/cart.svg?inline'),
                horse: require('~/assets/svg/filler/horse.svg?inline'),
                block: require('~/assets/svg/filler/blocks.svg?inline'),
                clothe: require('~/assets/svg/filler/clothe.svg?inline')
            },
            waves: {
                topWave: require('~/assets/svg/filler/wave_top.svg?inline'),
                bottomWave: require('~/assets/svg/filler/wave_bottom.svg?inline'),
            }
        }
    }
}
</script>