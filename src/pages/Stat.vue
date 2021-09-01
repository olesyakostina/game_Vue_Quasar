<template>
  <div class="total">
    <h1>{{ name }}</h1>
    <div class="correct">
      <h4>Правильные ответы : {{ $store.state.valueCorrect }}</h4>
    </div>
    <div class="incorrect">
      <h4>Не правильные ответы: {{ $store.state.valueIncorrect }}</h4>
    </div>
    <div>
      <q-btn
        @click="restart"
        class="start__btn"
        color="purple"
        label=" ПродолЖить игру"
      />

      <q-btn
        @click="over"
        class="start__btn"
        color="purple"
        label=" Завершить игру "
      />
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
export default defineComponent({
  name: "PageStat",

  data() {
    return {
      name: "",
    };
  },

  mounted() {
    this.name = localStorage.name;
  },
  computed: {
    ...mapGetters(["CORRECT", "INCORRECT"]),
  },
  methods: {
    restart() {
      this.$router.push("/game");
    },
    over() {
      this.$router.push("/");
      localStorage.clear();
    },
  },
});
</script>

<style>
.total {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.start__btn {
  margin: 10px;
}
</style>
