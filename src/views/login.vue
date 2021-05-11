<template>
  <div class="index">
    <!-- <input v-model="UserEmail"/>
    <button @click="test1(useremail)">test</button>
    <p>请输入用户名<input v-model="Venter"/></p>
    <p>请输入验证码<input v-model="Venter"/></p>
    <button @click="test2()">test2</button> -->
    <div v-if="log">
        <el-input v-model="useremail" placeholder="请输入邮箱"></el-input>
        <el-input v-model="userpassword" placeholder="请输入密码"  show-password></el-input>
        <el-button type="primary" @click="login()">登录</el-button>
        <el-button type="primary" @click="goregi()">注册</el-button>
    </div>
    <div v-if="!log">
        <el-input v-model="ruseremail" placeholder="请设置注册邮箱"></el-input>
        <el-input v-model="rusername" placeholder="请设置用户名"></el-input>
        <el-button type="primary" @click="getvemail()">获取验证码</el-button>
        <el-input v-model="ruserpassword" placeholder="请设置密码"  show-password></el-input>
        <el-input v-model="Venter" placeholder="请输入验证码"></el-input>
        <el-button type="primary" @click="regi()">注册</el-button>
        <el-button type="primary" @click="golog()">返回</el-button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'index',
  data () {
    return {
      Vid:'',
      log: true,
      Venter:'',
      username: '',
      rusername: '',
      useremail:'',
      ruseremail:'',
      userpassword: '',
      ruserpassword: '',
    }
  },
  methods: {
    login() {
        let loguser = {
            useremail : this.useremail,
            username : this.username
        }
        axios({
            method: 'post',
            url: '/api/login',
            data: loguser
        }).then(res=>{
            if(res.data == 'success'){
                console.log('登录成功')
                this.$router.push('/queue')
            }else{
                console.log('登录失败')
            }
        })
    },
    golog() {
        this.log = true;
    },
    goregi() {
        this.log = false;
    },
    getvemail() {
        let emailform = {
            Email : this.ruseremail
        }
        axios({
            method: 'post',
            url: '/api/vemail',
            data: emailform
        }).then(res=>{
            if(res.data!=='error'){
                console.log(res.data);
                this.Vid = res.data;
            }else{
                console.log("请输入正确的邮箱")
            }
        })
    },
    regi() {
        if(this.Venter == this.Vid){
            if(!this.rusername && !this.ruserpassword && !this.useremail){
                console.log("请填写正确的信息")
            }else{
                let userinfo = {
                    username: this.rusername,
                    useremail: this.ruseremail,
                    userpassword: this.ruserpassword
                }
                aixos({
                    method: 'post',
                    url: '/api/adduser',
                    data: userinfo
                }).then(res=>{
                    if(res.data == 'success'){
                        console.log('登录成功')
                        this.$router.push('/queue')
                    }else{
                        console.log('登录失败')
                    }
                })
            }
        }else{
            console.log("请输入正确的验证码")
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
