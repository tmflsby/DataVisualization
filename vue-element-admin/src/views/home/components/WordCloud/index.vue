<template>
  <VeWordCloud :data="chartData" :settings="chartSettings" height="100%"/>
</template>

<script>
import commonDataMixin from '../../mixins/commonDataMixin'
export default {
  name: 'WordCloud',
  mixins: [commonDataMixin],
  data() {
    return {
      chartData: {},
      chartSettings: {
        color: ['#8d7fec', '#5085f2', '#f8726b', '#e7e702', '#78f283', '#4bc1fc']
      }
    }
  },
  watch: {
    wordCloud() {
      const data = []
      this.wordCloud.forEach(item => {
        data.push({
          name: item.word,
          value: item.count
        })
      })
      this.chartData = {
        columns: ['name', 'value'],
        rows: data
      }
    }
  }
}
</script>

<style scoped>

</style>
