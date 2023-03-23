<template>
  <v-toolbar color="black">
      <v-list min-width="100%" width="100%" class=" bg-transparent">
        <v-list-item>
          <template v-slot:prepend>
            <v-icon class="mdi mdi-link"></v-icon>
          </template>
          <template v-slot:title>
            <h1 class="text-body-1 font-weight-bold">Bookmarks</h1>
          </template>
          <template v-slot:subtitle>
            <p>Auto organizer with AI</p>
          </template>
        </v-list-item>
      </v-list>
  </v-toolbar>
  <add />
  <list />
  <preview v-if="showPopup" />
</template>

<script setup>
import Add from "@/components/top/Add.vue";
import Preview from "@/components/conmmon/Preview.vue";
import {useStore} from "vuex";
import {computed, reactive} from "vue";
import List from "@/components/body/List.vue";
const store = useStore();

const showPopup = reactive(computed(() => store.getters.show))
</script>

<style lang="scss" scoped>

</style>
