<template>
  <RosemGreeting />
</template>

<script lang="ts">
import Vue from 'vue'
import RosemGreeting from '~/components/Greeting.vue'

export default Vue.extend({
  transition: 'fade',
  components: {
    RosemGreeting
  }
})
</script>
