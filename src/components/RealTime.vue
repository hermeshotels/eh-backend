<template lang="html">
  <div class="realtime-wrapper fheight">
    <chat :active="chatActive" v-on:close-chat="chatActive = false"></chat>
    <el-row class="fheight">
      <el-col class="sessions-list fheight" :span="8">
        <session-list></session-list>
      </el-col>
      <el-col :span="16" class="fheight">
        <session-detail v-on:start-chat="showChat()"></session-detail>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import notify from 'notifyjs'
import SessionList from './SessionList'
import SessionDetail from './SessionDetail'
import config from '../assets/config'
import Chat from './Chat'
import { mapGetters, mapMutations } from 'vuex'
import io from 'socket.io-client'
const Notificator = notify.default

export default {
  components: {
    SessionList,
    SessionDetail,
    Chat
  },
  mounted () {
    this.setSocket(io(config.API_URL))

    if (notify.default.needsPermission) {
      notify.default.requestPermission()
    }

    const sessionid = Math.floor((Math.random() * 100) + 1)
    this.socket.emit('new-back-session', {
      'sessionid': sessionid,
      'roomkey': 'sdadq'
    })

    this.socket.on('new-bol-session', (sessionData) => {
      // Notifico la nuova connessione al browser
      let not = new Notificator('Nuovo utente', {
        body: 'un nuovo utente si è connesso al bol'
      })
      not.show()

      // Salvo la nuova connessione in locale per uso futuro
      this.pushSession({
        id: sessionData.sessionid,
        username: 'Anonimo',
        status: 'Selezione',
        time: new Date(),
        startDate: null,
        endDate: null,
        params: false,
        rooms: [],
        chat: []
      })
    })

    this.socket.on('room-search', (searchParams) => {
      console.log('setting session parameters')
      this.setSessionParams(searchParams)
    })

    this.socket.on('rooms-list', (roomList) => {
      this.setSessionRooms(roomList)
    })

    this.socket.on('disconnected', (sessionid) => {
      this.removeSession(sessionid)
    })

    this.socket.on('new-message', (message) => {
      this.pushMessage(message)
    })
  },
  data () {
    return {
      moreRates: false,
      chatActive: false
    }
  },
  computed: {
    ...mapGetters({
      sessions: 'getAllSessions',
      socket: 'getSocket'
    })
  },
  methods: {
    ...mapMutations([
      'pushSession',
      'removeSession',
      'setSocket',
      'setSessionParams',
      'setSessionRooms',
      'pushMessage'
    ]),
    showChat () {
      this.chatActive = true
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.realtime-wrapper{
  position: relative;
  .sessions-list{
    background: #FFF;
    border-right: 1px solid $light-gray;
    overflow-y: hidden;
  }
}
</style>
