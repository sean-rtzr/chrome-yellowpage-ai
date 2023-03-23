<template>
  <v-text-field v-model="url" placeholder="https://" @input="updateURL" clearable>
  </v-text-field>
</template>

<script setup>
import {ref} from "vue";
import {useStore} from "vuex";
import axios from "axios";
import {descriptionFromAI} from "@/utils/openai.js";

const url = ref("")
const store = useStore();

const updateURL = async () => {
  if(!url.value.includes('http')) {
    url.value= `https://${url.value}`
  }
  await axios.get(`https://api.vavava.co.kr/getHTML?url=${url.value}`)
      .then(async (res) => {
        const description = await descriptionFromAI(res.data.description)
        await store.dispatch('showPopup', true);
        await store.dispatch('url', res.data.canonical);
        await store.dispatch('title', res.data.title);
        await store.dispatch('description', description);
      })

}

</script>

<style lang="scss" scoped>

</style>
