<template>
  <div>
      <div class="card-header">
        <span>xxxx</span>
        <svg t="1650613722611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2183" width="16" height="16"><path d="M509.92 795.84c157.904 0 285.92-128.016 285.92-285.92C795.84 352 667.808 224 509.92 224 352 224 224 352 224 509.92c0 157.904 128 285.92 285.92 285.92z m0 48C325.504 843.84 176 694.32 176 509.92 176 325.504 325.504 176 509.92 176c184.416 0 333.92 149.504 333.92 333.92 0 184.416-149.504 333.92-333.92 333.92z m-2.448-400.704h16a16 16 0 0 1 16 16v201.728a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V459.136a16 16 0 0 1 16-16z m0-100.176h16a16 16 0 0 1 16 16v23.648a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-23.648a16 16 0 0 1 16-16z" p-id="2184" fill="#8a8a8a"></path></svg>
      </div>
      <!-- <div class="card-content">{{count}}</div> -->

      <div class="card-footer">
          <span>15468</span>&nbsp;&nbsp;
          <span> &nbsp;&nbsp; 15.56% <svg t="1650615899859" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6199" width="16" height="16"><path d="M719.36 575.36l-77.44 0c0-0.64 0-0.64 0-1.28L641.92 256c0-35.2-28.8-64-64-64L448 192C412.8 192 384 220.8 384 256l0 318.08c0 0.64 0 0.64 0 1.28L305.92 575.36c-44.16 0-65.92 44.8-35.2 70.4l206.72 173.44c19.2 16 50.56 16 69.76 0l206.72-173.44C785.28 620.16 763.52 575.36 719.36 575.36z" p-id="6200" fill="#d81e06"></path></svg></span>
      </div>

      <div class="card-chart">
          <div class="line-chart" ref="lineChart1">
          </div>
      </div>
      
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
    name:'',
        mounted(){
        let lineChart=echarts.init(this.$refs.lineChart1);
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
                    data:[10,47,160,64,97,30,64,17,99,],
                    itemStyle:{
                        // 拐点样式设置 就是拐点没有点
                        opacity:0,
                    },
                    // 线条样式
                    lineStyle:{
                        color:'red'
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
                                offset: 0, color: 'red' // 0% 处的颜色
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
    .card-header{
        display: flex;
        /* 左右布局 */
        justify-content: space-between;
        font-size: 18px;
    }
    .card-content{
        font-size: 30px;
        padding: 10px 0px;
    }
    .card-chart{
        height: 50px;
        font-size: 14px;
        
    }
    .card-footer{
        font-size: 14px;
        padding-top: 10px;
    }

    .line-chart{
        width:100%;
        height:100%;
    }
</style>