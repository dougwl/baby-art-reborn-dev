<template>
    <div class="product">
        <NuxtLink :to="'/bonecas/' + product.handle" :class="{
            'hasStatus': status.active,
            'pre-order': status.order[0],
            'available': status.available[0]
            }" prefetch>
            <div class="tag">
                <span>{{status.hint}}</span>
            </div>
            <picture class="photo">
                <source :media="queries.small.condition" :srcset="queries.small.src">
                <source :media="queries.medium.condition" :srcset="queries.medium.src">
                <source :media="queries.big.condition" :srcset="queries.big.src">
                <img :src="card.image.src" :alt="card.title" loading="lazy" class="loading" @load="loaded">
            </picture>
            <div class="details">
                <p class="title">{{card.title}}</p>
                <p class="price">R$ {{card.price}}</p>
            </div>
        </NuxtLink>
    </div>
</template>

<style scoped>
    .product{
        /* border: 5px solid black; */
        display: grid;
        grid-template-columns: 1fr;
        /* background: lightgoldenrodyellow; */
        min-height: 150px;
        /* min-width: 150px;
        max-width: 300px; */
        min-width: 250px;
        max-width: min(50vw, 400px);
        outline: solid 1px #d58993;
        outline-offset: 15px;
        margin: 15px;
    }

    .product a{
        position: relative;
    }

    @media screen and (min-width: 1024px){
        .product{
            /* max-width: 400px; */
            max-width: 30vw;
        }
    }

    .tag{
        display: none;
        pointer-events: none;
    }

    .hasStatus .tag{
        display: flex;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        z-index: 99;
        flex: 1 0 100%;
    }

    .hasStatus .tag span{
        /* width: 100px; */
        width: 125px;
        height: 40px;
        color: white;
        background: var(--main-color);
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        right: 0;
        bottom: 0;
        transform: translateY(-42px);
        text-align: center;
    }

    .available .tag span{
        background: var(--main-color);
    }

    .pre-order .tag span{
        background: #ddb2b8;
    }

    .details{
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
    }

    .details > p {
        margin: 0;
    }

    .title{
        text-align: left;
    }

    .price{
        text-align: right;
        text-transform: uppercase;
        font-family: auto;
    }

    .title,
    .price{
        font-weight: 800;
        font-size: 18px;
    }

    .photo{
        grid-column: 1 / 3;
        aspect-ratio: 8 / 10;
        display: flex;
    }

    .photo img{
        --photo-opacity: 100%;
        object-fit: fill;
        width: 100%;
        opacity: var(--photo-opacity);
        transition: opacity 0.55s ease-in;
    }

    .photo img.loading{
        opacity: 0%;
    }

    @media screen and (min-width: 1024px){

        .details{
            margin-top: 15px;
        }

        .photo{
            position: relative;
        }

        .photo::before{
            content: '';
            visibility: hidden;
            width: 100%;
            height: 100%;
            z-index: 1;
            position: absolute;
            opacity: 0%;
            transition: opacity 0.20s ease-in;
            /* background-color: #d58993; */
            background-color: white;
            pointer-events: none;
        }

        :where(.photo):hover::before{
            --card-hover-opacity: 35%;
            opacity: var(--card-hover-opacity);
            visibility: visible;
        }

        .hasStatus .tag span{
            --opacity: 100%;
            opacity: var(--opacity);
            transition: opacity 0.25s ease-in;
            transform: translateY(-37px);
        }

        .hasStatus:hover .tag span{
            --opacity: 55%;
            opacity: var(--opacity);
            transition: opacity 0.25s ease-in;
        }
    }
</style>

<script>
import { ShopifyMediaQuery } from '~/plugins/helpers'
export default {
    props: {
        product: {
            value: Object,
            default: () => {}
        },
    },
    data(){
        return{
            card: {
                title: 'Boneca',
                price: 'R$',
                image: '',
                url: ''
            },
            queries: {
                small: new ShopifyMediaQuery({
                    condition: "(max-width: 375px)",
                    width: 375,
                    aspectRatio: 0.8,
                    src: ''
                }),
                medium: new ShopifyMediaQuery({
                    condition: "(min-width: 376px) and (max-width: 1000px)",
                    width: 500,
                    aspectRatio: 0.8,
                    src: ''
                }),
                big: new ShopifyMediaQuery({
                    condition: "(min-width: 1024px)",
                    width: 700,
                    aspectRatio: 0.8,
                    src: ''
                })
            },
            status: {
                active: false,
                hint: '',
                order: [false, 'Sob Encomenda'],
                available: [false, 'Pronta-entrega']
            },
        }
    },
    methods: {
        loaded(e){
            /** @type {HTMLElement} */
            let target = e.target;
            target.classList.toggle('loading', false);
        },
        checkForStatus(){
            this.product.tags.forEach(
                tag => {
                    if(tag.value.toLowerCase() == 'encomenda'){
                        this.status.active = true;
                        this.status.order[0] = true;
                        this.status.hint = this.status.order[1];
                    }
                    else if(tag.value.toLowerCase() == 'pronta-entrega'){
                        this.status.active = true;
                        this.status.available[0] = true;
                        this.status.hint = this.status.available[1];
                    }
            });
        }
    },
    watch: {
        product: {
            handler: function(product, oldProduct){
                if(product != undefined) {
                    this.card.title = product.title;
                    this.card.price = parseInt(product.variants[0].price.amount);
                    this.card.image = product.images[0];
                    /* this.queries = this.$helpers.getResponsiveImages({
                        imageSource: this.card.image,
                        mediaQueries: this.queries
                    }); */
                    /* console.log(this.product); */
                    this.checkForStatus();
                }
            },
            immediate: true
        }
    },
}
</script>
