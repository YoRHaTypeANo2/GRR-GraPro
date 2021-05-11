<template>
  <div class="index">
    <p>选择您负责检查的项目</p>
    <el-button type="primary" @click="xm1()">项目1</el-button>
    <el-button type="primary" @click="xm2()">项目2</el-button>
    <el-button type="primary" @click="xm3()">项目3</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
     
    }
  },
  methods: {
    xm1() {
      this.$router.push('/docviewdetail1')
    },
    xm2() {
      this.$router.push('/docviewdetail2')
    },
    xm3() {
      this.$router.push('/docviewdetail3')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
