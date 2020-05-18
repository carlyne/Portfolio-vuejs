import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    galleryItems : [
      {
        id: 1,
        category: 'projet',
        title: 'projet 01',
        srcImg : "https://i.postimg.cc/yNM9ph4Y/etiquette.jpg"
      },
      {
        id: 2,
        category: 'illus',
        title: 'illus 01',
        srcImg : "https://i.postimg.cc/tJ5xgL1Y/02.jpg"
      },
      {
        id: 3,
        category: 'projet',
        title: 'projet 02',
        srcImg : "https://i.postimg.cc/yNM9ph4Y/etiquette.jpg"
      },
      {
        id: 4,
        category: 'experimentation',
        title: 'experimentation 01',
        srcImg: "https://i.postimg.cc/qMJKFMYn/01.jpg"
      },
      {
        id: 5,
        category: 'projet',
        title: 'projet 03',
        srcImg : "https://i.postimg.cc/yNM9ph4Y/etiquette.jpg"
      },
      {
        id: 6,
        category: 'illus',
        title: 'illus 02',
        srcImg : "https://i.postimg.cc/tJ5xgL1Y/02.jpg"
      },
      {
        id: 7,
        category: 'experimentation',
        title: 'experimentation 02',
        srcImg: "https://i.postimg.cc/qMJKFMYn/01.jpg"
      },
      {
        id: 8,
        category: 'projet',
        title: 'projet 04',
        srcImg : "https://i.postimg.cc/yNM9ph4Y/etiquette.jpg"
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
