const state = {
  sessions: [],
  socket: null,
  selectedSession: null
}

const mutations = {
  setSession (state, session) {
    state.selectedSession = session
  },
  setSocket (state, socket) {
    state.socket = socket
  },
  pushSession (state, session) {
    console.log('session push')
    state.sessions.push(session)
  },
  removeSession (state, id) {
    for (let i = 0; i < state.sessions.length; i++) {
      if (state.sessions[i].id === id) {
        state.sessions.splice(i, 1)
        break
      }
    }
  }
}

export default {
  state,
  mutations
}
