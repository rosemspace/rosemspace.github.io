<template>
  <div id="app">
    <RosemNavigation />
    <main>
      <div class="bg">
        <img src="./assets/bg.jpg" alt="Background image" />
      </div>
      <router-view name="greeting" />
      <router-view id="content" />
    </main>
  </div>
</template>

<script>
import RosemNavigation from './views/Navigation.vue'

export default {
  name: 'RosemApp',

  components: {
    RosemNavigation
  },
}
</script>

<style lang="postcss">
@import "./design/index.pcss";
@import "./theme/index.pcss";
</style>

<style lang="postcss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Montserrat', Helvetica, Arial, sans-serif;
  color: var(--text-color);
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
