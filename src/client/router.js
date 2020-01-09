import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Dashboard from './pages/Dashboard.vue';
import Login from './pages/Login.vue';
import ExamList from './pages/ExamList.vue';

import Exam from './pages/Exam/Index.vue';
import TakeExam from './pages/Exam/Take.vue';
import FinishExam from './pages/Exam/Finish.vue';
import ReviewExam from './pages/Exam/Review.vue';

import store from './store'

Vue.use(VueRouter);

const routes = [
  { path: '/dashboard', component: Dashboard },
  { path: '/exams', component: ExamList },
  {
    path: '/exam/:id',
    component: Exam,
    children: [
      {
        path: 'review',
        component: ReviewExam,
      }, {
        path: 'take',
        component: TakeExam,
      },  {
        path: 'finish',
        component: FinishExam,
      }
    ]
  },
  { path: '/login', component: Login },
  {
    path: '/',
    component: Home,
    beforeEnter: async function (to, from, next) {
      fetch('/api/auth/information', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ authenticated: store.state.authenticated}),
      })
      .then(res => res.json())
      .then(res => {
        if (res.error)
          next('/login')
        else
          next();
      })
    }
  },
];

const router = new VueRouter({ routes });
export default router;
