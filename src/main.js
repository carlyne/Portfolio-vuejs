import Vue from 'vue'
import App from './views/app/App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,

  created() {
    this.$store.dispatch('init');
    console.log('created store');
  },

  render: h => h(App)
}).$mount('#app')
