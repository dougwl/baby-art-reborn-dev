<template>
    <div class="add-to-cart">
        <button class="--less" @click="productAmount--" v-bind:disabled="isInventoryEmpty()">-</button>
        <input id="amount" v-bind:value="productAmount" type="text" class="--amount" disabled>
        <button class="--more" @click="productAmount++" v-bind:disabled="isInventoryEmpty()">+</button>
        <button id="add-to" class="--add" @click="moveToCart" v-bind:disabled="isInventoryEmpty()">Add to Cart</button>
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
    transition: background 600ms cubic-bezier(0.16, 1, 0.3, 1);
}

button:not(.--add):not(:disabled):hover{
    background: lightsalmon;
    transition: background 600ms cubic-bezier(0.16, 1, 0.3, 1);
    color: white;
}

input{
    filter: none;
}

#add-to{
    font-size: 16px;
    width: 160px;
    background: lightsalmon;
    color: white;
}

button:disabled{
    cursor: default;
}


</style>

<script>
export default {
    data(){
        return {
            selectedAmount: {
                get value() { return this._value != undefined ? this._value : 1},
                set value (val) { this._value = val},
                get total() { return this.value}
            },
            inventory: { 
                get max () { return this._max != undefined ? this._max : this._max = 6},
                set max (val) { this._max = val;}, 
                get free () { return this._free != undefined ? this._free : this._free = this.max - 1},
                set free (val) { this._free = val; },
                get full () { return this.max > 0 ? this.free == this.max : false},
                get empty() { return this.free == 0 || this.max == 0},
                reset: function() { this.free =  this.max > 0 ? this.max - 1 : 0}
            }
        }
    },
    methods: {
        debug: (arg) => console.log(arg),
        moveToCart: function() {
            if(this.inventory.max > 0){
                if(this.productAmount > 0 && this.productAmount <= this.inventory.max){
                    this.inventory.max -= this.productAmount;
                    console.log('Moving to Cart --- [Replace this line with an appropriate method.]');
                    this.productAmount = 0;
                }
            }
        },
        loadSession: function(){
            this.inventory.free = this.$storage.get('inventory').key.free; 
            this.inventory.max = this.$storage.get('inventory').key.max;
            this.selectedAmount.value = this.$storage.get('selectedAmount').key.value;
        },
        saveSession: function(){
            this.$storage.set('selectedAmount',{key: this.selectedAmount});
            this.$storage.set('inventory', {key: this.inventory});
        },
        isInventoryEmpty: function(){ return this.inventory.max < 1 && this.productAmount <= 1}
    },
    computed: {
        freeInventory: {
            get: ({inventory}) => inventory.free,
            set: function (val, {inventory} = this){
                if (val.empty === true){
                    inventory.reset();
                    return;
                }
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
                if(val == 0){
                    selectedAmount.value = 1;
                    this.freeInventory = {empty: true};
                    this.saveSession();
                    return;
                }
                if(val > selectedAmount.total && inventory.max > 0){
                    if(inventory.empty == false){
                        selectedAmount.value++;
                        this.freeInventory--;
                    }
                }
                else if(val < selectedAmount.total && selectedAmount.total >= 2){
                    if(inventory.full == false){
                        selectedAmount.value--;
                        this.freeInventory++;
                    }
                }
                this.saveSession();
            }
        },
    },
    mounted: function(){
        if(this.$storage.has('selectedAmount') && this.$storage.has('inventory')){
            this.loadSession();
        }
        else{
            this.saveSession();
        };
        
    }
}
</script>