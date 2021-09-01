<template>
  <div class="modal_wrapper" ref="modal_wrapper">
    <div class="my-card__item">
      <q-card class="my-card">
        <q-card-section class="bg-purple text-white">
          <div class="text-h6">{{ value.question }}</div>
          <div class="text-subtitle2">{{ value.value }}</div>
          <h5>time : {{ timerCount }}</h5>
        </q-card-section>

        <q-card-actions vertical align="center">
          <q-btn flat>Enter answer : </q-btn>
          <q-input v-model="text" />
          <div>
            <q-btn round size="sm" color="purple" @click="answer">
              <q-icon name="arrow_back" />
            </q-btn>
          </div>
        </q-card-actions>
      </q-card>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
import { Notify } from "quasar";

export default defineComponent({
  name: "PageModal",
  props: {
    value: {
      type: Object,
    },
  },
  data() {
    return {
      text: "",
      // isEditing: false,
      timerCount: 60,
    };
  },
  // beforeMount() {
  //   window.addEventListener("beforeunload", (event) => {
  //     if (!this.isEditing) return;
  //     event.preventDefault();
  //     // Chrome requires returnValue to be set.
  //     event.returnValue = "";
  //   });
  // },

  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  computed: {
    ...mapGetters(["CORRECT", "INCORRECT"]),
  },

  methods: {
    ...mapActions(["GET_CORRECT", "GET_INCORRECT"]),
    ...mapMutations(["SET_CORRECT", "SET_INCORRECT", "SET_Status"]),

    answer() {
      console.log(this.value.answer, this.text);
      if (this.value.answer.toLowerCase() == this.text.toLowerCase()) {
        this.SET_CORRECT(this.value.value);
        Notify.create("ответ правильный");
        console.log(this.value);

        // alert("ответ правильный");
        this.$emit("answer", true);
      } else {
        this.SET_INCORRECT(this.value.value);
        Notify.create("ответ  не правильный");

        // alert("ответ не правильный");
        this.$emit("wrong", true);
      }
      this.$emit("close");
    },
  },
});
</script>
<style scoped>
.my-card__item {
  position: absolute;
  right: 0;
  left: 0;
  top: 0;
  bottom: 0;
  background: rgba(64, 64, 64, 0.4);
}
.my-card {
  width: 500px;
  position: fixed;
  margin-left: 550px;
  margin-top: 200px;
}
.close-modal {
  margin-top: 20px;
}
</style>
