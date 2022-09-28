<template>
    <div class="lista-bonecas">
        <div class="bonecas">
            <client-only>
                <DollsDollCard v-for="product in this.productList" :product="product" :key="product.id" />
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
    }

    @media screen and (max-height: 700px){
        .lista-bonecas{
            margin-top: 180px;
        }
    }

    .bonecas{
        display: grid;
        grid-template-columns: 1fr;
        grid-gap: 50px;
    }


    @media screen and (min-width: 1024px){
        .bonecas{
            grid-template-columns: max-content max-content;
            grid-gap: 55px 60px;
            width: calc(100% - 150px);
            justify-content: center;
        }
    }
</style>

<script>
export default {
    data(){
        return {
            productList: {},
        }
    },
    props: {
        fetchedProducts: {
            default: () => { return {} },
            type: Object,
        },
    },
    /* beforeUpdate(){
        let header = document.querySelector('.header');
        if(!header.classList.contains('visible')) {
            header.classList.add('visible');
        }
    }, */
    async fetch(){
        let request;
        await this.$nextTick();
        if(Object.entries(this.$props.fetchedProducts).length == 0){
            request = this.$inventory.retrieve.products();
            this.productList = await request;
        }
        else{
            this.productList = this.fetchedProducts;
        }
    },
    fetchOnServer: false,
    fetchKey: 'pagina-bonecas'
}

</script>