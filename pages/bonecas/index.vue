<template>
    <div class="bonecas-todas">
        <DollsDollCard v-for="product in this.products" :product="product" :key="product.id" />
    </div>
</template>

<style scoped>
    .bonecas-todas{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
</style>

<script>
export default {
    data(){
        return {
            productList: {
                get() { 
                    return this._list != undefined ? this._list : [];
                },
                set(val) { 
                    this._list = val;
                }
            },
        }
    },
    computed: {
        products: {
            get: function() { 
                if(this.productList.length > 0) {
                    return this.productList
                } else {
                    return [];
                }
            }
        }, 
    },
    methods: {
        fetchAllProducts: async function() {
            let productList = await this.$shopify.product.fetchAll();
            return productList;
        }
    },
    async fetch(){
        this.productList = await this.fetchAllProducts();
        /* console.log(this.productList); */
    }
    /* mounted(){
        this.fetchAllProducts().then((val) => { this.productList = val; console.log(val);});
    }, */
}
/* this.$shopify.collection.fetchAllWithProducts().then((collections) => {
                // Do something with the collections
                console.log(collections);
                console.log(collections[0].products);
            }); */
</script>