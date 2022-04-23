<template>
    <div class="line-chart" ref="lineChart">
    </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'',
    // 组件挂载完毕 初始化echart实例
    mounted(){
        let lineChart=echarts.init(this.$refs.lineChart);
        // 配置数据
        lineChart.setOption({
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
                    type:'line',
                    smooth:true,
                    data:[10,30,64,17,99,47,160,64,97,],
                    itemStyle:{
                        // 拐点样式设置 就是拐点没有点
                        opacity:0,
                    },
                    // 线条样式
                    lineStyle:{
                        color:'skyblue'
                    },
                    // 填充颜色设置 areaStyle 贼帅 可以渐变
                    areaStyle:{
                        color:{
                            type: 'linear',
                            x: 0,
                            y: 0,
                            x2: 0,
                            y2: 1,
                            colorStops: [{
                                offset: 0, color: 'skyblue' // 0% 处的颜色
                            }, {
                                offset: 1, color: 'white' // 100% 处的颜色
                            }],
                            global: false // 缺省为 false
                        }
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
  .line-chart{
      width:100%;
      height:100%;
  }
</style>