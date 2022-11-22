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
  request: $shopify.product.fetchAll(250), 
  msgError: '$shopify - No products found'
});

const productsQuery = () => { 
  return $shopify.graphQLClient.query((root) => {
    root.addConnection('products', {args: {first: 250}}, (product) => {
      product.add("id");
      product.add("availableForSale");
      product.add("createdAt");
      product.add("updatedAt");
      product.add("descriptionHtml");
      product.add("description");
      product.add("handle");
      product.add("productType");
      product.add("title");
      product.add("vendor");
      product.add("publishedAt");
      product.add("onlineStoreUrl");
      product.add("tags");
      product.add("options", function (options) {
        options.add("name");
        options.add("values");
      });
      product.addConnection("images", {
        args: {
          first: 250
        }
      }, function (images) {
        images.add("id");
        images.add("src");
        images.add("altText");
        images.add("width");
        images.add("height");
      });
      product.addConnection('variants', {args: {first: 250}}, (variants) => {
        variants.add("id");
        variants.add("title");
        variants.add("price");
        variants.add("priceV2", function (priceV2) {
          priceV2.add("amount");
          priceV2.add("currencyCode");
        });
        variants.add("weight");
        variants.add("availableForSale", {
          alias: "available"
        });
        variants.add("sku");
        variants.add("compareAtPrice");
        variants.add("compareAtPriceV2", function (compareAtPriceV2) {
          compareAtPriceV2.add("amount");
          compareAtPriceV2.add("currencyCode");
        });
        variants.add("image", function (image) {
          image.add("id");
          image.add("url");
          image.add("altText");
          image.add("width");
          image.add("height");
        });
        variants.add("selectedOptions", function (selectedOptions) {
          selectedOptions.add("name");
          selectedOptions.add("value");
        });
        variants.add("unitPrice", function (unitPrice) {
          unitPrice.add("amount");
          unitPrice.add("currencyCode");
        });
        variants.add("unitPriceMeasurement", function (unitPriceMeasurement) {
          unitPriceMeasurement.add("measuredType");
          unitPriceMeasurement.add("quantityUnit");
          unitPriceMeasurement.add("quantityValue");
          unitPriceMeasurement.add("referenceUnit");
          unitPriceMeasurement.add("referenceValue");
        });
      });
    });
  });
};


const fetchAllProductsCustom = () => defaultRequest({
  request: $shopify.graphQLClient.send(productsQuery).then(({model, data}) => {
    return model;
  }).then((val) => {
    return val.products;
  }),
  msgError: '$shopify - No Products found.'
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
    }),
    handleCustom: (handle) => defaultRequest({
      request: $storage.remember('products', fetchAllProductsCustom).then((products) => {
        let result = undefined;
        products.forEach(product => {
          if(product.handle == handle){
            result = product;
          }
        });
        return result;
      }),
      msgError: errorMsg
    }), 
  }
};

const retrieveAllProducts = (callback = undefined) => {
  return defaultRequest({
    request: $storage.remember('products', fetchAllProducts),
    callback: callback,
    msgError: '$storage - No products found'
  })
};

const retrieveAllProductsCustom = (callback = undefined) => {
  return defaultRequest({
    request: $storage.remember('products', fetchAllProductsCustom),
    callback: callback,
    msgError: '$storage - No Products found'
  });
}

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
    }),
    handleCustom: (handle, callback = undefined) => defaultRequest({
      request: $storage.remember(`product-${handle}`, () => fetchProductBy().handleCustom(handle)),
    })
  }
}


export const inventory = (shopify, storage) => {
  $shopify = shopify;
  $storage = storage;
  return{
    retrieve: {
      products: retrieveAllProducts,
      productsCustom: retrieveAllProductsCustom,
      collections: retrieveAllCollections,
      product: retrieveProductBy,
    },
    setStorage(id, {key}){
      $storage.set(id, key);
    },
  }
}


export default ({ app, $shopify}, inject) => {
  inject('inventory', inventory($shopify, Vue.$storage));
}

