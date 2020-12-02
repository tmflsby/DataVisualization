<template>
  <VeWordCloud :data="chartData" :settings="chartSettings" height="100%"/>
</template>

<script>
export default {
  name: 'WordCloud',
  data() {
    return {
      chartData: {
        columns: ['name', 'value'],
        rows: [
          { name: '慕课网', value: 200 },
          { name: '数据可视化', value: 150 },
          { name: '帅洋', value: 500 },
          { name: 'WordCloud', value: 300 }
        ]
      },
      chartSettings: {
        color: ['rgba(97, 216, 0, .7)', 'rgba(204, 178, 26, .7)', 'rgba(245, 166, 35, .7)', 'rgba(156, 13, 113, .7)']
      }
    }
  }
}
</script>

<style scoped>

</style>
