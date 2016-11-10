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
import Session from './Session'
import { mapGetters } from 'vuex'
export default {
  components: {
    Session
  },
  computed: {
    ...mapGetters({
      sessions: 'getAllSessions'
    })
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.session-list-wrapper{
  .sessions-header{
    height: 70px;
    padding-left: 1em;
    padding-right: 1em;
    color: $primary;
    font-weight: 600;
    border-bottom: 1px solid $light-gray;
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
