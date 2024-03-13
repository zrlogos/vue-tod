<script>
export default {
  name: "about",
  data() {
    return {
      stations: [
        { name: '善各庄', transfer: false },
        { name: '来广营', transfer: false },
        { name: '东湖渠', transfer: false },
        { name: '望京', transfer: true, lines: '15', colors: ['#92729A' ]},
        { name: '阜通', transfer: false },
        { name: '望京南', transfer: false },
        { name: '高家园', transfer: false },
        { name: '将台', transfer: false },
        { name: '东风北桥', transfer: false },
        { name: '枣营', transfer: false },
        { name: '朝阳公园', transfer: false },
        { name: '金台路', transfer: true, lines: '6', colors: ['#D19708'] },
        { name: '大望路 ', transfer: true, lines: '1', colors: ['#c23931'] },
        { name: '九龙山 ', transfer: true, lines: '7', colors: ['#f2c172' ]},
        { name: '平乐园', transfer: false },
        { name: '北工大西门', transfer: false },
        { name: '十里河', transfer: true, lines: '10/17', colors: ['#009bc1', '#00a9a9'] },
        { name: '方庄', transfer: false },
        { name: '蒲黄榆', transfer: true, lines: '5', colors: ['#a81b81'] },
        { name: '景泰', transfer: false },
        { name: '永定门外', transfer: true, lines: '8', colors: ['#009b6b']},
        { name: '陶然桥', transfer: false },
        { name: '北京南站', transfer: true, lines: '4', colors: ['#d8b9b3'] },
        { name: '景风门', transfer: true, lines: '19', colors: ['#d6abc1'] },
        { name: '西铁营', transfer: false },
        { name: '菜户营', transfer: false },
        { name: '丽泽商务区', transfer: false },
        { name: '东管头', transfer: false },
        { name: '西局',  transfer: true, lines: '10', colors: ['#009bc1']},
        { name: '七里庄', transfer: true, lines: '9', colors: ['#92bf1e'] },
        { name: '大井', transfer: false },
        { name: '郭庄子', transfer: false },
        { name: '大瓦窑', transfer: false },
        { name: '园博园', transfer: false },
        { name: '张郭庄', transfer: false }
      ]
    }
  }
}
</script>

<template>

  <div class="line-item">
    <div class="line" style="color:#009693;">
      <div v-for="station in stations" :key="station.name" class="station">
        <a v-if="station.transfer" class="circle"><i class="icofont-ui-rotation"></i></a>
        <a v-else class="circle"></a>
        <div v-if="station.transfer" class="transfer-wrapper">
          <div v-for="color in station.colors" class="transfer-line" :style="{ 'background-color': color }"></div>
        </div>
        <div class="transfer-name" v-if="station.transfer" :style="{ 'color': station.colors[0] }">
          <div>{{ station.lines }}</div>
          <div class="line-label">号线</div>
        </div>
        <a>{{ station.name }}</a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info {
  display: flex;
  flex: 1
}

a {
  color: #333;
  text-decoration: none
}

.line-item {
  font-size: 18px;
  background-image: url(//cdnwww.mtr.bj.cn/bjmtr/default/kmICQA_lgCQkmyWEzCqMB.png);
  background-size: 100% 100%;
  background-position: top;
  background-repeat: no-repeat;
  overflow-x: auto;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  box-sizing: border-box;
  padding: 100px 20px 20px
}

.line-item::-webkit-scrollbar {
  width: 4px;
  height: 4px
}

.line-item::-webkit-scrollbar-track {
  background: #eee
}

.line-item::-webkit-scrollbar-thumb {
  background: #a02f42
}

.line-item .line {
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  border-top: 2px solid #fff;
  min-height: calc(10em + 40px)
}

.line-item .line .station {
  width: 19px;
  text-align: center;
  position: relative
}

.line-item .line .station:not(:last-child):after {
  content: "";
  display: block;
  height: 2px;
  background-color: currentColor;
  width: 45px;
  position: absolute;
  top: -2px;
  left: 9px;
  z-index: 1
}

.line-item .line .station.not-connected:after {
  background-color: #ccc
}

.line-item .line .station:first-child {
  margin-left: -9px
}

.line-item .line .station:last-child {
  margin-right: -9px
}

.line-item .line .station a, .line-item .line .station span {
  margin-top: 1em;
  line-height: 1;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr
}

.line-item .line .station a.not-open, .line-item .line .station span.not-open {
  color: #999
}

.line-item .line .station .circle {
  color: currentColor !important;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #fff;
  border: 2px solid;
  position: absolute;
  left: 0;
  top: -11px;
  z-index: 2;
  margin-top: 0
}

.line-item .line .station .circle i {
  position: absolute;
  left: 2px;
  top: 2px;
  font-size: 12px
}

.line-item .line .station:hover a {
  color: #a02f42 !important
}

.line-item .line .station:hover .circle {
  border-color: #a02f42 !important
}

.line-item .line .station:hover .circle i {
  color: #a02f42 !important
}

.line-item .transfer-wrapper {
  position: absolute;
  z-index: 1;
  top: -25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex
}

.line-item .transfer-wrapper .transfer-line {
  background-color: #ccc;
  width: 9px;
  height: 25px;
  border-radius: 5px
}

.line-item .transfer-name {
  position: absolute;
  z-index: 1;
  top: -70px;
  line-height: 1.2em;
  font-size: .8em;
  left: 50%;
  transform: translateX(-50%)
}

.line-item .transfer-name .line-label {
  margin: 0 auto;
  -webkit-writing-mode: vertical-lr;
  -ms-writing-mode: tb-lr;
  writing-mode: vertical-lr
}

.demo-progress {
  margin-top: 10px;
  margin-bottom: 30px;
}

.demo-progress .el-progress--line {
  width: 100%;
  margin-bottom: 15px;
  max-width: 600px;
}

.demo-progress .custom-content {

  font-size: medium;
  font-weight: bolder;
  font-family: "Arial", "Microsoft YaHei", "黑体", "宋体", sans-serif;

}


</style>