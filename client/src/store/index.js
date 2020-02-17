import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    order: {},
    orders: []
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
    },
    setOrder(state, payload) {
      state.order = payload;
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

      console.log(response)

      if (response.status === 201) {
        commit('setOrder', response.data);
      }
    }
  },
  getters: {
    getOrders(state) {
      return state.orders;
    },
    getOrder(state) {
      return state.order;
    }
  }
});
