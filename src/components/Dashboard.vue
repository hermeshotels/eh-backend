<template lang="html">
  <div class="dashboard-wrapper">
    <div class="hero text-center">
      <h1>
        Ciao, Mark Doe <br>
        <small>qui trovi tutti i dati importanti per il tuo Hotel</small>
      </h1>
    </div>

    <div class="container">
      <div class="row expanded">
        <div class="large-4 columns">
          <card type="data" title="Produzione" tip="Produzione canale diretto" trend="positive">
            809.291,12 EUR
          </card>
        </div>
        <div class="large-4 columns">
          <card type="data" title="Conversione" tip="Conversione canale diretto" trend="flat">
            2.20 %
          </card>
        </div>
        <div class="large-4 columns">
          <card type="data" title="Cancellazioni" tip="Valore cancellazioni" trend="negative">
            121.000,32 EUR
          </card>
        </div>
      </div>

      <div class="row expanded">
        <div class="large-12 columns">
          <card type="table" title="Tariffe" tip="Statistica delle tariffe visualizzate nel bol, usa questa tabella per comprendere la risposta dei tuoi clienti."></card>
        </div>
      </div>

    </div>

  </div>
</template>

<script>
import Card from './Card'
import LiveCard from './LiveCard'
export default {
  components: {
    Card,
    LiveCard
  }
}
</script>

<style lang="scss">
.dashboard-wrapper{
  .hero{
    h1{
      margin-top: 60px;
      margin-bottom: 60px;
    }
  }
}
</style>
