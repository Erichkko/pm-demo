
<template>
    <div class="login-wrap">
      <div class="ms-title">后台管理系统</div>
      <div class="ms-login">
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
          <el-form-item prop="username" label="用户名:">
            <el-input v-model="ruleForm.username" placeholder="username"></el-input>
          </el-form-item>
          <el-form-item prop="password" label="密码:">
            <el-input type="password" placeholder="password" v-model="ruleForm.password" @keyup.enter.native="submitForm('ruleForm')"></el-input>
          </el-form-item>
          <div class="login-btn">
            <el-button type="primary" @click="submitForm('ruleForm')">登录</el-button>
          </div>
          <p style="font-size:12px;line-height:30px;color:#999;">Tips : 用户名和密码随便填。</p>
        </el-form>
      </div>
    </div>
</template>
<!---->
<script>
    export default {
        name: "Login",
        data(){
          return{
            ruleForm:{
              username:'',
              password:''
            },
            rules: {
              username: [
                { required: true, message: '请输入用户名', trigger: 'blur' }
              ],
              password: [
                { required: true, message: '请输入密码', trigger: 'blur' }
              ]
            }

        }},
      methods: {
        submitForm(formName) {
          this.$refs[formName].validate((valid) => {
            if (valid) {
              localStorage.setItem('ms_username',this.ruleForm.username);
              this.$router.push('/');
            } else {
              console.log('error submit!!');
              return false;
            }
          });
        }
      }
    }
</script>

<style scoped>
  .login-wrap{
    position: relative;
    width:100%;
    height:100%;
  }
  .ms-title{
    position: absolute;
    width:100%;
    height: 100px;
    text-align: center;
    line-height: 100px;
    font-size:30px;
    color: #fff;
  }
   .ms-login{
     position:absolute;
     left:0;right:0;top:150px;bottom:0;
     margin:0 auto;
    width:300px;
    height:160px;
    padding:40px;

    border-radius: 5px;
    background: #fff;
  }
  .login-btn{
    text-align: center;
  }
  .login-btn button{
    width:100%;
    height:36px;
  }
</style>
