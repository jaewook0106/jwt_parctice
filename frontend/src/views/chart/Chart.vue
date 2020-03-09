<template>
  <div>
    <strong>차트 테스트</strong>
    <div>
      <strong>라인차트</strong>
      <ChartLine class="chart_wrap"></ChartLine>
    </div>
    <hr>
    <div>
      <strong>막대차트</strong>
      <ChartBar class="chart_wrap"></ChartBar>
    </div>
    <hr>
    <div>
      <strong>파이차트</strong>
      <ChartDoughnut class="chart_wrap"></ChartDoughnut>
    </div>
    <hr>
  </div>
</template>

<script>

import ChartLine from '@/components/chart/ChartLine'
import ChartBar from '@/components/chart/ChartBar'
import ChartDoughnut from '@/components/chart/ChartDoughnut'

export default {
  name:'Chart',
  components: {
    ChartLine,
    ChartBar,
    ChartDoughnut
  }
}
</script>

<style lang="scss" scoped>
  .chart_wrap{
    width:500px
  }
  hr{
    margin:30px 0
  }
</style>
