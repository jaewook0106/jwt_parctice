<script>

import { Line } from 'vue-chartjs'
export default {
  name:'ChartView',
  extends: Line,
  data(){
    return {
      chartData: {
        labels: ['January','February','March'],
        datasets: [
          {
            label: 'DATA ON,E',
            backgroundColor:'#f87979',
            pointBackgroundColor:'#fff',
            borderWidth:1,
            pointBorderColor:'#249ebf',
            data:[40, 70, 90]
          }
        ]
      },
      chartOption: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [ {
            gridLines: {
              display: false
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  
  // props:['chartdata', 'options'],
  mounted() {
    this.renderChart(this.chartData, this.chartOption)
  },
}
</script>

<style>

</style>
