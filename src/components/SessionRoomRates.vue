<template lang="html">
  <div class="room-rates-wrapper">
    <div class="room group" v-for="(room, roomIndex) in rooms">
      <div class="detail">
        <div class="valign-wrapper">
          <div class="valign">
            <span class="name">{{room.name}}</span> <br>
            <a @click.prevent="showRates = !showRates"><i class="material-icons">expand_more</i> Tariffe aggiuntive</a>
          </div>
        </div>
      </div>
      <div class="actions">
        <div class="valign-wrapper">
          <div class="valign">
            <span class="price">{{room.rates[0].price}}</span>
            <i class="material-icons" @click="editroom(roomIndex, 0)">mode_edit</i>
          </div>
        </div>
      </div>
      <div class="more-rates" v-for="(rate, rateIndex) in room.rates" v-show="showRates">
        <div class="rate group">
          <div class="detail">
            <div class="valign-wrapper">
              <div class="valign">
                <span class="name">{{rate.name}}</span> <br>
                <span class="includes">{{rate.shortDescription}}</span>
              </div>
            </div>
          </div>
          <div class="actions">
            <div class="valign-wrapper">
              <div class="valign">
                <span class="price">{{rate.price}} €</span>
                <i class="material-icons" @click="editroom(roomIndex, rateIndex)">mode_edit</i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import firebase from '../api/firebase.js'
import localStorage from 'localStorage'
export default {
  data () {
    return {
      showRates: false
    }
  },
  computed: {
    ...mapGetters({
      socket: 'getSocket',
      session: 'selectedSession'
    })
  },
  methods: {
    blinkroom (roomid) {
      console.log('room-blinked backend')
      this.socket.emit('blink-room', {
        id: '121',
        roomid: roomid
      })
    },
    editroom (roomid, rateid) {
      this.$prompt('Inserisci il nuovo valore per notte', 'Override', {
        confirmButtonText: 'Invia',
        cancelButtonText: 'Annulla'
      }).then(value => {
        let count = 0
        let rate = firebase.db.ref(`${localStorage.getItem('hotel')}/sessions/${this.session['.key']}/rooms/${roomid}/rates/${rateid}`)
        rate.child('prices').once('value').then((snap) => {
          var updates = {}
          snap.forEach((child) => {
            updates[child.key + '/price'] = parseFloat(value.value)
            count++
          })
          rate.child('prices').update(updates)
          rate.update({
            price: parseFloat(value.value * count)
          })
        })
      })
    }
  },
  props: {
    rooms: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/imports.scss';
.room-rates-wrapper{
  .room{
    background: #FFF;
    border-radius: 4px;
    box-shadow: $card-shadow-2;
    margin-bottom: 15px;
    .detail, .actions{
      float: left;
      height: 70px;
      padding-left: 1em;
      padding-right: 1em;
    }
    .detail{
      width: 60%;
      line-height: 23px;
      span.name{
        font-weight: 600;
        color: $primary;
      }
      a{
        color: $silver;
        transition: color 0.4s ease-in-out;
        cursor: pointer;
        &:hover{
          color: $primary;
        }
      }
    }
    .actions{
      width: 40%;
      text-align: right;
      .price{
        font-weight: 600;
        font-size: 1.4em;
        margin-right: 30px;
        color: $extra-light-black;
      }
      i{
        font-size: 20px;
        vertical-align: middle;
        color: $silver;
        transition: color 0.4s ease-in-out;
        cursor: pointer;
        &:hover{
          color: $primary;
        }
      }
    }
    .more-rates{
      width: 100%;
      float: left;
      background: $extra-light-gray;
      border-top: 1px solid $light-gray;
      .rate{
        height: 60px;
        .detail{
          height: 100%;
        }
      }
      .actions{
        height: 60px;
      }
    }
  }
}
</style>
