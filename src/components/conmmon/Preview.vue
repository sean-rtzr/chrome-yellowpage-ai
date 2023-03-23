<template>
  <v-form @submit.prevent="save">
    <v-sheet :class="$style.preview" elevation="9">
      <v-label class="ml-1 mb-2">Title</v-label>
      <v-text-field single-line density="compact" v-model="title" placeholder="Title" variant="outlined"></v-text-field>
      <v-label class="ml-1 mb-2">Description</v-label>
      <v-text-field single-line density="compact" v-model="description" placeholder="Description"
                    variant="outlined"></v-text-field>
      <v-btn type="submit" variant="flat" color="black" class="text-body-2 font-weight-bold">Save</v-btn>
    </v-sheet>
  </v-form>

</template>

<script setup>
import {computed, reactive} from "vue";
import {useStore} from "vuex";
import {categoryFromAI} from "@/utils/openai.js";

const store = useStore();
const url = reactive(computed(() => store.getters.url));
const title = reactive(computed(() => store.getters.title));
const description = reactive(computed(() => store.getters.description))
const lists = reactive(computed(() => store.getters.lists));
const save = async () => {
  const category = await categoryFromAI(url.value)
  const categories = lists.value.flatMap(Object.keys);
  const isExisted = categories.includes(category);
  const colors = ["blue", "red", "purple", "black", "grey"]
  const randColor = colors[Math.floor(Math.random() * colors.length)];
  if (isExisted) {
    const newList = {
      title: title.value,
      description: description.value,
      url: url.value,
      color: randColor,
    }
    let newLists = [].concat(lists.value);
    newLists.map(list => Object.keys(list)[0] === category ? list[category].unshift(newList) : '')
    await store.dispatch('lists', newLists);
    await store.dispatch('showPopup', false);
  } else {
    const newList = {
      [category]: [{
        title: title.value,
        description: description.value,
        url: url.value,
        color: randColor,
      }]
    }
    const newLists = [newList, ...lists.value];
    await store.dispatch('lists', newLists);
    await store.dispatch('showPopup', false);
  }
}
</script>

<style lang="scss" scoped module>

.preview {
  position: absolute;
  left: 50%;
  top: 120px;
  transform: translateX(-50%);
  width: 100%;
  padding: 20px 12px;

}

</style>
