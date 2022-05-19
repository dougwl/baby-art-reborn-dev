import Vue from 'vue';

var $shopify = {};

export class ShopifyMediaQuery{

    condition = ''; // CSS media query eg: "(min-width: 0px)"
    width = 0; //Without "px"
    height = 0; //Without "px"
    aspectRatio = 0; // Aspect ratio in decimal eg: 9/16 = 0.5625
    src = ''; // Converted image src

    constructor({condition, width, height, aspectRatio, src}){
        this.condition = condition; 
        this.width = width; 
        this.height = height; 
        this.aspectRatio = aspectRatio; 
        this.src = src; 
    }
}


/* 
    let sources = {
        small: {
            _original: photo, 
            query: new ShopifyMediaQuery({
                condition: "(min-width: 0px)",
                width: 0,
                height: 0,
                aspectRatio: 0,
                src: ''
        }, 
        medium: , 
        large: ''};

    let test = new ShopifyMediaQuery({
        condition: "(min-width: 0px)",
        width: 0,
        height: 0,
        aspectRatio: 0,
        src: ''

*/

/* export class ShopifyQueryMap { */

   /*  query = new ShopifyMediaQuery();
    sizes = new Map([['small', this.query], ['medium', this.query], ['large', this.query], ['original', this.query]]); */
    /* platform = new Map([['desktop', this.sizes], ['mobile', this.sizes]]); */


    /* constructor({desktop: {}, mobile: {}}){
        if(desktop !== undefined) this.desktop().set()
        if(mobile !== undefined) this.sizes = sizes;
    } */

    /* desktop(){
        return this.platform.get('desktop');
    }

    mobile(){
        return this.platform.get('mobile');
    } */
/* } */


export const helpers =  (shopify) => {
    $shopify = shopify;
    return {
        getResponsiveImage: function({imageSource, mediaQuery}){
            if(Object.entries(mediaQuery).length > 0 && mediaQuery instanceof ShopifyMediaQuery){
                let query = new ShopifyMediaQuery(mediaQuery);
                query.height = Math.round(query.width / query.aspectRatio);
                query.src = $shopify.image.helpers.imageForSize(imageSource,{
                    maxWidth: query.width,
                    maxHeight: query.height
                });
                return query;  
            }
            else return console.error('Media query is not a {ShopifyMediaQuery} object');
        }
    } 
}


export default ({ app, $shopify}, inject) => {
    inject('helpers', helpers($shopify)); 
}


/* 

400, []

900, []

1080, []

photo = [['small', val], ['medium', val], ['large', val], ['original', val]]


*/

/* 


album  -> [photo -> [originalObj, sizes -> [size -> [query, src]]], photo, photo, photo]
photo -> [originalObj, sizes]
sizes -> [size -> [query, src]]
*/


