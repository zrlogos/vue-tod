<script>

import PointInfo from '@/components/map/pointInfo.vue'
import BeijingSubway from "@/components/subway/beijngSubway.vue";

export default {

  components: {
    PointInfo,
    BeijingSubway
  },


}
</script>

<template>
    <nav class="navbar">
      <router-link class="nav-link" to="/main">主页</router-link>
      <router-link class="nav-link" to="/point-info">站点信息</router-link>
      <router-link class="nav-link" to="/beijing-subway">北京地铁</router-link>
      <router-link class="nav-link" to="/line">廊道TOD介绍</router-link>
    </nav>
    <div class="content">
      <router-view v-slot="{Component}">
        <transition>
          <keep-alive>
            <component :is="Component" />
          </keep-alive>
        </transition>
      </router-view>
      <div></div>
    </div>
</template>

<style>
.navbar {
  background-color: #214b5b;
  color: #fff;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 0;
  left: 0;
}
.navbar .nav-link {
  margin-right: 15px;
  font-size: 20px;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  font-weight: bold;
  font-family:    Helvetica, sans-serif;
}
.content {
  margin-top: 40px;
  padding: 0;
  width: 100%;
  height: calc(100% - 40px);
  position: fixed;
}
html, body {
  width: 100%;
  height: 100%;
  font-size: 14px;
  line-height: 1.6;
  color: #636b6f;
}

body {
  position: relative;
}

#app {
  width: 100%;
  height: 100%;
}



</style>