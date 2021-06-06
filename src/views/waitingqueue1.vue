<template>
  <div class="index">
    <div>
      <p style="margin-left:80px;">项目1</p>
      <p style="margin-left:45px;">当前排队人数：{{q1status.length}}</p>
      <p style="margin-left:5px;">您排在第：{{nowuserline}}位，请等待通知</p>
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
      nowuserline: 0,
      doloop:true,
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
      url: '/api/checkstatus1'
    }).then(res=>{
      this.q1status = res.data;
      this.t1()
    })
  },
  methods: {
    t1() {
        axios({
        method: 'post',
        url: '/api/checkstatus1'
        }).then(res=>{
          console.log(res.data);
          console.log(this.nowuser)
          this.q1status = res.data;
          for(let i = 0; i < this.q1status.length; i++){
            if(this.q1status[i].useremail == this.nowuser.useremail){
              console.log("i",i);
            this.nowuserline = i + 1;
            this.doloop = true;
            }
          }
          console.log("nowuserline",this.nowuserline)
          if(this.nowuserline === 1){
            this.$alert('请前往体检一区', '通知',{
              showConfirmButton:false
            })
            this.doloop = false;
          }
            this.t2();
        })
    },
    t2() {
        setTimeout(() => {
          console.log(this.doloop)
          if(this.doloop === false){
          }
          else{
            this.t1();
          }
        },2000)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  margin:200px 80px;
}
</style>
