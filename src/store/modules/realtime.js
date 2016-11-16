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
    state.sessions.push(session)
  },
  setSessionParams (state, params) {
    // trovo la sessione desiderata
    for (let i = 0; i < state.sessions.length; i++) {
      if (state.sessions[i].id === params.id) {
        state.sessions[i].params = true
        state.sessions[i].startDate = params.startDate
        state.sessions[i].endDate = params.endDate
      }
    }
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
