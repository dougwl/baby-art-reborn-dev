import Vue from 'vue'

var $shopify = {};
var $storage = {};

async function defaultRequest({request, callback = undefined, msgError = undefined, msgSuccess = undefined}){
  let data = {};
  try {
    data = await request;
  }
  catch (error) {
    if(msgError !== undefined) console.error(msgError);
    return Promise.reject(error);
  }
  if(msgSuccess !== undefined) console.log(msgSuccess);
  if(callback !== undefined) callback(data);
  return data;
}

const fetchAllProducts = () => defaultRequest({
  request: $shopify.product.fetchAll(), 
  msgError: '$shopify - No products found'
});

const fetchAllColections = () => defaultRequest({
  request: $shopify.collection.fetchAll(),
  msgError: '$shopify - No collections found'
});

const fetchProductBy = (msgError) => {
  let errorMsg = msgError || '$shopify - No product found';
  return {
    ID: (id) => defaultRequest({
      request: $shopify.product.fetch(id),
      msgError: errorMsg
    }),
    handle: (handle) => defaultRequest({
      request: $shopify.product.fetchByHandle(handle),
      msgError: errorMsg
    })
  }
};

const retrieveAllProducts = (callback = undefined) => {
  return defaultRequest({
    request: $storage.remember('products', fetchAllProducts),
    callback: callback,
    msgError: '$storage - No products found'
  })
};

const retrieveAllCollections = (callback = undefined) => {
  return defaultRequest({
    request: $storage.remember('collections', fetchAllColections),
    callback: callback,
    msgError: '$storage - No collections found'
  });
};

const retrieveProductBy = (msgError) => {
  let errorMsg = msgError || '$storage - No product found';
  return {  // ID or handle
    ID: (id, callback = undefined) => defaultRequest({
      request: $storage.remember(`product-${id}`, () => fetchProductBy().ID(id)),
    }),
    handle: (handle, callback = undefined) => defaultRequest({
      request: $storage.remember(`product-${handle}`, () => fetchProductBy().handle(handle)),
    })
  }
}


export const inventory = (shopify, storage) => {
  $shopify = shopify;
  $storage = storage;
  return{
    retrieve: {
      products: retrieveAllProducts,
      collections: retrieveAllCollections,
      product: retrieveProductBy
    },
    setStorage(id, {key}){
      $storage.set(id, key);
    },
  }
}


export default ({ app, $shopify}, inject) => {
  inject('inventory', inventory($shopify, Vue.$storage));
}

