<template>
  <div class="index">
    <p>列表1</p>
    <el-button type="primary" @click="nextone()">下一位</el-button>
     <div>当前体检者：{{now.username}}</div>
     <div v-for="data in detail1">
      <p>{{data.username}}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
     detail1: '',
     now: '',
    }
  },
  mounted() {
    axios({
      method: 'post',
      url: '/api/checkstatus1'
    }).then(res=>{
      this.detail1 = res.data
      this.now = this.detail1[0];
      this.detail1.shift()
      console.log(this.detail1)
    })
  },
  methods: {
    nextone() {
      axios({
        method: 'post',
        url: '/api/queuenext1'
      }).then(res=>{
        this.detail1 = res.data
        console.log(this.detail1)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  text-align: center;
}
</style>
