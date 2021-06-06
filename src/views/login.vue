<template>
  <div class="index">
    <!-- <input v-model="UserEmail"/>
    <button @click="test1(useremail)">test</button>
    <p>请输入用户名<input v-model="Venter"/></p>
    <p>请输入验证码<input v-model="Venter"/></p>
    <button @click="test2()">test2</button> -->
    <div v-if="log">
        <el-input v-model="useremail" placeholder="请输入邮箱"></el-input>
        <el-input style="margin-top:5px;" v-model="userpassword" placeholder="请输入密码"  show-password></el-input>
        <el-button class="LogBtn" type="primary" @click="login()">登录</el-button>
        <el-button class="LogBtn" type="primary" @click="goregi()">注册</el-button>
    </div>
    <div v-if="!log">
        <el-input v-model="ruseremail" placeholder="请设置注册邮箱"></el-input>
        <el-button style="margin-top:5px;" type="primary" @click="getvemail()">获取验证码</el-button>
        <el-input style="margin-top:5px;" v-model="rusername" placeholder="请设置用户名"></el-input>
        <el-input style="margin-top:5px;" v-model="ruserpassword" placeholder="请设置密码"  show-password></el-input>
        <el-input style="margin-top:5px;" v-model="Venter" placeholder="请输入验证码"></el-input>
        <el-button v-if='!isShowlog' class="LogBtn" type="primary" @click="regi()" disabled>注册</el-button>
        <el-button v-if='isShowlog' class="LogBtn" type="primary" @click="regi()">注册</el-button>
        <el-button class="LogBtn" type="primary" @click="golog()">返回</el-button>
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
      isShowlog: false,
    }
  },
  methods: {
    login() {
        let loguser = {
            useremail : this.useremail,
            userpassword : this.userpassword
        }
        axios({
            method: 'post',
            url: '/api/login',
            data: loguser
        }).then(res=>{
            if(res.data == 'success'){
                this.$message({
                    type: 'success',
                    message: '登录成功'
                })
                this.$router.push('/queue')
            }else{
                this.$message({
                    type: 'error',
                    message: '登录失败，请检查邮箱和密码是否错误'
                })
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
        if(this.ruseremail === ''){
            this.$message({
              type: 'error',
              message: '邮箱不能为空！'
            })
            return
        }
        this.isShowlog = true;
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
                this.$message({
                    type: 'error',
                    message: '请填写正确的邮箱！'
                })
            }
        })
    },
    regi() {
        if(this.Venter == this.Vid){
            if(this.rusername === '' && this.ruserpassword === '' && this.useremail === '' && this.Venter === '' && this.Vid === ''){
                this.$message({
                    type: 'error',
                    message: '请填写正确的信息！'
                })
            }else{
                let userinfo = {
                    username: this.rusername,
                    useremail: this.ruseremail,
                    userpassword: this.ruserpassword
                }
                console.log(userinfo)
                axios({
                    method: 'post',
                    url: '/api/adduser',
                    data: userinfo
                }).then(res=>{
                    if(res.data == 'success'){
                        this.$message({
                            type: 'success',
                            message: '注册成功,已为您自动登录'
                        })
                        this.$router.push('/queue')
                    }
                    else if(res.data == 'Muti'){
                        this.$message({
                            type: 'error',
                            message: '已存在该邮箱，请直接登录'
                        })
                    }
                    else{
                        this.$message({
                            type: 'error',
                            message: '注册失败，请重试'
                        })
                    }
                })
            }
        }else{
            this.$message({
                type: 'error',
                message: '请输入正确的验证码'
            })
        }
    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
    margin: 20px;
    margin-top: 40%;
}
.LogBtn {
    margin: 5px 40px;
}
</style>
