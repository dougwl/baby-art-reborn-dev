<template>
    <header class="header">  
      <a class="logo-top" href="/">
        <span class="visually-hidden">Baby Art Reborn</span>
      </a>
      <div class="home-link">
        <a href="/" tabindex="-1">
          <client-only>
            <div class="logo" v-html="require('~/assets/svg/home/logo.svg?raw')"></div>
          </client-only>
        </a>
      </div>
    </header>
</template>

<style scoped>
  
  .header{
    box-sizing: border-box;
    height: 0;
    left: 0;
    margin-top: 1px;
    overflow: visible;
    position: absolute;
    right: 0;
    text-align: center;
    top: 0;
    z-index: 80;
  }

  .header::before{
    background-color: #bbbab8;
    border-bottom: 1px var(--main-color) solid;
    content: "";
    display: block;
    height: 50px;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    transition: opacity 0.3s ease-in-out;
    transition-delay: 0s;
    width: 100%;
    z-index: -1;
    top: 0;
    left: 0;
  }

  .logo-top{
    box-sizing: border-box;
    display: block;
    height: 50px;
    margin: 0 auto;
    overflow: hidden;
    width: 111px;
  }

  .logo :where(svg){
    fill: var(--main-color);  /* #f8f5e9 */
    height: 97px;
    /* width: 111px; */
    width: 260px;
    transform: translateY(50px);
  }

  .home-link,
  .home-link :where(a, .logo){
    height: 0;
    left: 0;
    margin: 0 auto;
    overflow: visible;
    position: absolute;
    right: 0;
    text-align: center;
    z-index: 79;
  }

  @media screen and (min-width: 768px){
    .logo :where(svg){
      transform: translateY(20px);
    }

  }

  @media screen and (min-width: 1024px){
    .header{
      margin-bottom: -50px;
      /* margin-top: 50px; */
    }

    .header::before{
      background-color: #fff;
      height: 75px;
      padding-left: 75px;
      padding-right: 75px;
      box-sizing: border-box;
    }

    .logo-top{
      height: 75px;
      width: 148px;
    }

    logo :where(svg){
      height: 129px;
      width: 148px;
    }

    .home-link{
      margin-top: 50px; 
      padding-top: 16px;
    } 
  
  }
</style>