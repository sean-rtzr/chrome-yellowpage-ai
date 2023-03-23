import { createStore } from 'vuex'

export default createStore({
  state: {
    show: false,
    url: "",
    title: "",
    description: "",
    lists: [],
  },
  getters: {
    show: (state) => state.show,
    url: (state) => state.url,
    title: (state) => state.title,
    description: (state) => state.description,
    lists: (state) => state.lists

  },
  mutations: {
    showPopup: (state, flag) => state.show = flag,
    setURL: (state, url) => state.url = url,
    setTitle: (state, title) => state.title = title,
    setDescription: (state, description) => state.description = description,
    setLists: (state, lists) => state.lists = lists
  },
  actions: {
    showPopup: (context, flag) => context.commit('showPopup', flag),
    url: (context, url) => context.commit('setURL', url),
    title: (context, title) => context.commit('setTitle', title),
    description: (context, description) => context.commit('setDescription', description),
    lists: (context, lists) => context.commit('setLists', lists)
  }
})
