<template lang="html">
  <div class="hero-wrapper">
    <el-row type="flex" align="middle" justify="center" class="fheight">
      <el-col :span="12">
        <div class="text">
          <h1>
            Il primo Booking Engine Realtime <br>
            <small>entra in contatto con il tuo cliente.</small>
          </h1>
          <p>
            Il primo Booking Engine al mondo con accesso realtime. Interagisci con il tuo cliente
            avvia una sessione di chat ed esegui override delle tariffe in tempo reale. <br>Tutto questo
            in un unica dashboard.
          </p>
          <a href="#">Richiedi una demo <i class="material-icons">arrow_forward</i></a>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="image">
          <img src="../assets/wifi.svg" alt="">
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
</script>

<style lang="scss">
@import '../assets/imports.scss';
.hero-wrapper{
  background: linear-gradient(to right bottom,#030e5d,#030e5d 30%,#0d87c9 80%,#6dfdff 100%);
  height: 550px;
  .image{
    text-align: center;
    img{
      height: 450px;
    }
  }
  a{
    text-decoration: none;
    border: 2px solid rgba(255, 255, 255, 0.2);
    border-radius: 30px;
    padding: 1em;
  }
  h1{
    font-size: 2rem;
    line-height: 25px;
    font-weight: 400;
    color: #FFF;
    small{
      padding-top: 10px;
      font-weight: 300;
      font-size: 60%;
      line-height: 10px;
    }
  }
  p{
    color: rgba(255, 255, 255, 1);
    font-weight: 100;
    margin-bottom: 50px;
  }
}
</style>
