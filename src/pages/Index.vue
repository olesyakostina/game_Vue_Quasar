<template>
  <div>
    <div class="container">
      <div class="category">
        <div class="category__item" v-for="item in CATEGORY" :key="item.id">
          {{ item.title }}

          <div>
            <div class="category__quiz__item" v-if="QUESTION[item.id]"></div>
            <button
              class="category__quiz"
              v-for="value of QUESTION[item.id]"
              :key="value.id"
              :id="value.id"
              :value="value"
              :class="{
                active: value.answered,
                danger: value.wrong,
              }"
              @click="showModal(value)"
            >
              {{ value.value }}
            </button>
          </div>
        </div>
      </div>
      <div class="total">
        <!-- <span
          >Стоимость правильного ответа: {{ $store.state.valueCorrect }}</span
        >
        <span
          >Стоимость не правильного ответа
          {{ $store.state.valueIncorrect }}</span
        > -->
      </div>

      <Modal
        v-if="isOpened"
        :answer="answer"
        :wrong="wrong"
        :value="selectedQuestion"
        @close="isOpened = false"
        @answer="answer"
        @wrong="wrong"
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
import Modal from "./Modal.vue";
export default defineComponent({
  name: "PageIndex",
  components: {
    Modal,
  },
  data() {
    return {
      questions: [],
      isOpened: false,
      selectedQuestion: {},
      isCorrect: false,
      isNotCorrect: false,
    };
  },

  computed: {
    ...mapGetters(["CLUES", "CATEGORY", "QUESTION", "CORRECT", "INCORRECT"]),
  },
  created() {
    if (!localStorage.name) {
      this.$router.push("/");
    }

    if (this.QUESTION.length) return;
    this.INIT_STORE();
    this.GET_CATEGORY();
    this.GET_QUESTION();
  },

  updated() {
    console.log("QUESTION:", this.QUESTION);
    // console.log("QUESTION-id:", this.QUESTION["5412"].clues);
  },
  methods: {
    ...mapActions(["INIT_STORE", "GET_CATEGORY", "GET_QUESTION"]),

    showModal(value) {
      this.isOpened = !this.isOpened;
      this.selectedQuestion = value;
    },
    answer() {
      this.selectedQuestion.answered = true;
    },
    wrong() {
      this.selectedQuestion.wrong = true;
    },
  },
});
</script>
<style scoped>
.category__item {
  display: flex;
  justify-content: space-between;
  margin: 10px;
  font-size: 20px;
}
.category {
  border: 1px solid blueviolet;
  background: rgb(198, 178, 218);
  width: 800px;
  padding: 10px;
  margin: 0 auto;
}
.category__quiz {
  margin: 4px;
  width: 80px;
  height: 40px;
}
.total {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20px;
}
.active {
  background-color: green;
}
.danger {
  background-color: red;
}
</style>
