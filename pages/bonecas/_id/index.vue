<template>
    <div class="boneca-pagina">
        <section class="boneca" :data-loaded="true">
            <div class="informacoes">
                <div :class="{'content': true, 'loading': !contentLoaded}">
                    <h1 class="titulo">
                        {{product.name}}
                        <em class="boneca-colecao" v-if="product.collection != '' ">{{product.collection}}</em>
                    </h1>
                    <div class="detalhes">
                        <div class="peso">
                            <span>Peso 1.85 kg</span>
                        </div>
                        <div class="preco">
                            <span class="valor">R$ {{product.price}}</span>
                        </div>
                        <div :class="{'order': true, 'on-sale': this.onSale}">
                            <a href="" @click="onLinkClicked">
                                <div class="art">
                                    <component class="icon" :is="this.art.shoppingBag"/>
                                </div>
                                <span>{{this.onSale ? 'Encomendar' : 'Fazer Orçamento'}}</span>
                            </a>
                        </div>
                        <p class="descricao" :data-expanded="descriptionExpanded">
                            <span v-html="product.description">         
                            </span>
                        </p>
                    </div>
                </div>
            </div>
            <client-only>
                <DollAlbum :defaultAlbum="album" :isMobile="isMobile"/>
                <!-- AlbumDesktop and AlbumMobile goes here -->
            </client-only>
        </section>
        <!-- <section class="recomendados">
            <h3></h3>
        </section> -->
    </div>
</template>

<style scoped>

*{
    --page-width: calc(100vw - 75px);
    --page-half: calc(var(--page-width) / 2);
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
}

.boneca-pagina{
    --padding-size: 0;
    display: flex;
    flex-direction: column;
    /* padding: 0 var(--padding-size) 0 var(--padding-size); */
}

.boneca{
    display: flex;
    flex-direction: column-reverse;
    flex-basis: 100%;
}

.boneca:not([data-loaded]) > ::after{
    content: '';
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
    background-color: #f9f7f2;
}

.informacoes{
    font-size: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 100px;
}

.content{
    --content-opacity: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%; 
    margin-top: 25px;
    opacity: var(--content-opacity);
    transition: opacity 0.25s ease-in;
}

.content.loading{
    opacity: 0%;
}

.detalhes{
    width: 100%;
    margin-top: 50px;
}

.titulo,
.descricao,
.peso,
.preco{
    color: var(--main-color);
}

.titulo{
    white-space: pre-line;
    max-width: 300px;
    font-weight: 400;
    font-size: 25px;
    /* margin-top: 80px; */
}

.peso{
    font-family: auto;
    margin-bottom: 13px;
    text-shadow: none;
}

.preco{
    /* font-size: 10px; */
    font-family: auto;
    font-size: 15px;
    font-weight: bolder;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 14px;
    /* color: orange; */
}

.preco .valor{
    display: flex;
    flex-direction: column;
}

.preco span.valor::after {
    content: '(Preço Sugerido)';
    font-size: 10px;
    margin-top: 5px;
    font-family: 'Prociono';
    font-weight: 400;
    text-transform: lowercase;
}

.order{
    display: flex;
    position: fixed;
    bottom: 0;
    width: 100vw;
    height: 60px;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 102;
}

.order a{
    width: 100%;
    height: 100%;
    background: var(--alternative-blue);
    color: white;
    font-family: 'Prociono';
    font-size: 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
}

.order.on-sale a{
    background: var(--main-color);
}


.art{
    height: 100%;
    pointer-events: none;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 5px;
}

.order .icon{
    width: 30px;
    height: 30px;
}

.order path{
    stroke: var(--alternative-blue);
}

.order.on-sale path{
    stroke: var(--main-color)
}

.order svg rect{
    stroke: white;
    fill: white;
}

.descricao{
    /* margin-top: 40px;
    margin-left: 60px;
    margin-right: 120px; */
    padding: 0 50px;
    padding-top: 40px;
}

:where(.descricao p){
    margin: 0;
    padding: 0;
}

.adicionar-ao-carrinho{
    position: fixed;
    left: 0;
    bottom: 0;
}

:where(.adicionar-ao-carrinho,
.add-to-cart){
    text-align: center;
    display: flex;
    flex-direction: row;
    z-index: 25;
}

.outras-informacoes{
    display: flex;
    width: 100%;
    max-height: 400px;
    /* transform: translateY(-30px); */
}

@media screen and (min-width: 1000px) {
    .content{
        max-width: 480px;
        padding: 0 25px;
        /* flex-basis: 125vh; */
        justify-content: space-evenly;
        margin-top: unset;
    }

    .detalhes{
        /* margin-top: -50px; */
        margin-top: 0;
    }

    /* .titulo{
        margin-bottom: 50px;
    } */

    .informacoes{
        margin-bottom: unset;
    }
}

@media screen and (min-width: 1000px) and (max-height: 700px){
    .content{
        flex-basis: 160vh;
    }
}

@media screen and (min-width: 500px) and (max-width: 990px) and (min-height: 700px){
    .content{
        width: 50%;
    }

    .descricao{
        margin: 0;
        margin-top: 40px;     
        padding-right: 0 !important;
    }
}


@media screen and (max-width: 1023px){

    .adicionar-ao-carrinho{
        width: 100%;
    }
}

@media screen and (min-width: 1024px){

    .boneca{
        /* max-width: var(--page-width); */
        flex-direction: row;
    }

    .boneca > :where(div){
        width: 50%;
    }

    .boneca > :where(div){
        flex-basis: 50%;
        max-width: 50%;
    }

    .boneca-pagina{
        --padding-size: min(75px, 5%);
    }

    .titulo{
        font-size: 36px;
        line-height: 42px;
        padding-bottom: 30px;
        padding-top: 80px;
        white-space: unset;
    }

    .detalhes{
        font-size: 16px;
    }

    .content{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        left: 0;
        padding: inherit;
        margin-top: calc(-1 * min(75px, 5vw));
        padding-top: min(75px, 5vw);
        padding-bottom: 60px;
    }

    .informacoes{
        border-right: solid 1px var(--main-color);
    }

    .adicionar-ao-carrinho{
        transform: translateY(40px);
    }

    .adicionar-ao-carrinho,
    .add-to-cart{
        margin-bottom: 30px;
        position: static;
    }

    .order{
        position: relative;
        width: 100%;
        margin-top: 60px;
        margin-bottom: 20px;
        padding: 0 50px;
    }

    .order a{
        width: 70%;
        cursor: pointer;
        pointer-events: all;
        opacity: 100%;
        transition: opacity 0.25s ease-in-out;
    }

    .order a:hover{
        opacity: 85%;
        transition: opacity 0.25s ease-in-out;
    }
}


</style>

<style>

.boneca .descricao{
    position: relative;
    height: 100%;
    width: 100%;
}

.boneca .descricao span {
    text-align: left;
    font-size: 13px;
    width: 100%;
    /* overflow-wrap: break-word;
    hyphens: manual; */
}

.descricao p{
    margin: 0;
    padding: 0;
}

@media (max-width: 1024px){
    .footer .content{
        padding-bottom: 75px;
    }
}

</style>

<script>
import { ShopifyMediaQuery, ShopifyQueryMap } from '~/plugins/helpers';
export default {    
    data (){
        return {
            rawData: {},
            product: {
                id: undefined,
                name: 'Nome',
                price: 0,
                weight: '0.0',
                description: '',
                collection: '',
                tags: []
            },
            album: [],
            loaded: false,
            contentLoaded: false,
            descriptionExpanded: false,
            onSale: false,
            art: {
                shoppingBag: require("~/assets/svg/product/shopping-bag.svg?inline")
            }
        }
    },
    methods: {
        getMaxPhotos: function (maxPhotoAmount, photos) {
            return photos.slice(0, maxPhotoAmount - 1);
        },
        loadData(raw) {
            let prod = raw.variants[0];
            this.product.id = raw.id;
            this.product.name = raw.title;
            this.product.description = raw.descriptionHtml;
            this.product.price = prod.price;
            this.product.weight = prod.weight;
            this.album = raw.images;
            this.product.tags = raw.tags;
        },
        checkStatus(){
            /**@type {[String]} */
            let tags = this.product.tags;
            this.onSale = false;
            tags.forEach( tag => {
                if(tag.value.toLowerCase() == 'encomenda'){
                    this.onSale = true;
                }
            });
        },
        onLinkClicked(ev){
            let orderText = encodeURI('Olá, gostaria de encomendar uma boneca semelhante a (' + this.product.name + "): " + window.location.href + " . Qual seria o orçamento?");
            let defaultText = 'Olá, gostaria de fazer o orçamento para uma nova boneca.';
            let URL = "https://wa.me/554788227334?text=";
            let fullURL = '';
            
            if(this.onSale) {
                fullURL = URL + orderText;
            } 
            else {
                fullURL = URL + defaultText;
            }

            ev.preventDefault();
            window.open(fullURL, '_blank');
        }
    },
    props: {
        fetchedProduct: {
            default: () => { return {} },
            type: Object,
        },
    },
    computed: {
        isMobile: function() {
            let status = this.$screen.width < 1024;
            return status;
        }
    },
    mounted(){
        const page = document.querySelector('.boneca');
        if(page.childElementCount > 1) loaded = true;
    },
    async fetch(){
        let routeName;
        let prod;
        await this.$nextTick();
        if(this.product.id == undefined && Object.entries(this.$props.fetchedProduct).length == 0){
            routeName = this.$route.params.id; 
            try {
                prod = await this.$inventory.retrieve.product().handleCustom(routeName);;
            } catch (error) {
                console.log('Error fetching product: ' + error);
            }
            if(prod) this.rawData = prod;
            else this.$router.push('/');
        }
        this.loadData(this.rawData);
    },
    watch:{
        'product.description'(val){
            if(val){
                this.$nextTick(() => {
                    this.contentLoaded = true;
                });
            }
        },
        'product.tags': function() {
            this.checkStatus();
        }
    },
    fetchOnServer: false,
    fetchKey: 'pagina-boneca'
}
</script>