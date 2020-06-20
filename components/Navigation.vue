<template>
  <nav>
    <nuxt-link to="/">Home</nuxt-link>
    <!--<router-link to="/packages">Our packages</router-link>-->
    <!--    <svg width="1" height="28"><line x1="0" y1="0" x2="0" y2="28" stroke="currentColor"></line></svg>-->
    <nuxt-link to="/authors/roshe">Author</nuxt-link>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply relative flex justify-center text-center;

  height: 28px;
  margin: 26px;
  /*background: linear-gradient(*/
  /*  to right,*/
  /*  transparent calc(50% - .05rem),*/
  /*  #2c3e50 calc(50% - .05rem),*/
  /*  #2c3e50 calc(50% + .05rem),*/
  /*  transparent calc(50% + .05rem)*/
  /*);*/
  background: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='100%'%3E%3Cline x1='0' y1='0' x2='0' y2='100%' stroke='currentColor'%3E%3C/line%3E%3C/svg%3E")
    center no-repeat;

  & a {
    padding: 4px 10px;
    /*font-weight: bold;*/
    line-height: 1.25;
    color: var(--text-color);
    /*border-left: solid 1px;*/

    &:hover {
      border-bottom: none;
    }

    &:first-of-type {
      @apply absolute border-none;

      right: 50%;
    }

    &:last-of-type {
      @apply absolute;

      left: 50%;
    }

    &.link-exact-active {
      font-weight: bold;
      /*color: var(--secondary-color);*/
      /*color: #fff2c0;*/
    }
  }
}
</style>
