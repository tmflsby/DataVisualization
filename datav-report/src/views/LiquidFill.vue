<template>
  <div id="container"></div>
</template>

<script>
import 'echarts-liquidfill'
export default {
  name: 'LiQuidFill',
  mounted() {
    const data = [0.68, {
      value: 0.55,
      direction: 'left'
    }, {
      value: 0.38,
      itemStyle: {
        opacity: 0.6
      },
      emphasis: {
        itemStyle: {
          opacity: 0.9
        }
      }
    }]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'liquidFill',
        data,
        color: ['red', 'blue', 'yellow'],
        // waveAnimation: false,
        // animationDuration: 0,
        // animationDurationUpdate: 0,
        amplitude: 10,
        backgroundStyle: {
          borderWidth: 5,
          borderColor: 'black',
          color: 'purple'
        },
        outline: {
          show: true,
          borderDistance: 2,
          itemStyle: {
            borderWidth: 2,
            borderColor: 'green',
            shadowBlur: 'none'
          }
        },
        shape: 'diamond'
      }]
    })
  }
}
</script>

<style lang="scss" scoped>
#container {
  width: 100%;
  height: 100%;
}
</style>
