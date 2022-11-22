<template>
    <section class="nav">
        <div class="menu">
            <ul class="menu__container">
                <li class="menu__item">
                    <NuxtLink to="/" class="menu__link">Início</NuxtLink>
                    <!-- <a href="/">Início</a> -->
                </li>
                <li class="menu__item">
                    <NuxtLink to="/bonecas" class="menu__link">Bonecas</NuxtLink>
                    <!-- <a href="/bonecas">Bonecas</a> -->
                </li>
                <li class="menu__item submenu">
                    <ul>
                        <li>
                            <NuxtLink to="/bonecas#menina" class="menu__link">Meninas</NuxtLink>
                        </li>
                        <li>    
                            <NuxtLink to="/bonecas#menino" class="menu__link">Meninos</NuxtLink>
                        </li>
                        <li>
                            <NuxtLink to="/bonecas#gemeos" class="menu__link">Gêmeos</NuxtLink>
                        </li>
                    </ul>
                </li>
                <li class="menu__item">
                    <NuxtLink to="/minha-historia" class="menu__link">Sobre Mim</NuxtLink>
                    <!-- <a href="/sobre-mim">Sobre Mim</a> -->
                </li>
                <!-- <li class="menu__item">
                    <NuxtLink to="/historia" class="menu__link">História</NuxtLink>
                    <a href="/historia">História</a>
                </li> -->
                <li class="menu__item">
                    <NuxtLink to="/contato" class="menu__link">Contato</NuxtLink>
                    <!-- <a href="/contato">Contato</a> -->
                </li>
            </ul>
        </div>
        <button type="button" class="close-nav">
            <span class="close-icon">X</span>
        </button>
    </section>
</template>

<style scoped>

.nav{
    --size: 0;
    --closed: -100%;
    --open: 0;
    --offset: 0;

    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: row;
    height: 100vh;
    width: 100%;
    transform: translateX(var(--closed));
    z-index: 105;
    align-items: stretch;
    background: #f9f7f2;
    transition: transform 0.25s ease-in-out;
}

body.nav-open .nav{
    z-index: 103;
    transform: translateX(var(--open));
}

body.nav-open .nav::before{
    content: '';
    width: 75px;
    height: 100%;
    position: absolute;
    top: 0;
    right: 0;
    pointer-events: none;
    border-left: 1px solid #d3838e;
}


.close-nav{
    right: 0;
    background: none;
    width: 75px;
    pointer-events: all;
    cursor: pointer;
    display: none;
    color: var(--main-color);
    background: var(--alternative-blue);
    border: none;
}

body.nav-open .close-nav{
    display: flex;
    justify-content: center;
}

.close-nav .close-icon{
    margin-top: min(80px, 20vh);
}

.nav .menu{
    width: calc(100% - 75px);
    list-style: none;
}

.menu__container {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    margin: -15vh 30%;
}

.menu__item{
    list-style: none;
    padding: 0;
    text-align: left;
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    transition: background-color 0.2s ease-in;
    position: relative;
}

.menu__item.submenu{
    height: auto;
    margin-top: -35px;
    margin-bottom: 50px;
}

.menu__item.submenu .menu__link{
    font-size: 20px;
}

.menu__item.submenu :where(ul,li,a){
    list-style: none;
    height: auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.menu__item.submenu li{
    height: 25px;
    margin-top: 5px;
    padding-left: 10px;
    transition: background 0.25s ease-in;
}

.menu__item.submenu li:hover{
    background: var(--secondary-color);
}

.menu__item::before {
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    border-top: solid 1px var(--main-color);
    pointer-events: none;
}

.menu__item:is(.submenu)::before,
.menu__item:is(.submenu)::after{
    border-top: unset;
    border-bottom: unset;
}

.menu__item:nth-of-type(2)::after,
.menu__item:nth-of-type(5)::after{
    content: '';
    height: 100%;
    width: 100%;
    position: absolute;
    border-bottom: solid 1px var(--main-color);
    pointer-events: none;
}

.menu__item:nth-of-type(2){
    margin-bottom: 50px;
}

.menu__item .menu__link{
    font-size: 28px;
    width: 100%;
}


@media screen and (min-width: 1024px){
    .nav{

        --offset: min(75px, 5vw);
        --size: calc(var(--offset) + 40vw);

        left: var(--offset);
        max-width: var(--size);
        border-right: 1px solid #d3838e;
        display: flex;
        flex-direction: row;
        z-index: 99;
    }

    body.nav-open .nav{
        z-index: 103;
        --open: calc(-1 * var(--offset));
        transform: translateX(var(--open));
    }

    body.nav-open .nav::before{
        content: '';
        width: min(75px, 5vw - 1px);
        height: 100%;
        position: absolute;
        top: 0;
        right: 0;
        pointer-events: none;
        border-left: 1px solid #d3838e;
        z-index: 105;
    }

    body.nav-open .close-nav{
        display: unset;
    }

    .close-nav{
        right: 0;
        background: none;
        width: min(75px, 5vw - 1px);
        pointer-events: all;
        cursor: pointer;
        display: none;
        color: var(--main-color);
        transition: background 0.2s ease-in;
    }

    body.nav-open .close-nav:hover{
        background: var(--alternative-blue);
    }

    .nav .menu{
        width: 90%;
        list-style: none;
    }

    /* body.nav-open .nav .menu{
        transform: translateX(0);
    } */

    .menu__container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        margin: 0px 30%;
    }

    .menu__item{
        list-style: none;
        padding: 0;
        text-align: left;
        width: 100%;
        height: 50px;
        display: flex;
        align-items: center;
        transition: background-color 0.2s ease-in;
        position: relative;
    }

    .menu__item:hover{
        background-color: var(--alternative-blue);
        cursor: pointer;
    }

    .menu__item.submenu:hover{
        background-color: unset;
        cursor: default;
    }

    .menu__item::before {
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        border-top: solid 1px var(--main-color);
        pointer-events: none;
    }

    .menu__item:nth-of-type(2)::after,
    .menu__item:nth-of-type(5)::after{
        content: '';
        height: 100%;
        width: 100%;
        position: absolute;
        border-bottom: solid 1px var(--main-color);
        pointer-events: none;
    }

    .menu__item:nth-of-type(2){
        margin-bottom: 50px;
    }

    .menu__item a{
        font-size: 28px;
    }

    
}

</style>

<script>
export default {
    methods: {
        /** @param {HTMLElement} el */
        closeNav(el){
            el.classList.toggle('nav-open', false);
        },
        /* subscribeButtons(){
            let 
        } */
    },
    mounted(){
        const body = document.querySelector('body');
        const button = document.querySelector('.close-nav');
        const links = document.querySelectorAll('.menu__link');

        button.addEventListener('click', () => {this.closeNav(body)});
        links.forEach((link) => {
            link.addEventListener('click', () => {this.closeNav(body)});
        }) 
    }
}
</script>