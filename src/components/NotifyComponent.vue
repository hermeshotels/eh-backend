<template lang="html">
  <div class="notification-wrapper active">
    <i class="material-icons">notifications</i>
    <div class="count">
      3
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.notification-wrapper{
  color: $link-header;
  position: relative;
  width: 50px;
  text-align: center;
  transition: all 0.5s ease-in-out;
  &:hover{
    color: $primary-link-hover;
  }
  &.active{
    color: $primary;
  }
  i{
    font-size: 30px;
    cursor: pointer;
  }
  .count{
    position: absolute;
    cursor: pointer;
    top: 10px;
    border: 3px solid #FFF;
    left: 0;
    background-color: $primary-link-hover;
    color: #FFF;
    height: 28px;
    width: 28px;
    line-height: 25px;
    font-size: 0.9em;
    border-radius: 50%;
    font-family: 'Montserrat';
  }
}
</style>
