<template>
  <div class="piechart" ref="piecharts">
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
    mounted(){
        let chart=echarts.init(this.$refs.piecharts);
        chart.setOption({
            title:{
                text:'视频',
                subtext:1000,
                top:'center',
                left:'center'
            },
            tooltip: {
            trigger: 'item'
            },
        legend: {
            top: '1%',
            left: 'center'
        },
        series: [
            {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
            },
            label: {
                show: true,
                position: 'outsides'
            },
            labelLine: {
                show: true
            },
            data: [
                { value: 1048, name: 'Search Engine' },
                { value: 735, name: 'Direct' },
                { value: 580, name: 'Email' },
                { value: 484, name: 'Union Ads' },
                { value: 300, name: 'Video Ads' }
            ]
            }
        ]
        });
        // 图表鼠标悬浮事件 
        chart.on('mouseover',  (params)=> {
            let {value,name}=params.data
            chart.setOption({
                title:{
                    text:name,
                    subtext:value
                }
            })

        });

    }
}
</script>

<style>
.piechart{
    width: 100%;
    height: 300px;
}

</style>