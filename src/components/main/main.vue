<template>
  <div class="common-layout">
    <el-container style="width: 100vw">
      <el-header>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
        >
          <el-menu-item index="0">
            <img
                style="width: 40px"
                src="/subway.png"
            />
          </el-menu-item>

          <router-link class="nav-link" to="/about">
            <el-menu-item index="1">主页</el-menu-item>
          </router-link>
          <router-link class="nav-link" to="/point-info">
            <el-menu-item index="2">站点TOD</el-menu-item>
          </router-link>
          <router-link class="nav-link" to="/line">
            <el-menu-item index="4">廊道TOD</el-menu-item>
          </router-link>

          <router-link class="nav-link" to="/chat">
            <el-menu-item index="5">AI问答</el-menu-item>
          </router-link>

          <div class="flex-grow"/>
          <el-menu-item index="5">
            <el-avatar src="/people.png"></el-avatar>
          </el-menu-item>
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
.common-layout{
  height: 100vh;

}

.flex-grow {
  flex-grow: 1;
}

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
<script>
</script>