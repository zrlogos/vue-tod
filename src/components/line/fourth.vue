<script>
import {Back, Right,Search} from "@element-plus/icons";
import $ from 'jquery';
import intro from "./intro.vue"

export default {
  name: "fourth",

  components:{
    intro,
  },

  computed: {
    Search() {
      return Search
    },
    Back() {
      return Back
    },
    Right() {
      return Right
    },

  },


  data() {
    return {
      drawer:false,
      percentage1: 0,
      percentage2: 0,
      percentage3: 0,
      percentage4: 0,


      tods: [
        ["安河桥北", "北宫门", "西苑", "圆明园", "北京大学东门"],
        ["中关村", "海淀黄庄", "人民大学", "魏公村", "国家图书馆",],
        ["动物园", "西直门", "新街口", "平安里", "西四"],
        ["灵境胡同", "西单", "宣武门", "菜市口", "陶然亭",],
        ["北京南站", "马家堡", "角门西", "公益西桥", "新宫",],
        ["西红门", "高米店北", "高米店南", "枣园", "清源路",],
        ["黄村西大街", "黄村火车站", "义和庄", "生物医药基地", "天宫院"],
      ],

      scores: [
        [10, 20, 30, 40],
        [30, 50, 60, 90],
        [40, 30, 80, 60],
        [50, 60, 30, 30],
        [80, 80, 70, 20],
        [90, 10, 20, 10],
        [70, 90, 30, 80],
      ],
      stations: [
      { name: '安河桥北', transfer: false },
      { name: '北宫门', transfer: false },
      { name: '西苑', transfer: true, lines: '16', colors: ['#93AE58'] },
      { name: '圆明园', transfer: false },
      { name: '北京大学东门', transfer: false },
      { name: '中关村', transfer: false },
      { name: '海淀黄庄', transfer: true, lines: '10', colors: ['#009bc1'] },
      { name: '人民大学', transfer: false },
      { name: '魏公村', transfer: false },
      { name: '国家图书馆', transfer: true, lines: '9/16', colors: ['#92bf1e', '#93AE58'] },
      { name: '动物园', transfer: false },
      { name: '西直门', transfer: true, lines: '2/13', colors: ['#156097', '#f6e614'] },
      { name: '新街口', transfer: false },
      { name: '平安里', transfer: true, lines: '6/19', colors: ['#d19708', '#d6abc1'] },
      { name: '西四', transfer: false },
      { name: '灵境胡同', transfer: false },
      { name: '西单', transfer: true, lines: '1', colors: ['#c23931'] },
      { name: '宣武门', transfer: true, lines: '2', colors: ['#156097'] },
      { name: '菜市口', transfer: true, lines: '7', colors: ['#f2c172'] },
      { name: '陶然亭', transfer: false },
      { name: '北京南站', transfer: true, lines: '14', colors: ['#D8B9B3'] },
      { name: '马家堡', transfer: false },
      { name: '角门西', transfer: true, lines: '10', colors: ['#009bc1'] },
      { name: '公益西桥', transfer: false },
      { name: '新宫', transfer: true, lines: '19', colors: ['#d6abc1'] },
      { name: '西红门', transfer: false },
      { name: '高米店北', transfer: false },
      { name: '高米店南', transfer: false },
      { name: '枣园', transfer: false },
      { name: '清源路', transfer: false },
      { name: '黄村西大街', transfer: false },
      { name: '黄村火车站', transfer: false },
      { name: '义和庄', transfer: false },
      { name: '生物医药基地', transfer: false },
      { name: '天宫院', transfer: false }
],


      index: -1,
    };
  },


  methods: {


    handleNext() {
      $("div.station a").css('color', '');
      $("div.station a.circle").css('background-color', '');
      this.index = (this.index + 1) % this.tods.length
      for (let i = 0; i < this.tods[this.index].length; i++) {
        let stationName = this.tods[this.index][i];
        $("div.station:contains('" + stationName + "') a").css('color', 'red');
        $("div.station:contains('" + stationName + "') a.circle").css('background-color', 'rgb(255,192,203)');

      }

      this.percentage1 = this.scores[this.index][0]
      this.percentage2 = this.scores[this.index][1]
      this.percentage3 = this.scores[this.index][2]
      this.percentage4 = this.scores[this.index][3]



    },


    handleBack() {

      $("div.station a").css('color', '');
      $("div.station a.circle").css('background-color', '');
      if (this.index >= 0) this.index--

      if(this.index===-1){
        this.percentage1 = 0
        this.percentage2 = 0
        this.percentage3 = 0
        this.percentage4 = 0
      }else {
        for (let i = 0; i < this.tods[this.index].length; i++) {
          let stationName = this.tods[this.index][i];
          $("div.station:contains('" + stationName + "') a").css('color', 'red');
          $("div.station:contains('" + stationName + "') a.circle").css('background-color', 'rgb(255,192,203)');


        }
        this.percentage1 = this.scores[this.index][0]
        this.percentage2 = this.scores[this.index][1]
        this.percentage3 = this.scores[this.index][2]
        this.percentage4 = this.scores[this.index][3]
      }


    },

  }
}
</script>

<template>


  <div class="info">

    <intro/>
    <el-card style="width: 800px;margin-left: 30px " >
      <template #default>
        <div class="demo-progress">
          <el-progress :percentage="percentage1" :stroke-width="24" :color="'#d91616'" striped striped-flow>
            <span class="custom-content">&nbsp  &nbsp 功能互补:  {{ percentage1 }}</span>
          </el-progress>
          <el-progress :percentage="percentage2" :stroke-width="24" :color="'#16d995'" striped striped-flow>
            <span class="custom-content">&nbsp &nbsp   交通协同:  {{ percentage2}}</span>
          </el-progress>
          <el-progress :percentage="percentage3" :stroke-width="24" :color="'#b516d9'" striped striped-flow>
            <span class="custom-content"> &nbsp  &nbsp 经济效应:  {{ percentage3 }}</span>
          </el-progress>
          <el-progress :percentage="percentage4" :stroke-width="24" :color="'#335fbd'" striped striped-flow>
            <span class="custom-content"> &nbsp &nbsp 综合评价:  {{ percentage4 }}</span>
          </el-progress>
        </div>

        <div class="button-sets">
          <el-tooltip content="上一个" placement="top" size="medium">
            <el-button color="#009693" size="large" :icon="Back" circle @click="handleBack"/>
          </el-tooltip>
          <el-tooltip content="下一个" placement="top">
            <el-button color="#009693" size="large" :icon="Right" circle @click="handleNext"/>
          </el-tooltip>
          <el-tooltip content="更多信息" placement="top">
            <el-button type="primary" color="#009693" size="large" :icon="Search" circle @click="drawer = true">
            </el-button>
          </el-tooltip>
          <el-drawer v-model="drawer"  :with-header="false">
            <span>廊道TOD</span>
          </el-drawer>
        </div>
      </template>
    </el-card>
  </div>
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
.info{
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

.demo-progress{
  margin-top: 10px;
  margin-bottom: 30px;
}
.demo-progress .el-progress--line {
  width: 100%;
  margin-bottom: 15px;
  max-width: 600px;
}
.demo-progress .custom-content{

  font-size: medium;
  font-weight: bolder;
  font-family: "Arial","Microsoft YaHei","黑体","宋体",sans-serif;

}


</style>
