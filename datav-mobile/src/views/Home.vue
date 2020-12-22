<template>
  <div class="home" v-if="!loading">
    <div class="data-wrapper"></div>
    <TopHeader/>
    <SalesBar :data="data"/>
    <SalesLine :data="data"/>
    <SalesMap/>
    <SalesPie :data="data"/>
    <SalesRadar :data="data"/>
    <SalesSun :data="data"/>
  </div>
  <div class="home" v-else>
    <div class="loading-wrapper">{{loadingText}}</div>
  </div>
</template>

<script>
import TopHeader from '@/components/TopHeader'
import SalesBar from '@/components/SalesBar'
import SalesLine from '@/components/SalesLine'
import SalesMap from '@/components/SalesMap'
import SalesPie from '@/components/SalesPie'
import SalesRadar from '@/components/SalesRadar'
import SalesSun from '@/components/SalesSun'
import { getScreenMobileData } from '@/api'
export default {
  name: 'Home',
  components: {
    TopHeader, SalesBar, SalesLine, SalesMap,
    SalesPie, SalesRadar, SalesSun
  },
  data() {
    return {
      loading: true,
      loadingText: '加载中...',
      data: null
    }
  },
  mounted() {
    this.task && clearInterval(this.task)

    this.task = setInterval(() => {
      if (this.loadingText === '加载中...') {
        this.loadingText = '加载中.'
      } else {
        this.loadingText += '.'
      }
    }, 200)

    getScreenMobileData().then(data => {
      console.log(data)
      this.loading = false
      this.task && clearInterval(this.task)
      this.$nextTick(() => {
        this.data = data
      })
    })
  }
}
</script>

<style lang="scss" scoped>
.home {
  position: relative;
  height: 100%;
  .data-wrapper {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 1336px;
    z-index: 1;
    background-image: url("//datav.oss-cn-hangzhou.aliyuncs.com/uploads/images/44b2ad11c37339db11f8ca5d59c5b31c.jpg");
    background-size: 100% 100%;
    background-repeat: no-repeat;
  }
}
</style>
