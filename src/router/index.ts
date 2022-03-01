import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../view/home.vue";

const routes = [
    { path: "/", name: "Home", component: Home },
    {
      path: "/about",
      name: "About",
      component: () => import("../view/about.vue"),
    },
  ];
  
  export default createRouter({
    history: createWebHashHistory(),
    routes,
  });
