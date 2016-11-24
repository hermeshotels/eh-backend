<template lang="html">
  <page icon="import_export">
    <div slot="header">
      <i class="material-icons"></i>
      <h1>
        Gestione API <br>
        <small>gestisci le impostazioni dell'API JSON</small>
      </h1>
    </div>
    <div slot="content">
      <div class="ncard api-info">
        <h3>
          <i class="material-icons">developer_mode</i> Scopri il potere della nostra API
        </h3>
        <p>
          L'API ErmesHotels ti permette di integrare il nostro set di dati e funzioni all'interno delle tue applicazioni. Ti basterà generare una
          chiave API da fornire ai tuoi sviluppatori per consentire loro il pieno accesso ai nostri servizi.
        </p>
        <el-button type="success">Genera una chiave API</el-button>
      </div>

      <div class="api-data" :class="{ notgenerated: !apikey }">
        <h3>
          Dettagli API <br>
          <small>dati di accesso all'API, conservali con cura e comunicali solo a chi li necessita realmente.</small>
        </h3>

        <el-row class="api-access-data">
          <el-col :span="8">
            <div class="label">
              APP KEY
            </div>
            <div class="value">
              {{key}}
            </div>
          </el-col>
          <el-col :span="12">
            <div class="label">
              APP SECRET
            </div>
            <div class="value">
              {{secret}}
            </div>
          </el-col>
          <el-col :span="4">
            <div class="label">
              STATO
            </div>
            <div class="value success">
              {{status}}
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </page>
</template>

<script>
import { mapGetters } from 'vuex'
import Page from './Page'
export default {
  components: {
    Page
  },
  computed: {
    ...mapGetters({
      key: 'getApiKey',
      secret: 'getApiSecret',
      status: 'getApiStatus'
    })
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/imports.scss';

.api-info{
  @include card(3px);
  position: relative;
  padding-left: 90px;
  h3{
    i{
      position: absolute;
      left: 20px;
      font-size: 40px;
    }
  }
}

.api-data{
  @include card(3px);
  &.notgenerated{
    -webkit-filter: blur(3px);
    -moz-filter: blur(3px);
    -o-filter: blur(3px);
    -ms-filter: blur(3px);
    filter: blur(3px);
    opacity: 0.8;
  }
  .api-access-data{
    margin-top: 20px;
    .label{
      color: $silver;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .value{
      &.success{
        color: $success;
      }
    }
  }
}
</style>
