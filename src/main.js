import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';

Vue.config.productionTip = false;

axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
});

new Vue({
  router,
  store,
  axios,
  render: h => h(App)
}).$mount('#app');
