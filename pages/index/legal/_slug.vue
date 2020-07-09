<template>
  <div class="container">
    <NuxtContent :document="document" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { contentOptions } from '@/utils/content'

export default Vue.extend({
  scrollToTop: true,
  transition: 'fade',
  ...contentOptions(),
})
</script>

<style src="@/assets/css/content.pcss" lang="postcss"></style>
