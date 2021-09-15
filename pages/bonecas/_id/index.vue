<template>
    <div class="boneca-pagina">
        <section class="boneca">
            <div class="informacoes">
                <div class="content">
                    <h1 class="boneca-titulo">
                        Nome do Produto.
                        <em class="boneca-colecao">Coleção.</em>
                    </h1>
                <div class="detalhes">
                    <div class="peso">
                        <span>Peso: {{product.weight}}</span>
                    </div>
                    <div class="preco">
                        <span>Preço: </span>
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
                <div class="filler">
                    
                </div>
            </div>
            <div class="fotos">
                <ul class="album">
                    <li class="album-item">
                        <picture class="album-item--foto">
                            <!-- <source srcset="https://source.unsplash.com/random/700x400"> -->
                            <img src="https://source.unsplash.com/random/400x700" alt="">
                        </picture>
                    </li>
                    <li class="album-item">
                        <picture class="album-item--foto">
                            <!-- <source srcset="https://source.unsplash.com/random/700x400"> -->
                            <img src="https://source.unsplash.com/random/400x700" alt="">
                        </picture>
                    </li>
                    <li class="album-item">
                        <picture class="album-item--foto">
                            <!-- <source srcset="https://source.unsplash.com/random/700x400"> -->
                            <img src="https://source.unsplash.com/random/400x700" alt="">
                        </picture>
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

.boneca-pagina{
    display: flex;
    flex-direction: column;
    /* height: 100vh; */
    height: -webkit-fill-available;
}

.boneca{
    display: flex;
    flex-direction: row;
    flex-basis: 100%;
}

.boneca > div{
    flex-basis: 100%;
    width: 0;
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
    min-height: 100vh;
    max-width: 480px;
    position: -webkit-sticky;
    position: sticky;
    top: 0;
    left: 0;
    margin: 0 auto;
    flex-basis: 100vh;
}

.content > *{
    flex-shrink: 1;
    flex-grow: 1;
}

.boneca-titulo{
    white-space: pre-line;
    /* margin: 100px auto 40px; */
    max-width: 300px;
    font-weight: 400;
}

.peso{
    margin-bottom: 10px;
}

.preco{
    font-size: 10px;
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 14px;
}

.descricao{
    margin: 0 70px 40px;
}

.adicionar-ao-carrinho,
.adicionar-ao-carrinho > *{
    margin-bottom: 30px;
    position: static;
    text-align: center;
    display: flex;
    flex-direction: row;
    z-index: 25;
}

.outras-informacoes{
    display: flex;
    width: 100%;
    max-height: 400px;
}

.fotos{
    width: 50%;
}

.album{
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.album-item {
    list-style: none;
    width: 100%;
    min-height: 100vh;
    background: #fbe6e6;
    display: flex;
    flex-basis: 100vh;
}

.album-item--foto{
    aspect-ratio: 16/9;
    display: flex;
}

.album-item--foto img{
    width: 100%;
    object-fit: contain;
}

blockquote, body, code, dd, div, dl, dt, fieldset, form, h1, h2, h3, h4, h5, h6, input, legend, li, ol, p, pre, td, textarea, th, ul{
    margin: 0;
    padding: 0;
}

*{
    margin: 0;
    padding: 0;
    border: 0;
    box-sizing: border-box;
}

@media screen and (min-width: 1024px){
    .boneca-titulo{
        font-size: 30px;
        line-height: 42px;
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
            }
        }
    },
    props: {
        price: {
            default: 0,
            type: Number
        },
        weight: {
            default: '0 kg',
            type: String
        },
        description: {
            default: "Excepturi facere voluptatem itaque placeat. Ducimus adipisci rerum et et esse nostrum dolorem cum. A quisquam voluptatem est fugit ullam ut rerum.",
            type: String
        }
    }
}
</script>