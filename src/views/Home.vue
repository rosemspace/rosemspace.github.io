<template>
  <div class="home">
    <img id="logo" src="../assets/logo.jpg">
    <div class="hello">
      <h1>Welcome to <span>Rosem</span> laboratory</h1>
      <p>
        For guide and recipes on how to configure / customize this project,<br>
        check out the
        <a href="https://github.com/vuejs/vue-cli/tree/dev/docs" target="_blank">vue-cli documentation</a>.
      </p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home"
};
</script>

<style lang="postcss" scoped>
#logo {
  border: 1px solid #866c60;
  border-radius: 50%;
  box-shadow: 0 2px 2px #7b7c7e;
}

h1 {
  font-size: 2rem;
  color: #8ee4ff;

  & span {
    /*color: #ffabab;*/
    color: #ffc6ab;
  }
}
</style>
