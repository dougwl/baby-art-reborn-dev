<template>
    <div class="history--wrapper">
        <section class="history">
            <h2 class="title">Minha História</h2>
            <div class="content">
                <div class="photos">
                    <div class="photo">
                        <nuxt-img src="/history/desktop_01.webp" height="350" width="280" loading="lazy" title="Segurando boneca reborn."/>
                    </div>
                    <div class="photo">
                        <nuxt-img src="/history/mobile_center.webp" height="350" width="280" loading="lazy" title="Olhando boneca reborn."/>
                    </div>
                    <div class="photo">
                        <nuxt-img src="/history/desktop_02.webp" height="350" width="280" loading="lazy" title="Coleção de bonecas reborn."/>
                    </div>
                </div>
                <div class="link-heading">
                    <span class="subtitle">Trajetória e Experiência </span>
                    <span class="other-subtitle"> Ledir de Oliveira Rosa </span>
                    <nuxt-link :to="'/minha-historia'" class="history--button">
                        <span>Ler História</span>
                    </nuxt-link>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>

.history--wrapper{
    height: auto;
    position: relative;
    padding-top: 75px;
    padding-bottom: 150px;
    background: var(--desktop-background-color);
}

.history--wrapper,
.history{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    width: 100%;
}

.content {
    padding-top: 120px;
    width: 100%;
}

.title{
    font-size: 35px;
    font-weight: 400;
}

.title,
.subtitle,
.other-subtitle{
    color: var(--main-color);
}

.subtitle{
    line-height: 45px;
    font-weight: 500;
    font-size: 15px;
}

.other-subtitle{
    font-size: 20px;
}


.content .photos{
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: min-content;
    grid-template-columns: repeat(7, 1fr);
    justify-content: center;
}

.link-heading{
    padding-top: 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.history--button{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 75px;
    background: var(--alternative-blue);
    color: var(--main-color);
    width: 175px;
    height: 60px;
    text-align: center;
    outline: solid 1px var(--main-color);
    transition: background 0.25s ease-in;
}

.history--button:hover {
    background: var(--main-color);
    color: white;
}

.photo {
    border: solid 5px white;
    box-shadow: 6px 10px 5px 0px rgb(0 0 0 / 25%);
    outline: solid 1px var(--main-color);
}

.photo:nth-child(1),
.photo:nth-child(3){
    display: none;
}

.photo:nth-child(1){
    grid-column: 2/2;
}

.photo:nth-child(2){
    grid-column: 4/4;
}

.photo:nth-child(3){
    grid-column: 6/6;
}



@media (min-width: 1024px){

    .photo:nth-child(1),
    .photo:nth-child(3){
        display: unset;
    }

    .photo:nth-child(2){
        transform: rotateZ(-4deg);
    }
}


</style>

