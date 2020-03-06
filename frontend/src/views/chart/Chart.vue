<template>
  <div>
    <strong>차트 테스트</strong>
    <ChartView class="chart_wrap"></ChartView>
  </div>
</template>

<script>

import ChartView from '@/components/chart/ChartView'

export default {
  name:'Chart',
  components: {
    ChartView
  }
}
</script>

<style lang="scss">
  .chart_wrap{
    width:500px
  }
</style>
