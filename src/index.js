import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';
import routes from './routes';
import './statics/index.html';

Vue.use(VueRouter)

const router = new VueRouter({
  routes: routes,
  mode: 'hash'
});

new Vue({
  router: router,
  render: h => h(App)
}).$mount('#__eksamen_app');

window.app = {
  name: 'Eksamen',
  description: 'Makes you love exam again.',
  version: '0.1.0',
}; console.log(app);
