<template lang="html">
  <el-row class="fheight">
    <el-col :span="5" class="sidebar fheight">
      <user-badge></user-badge>
      <el-menu default-active="1" :router="true">
        <el-menu-item index="1" :route="{ path: '/secure/dashboard' }"><i class="material-icons">dashboard</i> Dashboard</el-menu-item>
        <el-menu-item-group title="HOTEL">
          <el-menu-item index="3"><i class="material-icons">multiline_chart</i> Analisi</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="BOOKING ENGINE">
          <el-menu-item index="2"><i class="material-icons">settings_brightness</i> Aspetto</el-menu-item>
          <el-menu-item index="3"><i class="material-icons">multiline_chart</i> Analisi</el-menu-item>
          <el-menu-item index="4" :route="{ path: '/secure/realtime' }"><i class="material-icons">timelapse</i> RealTime</el-menu-item>
        </el-menu-item-group>
      </el-menu>
    </el-col>
    <el-col :span="19" class="fheight">
      <router-view></router-view>
    </el-col>
  </el-row>
</template>

<script>
import UserBadge from './UserBadge'
export default {
  components: {
    UserBadge
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.sidebar{
  background-color: $bg-secondary;
  border-right: 1px solid $gray;
}
.el-menu{
  background-color: $bg-secondary;
  i{
    margin-right: 10px;
  }
}
</style>
