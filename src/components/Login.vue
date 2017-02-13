<template lang="html">
  <div class="login-wrapper">
    <el-row type="flex" justify="center" align="middle" class="fheight">
      <el-col :span="5">
        <div class="logo">
          <img src="../assets/logo.svg" alt="" />
        </div>
        <h3 class="text-center">
          Bentornato <br>
          <small>ti stavamo aspettando</small>
        </h3>

        <el-form class="login-form" ref="loginForm" :model="loginForm">
          <el-form-item label="Email">
            <el-input type="text" size="large" v-model="loginForm.email"></el-input>
          </el-form-item>
          <el-form-item label="Password">
            <el-input size="large" type="password" v-model="loginForm.password" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item class="text-center">
            <el-button type="primary" size="large" @click.native.prevent="attempt" :loading="loginProcess">Accedi</el-button>
            <el-button type="text">Password smarrita?</el-button>
            <el-button type="text" class="register">Sei nuovo? Registrati!</el-button>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import firebase from '../api/firebase.js'
import {mapMutations} from 'vuex'
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
    ...mapMutations([
      'setUser',
      'setUserData'
    ]),
    attempt () {
      this.loginProcess = true
      firebase.login(this.loginForm, (error, user) => {
        if (error) return console.log(error)
        this.setUser(user)
        firebase.db.ref('users/' + user.uid).once('value').then((snap) => {
          this.setUserData(snap.val())
          this.loginProcess = false
          this.$router.push({name: 'realtime'})
        })
      })
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
.login-form{
  .register{
    margin-top: 10px;
  }
}
</style>
