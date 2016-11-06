import { Bar } from 'vue-chartjs'
export default Bar.extend({
  mounted () {
    this.renderChart({
      labels: ['-15min', '-5min', '-3min'],
      datasets: [
        {
          label: 'Utenti attivi',
          backgroundColor: '#f87979',
          data: [2, 3, 1]
        }
      ]
    })
  }
})
