<template>
  <v-list v-if="lists.length > 0">
    <v-list-item v-for="(list,i) in lists" :key="i">
      <p class="font-weight-bold text-body-1">{{ Object.keys(list)[0] }}</p>
      <v-list-item v-for="(item,j) in list[`${Object.keys(list)[0]}`]"  :key="j" @click="redirectURL(item.url)">
        <template v-slot:prepend>
          <v-avatar :color="item.color" :class="$style.avatar" class="d-flex justify-center align-center" size="small">
            <p class="text-h7 text-white pa-0 ma-0 font-weight-bold">{{ item.title.slice(0,1) }}</p>
          </v-avatar>
        </template>
        <v-list-item-title class="text-body-2 pl-6">{{item.title}}</v-list-item-title>
        <v-card-text class="text-caption text-grey pa-0 ma-0 pl-6">{{ item.description}}</v-card-text>
        <v-divider class="my-2"/>
      </v-list-item>
    </v-list-item>

  </v-list>
</template>

<script setup>
import {useStore} from "vuex";
import {computed, reactive} from "vue";

const store = useStore();
const lists = reactive(computed(() => store.getters.lists));

const redirectURL = (url) => {
  window.open(url, '_blank');
}
</script>

<style lang="scss" scoped module>
  .avatar {
    position: absolute;
    left: 0;
    top: 6px;
  }

</style>
