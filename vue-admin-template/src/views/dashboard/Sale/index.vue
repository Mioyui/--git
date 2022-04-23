<template>
  <el-card class="box-card">
      <!-- 销售头部内容 -->
  <div slot="header" class="clearfix">
       <!-- v-model="activeName" @tab-click="handleClick" -->
       <!-- 销售头部左侧内容 -->
    <el-tabs class="tab" v-model="activeName">
        <el-tab-pane label="销售额" name="first"></el-tab-pane>
        <el-tab-pane label="访问量" name="second"></el-tab-pane>
    </el-tabs>
    <!-- 销售头部右侧内容 -->
    <div class="rightitem">
        <span>今日</span>
        <span>本周</span>
        <span>本月</span>
        <span>本年</span>
        <el-date-picker
            class="date"
            v-model="date"
            size="mini"
            type="daterange"
            value-format="yyyy-MM-dd"
            range-separator="-"
            start-placeholder="开始日期"
            end-placeholder="结束日期">
        </el-date-picker>
    </div>
  </div>
      <!-- 销售内容内容 -->
  <div>
      <el-row gutter="20">
           <!-- 销售内容左边内容 -->
          <el-col :span="18">
              <div class="echart" ref="echart"></div>
          </el-col>
          <!-- 销售内容右边内容 -->
          <el-col :span="6">
              <h3>门店{{title}}排名</h3>
              <div class="rankitem">
              <ul>
                  <li>
                      <span class="rank">1</span>
                      <span>肯德基</span>
                      <span class="Rsale">3302</span> 
                  </li>
                  <li>
                      <span class="rank">2</span>
                      <span>麦当劳</span>
                      <span class="Rsale">2482</span> 
                  </li>
                  <li>
                      <span class="rank">3</span>
                      <span>汉堡王</span>
                      <span class="Rsale">2445</span> 
                  </li>
                  <li>
                      <span>4</span>
                      <span>汉堡王</span>
                      <span class="Rsale">3302</span> 
                  </li>
                  <li>
                      <span>5</span>
                      <span>肯德基</span>
                      <span class="Rsale">3302</span> 
                  </li>
                  <li>
                      <span>6</span>
                      <span>肯德基</span>
                      <span class="Rsale">3302</span> 
                  </li>
                  <li>
                      <span>7</span>
                      <span>肯德基</span>
                      <span class="Rsale">3302</span> 
                  </li>
              </ul>
              </div>

          </el-col>
      </el-row>
  </div>
  

</el-card>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'',
    data(){
        return{
            activeName:"first",
            chart:null,
            date:[],
        }
    },
    mounted(){
        // 初始化实例
    this.chart =echarts.init(this.$refs.echart);
    this.chart.setOption({
        title:{
            // 先写死
            text:'销售额趋势',
        },
        tooltip: {
        trigger: 'axis',
        axisPointer: {
        type: 'shadow'
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
        type: 'category',
        // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        data: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'],
        axisTick: {
            alignWithLabel: true
        }
        }
    ],
    yAxis: [
        {
        type: 'value'
        }
    ],
    series: [
        {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [10, 52, 200, 334, 390, 330, 220, 52, 200, 334, 390, 330, 220],
        color:'purple'
        }
    ]
    })
    },
    computed:{
        title(){
            return this.activeName=='first'?'销售额':'访问量';
        }
    },
    watch:{
        title(){
            this.chart.setOption({
                title:{
                    text:this.title 
                }
            })
        }
    }

}
</script>

<style>

.clearfix{
    display: flex;
    justify-content: space-between;
    position: relative;
}
.el-card__header {
    border-bottom: none;
}

.tab{
    width: 100%;
}

.rightitem{
    position: absolute;
    right: 0px;
}

.rightitem span{
    margin:0px 10px
}

.date {
    width: 200px !important;
}

.echart{
    width: 100%;
    height: 300px;
}

.rank{
    width: 20px;
    height: 20px;
    float: left;
    border-radius:50% ;
    background:black;
    color: white;
    line-height: 20px;
    text-align: center;
}
.rankitem ul{
    list-style: none;
    width: 100%;
    height: 300px;
    padding: 0px;
}
.rankitem ul li{
    height: 8%;
}
.rankitem ul li span{
    margin:0px 10px;
}

.Rsale{
    float: right;
}
</style>