const state = {
  sessions: []
}

const mutations = {
  pushSession (state, session) {
    state.sessions.push(session)
  },
  removeSession (state, session) {
    var index = state.sessions.indexOf(session)
    if (session > -1) {
      state.sessions.splice(index, 0)
    }
  }
}

export default {
  state,
  mutations
}
