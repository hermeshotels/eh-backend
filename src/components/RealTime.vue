<template lang="html">
  <div class="realtime-wrapper fheight">
    <el-row class="fheight">
      <el-col class="sessions-list fheight" :span="7">
        <session-list></session-list>
      </el-col>
      <el-col :span="17" class="fheight">
        <session-detail></session-detail>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import notify from 'notifyjs'
import SessionList from './SessionList'
import SessionDetail from './SessionDetail'
import { mapGetters, mapMutations } from 'vuex'
import io from 'socket.io-client'
const Notificator = notify.default

export default {
  components: {
    SessionList,
    SessionDetail
  },
  mounted () {
    this.setSocket(io('http://192.168.111.92:3000'))

    if (notify.default.needsPermission) {
      notify.default.requestPermission()
    }

    this.socket.on('new-session', (sessionData) => {
      let not = new Notificator('Nuovo utente', {
        body: 'un nuovo utente si è connesso al bol'
      })
      not.show()
      this.pushSession({
        id: '122',
        username: 'Roberto Santececca',
        status: 'Ricerca',
        time: new Date(),
        params: true,
        rooms: [1]
      })
    })

    this.socket.on('end-session', (id) => {
      this.removeSession(id)
    })
  },
  data () {
    return {
      moreRates: false
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
      'removeSession'
    ])
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.realtime-wrapper{
  .sessions-list{
    background: #FFF;
    border-right: 1px solid $light-gray;
  }
}
</style>
