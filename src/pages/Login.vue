<template>
  <div class="form_item">
    <h3 class="form">Введите свое имя</h3>
    <input v-model="name" class="form_inp" type="text" />
    <button class="form__btn" @click="submit">Отправить</button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  name: "PageLogin",

  data() {
    return {
      name: "",
      pattern: /^[a-zA-Z0-9_]{2,}$/,
    };
  },
  created() {
    console.log(localStorage.name);
    if (localStorage.name) {
      this.$router.push("/game");
    }
  },

  mounted() {
    if (localStorage.name) {
      this.name = localStorage.name;
      return this.pattern.test();
    }
  },
  methods: {
    ...mapActions(["GET_QUESTION", "INIT_STORE", "GET_CATEGORY"]),
    submit() {
      localStorage.name = this.name;
      if (this.isCorrect) {
        this.$router.push("/start");
        // localStorage.name = name;
        this.name = "";
      } else {
        alert("ПоЖалуйста,заполните форму");
      }
    },
  },
  computed: {
    isCorrect() {
      return this.pattern.test(this.name);
    },
  },
});
</script>
<style scoped>
.form_item {
  border: 1px solid black;
  margin: 0 auto;
  width: 427px;
  padding: 10px;
  background-color: #cbaed7;
}
.form_inp {
  margin-left: 70px;
}
.form__btn {
  background-color: #a77cb8;
}
</style>
