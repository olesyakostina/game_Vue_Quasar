<template>
  <Header />
  <router-view></router-view>
</template>

<script>
import { defineComponent } from "vue";

import Header from "./pages/Header";

export default defineComponent({
  name: "App",
  components: {
    Header,
  },
});
</script>
