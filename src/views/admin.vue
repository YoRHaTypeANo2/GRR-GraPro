<template>
  <div class="index">
    <el-button type="primary" @click="getuserinfo()">获取所有用户信息</el-button>
    <el-button type="primary" @click="getqueueinfo()">获取所有排队信息</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      userinfo: '',
      queue1: '',
      queue2: '',
      queue3: '',
    }
  },
  methods: {
    getuserinfo() {
      axios({
        method: 'post',
        url: '/api/getuserinfo'
      }).then(res=>{
        console.log(res.data);
        this.userinfo = res.data;
      })
    },
    getqueueinfo() {
      axios({
        method: 'post',
        url: '/api/checkstatus1'
      }).then(res=>{
        console.log(res.data);
        this.queue1 = res.data;
      })
      axios({
        method: 'post',
        url: '/api/checkstatus2'
      }).then(res=>{
        console.log(res.data);
        this.queue2 = res.data;
      })
      axios({
        method: 'post',
        url: '/api/checkstatus2'
      }).then(res=>{
        console.log(res.data);
        this.queue2 = res.data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
