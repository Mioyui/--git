<template>
  <el-card>
    <div slot="header" class="cut-line">
          <!-- 搜索卡片头部 -->
          <div class="search-header">
                <span>销售额类别占比</span>
                <i class="el-icon-more"></i>
          </div>
      </div>
      <div>
        <PidChart></PidChart>
      </div>
  </el-card>
</template>

<script>
import PidChart from './pieChart'
export default {
    name:'',
    components:{
        PidChart,
    }
}
</script>

<style>

</style>