<template>
  <div id="app">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat+Alternates:100,200,300,400,500,600,700">
    <div class="bg-image">
      <img src="./assets/bg.jpg" alt="Background image">
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link>
      <!--<router-link to="/packages">Our packages</router-link>-->
      <router-link to="/about">About</router-link>
    </div>
    <router-view id="content"/>
  </div>
</template>

<style lang="postcss">
@import "./design/index.pcss";

#content {
  & a {
    color: #e4f9ff;
    text-decoration: none;
  }
}
</style>

<style lang="postcss" scoped>
#app {
  position: relative;
  /*font-family: "Avenir", Helvetica, Arial, sans-serif;*/
  font-family: "Montserrat Alternates", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  & > .bg-image {
    display: block;
    overflow: hidden;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    & > img {
      image-rendering: pixelated;
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: blur(30px);
      transform: scale(1.4);
    }
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}

#nav {
  position: sticky;
  top: 0;
  display: flex;
  justify-content: flex-end;
  font-size: 1rem;
  font-weight: bold;
  font-variant: small-caps;
  padding: 0 10px;
  background-color: #fff2;
  color: #455f7c;

  & a {
    text-decoration: none;
    padding: 10px;

    &.router-link-exact-active {
      /*color: #71d5f5;*/
      color: #d1f4ff;
    }
  }
}

#content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 2rem;
  min-height: calc(100vh - 39px);
}
</style>
