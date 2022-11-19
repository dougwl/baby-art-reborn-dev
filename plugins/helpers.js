import Vue from 'vue';

var $shopify = {};

export class ShopifyMediaQuery{

    condition = ''; // CSS media query eg: "(min-width: 0px)"
    sourceWidth = 0;
    sourceHeight = 0;
    width = 0; //Without "px"
    height = 0; //Without "px"
    aspectRatio = 0; // Aspect ratio in decimal eg: 9/16 = 0.5625
    src = ''; // Converted image src

    constructor({condition,sourceWidth, width, sourceHeight, height, aspectRatio, src}){
        this.condition = condition;
        this.sourceWidth = sourceWidth;
        this.sourceHeight = sourceHeight; 
        this.width = width; 
        this.height = height; 
        this.aspectRatio = aspectRatio; 
        this.src = src; 
    }
}


function getDynamicAspectRatio(sourceWidth,sourceHeight, availableWidth, availableHeight){

    let ratio = Math.min(availableWidth / sourceWidth, availableHeight / sourceHeight);
    return { width: sourceWidth * ratio, height: sourceHeight * ratio };

}




export const helpers =  (shopify) => {
    $shopify = shopify;
    return {
        /**
         * Returns converted photo URL
         * @param {Object} args - Required parameters.
         * @param {{}} args.photo - Shopify query object.
         * @param {Object} args.newSize - Size Object {width, height}.
         * @param {string} args.newSize.height - New height size
         * @param {string} args.newSize.width - New width size
         * @param {Object} args.modifiers - URL modifiers.
         * @param {string} args.modifiers.crop - center, top, bottom, left, right
         * @param {string} args.modifiers.scale - 2x, 3x
         * @param {string} args.modifiers.format - jpg, pjpg
         * @returns {Object} Converted string
         */
        getResizedImage: function ({photo, newSize, modifiers}){
            let resizedImage = { src: '', width: 0, height: 0};
            const srcCrop = '_crop_';
            const srcScale = '@';
            const srcFormat = '.progressive';
            const cropModifier = ['center', 'top', 'bottom', 'left', 'right'];
            const scaleModifier = ['2x', '3x'];
            resizedImage.src = $shopify.image.helpers.imageForSize( photo, 
                { 
                    maxWidth: newSize.width,
                    maxHeight: newSize.height
                }
            );
            if(modifiers){
                let newUrl = resizedImage.src.replace('.jpg',`${
                    modifiers.crop ? srcCrop + modifiers.crop : ''}${
                        modifiers.scale ? srcScale + modifiers.scale : ''}${
                            modifiers.format ? srcFormat : ''
                        }.jpg`);
                resizedImage.src = newUrl;
            };
            resizedImage.width = newSize.width;
            resizedImage.height = newSize.height;
            return resizedImage;
        }, 
        getResponsiveImage: function({ photo, intrinsicSize, availableSize, modifiers}){
            let newSize = {};
            let aspectRatio = 0;
            let availableAspectRatio = 0;
            /* if(intrinsicSize.width < intrinsicSize.height){
                aspectRatio = intrinsicSize.width / intrinsicSize.height;
                availableAspectRatio = availableSize.width / availableSize.height;
                if(aspectRatio > availableAspectRatio){
                    newSize.width = availableSize.width;
                    newSize.height = Math.round(availableSize.width / aspectRatio);
                }  // If the image is wider than the available space, then the width will be the available space and the height will be calculated based on the aspect ratio.
                else{ // If the image is taller than the available space, then the height will be the available space and the width will be calculated based on the aspect ratio.
                    newSize.width = Math.round(availableSize.height * aspectRatio);
                    newSize.height = availableSize.height;
                }
            }
            else{
                
            } */
            newSize.width = intrinsicSize.width;
            newSize.height = intrinsicSize.height;
            return this.getResizedImage({photo, newSize, modifiers});

        }
        /* getResponsiveImage: function({imageSource, mediaQuery}){
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
        }, */
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


