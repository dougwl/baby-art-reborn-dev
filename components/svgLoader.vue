<template>
    
</template>


<script>

export default {
    /**
   * Companion component for nuxtjs/svg, created to insert raw svg without the need of a wrapper div.
   * @version 0.1
   */
    name: "svgLoader",
    props: {
        /**
       * The raw svg string
       * @values rawHTML string
       */
        rawHTML: {
            type: String,
            required: true
        }
    },
    
    render(createElement) {
         /**
       * Renders the raw svg string as a outerHTML
       */
        /* let createElementFromString = createElement("svg", {
            domProps: {
                outerHTML: this.rawHTML
            }
        }); */
        /* let createElementFromString = createElement("div", {
            domProps: {
                innerHTML: this.rawHTML
            }
        }); */
        /* let createElementFromString = createElement({
            template: this.rawHTML
        }); */
        /* let createElementFromString = createElement("svg", this.rawHTML); */
        /* console.log(createElementFromString);
        return createElementFromString; */
        /* return this.$createElement("svg", {
            domProps: {
                innerHTML: this.rawHTML
            }
        }); */
    }
}
</script>


