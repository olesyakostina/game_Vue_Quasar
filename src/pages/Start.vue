<template>
  <div class="q-pa-md q-gutter-sm">
    <router-link to="/game"
      ><q-btn class="start__btn" color="purple" label=" Начать игру "
    /></router-link>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageStart",
  components: {},
});
</script>
<style scoped></style>
