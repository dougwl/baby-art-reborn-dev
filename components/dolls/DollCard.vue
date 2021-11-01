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
                small: {
                    condition: "(max-width: 375px)",
                    width: 375,
                    aspectRatio: 0.8,
                    src: ''
                },
                medium: {
                    condition: "(min-width: 376px) and (max-width: 1000px)",
                    width: 500,
                    aspectRatio: 0.8,
                    src: ''
                },
                big: {
                    condition: "(min-width: 1024px)",
                    width: 700,
                    aspectRatio: 0.8,
                    src: ''
                }
            }
        }
    },
    methods:{
        getResponsiveImages: function({imageSource, queries}){
            console.log('getting responsive images');
            let width, height, imageSrc;
            for (const size in queries) {
                if (Object.hasOwnProperty.call(queries, size)) {
                    const query = queries[size];
                    width = query.width;
                    height = Math.round(width / query.aspectRatio);
                    imageSrc = this.$shopify.image.helpers.imageForSize(imageSource,{
                        maxWidth: width,
                        maxHeight: height
                    });
                    queries[size].src = imageSrc;
                }
            };
            return queries;
        }
    },
    watch: {
        product: {
            handler: function(product, oldProduct){
                if(product != undefined) {    
                    this.card.title = product.title;
                    this.card.price = product.variants[0].price;
                    this.card.image = product.images[0];
                    this.queries = this.getResponsiveImages({
                        imageSource: this.card.image,
                        queries: this.queries 
                    });
                }
            },
            immediate: true   
        }
    },
}
</script>
