<template>
    <footer class="footer"> 
      <div class="footer__content">
        <div class="footer__logo">
          <client-only>
            <div v-html="require('~/assets/svg/home/logo.svg?raw')"></div>
          </client-only>
        </div>
        <div class="footer__nav">
          <div class="footer__nav-item">
            <a href="/">Home</a>
          </div>
          <div class="footer__nav-item">
            <a href="/">Sobre</a>
          </div>
          <div class="footer__nav-item">
            <a href="/">Contato</a>
          </div>
        </div>
        <div class="footer__aside"> 
          <div class="footer__social">
            <div class="footer__social-item">
              <!-- <a href="https://www.facebook.com/babyartreborn/" target="_blank">
                <div v-html="require('~/assets/svg/facebook.svg?raw')"></div>
              </a> -->
            </div>
            <div class="footer__social-item">
              <!-- <a href="https://www.instagram.com/babyartreborn/" target="_blank">
                <div v-html="require('~/assets/svg/instagram.svg?raw')"></div>
              </a> -->
            </div>
            <div class="footer__social-item">
              <!-- <a href="https://www.pinterest.com/babyartreborn/" target="_blank">
                <div v-html="require('~/assets/svg/pinterest.svg?raw')"></div>
              </a> -->
            </div>
          </div>
          <div class="footer__copyright">
            <span>© Baby Art Reborn</span>
          </div>
        </div>
      </div>  
    </footer>
</template>

<style scoped>

    .footer{
        background-color: #c3d5e2;
    }

    .footer__content{
        font-size: 12px;
        line-height: 20px;
        font-family: 'Prociono', Times, 'Times New Roman', serif;
        font-weight: 400;
        padding: 40px;
        text-align: center;
    }

    
</style>