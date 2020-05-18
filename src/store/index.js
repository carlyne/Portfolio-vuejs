import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    galleryItems : [
      {
        id: 1,
        category: 'projet',
        title: 'projet 01'
      },
      {
        id: 2,
        category: 'illus',
        title: 'illus 01'
      },
      {
        id: 3,
        category: 'projet',
        title: 'projet 02'
      },
      {
        id: 4,
        category: 'experimentation',
        title: 'experimentation 01'
      },
      {
        id: 5,
        category: 'projet',
        title: 'projet 03'
      },
      {
        id: 6,
        category: 'illus',
        title: 'illus 02'
      },
      {
        id: 7,
        category: 'experimentation',
        title: 'experimentation 02'
      },
      {
        id: 8,
        category: 'projet',
        title: 'projet 04'
      },
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
