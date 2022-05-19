<template>
    <div class="bonecas-todas">
        <client-only>
            <DollsDollCard v-for="product in this.products" :product="product" :key="product.id" />
        </client-only>
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
    async fetch(){
        let request = this.$inventory.retrieve.products();
        this.productList = await request;
    },
    fetchOnServer: false,
    fetchKey: 'pagina-bonecas'
}

</script>