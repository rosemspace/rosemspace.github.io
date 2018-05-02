<template>
  <div class="home">
    <img src="../assets/logo.jpg">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "home",
  components: {
    HelloWorld
  }
};
</script>

<style lang="postcss" scoped>
img {
  border: 1px solid #866c60;
  border-radius: 50%;
  box-shadow: 0 2px 2px #7b7c7e;
}
</style>
