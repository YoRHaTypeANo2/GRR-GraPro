<template>
  <div class="index">
    <el-button class="CUbutton" type="primary" @click="gologin()">我要体检</el-button>
    <el-button class="CUbutton" type="primary" @click="doclogin()">我是医生</el-button>
    <el-button class="CUbutton" type="primary" @click="goadmin()">后台管理</el-button>
  </div>
</template>

<script>
export default {
  name: 'chooseUser',
  data () {
    return {
      Vid:'',
      Venter:'',
      useremail:'',
      username: '',
      userpassword: ''
    }
  },
  methods: {
    gologin() {
      this.$router.push('/login')
    },
    goadmin() {
      this.$prompt('请输入管理者密码','后台管理',{
        confirmButtonText: '登录',
      }).then(({ value }) => {
        if(value === '999'){
          this.$message({
            type: 'success',
            message: '登录成功'
          })
          this.$router.push('/admin')
        }else{
          this.$message({
            type: 'error',
            message: '密码错误！'
          })
        }
      })
    },
    doclogin() {
      let docname = '';
      // this.$router.push('/admin')
      this.$prompt('请输入姓名', '登录',{
        confirmButtonText: '下一步',
        cancelButtonText: '取消',
      })
      .then(({ value }) =>{
        docname = value;
        if(value === null){
          this.$message({
            type: 'error',
            message: '姓名不能为空！'
          })
          return
        }
        this.$prompt('请输入工号','登录',{
          confirmButtonText: '登录',
        })
        .then(({ value }) => {
          if(value === null){
            this.$message({
              type: 'error',
              message: '工号不能为空！'
            })
            return
          }
          if(value == '010101' && docname == '曹志龙'){
            this.$message({
              type: 'success',
              message: '登录成功，欢迎回来：' + docname + '医生'
            })
            this.$router.push('/docview')
          }else if(value == '010102' && docname == '孟祥龙'){
            this.$message({
              type: 'success',
              message: '登录成功，欢迎回来：' + docname + '医生'
            })
            this.$router.push('/docview')
          }else if(value == '010103' && docname == '郭瑞瑞'){
            this.$message({
              type: 'success',
              message: '登录成功，欢迎回来：' + docname + '医生'
            })
            this.$router.push('/docview')
          }else if(value == '010104' && docname == '李开伟'){
            this.$message({
              type: 'success',
              message: '登录成功，欢迎回来：' + docname + '医生'
            })
            this.$router.push('/docview')
          }else if(value == '010105' && docname == '徐彦杰'){
            this.$message({
              type: 'success',
              message: '登录成功，欢迎回来：' + docname + '厨师，爆炒爆炒'
            })
            this.$router.push('/docview')
          }else if(value == '010106' && docname == '郑泽昊'){
            this.$message({
              type: 'success',
              message: '登录成功，欢迎回来：' + docname + '医生'
            })
            this.$router.push('/docview')
          }else if(value == '010107' && docname == '段澳琦'){
            this.$message({
              type: 'success',
              message: '登录成功，欢迎回来：' + docname + '医生'
            })
            this.$router.push('/docview')
          }else if(value == '010108' && docname == '葛浩伟'){
            this.$message({
              type: 'success',
              message: '登录成功，欢迎回来：' + docname + '医生'
            })
            this.$router.push('/docview')
          }else{
            this.$message({
              type: 'error',
              message: '请输入正确的工号和姓名'
            })
          }
        })
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.index{
  display: flex;
  flex-direction: column;
  margin-top: 50%;
}
.CUbutton{
  margin: 20px;
}
</style>
