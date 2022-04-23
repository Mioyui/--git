<template>
    <div class="progress-chart" ref="progressChart">
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'',
    // 组件挂载完毕 初始化echart实例
    mounted(){
        let progressChart=echarts.init(this.$refs.progressChart);
        // 配置数据
        progressChart.setOption({
            tooltip:{},
            xAxis:{
                // data:[10,20]
                // 隐藏x轴
                show:false,
                // 设置x轴 最大值和最小值
                max:100,
                min:0,
            },
            yAxis:{
                show:false,
                type:'category',

            },
            series:[
                {
                    type:'bar',
                    // smooth:true,
                    data:[78],
                    color:'orange'  ,
                    // 柱状图宽度
                    barWidth:15,
                    // 设置背景样式 首先得显示背景
                    showBackground:true, 
                    backgroundStyle:{
                        color:'#eee',
                    },
                    // 设置标签  将柱状图显得更像进度条
                    label:{
                        show:true,
                        formatter:'||',
                        position:'right'
                    }
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
  .progress-chart{
      width:100%;
      height:100%;
  }
</style>