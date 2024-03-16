<script>

import MyTable from "@/components/map/table.vue";
import sub_map from "@/components/map/sub_map.vue";

export default {



  components: {
    MyTable,
    sub_map,
  },


}
</script>

<template>


  <div class="container">
    <div class="left">
      <MyTable/>
    </div>
    <div class="right">
      <sub_map/>
    </div>

  </div>
</template>


<style scoped>

.container {
  display: flex;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.left {
  background-color: rgba(246, 246, 246, 0.48);
  border-right: 0.5px dashed #857f7f;
  flex: 2;
}
.right{
  flex: 7;
}




</style>