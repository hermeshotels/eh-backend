import firebaseApi from '../../api/firebase.js'
import localStorage from 'localStorage'

const state = {
  user: null,
  userData: null,
  auth: false,
  registerError: false,
  registrationSuccess: false
}

const getters = {
  getUser (state) {
    return state.user
  },
  getUserData (state) {
    return state.userData
  }
}

const mutations = {
  loginError (state) {
    state.auth = false
    state.user = null
  },
  setUser (state, user) {
    state.user = user
  },
  setUserData (state, data) {
    state.userData = data
    console.log(data.hotel)
    localStorage.setItem('hotel', data.hotel)
  },
  loginSuccess (state, data) {
    state.user = data
    state.auth = true
  },
  registerError (state) {
    state.auth = false
    state.user = null
    state.registerError = true
  },
  registerSuccess (state, data) {
    state.registrationSuccess = true
  }
}

const actions = {
  register ({commit, state}, payload) {
    firebaseApi.register(payload, (error, user) => {
      if (error) {
        commit('registerError')
      } else {
        commit('registerSuccess', user)
      }
    })
  },
  login ({commit}, payload) {
    firebaseApi.login(payload, (error, user) => {
      if (error) return commit('loginError')
      commit('loginSuccess', user)
    })
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
