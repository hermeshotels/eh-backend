<template lang="html">
  <div class="login-wrapper">
    <el-row type="flex" justify="center" align="middle" class="fheight">
      <el-col span="5">
        <div class="logo">
          <img src="../assets/logo.svg" alt="" />
        </div>
        <h3 class="text-center">
          Bentornato <br>
          <small>ti stavamo aspettando</small>
        </h3>

        <el-form class="login-form" :model="loginForm" :rules="loginRules">
          <el-form-item label="Email" prop="email">
            <el-input size="large" v-model="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input size="large" type="password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="text-center">
            <el-button type="primary" size="large" @click.native.prevent="login" :loading="loginProcess">Accedi</el-button>
            <el-button type="text">Password smarrita?</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loginProcess: false,
      loginForm: {
        email: '',
        password: ''
      },
      loginRules: {
        email: [
          { required: true, message: 'Inserici la tua email', trigger: 'blur' },
          { type: 'email', message: 'Email non valida', trigger: 'blur,change' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.loginProcess = true
      console.log('ciao')
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.login-wrapper{
  height: 100%;
  background-image: url('../assets/dash_bh.png');
  background-repeat: repeat-x;
  background-position: bottom;
  background-size: 43%;
}
.logo{
  text-align: center;
  img{
    width: 100px;
    height: auto;
  }
}
</style>
