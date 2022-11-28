<template>
    <div class="lista-bonecas">
        <div class="titulo">
            <span>{{this.titulo}}</span>
        </div>
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
        margin-top: 200px;
        margin-bottom: 200px;
        min-height: 100vh;
        width: 100%;
        flex-direction: column;
    }

    .titulo{
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-bottom: 100px;
        padding: 0 calc(((100vw - (min(15px, 2vw) * 2)) - 20vw) / 5);
    }

    .titulo span{
        margin: 0 40px;
        color: var(--main-color);
        text-align: center;
        font-size: 22px;
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

        .lista-bonecas{
            margin-top: 150px;
        }

        .titulo{
            grid-template-columns: 1fr min-content 1fr;
        }

        .titulo::before,
        .titulo::after{
            content: '';
            width: 100%;
            max-width: 100%;
            border-top: solid 1px var(--main-color);
            height: 0px;
            animation: grow 0.65s ease-in;
        }

        @keyframes grow {
            0%{
                max-width: 0%;
            }
            100%{
                max-width: 100%;
            }
        }

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
            filter: '',
            titulo: 'Toda Coleção'
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
            else{
                this.filter = '';
                return catalog;
            }
        },
        onRouteChange: function () {
            if(this.$route.hash !== ''){
                this.filter = this.$route.hash.replace('#', '');
                this.filteredList = this.filterProducts(this.filter, this.productList);
            }
            else {
                this.filteredList = this.productList;
                this.filter = '';
            }
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
        productList: function(){
            this.onRouteChange();
        },
        '$route.hash': function(){
            this.onRouteChange();
        },
        filter: function(){
            switch (this.filter) {
                case 'menina':
                    this.titulo = 'Meninas';
                    break;
                case 'menino':
                    this.titulo = 'Meninos';
                    break;
                case 'pronta-entrega':
                    this.titulo = 'Pronta-entrega'
                    break;
                case '':
                    this.titulo = 'Toda Coleção'
                    break;
            }
        }
    }
}

</script>

