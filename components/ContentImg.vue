<template>
  <img :src="contentImageSrc" :alt="alt" />
</template>

<script>
export default {
  name: 'ContentImg',

  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  },

  computed: {
    contentImageSrc() {
      return require(`~/content/${this.src}`)
    }
  }
}
</script>
