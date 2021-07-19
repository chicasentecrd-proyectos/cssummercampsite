import { createWebHistory, createRouter } from 'vue-router';
import Home from "../components/Home.vue";
import StudentWork from "../components/StudentWork.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: '/studentwork',
    name: 'StudentWork',
    component: StudentWork
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
