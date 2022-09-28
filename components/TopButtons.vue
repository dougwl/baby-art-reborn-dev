<template>
    <div class="top-buttons">
        <button type="button" aria-label="Abrir menu" title="Todas as opções" class="ver-menu">
            <span class="sr-only">Todas as Opções</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"></rect><line x1="40" y1="128" x2="216" y2="128" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="64" x2="216" y2="64" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><line x1="40" y1="192" x2="216" y2="192" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line>
            </svg>    
        </button> 
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
    }

    .ver-menu{
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

    .ver-menu svg{
        height: 60%;
        width: 60%;
    }

    .ver-menu svg > line{
        stroke: var(--main-color);
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
        

        .ver-menu svg{
            display: none;
        }
    }

</style>


<script>
export default {
    methods: {
        /** @param {HTMLElement} el */
        openMenu(el){
            el.classList.toggle('nav-open');
        }
    },
    mounted(){
       const body = document.querySelector('body');
       const button = document.querySelector('.ver-menu');

       button.addEventListener('click', () => this.openMenu(body));

    }
}
</script>