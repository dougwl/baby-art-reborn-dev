<template>
    <footer class="footer"> 
      <div class="content">
        <!-- <div class="footer__logo">
          <client-only>
            <div v-html="require('~/assets/svg/home/logo.svg?raw')"></div>
          </client-only>
        </div> -->
        <div class="nav">
          <ul class="nav-links --desktop">
            <li class="nav-link">
              <a href="/">
                Sobre Mim
              </a>
            </li>
            <li class="nav-link">
              <a href="/">
                História
              </a>
            </li>
            <li class="nav-link">
              <a href="/">
                Contato
              </a>
            </li>
          </ul>
          <ul class="extra-links --desktop">
            <li class="extra-link">
              <a href="/">
                Política de Devolução
              </a>
            </li>
            <li class="extra-link">
              <a href="/">
                FAQ
              </a>
            </li>
            <li class="extra-link">
              <a href="/">
                Termos e Condições
              </a>
            </li>
            <li class="extra-link">
              <a href="/">
                Política de Privacidade
              </a>
            </li>
          </ul>
          <ul class="social-links"> 
            <li class="social-link">
              <!-- <a href="https://www.facebook.com/babyartreborn/" target="_blank">
                  <div v-html="require('~/assets/svg/facebook.svg?raw')"></div>
                </a> -->
            </li>
            <li class="social-link">
              <!-- <a href="https://www.instagram.com/babyartreborn/" target="_blank">
                  <div v-html="require('~/assets/svg/instagram.svg?raw')"></div>
                </a> -->
            </li>
            <li class="social-link">
              <!-- <a href="https://www.pinterest.com/babyartreborn/" target="_blank">
                  <div v-html="require('~/assets/svg/pinterest.svg?raw')"></div>
                </a> -->
            </li>
          </ul>
        </div>
        <div class="footer__aside"> 
          <div class="footer__copyright">
            <span>© Baby Art Reborn</span>
          </div>
        </div>
      </div>  
    </footer>
</template>

<style scoped>

    li{
      list-style: none;
    }

    .footer{
        background-color: #c3d5e2;
    }

    .content{
        font-size: 12px;
        line-height: 20px;
        font-family: 'Prociono', Times, 'Times New Roman', serif;
        font-weight: 400;
        padding: 40px;
        text-align: center;
    }

    :where(.nav-links, .extra-links){
        display: none;
    }

    .--desktop{
        display: initial;
    }

    @media screen and (min-width: 1024px){
        .content{
          display: flex;
          margin: 0 75px;
          padding: 60px 100px;
          text-align: left;
        }

        .nav{
          display: flex;
          flex: 1;
          flex-direction: row;
          flex-wrap: wrap;
        }
    }
      
    

    
</style>