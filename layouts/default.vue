<template>
  <div>
    <RosemNavigation />
    <main class="container">
      <div class="bg">
        <img src="~assets/images/bg.jpg" alt="Background image" />
      </div>
      <Nuxt />
    </main>
    <RosemFooter />
  </div>
</template>

<script>
import Vue from 'vue'
import RosemFooter from '@/components/Footer.vue'
import RosemNavigation from '@/components/Navigation.vue'

export default Vue.extend({
  components: {
    RosemNavigation,
    RosemFooter,
  },
})
</script>

<style scoped>
.container {
  @apply flex justify-center items-center;
}

main {
  @apply relative;

  min-height: calc(100vh - var(--header-height) - var(--footer-height));
}

.bg {
  @apply fixed block overflow-hidden right-0 bottom-0 left-0;

  /* nav height */
  top: -80px;
  z-index: -1;
  filter: opacity(0.75);

  & > img {
    @apply w-full min-h-full object-cover;

    image-rendering: pixelated;
    filter: blur(20px);
    transform: scale(1.1) translateY(3%);
  }
}

@media print {
  .bg {
    @apply hidden;
  }
}
</style>
