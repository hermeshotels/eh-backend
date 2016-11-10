<template lang="html">
  <div class="user-badge-wrapper">
    <div class="user-avatar">
      <i class="material-icons">account_circle</i>
    </div>
    <div class="user-data">
      <span class="username">Wanny Miarelli</span>
      <span class="logout"><i class="material-icons">exit_to_app</i></span>
    </div>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import '../assets/imports.scss';
.user-badge-wrapper{
  padding-left: 20px;
  padding-right: 20px;
  height: 70px;
  border-bottom: 1px solid $gray;
  background: #FFF;
  position: relative;
  .user-avatar, .user-data{
    float: left;
  }
  .user-avatar{
    width: 30%;
    line-height: 70px;
    i{
      vertical-align: middle;
      font-size: 40px;
      color: #475669;
    }
  }
  .user-data{
    width: 70%;
    line-height: 70px;
    color: $primary;
    .logout{
      color: $danger;
      position: absolute;
      height: 100%;
      right: 0;
      top: 0;
      border-left: 1px solid $gray;
      text-align: center;
      width: 50px;
      transition: background 0.4s ease-in-out;
      cursor: pointer;
      &:hover{
        background: $extra-light-gray;
      }
      i{
        vertical-align: middle;
        cursor: pointer;
      }
    }
  }
}
</style>
