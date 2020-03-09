<script>

import { Radar } from 'vue-chartjs'
export default {
  name:'ChartRadar',
  extends: Radar,
  data(){
    return {
      chartData: {
        labels: ['January','February','March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'DATA ONE',
            backgroundColor:['#f87979', 'yellow', 'pink', 'skyblue','#fcc', 'green'],
            borderWidth:1,
            pointBorderColor:'#fff',
            data:[40, 85, 90, 20, 60, 70],

           
          }
        ]
      },
      chartOption: {
        scales: {
          
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
