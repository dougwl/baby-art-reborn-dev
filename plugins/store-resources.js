/* const argIsValid = (args) => {
    if(args.constructor !== Object || Object.entries(args).length === 0) return false;
    else return true;
}


export const resources = ($storage) => {
    return {
        fetchResourcesOf: async function({product = false, collection = false}){
            let args = arguments[0];
            if(!argIsValid(args)) return console.error('Invalid arguments');
            let data = {product: 'products', collection: 'collections'};
            for (const resource in args) {
              if (Object.hasOwnProperty.call(args, resource)) {
                if(args[resource]){
                  if($storage.has(data[resource])){
                    console.log('In storage');
                    let param = {};
                    param.value = $storage.get(data[resource]);
                    param.setStorage = false;
                    return param;
                  }
                  else {
                    console.log('fetching');
                    let param = {};
                    param.value = await this.$shopify[resource].fetchAll();
                    param.setStorage = true;
                    return param;
                  }
                }
              }
            }
          },
          setStorage(id, {key}){
            this.$storage.set(id, key);
          },
    }
    	
}

export default ({$storage}, inject) => {
    inject('shop', msg => console.log(`Hello ${msg}!`))
}
 */