<template>
  <div>
    <RosemNavigation />
    <nuxt />
    <RosemFooter />
  </div>
</template>

<script>
import Vue from 'vue'
import RosemFooter from '@/components/Footer.vue'
import RosemNavigation from '@/components/Navigation.vue'
import { preloadGoogleFonts } from '@/utils/css'

export default Vue.extend({
  components: {
    RosemNavigation,
    RosemFooter,
  },
  head: preloadGoogleFonts({}, [{ family: 'Montserrat' }]),
})
</script>

<style>
:root {
  /* Fonts */
  --font-family: Montserrat, 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 16px;

  /* Colors */
  /*--brand-color: #ffc3f3;*/
  --brand-color: #e6b576;
  /*--brand-color: #fde;*/
  /*--brand-color: #fce;*/
  /*--domain-color: #fff2c0;*/
  --main-color: #ffb0e7;
  --secondary-color: #ffeeb0;
  /*--text-color: #294766;*/
  /*--text-color: #192433;*/
  /*--text-color: #232e3e;*/
  --text-color: #2c3e50;
  --neutral-color: #99959b;
  --header-height: 80px;
  --footer-height: 24px;
}

::selection {
  @apply text-white;

  background-color: rgba(211, 184, 188, 0.8);
}

html {
  font-family: var(--font-family);
  font-size: var(--font-size);
  word-spacing: 1px;
}

body {
  @apply text-base;

  color: var(--text-color);
  /*background-color: #d3babe;*/
  /*background: #282a35 linear-gradient(#d3babe, #282a35);*/
  /*background: #282a35 linear-gradient(#d3babe, #373e65);*/
  background: #282a35 linear-gradient(#756f88, #373e65);
  /*background: #282a35 linear-gradient(#0e0414, #373e65);*/
}

.container {
  @apply max-w-full mx-auto;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}

.fade-enter,
.fade-leave-to {
  @apply opacity-0;
}
</style>
