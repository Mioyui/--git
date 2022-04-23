<template>
  <el-card >
      <div slot="header" class="cut-line">
          <!-- 搜索卡片头部 -->
          <div class="search-header">
                <span>线上热门搜索</span>
                <i class="el-icon-more"></i>
          </div>
      </div>
        <!-- 搜索卡片内容 -->
        <div>
            <el-row gutter="10">
                <el-col :span="12">
                    <LineChart></LineChart>
                </el-col>
                <el-col :span="12">
                    <LineChart></LineChart>
                </el-col>
            </el-row>
        </div>
  </el-card>
</template>

<script>
import LineChart from './lineChart'
export default {
    name:'',
    components:{
        LineChart,
    }
}
</script>

<style>

  .search-header{
      display: flex;
      justify-content: space-between;
  }

  .cut-line{
      border-bottom:2px solid #eee ;
      padding: 0 5px;
  }
</style>