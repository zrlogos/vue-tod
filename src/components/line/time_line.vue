<template>


  <el-steps style="max-width: 600px" :active="actives[0].value" space>
    <el-step title="Step 1" :icon="Location"/>
    <el-step title="Step 2" :icon="LocationFilled"/>
    <el-step title="Step 3" :icon="LocationFilled"/>
    <el-step title="Step 4" :icon="Location"/>
    <el-step title="Step 5" :icon="LocationFilled"/>
    <el-step title="Step 6" :icon="LocationFilled"/>
  </el-steps>

  <el-steps style="max-width: 600px" :active="actives[1].value" space>
    <el-step title="Step 1" :icon="Location"/>
    <el-step title="Step 2" :icon="LocationFilled"/>
    <el-step title="Step 3" :icon="LocationFilled"/>
    <el-step title="Step 4" :icon="Location"/>
    <el-step title="Step 5" :icon="LocationFilled"/>
    <el-step title="Step 6" :icon="LocationFilled"/>
  </el-steps>


  <el-steps style="max-width: 600px" :active="actives[2].value" space>
    <el-step title="Step 1" :icon="Location"/>
    <el-step title="Step 2" :icon="LocationFilled"/>
    <el-step title="Step 3" :icon="LocationFilled"/>
    <el-step title="Step 4" :icon="Location"/>
    <el-step title="Step 5" :icon="LocationFilled"/>
    <el-step title="Step 6" :icon="LocationFilled"/>
  </el-steps>


  <el-steps style="max-width: 600px" :active="actives[3].value" space>
    <el-step title="Step 1" :icon="Location"/>
    <el-step title="Step 2" :icon="LocationFilled"/>
    <el-step title="Step 3" :icon="LocationFilled"/>
    <el-step title="Step 4" :icon="Location"/>
    <el-step title="Step 5" :icon="LocationFilled"/>
    <el-step title="Step 6" :icon="LocationFilled"/>
  </el-steps>

  <el-steps style="max-width: 600px" :active="actives[4].value" space>
    <el-step title="Step 1" :icon="Location"/>
    <el-step title="Step 2" :icon="LocationFilled"/>
    <el-step title="Step 3" :icon="LocationFilled"/>
    <el-step title="Step 4" :icon="Location"/>
    <el-step title="Step 5" :icon="LocationFilled"/>
    <el-step title="Step 6" :icon="LocationFilled"/>
  </el-steps>

  <el-steps style="max-width: 600px" :active="actives[5].value" space>
    <el-step title="Step 1" :icon="Location"/>
    <el-step title="Step 2" :icon="LocationFilled"/>
    <el-step title="Step 3" :icon="LocationFilled"/>
    <el-step title="Step 4" :icon="Location"/>
    <el-step title="Step 5" :icon="LocationFilled"/>
    <el-step title="Step 6" :icon="LocationFilled"/>
  </el-steps>

  <el-button style="margin-top: 12px" @click="next">Next step</el-button>


</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {
  Location, LocationFilled,  ArrowLeft,  ArrowRight,  Delete,  Edit,  Share,
} from '@element-plus/icons-vue'

const actives = [ref(-1), ref(-1), ref(-1), ref(-1), ref(-1), ref(-1)];



// 使用示例


let index=0
const next = () => {
  actives.forEach((active, i) => {
    active.value = i === index ? 6 : -1;
  });
  index=(index+1)%6

}

</script>

