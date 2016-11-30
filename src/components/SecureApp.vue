<template lang="html">
  <el-row class="fheight">
    <el-col :span="5" class="sidebar fheight">
      <div class="side-header">
        <img src="../assets/logo-white.svg" alt="" />
        ERMESHOTELS
      </div>
      <el-menu default-active="1" :router="true" :unique-opened="true">
        <el-menu-item index="1" :route="{ path: '/secure/dashboard' }"><i class="material-icons">dashboard</i> DASHBOARD</el-menu-item>
        <el-submenu index="2">
          <template slot="title"><i class="material-icons">view_list</i> BOL</template>
          <el-menu-item index="2" :route="{ path: '/secure/bol/settings' }"><i class="material-icons">settings_brightness</i> Aspetto</el-menu-item>
          <el-menu-item index="3"><i class="material-icons">multiline_chart</i> Analisi</el-menu-item>
          <el-menu-item index="4" :route="{ path: '/secure/realtime' }"><i class="material-icons">timelapse</i> RealTime</el-menu-item>
        </el-submenu>
        <el-menu-item index="6" :route="{ path: '/secure/api' }"><i class="material-icons">import_export</i> API</el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="19" class="views fheight">
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
.views{
  overflow-y: auto;
}
.sidebar{
  background-color: #1553b2;
  overflow: hidden;
  position: relative;
  z-index: 2;
  .side-header{
    background-color: #286BD1;
    height: 70px;
    color: #FFF;
    line-height: 70px;
    padding-left: 1em;
    padding-right: 1em;
    box-shadow: 0px 2px 3px rgba(0, 0, 0, 0.1);
    position: relative;
    z-index: 4;
    img{
      height: 30px;
      margin-right: 10px;
      vertical-align: middle;
      width: auto;
    }
  }
}
.el-menu{
  background-color: #1553b2;
  border-radius: 0;
  i{
    margin-right: 10px;
  }
}

.el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active{
  color: #FFF;
}

.el-menu-item, .el-submenu__title{
  color: #FFF;
}

.el-submenu .el-menu-item{
  background-color: #0d4499;
  &:hover{
    background-color: #1e61c9;
  }
}

.el-menu-item, .el-submenu__title{
  &:hover{
    background-color: #1e61c9;
  }
}
</style>
