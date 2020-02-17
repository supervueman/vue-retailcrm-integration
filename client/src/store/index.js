import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    orders: []
  },
  mutations: {
    setOrders(state, payload) {
      state.orders = payload;
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
    }
  },
  getters: {
    getOrders(state) {
      return state.orders;
    }
  }
});
