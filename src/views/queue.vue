<template>
  <div class="index">
    <div class="XM">
      <p style="margin-left:20px;">体检项目1</p>
      <p>当前排队人数：{{q1status.length}}</p>
      <el-button style="margin-left:10px;" type="primary" @click="goq1()">报名体检</el-button>
    </div>
    <div class="XM">
      <p style="margin-left:20px;">体检项目2</p>
      <p>当前排队人数：{{q2status.length}}</p>
      <el-button style="margin-left:10px;" type="primary" @click="goq2()">报名体检</el-button>
    </div>
    <div class="XM">
      <p style="margin-left:20px;">体检项目3</p>
      <p>当前排队人数：{{q3status.length}}</p>
      <el-button style="margin-left:10px;" type="primary" @click="goq3()">报名体检</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      nowuser: null,
      q1status: '',
      q2status: '',
      q3status: ''
    }
  },
  mounted() { 
    axios({
      method: 'post',
      url: '/api/getnowlog'
    }).then(res=>{
      this.nowuser = res.data;
      console.log(this.nowuser);
    })
    axios({
      method: 'post',
      url: '/api/checkstatus1'
    }).then(res=>{
      this.q1status = res.data;
    })
    axios({
      method: 'post',
      url: '/api/checkstatus2'
    }).then(res=>{
      this.q2status = res.data;
    })
    axios({
      method: 'post',
      url: '/api/checkstatus3'
    }).then(res=>{
      this.q3status = res.data;
    })
  },
  methods: {
    goq1() {
      axios({
        method: 'post',
        url: '/api/queueadd1',
        data: this.nowuser
      })
      this.$router.push('/waitingqueue1')
    },
    goq2() {
      axios({
        method: 'post',
        url: '/api/queueadd2',
        data: this.nowuser
      })
      this.$router.push('/waitingqueue2')
    },
    goq3() {
      axios({
        method: 'post',
        url: '/api/queueadd3',
        data: this.nowuser
      })
      this.$router.push('/waitingqueue3')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.XM{
  margin: 80px 120px;
}
</style>
