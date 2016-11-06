<template lang="html">
  <button :type="type" :name="name" v-bind:class="styles">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String
    },
    name: {
      type: String
    },
    color: {
      type: String
    },
    block: {
      type: Boolean
    }
  },
  computed: {
    styles () {
      return {
        block: this.block,
        primary: () => {
          if (this.color === 'primary') {
            return 'true'
          }
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
button{
  border: 0;
  border-radius: 3px;
  height: 45px;
  cursor: pointer;
  box-shadow: 0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);
  &:focus{
    outline: 0;
  }
  &.block{
    width: 100%;
  }
  &.primary{
    background-color: $primary;
    color: #FFF;
    text-shadow: 0 1px 3px rgba(52,60,142,.4);
    font-weight: 600;
    font-size: 1em;
    font-family: 'Montserrat';
  }
}
</style>
