import Vue from 'vue'
import Vuex from 'vuex'
import http from 'axios';


Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    galleryItems : []
  },

  mutations: {
    addItem(state, payload) {
      state.galleryItems.push(payload);
    },

    deleteItem(state) {
      state.galleryItems.pop();
    }
  },

  actions: {
    init(context) {
      return http
            .get('http://localhost:8080/gallery.json')
            .then(response => {
              for(let item of response.data) {
                context.commit('addItem', item);
              }
            });
    }
  },

  modules: {}
})
