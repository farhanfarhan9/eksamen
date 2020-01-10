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
          },
          {
              id: 3,
              text: 'I would rather they … their obligation right now.',
              answers: [
                {
                  id: 1,
                  text: 'pays',
                }, {
                  id: 2,
                  text: 'had paying',
                }, {
                  id: 3,
                  text: 'paid',
                }, {
                  id:4,
                  text: 'pay',
                }
              ],
              selectedAnswer: -1,
              correctAswer: 1,
          },
          {
              id: 4,
              text: 'Last night, an old man screamed and ran as if he … a ghost',
              answers: [
                {
                  id: 1,
                  text: 'saw',
                }, {
                  id: 2,
                  text: 'had seen',
                }, {
                  id: 3,
                  text: 'was seeing',
                }, {
                  id:4,
                  text: 'has seen',
                }
              ],
              selectedAnswer: -1,
              correctAswer: 1,
          },
          {
              id: 5,
              text: 'We wished Ilham had killed the scorpion.It means that  …',
              answers: [
                {
                  id: 1,
                  text: 'he kills the scorpion',
                }, {
                  id: 2,
                  text: 'he doesn\'t kill the scorpion',
                }, {
                  id: 3,
                  text: 'he didn\'t killed the scorpion',
                }, {
                  id:4,
                  text: 'he won\'t kill the scorpion',
                }
              ],
              selectedAnswer: -1,
              correctAswer: 1,
          },
          {
              id: 6,
              text: 'I wish that the weather … not so warm.',
              answers: [
                {
                  id: 1,
                  text: 'was',
                }, {
                  id: 2,
                  text: 'be',
                }, {
                  id: 3,
                  text: 'were',
                }, {
                  id:4,
                  text: 'is',
                }
              ],
              selectedAnswer: -1,
              correctAswer: 1,
          },
          {
              id: 7,
              text: 'Efi was shocked as though …',
              answers: [
                {
                  id: 1,
                  text: 'she saw a ghost',
                }, {
                  id: 2,
                  text: 'she has seen a ghost',
                }, {
                  id: 3,
                  text: 'she had seen a ghost',
                }, {
                  id:4,
                  text: 'she was seeing a ghost',
                }
              ],
              selectedAnswer: -1,
              correctAswer: 1,
          },
          {
              id: 8,
              text: 'It is imperative that you … there is person',
              answers: [
                {
                  id: 1,
                  text: 'be',
                }, {
                  id: 2,
                  text: 'will be',
                }, {
                  id: 3,
                  text: 'will',
                }, {
                  id:4,
                  text: 'are',
                }
              ],
              selectedAnswer: -1,
              correctAswer: 1,
          },
          {
              id: 9,
              text: 'Al\'s doctor insists … for a few days.',
              answers: [
                {
                  id: 1,
                  text: 'that he is resting',
                }, {
                  id: 2,
                  text: 'his resting',
                }, {
                  id: 3,
                  text: 'him to rest',
                }, {
                  id:4,
                  text: 'that he rest',
                }
              ],
              selectedAnswer: -1,
              correctAswer: 1,
          },
          {
              id: 10,
              text: 'His English teacher recommends that he … a regular degree program.',
              answers: [
                {
                  id: 1,
                  text: 'begin',
                }, {
                  id: 2,
                  text: 'begins',
                }, {
                  id: 3,
                  text: 'will begin',
                }, {
                  id:4,
                  text: 'is beginning',
                }
              ],
              selectedAnswer: -1,
              correctAswer: 1,
          },
        ]
      }
    ],
    status: {
      totalQuestion: 0,
      score: 0,
      filledIn: 0,
      remainTime: 0,
    }
  },
  mutations: {
    loggedIn (state, username) {
      state.authenticated = true;
      state.username = username;
    },
    loggedOut (state) {
      state.authenticated = false;
      state.username = null;
    },
    finishExam(state, exam) {
      Object.assign(state.status, {
        totalQuestion: exam.total,
        score: exam.score,
        filledIn: exam.filledIn,
        remainTime: exam.remainTime
      })
    },
  }
});

export default store;
