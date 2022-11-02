<template>
    <div class="collections--container">
        <div class="collections">
            <div class="collection">
                <nuxt-link :to="'/bonecas#menina'" id="meninas">
                    <div class="image">
                        <picture>
                            <nuxt-source
                                :media="'(max-width: 1023px)'"
                                :src="'/meninas.webp'"
                                :sizes="'xs:200px'"
                            />
                            <nuxt-source
                                :media="'(min-width: 1024px)'"
                                :src="'/meninas.webp'"
                                :sizes="'md:400px'"
                            />
                            <nuxt-source
                                :media="'(min-width: 1280px)'"
                                :src="'/meninas.webp'"
                                :sizes="'xl:600px'"
                            />
                            <nuxt-img src="/meninas.webp" height="400" width="300" loading="lazy" title="Meninas Categoria"/>
                        </picture>
                    </div>
                    <span class="title">Meninas</span>
                </nuxt-link>
            </div>
            <div class="collection">
                <nuxt-link :to="'/bonecas#menino'" id="meninos">
                    <div class="image">
                        <picture>
                            <nuxt-source
                                :media="'(max-width: 1023px)'"
                                :src="'/meninos.webp'"
                                :sizes="'xs:200px'"
                            />
                            <nuxt-source
                                :media="'(min-width: 1024px)'"
                                :src="'/meninos.webp'"
                                :sizes="'md:400px'"
                            />
                            <nuxt-source
                                :media="'(min-width: 1280px)'"
                                :src="'/meninos.webp'"
                                :sizes="'xl:600px'"
                            />
                            <nuxt-img src="/meninos.webp" height="400" width="300" loading="lazy" title="Meninos Categoria"/>
                        </picture>
                    </div>
                    <span class="title">Meninos</span>
                </nuxt-link>
            </div>
            <div class="collection">
                <nuxt-link :to="'/bonecas#gemeos'" id="gemeos">
                    <div class="image">
                        <picture>
                            <nuxt-source
                                :media="'(max-width: 1023px)'"
                                :src="'/gemeos.webp'"
                                :sizes="'xs:200px'"
                            />
                            <nuxt-source
                                :media="'(min-width: 1024px)'"
                                :src="'/gemeos.webp'"
                                :sizes="'md:400px'"
                            />
                            <nuxt-source
                                :media="'(min-width: 1280px)'"
                                :src="'/gemeos.webp'"
                                :sizes="'xl:600px'"
                            />
                            <nuxt-img src="/gemeos.webp" height="400" width="300" loading="lazy" title="Gemeos Categoria"/>
                        </picture>
                    </div>
                    <span class="title">Gêmeos</span>
                </nuxt-link>
            </div>
        </div>
        <div class="decorations">
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.first"/>
                </div>
            </div>
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.second"/>
                </div>
            </div>
            <div class="decoration">
                <div class="doodle">
                    <component :is="this.doodle.third"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>

.collections--container{
    background: var(--desktop-background-color);
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
    position: absolute;
    bottom: -25px;
    text-align: center;
    white-space: pre-line;
    background: var(--alternative-blue);
    outline: solid 1px var(--main-color);
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
    .collections{
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr 1fr;
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
                cloth: require('/assets/svg/collections/cloth.svg'),
                flower: require('/assets/svg/collections/flower.svg'),
                mobile: require('/assets/svg/collections/mobile.svg'),
                pacifier: require('/assets/svg/collections/pacifier.svg'),
                pinwheel: require('/assets/svg/collections/pinwheel.svg'),
                toy: require('/assets/svg/collections/toy.svg')
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