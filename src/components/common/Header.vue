<template>
  <div class="common-header"></div>
</template>

<script>
export default {
    name: 'common-header',
    data() {
      return {
        imageUrl: ''
      };
    },
    methods: {
      switchMenu:function(){
        alert(this.isCollapse);
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
