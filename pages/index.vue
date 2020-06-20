<template>
  <main class="container">
    <div class="bg">
      <img src="~assets/bg.jpg" alt="Background image" />
    </div>
    <NuxtChild />
  </main>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  transition: 'fade'
})
</script>

<style scoped>
.container {
  @apply flex justify-center items-center;
}

main {
  position: relative;
  min-height: calc(100vh - var(--menu-height));
}

.bg {
  position: absolute;

  /* nav height */
  top: -80px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  display: block;
  overflow: hidden;

  & > img {
    width: 100%;
    /*height: 100%;*/
    min-height: 100%;
    filter: blur(14px);
    image-rendering: pixelated;
    object-fit: cover;
    /*object-position: top;*/
    transform: scale(1.1) translateY(3%);
  }
}
</style>
