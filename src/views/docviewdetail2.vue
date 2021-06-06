<template>
  <div class="index">
    <p>列表2</p>
    <el-button type="primary" @click="nextone()">下一位</el-button>
    <div>当前体检者：{{now.username}}</div>
     <div v-for="data in detail2">
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
     detail2: '',
     now: '',
    }
  },
  mounted() {
    axios({
      method: 'post',
      url: '/api/checkstatus1'
    }).then(res=>{
      this.detail2 = res.data
      this.now = this.detail2[0];
      this.detail2.shift()
      console.log(this.detail2);
    })
  },
  methods: {
    nextone() {
      axios({
        method: 'post',
        url: '/api/queuenext2'
      }).then(res=>{
        this.detail2 = res.data;
        console.log(this.detail2);
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
