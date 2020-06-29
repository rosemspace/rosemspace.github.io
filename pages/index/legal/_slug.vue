<template>
  <div class="container">
    <nuxt-content :document="document" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'fade',
  async asyncData({ $content, route: { path }, error }) {
    const document = await $content(path.slice(1))
      .fetch()
      .catch(() => {
        error({ statusCode: 404, message: 'Page not found' })
      })

    return { document }
  },
  head(this: any) {
    return {
      title: this.document.title,
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        {
          hid: 'description',
          name: 'description',
          content: this.document.description,
        },
        {
          hid: 'og:description',
          name: 'og:description',
          property: 'og:description',
          content: this.document.description,
        },
      ],
    }
  },
})
</script>

<style src="~/assets/css/content.pcss" lang="postcss"></style>
