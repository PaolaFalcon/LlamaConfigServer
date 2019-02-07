import Vue from "vue";
import Router from "vue-router";

import ContainerPanel from "./../components/ContainerPanel.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/createContainer",
      name: "ContainerPanel",
      component: ContainerPanel
    }
  ]
});
