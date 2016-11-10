<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import AppHeader from './components/AppHeader'

export default {
  name: 'app',
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
@import url('https://fonts.googleapis.com/css?family=Open+Sans:300,400,600,700,800');
@import url('https://fonts.googleapis.com/css?family=Raleway:300,400,500,700,800');
@import url('assets/grid.min.css');
@import 'assets/imports.scss';
*{
  box-sizing: border-box;
}
html, body, #app{
  height: 100%;
}
i{
  vertical-align: middle;
}
body{
  background-color: $bg-primary;
  background: $bg-primary;
  padding: 0;
  margin: 0;
  font-family: "Avenir", "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}

.fheight{
  height: 100%;
}

.group:after {
  content: "";
  display: table;
  clear: both;
}

.page{
  padding-left: 3em;
  padding-right: 3em;
  padding-top: 2em;
  h1{
    font-size: 2em;
    line-height: 25px;
    &.primary{
      color: $primary;
    }
    small{
      font-size: 60%;
      font-weight: 500;
    }
  }
}

.valign-wrapper{
  display: table;
  height: 100%;
  width: 100%;
  .valign{
    display: table-cell;
    vertical-align: middle;
  }
}

.text-center{
  text-align: center;
}

h2{
  font-size: 1.7em;
  line-height: 23px;
  color: $primary;
  small{
    font-size: 60%;
    font-weight: 300;
  }
}

h3{
  font-size: 1.4em;
  line-height: 18px;
  color: $primary;
  small{
    font-size: 70%;
    font-weight: 400;
  }
}

h4{
  font-size: 1em;
  line-height: 18px;
  color: $primary;
  small{
    font-weight: 400;
    color: $silver;
  }
}

.el-card{
  border: 0;
  box-shadow: $card-shadow;
}
</style>
