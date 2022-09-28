<template>
    <div class="product">
        <NuxtLink :to="'/bonecas/' + product.handle">
            <picture class="photo">
                <source :media="queries.small.condition" :srcset="queries.small.src">
                <source :media="queries.medium.condition" :srcset="queries.medium.src">
                <source :media="queries.big.condition" :srcset="queries.big.src">
                <img :src="card.image.src" :alt="card.title" loading="lazy">
            </picture>
            <div class="details">
                <p class="title">{{card.title}}</p>
                <p class="price">{{card.price}}</p>
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
        min-width: 150px;
        max-width: 300px;
        outline: solid 1px #d58993;
        outline-offset: 15px;
        margin: 15px;
    }

    @media screen and (min-width: 1024px){
        .product{
            max-width: 400px;
        }
    }

    .details{
        margin-top: 20px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-flow: column;
    }

    .title{
        text-align: left;
    }

    .price{
        text-align: right;
        text-transform: uppercase;
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
        object-fit: fill;
        width: 100%;
        /* outline: solid 5px hsl(308deg 100% 95%); */
    }

    @media screen and (min-width: 1024px){
        /* .photo img{
            outline: solid 15px hsl(308deg 100% 95%);
        } */

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
            background-color: #d58993;
            pointer-events: none;
        }

        .photo:hover::before{
            visibility: visible;
            opacity: 25%;
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
        }
    },
    watch: {
        product: {
            handler: function(product, oldProduct){
                if(product != undefined) { 
                    this.card.title = product.title;
                    this.card.price = product.variants[0].price;
                    this.card.image = product.images[0];
                    /* this.queries = this.$helpers.getResponsiveImages({
                        imageSource: this.card.image,
                        mediaQueries: this.queries 
                    }); */
                }
            },
            immediate: true   
        }
    },
}
</script>
