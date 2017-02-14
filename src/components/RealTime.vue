<template lang="html">
  <div class="realtime-wrapper fheight">
    <chat v-if="chatActive" :active="chatActive" v-on:close-chat="chatActive = false"></chat>
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
import SessionList from './SessionList'
import SessionDetail from './SessionDetail'
import Chat from './Chat'
import ermFirebase from '../ermFirebase.js'

export default {
  beforeCreate () {
    ermFirebase.setup()
  },
  components: {
    SessionList,
    SessionDetail,
    Chat
  },
  data () {
    return {
      moreRates: false,
      chatActive: false
    }
  },
  methods: {
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
