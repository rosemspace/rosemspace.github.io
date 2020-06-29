<template>
  <footer>
    <nuxt-link to="/legal/privacy">Privacy Policy</nuxt-link>
  </footer>
</template>

<style lang="postcss" scoped>
footer {
  @apply text-white text-sm text-center text-gray-500;
}

@media print {
  footer {
    @apply hidden;
  }
}
</style>
