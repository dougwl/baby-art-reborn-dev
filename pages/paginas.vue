<template>
    <div class="information">
        <div class="wrapper">
            <ul class="tabs">
                <li class="contact">
                    <NuxtLink to="/paginas/contato">Contato</NuxtLink>    
                </li>
                <li class="faq">
                    <NuxtLink to="/paginas/contato">F.A.Q</NuxtLink>    
                </li>
            </ul>
            <div class="content">
                <div class="heading">{{this.activeTitle}}</div>
                <NuxtChild v-on:change-title="changeTitle" />
            </div>
        </div>
    </div>
</template>

<style scoped>

    .information,
    .wrapper,
    .wrapper > *,
    .wrapper .tabs :where(div, ul, li, a),
    .wrapper .content > *{
        display: flex;
        width: 100%;
    }

    .heading{
        height: 0;
        width: 0;
        visibility: hidden;
    }

    .information,
    .wrapper{
        flex-direction: column-reverse;
        flex-grow: 1;
        background: var(--desktop-background-color);
    }

    .wrapper > * {
        flex: 1 1 0;
        align-self: center;
        text-align: center;
    }

    .information{
        --padding-top: 220px;
        --padding-bottom: 50px;
        padding: var(--padding-top) 0 var(--padding-bottom) 0;
    }

    .tabs,
    .content,
    .content > *{
        flex-direction: column;
    }

    .content *{
        color: var(--main-color);
    }

    .tabs{
        --margin-top: 100px;
        flex-direction: column;
        height: max-content;
        margin: var(--margin-top) 0;
        font-size: 1.5em;
    }

    .tabs :where(li, a){
        align-items: center;
        justify-content: center;
    }

    .tabs li{
        --border: solid 1px var(--main-color);
        --background-transition: background 0.25s ease-in;
        height: 50px;
        flex-direction: row;
        flex: 0 0 100%;
        border-top: var(--border);
    }

    .tabs li:last-child{
        border-bottom: var(--border);
    }

    .tabs a {
        height: 100%;
    }

    .tabs a:focus{
        --transition: background 0.25s ease-in;
        --color: var(--alternative-blue);
        background: var(--color);
        transition: var(--transition);
    }


    @media (min-width: 1023px){

        .tabs :where(li, li:hover){
            transition: var(--background-transition);
        }

        .tabs li:hover{
            background: var(--alternative-blue);
        }

        .information{
            --padding-top: 120px; 
        }
    }

</style>

<script>
export default {
    data () {
        return {
            activeTitle: '',
        }
    },
    methods: {
        changeTitle(ev){
            this.activeTitle = ev;
        }
    }
}
</script>