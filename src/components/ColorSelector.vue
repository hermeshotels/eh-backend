<template lang="html">
<div class="color-wrapper">
  <el-row type="flex" align="middle" justify="center">
    <el-col :span="8">
      <div class="color-circle">

      </div>
    </el-col>
    <el-col :span="16">
      <el-input></el-input>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.color-wrapper{
  border-right: 1px solid #e3eaf2;
  &:last-child{
    border-right: 0;
  }
  h4{
    margin: 0;
    margin-bottom: 10px;
  }
  .color-circle{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    background-color: red;
  }
}
</style>
