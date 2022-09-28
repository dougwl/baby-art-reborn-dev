import Vue from 'vue';

// The directive is used to set the srcset / src attribute of an image element.
// Through the binding argument, the directive can be passed a function that will be called
// with the element and the photo object. The function should return the src or srcset attribute value.
// The directive will set the attribute on the element.
// Example:
// <img v-srcset[(val) => something]="photo" />
// <source v-srcset[(val) => something]="photo" />
// The above directive will set the srcset attribute of the source element to the value that the passed function generates.

Vue.directive('srcset', {
    /**
     * 
     * @param {HTMLSourceElement|HTMLImageElement} el 
     * @param {*} binding 
     */
    bind: (el, binding) => {
        const val = binding.value;
        let attribute = '';
        attribute = el.localName !== 'source' ? 'src' : 'srcset';
        el.setAttribute(attribute, binding.arg({el: el, photo: val}));
    } 
});

/* 
Place-holder for lazy loading images.
*/

Vue.directive('place-holder', {
    bind: (el, binding) => {
        if(el.localName == 'img'){
            /** @type {HTMLImageElement} */ 
            const image = el;
            if(!image.getAttribute('src')){
                image.setAttribute('src', 'assets/svg/place_holder.svg');
            }
        }
    }
})


