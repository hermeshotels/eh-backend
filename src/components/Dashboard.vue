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

    <el-row :gutter="30">
      <el-col span="12">
        <card :minichart="false" type="chart">
          <div slot="header">
            Produzione ultimo anno
          </div>
          <div slot="body">
            <highcharts :options="reservationChart"></highcharts>
          </div>
        </card>
      </el-col>
      <el-col span="12">
        <card :minichart="false" type="chart">
          <div slot="header">
            Produzione tariffe
          </div>
          <div slot="body">
          </div>
        </card>
      </el-col>
    </el-row>

    <el-row>
      <el-col span="24">
        <card :minichart="false" type="chart">
          <div slot="header">
            Produzione tariffe
          </div>
          <div slot="body">
            <highcharts :options="roomRatesChart"></highcharts>
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
  },
  data () {
    return {
      reservationChart: {
        chart: {
          type: 'line',
          height: '250'
        },
        title: {
          text: 'Produzione'
        },
        xAxis: {
          mesi: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: 'Produzione'
          },
          plotLines: [{
            value: 22120,
            width: 1,
            color: 'red'
          }]
        },
        series: [
          {
            name: 'Produzione 2016',
            data: [22212, 232212, 22212, 33312, 554233, 512331, 11222, 223322, 33321, 232321, 222123, 55523]
          },
          {
            name: 'Cancellazioni 2016',
            data: [11221, 4533, 2231, 1123, 232, 24441, 4412, 2212, 233, 2123, 3321, 2211]
          }
        ]
      },
      roomRatesChart: {
        chart: {
          type: 'bar'
        },
        title: {
          text: 'Camere e Tariffe'
        },
        xAxis: {
          categories: ['Last Second Rate', 'Not Refoundable', 'Best Daily Rate', 'Cultural Experience']
        },
        yAxis: {
          min: 0,
          title: {
            text: 'Totale tariffe vendute'
          }
        },
        series: [
          {
            name: 'Classic',
            data: [22, 12, 6, 8]
          },
          {
            name: 'Superior',
            data: [12, 23, 6, 2]
          },
          {
            name: 'Deluxe',
            data: [10, 14, 7, 8]
          },
          {
            name: 'Junior Suite',
            data: [9, 21, 1, 22]
          }
        ]
      }
    }
  }
}
</script>

<style lang="scss">
@import '../assets/imports.scss';
.dashboard-wrapper{
}
</style>
