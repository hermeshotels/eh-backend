<template lang="html">
  <page icon="info_outline" class="detail-wrapper">
    <div slot="header">
      <h1>
        Dettaglio Sessione <br>
        <small>gestisci la sessione in tempo reale</small>
      </h1>
      <div class="chat-status" style="position: absolute; right: 30px; top: 30%;">
        Stato Chat
        <el-switch
          v-model="chat"
          on-text="live"
          off-text="off">
        </el-switch>
      </div>
    </div>
    <div slot="content">

      <div class="no-session" v-if="session === null">
        <div class="valign-wrapper">
          <div class="valign">
            <img src="../assets/ops.svg" alt="" />
            <h3>
              Oopss... <br>
              <small>non hai selezionato nessuna sessione dal menù qui a sinistra! <br>
                 Se non ci sono sessioni disponibili sii paziente, presto arriveranno e ti avviseremo!</small>
            </h3>
          </div>
        </div>
      </div>

      <div class="session-info" v-if="session">

        <el-row>
          <el-col :span="24">
            <h4>
              Dettaglio permanenza <br>
              <small>parametri di ricerca dell'utente</small>
            </h4>
            <el-button @click="openchat" type="primary" style="margin-bottom: 20px;">Avvia Chat</el-button>
          </el-col>
        </el-row>

        <el-row class="data">
          <el-col :span="24">
            <div class="session-info group">
              <ul v-show="session.filters">
                <li>
                  <div class="label">
                    ARRIVO
                  </div>
                  <div class="value">
                    {{fromDate}}
                  </div>
                </li>
                <li>
                  <div class="label">
                    PARTENZA
                  </div>
                  <div class="value">
                    {{toDate}}
                  </div>
                </li>
                <li>
                  <div class="label">
                    OSPITI
                  </div>
                  <div class="value">
                    2 Ad, 0 Bm, 1 Camera
                  </div>
                </li>
              </ul>

              <div class="no-params" v-show="!session.filters">
                L'utente non ha ancora impostato i parametri di ricerca.
              </div>
            </div>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="24">
            <h4>
              Elenco camere e tariffe <br>
              <small>elenco delle camere e tariffe inviate</small>
            </h4>
          </el-col>
        </el-row>

        <el-row class="data">
          <el-col :span="24">
            <div v-if="session.rooms">
              <session-room-rates v-show="session.rooms.length > 0" :rooms="session.rooms"></session-room-rates>
            </div>
            <div class="no-params" v-if="session.rooms" v-show="session.rooms.length <= 0">
              L'utente non ha ancora ricevuto un elenco di offerte
            </div>
          </el-col>
        </el-row>

      </div>

    </div>
  </page>
</template>

<script>
import moment from 'moment'
import Page from './Page'
import SessionRoomRates from './SessionRoomRates'
import { mapGetters } from 'vuex'
import firebase from '../api/firebase.js'
import localStorage from 'localStorage'
export default {
  components: {
    SessionRoomRates,
    Page
  },
  data () {
    return {
      chat: false
    }
  },
  mounted () {
    firebase.db.ref(localStorage.getItem('hotel')).once('value').then((snap) => {
      this.chat = snap.val().chat
    })
  },
  watch: {
    'chat': function (chatStatus) {
      if (chatStatus) {
        firebase.db.ref(localStorage.getItem('hotel')).update({
          chat: true
        })
      } else {
        firebase.db.ref(localStorage.getItem('hotel')).update({
          chat: false
        })
      }
    }
  },
  computed: {
    ...mapGetters({
      session: 'selectedSession'
    }),
    fromDate: function () {
      if (this.session) {
        return moment(this.session.startDate).format('L')
      }
    },
    toDate: function () {
      if (this.session) {
        return moment(this.session.endDate).format('L')
      }
    }
  },
  methods: {
    openchat () {
      this.$emit('start-chat')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.content{
  overflow: hidden;
}
.detail-wrapper{
  height: 100%;
  overflow: auto;
  .no-session{
    padding-top: 3em;
    text-align: center;
    img{
      width: 110px;
      height: auto;
    }
    h3{
      font-size: 1.8em;
      color: $primary;
      line-height: 25px;
      small{
        font-size: 70%;
        color: $silver;
      }
    }
  }
  .session-info{
    overflow: hidden;
    h4{
      margin: 0;
      margin-bottom: 20px;
    }
    .no-params{
      color: $warning;
      font-weight: 500;
    }
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      li{
        display: inline-block;
        margin-right: 5%;
        &:last-child{
          margin-right: 0;
        }
        .label{
          color: $silver;
          font-weight: 500;
        }
        .value{
          font-size: 1.2em;
          font-weight: 300;
        }
      }
    }
  }
  .data{
    margin-bottom: 20px;
  }
}
</style>
