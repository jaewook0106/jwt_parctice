<script>

import { Bar } from 'vue-chartjs'
export default {
  name:'ChartBar',
  extends: Bar,
  data(){
    return {
      chartData: {
        labels: ['January','February','March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'DATA ONE',
            backgroundColor:'#f87979',
            pointBackgroundColor:'#fff',
            borderWidth:1,
            pointBorderColor:'#249ebf',
            data:[40, 85, 90, 20, 60, 70],
            fill: false,
          }
        ]
      },
      chartOption: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true,
              // maxTicksLimit:11,
              max: 100,
              stepSize: 20
              
            },
            gridLines: {
              display: true
            },
            // stacked: true
          }],
          xAxes: [ {
            gridLines: {
              display: true
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
