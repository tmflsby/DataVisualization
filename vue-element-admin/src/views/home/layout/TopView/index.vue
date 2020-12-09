<template>
  <div class="top-view">
    <el-row :gutter="20">
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalSales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalOrders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TodayUsers />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <TotalUsers />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from '../../components/TotalSales'
import TotalOrders from '../../components/TotalOrders'
import TodayUsers from '../../components/TodayUsers'
import TotalUsers from '../../components/TotalUsers'
export default {
  name: 'TopView',
  components: { TotalSales, TotalOrders, TodayUsers, TotalUsers }
}
</script>

<style scoped>

</style>
