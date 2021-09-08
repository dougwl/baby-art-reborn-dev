<template>
    <div class="tabs">
        <fieldset class="hub">
            <legend>Outras Informações</legend>
            <div class="tab" :id="'tab-1'">
                <div class="title">
                    <input type="radio" class="tab__input" id="input-1" name="option-1" value="tab-1" tabindex="0" v-model="activeTab" 
                        @focus="enableTab({tab:'tab-1'})" checked="true">
                    <label for="input-1" v-on:click.prevent="enableTab({tab:'tab-1', focus:true},$event);">O que acompanha?</label>
                </div>
                <div class="content" v-bind:class="{active: activeTab == 'tab-1'}">
                    <p>Hic ea minima animi quae maiores odio deserunt unde. A ipsam voluptas nostrum voluptatem. Debitis nam harum. Et ut porro doloribus at rerum occaecati id rem quo. Eveniet assumenda dolor accusamus mollitia debitis et quidem sint.
Rerum ut nihil eum sed facilis neque. Libero culpa recusandae esse voluptates est quis doloribus nulla voluptatem. Nesciunt eaque molestiae sed quis ut atque quae ut iure. Optio architecto eveniet rerum nesciunt enim vel qui aut. Error earum maxime accusamus est in at delectus. Consequatur ea rerum rem quae sunt soluta autem.
Amet et ut maiores numquam. Sequi earum sunt cum laboriosam suscipit iste repellendus veritatis et. Temporibus assumenda ad eum consequatur soluta vitae similique. Voluptas alias sunt rem debitis. Consequatur autem dicta non consequatur. Eius a nemo qui est perferendis id quae nihil id.</p>
                </div>
            </div>
            <div class="tab" :id="'tab-2'">
                <div class="title">
                    <input type="radio" class="tab__input" id="input-2" name="option-2" value="tab-2"  tabindex="0" v-model="activeTab" 
                        @focus="enableTab({tab:'tab-2'})">
                    <label for="input-2" v-on:click.prevent="enableTab({tab:'tab-2', focus:true},$event)"> Materiais Utilizados.</label>
                </div>
                 <div class="content" v-bind:class="{active: activeTab == 'tab-2'}">
                    <p>Nam repellendus numquam. Minus nemo est voluptate debitis deserunt assumenda perferendis et. Minima vel veniam aspernatur possimus sequi a maxime voluptates vel. Et reiciendis molestiae necessitatibus. Et iusto ipsam.
Neque optio quas eius laborum doloribus incidunt earum. Aperiam quam rerum nihil vel ipsa. Natus ullam vel ullam facilis. Doloribus saepe et sed qui odio quia. Dolore et explicabo consequatur.
Exercitationem quisquam ipsum exercitationem. Architecto consequatur voluptatem pariatur aut. Dolorum odit perspiciatis..</p>
                </div>
            </div>
        </fieldset>   
    </div>
</template>


<style scoped>
    
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
    width: 100%;
    display: none;
    grid-column: 1 / 3;
    opacity: 0;
    max-height: 0;
    overflow: hidden;
}

.content.active{
    display: flex;
    flex-direction: row;
    justify-content: center;
    opacity: 1;
    max-height: min-content;
    margin-top: 20px;
    text-align: center;
}


fieldset{
    border: none;
    padding: 0;
    margin: 0;
}

legend{
    opacity: 0;
    height: 0;
    width: 0;
    position: absolute;
    top: 0;
    left: 0;
}

input{
    clip-path: polygon(0 0);
    position: absolute;
    pointer-events: none;
    height: 0;
    width: 0;
}

label{
    cursor: pointer;
    text-transform: uppercase;
    text-decoration: underline;
    font-size: 10px;
}

input:focus + label,
input:checked + label{
    color: orange;
}

</style>

<script>
export default {
    data() {
        return{
            activeTab: "tab-1"
        }
    },
    methods: {
        debug(e){
            console.log(e);
        },
        enableTab({tab = '', focus = false},e){
            console.log(tab);
            this.activeTab = tab;
            if(focus) e.target.previousElementSibling.focus();
        }
    }
}
</script>