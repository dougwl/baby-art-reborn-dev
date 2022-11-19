<template>
    <div class="collections--container">
        <div class="collections">
            <div class="collection">
                <nuxt-link :to="'/bonecas#menina'" id="meninas">
                    <div class="border">
                        <div class="image">
                            <picture>
                                <!-- <nuxt-source
                                    :media="'(max-width: 1023px)'"
                                    :src="'/meninas.webp'"
                                    :sizes="'xs:200px'"
                                /> -->
                                <nuxt-source
                                    :media="'(max-width: 1023px)'"
                                    :src="'/meninas.webp'"
                                    :sizes="'md:400px'"
                                />
                                <nuxt-source
                                    :media="'(min-width: 1024px)'"
                                    :src="'/meninas.webp'"
                                    :sizes="'xl:600px'"
                                />
                                <nuxt-img src="/meninas.webp" height="400" width="300" loading="lazy" title="Meninas Categoria"/>
                            </picture>
                        </div>
                    </div>
                    <span class="title">Meninas</span>
                </nuxt-link>
            </div>
            <div class="collection">
                <nuxt-link :to="'/bonecas#menino'" id="meninos">
                    <div class="border">
                        <div class="image">
                            <picture>
                                <!-- <nuxt-source
                                    :media="'(max-width: 1023px)'"
                                    :src="'/meninos.webp'"
                                    :sizes="'xs:200px'"
                                /> -->
                                <nuxt-source
                                    :media="'(max-width: 1023px)'"
                                    :src="'/meninos.webp'"
                                    :sizes="'md:400px'"
                                />
                                <nuxt-source
                                    :media="'(min-width: 1024px)'"
                                    :src="'/meninos.webp'"
                                    :sizes="'xl:600px'"
                                />
                                <nuxt-img src="/meninos.webp" height="400" width="300" loading="lazy" title="Meninos Categoria"/>
                            </picture>
                        </div>
                    </div>
                    <span class="title">Meninos</span>
                </nuxt-link>
            </div>
            <div class="collection">
                <nuxt-link :to="'/bonecas#gemeos'" id="gemeos">
                    <div class="border">
                        <div class="image">
                            <picture>
                                <!-- <nuxt-source
                                    :media="'(max-width: 1023px)'"
                                    :src="'/gemeos.webp'"
                                    :sizes="'xs:200px'"
                                /> -->
                                <nuxt-source
                                    :media="'(max-width: 1023px)'"
                                    :src="'/gemeos.webp'"
                                    :sizes="'md:400px'"
                                />
                                <nuxt-source
                                    :media="'(min-width: 1024px)'"
                                    :src="'/gemeos.webp'"
                                    :sizes="'xl:600px'"
                                />
                                <nuxt-img src="/gemeos.webp" height="400" width="300" loading="lazy" title="Gemeos Categoria"/>
                            </picture>
                        </div>
                    </div>
                    <span class="title">Gêmeos</span>
                </nuxt-link>
            </div>
        </div>
        <div class="decorations">
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.cloth"/>
                </div>
            </div>
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.mobile"/>
                </div>
            </div>
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.flower"/>
                </div>
            </div>
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.pacifier"/>
                </div>
            </div>
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.toy"/>
                </div>
            </div>
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.pinwheel"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.collections--container{
    background: var(--desktop-background-color);
    position: relative;
    height: 100%;
}

.collections{
    display: grid;
    grid-template-columns: 1fr;
    width: 100%;
    padding: 0;
    margin: 0;
    justify-content: center;
    justify-items: center;
    align-content: center;
    align-items: center;
    padding-top: 50px;
}

.collection{
    position: relative;
    text-align: center;
    margin-bottom: 120px;
}

.collection a{
    display: flex;
    width: 100%;
    justify-content: center;
}

.border{
    outline: solid 1px var(--main-color);
}

.image{
    height: min-content;
    width: min-content;
}

.image picture{
    display: flex;
}

.title{
    --outline-color: var(--main-color);
    position: absolute;
    bottom: -25px;
    text-align: center;
    white-space: pre-line;
    background: var(--alternative-blue);
    outline: solid 1px var(--outline-color);
    height: 60px;
    width: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.decoration{
    position: relative;
    height: 100%;
    width: 100%;
}

.doodle{
    position: absolute;
    width: fit-content;
    height: auto;
}

.decoration,
.doodle{
    display: none;
}


@media screen and (min-width: 1024px){

    .collections--container{
        padding-left: 50px;
        padding-right: 50px;
    }

    .collections{
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 500px 50px;
    }

    .decorations{
        position: absolute;
        top: 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 500px 50px;
        align-items: center;
        justify-items: center;
        width: calc(100% - 100px);
        height: 100%;
        padding: 0;
        margin: 0;
        pointer-events: none;
    }

    .decoration,
    .doodle{
        display: unset;
        height: 80px;
        width: 80px;
    }

    .doodle,
    .doodle path{
        fill: var(--illustration-color) !important;
    }

    .border{
        outline: solid 1px var(--main-color);
        box-shadow: 12px 12px 4px 0px rgb(0 0 0 / 25%);
    }

    .title{
        transition: background, color, outline, 0.25s ease-in;
    }

    .title:hover{
        --outline-color: white;
        background: var(--main-color);
        color: white;
    }

    .collection:nth-child(1) .border{
        transform: rotateZ(-2deg);
    }

    .collection:nth-child(2) .border{
        transform: rotateZ(2deg);
    }

    .collection:nth-child(3) .border{
        transform: rotateZ(3deg);
    }

    .collection:nth-child(1){
        grid-row: 1/2;
        margin-bottom: 180px;
    }

    .collection:nth-child(2){
        grid-row: 1/3;
    }

    .collection:nth-child(3){
        grid-row: 2/3;
    }

    .decoration{
        grid-column: 2;
    }

    .decoration:nth-child(1),
    .decoration:nth-child(2),
    .decoration:nth-child(3){
        grid-row: 1/2;
    }

    .decoration:nth-child(4),
    .decoration:nth-child(5),
    .decoration:nth-child(6){
        grid-row: 2/3;
        padding-top: 50px;
    }

    .decoration:nth-child(1){
        transform: translateX(-90px) translateY(-150px) rotateZ(-20deg);
    }

    .decoration:nth-child(2){
        transform: translateX(30px) translateY(-220px);
    }

    .decoration:nth-child(3){
        transform: translateX(40px) translateY(-80px);
    }

    .decoration:nth-child(4){
        transform: translateX(-90px) translateY(-40px) rotateZ(-20deg);
    }

    .decoration:nth-child(5){
        transform: translateX(30px) translateY(30px);
    }

    .decoration:nth-child(6){
        transform: translateX(-90px) translateY(120px);
    }
}

@media screen and (min-width: 1536px){
    .collections--container{
        padding-left: 250px;
        padding-right: 250px;
    }

    .decorations{
        width: calc(100% - 500px);
    }
}

</style>


<script>
import nuxtSource from '../nuxt-source.vue';
export default {
  components: { nuxtSource },
    props: {
        fetchedCollections: {
            type: Array,
            default: () => {
                return [];
            }
        }
    },
    data(){
        return{
            doodle: {
                cloth: require('~/assets/svg/collections/cloth.svg?inline'),
                flower: require('~/assets/svg/collections/flower.svg?inline'),
                mobile: require('~/assets/svg/collections/mobile.svg?inline'),
                pacifier: require('~/assets/svg/collections/pacifier.svg?inline'),
                pinwheel: require('~/assets/svg/collections/pinwheel.svg?inline'),
                toy: require('~/assets/svg/collections/toy.svg?inline')
            },
            collections: {
                meninos: false,
                meninas: false,
                gemeos: false
            }
        }
    },
    beforeUpdate(){
        if(this.fetchedCollections.length == 0){
            this.collections.meninos = true;
            this.collections.meninas = true;
        }
    },
    watch: {
        'props.fetchedCollections'(val){
            val.forEach(collection => {
                if(collection == 'Meninos' || 
                    collection == 'meninos' || 
                    collection == 'menino' || 
                    collection == 'Menino'){
                        this.collections.meninos = true;
                }
                else if(collection == 'Meninas' || 
                    collection == 'meninas' || 
                    collection == 'menina' || 
                    collection == 'Menina'){
                        this.collections.meninas = true;
                }
                else if(collection == 'Gemeos' || 
                    collection == 'gemeos' || 
                    collection == 'gemeo' || 
                    collection == 'Gemeo'){
                        this.collections.gemeos = true;
                }
            });
        }
    }
}
</script>