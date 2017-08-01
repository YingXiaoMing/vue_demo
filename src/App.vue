<template>
  <div>
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar'
export default {
  name : 'app',
  //挂载组件
  components : {Navbar}
}
</script>
<style lang="scss" scope>
@import "style/app"
</style>


