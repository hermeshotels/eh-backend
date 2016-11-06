<template lang="html">
  <div class="input-wrapper">
    <label class="input-label" v-bind:class="{ active: active }" :for="id">{{label}}</label>

    <input :type="type" :placeholder="placeholder" :name="name" :id="id" @focus="focussed" @blur="blurred" @input="onInput" v-if="!multiline" />
    <textarea :name="name" v-if="multiline" @input="onInput" @focus="focussed" @blur="blurred"></textarea>

    <div class="tip" v-if="tip">
      {{tip}}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    value: {
      type: String
    },
    placeholder: {
      type: String
    },
    multiline: {
      type: Boolean
    },
    name: {
      type: String
    },
    id: {
      type: String
    },
    tip: {
      type: String
    },
    label: {
      type: String
    }
  },
  data () {
    return {
      active: false
    }
  },
  methods: {
    focussed () {
      this.active = true
      this.$emit('focussed')
    },
    blurred () {
      this.active = false
      this.$emit('blurred')
    },
    onInput (event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss" scoped>
$accent: #1565C0;
.input-wrapper{
  width: 100%;
  margin-bottom: 15px;
  label{
    font-size: 0.9em;
    color: #818181;
    transition: color 0.5s ease-in-out;
    font-family: 'Open Sans', sans-serif;
    &.active{
      color: $accent;
    }
  }
  input, textarea{
    border: 0;
    width: 100%;
    background-color: inherit;
    padding-bottom: 5px;
    font-size: 1.1em;
    border-bottom: 2px solid #dedede;
    transition: all 0.5s ease-in-out;
    font-family: 'Open Sans', sans-serif;
    &:focus{
      outline: 0;
      border-bottom: 2px solid $accent;
    }
  }
  .tip{
    font-size: 0.9em;
    color: #818181;
    margin-top: 5px;
  }
}
</style>
