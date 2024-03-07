<template>

  <el-card style="width: 40%"  shadow="always">
    <div class="demo-collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template #title>
            <div class="custom-title">功能互补</div>
          </template>
          <div class="custom-content">
            Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div class="custom-title">交通协同</div>
          </template>
          <div class="custom-content">
            Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <div class="custom-title">经济效应</div>
          </template>
          <div class="custom-content">
            Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;
          </div>
        </el-collapse-item>
        <el-collapse-item name="4">
          <template #title>
            <div class="custom-title">综合评价</div>
          </template>
          <div class="custom-content">
            Consistent with real life: in line with the process and logic of real life, and comply with languages and habits that the users are used to;
          </div>
        </el-collapse-item>
      </el-collapse>

    </div>


  </el-card>



</template>



>





<script lang="ts" setup>
import { ref } from 'vue'

const activeName = ref('1')
</script>

<style scoped>

.custom-title{
  font-size: medium;
  font-weight: bold;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;

}
.custom-content{
  font-size: medium;
  font-family: Arial,"Microsoft YaHei",serif;
}
</style>
