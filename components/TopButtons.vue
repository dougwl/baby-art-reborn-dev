<template>
    <div class="top-buttons">
        <div class="left-side">
            <button type="button" aria-label="Abrir menu" title="Todas as opções" class="ver-menu">
                <span class="sr-only">Todas as Opções</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
                </svg>    
            </button>
        </div> 
        <div class="right-side">
            <button type="button" aria-label="Contato" title="Entrar em Contato" @click="onLinkClicked" class="contato">
                <span class="sr-only">Entrar em Contato</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#ffffff" viewBox="0 0 256 256"><path d="M45.4,177A95.9,95.9,0,1,1,79,210.6h0L45.8,220a7.9,7.9,0,0,1-9.8-9.8L45.4,177Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path><path d="M152.1,184A79.9,79.9,0,0,1,72,103.9,28,28,0,0,1,100,76h0a6.8,6.8,0,0,1,6,3.5l11.7,20.4a8.1,8.1,0,0,1-.1,8.1l-9.4,15.7h0a48,48,0,0,0,24.1,24.1h0l15.7-9.4a8.1,8.1,0,0,1,8.1-.1L176.5,150a6.8,6.8,0,0,1,3.5,6h0A28.1,28.1,0,0,1,152.1,184Z" fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></path></svg>
            </button>
        </div>
    </div>    
</template>

<style scoped>
    .top-buttons{
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        z-index: 101;
        padding: 0px min(75px, 5%);
        pointer-events: none;
        background: white;
    }

    .top-buttons > div{
        display: flex;
    }

    .ver-menu,
    .contato{
        background: none;
        fill: none;
        pointer-events: all;
        cursor: pointer;
        color: var(--main-color);
        /* margin-left: 5vw; */
        font-size: 16px;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        padding: 0;
    }


    .ver-menu:hover{
        text-decoration: underline;
    }

    .sr-only:not(:focus):not(:active) {
        clip: rect(0 0 0 0); 
        clip-path: inset(50%);
        height: 1px;
        overflow: hidden;
        position: absolute;
        white-space: nowrap; 
        width: 1px;
    }

    :where(.ver-menu, .contato) svg{
        /* height: 60%; */
        height: auto;
        width: 70%;
    }

    .ver-menu svg > line{
        stroke: var(--main-color);
    }

    /* .contato svg > *{
        stroke-width: 10px;
    } */

    .contato svg :where(path){
        stroke: var(--main-color);
        fill: transparent;
    }

    .contato svg :where(path:last-child){
        stroke: var(--main-color);
    }

    .contato span{
        width: max-content;
    }

    
    @media screen and (min-width: 1024px) {
        
        .top-buttons{
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: min(75px, 5vw);
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            z-index: 101;
            padding: 0px min(75px, 5%);
            pointer-events: none;
            background: unset;
        }

        .ver-menu{
            width: unset;
            height: unset;
            display: unset;
            justify-content: unset;
            align-items: unset;
            margin-left: 45px;
        }

        body.nav-open .tab-buttons{
            z-index: 99;
        }

        .sr-only:not(:focus):not(:active) {
            clip: unset; 
            clip-path: unset;
            height: unset;
            overflow: unset;
            position: unset;
            white-space: unset; 
            width: unset;
        }   
        

        :where(.ver-menu, .contato) svg{
            display: none;
        }

        .contato{
            width: 100%;
            height: 100%;
            margin-right: 45px;
        }

        .contato:hover{
            text-decoration: underline;
        }
    }

</style>


<script>
export default {
    methods: {
        /** @param {HTMLElement} el */
        openMenu(el){
            el.classList.toggle('nav-open');
        },
        onLinkClicked(ev){
            let URL = "https://api.whatsapp.com/send/?phone="
            let number = '554788227334';
            let otherSettings = "&type=phone_number&app_absent=0&lang=pt_br";
            let fullURL = URL + number + otherSettings;

            ev.preventDefault();
            window.open(fullURL, '_blank');
        }
    },
    mounted(){
       const body = document.querySelector('body');
       const button = document.querySelector('.ver-menu');

       button.addEventListener('click', () => this.openMenu(body));

    }
}
</script>