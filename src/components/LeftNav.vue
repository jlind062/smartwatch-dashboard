<template>
    <el-row class="tac">
      <el-col>
        <h5>Welcome, {{ $store.state.user_name}} </h5>
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#389466"
          text-color="#fff"
          active-text-color="#ffd04b">
          <el-submenu index="1">
            <template slot="title">
              <span>Health & Fitness</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="1-1">
                <i><font-awesome-icon icon="heart-beat"></font-awesome-icon></i>
                  Fitness
              </el-menu-item>
              <el-menu-item index="1-2">Sleep</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="3">
            <i class="el-icon-map-location"></i>
            <router-link to="/location">Location</router-link>
          </el-menu-item>
          <el-menu-item index="4">
            <i class="el-icon-setting"></i>
            <router-link to="/raw">Raw Data</router-link>
          </el-menu-item>
          <el-menu-item index="5">
            <i class="el-icon-document"></i>
            <router-link to="/documentation">Documenation</router-link>
          </el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
</template>

<script>
  export default {
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style>
.el-col {
    text-align: center;
}
.el-aside {
  background: linear-gradient(0deg, #389466 0%, #42b883 100%);
  min-height: 100vh;
}
.el-menu {
    border-right-width: 0 !important;
}
a {
  color: inherit; /* blue colors for links too */
  text-decoration: inherit; /* no underline */
}
</style>