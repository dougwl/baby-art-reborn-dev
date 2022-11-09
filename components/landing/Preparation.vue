<template>
    <div class="preparation wrapper">
        <div class="content">
            <figure>
                <nuxt-img src="/montage.webp" height="500" width="480" loading="lazy" title="Ateliê de Confecção"/>
                <!-- <nuxt-img class="prep --desktop" src="/preparation_mobile.png" format="webp" height="400" width="300" loading="lazy" title="Ateliê de Confecção"/> -->
            </figure>
        </div>
        <section class="heading">
            <h2>Confecção</h2>
        </section>  
        <section class="paragraph">
            <p>A confecção de cada bebê leva em média 10 dias com o kit disponível ou entre 20 a 30 dias caso precise ser importado.</p>
        </section>
    </div>
</template>

<style scoped>

.preparation.wrapper{
    text-align: center;
    padding: 150px 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.content img{
    display: flex;
    aspect-ratio: 24/25;
    width: 80vw;
    max-width: 480px;
    height: auto;
    transition: opacity 0.25s ease-out;
    outline: solid 1px var(--main-color);
    outline-offset: clamp(20px, (650px - 100vw) * -9999 ,40px);
}

/* .prep.loaded{
    opacity: 100%;
} */

/* .prep.--desktop{
    display: none;
} */

.heading,
.heading h2{
    margin-top: clamp(35px, (650px - 100vw) * -9999 ,55px);
    font-size: 28px;
    line-height: 20px;
    text-align: center;
    font-weight: 200;
    color: var(--main-color);
}

.paragraph{
    font-size: 16px;
    hyphens: auto;
    line-height: 25px;
    font-weight: 400;
    max-width: min(80vw, 480px);
    text-align: left;
    margin-top: 40px;
}

.content,
.content figure{
    display: flex;
    justify-content: center;
    width: 100%;
    height: auto;
}




@media (min-width: 1024px){
    .content img{
        width: auto;
    }

    /* .prep.--desktop{
        display: block;
    } */

    .preparation.wrapper{
        padding: 150px 0px;
    }

    .heading{
        margin-top: 25px;
    }

    .heading,
    .heading h2{
        font-size: 35px;
        line-height: 90px;
    }

    .paragraph{
        font-size: 20px;
    }
}
</style>


<script>
export default {
    data() {
        return {
            lazyLoaded: false,
        }
    },
    methods: {
        onLoad: function(ev){
            let img = ev.target;
            this.lazyLoaded = true;
            img.classList.toggle('loaded');
        }
    }
}
</script>