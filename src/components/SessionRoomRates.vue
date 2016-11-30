<template lang="html">
  <div class="room-rates-wrapper">
    <div class="room group" v-for="room in rooms">
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
            <i class="material-icons" @click="editroom(room.id, room.rates[0].id)">mode_edit</i>
            <i class="material-icons" @click="blinkroom(room.id)">flash_on</i>
          </div>
        </div>
      </div>
      <div class="more-rates" v-for="rate in room.rates" v-show="showRates">
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
                <i class="material-icons" @click="editroom(room.id, rate.id)">mode_edit</i>
                <i class="material-icons">flash_on</i>
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
      this.$prompt('Inserisci il nuovo valore per la tariffa', 'Override', {
        confirmButtonText: 'Invia',
        cancelButtonText: 'Annulla'
      }).then(value => {
        this.socket.emit('new-room-rate', {
          sessionid: this.session.id,
          roomid: roomid,
          rateid: rateid,
          price: value
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
