<template>
    <div class="history">
        <div class="intro">
            <div class="presentation">
                <p>Seja bem vindo a <br> Baby Art Rebon!</p>
                <p>Durante todos estes anos, cada bebê terminado, vi como um novo bebezinho nascendo. <br> E neste momento gostaria de compartilhar com você um pedaço desta jornada.</p>
                <div class="art">
                    <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><line x1="128" y1="40" x2="128" y2="216" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="56 144 128 216 200 144" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
                </div>
            </div>
            <div class="intro-photo">
                <nuxt-img src="/pages/history/myself.png" height="648" width="288" loading="lazy" title="Prazer, meu nome é Ledir."/>
            </div>
        </div>
        <div class="content">

            <p>Olá,</p>

            <p>Meu nome é Ledir, moro em Joinville-SC e fico muito feliz em poder estar com você neste momento e mostrar um pouquinho do meu trabalho, a arte reborn, a arte de transformar simples bonecas, em bebês quase reais.</p>

            <p>Sou terapeuta ocupacional, que,  mesmo amando o que faço, sempre fui apaixonada por bonecas importadas de  porcelana. <br><br> Então a 25 anos, iniciei minha própria coleção, tendo hoje aproximadamente 120 destas mesmas, nos mais diversos tamanhos e modelos, sendo algumas vindas da Itália, Estados Unidos, Canadá, Paris entre outros. Entretanto, meu grande sonho era poder confeccionar essas maravilhosas bonecas.</p>

            <p>No ano de 2008 conheci os bebês reborn e me apaixonei, mesmo estes não sendo de porcelana. A perfeição, naturalidade e a delicadeza unica dessa arte, me encantaram. <br><br> Partindo desta paixão, fiz vários  cursos com ótimas artistas brasileiras e americanas, sendo que a 14 anos confecciono esses lindos bebezinhos. Buscando sempre me aperfeiçoar  através de cursos avançados, muito amor e dedicação. </p>

            <p>Também participei do IDEX premier em Orlando, nos Estados Unidos, onde tive a oportunidade de fazer cursos de aperfeiçoamento e também a honra de estar em contato com grandes artistas internacionais como: <br><br> Hildegard Gunzel-Wohlfarth, Julie Molloy, Laurie Sánchez, Gaby Jaques, Zofia e Henry Zawieruszynski,  Jaquelyn Ledros e Heidi Plusczok.</p>

            <p>É um prazer te conhecer!</p>
        </div>
        
    </div>

</template>

<style scoped>
.history{
    display: flex;
    text-align: left;
    flex-direction: column;
    width: 100%;
}

.content{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 50px;
}

.content p{
    margin-top: 30px;
    font-size: 18px;
    line-height: 25px;
}

.intro{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: minmax(500px, 800px) 1fr;
    width: 100%;
    /* min-height: calc(100vh - min(75px, 5vw));; */
    /* border-bottom: solid 1px var(--main-color); */
}

.presentation{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    text-align: left;
    align-items: center;
    position: relative;
    padding: 50px;
    /* margin-bottom: -30%; */
}

.presentation p{
    margin-top: 120px;
    max-width: min(70vw, 400px);
    font-size: 13px;
    font-style: italic;
}

.presentation p:nth-child(1){
    font-size: 25px;
    text-align: center;
    position: relative;
    display: flex;
    justify-content: center;
    font-style: normal;
}

.art{
    position: absolute;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
}

.art svg, .art svg * {
    position: relative;
    top: 80%;
    height: 50px;
    width: 50px;
    stroke-width: 5px !important;
    stroke: var(--main-color);
}

.intro-photo{
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--desktop-background-color);
    padding: 50px;
    height: 100%;
    width: 100%;
    max-height: 100vh;
}

.intro-photo img{
    height: auto;
    width: 100%;
    aspect-ratio: 4/9;
    outline: solid 10px white;
    max-height: calc(80vw + 50px);
    object-fit: cover;
}


@media (max-width: 1024px){
    .presentation p:nth-child(1)::before {
        width: 15%;
        height: 0px;
        border-top: solid 8px var(--main-color);
        position: absolute;
        top: 0;
        content: '';
        margin-top: -110px;
        display: flex;
        border-top-style: dotted;
    }
}

@media (min-width: 1024px){
    
    .intro{
        display: grid;
        grid-template-columns: 50% 50%;
        grid-template-rows: 1fr;
        width: 100%;
        min-height: calc(100vh - min(75px, 5vw));;
        border-bottom: solid 1px var(--main-color);
    }

    .content{
        padding: 150px;
    }

    .content p:nth-child(1){
        font-size: 27px;
        font-weight: 600;
    }

    .presentation{
        padding: 0px;
        margin-bottom: 0px;
    }

    .presentation::after{
        content: '';
        height: 90%;
        margin-top: 10%;
        width: 0px;
        border-right: solid 1px var(--main-color);
        position: absolute;
        top: 0;
        right: 0;
    }

    .intro-photo img{
        max-height: 100%;
    }

    .presentation p:nth-child(1){
        margin-top: 0px;
    }

    .art svg{
        top: 75%;
    }
}
</style>