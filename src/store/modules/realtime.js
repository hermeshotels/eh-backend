const state = {
  sessions: []
}

const mutations = {
  pushSession (state, session) {
    console.log('session push')
    state.sessions.push(session)
  },
  removeSession (state, id) {
    state.sessions = state.sessions.filter((session) => {
      return session.id !== id
    })
  }
}

export default {
  state,
  mutations
}
