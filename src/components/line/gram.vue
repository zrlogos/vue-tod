<template>
  <div class="demo-progress">
    <el-progress  :percentage="130" :format="format1" :stroke-width="24" striped  striped-flow/>
    <el-progress :percentage="10" :format="format1" :stroke-width="24" :color="customColor1" striped  striped-flow/>
    <el-progress :percentage="30" :format="format2" :stroke-width="24" :color="customColor2" striped  striped-flow/>
    <el-progress :percentage="78" :format="format3" :stroke-width="24" :color="customColor3" striped  striped-flow/>
    <el-progress :percentage="50" :format="format4" :stroke-width="24" :color="customColor4" striped  striped-flow/>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";

const customColor1 = ref('#d91616')
const customColor2 = ref('#16d995')
const customColor3= ref('#b516d9')
const customColor4 = ref('#225569')
const format1 = (percentage) => ('指标1')
const format2 = (percentage) => ('指标2')
const format3 = (percentage) => ('指标3')
const format4 = (percentage) => ('指标4')
</script>

<style scoped>
.demo-progress .el-progress--line {
  margin-bottom: 15px;
  max-width: 600px;
}
</style>
