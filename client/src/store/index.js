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
      const data = await axios.get('http://localhost:3000');
      console.log(data);
      if (data.orders) {
        commit('setOrders', data.orders);
      }
    }
  },
  modules: {
    getOrders(state) {
      return state.orders;
    }
  }
});
