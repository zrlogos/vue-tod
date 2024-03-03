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
  <div class="common-layout">
    <el-container>
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
        >
          <div class="flex-grow"/>
          <router-link class="nav-link" to="/main">
            <el-menu-item index="1">主页</el-menu-item>
          </router-link>
          <router-link class="nav-link" to="/point-info">
            <el-menu-item index="2">站点信息</el-menu-item>
          </router-link>
          <router-link class="nav-link" to="/beijing-subway">
            <el-menu-item index="3">北京地铁</el-menu-item>
          </router-link>
          <router-link class="nav-link" to="/line">
            <el-menu-item index="4">廊道TOD介绍</el-menu-item>
          </router-link>
        </el-menu>
      </el-header>
      <el-main>
        <div>
          <router-view v-slot="{Component}">
            <transition>
              <keep-alive>
                <component :is="Component"/>
              </keep-alive>
            </transition>
          </router-view>
          <div></div>
        </div>

      </el-main>
    </el-container>
  </div>
</template>


<style>
.nav-link {
  margin-right: 15px;
  text-decoration: none;
  font-weight: 700;
  font-family: Inter, 'Helvetica Neue', Helvetica, 'PingFang SC',
  'Hiragino Sans GB', 'Microsoft YaHei', '微软雅黑', Arial, sans-serif;
}

body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}


</style>