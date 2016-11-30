import userService from '../../api/user.js'

const state = {
  user: null,
  auth: false,
  registerError: false,
  registrationSuccess: false
}

const mutations = {
  loginError (state) {
    state.auth = false
    state.user = null
  },
  loginSuccess (state, data) {

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
    userService.register(payload, (error, data) => {
      if (error) {
        commit('registerError')
      } else {
        commit('registerSuccess', data)
      }
    })
  }
}

export default {
  state,
  mutations,
  actions
}
