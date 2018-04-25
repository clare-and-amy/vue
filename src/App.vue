<template>
  <div id="app">
    <div id='layout-menu'>
      <Menu></Menu>
    </div>
    <div id='layout-r'>
      <div id='layout-header'><CommmonHeader></CommmonHeader></div>
      <div id='layout-content'><router-view/></div>
      <div id='layout-footer'><CommmonFooter></CommmonFooter></div>
    </div>
  </div>
</template>

<script>
import CommmonHeader from './components/common/Header.vue'
import CommmonFooter from './components/common/Footer.vue'
import Menu from './components/common/Menu.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {CommmonHeader, CommmonFooter, Menu}
}
</script>

<style>
*{
  padding:0;
  margin:0;
  height:auto;
  overflow:hidden;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#layout-menu {
  width:10%;
  float:left;
}
#layout-r {
  width:90%;
  float:right;
}
#layout-header {
  height:60px;
  line-height:60px;
  color:#FFFFFF;
  background:#373d41;
}
#layout-content {
  padding:10px;
}
#layout-footer {
  position:fixed;
  bottom:0;
  width:100%;
}
</style>
