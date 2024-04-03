<script setup>
import {onMounted, onUnmounted} from "vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import {heatmapData} from "@/assets/heatmapData.js";

let map = null;
onMounted(() => {
  AMapLoader.load({
    key: "8855495d6aa4f61420c78f5e523d4fa9", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "2.0", // 指定要加载的 JSAPI 的版本
    plugins: ["AMap.Scale", "AMap.HeatMap"], // 确保包含 AMap.HeatMap
  })
      .then((AMap) => {
        map = new AMap.Map("container", {
          viewMode: "2D", // 是否为3D地图模式
          zoom: 11, // 初始化地图级别
          center: [116.397428, 39.90923], // 初始化地图中心点位置
        });

        // 假设 heatmapData 是您已准备好的数据
        const points = heatmapData.map(item => ({
          lng: item.lng,
          lat: item.lat,
          count: item.count
        }));
        console.log(points);
        // 加载热力图插件
        map.plugin(["AMap.HeatMap"], function () {
          // 在地图对象叠加热力图
          const heatmap = new AMap.HeatMap(map, {
            radius: 25, // 给定半径
            opacity: [0, 0.8]
          });
          // 设置热力图数据集
          heatmap.setDataSet({
            data: points,
            max: 150
          });
        });
      })
      .catch(error => {
        console.error("AMap Loader加载失败：", error);
      });
});


onUnmounted(() => {
  map?.destroy();
});
</script>

<template>
  <div id="container"></div>
</template>

<style scoped>
#container {
  width: 100%;
  height: 800px;
}
</style>
