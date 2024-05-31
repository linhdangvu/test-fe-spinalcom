import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/statistic",
    name: "statistic",
    component: () => import("../views/StatisticView.vue"),
  },
  {
    path: "/usine",
    name: "usine",
    component: () => import("../views/UsineView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
