<template>
    <div class="tabs">
        <fieldset class="hub">
            <legend>Outras Informações</legend>
            <div class="tab" :id="'tab-1'" v-bind:class="{
                    active: activeTab == 1, 
                    get hidden() { return !(this.active)}
            }">
                <div class="title">
                    <input type="radio" class="tab__input" id="input-1" name="option-1" v-bind:value="1" tabindex="0" v-model.number="activeTab" 
                        @focus="enableTab({tab:1})">
                    <label for="input-1" v-on:click.prevent="enableTab({tab:1, focus:true},$event);">O que acompanha?</label>
                </div>
                <div class="content">
                    <p v-html="includedItems" class="info"></p>
                </div>
            </div>
            <div class="tab" :id="'tab-2'" v-bind:class="{
                    active: activeTab == 2, 
                    get hidden() { return !(this.active)}
            }">
                <div class="title">
                    <input type="radio" class="tab__input" id="input-2" name="option-2" v-bind:value="2"  tabindex="0" v-model.number="activeTab" 
                        @focus="enableTab({tab:2})">
                    <label for="input-2" v-on:click.prevent="enableTab({tab:2, focus:true},$event)"> Materiais Utilizados.</label>
                </div>
                <div class="content">
                    <p v-html="madeWith" class="info"></p>
                </div>
            </div>
        </fieldset>   
    </div>
</template>


<style scoped>


:where(fieldset,legend,input,label,p){
    border: none;
    padding: 0;
    margin: 0;
}

:where(legend, input){
    position: absolute;
    height: 0;
    width: 0;
    transform: scale(0,0);
}

legend{
    top: 0;
    left: 0;
    opacity: 0;  
}

input{
    clip-path: polygon(0 0);
    pointer-events: none; 
}

label{
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 10px;
}

input:where(:focus, :checked) + label,
.tab.active input + label{
    color: orange;
}
    
.tabs{
    display: flex;
    flex-direction: row;
    width: 100%;
}

.hub{
    display: grid;
    flex-grow: 1;
    margin: 0 50px;
}

.tab{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: min-content 1fr;
    grid-column: 1 / 1;
    grid-row: 1 / 1;
    pointer-events: none;
}

.title{
    pointer-events: all;
}

.tab:nth-of-type(1) .title{
    grid-column: 1 / 1;
}

.tab:nth-of-type(2) .title{
    grid-column: 2 / 2;
}

.content{
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
    grid-column: 1 / 3;
    padding: 0; 
    border: 0;
}

.active .content{
    opacity: 1;
    transition: opacity 325ms ease-in;
}

.hidden .content{
    opacity: 0;
    transform: scaleY(0);
}

.info{
    display: flex;
    flex-grow: 1;
    width: 100%;
}

.content :where(ul,li){
    text-align: left;
    border: 0;
    padding: 0;
    margin: 0;
}

/* both ::v-deep and >>> works the same, with the first being the newest option. */
/* .info::v-deep *{  
    
} */

</style>

<script>
export default {
    props: {
        included: {
            value: String,
            default: "<ul><li>Item 1 - Some description</li> <li>Item 2 - A somewhat bigger description</li> <li>Item 3 - A normal sized description</li></ul>"
        },
        materials: {
            value: String,
            default: "Nam repellendus numquam. Minus nemo est voluptate debitis deserunt assumenda perferendis et. Minima vel veniam aspernatur possimus sequi a maxime voluptates vel. Et reiciendis molestiae necessitatibus. Et iusto ipsam.Neque optio quas eius laborum doloribus incidunt earum. Aperiam quam rerum nihil vel ipsa. Natus ullam vel ullam facilis. Doloribus saepe et sed qui odio quia. Dolore et explicabo consequatur.Exercitationem quisquam ipsum exercitationem. Architecto consequatur voluptatem pariatur aut. Dolorum odit perspiciatis.." 
        }

    },
    data() {
        return{
            activeTab: 1,
            includedItems: this.$props.included,
            madeWith: this.$props.materials
        }
    },
    methods: {
        enableTab({tab = '', focus = false},e){
            this.activeTab = tab;
            if(focus) e.target.previousElementSibling.focus();
        }
    }
}
</script>