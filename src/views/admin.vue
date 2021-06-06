<template>
  <div class="index">
    <el-button type="primary" @click="getuserinfo()">获取所有用户信息</el-button>
    <el-button type="primary" @click="getqueueinfo()">获取所有排队信息</el-button>
    <p v-if="showUinfo" style="margin-top:10px; color:blue;">用户信息</p>
    <div v-if="showUinfo" v-for="data in userinfo" style="border: 1px solid black; margin-top:5px;">
      <p>用户邮箱：{{data.useremail}}</p>
      <p>用户名：{{data.username}}</p>
    </div>
    <p v-if="showQinfo" style="margin-top:10px; color:blue;">队列1信息</p>
    <div v-if="showQinfo" v-for="data in queue1" style="border: 1px solid black; margin-top:5px;">
      <p>用户名：{{data.username}}</p>
    </div>
    <p v-if="showQinfo" style="margin-top:10px; color:blue;">队列2信息</p>
    <div v-if="showQinfo" v-for="data in queue2" style="border: 1px solid black; margin-top:5px;">
      <p>用户名：{{data.username}}</p>
    </div>
    <p v-if="showQinfo" style="margin-top:10px; color:blue;">队列3信息</p>
    <div v-if="showQinfo" v-for="data in queue3" style="border: 1px solid black; margin-top:5px;">
      <p>用户名：{{data.username}}</p>
    </div>
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
      showUinfo:false,
      showQinfo:false,
    }
  },
  methods: {
    getuserinfo() {
      this.showQinfo = false;
      this.showUinfo = true;
      axios({
        method: 'post',
        url: '/api/getuserinfo'
      }).then(res=>{
        console.log(res.data);
        this.userinfo = res.data.info;
      })
    },
    getqueueinfo() {
      this.showUinfo = false;
      this.showQinfo = true;
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
        url: '/api/checkstatus3'
      }).then(res=>{
        console.log(res.data);
        this.queue3 = res.data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  text-align: center;
  margin-top: 10px;
}
</style>
