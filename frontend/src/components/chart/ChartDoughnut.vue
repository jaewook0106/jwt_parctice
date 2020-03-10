<script>

import { Pie } from 'vue-chartjs'
export default {
  name:'ChartDoughnut',
  extends: Pie,
  data(){
    return {
      chartData: {
        labels: ['January','February','March', 'April', 'May', 'June'],
        datasets: [
          {
            label: 'DATA ONE',
            backgroundColor:['#f87979', 'yellow', 'pink', 'skyblue','#fcc', 'green'], // rgba 도 가능
            borderWidth:1,
            pointBorderColor:'#fff',
            data:[40, 85, 90, 20, 60, 70],
            fill: false,
           
          }
        ]
      },
      chartOption: {
        cutoutPercentage: 50, // 50 이면 도넛차트 / 0 이면 파이차트
        // scales: {
        //   yAxes: [{
        //     ticks: {
        //       beginAtZero: true,
        //       // maxTicksLimit:11,
        //       max: 100,
        //       stepSize: 20
              
        //     },
        //     gridLines: {
        //       display: true
        //     },
        //     // stacked: true
        //   }],
        //   xAxes: [ {
        //     gridLines: {
        //       display: true
        //     }
        //   }]
        // },
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
