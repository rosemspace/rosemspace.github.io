<template>
  <div>
    <RosemNavigation />
    <nuxt />
  </div>
</template>

<script>
import Vue from 'vue'
import RosemNavigation from '~/components/Navigation.vue'

export default Vue.extend({
  components: {
    RosemNavigation,
  },
  head: {
    link: [
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700&display=swap',
      },
    ],
  },
})
</script>

<style>
:root {
  /* Fonts */
  --font-family: Montserrat, 'Source Sans Pro', -apple-system,
    BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  --font-size: 16px;

  /* Colors */
  --brand-color: #ffb05f;
  /*--brand-color: #fde;*/
  /*--brand-color: #fce;*/
  --domain-color: #fff2c0;
  --main-color: #ffb0e7;
  --secondary-color: #ffeeb0;
  /*--text-color: #294766;*/
  /*--text-color: #192433;*/
  /*--text-color: #232e3e;*/
  --text-color: #2c3e50;
  --neutral-color: #99959b;
  --menu-height: 80px;
}

::selection {
  background-color: rgba(211, 184, 188, 0.4);
  color: white;
}

html {
  font-family: var(--font-family);
  font-size: var(--font-size);
  word-spacing: 1px;
}

body {
  @apply text-base;

  color: var(--text-color);
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
  opacity: 0;
}
</style>
