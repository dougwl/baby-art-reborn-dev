<template>
    <section class="newsletter-signup">
        <div class="newsletter-title">
            <div class="curved-text" aria-label="Oi, não vá embora ainda!">
                <!-- <component :is="curvedText" /> -->
                <div class="newsletter-curved-text" v-html="require('~/assets/svg/newsletter/text.svg?raw')"></div>
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
        <form name="formulario-newsletter" class="newsletter-signup__form" data-netlify="true" netlify-honeypot="form-name" method="post" @submit="handleSubmit" novalidate> 

            <input type="hidden" name="form-name" value="formulario-newsletter">
            <label for="form-name" class="hidden_label visually-hidden">Hidden</label>

            <label for="newsletter-signup-email" class="visually-hidden">Olá, gostaria de me inscrever ao seu newsletter</label>
            <input type="email" name="email" id="newsletter-signup-email" placeholder="Informe o seu email:" required>

            <button type="submit" class="newsletter-signup__button">
                <span class="visually-hidden">Enviar</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" fill="#000000" viewBox="0 0 256 256"><line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></line><polyline points="144 56 216 128 144 200" fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline></svg>
            </button>

            <hr class="form_thematic_break">
        </form>

        <div :class="{'form-message': true, 'success': submitStatus.success, 'error': submitStatus.error}">
            <span class="success-message">Obrigado por se inscrever, logo entraremos em contato!</span>
            <span class="error-message">Ops! Houve um problema, tente novamente mais tarde.</span>
        </div>
    </section>
</template>

<style>

 .newsletter-curved-text{
    height: 100px;
    width: 200px;
 }

 .newsletter-curved-text svg{
    height: 100px;
    width: 200px;
    font-size: 25px;
    fill: var(--main-color)
 }

</style>

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
    border: none;
}

.newsletter-signup__form input::placeholder{
    color: var(--main-color);
    transition: opacity 0.15s ease-in;
}

.newsletter-signup__form input:focus-within::placeholder{
    opacity: 0.25;
}

.newsletter-signup__form .form_thematic_break{
    border: none;
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
    border: none;
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

:where(.stork, .storks) :where(path:nth-child(2), path:nth-child(3)){
    fill: var(--main-color);
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

.form-message{
    display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    padding-top: 25px;
}

.form-message .success-message,
.form-message .error-message{
    visibility: hidden;
    grid-column: 1/1;
    grid-row: 1/1;
    color: var(--main-color);
    font-family: 'Prociono';
    font-size: 14px;
}

.form-message.error .error-message,
.form-message.success .success-message{
    visibility: visible;
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
            stork: require('~/assets/svg/newsletter/stork.svg?inline'),
            curvedText: require('~/assets/svg/newsletter/text.svg?inline'),
            submitStatus: {
                success: false,
                fail: false
            }
        }
    },
    methods: {
        /**
         * @param {SubmitEvent} event
         */
        async handleSubmit (event) {
            event.preventDefault();

            /** @type {HTMLFormElement} */
            const newsletterForm = event.target;
            const formData = new FormData(newsletterForm);

            let response;

            try {

                response = await fetch("/", {
                    method: "POST",
                    headers: { "Content-Type": "application/x-www-form-urlencoded" },
                    body: new URLSearchParams(formData).toString(),
                })

                this.succeeded();

            } catch (error) {

                 console.log(error);
                 this.failed();
            }
        },
        succeeded(){
            this.submitStatus.success = true;
            this.submitStatus.fail = false;
        },
        failed(){
            this.submitStatus.success = false;
            this.submitStatus.fail = true;
        }
    }
}
</script>