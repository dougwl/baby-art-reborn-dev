<template>
  <body>
    <header> 
      <a class="header__logo" href="/">
        <span>Baby Art Reborn</span>
        <div v-html="require('~/assets/svg/logo.svg?raw')"></div>
      </a>
    </header>
    <nav>
      <div class="main-nav"></div>
      <button class="nav-toggle"></button>
    </nav>
    <button class="main-nav__mobile-toggle"></button>
    <div class="cart-drawer-container">
      <div class="cart-drawer"></div>
    </div>
    <button class="cart-drawer__mobile-toggle">
      <span>Toggle Cart</span>
    </button>
    <main id="main" class="content">
      <div class="home">
        <section class="landing-content"></section>
        <section class="procut-tiles"></section>
        <section class="featured-categories"></section>
        <section class="about--confeccao"></section>
        <section class="hero-phrase"></section>
        <section class="about--minha-historia"></section>
        <section class="newsletter-signup"></section>
      </div>
    </main>
    <footer> </footer>
  </body>
</template>

<script>
export default {

  data(_this) {
    return {
      products: {
        get: function(){
          return this._products != undefined ? this._products : [];
        },
        set: function({value, setStorage}){
          this._products = value;
          if(setStorage) _this.setStorage('products', {key: this._products});
        }
      },
      collections: {
        get: function(){
          return this._collections != undefined ? this._collections : [];
        },
        set: function({value, setStorage}){
          this._collections = value;
          if(setStorage) _this.setStorage('collections', {key: this._collections});
        }
      }
    }
  },
  methods: {
    fetchResourcesOf: async function({product = false, collection = false}){
      let args = arguments[0];
      let data = {product: 'products', collection: 'collections'};
      if(args.constructor !== Object || Object.entries(args).length === 0) return console.error('The argument is invalid.');
      for (const resource in args) {
        if (Object.hasOwnProperty.call(args, resource)) {
          if(args[resource]){
            if(this.$storage.has(data[resource])){
              console.log('In storage');
              let param = {};
              param.value = this.$storage.get(data[resource]);
              param.setStorage = false;
              this.products.set(param);
            }
            else {
              console.log('fetching');
              let param = {};
              param.value = await this.$shopify[resource].fetchAll();
              param.setStorage = true;
              this.products.set(param);
            }
          }
        }
      }
    },
    setStorage(id, {key}){
      this.$storage.set(id, key);
    },	
  },
  computed: {
    getProducts: {
      get: function(){
        return this.products;
      },
    }
  },
  async fetch(){
    await this.fetchResourcesOf({product: true});
  },
/*   mounted(){
    this.fetchResources({product: true});
  } */

  

}
</script>
