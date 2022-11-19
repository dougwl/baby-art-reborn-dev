<template>
    <div class="lista-bonecas">
        <div class="bonecas">
            <client-only>
                <DollsDollCard v-for="product in this.filteredList" :product="product" :key="product.id" />
             </client-only>
        </div>
        
    </div>
</template>

<style scoped>
    .lista-bonecas{
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 250px;
        margin-bottom: 200px;
        min-height: 100vh;
        width: 100%;
    }

    /* @media screen and (max-height: 700px){
        .lista-bonecas{
            margin-top: 180px;
        }
    } */

    .bonecas{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 50px;
    }


    @media screen and (min-width: 1024px){
        .bonecas{
            --flex-gap: calc(((100vw - (min(75px, 5vw) * 2)) - 60vw) / 5);
            grid-template-columns: max-content max-content;
            grid-gap: unset;
            row-gap: var(--flex-gap);
            width: 100%;
            justify-content: space-evenly;
            /* grid-gap: 55px 60px;
            width: calc(100% - 150px);
            justify-content: center; */
        }
    }
</style>

<script>
export default {
    data(){
        return {
            productList: [],
            filteredList: [],
            filter: ''
        }
    },
    fetchOnServer: false,
    fetchKey: 'pagina-bonecas',
    props: {
        fetchedProducts: {
            default: () => { return {} },
            type: Object,
        },
    },
    methods: {
        /**
         * @param {String} filter
         * @param {Array} catalog
         */
        filterProducts: function (filter, catalog){
            let filtered = [];
            catalog.forEach( 
                (product) => {
                    let isOnTheList = false;
                    product.tags.forEach( 
                        (tag) => {
                            if(tag.value.toLowerCase() == filter.toLowerCase()){
                                if(!isOnTheList){
                                    isOnTheList = true;
                                    filtered.push(product);
                                }
                            }
                    });
            });
            if(filtered.length > 0) return filtered;
            else return catalog;
        }
    },
    async fetch(){
        let request;
        await this.$nextTick();
        if(Object.entries(this.$props.fetchedProducts).length == 0){
            request = this.$inventory.retrieve.productsCustom();
            this.productList = await request;
        }
        else{
            this.productList = this.fetchedProducts;
        }
    },
    watch: {
        productList: function () {
            if(this.$route.hash !== ''){
                this.filter = this.$route.hash.replace('#', '');
                this.filteredList = this.filterProducts(this.filter, this.productList);
            }
            else {
                this.filteredList = this.productList;
            }
        }
    }
}

</script>

