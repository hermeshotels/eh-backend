<template lang="html">
  <div class="login-wrapper">
    <div class="form">
      <div class="valign-wrapper">
        <div class="valign">

          <div class="login-form">
            <div class="form-header">
              <h2 class="text-center">
                Accesso utente <br>
                <small>bentornato, ti stavamo aspettando.</small>
              </h2>
            </div>

            <form>
              <text-box type="email" label="Email"></text-box>
              <text-box type="password" label="Password"></text-box>
              <div class="login-error">
                <i class="material-icons">error_outline</i> Credenziali non valide, riprova.
              </div>
              <eh-button color="primary" :block="true">Accedi</eh-button>
            </form>
            <div class="form-footer">
              <a href="#">Password smarrita?</a>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div class="ads">
      <div class="valign-wrapper">
        <div class="valign text-center">
          <h1>
            HERE GOES THE<br>
            <small>ERMESHOTELS ADS</small>
          </h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TextBox from './TextBox'
import EhButton from './EhButton'
export default {
  components: {
    TextBox,
    EhButton
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.login-wrapper{
  height: 100%;
  .ads, .form{
    height: 100%;
    float: left;
  }
  .ads{
    background: #262e3c;
    width: 70%;
    h1{
      color: #FFF;
      font-size: 1.5em;
      small{
        font-size: 3em;
        font-weight: 900;
      }
    }
  }
  .form{
    width: 30%;
    button{
      margin-top: 30px;
    }
    .form-header{
      margin-bottom: 40px;
    }
    .login-error{
      color: $danger;
      margin-top: 35px;
      text-align: center;
    }
    .form-footer{
      margin-top: 40px;
      text-align: center;
    }
    .login-form{
      margin: 0 auto;
      width: 70%;
    }
  }
}
</style>
