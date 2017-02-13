<template lang="html">
  <div class="register-wrapper">
    <div class="valign-wrapper">
      <div class="valign">
        <div class="signup-form" v-show="!registrationSuccess">
          <h3>
            Nuovo utente <br>
            <small>crea subito il tuo account</small>
          </h3>
          <p>
            La registrazione è riservata ai clienti ErmesHotels
          </p>

          <el-form ref="upForm" class="login-form" :model="upForm" :rules="upRules">
            <el-form-item label="Email" prop="email">
              <el-input size="large" v-model="upForm.email"></el-input>
            </el-form-item>
            <el-form-item label="Password" prop="password">
              <el-input size="large" type="password" v-model="upForm.password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Conferma password">
              <el-input size="large" type="password" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="Codice Hotel" prop="hotel">
              <el-input size="large" type="text" v-model="upForm.hotel" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item class="text-center">
              <el-button type="primary" size="large" @click.native.prevent="register(upForm)" :loading="loginProcess">Registrati</el-button>
              <el-button type="text">Torna al login</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div class="signup-success" v-show="registrationSuccess">
          <h2>
            Registrazione avvenuta con successo <br>
            <small>
              <router-link :to="{ path: '/' }">Torna al login</router-likn>
            </small>
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: function () {
    return {
      loginProcess: false,
      upForm: {
        email: '',
        password: '',
        hotel: ''
      },
      upRules: {
        email: [
          { required: true, message: 'Inserici la tua email', trigger: 'blur' },
          { type: 'email', message: 'Email non valida', trigger: 'blur,change' }
        ],
        password: [
          { required: true, message: 'Inserici una password', trigger: 'blur' }
        ],
        hotel: [
          { required: true, message: 'Inserisci un codice hotel', trigger: 'blur' }
        ]
      }
    }
  },
  computed: {
    ...mapGetters({
      registrationSuccess: 'registrationSuccess'
    })
  },
  ready: function () {},
  attached: function () {},
  methods: {
    ...mapActions([
      'register'
    ])
  },
  components: {}
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
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
  .signup-success{
    text-align: center;
    h2{
      small{
        a{
          text-decoration: none;
          color: $primary;
        }
      }
    }
  }
}
</style>
