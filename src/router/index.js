import { createRouter, createWebHistory } from 'vue-router';
import Ethereum from '../views/Ethereum.vue';
import Binance from '../views/Binance.vue';
import Chain from '../views/Chain.vue';
import Polygon from '../views/Polygon.vue';
import WelcomePage from '../views/Welcome.vue';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: WelcomePage,
    },
    {
      path: '/ethereum',
      name: 'ethereum',
      component: Ethereum,
    },
    {
      path: '/binance',
      name: 'binance',
      component: Binance,
    },
    {
      path: '/chain',
      name: 'chain',
      component: Chain,
    },
    {
      path: '/polygon',
      name: 'polygon',
      component: Polygon,
    },
  ],
  linkActiveClass: 'active',
});

export default router;
