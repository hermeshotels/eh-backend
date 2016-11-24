<template lang="html">
  <div class="page-wrapper">
    <div class="header" :class="{ icon: icon }">
      <i class="material-icons" v-if="icon">{{icon}}</i>
      <slot name="header"></slot>
    </div>
    <div class="content" :class="{ nopad: unpad }">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: null
    },
    unpad: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.page-wrapper{
  .header{
    background-color: #FFF;
    height: 70px;
    display: flex;
    align-items: center;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    padding-left: 1em;
    padding-right: 1em;
    position: relative;
    z-index: 5;
    i{
      display: none;
    }
    h1{
      color: $primary;
      margin: 0;
      font-size: 1.2em;
      line-height: 18px;
      small{
        color: $silver;
        font-size: 80%;
        font-weight: 500;
      }
    }
    &.icon{
      padding-left: 4em;
      color: $primary;
      i{
        position: absolute;
        display: block;
        font-size: 25px;
        left: 1em;
      }
    }
  }
  .content{
    padding: 1em;
    &.nopad{
      padding: 0;
    }
  }
}
</style>
