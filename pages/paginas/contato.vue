<template>
    <div class="contact">
        <ul class="contact-info">
            <li class="info">
                <h2 class="title">Dúvidas Gerais</h2>
                <a class="link" href="mailto:ledir@babyartreborn.com.br" target="_blank" rel="noopener noreferrer">ledir@babyartreborn.com.br</a>
            </li>
            <li class="info">
                <h2 class="title">WhatsApp e Telefone</h2>
                <a class="link whatsapp"  href="" @click="onLinkClicked" target="_blank" rel="noopener noreferrer">Clique aqui</a>
                <span class="info">(De segunda a sexta, das 9h-18h.)</span>
            </li>
            <li class="info">
                <h2 class="title">Redes Sociais</h2>
                <ul class="social-links">
                    <li class="social-link">
                        <a class="link" href="https://www.instagram.com/babyartreborn" target="_blank" rel="noopener noreferrer">Instagram</a>
                    </li>
                    <li class="social-link">
                        <a class="link" href="https://www.facebook.com/babyartreborn/" target="_blank" rel="noopener noreferrer">Facebook</a>
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<style scoped>

    .contact-info,
    .info{
        display: flex;
        flex-direction: column;
    }

    .info{
        justify-content: center;
        align-items: center;
    }

    .title{
        margin-top: 35px;
        font-weight: 500;
    }

    .link{
        margin-top: 15px;
        width: max-content;
        text-decoration: underline;
    }

    .social-link{
        margin-top: 20px;
    }

    .whatsapp{
        text-decoration: underline;
        font-size: 20px;
    }

    .whatsapp + span{
        margin-top: 10px;
        font-size: 15px;
    }
</style>

<script>
export default {
    methods: {
        onLinkClicked(ev){
            let URL = "https://api.whatsapp.com/send/?phone="
            let number = '554788227334';
            let otherSettings = "&type=phone_number&app_absent=0&lang=pt_br";
            let fullURL = URL + number + otherSettings;

            ev.preventDefault();
            window.open(fullURL, '_blank');
        }
    },
    mounted(){
        console.log('emited');
        this.$emit('change-title', 'Contato');
    }
}
</script>