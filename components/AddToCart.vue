<template>
    <div class="add-to-cart">
        <button class="--less" @click="productAmount--">-</button>
        <input id="amount" v-bind:value="productAmount" type="text" class="--amount" disabled>
        <button class="--more" @click="productAmount++">+</button>
        <button id="add-to" class="--add" @click="debug(productAmount)">Add to Cart</button>
    </div>
</template>

<style scoped>

.add-to-cart{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    text-align: center;
}

button,
input {
    height: 80px;
    width: 80px;
    margin: 0;
    padding: 0;
    border: none;
    text-align: center;
    font-size: 16px;
}

button{
    cursor: pointer;
    font-size: 24px;
}

button:not(.--add){
    background: lightblue;
}

input{
    filter: none;
}

#add-to{
    font-size: 16px;
    width: 160px;
    background: lightsalmon;
}


</style>

<script>
export default {
    data(){
        return {
            selectedAmount: {
                value: 1,
                get total() { return this.value}
            },
            inventory: { 
                max: 5, 
                free: 5,
                get full () { return this.free == this.max},
                get empty() { return this.free == 0}
            }
        }
    },
    methods: {
        debug: (arg) => console.log(arg), 
    },
    computed: {
        freeInventory: {
            get: ({inventory}) => inventory.free,
            set: function (val, {inventory} = this){
                if(val > inventory.free && val <= inventory.max){
                    inventory.free++;
                }
                else if(inventory.free > 0){
                    inventory.free--;
                }
            }
        },
        productAmount: {
            get: ({selectedAmount}) => selectedAmount.total,
            set: function(val, {selectedAmount, inventory} = this){
                if(val > selectedAmount.total){
                    if(inventory.empty == false){
                        selectedAmount.value++;
                        this.freeInventory--;
                    }
                }
                else if(val < selectedAmount.total && selectedAmount.total > 1){
                    if(inventory.full == false){
                        selectedAmount.value--;
                        this.freeInventory++;
                    }
                }
            }
        },
    }
    
}
</script>