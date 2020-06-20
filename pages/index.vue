<template>
  <div class="container">
    <div>
      <logo />
      <h1 class="title">
        rosem
      </h1>
      <h2 class="subtitle">
        Rosem packages website
      </h2>
      <div class="links">
        <nuxt-link to="/documentation" class="button--green"
          >Documentation</nuxt-link
        >
        <nuxt-link to="/cv" class="button--grey">CV</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  transition: 'fade',
  components: {
    Logo
  },
  async asyncData({ $content }) {
    const document = await $content('cv').fetch()

    return { document }
  }
})
</script>

<style scoped>
.container {
  @apply min-h-screen flex justify-center items-center text-center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
