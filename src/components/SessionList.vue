<template lang="html">
  <div class="session-list-wrapper">
    <div class="sessions-header">
      <div class="valign-wrapper">
        <div class="valign">
          <h4>
            Sessioni attive <br>
            <small>utenti connessi al bol in tempo reale</small>
          </h4>
        </div>
      </div>
    </div>
    <session v-for="session in sessions" :session="session"></session>
  </div>
</template>

<script>
import notify from 'notifyjs'
import Session from './Session'
import ermFirebase from '../ermFirebase.js'
import {mapGetters} from 'vuex'
const Notificator = notify.default
export default {
  components: {
    Session
  },
  mounted () {
    if (notify.default.needsPermission) {
      notify.default.requestPermission()
    }
    ermFirebase.sessionRef.on('child_added', (snapshot) => {
      let not = new Notificator('Nuovo utente', {
        body: 'un nuovo utente si è connesso al bol'
      })
      not.show()
    })
  },
  firebase () {
    return {
      sessions: ermFirebase.sessionRef
    }
  },
  computed: {
    ...mapGetters([
      'getUser',
      'getUserData'
    ])
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.session-list-wrapper{
  .sessions-header{
    height: 70px;
    z-index: 2;
    position: relative;
    padding-left: 1em;
    padding-right: 1em;
    color: $primary;
    font-weight: 600;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    h4{
      margin: 0;
      line-height: 16px;
      small{
        font-weight: 400;
        color: $silver;
      }
    }
  }
}
</style>
