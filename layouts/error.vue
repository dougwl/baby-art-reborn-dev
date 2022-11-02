<template>
    <div class="container">
        <main class="error_message">
            <img :src="require('~/assets/svg/404_message.svg')" width="200" height="200" alt="404 - Esta página não existe.">
        </main>
    </div>
</template>

<style scoped>
.container{
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
}

.error_message{
    min-width: 200px;
    min-height: 200px;
    display: flex;
}

</style>

<script>
export default {
    propr: ['error'],
    layout: 'default',
    async fetch() {
        let defaultRoute = '/'
        let timeOut = new Promise((resolve, reject) => {
            setTimeout(() => resolve(defaultRoute), 2000)
        });

        await this.$nextTick();
    
        this.$router.push(await timeOut);
        
    }
}
</script>