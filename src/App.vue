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
  background-color: #f2f7fd;
  background: #f2f7fd;
  padding: 0;
  margin: 0;
  font-family: 'Open Sans', sans-serif;
}
h1,h2,h3,h4,h5{
  font-family: 'Raleway', sans-serif;
  color: $primary;
  small{
    font-weight: 400;
  }
}
h3{
  font-size: 1.2em;
}
a{
  color: $primary;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.5s ease-in-out;
  &:hover{
    color: $primary-link-hover;
  }
}
.text-center{
  text-align: center;
}
.container{
  width: 90%;
  margin: 0 auto;
  max-width: 1100px;
}
.group:before,
.group:after {
    content: "";
    display: table;
}
.group:after {
    clear: both;
}
.group {
    zoom: 1; /* For IE 6/7 (trigger hasLayout) */
}
.padded{
  padding-left: 1em;
  padding-right: 1em;
}

.valign-wrapper{
  display: table;
  width: 100%;
  height: 100%;
  .valign{
    display: table-cell;
    vertical-align: middle;
  }
}
</style>
