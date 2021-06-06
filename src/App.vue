<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
<style>
/* 对于移动端UI的适配 */
@media screen and (max-width: 750px) {
  .el-message-box {
    width: 60% !important;
    position: fixed;
    top: 30%;
    left: 20%;
    z-index: 9999;
  }
}
</style>