import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './pages/Home.vue';
import Profile from './pages/Profile.vue';
import Login from './pages/Login.vue';

/* Exam Page */
import Exam from './pages/Exam/Index.vue';
import TakeExam from './pages/Exam/Take.vue';
import FinishExam from './pages/Exam/Finish.vue';
import ReviewExam from './pages/Exam/Review.vue';

import store from './store'

Vue.use(VueRouter);

const routes = [
  {
    path: '/profile',
    component: Profile,
    meta: { requiredAuthentication: true}
  },
  {
    path: '/exam/:id',
    component: Exam,
    meta: { requiredAuthentication: true },
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
    meta: { requiredAuthentication: true },
    
  },
];

const router = new VueRouter({ routes });

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiredAuthentication)) {
    // this route requires auth, check if logged in
    // if not, redirect to login page.
    fetch('/api/auth/information', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ authenticated: store.state.authenticated }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.error)
          next('/login')
        else
          next();
      })
  } else {
    next() // make sure to always call next()!
  }
})

export default router;
