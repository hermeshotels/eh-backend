<template lang="html">
  <page icon="info_outline" class="detail-wrapper">
    <div slot="header">
      <h1>
        Dettaglio Sessione <br>
        <small>gestisci la sessione in tempo reale</small>
      </h1>
    </div>
    <div slot="content">

      <div class="no-session" v-if="session === null">
        <div class="valign-wrapper">
          <div class="valign">
            <img src="../assets/ops.svg" alt="" />
            <h1>
              Oopss... <br>
              <small>non hai selezionato nessuna sessione dal menù qui a sinistra! <br>
                 Se non ci sono sessioni disponibili sii paziente, presto arriveranno e ti avviseremo!</small>
            </h1>
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
            <el-button @click="chat" type="primary" style="margin-bottom: 20px;">Avvia Chat</el-button>
          </el-col>
        </el-row>

        <el-row class="data">
          <el-col :span="24">
            <div class="session-info group">
              <ul v-show="session.params">
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

              <div class="no-params" v-show="!session.params">
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
            <session-room-rates v-show="session.rooms.length > 0" :rooms="session.rooms"></session-room-rates>
            <div class="no-params" v-show="session.rooms.length <= 0">
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
export default {
  components: {
    SessionRoomRates,
    Page
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
    chat () {
      this.$emit('start-chat')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.detail-wrapper{
  height: 100%;
  .no-session{
    padding-top: 3em;
    text-align: center;
    img{
      width: 110px;
      height: auto;
    }
    h1{
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
