<template lang="html">
  <div class="realtime-wrapper group">
    <div class="sessions-list">
      <div class="header">
        <h3>
          Sessioni attive <br>
          <small>utenti connessi ora</small>
        </h3>
        <i class="material-icons">refresh</i>
      </div>
      <ul>
        <li class="current">
          <svg enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M257.107,5C118.473,5,6.109,117.365,6.109,255.998C6.109,394.631,118.473,507,257.107,507  s250.998-112.37,250.998-251.002C508.105,117.365,395.74,5,257.107,5z M257.107,25.917c126.868,0,230.082,103.214,230.082,230.082  c0,55.815-19.997,107.043-53.19,146.926c-22.939-9.58-77.089-28.372-110.609-38.269c-2.859-0.898-3.309-1.042-3.309-12.94  c0-9.826,4.044-19.721,7.987-28.096c4.269-9.1,9.334-24.399,11.153-38.126c5.086-5.904,12.01-17.547,16.463-39.739  c3.901-19.559,2.083-26.677-0.51-33.357c-0.266-0.705-0.552-1.399-0.756-2.094c-0.981-4.586,0.367-28.413,3.718-46.899  c2.308-12.685-0.593-39.658-18.057-61.972c-11.03-14.105-32.131-31.416-70.675-33.826l-21.141,0.02  c-37.891,2.391-59.012,19.701-70.042,33.806c-17.464,22.315-20.364,49.288-18.056,61.963c3.37,18.495,4.698,42.322,3.738,46.816  c-0.204,0.786-0.49,1.481-0.776,2.186c-2.574,6.68-4.412,13.798-0.49,33.357c4.432,22.192,11.357,33.836,16.463,39.739  c1.798,13.726,6.864,29.026,11.153,38.126c3.125,6.659,4.596,15.718,4.596,28.525c0,11.898-0.45,12.042-3.126,12.889  c-34.663,10.234-89.834,30.17-110.404,39.178c-33.846-40.066-54.293-91.785-54.293-148.212  C27.025,129.13,130.239,25.917,257.107,25.917z M96.474,420.516c23.552-9.615,70.512-26.365,101.355-35.475  c17.935-5.658,17.935-20.763,17.935-32.896c0-10.06-0.694-24.89-6.577-37.431c-4.045-8.589-8.662-23.317-9.682-34.847  c-0.225-2.696-1.491-5.188-3.534-6.965c-2.962-2.595-8.988-12.093-12.828-31.252c-3.043-15.167-1.756-18.486-0.51-21.693  c0.531-1.369,1.042-2.717,1.451-4.239c2.512-9.181-0.287-39.341-3.33-56.07c-1.327-7.272,0.347-27.933,13.951-45.337  c12.194-15.595,30.659-24.287,54.211-25.788l19.834-0.021c24.185,1.522,42.65,10.214,54.865,25.809  c13.604,17.404,15.259,38.065,13.93,45.346c-3.023,16.72-5.842,46.879-3.33,56.05c0.43,1.532,0.919,2.88,1.451,4.249  c1.247,3.206,2.533,6.526-0.49,21.693c-3.839,19.16-9.886,28.658-12.848,31.252c-2.022,1.777-3.288,4.269-3.534,6.965  c-1.001,11.53-5.617,26.258-9.661,34.847c-4.637,9.856-9.968,22.98-9.968,37.002c0,12.134,0,27.239,18.118,32.948  c29.516,8.722,76.701,24.93,101.621,34.73c-41.608,41.199-98.781,66.691-161.797,66.691  C194.664,486.084,137.981,461.042,96.474,420.516z" fill="#447fe3"/></svg>

          <div class="user-name">
            Utente 938
          </div>
          <div class="user-status">
            Selezione camera <span class="time">3min</span>
          </div>
        </li>
        <li>
          <svg enable-background="new 0 0 512 512" height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="M257.107,5C118.473,5,6.109,117.365,6.109,255.998C6.109,394.631,118.473,507,257.107,507  s250.998-112.37,250.998-251.002C508.105,117.365,395.74,5,257.107,5z M257.107,25.917c126.868,0,230.082,103.214,230.082,230.082  c0,55.815-19.997,107.043-53.19,146.926c-22.939-9.58-77.089-28.372-110.609-38.269c-2.859-0.898-3.309-1.042-3.309-12.94  c0-9.826,4.044-19.721,7.987-28.096c4.269-9.1,9.334-24.399,11.153-38.126c5.086-5.904,12.01-17.547,16.463-39.739  c3.901-19.559,2.083-26.677-0.51-33.357c-0.266-0.705-0.552-1.399-0.756-2.094c-0.981-4.586,0.367-28.413,3.718-46.899  c2.308-12.685-0.593-39.658-18.057-61.972c-11.03-14.105-32.131-31.416-70.675-33.826l-21.141,0.02  c-37.891,2.391-59.012,19.701-70.042,33.806c-17.464,22.315-20.364,49.288-18.056,61.963c3.37,18.495,4.698,42.322,3.738,46.816  c-0.204,0.786-0.49,1.481-0.776,2.186c-2.574,6.68-4.412,13.798-0.49,33.357c4.432,22.192,11.357,33.836,16.463,39.739  c1.798,13.726,6.864,29.026,11.153,38.126c3.125,6.659,4.596,15.718,4.596,28.525c0,11.898-0.45,12.042-3.126,12.889  c-34.663,10.234-89.834,30.17-110.404,39.178c-33.846-40.066-54.293-91.785-54.293-148.212  C27.025,129.13,130.239,25.917,257.107,25.917z M96.474,420.516c23.552-9.615,70.512-26.365,101.355-35.475  c17.935-5.658,17.935-20.763,17.935-32.896c0-10.06-0.694-24.89-6.577-37.431c-4.045-8.589-8.662-23.317-9.682-34.847  c-0.225-2.696-1.491-5.188-3.534-6.965c-2.962-2.595-8.988-12.093-12.828-31.252c-3.043-15.167-1.756-18.486-0.51-21.693  c0.531-1.369,1.042-2.717,1.451-4.239c2.512-9.181-0.287-39.341-3.33-56.07c-1.327-7.272,0.347-27.933,13.951-45.337  c12.194-15.595,30.659-24.287,54.211-25.788l19.834-0.021c24.185,1.522,42.65,10.214,54.865,25.809  c13.604,17.404,15.259,38.065,13.93,45.346c-3.023,16.72-5.842,46.879-3.33,56.05c0.43,1.532,0.919,2.88,1.451,4.249  c1.247,3.206,2.533,6.526-0.49,21.693c-3.839,19.16-9.886,28.658-12.848,31.252c-2.022,1.777-3.288,4.269-3.534,6.965  c-1.001,11.53-5.617,26.258-9.661,34.847c-4.637,9.856-9.968,22.98-9.968,37.002c0,12.134,0,27.239,18.118,32.948  c29.516,8.722,76.701,24.93,101.621,34.73c-41.608,41.199-98.781,66.691-161.797,66.691  C194.664,486.084,137.981,461.042,96.474,420.516z" fill="#447fe3"/></svg>
          <div class="user-name">
            Utente 939
          </div>
          <div class="user-status">
            Servizi aggiuntivi <span class="time">1min</span>
          </div>
        </li>
      </ul>
    </div>
    <div class="session-data">
      <div class="header">
        <h3>
          Sessione Utente 938 <br>
          <small>dettagli sessione selezionata</small>
        </h3>
      </div>

      <div class="session-infos">
        <ul class="group">
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
              2 Ad, 2 Ba, 1 Ca
            </div>
          </li>
        </ul>
      </div>
      <div class="session-room-rates">
        <div class="header">
          <h3>Camere e tariffe inviate</h3>
        </div>
        <div class="rooms-list">
          <div class="room group">
            <div class="name">
              CLASSIC EXECUTIVE <i class="material-icons view">remove_red_eye</i> <br>
              <a @click.prevent="moreRates = !moreRates"><i class="material-icons">more_horiz</i> Tariffe aggiuntive</a>
            </div>
            <div class="price">
              300,00 €
            </div>
            <div class="actions">
              <i class="material-icons">mode_edit</i>
              <i class="material-icons">flash_on</i>
            </div>
            <div class="more-rates" v-show="moreRates">
              <div class="rate group">
                <div class="name">
                  LAST SECOND RATE !! <i class="material-icons view">remove_red_eye</i> <br>
                  <span class="detail">Colazione, Pranzo, Non rimborsabile</span>
                </div>
                <div class="price">
                  150,00 €
                </div>
                <div class="actions">
                  <i class="material-icons">mode_edit</i>
                  <i class="material-icons">flash_on</i>
                </div>
              </div>

              <div class="rate group">
                <div class="name">
                  CULTURAL EXPERIENCE <i class="material-icons view">remove_red_eye</i> <br>
                  <span class="detail">Pacchetto, non rimborsabile</span>
                </div>
                <div class="price">
                  520,00 €
                </div>
                <div class="actions">
                  <i class="material-icons">mode_edit</i>
                  <i class="material-icons">flash_on</i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="session-chat">
      <div class="messages">
        <div class="message him">
          Ciao, sto cercando di prenotare la camera Classic Executive, è possibile avere uno sconto?
        </div>
        <div class="message you">
          Salve, è attiva proprio in questi giorni una campagna di sconti per le prenotazioni last minute. Utilizzando il codice
          ROMA20L è possibile accedere al 10% di sconto sulla tariffa.
        </div>
        <div class="message him">
          Ho inserito il codice sconto! Grazie mille per il supporto.
        </div>
        <div class="message you">
          di nulla! Buona giornata.
        </div>
      </div>
      <div class="chat-bar">
        <textarea name="chatbox" placeholder="Scrivi qui"></textarea>
        <button type="button" class="send"><i class="material-icons">send</i></button>
      </div>
    </div>
  </div>
</template>

<script>
import notify from 'notifyjs'
const Notificator = notify.default
export default {
  mounted () {
    if (notify.default.needsPermission) {
      notify.default.requestPermission()
    }

    setTimeout(() => {
      let not = new Notificator('Nuovo utente', {
        body: 'un nuovo utente si è connesso al bol'
      })
      not.show()
    }, 5000)
  },
  data () {
    return {
      moreRates: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.realtime-wrapper{
  height: 100%;
  hr.divider{
    border: 0;
    border-bottom: 1px solid $light-gray;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .sessions-list, .session-data, .session-chat{
    float: left;
    height: 100%;
    .header{
      padding: 1.5em;
      position: relative;
      i{
        position: absolute;
        top: 50%;
        font-size: 25px;
        margin-top: -12.5px;
        right: 1em;
        color: $primary;
        transition: all 0.4s ease-in-out;
        cursor: pointer;
        &:hover{
          transform: rotate(360deg);
        }
      }
      h3{
        margin: 0;
      }
    }
  }
  .sessions-list{
    width: 25%;
    background: #E1EAF5;
    box-shadow: inset -3px 0px 5px rgba(6,58,123,0.1);
    > ul {
      padding: 0;
      margin: 0;
      list-style: none;
      padding: 1.5em;
      padding-top: 0;
      li {
        position: relative;
        padding: 1em;
        padding-left: 80px;
        cursor: pointer;
        background: #FFF;
        border-radius: 4px;
        margin-bottom: 15px;
        box-shadow: $card-shadow;
        &.current{
          background: $primary;
          color: #FFF;
          path{
            fill: white;
          }
          .user-name{
            color: #FFF;
          }
          .user-status{
            color: #FFF;
            span.time{
              color: rgba(255, 255, 255, 0.8);
            }
          }
        }
        svg{
          width: 40px;
          height: auto;
          position: absolute;
          left: 1em;
        }
        .user-name{
          font-weight: 600;
          color: $primary;
          font-size: 1.1em;
        }
        .user-status{
          font-size: 0.9em;
          span.time{
            float: right;
            color: $gray;
          }
        }
      }
    }
  }
  .session-data{
    width: 49%;
    padding-top: 1.5em;
    .header{
      padding: 0;
      padding-left: 2em;
      padding-right: 2em;
    }
    .session-infos{
      border-bottom: 1px solid #E1EAF5;
      ul{
        list-style: none;
        padding-left: 2em;
        padding-right: 2em;
        li{
          float: left;
          padding-right: 2em;
        }
      }
    }
    .session-room-rates{
      .rooms-list{
        .room{
          background: #FFF;
        }
      }
    }
  }
  .session-chat{
    width: 26%;
    padding: 1.5em;
    background: $light-gray;
    box-shadow: inset 3px 0px 5px rgba(44, 55, 68, 0.1);
    position: relative;
    z-index: 2;
    .messages{
      .message{
        border-radius: 6px;
        padding: 0.7em;
        width: 90%;
        box-shadow: $card-shadow;
        margin-bottom: 20px;
        &.you{
          background: $primary;
          float: right;
          color: #FFF;
        }
        &.him{
          background: #FFF;
          float: left;
        }
      }
    }
    .chat-bar{
      box-shadow: inset 3px -1px 5px rgba(44, 55, 68, 0.1);
      position: absolute;
      background: $link-header;
      padding: 20px;
      height: 80px;
      bottom: 0;
      left: 0;
      width: 100%;
      z-index: -1;
      textarea{
        border: 0;
        border-radius: 5px;
        width: 80%;
        height: 40px;
        font-size: 1em;
        font-family: 'Open Sans', sans-serif;
        padding-left: 0.5em;
        float: left;
        &:focus{
          outline: 0;
        }
      }
      .send{
        float: left;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: $primary;
        float: right;
        color: #FFF;
        i{
          font-size: 20px;
          vertical-align: middle;
        }
      }
    }
  }
}
</style>
