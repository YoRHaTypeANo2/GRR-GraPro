<template>
  <div class="index">
    <div>
      <p>项目3</p>
      <p>当前排队人数：{{q3status.length}}</p>
      <p>您排在第：{{nowuserline}}位，请等待通知</p>
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
      q3status: null,
      nowuserline: 0,
    }
  },
  mounted() { 
    axios({
      method: 'post',
      url: '/api/getnowlog'
    }).then(res=>{
      this.nowuser = res.data;
    })
    axios({
      method: 'post',
      url: '/api/checkstatus3'
    }).then(res=>{
      this.q3status = res.data;
      this.t1()
    })
  },
  methods: {
    t1() {
        axios({
        method: 'post',
        url: '/api/checkstatus3'
        }).then(res=>{
            this.q3status = res.data;
            for(let i = 0; i < this.q3status.length; i++){
                if(this.q3status[i].useremail == this.nowuser.useremail){
                    this.nowuserline = i;
                }
            }
            this.t2();
        })
    },
    t2() {
        setTimeout(() => {
            this.t1();
        },3000)
    }

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
