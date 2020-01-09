import Vue from 'vue';
import router from './router';
import store from './store';
import './styles/app.css'

const App = () => import('./App.vue');

const vm = new Vue({
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#_eksamen_app_');


// window.app = {
//   name: 'Eksamen',
//   description: 'Makes you love exam again.',
//   version: '0.1.0',
// }; console.log(app);
