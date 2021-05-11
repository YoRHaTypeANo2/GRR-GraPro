<template>
  <div class="index">
    <p>列表2</p>
    <el-button type="primary" @click="nextone()">下一位</el-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
     detail2: '',
    }
  },
  mounted() {
    axios({
      method: 'post',
      url: '/api/checkstatus1'
    }).then(res=>{
      this.detail2 = res.data;
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
</style>
