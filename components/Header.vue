<template>
    <header class="header">
      <span class="top_observer"></span>  
      <a class="logo-top" href="/">
        <span class="visually-hidden">Baby Art Reborn</span>
      </a>
      <div class="home-link">
        <NuxtLink to="/" tabindex="-1">
          <client-only>
            <div class="logo" v-html="require('~/assets/svg/home/logo.svg?raw')"></div>
          </client-only>
        </NuxtLink>
      </div>
      <span class="bottom_observer"></span>
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
    z-index: 100;
  }

  .header::before{
    content: '';
    background-color: var(--desktop-background-color);
    border-bottom: solid 1px var(--main-color);
    opacity: 0;
    display: flex;
    height: 50px;
    pointer-events: none;
    position: absolute;
    width: 100%;
    z-index: -1;
    top: -1px;
    transition: opacity 0.35s ease-in-out;
  }

  .header.fixed::before{
    opacity: 1;
    position: fixed;
    /* top: 0;
    left: 0; */
    z-index: 103;
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
    width: 180px;
    margin-top: -15px;
    padding-bottom: max(min((100vh - 690px) * -1, 1px) * 50 , 0px); /* If screen height < 690, padding = 50px */
    /* padding-bottom: clamp(0px, (100vh - 690px) * -50 , 50px); */
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
    z-index: 102;
  }

  .top_observer,
  .bottom_observer{
    height: 1px;
    width: 1px;
    position: absolute;
  }

  .top_observer{
    top: 0;
  }

  .bottom_observer{
    top: 101vh;
  }

  @media screen and (min-width: 768px){
    .logo :where(svg){
      transform: translateY(20px);
    }

  }

  @media screen and (min-width: 1024px){
    /* .header:not(.visible){
      display: none;
      margin-bottom: -50px;
      margin-top: 50px;
    } */

    .home-link{
      margin-top: 50px; 
      /* padding-top: 16px; */
    } 

    .header.fixed .home-link{
      padding-top: 0;
    }

    .header::before{
      box-sizing: border-box;
      background-color: #F9F7F2;
      border-bottom: 1px #d3838e solid;
      content: "";
      display: block;
      height: min(75px, 5vw - 1px);
      /* opacity: 0; */
      pointer-events: none;
      position: fixed;
      /* transition: opacity 0.3s ease-in-out;
      transition-delay: 0s; */
      width: calc(100% - (min(150px, 10%) - 2px));
      z-index: 101;
      top: -1px;
      left: calc(min(75px, 5%) - 1px);
      opacity: unset;
    }

    .header.fixed::before{
      z-index: inherit;
    }

    .logo-top{
      height: 75px;
      width: 148px;
      display: none;
    }

    .header .logo{
      position: fixed;
    }

    .header .logo::before {
      content: '';
      height: min(75px, 5vw - 1px);
      width: 250px;
      position: fixed;
      top: -1px;
      left: calc((100% / 2) - 125px);
      background: #f9f7f2;
      z-index: -1;
      transition: width 0.2s ease-in;
    }

    .header.fixed .logo::before{
      width: 150px;
      left: calc((100%/2) - 75px);
    }

    .header .logo :where(svg){
      height: 129px;
      width: 250px;
      transform: translateY(-25px);
      transition: width, transform, 0.1s ease-in;
    }

    .header.fixed .logo :where(svg){
      width: 150px;
      transform: translateY(-40px);
    }

    


    /* .header .logo[data-v-1a9bb128]::before {
      content: '';
      height: min(75px, 5vw - 1px);
      width: 250px;
      position: absolute;
      top: -50px;
      background: #f9f7f2;
      z-index: -1;
    } */

    /* header.header::after {
      content: '';
      width: 200px;
      height: 200px;
      background: #d3838e;
      border-radius: 50%;
      position: absolute;
      right: calc((100% / 2) - 100px);
      opacity: 55%;
      top: -86px;
      filter: blur(30px);
    } */
  }
</style>

<script>
export default {
  data(){
    return{
      lastPosition: undefined,
      fixed: false
    }
  },
  beforeUpdate(){

    /** @type {HTMLElement} */
    const header = document.querySelector('.header');

    /** @type {HTMLSpanElement} */
    const target_top = document.querySelector('.top_observer');
    /** @type {HTMLSpanElement} */
    const target_bottom = document.querySelector('.bottom_observer');

    /** @type {HTMLElement} */
    const view = document.documentElement;
    
    /** @type {Object} */
    const io_options = {
      root: null,
      rootMargin: '0px',
      threshold: [0.01]
    };

    /** @type {IntersectionObserver} */
    const io_observer = new IntersectionObserver(io_callback, io_options);

    io_observer.observe(target_top);
    io_observer.observe(target_bottom);

    /** @param {IntersectionObserverEntry[]} entries
     *  @param {IntersectionObserver} observer
    */
    function io_callback (entries, observer) {
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if (view.scrollTop <= 1 && this.fixed){
                header.classList.toggle('fixed', false);
                this.fixed = false;
              }
              else if (view.scrollTop > 1 && !this.fixed){
                header.classList.toggle('fixed', true);
                this.fixed = true;
              }
          }
      });
    }
  }
}
</script>