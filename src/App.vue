<template>
  <div id="app">
    <CommmonHeader></CommmonHeader>
    <router-view/>
    <CommmonFooter></CommmonFooter>
  </div>
</template>

<script>

import CommmonHeader from './components/common/Header.vue'
import CommmonFooter from './components/common/Footer.vue'
export default {
  name: 'App',
  data() {
    return {
    }
  },
  components: {CommmonHeader,CommmonFooter}
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
