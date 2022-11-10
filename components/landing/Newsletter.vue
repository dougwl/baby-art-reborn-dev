<template>
    <section class="newsletter-signup">
        <div class="newsletter-title">
            <div class="curved-text" aria-label="Oi, não vá embora ainda!">
                <svg xmlns="http://www.w3.org/2000/svg" xml:space="preserve" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 263 20" >
                    <path id="text-curve" fill="none" d="M0 131.12C0 58.75 58.75 0 131.12 0s131.12 58.75 131.12 131.12"/>
                    <text id="text-on-curve">
                        <textpath xlink:href="#text-curve" startOffset="50%" text-anchor="middle">Oi, não vá embora ainda!</textpath>
                    </text>
                </svg>
            </div>
            <div class="stork">
                <component :is="stork" />
            </div>
        </div>
        <div class="newsletter-signup__content">
            <div class="storks">
                <div class="left">
                    <component :is="stork" />
                </div>
            </div>
            <div class="inner-text">
                <p>Se inscreva ao newsletter e receba em primeira mão, informações sobre produtos, atualizações e lançamentos!</p>
            </div>
            <div class="storks">
                <div class="right">
                    <component :is="stork" />
                </div>
            </div>
        </div>
        <form class="newsletter-signup__form" data-netlify="true" method="post" target="_blank" novalidate onsubmit="return false">
            <label for="newsletter-signup-email" class="visually-hidden">Informe seu email.</label>
            <input type="email" name="email" id="newsletter-signup-email" placeholder="Informe o seu email:" required>
            <button type="submit" class="newsletter-signup__button">
                <span class="visually-hidden">Enviar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
            </button>
            <hr class="form_thematic_break">
        </form>
        <div class="form-message">
            <span></span>
        </div>
    </section>
</template>

<style scoped>


.newsletter-signup,
.newsletter-signup__form,
.newsletter-signup__content,
.inner-text,
.newsletter-title,
.curved-text{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.newsletter-signup{
    padding: 100px 0px;
    flex-direction: column;
}

.newsletter-signup__form{
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 400px;
    width: 80%;
}


.newsletter-title{
    height: auto;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
    align-content: center;
}

.newsletter-signup__form input{
    color: var(--main-color);
    line-height: 20px;
    flex-grow: 1;
    outline: none;
    font-family: 'Prociono';
    font-size: 16px;
}

.newsletter-signup__form input::placeholder{
    color: var(--main-color);
    transition: opacity 0.15s ease-in;
}

.newsletter-signup__form input:focus-within::placeholder{
    opacity: 0.25;
}

.newsletter-signup__form .form_thematic_break{
    border-top: 1px var(--main-color) solid;
    height: 0px;
    width: 100%;
}

.newsletter-signup__button,
.newsletter-signup__button svg{
    background: none;
}

.newsletter-signup__button{
    height: 30px;
    width: 30px;
    padding: 5px;
    cursor: pointer;
}

.newsletter-signup__button svg{
    height: 20px;
    width: 20px;
}

.newsletter-signup__button svg > * {
    stroke: var(--main-color);
}


.inner-text{
    margin: 50px 0px;
    max-width: 300px;
}

#text-on-curve{
    /* stroke: var(--main-color); */
    fill: var(--main-color);
    font-size: 20px;
}

.curved-text{
    grid-row: 1/1;
}

.stork{
    grid-row: 2/2;
    width: 100%;
    height: 80px;
}

.stork svg{
    max-width: 80px;
}

.curved-text svg{
    height: 80px;
    width: 250px;
}

.storks{
    display: none;
}


@media (min-width: 1024px){
    .newsletter-title{
        grid-template-rows: 1fr;
    }

    .stork{
        display: none;
    }

    .storks{
        display: flex;
        justify-content: center;
    }

    .newsletter-signup__content{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        margin-top: 30px;
    }

    .storks :where(.left, .right){
        height: 100px;
        width: 100px;
    }

    .storks .right{
        transform: scaleX(-1);
    }

    .newsletter-signup__form{
        width: 100%;
    }
}


</style>

<script>
export default {
    data() {
        return{
            stork: require('~/assets/svg/newsletter/stork.svg?inline')
        }
    }
}
</script>