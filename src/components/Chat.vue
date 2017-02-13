<template lang="html">
  <div class="chat-wrapper" :class="{ active: active }">
    <div class="header">
      <div class="avatar">
        <img src="../assets/wolf.jpg" alt="" />
      </div>
      <div class="name">
        <div class="valign-wrapper">
          <div class="valign">
            Mr. Wolf
            <div class="status">
              il supporto è online
            </div>
          </div>
        </div>
      </div>
      <div class="close" @click="close">
        <i class="material-icons">close</i>
      </div>
    </div>
    <div class="messages group" id="messages" v-if="session">
        <div class="message" :class="{ me: msg.from === 'back', him: msg.from === 'front' }" v-for="msg in messages">
          <span class="text">{{msg.message}}</span>
        </div>
      </div>
      <div class="chat-bar">
        <div class="area" v-on:keyup.enter="sendMessage">
          <el-input type="textarea" v-model="message" :autosize="{ minRows: 1, maxRows: 5}" placeholder="Scrivi il messaggio"></el-input>
        </div>
        <div class="send" @click="sendMessage">
          <div class="button">
            <i class="material-icons">send</i>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
import firebase from '../api/firebase.js'
import localStorage from 'localStorage'
export default {
  data () {
    return {
      message: ''
    }
  },
  firebase () {
    return {
      messages: firebase.db.ref(`${localStorage.getItem('hotel')}/sessions/${this.session['.key']}/chat`)
    }
  },
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    ...mapGetters({
      session: 'selectedSession'
    })
  },
  watch: {
    'session.chat': () => {
      setTimeout(() => {
        const messages = document.getElementById('messages')
        messages.scrollTop = messages.scrollHeight
      }, 100)
    }
  },
  methods: {
    ...mapMutations([
      'pushMessage'
    ]),
    close () {
      this.$emit('close-chat')
    },
    sendMessage () {
      let msg = {
        message: this.message,
        from: 'back'
      }
      this.$firebaseRefs.messages.push(msg)
      this.message = ''
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.chat-wrapper{
  position: absolute;
  border-right: 1px solid #E5E9F2;
  height: 100%;
  width: 33.33333%;
  background: #f2f8ff;
  background-image: url('../assets/chatbg.png');
  background-position: center;
  background-size: 100%;
  background-repeat: repeat;
  z-index: 10;
  left: -50%;
  transition: all 0.5s ease-in-out;
  overflow: hidden;
  &.active{
    left: 0;
  }
  .header{
    background: #FFF;
    height: 10%;
    position: relative;
    z-index: 2;
    min-height: 70px;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.2);
    .avatar{
      width: 20%;
      float: left;
      line-height: 70px;
      text-align: center;
      img{
        height: 38px;
        width: 38px;
        vertical-align: middle;
        border-radius: 50%;
      }
    }
    .name{
      float: left;
      width: 70%;
      text-align: center;
      color: $primary;
      font-size: 1em;
      line-height: 18px;
      font-weight: 600;
      height: 100%;
      .status{
        font-weight: 400;
        color: #d6d6d6;
        font-size: 0.9em;
      }
    }
    .close{
      float: left;
      width: 10%;
      height: 100%;
      line-height: 50px;
      cursor: pointer;
      i{
        vertical-align: middle;
        color: $primary;
      }
    }
  }
  .messages{
    padding: 1em;
    position: relative;
    overflow-y: auto;
    height: 80%;
    width: 100%;
    z-index: 1;
    .message{
      margin-bottom: 10px;
      .text{
        border-radius: 32px;
        padding: 0.5em;
        font-size: 0.8em;
        padding-left: 1.5em;
        padding-right: 1.5em;
        display: inline-block;
      }
      &.him{
        .text{
          background: $primary;
          color: #FFF;
        }
      }
      &.me{
        text-align: right;
        .text{
          background: #FFF;
          box-shadow: 0 1px 2px rgba(185, 193, 204, 0.4), 0 1px 2px rgba(185, 193, 204, 0.05);
        }
      }
    }
  }
  .chat-bar{
    position: absolute;
    background: #FFF;
    padding: 0.5em;
    width: 100%;
    height: 10%;
    bottom: 0;
    left: 0;
    border-bottom-left-radius: 3px;
    border-bottom-right-radius: 3px;
    .area{
      float: left;
      width: 85%;
    }
    .send{
      float: left;
      width: 15%;
      .button{
        background: $primary;
        text-align: center;
        float: right;
        border-radius: 50%;
        line-height: 26px;
        width: 30px;
        height: 30px;
        i{
          vertical-align: middle;
          color: #FFF;
          font-size: 15px;
          line-height: 15px;
        }
      }
    }
    .el-textarea__inner{
      border: 0;
    }
  }
}
</style>
