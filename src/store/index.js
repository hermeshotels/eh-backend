import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import realtime from './modules/realtime'
import api from './modules/api'
import auth from './modules/auth'

Vue.use(Vuex)

export default new Vuex.Store({
  getters,
  actions,
  modules: {
    realtime,
    api,
    auth
  }
})
