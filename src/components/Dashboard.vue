<template lang="html">
  <div class="page dashboard-wrapper">
    <h1 class="primary">
      Ciao Hotel Brunelleschi Firenze <br>
      <small>qui trovi i dati importanti per il tuo hotel.</small>
    </h1>

    <el-row :gutter="30">
      <el-col :span="8">
        <card>
          <div slot="header">
            Produzione
          </div>
          <div slot="body">
            22.221,00 €
          </div>
          <div slot="tip">
            Totale delle prenotazioni
          </div>
        </card>
      </el-col>
      <el-col :span="8">
        <card>
          <div slot="header">
            Cancellazioni
          </div>
          <div slot="body">
            22.221,00 €
          </div>
          <div slot="tip">
            Valore cancellazioni
          </div>
        </card>
      </el-col>
      <el-col :span="8">
        <card>
          <div slot="header">
            Conversione
          </div>
          <div slot="body">
            2.89%
          </div>
          <div slot="tip">
            Tasso di conversione web
          </div>
        </card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Card from './Card'
export default {
  components: {
    Card
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.dashboard-wrapper{
  h1{
    margin: 0;
    margin-bottom: 30px;
  }
}
</style>
