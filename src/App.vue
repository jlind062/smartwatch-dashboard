<template>
  <div id="app">
    <el-container>
      <el-aside>
        <LeftNav/>
      </el-aside>
      <el-container>
        <el-header></el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import LeftNav from '@/components/LeftNav';
export default {
  name: 'App',
  mounted() {
    this.$store.dispatch('fetchUserData')
  },
  components: {
    LeftNav
  }
}
</script>

<style>
body {
  margin: 0 !important;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50; 
}

</style>
