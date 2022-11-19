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
              <NuxtLink to="/minha-historia" class="menu__link">Sobre Mim</NuxtLink>
            </li>
            <!-- <li class="nav-link">
              <a href="/">
                História
              </a>
            </li> -->
            <li class="nav-link">
              <a href="/">
                Contato
              </a>
            </li>
          </ul>
          <!-- <ul class="extra-links --desktop">
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
          </ul> -->
          <ul class="social-links"> 
            <li class="social-link">
              <a href="https://www.instagram.com/babyartreborn/" target="_blank">
                  <!-- <div v-html="require('~/assets/svg/facebook.svg?raw')"></div> -->
                  Instagram
                </a>
            </li>
            <li class="social-link">
              <a href="https://www.facebook.com/babyartreborn/" target="_blank">
                  <!-- <div v-html="require('~/assets/svg/instagram.svg?raw')"></div> -->
                  Facebook
                </a>
            </li>
            <li class="social-link">
              <a href="https://www.pinterest.com/babyartreborn/" target="_blank">
                  <!-- <div v-html="require('~/assets/svg/pinterest.svg?raw')"></div> -->
                  Pinterest
                </a>
            </li>
          </ul>
        </div>
        <div class="aside">
          <div class="email">
            <p>
              <a href="mailto:">
                ledir@babyartreborn.com.br
              </a>
            </p>  
          </div> 
          <div class="copyright">
            <p>© Criado por<br>
            Douglas William, 2021</p>
          </div>
        </div>
      </div>  
    </footer>
</template>

<style scoped>

    ul,li{
      list-style: none;
      margin: 0px;
      padding: 0px;
      margin-block-start: 0px;
      margin-block-end: 0px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-inline-start: 0px;
    }

    a{
      line-height: 26px;
    }

    :where(.footer *){
      box-sizing: border-box;
    }

    .footer{
        background-color: var(--secondary-color);
    }

    .content{
        font-size: 12px;
        line-height: 20px;
        font-family: 'Prociono', Times, 'Times New Roman', serif;
        font-weight: 400;
        padding: 40px;
        text-align: center;
    }

    .email a{
      border-bottom: 1px solid var(--main-color);
    }

    .copyright *{
      line-height: 20px;
      margin-top: 15px;
    }

    .aside{
      margin-top: 40px;
    }

    :where(.nav-links, .extra-links){
        display: none;
    }

    .--desktop{
        display: none;
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

        .aside{
          margin-top: 0;
          text-align: right;
        }

        ul{
          display: block;
          min-width: 170px;
        }

        .--desktop{
          display: initial;
        }
    }

    @media screen and (min-width: 1280px){
      ul{
        min-width: 240px;
      }
    }
      
    

    
</style>