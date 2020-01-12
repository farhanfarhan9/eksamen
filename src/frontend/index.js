import Vue from 'vue';
import router from './router';
import store from './store';
import './App.css';

const App = () => import('./App.vue');

new Vue({
  el: '#_eksamen_app_',
  router: router,
  store: store,
  render: h => h(App)
});
