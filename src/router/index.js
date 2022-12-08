import { createRouter, createWebHistory } from "vue-router";
import AddCategory from "@/views/Categories/AddCategory.vue";

const routes = [
  // {
  //   path: "/",
  //   name: "home",
  //   component: Home,
  // },
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
