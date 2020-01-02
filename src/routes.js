const Home = () => import(/* webpackChunkName: "home" */ './pages/Home.vue');
const Dashboard = () => import(/* webpackChunkName: "dashboard" */ './pages/Dashboard.vue');
const Exam = () => import(/* webpackChunkName: "exam" */ './pages/Exam.vue');
const Login = () => import(/* webpackChunkName: "login" */ './pages/Login.vue');

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'exams', component: Exam },
    ],
    beforeEnter: async function (to, from, next) {
      fetch('/api/auth/information')
        .then(res => res.json())
        .then(res => {
          if (res.error)
            next('/login')
          else
            next();
        })
    }
  },
  { path: '/login', component: Login },
];

export default routes;
