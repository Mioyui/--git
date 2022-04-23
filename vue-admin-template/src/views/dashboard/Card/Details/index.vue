<template>
  <div>
      <div class="card-header">
        <span>{{title}}</span>
        <svg t="1650613722611" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2183" width="16" height="16"><path d="M509.92 795.84c157.904 0 285.92-128.016 285.92-285.92C795.84 352 667.808 224 509.92 224 352 224 224 352 224 509.92c0 157.904 128 285.92 285.92 285.92z m0 48C325.504 843.84 176 694.32 176 509.92 176 325.504 325.504 176 509.92 176c184.416 0 333.92 149.504 333.92 333.92 0 184.416-149.504 333.92-333.92 333.92z m-2.448-400.704h16a16 16 0 0 1 16 16v201.728a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16V459.136a16 16 0 0 1 16-16z m0-100.176h16a16 16 0 0 1 16 16v23.648a16 16 0 0 1-16 16h-16a16 16 0 0 1-16-16v-23.648a16 16 0 0 1 16-16z" p-id="2184" fill="#8a8a8a"></path></svg>
    </div>
      <div class="card-content">{{count}}</div>
      <div class="card-chart">
          <!-- 来个具名插槽 展示不同的东西 -->
          <slot name="chart">xxx</slot>
      </div>
      <div class="card-footer">
          <slot name="footer">yyyy</slot>
        </div>
  </div>
</template>

<script>
export default {
    name:'',
    // 父传子数据
    props:['title','count']
}
</script>

<style scoped>
    .card-header{
        display: flex;
        /* 左右布局 */
        justify-content: space-between;
        color: #bfbfbf;
        font-size: 16px;
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
        border-top:1px solid  #eee;
        font-size: 14px;
        padding-top: 10px;
    }
</style>