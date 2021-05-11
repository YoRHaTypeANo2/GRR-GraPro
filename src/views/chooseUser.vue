<template>
  <div class="index">
    <el-button type="primary" @click="gologin()">我要体检</el-button>
    <el-button type="primary" @click="doclogin()">我是医生</el-button>
    <el-button type="primary" @click="goadmin()">后台管理</el-button>
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
    doclogin() {
      this.$router.push('/docview')
    },
    goadmin() {
      this.$router.push('/admin')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
