import Vue from "vue";
import Router from "vue-router";
import Top from "./pages/Top";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      component: Top
    },
    {
      path: "/page1",
      component: Page1
    },
    {
      path: "/page2",
      component: Page2
    }
  ]
});
