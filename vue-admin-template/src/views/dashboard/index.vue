<template>
  <div class="dashboard-container">
    <!-- <div class="dashboard-text">name: {{ name }}</div> -->
    <Card></Card>
    <Sale style="margin:20px 0px"></Sale>
    <ShowData></ShowData>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Card from './Card/index.vue'
import Sale from './Sale/index.vue'
import ShowData from './showData'
export default {
  name: 'Dashboard',
  components:{
    Card,
    Sale,
    ShowData,
  },
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
