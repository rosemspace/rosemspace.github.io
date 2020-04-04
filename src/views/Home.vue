<template>
  <div class="home">
    <img id="logo" src="../assets/logo.png">
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
  width: 242px;
  /*border: 1px solid #866c60;*/
  border-radius: 5%;
  /*box-shadow: 0 2px 2px #7b7c7e;*/
  box-shadow: 0 14px 20px #13131380;
}

.hello {
  /*margin-top: 40px;*/
  padding: 20px 40px;
}

h1 {
  font-size: 2rem;
  /*color: #8ee4ff;*/
  /*color: #f3f9fa;*/

  & span {
    /*color: #ffabab;*/
    /*color: #ffc6ab;*/
    /*color: #cf498c;*/
    color: #ffddee;
  }
}
</style>
