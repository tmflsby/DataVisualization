<template>
  <div class="home">
    <TopView/>
    <SalesView/>
    <BottomView/>
    <MapView/>
  </div>
</template>

<script>
import TopView from '@/layout/TopView'
import SalesView from '@/layout/SalesView'
import BottomView from '@/layout/BottomView'
import MapView from '@/layout/MapView'
export default {
  name: 'Home',
  components: { TopView, SalesView, BottomView, MapView }
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
