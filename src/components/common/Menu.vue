<template>
  <div class="common-left">
    <div class="logo">
      <div class="logo-text">
        后台管理
        <span class="switch" @click="switchMenu()">
          <i class="el-icon-more-outline"></i>
        </span>
      </div>
    </div>
    <div class="left-menu">
      <el-menu default-active="1-4-1" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse" background-color="#333744" text-color="#FFF" active-text-color="#FFF">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">商品模块</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1"><router-link :to="{ path: '/'}">首页</router-link></el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">库存模块</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">会员模块</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">系统设置</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
    name: 'common-left',
    data() {
      return {
        isCollapse: false
      };
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      },
      switchMenu() {
        this.isCollapse = this.isCollapse == true ? false : true;
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.logo {
  height:60px;
  line-height:60px;
  background:#373d41;
  color:#FFFFFF;
  position: relative;
}
.switch {
  right:10px;
  top:5px;
  position:absolute;
  cursor:pointer;
}
.left-menu {
  text-align:left;
  min-height:800px;
}
</style>
