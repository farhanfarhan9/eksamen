import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    authenticated: false,
    username: null,
    exams: [
      {
        id: 1,
        name: 'Bahasa Inggris',
        timeLimit: 1800,
        questions: [
          {
            id: 1,
            text: 'I wish that ... with my brother when he flies to England.',
            answers: [
              {
                id: 1,
                text: 'could go',
              }, {
                id: 2,
                text: 'had gone',
              }, {
                id: 3,
                text: 'will go',
              }, {
                id: 4,
                text: 'are going',
              }
            ],
            selectedAnswer: -1,
            correctAswer: 1,
          },
          {
            id: 2,
            text: 'I\'d rather you .. anything about it for the time being.',
            answers: [
              {
                id: 1,
                text: 'do',
              }, {
                id: 2,
                text: 'didn\'t do',
              }, {
                id: 3,
                text: 'don\'t',
              }, {
                id:4,
                text: 'didn\'t',
              }
            ],
            selectedAnswer: -1,
            correctAswer: 1,
          }
        ]
      }
    ]
  },
  mutations: {
    loggedIn (state, username) {
      state.authenticated = true;
      state.username = username;
    },
    takeExam(state, exam) {
      state.examStatus.examId = exam.id
      state.examStatus.status = 'active'
    },
  }
});

export default store;
