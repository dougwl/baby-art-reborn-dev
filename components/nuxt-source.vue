<template>
  <source :media="media" :srcset="computedSizes.srcset" :sizes="computedSizes.sizes" />
</template>

<script>
export default {
  props: {
    src: { type: String },
    media: { type: String },
    sizes: { type: String },
  },
  computed: {
    computedSizes() {
      return this.$img.getSizes(this.src, {
        sizes: this.sizes,
      });
    },
  },
};
</script>