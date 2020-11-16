import { createRouter, createWebHistory, Router } from "vue-router";
import PageA from "./PageA.vue";
import Home from "./Home.vue";
import { PageB } from "@example/module-example";
import PageC from "@example/module-example/PageC.vue";
/**
 * Creates a vue router
 */
export const getRouter = (): Router => {
  const routes = [
    {
      path: "/",
      component: Home,
    },
    {
      path: "/a",
      component: PageA,
    },
    {
      path: "/b",
      component: PageB,
    },
    {
      path: "/c",
      component: PageC,
    },
  ];
  return createRouter({
    history: createWebHistory(),
    routes,
  });
};
