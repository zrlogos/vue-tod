<template>
  <div class="demo-progress">

    <el-progress :percentage="10" :format="format1" :stroke-width="24" :color="'#d91616'" striped striped-flow />
    <el-progress :percentage="30" :format="format2" :stroke-width="24" :color="'#16d995'" striped  striped-flow/>
    <el-progress :percentage="78" :format="format3" :stroke-width="24" :color="'#b516d9'" striped  striped-flow/>
    <el-progress :percentage="50" :format="format4" :stroke-width="24" :color="'#335fbd'" striped  striped-flow/>
  </div>
</template>

<script lang="ts" setup>
const format1 = (percentage) => ('功能互补')
const format2 = (percentage) => ('交通协同')
const format3 = (percentage) => ('经济效应')
const format4 = (percentage) => ('综合评价')
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
