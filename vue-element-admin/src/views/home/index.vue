<template>
  <div class="home">
    <TopView />
    <SalesView />
    <BottomView />
    <MapView />
  </div>
</template>

<script>
import TopView from './layout/TopView'
import SalesView from './layout/SalesView'
import BottomView from './layout/BottomView'
import MapView from './layout/MapView'
import { wordCloud, mapScatter, screenData } from './api'
export default {
  name: 'Home',
  components: { TopView, SalesView, BottomView, MapView },
  data() {
    return {
      reportData: null,
      wordCloud: null,
      mapData: null
    }
  },
  provide() {
    return {
      getReportData: this.getReportData,
      getWordCloud: this.getWordCloud,
      getMapData: this.getMapData
    }
  },
  mounted() {
    screenData().then(data => { this.reportData = data })
    wordCloud().then(data => { this.wordCloud = data })
    mapScatter().then(data => { this.mapData = data })
  },
  methods: {
    getReportData() {
      return this.reportData
    },
    getWordCloud() {
      return this.wordCloud
    },
    getMapData() {
      return this.mapData
    }
  }
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
