<template>
  <div>
      <el-row :gutter="20">
        <el-col :span="6"><el-card>
            <Detail title="总销售额" count="￥14588">
            <!-- 给插槽里传模板 --> 
            <template slot="chart">
                <span>周同比 &nbsp;&nbsp; 56.67% <svg t="1650615646039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4815" width="16" height="16"><path d="M752.64 376.32 546.56 202.88c-19.2-16-50.56-16-69.76 0L270.72 376.32C240 402.56 261.76 447.36 305.28 447.36L384 447.36C384 447.36 384 448 384 448l0 320c0 35.2 28.8 64 64 64l128 0c35.2 0 64-28.8 64-64L640 448c0 0 0-0.64 0-0.64l78.08 0C761.6 447.36 783.36 402.56 752.64 376.32z" p-id="4816" fill="#1afa29"></path></svg></span>
                <span>日同比 &nbsp;&nbsp; 15.56% <svg t="1650615899859" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6199" width="16" height="16"><path d="M719.36 575.36l-77.44 0c0-0.64 0-0.64 0-1.28L641.92 256c0-35.2-28.8-64-64-64L448 192C412.8 192 384 220.8 384 256l0 318.08c0 0.64 0 0.64 0 1.28L305.92 575.36c-44.16 0-65.92 44.8-35.2 70.4l206.72 173.44c19.2 16 50.56 16 69.76 0l206.72-173.44C785.28 620.16 763.52 575.36 719.36 575.36z" p-id="6200" fill="#d81e06"></path></svg></span>
            </template>
            <template slot="footer">
                总销售额：￥14588
            </template>
            </Detail>
        </el-card> </el-col>
        <el-col :span="6"><el-card>
            <Detail title="访问量" count="88088">
            <template slot="chart">
                <LineChart></LineChart>
            </template>  
            <template slot="footer">
                访问量： 88088
            </template>   
            </Detail>
        </el-card> </el-col>

        <el-col :span="6"><el-card>
            <Detail title="支付笔数" count="13348">
                <template slot="chart">
                    <BarChart></BarChart>
                </template>
            <template slot="footer">
                支付笔数： 13348
            </template>
            </Detail>
        </el-card> </el-col>
        <el-col :span="6"><el-card>
            <Detail title="运营效果" count="78%">
                <template slot="chart">
                    <ProgressChart></ProgressChart>
                </template>
            <template slot="footer">
                <span>周同比 &nbsp;&nbsp; 56.67% <svg t="1650615646039" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4815" width="16" height="16"><path d="M752.64 376.32 546.56 202.88c-19.2-16-50.56-16-69.76 0L270.72 376.32C240 402.56 261.76 447.36 305.28 447.36L384 447.36C384 447.36 384 448 384 448l0 320c0 35.2 28.8 64 64 64l128 0c35.2 0 64-28.8 64-64L640 448c0 0 0-0.64 0-0.64l78.08 0C761.6 447.36 783.36 402.56 752.64 376.32z" p-id="4816" fill="#1afa29"></path></svg></span>
                <span>日同比 &nbsp;&nbsp; 15.56% <svg t="1650615899859" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="6199" width="16" height="16"><path d="M719.36 575.36l-77.44 0c0-0.64 0-0.64 0-1.28L641.92 256c0-35.2-28.8-64-64-64L448 192C412.8 192 384 220.8 384 256l0 318.08c0 0.64 0 0.64 0 1.28L305.92 575.36c-44.16 0-65.92 44.8-35.2 70.4l206.72 173.44c19.2 16 50.56 16 69.76 0l206.72-173.44C785.28 620.16 763.52 575.36 719.36 575.36z" p-id="6200" fill="#d81e06"></path></svg></span>
            </template>
            </Detail>
        </el-card> </el-col>
    </el-row>
  </div>
</template>

<script>
import Detail from './Details'
import LineChart from './lineChart'
import BarChart from './barChart'
import ProgressChart from './progressChart'
export default {
    name:'',
    components:{
        Detail,
        LineChart,
        BarChart,
        ProgressChart
    }
}
</script>

<style>

</style>