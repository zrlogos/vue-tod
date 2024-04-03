<template>
  <div style="width: 100vw;height: 100vh; overflow: hidden;display: flex">
    <div style="flex: 1">
      <el-image style="width: 100%;height: 100%" fit="cover"
                src="/subway-map.png"/>
      <div class="welcome-title">
        <div style="font-size: 40px;font-weight: bold">北京地铁TOD</div>
        <div style="margin-top: 10px"> TOD: Transit-oriented development</div>
        <div style="margin-top: 5px">公共交通导向型开发</div>
      </div>
      <div class="to-next">
        <el-button type="warning" :icon="Right" circle @click="toggleLoginPart"
        style="width: 60px; height: 60px"
        />
      </div>
    </div>
    <transition name="el-fade-in-linear">
      <div v-if="showLoginPart" style="width: 400px;background-color: white;z-index: 1" class="login-part">
        <router-view v-slot="{ Component }">
          <transition name="el-fade-in-linear" mode="out-in">
            <component :is="Component" style="height: 100%"/>
          </transition>
        </router-view>
      </div>
    </transition>
  </div>
</template>

<script>
import {Right} from "@element-plus/icons";

export default {
  mounted() {
    if (window.innerWidth < 768) {
      this.$toast.info('未适配移动端，请使用PC端打开');
    }
  },
  computed: {
    Right() {
      return Right
    }
  },
  data() {
    return {
      showLoginPart: false
    };
  },
  methods: {
    toggleLoginPart() {
      this.showLoginPart = !this.showLoginPart;
    }
  }
};
</script>

<style scoped>
.welcome-title {
  position: absolute;
  top: 60px;
  left: 50px;
  color: rgb(38, 37, 37);
  text-shadow: 0 0 50px #cfd3dc;
}

.to-next {
  position: absolute;
  right: 10%;
  bottom: 50%

}
</style>