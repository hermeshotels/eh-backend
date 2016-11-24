<template lang="html">
  <div class="register-wrapper">
    <div class="valign-wrapper">
      <div class="valign">
        <div class="signup-form">
          <h3>
            Nuovo utente <br>
            <small>crea subito il tuo account</small>
          </h3>
          <p>
            La registrazione è riservata ai clienti ErmesHotels
          </p>

          <el-form class="login-form" :model="loginForm" :rules="loginRules">
            <el-form-item label="Email" prop="email">
              <el-input size="large" v-model="loginForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Password">
              <el-input size="large" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Conferma password">
              <el-input size="large" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Codice Hotel">
              <el-input size="large" type="text" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="text-center">
              <el-button type="primary" size="large" @click.native.prevent="login" :loading="loginProcess">Registrati</el-button>
              <el-button type="text">Torna al login</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
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
  computed: {},
  ready: function () {},
  attached: function () {},
  methods: {},
  components: {}
}
</script>

<style lang="scss">
.register-wrapper{
  height: 100%;
  width: 100%;
  .signup-form{
    text-align: center;
    width: 25%;
    margin: 0 auto;
    p{
      font-size: 1em;
      font-weight: 400;
    }
  }
}
</style>
