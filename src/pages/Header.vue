<template>
  <div>
    <div class="q-pa-md q-gutter-sm">
      <q-banner rounded class="bg-purple-8 text-white">
        <router-link to="/start">
          <q-btn flat color="white" label="Cвоя игра" />
        </router-link>
        <div class="audio">
          <audio controls>
            <source
              src="https://mp3minusovki.com/music/fhvndfjwserjgt/fce4b296782df688d9170d6a0c76b292/3289f8803146a511cc968f7017695c61.mp3"
              type="audio/mpeg"
            />
          </audio>
        </div>
        <template v-slot:action>
          <!-- <q-btn flat color="white" :label="name" /> -->
          <router-link to="/stat">
            <q-btn flat color="white" label="Статистика" />
          </router-link>
        </template>
      </q-banner>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped>
.audio {
  display: flex;
  justify-content: center;
}
</style>
