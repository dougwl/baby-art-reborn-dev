<template>
    <div class="boneca-pagina">
        <section class="boneca">
            <div class="informacoes">
                <h1 class="boneca-titulo">
                    Nome do Produto.
                    <em class="boneca-colecao">Coleção.</em>
                </h1>
                
                <div class="detalhes">
                    <div class="peso">
                        <span>Peso</span>
                    </div>
                    <div class="preco">
                        <span>Preço: </span>
                        <span class="valor">R$0</span>
                    </div>
                    <p class="descricao">
                        <span>
                            Excepturi facere voluptatem itaque placeat. Ducimus adipisci rerum et et esse nostrum dolorem cum. A quisquam voluptatem est fugit ullam ut rerum.
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
    height: 100vh;
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
    display: flex;
    align-items: center;
    flex-direction: column;
    min-height: 100vh;
    position: sticky;
    top: 0;
    font-size: 12px;
    text-align: center;
}

.boneca-titulo{
    white-space: pre-line;
    margin: 130px auto 40px;
    max-width: 300px;
    font-weight: 400px;
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

.album{
    padding: 0;
    margin: 0;
    height: 100vh;
    /* height: fit-content;
    height: -moz-max-content; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
}

.album-item {
    list-style: none;
    aspect-ratio: 9 / 16;
    width: 100%;
    background: lightgrey;
    display: flex;
    justify-content: center;
}

.album-item--foto{
    height: 100%;
    width: 100%;
    object-fit: contain;
}

@media screen and (min-width: 1024px){
    .boneca-titulo{
        font-size: 30px;
        line-height: 42px;
    }
}

</style>