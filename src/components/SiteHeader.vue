<template lang="html">
<div class="header-wrapper">
  <el-row>
    <el-col :span="6" class="brand">BookingOnLive</el-col>
  </el-row>
</div>
</template>

<script>
</script>

<style lang="scss">
$header-height: 60px;
.header-wrapper{
  position: fixed;
  top: 0;
  width: 100%;
  height: 60px;
  padding-left: 1em;
  padding-right: 1em;
  z-index: 9;
  .brand{
    color: #FFF;
    font-weight: 600;
    line-height: $header-height;
  }
  .menu{
    ul{
      list-style: none;
      padding: 0;
      margin: 0;
      line-height: $header-height;
      text-align: right;
      li{
        display: inline-block;
        padding-right: 1.2em;
        &:last-child{
          padding-left: 0;
        }
        a{
          transition: all .5s ease-in-out;
          color: rgba(255, 255, 255, 0.8);
          text-decoration: none;
          text-transform: uppercase;
          &:hover{
            color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
}
</style>
