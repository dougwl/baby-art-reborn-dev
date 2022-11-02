<template>
  <div class="page__wrapper">
    <main id="main" class="page__content">
      <div class="home">
        <LandingHeroContent />
        <LandingFeatured />
        <LandingCollections />
        <!-- <section class="featured-categories"></section> -->
        <section class="about--confeccao"></section>
        <section class="hero-phrase"></section>
        <section class="about--minha-historia"></section>
        <section class="newsletter-signup"></section>
      </div>
    </main>
  </div>
</template>

<style scoped>
  
  @media screen and (min-width: 1024px) {
    .home{
      position: relative;
      top: -1px;
    }
  }

</style>

<script>
export default {
  data(){
    return {
        productList: {},
    }
  },
  props: {
    fetchedProducts: {
      default: () => { return {} },
      type: Object,
    },
  },
  async fetch(){
    let request;
    await this.$nextTick();
    if(Object.entries(this.$props.fetchedProducts).length == 0){
      request = this.$inventory.retrieve.productsCustom();
      this.productList = await request;
    }
    else{
        this.productList = this.fetchedProducts;
    }
  },
  fetchOnServer: false,
  fetchKey: 'pagina-bonecas'
}
</script>



