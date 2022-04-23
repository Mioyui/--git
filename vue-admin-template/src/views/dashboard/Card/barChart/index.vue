<template>
    <div class="bar-chart" ref="barChart">
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'',
    // 组件挂载完毕 初始化echart实例
    mounted(){
        let barChart=echarts.init(this.$refs.barChart);
        // 配置数据
        barChart.setOption({
            tooltip:{},
            xAxis:{
                // data:[10,20]
                // 隐藏x轴
                show:false,
                type:'category',
            },
            yAxis:{
                show:false
            },
            series:[
                {
                    type:'bar',
                    // smooth:true,
                    data:[10,30,64,17,99,47,160,64,97,],
                    color:'pink'    
                }
            ],
            // 布局调整
            grid:{
                left:0,
                top:1,
                right:0,
                bottom:0,
            }
        })
    }
}
</script>

<style scoped>
  .bar-chart{
      width:100%;
      height:100%;
  }
</style>