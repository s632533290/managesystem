<template>
  <a-row >
    <a-col :span="12">  <bar-view></bar-view> </a-col>
    <a-col :span="12">  <pie-view></pie-view> </a-col>
  </a-row>
</template>

<script>
import barView from './charts/barView.vue'
import pieView from "@/components/charts/pieView";
export default {
  name: "BIView",
  components: {
    barView,
    pieView
  }
}
</script>

<style scoped>

</style>