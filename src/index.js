import Vue from 'vue';

import VueRouter from 'vue-router';
import Vuex from 'vuex';
import './styles/app.css'
import routes from './routes';
import store from './store';

Vue.use(VueRouter);
Vue.use(Vuex);

const router = new VueRouter({routes, mode: 'history'});

/*
  Ini namanya Vue Instance, jadi kita inisialisasikan vue kita, lalu kita mount ke element ber-id __eksamen_app.
  Jadi nanti vue bakalan inject element tersebut dan element tersebut jadi reactive.
*/

const App = () => import(/* webpackChunkName: "app" */ './App.vue');

const vm = new Vue({
  router: router,
  store: new Vuex.Store(store),
  render: h => h(App)
}).$mount('#__eksamen_app');

window.app = {
  name: 'Eksamen',
  description: 'Makes you love exam again.',
  version: '0.1.0',
}; console.log(app);
