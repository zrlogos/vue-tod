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


      stations: [
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

      index: -1,
    };
  },


  methods: {


    handleNext() {
      $("div.station a").css('color', '');
      $("div.station a.circle").css('background-color', '');
      this.index = (this.index + 1) % this.stations.length
      for (let i = 0; i < this.stations[this.index].length; i++) {
        let stationName = this.stations[this.index][i];
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
        for (let i = 0; i < this.stations[this.index].length; i++) {
          let stationName = this.stations[this.index][i];
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
    <div class="line" style="color:#009693;width:1400px;">
      <div class="station"><a class="circle"></a>
        <a>安河桥北</a></div>
      <div class="station"><a class="circle"></a>
        <a>北宫门</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#93AE58;"></div>
        </div>
        <div class="transfer-name" style="color:#93AE58;">
          <div>16</div>
          <div class="line-label">号线</div>
        </div>
        <a>西苑</a></div>
      <div class="station"><a class="circle"></a>
        <a>圆明园</a></div>
      <div class="station"><a class="circle"></a>
        <a>北京大学东门</a></div>
      <div class="station"><a class="circle"></a>
        <a>中关村</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#009bc1;"></div>
        </div>
        <div class="transfer-name" style="color:#009bc1;">
          <div>10</div>
          <div class="line-label">号线</div>
        </div>
        <a>海淀黄庄</a></div>
      <div class="station"><a class="circle"></a>
        <a>人民大学</a></div>
      <div class="station"><a class="circle"></a>
        <a>魏公村</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#92bf1e;"></div>
          <div class="transfer-line" style="background-color:#93AE58;"></div>
        </div>
        <div class="transfer-name" style="color:#92bf1e;">
          <div>9/16</div>
          <div class="line-label">号线</div>
        </div>
        <a>国家图书馆</a></div>
      <div class="station"><a class="circle"></a>
        <a>动物园</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#156097;"></div>
          <div class="transfer-line" style="background-color:#f6e614;"></div>
        </div>
        <div class="transfer-name" style="color:#156097;">
          <div>2/13</div>
          <div class="line-label">号线</div>
        </div>
        <a>西直门</a></div>
      <div class="station"><a class="circle"></a>
        <a>新街口</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#d19708;"></div>
          <div class="transfer-line" style="background-color:#d6abc1;"></div>
        </div>
        <div class="transfer-name" style="color:#d19708;">
          <div>6/19</div>
          <div class="line-label">号线</div>
        </div>
        <a>平安里</a></div>
      <div class="station"><a class="circle"></a>
        <a>西四</a></div>
      <div class="station"><a class="circle"></a>
        <a>灵境胡同</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#c23931;"></div>
        </div>
        <div class="transfer-name" style="color:#c23931;">
          <div>1</div>
          <div class="line-label">号线</div>
        </div>
        <a>西单</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#156097;"></div>
        </div>
        <div class="transfer-name" style="color:#156097;">
          <div>2</div>
          <div class="line-label">号线</div>
        </div>
        <a>宣武门</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#f2c172;"></div>
        </div>
        <div class="transfer-name" style="color:#f2c172;">
          <div>7</div>
          <div class="line-label">号线</div>
        </div>
        <a>菜市口</a></div>
      <div class="station"><a class="circle"></a>
        <a>陶然亭</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#D8B9B3;"></div>
        </div>
        <div class="transfer-name" style="color:#D8B9B3;">
          <div>14</div>
          <div class="line-label">号线</div>
        </div>
        <a>北京南站</a></div>
      <div class="station"><a class="circle"></a>
        <a>马家堡</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#009bc1;"></div>
        </div>
        <div class="transfer-name" style="color:#009bc1;">
          <div>10</div>
          <div class="line-label">号线</div>
        </div>
        <a>角门西</a></div>
      <div class="station"><a class="circle"></a>
        <a>公益西桥</a></div>
      <div class="station"><a class="circle"><i class="icofont-ui-rotation"></i></a>
        <div class="transfer-wrapper">
          <div class="transfer-line" style="background-color:#d6abc1;"></div>
        </div>
        <div class="transfer-name" style="color:#d6abc1;">
          <div>19</div>
          <div class="line-label">号线</div>
        </div>
        <a>新宫</a></div>
      <div class="station"><a class="circle"></a>
        <a>西红门</a></div>
      <div class="station"><a class="circle"></a>
        <a>高米店北</a></div>
      <div class="station"><a class="circle"></a>
        <a>高米店南</a></div>
      <div class="station"><a class="circle"></a>
        <a>枣园</a></div>
      <div class="station"><a class="circle"></a>
        <a>清源路</a></div>
      <div class="station"><a class="circle"></a>
        <a>黄村西大街</a></div>
      <div class="station"><a class="circle"></a>
        <a>黄村火车站</a></div>
      <div class="station"><a class="circle"></a>
        <a>义和庄</a></div>
      <div class="station"><a class="circle"></a>
        <a>生物医药基地</a></div>
      <div class="station"><a class="circle"></a>
        <a>天宫院</a></div>
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
