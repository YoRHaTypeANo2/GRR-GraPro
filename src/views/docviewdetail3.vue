<template>
  <div class="index">
    <p>列表3</p>
    <el-button type="primary" @click="nextone()">下一位</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
     detail3: '',
    }
  },
  mounted() {
    axios({
      method: 'post',
      url: '/api/checkstatus3'
    }).then(res=>{
      this.detail3 = res.data;
      console.log(this.detail3);
    })
  },
  methods: {
    nextone() {
      axios({
        method: 'post',
        url: '/api/queuenext3'
      }).then(res=>{
        this.detail3 = res.data;
        console.log(this.detail3);
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
