<template lang="html">
  <div class="secure-wrapper">
    <app-header></app-header>
    <div class="route-wrapper">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import AppHeader from './AppHeader'
export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
.secure-wrapper{
  height: 100%;
}
.route-wrapper{
  height: calc(100% - 70px);
}
</style>
