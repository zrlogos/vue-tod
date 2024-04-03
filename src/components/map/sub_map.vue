<script xmlns:v-slot="http://www.w3.org/1999/XSL/Transform">
import svgPanZoom from 'svg-pan-zoom';
import {SVG} from '@svgdotjs/svg.js'
import $ from 'jquery'

export default {
  data() {
    return {
      showStationInfo: false,
      stationName: '',
      stationInfoStyle: {
        position: 'absolute',
        left: '0',
        top: '0',


      },
      getInfoData: {},
    };
  },

  mounted() {
    this.loadXML();
    this.loadJson().then(() => {
    });
  },

  methods: {
    loadXML() {
      // 使用 fetch 加载 XML 文件
      fetch('/beijing.xml')
          .then(response => response.text())
          .then(data => {
            // 将 XML 字符串转换为 DOM 对象
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            // 处理 XML 数据，绘制地铁线路图
            this.processXML(xmlDoc);
            // 初始化 svg-pan-zoom
            this.$nextTick(() => {
              window.panzoom = svgPanZoom('#mobile-svg', {
                zoomEnabled: true,
                panEnabled: true,
                controlIconsEnabled: false,
                fit: false,
                center: false,
                contain: false,
                minZoom: 0.3,
                maxZoom: 5,
              });
              panzoom.pan({x: -950 + window.innerWidth / 2, y: -700 + window.innerHeight / 2});
            });
          })
          .catch(error => {
            console.error('加载 XML 文件出错:', error);
          });
    },
    processXML(data) {
      // 在这里处理 XML 数据，绘制地铁线路图
      // 可以将原有的处理 XML 数据的代码复制到这里，并进行必要的修改
      let BJ = {
        data: "",
        startName: "",
        endName: "",
        type: 1
      };
      BJ.data = data;
      var ls = $(data).find("sw").children()
      for (var i = 0; i < ls.length; i++) {
        var ps = $(ls[i]).children();
        var lColor = $(ls[i]).attr("lc").replace("0x", "#");
        var lLoop = $(ls[i]).attr("loop");
        var lSlb = $(ls[i]).attr("slb");
        for (var n = 0; n < $(ls[i]).attr("lp").split(";").length; n++) {
          if ($(ls[i]).attr("lp").split(";")[n]) {
            var lp = $(ls[i]).attr("lp").split(";")[n].split(",");
            var rect = SVG('#g-box').rect(lp[2] * 1, lp[3] * 1).move(lp[0] * 1, lp[1] * 1).fill(lColor);
            var text = SVG('#g-box').text()
                .attr({
                  "font-size": 12,
                  x: lp[0] * 1 + lp[2] / 2 - 30,
                  y: lp[1] * 1 + lp[3] / 3 * 2,
                  "style": "fill: white;" // 使用 style 属性设置字体颜色
                })
                .text(lSlb.split(",")[n].indexOf("机场") == -1 ?
                    "地铁" + (isNaN(lSlb.split(",")[n] * 1) ? lSlb.split(",")[n] : lSlb.split(",")[n] + "号") + "线"
                    : lSlb.split(",")[n] + "线");
          }
        }
        for (var j = 0; j < ps.length; j++) {
          if (j == ps.length - 1) {
            if (lLoop === "false") {
              continue;
            }
          }
          var thisP = $(ps[j]);
          var thisPlus = (j == ps.length - 1) ? $(ps[0]) : $(ps[j + 1]);
          if (thisP.attr("arc")) {
            var path = SVG('#g-box').path(`M${thisP.attr("x") * 1} ${thisP.attr("y") * 1} Q${thisP.attr("arc").split(":")[0] * 1} ${thisP.attr("arc").split(":")[1] * 1} ${thisPlus.attr("x") * 1} ${thisPlus.attr("y") * 1}`).stroke({color: lColor});
            continue;
          }
          var line = SVG('#g-box').line(thisP.attr("x") * 1, thisP.attr("y") * 1, thisPlus.attr("x") * 1, thisPlus.attr("y") * 1).stroke({color: lColor});
        }
        // noinspection JSDuplicatedDeclaration
        for (var j = 0; j < ps.length; j++) {
          var thisP = $(ps[j]);
          if (!thisP.attr("lb")) {
            continue;
          }
          var text = SVG('#g-box').text()
              .attr({
                "font-size": 12,
                x: thisP.attr("x") * 1 + thisP.attr("rx") * 1,
                y: thisP.attr("y") * 1 + thisP.attr("ry") * 1 + 14
              })
              .text(thisP.attr("lb"));


          // 在绘制站点时添加点击事件
          if (thisP.attr("ex") === "true") {
            var image = SVG('#g-box').image("/turn.png").size(14, 14).move(thisP.attr("x") - 7, thisP.attr("y") - 7 + (thisP.attr("dy") ? thisP.attr("dy") * 1 : "")).attr({sdata: thisP.attr("lb")});

            // 为转换图标添加点击事件
            image.on('click', this.handleStationClick);
          } else {
            var circle = SVG('#g-box').circle(8).move(thisP.attr("x") * 1 - 4, thisP.attr("y") * 1 - 4).stroke({color: lColor}).attr({sdata: thisP.attr("lb")});

            if (thisP.attr("iu") === "false") {
              circle.addClass("disabled");
            }

            // 为站点圆圈添加点击事件
            circle.on('click', this.handleStationClick);
          }
        }
      }
    },

    handleStationClick(event) {
      const stationName = event.target.getAttribute('sdata');
      const rect = event.target.getBoundingClientRect();
      const offsetX = rect.left + window.pageXOffset;
      const offsetY = rect.top + window.pageYOffset;
      this.stationName = stationName;
      this.stationInfoStyle.left = offsetX + 'px';
      this.stationInfoStyle.top = offsetY + 'px';
      this.stationInfoStyle.width = '380px';
      this.stationInfoStyle.height = '250px'
      this.showStationInfo = true;
    },

    loadJson() {
      return fetch('/getInfo.json')
          .then(response => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then(data => {
            this.getInfoData = data;
          })
          .catch(error => {
            console.error('There was a problem with your fetch operation:', error);
          });
    },
    getStationInfo(stationName) {
      const stationData = this.getInfoData[stationName];


      if (stationData) {
        const { s1, s2, s3, s4, s5, s6, s7, s8, s9 } = stationData;
        return `人均教育用地面积: ${s1}<br>
                                公共服务设施供需比: ${s2}<br>
                                站点交叉口密度: ${s3}<br>
                                平均交通换乘距离: ${s4}<br>
                                人均医疗用地面积: ${s5}<br>
                                功能混合度: ${s6}<br>
                                产业建筑总面积/住宅密度: ${s7}<br>
                                交通设施用地密度: ${s8}<br>
                                商业用地密度: ${s9}`;
      } else {
        return '暂无信息';
      }
    },

  }


}

</script>

<template>
  <div class="map">
    <svg id="mobile-svg" xmlns="http://www.w3.org/2000/svg">
      <g id="g-box" font-size="10">
        <image xlink:href="/tam.png" width="85" height="26" x="908" y="758"></image>
        <image xlink:href="/north.png" width="50" height="100" x="1710" y="250"></image>
        <image xlink:href="/airport.png" width="40" height="40" x="1510" y="355"></image>
      </g>
    </svg>
  </div>
  <el-card
      id="map-info"
      class="station-info"
      v-show="showStationInfo"
      :style="stationInfoStyle"
      shadow="always"
      @mouseenter.native="showStationInfo = true"
      @mouseleave.native="showStationInfo = false"
  >
    <h3>{{ stationName }}</h3>
    <div class="card-content"
         v-html="getStationInfo(stationName)"

         style="font-size: 0.9rem;
         color:#454649   "
    ></div>
  </el-card>


</template>

<style>

#map-info h3 {
  margin: 0;
  font-weight: bolder;
}


#mobile-svg {
  display: block;
  width: 100%;
  height: 1000px;
  text-rendering: geometricPrecision;
}

.clear::after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}

.line-info {
  position: absolute;
  top: 122px;
  left: 80px;
  width: 300px;
  height: 600px;
  border: 1px solid #000;
  background: #ffffff;
  border-radius: 4px;
  padding: 10px;
  overflow: hidden;
  display: none;
}

.line-info h2 {
  line-height: 65px;
}

.line-info h2 span {
  vertical-align: middle;
}

.line-info h2 img {
  vertical-align: middle;
  cursor: pointer;
  margin: 0 10px 0;
}

.line-type {
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
}

.line-type li {
  float: left;
  width: 50%;
  text-align: center;
  line-height: 52px;
  cursor: pointer;
}

.line-type li.active {
  background: #999;
  color: #ffffff;
}

.line-info p {
  font-size: 12px;
  height: 24px;
  line-height: 24px;
}

.line-info div {
  height: 430px;
  overflow-y: scroll;
}


.map rect.mark {
  fill: white;
  opacity: 0.85;
}

.map circle {
  fill: white;
  stroke-width: 1;
}

.map line {
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-width: 5;
}

.map path {
  fill: none;
  stroke-linejoin: round;
  stroke-linecap: round;
  stroke-width: 5
}

.map text {
  font-family: 黑体, serif;
  fill: black;
}

.map text.subway-name {
  fill: #ffffff;
  text-anchor: middle;
}

.map text.disabled {
  fill: rgb(204, 204, 204);
}
</style>