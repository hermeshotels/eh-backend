<template lang="html">
  <page icon="settings_brightness">
    <div slot="header">
      <i class="material-icons"></i>
      <h1>
        Personalizzazione BOL <br>
        <small>gestisci l'aspetto del booking engine</small>
      </h1>
    </div>
    <div slot="content">
      <div class="content">
        <el-tabs type="card">
          <el-tab-pane label="Generale">

            <div class="description">
              <p>
                La personalizzazione generale riguarda le funzioni presenti in tutto
                il processo di prenotazione, per la personalizzazione delle funzioni
                specifiche ad un determinato passaggio fai riferimento ai tab successivi.
              </p>
            </div>

            <div class="option">
              <h4>Login utente <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch></h4>
              <p>
                Attiva o disattiva il login utente per consentire ai tuoi clienti di
                autenticarsi sul booking engine ed usufruire di possibile promozioni
                o offerte.
              </p>
            </div>

            <div class="option">
              <h4>Promocode <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch></h4>
              <p>
                Scegli se attivare o disattivare il campo promocode che consente l'accesso
                a tariffe scontate se in possesso del codice.
              </p>
            </div>

            <div class="option">
              <h4>Steps <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch></h4>
              <p>
                Scegli se rendere visibile il percorso a step durante il processo
                di prenotazione.
              </p>
            </div>

            <div class="option">
              <h4>Messaggi temporizzati <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch></h4>
              <p>
                Attiva o disttiva i messaggi promozionali temporizzati.
              </p>
            </div>

          </el-tab-pane>
          <el-tab-pane label="Camere">
            <div class="description">
              <p>
                Questa sezione ti permette di modificare l'aspetto dell'elenco risultati
                delle camere e tariffe. Puoi gestire la visualizzazione dei vari elementi
                o la loro struttura.
              </p>
            </div>

            <div class="option">
              <h4>Icone servizi <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch></h4>
              <p>
                Attiva o disattiva le icone dei servizi nella scheda della camera.
              </p>
            </div>

            <div class="option">
              <h4>Mostra pacchetti <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch></h4>
              <p>
                Mostra o nasconde i pacchetti collegati alla camera dall'elenco delle tariffe.
              </p>
            </div>

            <div class="option">
              <h4>Galleria fotografica <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch></h4>
              <p>
                Attiva o disattiva la gelleria fotografia nella scheda della camera.
              </p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Servizi">
            <div class="description">
              <p>
                Questa sezione ti permette di gestire la visualizzazione della vista per
                la selezione dei servizi aggiuntivi.
              </p>
            </div>

            <div class="option">
              <h4>Scelta servizi <el-switch v-model="value2" on-color="#13ce66" off-color="#ff4949"></el-switch></h4>
              <p>
                Se attiva, dopo la selezione della camera, sarà possibile per l'utente
                aggiungere i servizi aggiuntivi alla prenotazione. Se disattiva dopo aver
                selezionato la camera l'utente viene inviato direttamente al pagamento.
              </p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="Voucher">Task</el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </page>
</template>

<script>
import Page from './Page'
export default {
  components: {
    Page,
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.content{
  padding: 2em;
}
.el-tabs--card .el-tabs__item.is-active{
  border-bottom: inherit;
}
.option{
  h4{
    margin-bottom: 0;
    margin-bottom: 10px;
  }
  p{
    margin: 0;
  }
}
</style>
