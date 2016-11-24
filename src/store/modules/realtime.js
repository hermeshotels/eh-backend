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
  setSessionParams (state, searchParams) {
    // trovo la sessione desiderata
    for (let i = 0; i < state.sessions.length; i++) {
      if (state.sessions[i].id === searchParams.sessionid) {
        state.sessions[i].params = true
        state.sessions[i].startDate = searchParams.startDate
        state.sessions[i].endDate = searchParams.endDate
      }
    }
  },
  setSessionRooms (state, roomList) {
    for (let i = 0; i < state.sessions.length; i++) {
      if (state.sessions[i].id === roomList.sessionid) {
        state.sessions[i].rooms = roomList.rooms
      }
    }
  },
  removeSession (state, sessionid) {
    for (let i = 0; i < state.sessions.length; i++) {
      if (state.sessions[i].id === sessionid) {
        state.sessions.splice(i, 1)
      }
    }
  },
  pushMessage (state, message) {
    console.log(message)
    for (let i = 0; i < state.sessions.length; i++) {
      if (state.sessions[i].id === message.sessionid) {
        state.sessions[i].chat.push(message)
      }
    }
  }
}

export default {
  state,
  mutations
}
