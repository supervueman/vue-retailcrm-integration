import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    order: {},
    orders: [],
    products: [],
    cart: []
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
    },
    setOrder(state, payload) {
      state.order = payload;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
    addToCart(state, payload) {
      payload.quantity = 1;
      const item = state.cart.find(item => item.id === payload.id);

      if (item) {
        item.quantity += 1;
      } else {
        state.cart.push(payload);
      }
    }
  },
  actions: {
    async fetchOrders({
      commit
    }) {
      const response = await axios.get('http://localhost:3000');
      if (response.status === 200) {
        commit('setOrders', response.data);
      }
    },

    async createOrder({
      commit
    }, payload) {
      const response = await axios.post('http://localhost:3000', payload);

      if (response.status === 201) {
        commit('setOrder', response.data);
      }
    },

    async fetchProducts({
      commit
    }) {
      const response = await axios.get('http://localhost:3000/products');

      if (response.status === 200) {
        commit('setProducts', response.data);
      }
    },

    addToCart({
      commit
    }, payload) {
      commit('addToCart', payload);
    }
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
    getOrder(state) {
      return state.order;
    },
    getProducts(state) {
      return state.products;
    },
    getCart(state) {
      return state.cart;
    }
  }
});
