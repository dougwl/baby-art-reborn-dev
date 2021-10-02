<template>
    <div class="boneca-pagina">
        <section class="boneca">
            <div class="informacoes">
                <div class="content">
                    <h1 class="titulo">
                        Produto
                        <em class="boneca-colecao">Nome da Coleção.</em>
                    </h1>
                    <div class="detalhes">
                        <div class="peso">
                            <span>Peso: {{product.weight}}</span>
                        </div>
                        <div class="preco">
                            <!-- <span>Preço: </span> -->
                            <span class="valor">R$ {{product.price}}</span>
                        </div>
                        <p class="descricao">
                            <span>
                                {{product.description}}
                            </span>
                        </p>
                    </div>
                <div class="adicionar-ao-carrinho">
                    <AddToCart />
                </div>
                <div class="outras-informacoes">
                    <Tabs />
                </div>
                </div>
            </div>
            <div class="fotos">
                <ul class="album" v-bind:class="{small: $screen.width < 1024}">
                    <li class="album-item">
                        <!--  <source media="(max-width: 767px)" srcset="https://source.unsplash.com/random/200x350">
                         <source media="(max-width: 1023px)" srcset="https://source.unsplash.com/random/700x500"> -->
                        <picture class="album-item--foto">
                            <source media="(max-width: 767px)" srcset="https://source.unsplash.com/random/200x300">
                            <img src="https://source.unsplash.com/random/400x700" alt="">
                        </picture>
                    </li>
                    <li class="album-item">
                        <picture class="album-item--foto">
                            <source media="(max-width: 767px)" srcset="https://source.unsplash.com/random/200x350">
                            <img src="https://source.unsplash.com/random/400x700" alt="">
                        </picture>
                    </li>
                    <li class="album-item">
                        <picture class="album-item--foto">
                            <source media="(max-width: 767px)" srcset="https://source.unsplash.com/random/200x350">
                            <img src="https://source.unsplash.com/random/400x700" alt="">
                        </picture>
                    </li>
                </ul>
                <ul class="thumbnails">
                    <li class="thumbnail">
                        <a href="" class="thumbnail--link">
                            <picture class="thumbnail--foto">
                                <img src="https://source.unsplash.com/random/200x259" alt="">
                            </picture>
                        </a>
                    </li>
                    <li class="thumbnail">
                        <a href="" class="thumbnail--link">
                            <picture class="thumbnail--foto">
                                <img src="https://source.unsplash.com/random/200x259" alt="">
                            </picture>
                        </a>
                    </li>
                    <li class="thumbnail">
                        <a href="" class="thumbnail--link">
                            <picture class="thumbnail--foto">
                                <img src="https://source.unsplash.com/random/200x259" alt="">
                            </picture>
                        </a>
                    </li>
                    <li class="thumbnail">
                        <a href="" class="thumbnail--link">
                            <picture class="thumbnail--foto">
                                <img src="https://source.unsplash.com/random/200x259" alt="">
                            </picture>
                        </a>
                    </li>
                </ul>
            </div>
        </section>
        <section class="recomendados">
            <h3></h3>
        </section>
    </div>
</template>

<style scoped>

*{
    --page-width: calc(100vw - 75px);
    --page-half: calc(var(--page-width) / 2);
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
    list-style: none;
}

.boneca-pagina{
    display: flex;
    flex-direction: column;
}

.boneca{
    display: flex;
    flex-direction: column-reverse;
    flex-basis: 100%;
}

.boneca > :where(div){
    flex-basis: 50%;
}

.informacoes{
    font-size: 12px;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
}

.content{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 480px;
    padding: 0 25px;
    flex-basis: 125vh;
    justify-content: space-evenly;
}

.titulo{
    white-space: pre-line;
    max-width: 300px;
    font-weight: 400;
    /* margin-top: 80px; */
}

.peso{
    margin-bottom: 13px;
    text-shadow: none;
}

.preco{
    /* font-size: 10px; */
    font-size: 15px;
    font-weight: bolder;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 14px;
    color: orange;
}

.descricao{
    margin: 0 70px 40px;
}

.adicionar-ao-carrinho{
    position: fixed;
    left: 0;
    bottom: 0;
}

:where(.adicionar-ao-carrinho,
.add-to-cart){
    text-align: center;
    display: flex;
    flex-direction: row;
    z-index: 25;
}

.outras-informacoes{
    display: flex;
    width: 100%;
    max-height: 400px;
    transform: translateY(-30px);
}

/* .fotos{
    width: 50%;
} */

.album{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    background: #fbe6e6;
}

.album-item {
    width: 100%;
    display: flex;
    justify-content: center;
}

.album-item--foto{
    aspect-ratio: 16/9;
    display: flex;
}

.album-item--foto :where(img){
    width: 100%;
    object-fit: contain;
    object-position: top;
}

@media screen and (max-width: 1023px){

    .adicionar-ao-carrinho{
        width: 100%;
    }
    
    .fotos{
        --photo-padding-left: 40px;
        --photo-padding-right: 40px;
        --photo-padding-top: 120px;
        --photo-padding-bottom: 60px
    }

    .album{
        min-height: 80vh;
        padding: 45% 15% 15% 15%;
        
    }

    .album-item{
        display: none;
    }

    .album:where(.small) > :where(:first-child){
        display: flex;
        flex-grow: 1;
        width: 100%;
        height: 100%;
        justify-content: unset;
    }
    
    .album-item--foto{
        aspect-ratio: unset;
        display: unset;
        width: 100%;
    }

    .album-item--foto :where(img){
        width: 100%;
        object-fit: contain;
        object-position: bottom;
        aspect-ratio: 0.5625;
    }

    .thumbnails{
        --number-of-columns: 4;
        --number-of-gaps: calc(var(--number-of-columns) - 1);
        --column-gap: calc(( 5/var(--number-of-gaps) ) * 1% );
        --column-size: calc( (100% - (var(--column-gap) * var(--number-of-gaps))) / var(--number-of-columns) );
        --row-gap: 15px;
        --max-width: 550px;
        display: grid;
        min-height: 150px;
        margin-top: 20px;
        grid-auto-rows: auto;
        grid-template-columns: repeat(var(--number-of-columns), var(--column-size));
        column-gap: var(--column-gap);
        row-gap: var(--row-gap);
        padding: 0 max( calc( (100% - min(100%,var(--max-width))) / 2 ), var(--photo-padding-left)); 
    }

    :where(.thumbnail, .thumbnail :not(img)){
        display: flex;
        width: 100%;
        height: inherit;
        position: relative;
    }

    .thumbnail--foto :where(img){
        object-fit: contain;
        aspect-ratio: 9/16;
        width: 100%;
    }
}

@media screen and (min-width: 1023px) and (max-aspect-ratio: 22/16) {
    .album-item--foto :where(img){
        object-fit: cover;
    }
}

@media screen and (min-width: 1024px){

    .boneca{
        max-width: var(--page-width);
        flex-direction: row;
    }

    .boneca > :where(div){
        max-width: var(--page-half);
    }

    .titulo{
        font-size: 36px;
        line-height: 42px;
    }

    .detalhes{
        font-size: 16px;
    }

    .content{
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        left: 0;
        padding: inherit;
    }

    .adicionar-ao-carrinho{
        transform: translateY(40px);
    }

    .adicionar-ao-carrinho,
    .add-to-cart{
        margin-bottom: 30px;
        position: static;
    }

    .album{
        min-height: 100vh;
    }

    .album-item{
        min-height: 100vh;
        flex-basis: 100vh;
    }

    .thumbnails{
        display: none;
    }
}


</style>

<script>
export default {
    data (){
        return {
            product: {
                price: this.$props.price,
                weight: this.$props.weight,
                description: this.$props.description
            },
            album: {
                activePhoto: 1,
            }
        }
    },
    props: {
        price: {
            default: 2000,
            type: Number
        },
        weight: {
            default: '3 kg',
            type: String
        },
        description: {
            default: "Excepturi facere voluptatem itaque placeat. Ducimus adipisci rerum et et esse nostrum dolorem cum. A quisquam voluptatem est fugit ullam ut rerum.",
            type: String
        }
    }
}
</script>