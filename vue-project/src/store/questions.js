import questions from "../mocks/questions";

const loadsQuestions = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(questions);
    }, time);
  });
};

export default {
  namespaced: true,
  state: {
    questions: [],
  },
  getters: {
    getQuestions(state) {
      return state.questions;
    },
  },
  mutations: {
    SET_QUESTIONS(state, payload) {
      state.questions = payload;
    },
  },
  actions: {
    async loadsQuestions({ commit }, payload) {
      try {
        const questions = await loadsQuestions(payload);
        commit("SET_QUESTIONS", questions);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
