import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    project : [
      {
        id: 1,
        title: "Projet 1"
      }, 
      {
        id: 2,
        title: "Projet 2"
      } 
    ],

    illus : [
      {
        id: 3,
        title: "illus 1"
      }
    ],

    experiment : []
  },

  getters: {
    getProjectLength : state => {
      return state.project.length;
    },
    getIllusLenght : state => {
      return state.illus.length;
    },
    getExperimentLength : state => {
      return state.experiment.length;
    },
    getAllElements: state => {
      return [].concat(state.project, state.illus, state.experiment);
    },

    getTotalLength : (state, getters)=> {
      return getters.getProjectLength + getters.getIllusLenght + getters.getExperimentLength;
    }
  },
  
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
