import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import M1CasaPage from '../views/M1CasaPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/m1-casa',
    name: 'M1Casa',
    component: M1CasaPage,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth',
      };
    } else {
      return { top: 0, behavior: 'smooth' };
    }
  },
});

export default router;