import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView";
import AddCategory from "@/views/Categories/AddCategory.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/add",
    name: "Add Category",
    component: AddCategory,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
