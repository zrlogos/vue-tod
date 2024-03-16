<template>
  <div style="width: 100vw;height: 100vh;overflow: hidden;display: flex">
    <div style="flex: 1">
      <el-image style="width: 100%;height: 100%" fit="cover"
                src="/subway-map.png"/>
    </div>
    <div class="welcome-title">
      <div style="font-size: 40px;font-weight: bold">北京地铁TOD</div>
      <div style="margin-top: 10px"> TOD: Transit-oriented development </div>
      <div style="margin-top: 5px">公共交通导向型开发</div>
    </div>


    <div style="width: 400px;background-color: white;z-index: 1">
      <router-view v-slot="{ Component }">
        <transition name="el-fade-in-linear" mode="out-in">
          <component :is="Component" style="height: 100%"/>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.welcome-title {
  position: absolute;
  top: 60px;
  left: 50px;
  color: rgb(38, 37, 37);
  text-shadow: 0 0 50px #cfd3dc;
}
</style>