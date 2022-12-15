import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import DenkiView from "../views/DenkiView.vue";
import NormalView from "../views/NormalView.vue";
import FireView from "../views/FireView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/denki",
    name: "denki",
    component: DenkiView,
  },
  {
    path: "/normal",
    name: "normal",
    component: NormalView,
  },
  {
    path: "/fire",
    name: "fire",
    component: FireView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
