<template>
  <NuxtChild keep-alive />
</template>

<script lang="ts">
import Vue from 'vue'
import { preloadGoogleFonts } from '@/utils/css'

export default Vue.extend({
  scrollToTop: true,
  transition: 'fade',
  head: preloadGoogleFonts({}, [{ family: 'Montserrat' }]),
})
</script>
