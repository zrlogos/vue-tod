<template>

  <el-card style="width: 40%" shadow="always">
    <div class="demo-collapse">
      <el-collapse v-model="activeName" accordion>
        <el-collapse-item name="1">
          <template #title>
            <div class="custom-title">功能互补</div>
          </template>
          <div class="custom-content">
            功能互补评价指标：基于廊道内功能互补整合发展，从土地利用多样性、
            职住平衡、公共服务设施均衡性三个方面选取了功能混合度、职住比、职住用
            地比、公共服务设施核密度、人均医疗设施用地、人均教育设施用地、公共服
            务设施供需比 7 个指标展开评价。
          </div>
        </el-collapse-item>
        <el-collapse-item name="2">
          <template #title>
            <div class="custom-title">交通协同</div>
          </template>
          <div class="custom-content">
            交通协同评价指标：基于廊道内的交通协调换乘，从交通换乘距离和公交
            服务水平方面选取公交换乘距离、轨道站点步行覆盖率、交通设施比和交叉口
            密度 4 个指标展开评价。
          </div>
        </el-collapse-item>
        <el-collapse-item name="3">
          <template #title>
            <div class="custom-title">经济效应</div>
          </template>
          <div class="custom-content">
            社会经济效应评价指标：基于廊道内的经济效益发展，空间上从人口活力
            方面或经济上从房地产价值方面选取到访人口热力、商业设施密度和土地的升
            值 3 个指标展开评价。
          </div>
        </el-collapse-item>

      </el-collapse>

    </div>


  </el-card>


</template>


>


<script lang="ts" setup>
import {ref} from 'vue'

const activeName = ref('1')
</script>

<style scoped>

.custom-title {
  font-size: medium;
  font-weight: bold;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;

}

.custom-content {
  font-size: medium;
  font-family: Arial, "Microsoft YaHei", serif;
}
</style>
