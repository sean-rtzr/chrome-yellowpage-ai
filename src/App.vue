<template>
  <v-app :class="$style.wrapper">
    <v-main>
      <home />
    </v-main>
  </v-app>
</template>

<script setup>
import Home from "@/pages/home.vue";

</script>

<style lang="scss" scoped module>

.wrapper {
  min-width: 300px;
  width: 100%;
  height: 100%;
  min-height: 500px;
}

</style>
