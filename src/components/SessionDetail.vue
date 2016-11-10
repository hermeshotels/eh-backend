<template lang="html">
  <div class="session-detail-wrapper">
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
          <h2>
            Dettagli sessione Wanny Miarelli <br>
            <small>gestisci la sessione in tempo reale</small>
          </h2>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <h4>
            Dettaglio permanenza <br>
            <small>parametri di ricerca dell'utente</small>
          </h4>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="24">
          <div class="session-info group">
            <ul v-show="session.params">
              <li>
                <div class="label">
                  ARRIVO
                </div>
                <div class="value">
                  12 Ottobre 2016
                </div>
              </li>
              <li>
                <div class="label">
                  PARTENZA
                </div>
                <div class="value">
                  13 Ottobre 2016
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

      <el-row>
        <el-col :span="24">
          <session-room-rates v-show="session.rooms.length > 0"></session-room-rates>
          <div class="no-rooms" v-show="session.rooms.length <= 0">
            L'utente non ha ancora ricevuto un elenco di offerte
          </div>
        </el-col>
      </el-row>

    </div>

  </div>
</template>

<script>
import SessionRoomRates from './SessionRoomRates'
import { mapGetters } from 'vuex'
export default {
  components: {
    SessionRoomRates
  },
  computed: {
    ...mapGetters({
      session: 'selectedSession'
    })
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.session-detail-wrapper{
  padding: 2em;
  height: 100%;
  h2{
    margin: 0;
    margin-bottom: 20px;
    line-height: 20px;
    small{
      color: $silver;
    }
  }
  h3{
    margin-bottom: 20px;
  }
  h4{
    font-size: 1.1em;
  }
  .session-info{
    margin-bottom: 20px;
    .no-params{
      font-size: 1em;
      font-weight: 500;
      color: $warning;
    }
    > ul {
      padding: 0;
      list-style: none;
      width: 100%;
      li{
        float: left;
        margin-right: 40px;
        .label{
          color: $silver;
          font-weight: 600;
        }
        .value{
          font-weight: 300;
        }
      }
    }
  }

  .no-rooms{
    font-size: 1em;
    font-weight: 500;
    color: $warning;
  }

  .no-session{
    text-align: center;
    height: 100%;
    img{
      width: 120px;
    }
    h1{
      color: $primary;
      line-height: 24px;
      small{
        font-size: 70%;
        font-weight: 400;
        color: $silver;
        margin-top: 30px;
        display: block;
      }
    }
  }
}
</style>
