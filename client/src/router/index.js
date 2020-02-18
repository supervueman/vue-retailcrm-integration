import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Orders from '../views/Orders.vue';
import Cart from '../views/Cart.vue';

Vue.use(VueRouter);

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/orders',
    name: 'Orders',
    component: Orders
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
