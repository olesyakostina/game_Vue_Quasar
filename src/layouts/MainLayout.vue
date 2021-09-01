<template>
  <div>
    <Login />
  </div>
</template>

<script>
import { defineComponent } from "vue";

import Login from "../pages/Login";

export default defineComponent({
  name: "MainLayout",
  components: {
    Login,
  },
});
</script>
<style scope></style>
