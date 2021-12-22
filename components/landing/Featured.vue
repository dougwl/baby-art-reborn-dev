<template>
    <section class="featured"> 
        <div class="title">
            <p>Conheça parte desse mundo</p>
        </div>
        <!-- <client-only v-if="isMobile"> 
            <agile class="products"> 
                <div class="product">
                    <div class="card"></div>
                </div>
                <div class="product">
                    <div class="card"></div>
                </div>
                <div class="product">
                    <div class="card"></div>
                </div>
                <div class="product">
                    <div class="card"></div>
                </div>
            </agile>
        </client-only> -->
        <div class="products">
            <div class="product">
                <div class="card"></div>
            </div>
            <div class="product">
                <div class="card"></div>
            </div>
            <div class="product">
                <div class="card"></div>
            </div>
            <div class="product">
                <div class="card"></div>
            </div>
        </div>
    </section>
</template>

<style scoped>
    .featured{
        height: 520px;
        background-color: var(--mobile-background-color);
        display: flex;
        justify-content: space-between;
        flex-direction: column;
    }
    .title{
        text-align: center;
        margin-top: 50px;
    }
    .products{
        display: flex;
        position: relative;
        justify-content: space-between;
        flex-direction: row;
        width: 100%;
        height: 100%;
    }
    .product{
        background: lightgray;
        width: 100%;
        margin: 30px 10px;
        flex-grow: 1;
    }
    
</style>
