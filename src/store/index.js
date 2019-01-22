import Vue from 'vue'
import Vuex from 'vuex'
import router from './modules/router'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    router
  }
}) 
