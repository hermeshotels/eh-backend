<template lang="html">
  <div class="app-header">
    <div class="expanded row">
      <div class="large-2 columns brand">
        ERMESBOL
      </div>
      <div class="large-8 columns menu">
        <ul>
          <li class="active"><a href="#">Dashboard</a></li>
          <li><a href="#">Aspetto</a></li>
          <li><a href="#">Recensioni</a></li>
          <li><a href="#">RealTime</a></li>
          <li><a href="#">Analisi</a></li>
          <li><a href="#">Supporto</a></li>
        </ul>
      </div>
      <div class="large-2 columns user">
        <div class="notifications">
          <notify></notify>
        </div>
        <div class="avatar">
          <img src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.0-9/13615420_10209956146603405_3635803650532239465_n.jpg?oh=e5cc6d2245c306bfaa854019808d0c1b&oe=58A81FEB" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Notify from './NotifyComponent'
export default {
  components: {
    Notify
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/imports.scss';
.app-header{
  background-color: #FFF;
  height: 70px;
  position: relative;
  z-index: 5;
  box-shadow: 0 3px 5px 0px rgba(33, 38, 45, 0.1);
  > .row, .columns{
    height: 100%;
  }
  .brand{
    height: 100%;
    line-height: 70px;
    color: $primary;
    font-size: 1.3em;
    font-weight: 600;
  }
  .menu{
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      text-align: center;
      li{
        line-height: 70px;
        display: inline-block;
        padding-left: 1em;
        padding-right: 1em;
        text-transform: uppercase;
        &.active{
          border-bottom: 2px solid $primary;
          a{
            color: $primary;
          }
        }
        a{
          color: $link-header;
          transition: all 0.5s ease-in-out;
          &:hover{
            color: $primary;
          }
        }
      }
    }
  }
  .user{
    height: 100%;
    .avatar{
      float: left;
      width: 20%;
      height: 100%;
      line-height: 60px;
      img{
        width: 45px;
        height: 45px;
        border-radius: 50%;
        vertical-align: middle;
      }
    }
    .notifications{
      padding-right: 30px;
      float: left;
      margin-left: 60%;
      width: 20%;
      line-height: 60px;
    }
  }
}
</style>
