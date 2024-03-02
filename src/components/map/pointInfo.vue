<script>

import MyTable from "@/components/map/table.vue";

export default {


  mounted() {

    import('./js/painter.js')
  },
  components: {
    MyTable,
  },


}
</script>

<template>


  <div class="container">
    <div class="left">
      <MyTable/>
    </div>

    <div class="map">
      <svg id="mobile-svg" xmlns="http://www.w3.org/2000/svg">
        <g id="g-box" font-size="10">
          <image xlink:href="/tam.png" width="85" height="26" x="908" y="758"></image>
          <image xlink:href="/north.png" width="50" height="100" x="1710" y="250"></image>
          <image xlink:href="/airport.png" width="40" height="40" x="1510" y="355"></image>
        </g>
      </svg>
      <section class="station-info"></section>

    </div>


  </div>
</template>


<style>

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

.map {
  flex: 7;
}


.clear::after {
  content: "";
  display: block;
  visibility: hidden;
  height: 0;
  clear: both;
}

.station-info {
  position: absolute;
  width: 380px;
  height: 200px;
  border: 1px solid #000;
  background: #ffffff;
  border-radius: 4px;
  display: none;
  padding: 10px;
  overflow-y: scroll;
}

.station-info li {
  font-size: medium;
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


#mobile-svg{
  display: block;
  width: 100%;
  height: 100%;
  text-rendering: geometricPrecision;
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