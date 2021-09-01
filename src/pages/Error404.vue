<template>
  <div
    class="fullscreen bg-blue text-white text-center q-pa-md flex flex-center"
  >
    <div>
      <div style="font-size: 30vh">404</div>

      <div class="text-h2" style="opacity: 0.4">Oops. Nothing here...</div>

      <q-btn
        class="q-mt-xl"
        color="white"
        text-color="blue"
        unelevated
        to="/"
        label="Go Home"
        no-caps
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Error404",
});
</script>
import Vue from "vue"; import Vuex from "vuex"; import axios from "axios"; let
store = new Vuex.Store({ state: { clues: [], category: [], question: {},
correct: [], valueCorrect: 0, valueIncorrect: 0, incorrect: [], data: [], },
mutations: { SET_STORE: (state, data) => { state.data = data; }, SET_CATEGORY:
(state, category) => { // console.log(category); state.category = category; },
SET_QUESTION: (state, item) => { console.log("item", item);
state.question[item.id] = item; // console.log(question); // state.question =
question; }, SET_CORRECT: (state, answer) => { // console.log(value);
state.valueCorrect += answer; state.correct.push(answer); }, SET_INCORRECT:
(state, answer) => { // console.log(value); state.valueIncorrect += answer;
state.incorrect.push(answer); }, }, actions: { INIT_STORE: async ({ commit }) =>
{ const test = axios .get("https://jservice.io/api/clues") .then(({ data }) => {
// console.log("test", data); commit("SET_STORE", data); }); return test; },
GET_CATEGORY: async ({ dispatch, commit }) => { await axios
.get("https://jservice.io/api/categories?count=5") .then(({ data }) => { //
console.log(data); dispatch("GET_NEW_QUESTION", data); }); }, // GET_QUESTION:
({ commit }) => { // axios // .get("https://jservice.io/api/category?id=11496")
// .then(({ data }) => { // commit("SET_QUESTION", data); // }); // },
GET_CORRECT: ({ commit }, value) => { commit("SET_CORRECT", value); },
GET_INCORRECT: ({ commit }, value) => { commit("SET_INCORRECT", value); },
GET_NEW_QUESTION: ({ commit }, category) => { // commit("SET__NEW_QUESTION",
data); category.map(async (item) => { await axios
.get(`https://jservice.io/api/category?id=${item.id}`) .then(({ data }) => {
console.log(data, item.id); commit("SET_QUESTION", data); //
state.question[item.id] = data; }); }); }, }, getters: { CLUES(state) { return
state.data; }, CATEGORY(state) { return state.category; }, QUESTION(state) {
return state.question; }, // CORRECT(state, answer) { // return state.correct;
// }, INCORRECT(state) { return state.incorrect; }, }, }); export default store;
//------------------------------------------- import { defineComponent } from
"vue"; import { mapActions, mapGetters } from "vuex"; import Modal from
"./Modal.vue"; export default defineComponent({ name: "PageIndex", components: {
Modal, }, data() { return { questions: [], isOpened: false, value: null, }; },
computed: { ...mapGetters(["CLUES", "CATEGORY", "QUESTION", "CORRECT",
"INCORRECT"]), }, created() { if (!localStorage.name) { this.$router.push("/");
} // await this.INIT_STORE(); // await this.GET_CATEGORY(); // // await
this.GET_QUESTION(); // console.log("QUESTION:", this.QUESTION); }, async
mounted() { const test = await this.INIT_STORE(); console.log("test", test);
await this.GET_CATEGORY(); // await this.GET_QUESTION();
console.log("QUESTION:", this.QUESTION); console.log("QUESTION-M:",
this.QUESTION); console.log(this.$store.state); }, updated() {
console.log("QUESTION:", this.QUESTION); console.log("QUESTION-id:",
this.QUESTION["5412"].clues); }, methods: { ...mapActions(["INIT_STORE",
"GET_CATEGORY", "GET_QUESTION"]), showModal(value) { this.isOpened =
!this.isOpened; this.value = value; }, answer(result) { // this.isActive =
result; // console.log(result); }, }, });
