import Vue from "vue";
import Router from "vue-router";
import Greeting from "./views/Greeting.vue";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import WIP from "./views/WIP.vue";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      components: {
        greeting: Greeting,
        // default: Coming,
      }
    },
    {
      path: "/about",
      name: "about",
      component: WIP
    }
  ]
});
