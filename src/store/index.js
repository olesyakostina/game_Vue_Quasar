import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";
// const API = "https://jservice.io/api",

let store = new Vuex.Store({
  state: {
    clues: [],
    category: [],
    question: {},
    correct: [],
    valueCorrect: 0,
    valueIncorrect: 0,
    incorrect: [],
    data: [],
  },
  mutations: {
    SET_STORE: (state, data) => {
      state.data = data;
    },
    SET_CATEGORY: (state, category) => {
      console.log(category);
      category.map((item) => {
        axios
          .get(`https://jservice.io/api/category?id=${item.id}`)
          .then(({ data }) => {
            console.log(data);
            state.question[item.id] = data.clues.splice(0, 5);
          });
      });
      state.category = category;
    },
    SET_QUESTION: (state, question) => {
      console.log(question);
      state.question = question;
    },
    SET_CORRECT: (state, answer) => {
      // console.log(value);
      state.valueCorrect += answer;
      state.correct.push(answer);
    },
    SET_INCORRECT: (state, answer) => {
      // console.log(value);
      state.valueIncorrect += answer;
      state.incorrect.push(answer);
    },
  },
  actions: {
    INIT_STORE: ({ commit }) => {
      axios.get("https://jservice.io/api/clues").then(({ data }) => {
        commit("SET_STORE", data);
      });
    },
    GET_CATEGORY: ({ commit }) => {
      axios
        .get("https://jservice.io/api/categories?count=5")
        .then(({ data }) => {
          console.log("category", data);
          commit("SET_CATEGORY", data);
        });
    },
    GET_QUESTION: ({ commit }) => {
      axios
        .get("https://jservice.io/api/category?id=11496")
        .then(({ data }) => {
          commit("SET_QUESTION", data.clues);
        });
    },
    GET_CORRECT: ({ commit }, value) => {
      commit("SET_CORRECT", value);
    },
    GET_INCORRECT: ({ commit }, value) => {
      commit("SET_INCORRECT", value);
    },
  },
  getters: {
    CLUES(state) {
      return state.data;
    },
    CATEGORY(state) {
      return state.category;
    },
    QUESTION(state) {
      return state.question;
    },
    INCORRECT(state) {
      return state.incorrect;
    },
  },
}); // CORRECT(state, answer) {
//     //   return state.correct;
//     // },
export default store;

// начало

// import Vue from "vue";
// import Vuex from "vuex";
// import axios from "axios";

// let store = new Vuex.Store({
//   state: {
//     clues: [],
//     category: [],
//     question: {},
//     correct: [],
//     valueCorrect: 0,
//     valueIncorrect: 0,
//     incorrect: [],
//     data: [],
//   },
//   mutations: {
//     SET_STORE: (state, data) => {
//       state.data = data;
//     },
//     SET_CATEGORY: (state, category) => {
//       // category.map((item) => {
//       //   axios
//       //     .get(`https://jservice.io/api/category?id=${item.id}`)
//       //     .then(({ data }) => {
//       //       console.log(data, item.id);
//       //       commit("SET_QUESTION", item.id);
//       //       // console.log(category);
//       //       state.category = category;
//       //     });
//       // });
//       state.category = category;
//     },
//     SET_QUESTION: (state, question) => {
//       console.log("mutations", question);
//       // state.question[item.id] = item;
//       state.question = question;

//       // state.question[item.id] = data;
//       // state.question[item.id] = item;
//       // console.log(question);
//       // state.question = question;
//     },
//     SET_CORRECT: (state, answer) => {
//       // console.log(value);
//       state.valueCorrect += answer;
//       state.correct.push(answer);
//     },
//     SET_INCORRECT: (state, answer) => {
//       // console.log(value);
//       state.valueIncorrect += answer;
//       state.incorrect.push(answer);
//     },
//   },
//   actions: {
//     INIT_STORE: async ({ commit }) => {
//       const test = axios
//         .get("https://jservice.io/api/clues")
//         .then(({ data }) => {
//           // console.log("Coming array", data);
//           commit("SET_STORE", data);
//         });

//       return test;
//     },

//     GET_CATEGORY: async ({ commit }) => {
//       await axios
//         .get("https://jservice.io/api/categories?count=5")
//         .then(({ data }) => {
//           console.log("Coming categories", data);
//           commit("SET_QUESTION", data);
//         });
//     },
//     // GET_QUESTION: ({ commit }) => {
//     //   axios
//     //     .get("https://jservice.io/api/category?id=11496")
//     //     .then(({ data }) => {
//     //       console.log("Coming question", data);
//     //       commit("SET_QUESTION", data);
//     //     });
//     // },
//     GET_CORRECT: ({ commit }, value) => {
//       commit("SET_CORRECT", value);
//     },
//     GET_INCORRECT: ({ commit }, value) => {
//       commit("SET_INCORRECT", value);
//     },
//     // GET_CATEGORY: async ({ dispatch, commit }) => {
//     //   await axios
//     //     .get("https://jservice.io/api/categories?count=5")
//     //     .then(({ data }) => {
//     //       // console.log(data);
//     //       dispatch("GET_QUESTION", data);
//     //     });
//     // },
//     GET_QUESTION: ({ commit }, category) => {
//       category.map((item) => {
//         axios
//           .get(`https://jservice.io/api/category?id=${item.id}`)
//           .then(({ data }) => {
//             console.log(data, item.id);
//             commit("SET_QUESTION", data);
//             // state.question[item.id] = data;
//           });
//       });
//     },
//   },
//   getters: {
//     CLUES(state) {
//       return state.data;
//     },
//     CATEGORY(state) {
//       return state.category;
//     },
//     QUESTION(state) {
//       return state.question;
//     },
//     // CORRECT(state, answer) {
//     //   return state.correct;
//     // },
//     INCORRECT(state) {
//       return state.incorrect;
//     },
//   },
// });
// export default store;
