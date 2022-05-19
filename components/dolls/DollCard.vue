<template>
    <div class="product">
        <p>{{card.title}}</p>
        <picture class="photo">
            <source :media="queries.small.condition" :srcset="queries.small.src">
            <source :media="queries.medium.condition" :srcset="queries.medium.src">
            <source :media="queries.big.condition" :srcset="queries.big.src">
            <img :src="card.image.src" :alt="card.title">
        </picture>
        <p>{{card.price}}</p>
    </div>
</template>

<style scoped>
    .product{
        border: 5px solid black;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: lightgoldenrodyellow;
        min-height: 150px;
        min-width: 150px;
        max-width: 300px;
    }

    .photo{
        aspect-ratio: 8 / 10;
        display: flex;
    }

    .photo img{
        object-fit: fill;
        width: 100%;
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
                image: ''
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
                    this.queries = this.$helpers.getResponsiveImages({
                        imageSource: this.card.image,
                        mediaQueries: this.queries 
                    });
                }
            },
            immediate: true   
        }
    },
}
</script>
