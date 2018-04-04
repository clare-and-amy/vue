<template>
  <div class="hello">
    <a>{{ msg }}</a>
    <router-link :to="{ path: 'test/index', query: { plan: 'private' }}">Register</router-link>
  </div>
</template>

<script>


export default {
  name: 'Index',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1{
  font-weight: normal;
}
</style>
