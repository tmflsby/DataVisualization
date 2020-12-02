<template>
  <div id="container"></div>
</template>

<script>
import 'echarts-wordcloud'
export default {
  name: 'WordCloud',
  mounted() {
    const data = [
      { name: '慕课网', value: 200 },
      { name: '数据可视化', value: 150 },
      { name: '帅洋', value: 500 },
      { name: 'WordCloud', value: 300 }
    ]
    const chart = this.$echarts.init(document.getElementById('container'))
    chart.setOption({
      series: [{
        type: 'wordCloud',
        data,
        shape: 'circle',
        textStyle: {
          normal: {
            fontFamily: 'sans-serif',
            fontWeight: 'bold',
            // Color can be a callback function or a color string
            color: () =>
              // Random color
              `rgb(${[
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160),
                Math.round(Math.random() * 160)
              ].join(',')})`
          },
          emphasis: {
            shadowBlur: 10,
            shadowColor: '#333'
          }
        }
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
