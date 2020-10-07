import Vue from 'vue'
import Vuex from 'vuex'
import app from './modules/app'
import persistedState from 'vuex-persistedstate'
Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    persistedState({ storage: window.sessionStorage })
  ],
  modules: {
    app
  }
})

export default store
