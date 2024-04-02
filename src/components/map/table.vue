<script lang="ts" setup>
import {computed, ref} from "vue";


function createSortMethod(propertyName) {
  // 返回一个新的排序函数，该函数使用指定的属性进行排序
  return function (a, b) {
    const valueA = parseFloat(a[propertyName]);
    const valueB = parseFloat(b[propertyName]);

    if (valueA < valueB) {
      return -1;
    }
    if (valueA > valueB) {
      return 1;
    }
    return 0;
  };
}

const sortMethodForS1 = createSortMethod('s1');
const sortMethodForS2 = createSortMethod('s2');
const sortMethodForS3 = createSortMethod('s3');
const sortMethodForS4 = createSortMethod('s4');
const sortMethodForS5 = createSortMethod('s5');
const sortMethodForS6 = createSortMethod('s6');
const sortMethodForS7 = createSortMethod('s7');
const sortMethodForS8 = createSortMethod('s8');

const searchValue = ref('')
const filterTableData = computed(() =>
    tableData.filter(
        (data) =>
            !searchValue.value ||
            data.name.toLowerCase().includes(searchValue.value.toLowerCase())
    )
)


const tableData = [
  {
    "name": "安河桥北",
    "s1": "0",
    "s2": "5.87 ",
    "s3": "2.55 ",
    "s4": "/",
    "s5": "0.00 ",
    "s6": "0.52 ",
    "s7": "0.75 ",
    "s8": "0.15 ",
    "s9": "2.93%"
  },
  {
    "name": "北宫门",
    "s1": "8.02",
    "s2": "2.29 ",
    "s3": "5.09 ",
    "s4": "56",
    "s5": "0.00 ",
    "s6": "0.70 ",
    "s7": "0.42 ",
    "s8": "0.03 ",
    "s9": "1.14%"
  },
  {
    "name": "西苑",
    "s1": "0.89",
    "s2": "1.12 ",
    "s3": "7.64 ",
    "s4": "130.66",
    "s5": "1.39 ",
    "s6": "0.74 ",
    "s7": "0.33 ",
    "s8": "0.26 ",
    "s9": "3.02%"
  },
  {
    "name": "圆明园",
    "s1": "2.62",
    "s2": "0.93 ",
    "s3": "3.82 ",
    "s4": "/",
    "s5": "0.00 ",
    "s6": "0.75 ",
    "s7": "0.00 ",
    "s8": "0.14 ",
    "s9": "2.14%"
  },
  {
    "name": "北京大学东门",
    "s1": "6.95",
    "s2": "0.00 ",
    "s3": "2.55 ",
    "s4": "/",
    "s5": "0.00 ",
    "s6": "0.34 ",
    "s7": "0.00 ",
    "s8": "0.02 ",
    "s9": "0.00%"
  },
  {
    "name": "中关村",
    "s1": "1.06",
    "s2": "2.00 ",
    "s3": "2.55 ",
    "s4": "52",
    "s5": "0.00 ",
    "s6": "0.61 ",
    "s7": "0.00 ",
    "s8": "0.02 ",
    "s9": "6.95%"
  },
  {
    "name": "海淀黄庄",
    "s1": "79.21",
    "s2": "37.36 ",
    "s3": "1.27 ",
    "s4": "153",
    "s5": "15.84 ",
    "s6": "0.62 ",
    "s7": "0.49 ",
    "s8": "0.03 ",
    "s9": "4.81%"
  },
  {
    "name": "人民大学",
    "s1": "12.74",
    "s2": "26.64 ",
    "s3": "2.55 ",
    "s4": "181.33",
    "s5": "1.16 ",
    "s6": "0.62 ",
    "s7": "0.00 ",
    "s8": "0.04 ",
    "s9": "4.60%"
  },
  {
    "name": "魏公村",
    "s1": "7.97",
    "s2": "1.64 ",
    "s3": "3.82 ",
    "s4": "/",
    "s5": "0.04 ",
    "s6": "0.57 ",
    "s7": "0.29 ",
    "s8": "0.03 ",
    "s9": "3.32%"
  },
  {
    "name": "国家图书馆",
    "s1": "1.17",
    "s2": "4.01 ",
    "s3": "2.55 ",
    "s4": "186",
    "s5": "0.00 ",
    "s6": "1.04 ",
    "s7": "9.04 ",
    "s8": "0.01 ",
    "s9": "11.60%"
  },
  {
    "name": "动物园",
    "s1": "1.98",
    "s2": "1.03 ",
    "s3": "7.64 ",
    "s4": "169",
    "s5": "0.00 ",
    "s6": "1.16 ",
    "s7": "0.75 ",
    "s8": "0.03 ",
    "s9": "5.57%"
  },
  {
    "name": "西直门",
    "s1": "7.12",
    "s2": "34.69 ",
    "s3": "15.28 ",
    "s4": "147",
    "s5": "16.51 ",
    "s6": "0.64 ",
    "s7": "0.03 ",
    "s8": "0.06 ",
    "s9": "5.99%"
  },
  {
    "name": "新街口",
    "s1": "25.94",
    "s2": "45.81 ",
    "s3": "7.64 ",
    "s4": "103.33",
    "s5": "2.95 ",
    "s6": "0.61 ",
    "s7": "0.10 ",
    "s8": "0.13 ",
    "s9": "7.91%"
  },
  {
    "name": "平安里",
    "s1": "1.46",
    "s2": "3.06 ",
    "s3": "7.64 ",
    "s4": "131.25",
    "s5": "0.20 ",
    "s6": "0.72 ",
    "s7": "0.13 ",
    "s8": "0.03 ",
    "s9": "7.30%"
  },
  {
    "name": "西四",
    "s1": "1.73",
    "s2": "3.90 ",
    "s3": "6.37 ",
    "s4": "144.33",
    "s5": "0.21 ",
    "s6": "0.69 ",
    "s7": "0.14 ",
    "s8": "0.03 ",
    "s9": "4.75%"
  },
  {
    "name": "灵境胡同",
    "s1": "0.49",
    "s2": "2.42 ",
    "s3": "8.91 ",
    "s4": "65",
    "s5": "0.00 ",
    "s6": "0.58 ",
    "s7": "0.01 ",
    "s8": "0.12 ",
    "s9": "6.18%"
  },
  {
    "name": "宣武门",
    "s1": "1.69",
    "s2": "15.34 ",
    "s3": "7.64 ",
    "s4": "/",
    "s5": "0.72 ",
    "s6": "0.61 ",
    "s7": "0.07 ",
    "s8": "0.06 ",
    "s9": "11.86%"
  },
  {
    "name": "菜市口",
    "s1": "5.38",
    "s2": "72.51 ",
    "s3": "3.82 ",
    "s4": "97",
    "s5": "0.00 ",
    "s6": "0.71 ",
    "s7": "0.06 ",
    "s8": "0.18 ",
    "s9": "12.52%"
  },
  {
    "name": "陶然亭",
    "s1": "1.06",
    "s2": "1.20 ",
    "s3": "8.91 ",
    "s4": "/",
    "s5": "0.31 ",
    "s6": "0.73 ",
    "s7": "0.24 ",
    "s8": "0.04 ",
    "s9": "4.92%"
  },
  {
    "name": "北京南站",
    "s1": "6.08",
    "s2": "9.44 ",
    "s3": "5.09 ",
    "s4": "173.33",
    "s5": "0.00 ",
    "s6": "0.66 ",
    "s7": "0.00 ",
    "s8": "0.29 ",
    "s9": "1.63%"
  },
  {
    "name": "马家堡",
    "s1": "0.39",
    "s2": "0.94 ",
    "s3": "3.82 ",
    "s4": "192",
    "s5": "1.23 ",
    "s6": "0.51 ",
    "s7": "0.01 ",
    "s8": "0.03 ",
    "s9": "1.69%"
  },
  {
    "name": "西单",
    "s1": "55.31",
    "s2": "488.67 ",
    "s3": "3.82 ",
    "s4": "106",
    "s5": "7.90 ",
    "s6": "0.50 ",
    "s7": "0.19 ",
    "s8": "0.08 ",
    "s9": "15.46%"
  },
  {
    "name": "角门西",
    "s1": "0.33",
    "s2": "0.76 ",
    "s3": "5.09 ",
    "s4": "165.5",
    "s5": "1.37 ",
    "s6": "0.60 ",
    "s7": "0.11 ",
    "s8": "0.06 ",
    "s9": "2.00%"
  },
  {
    "name": "公益西桥",
    "s1": "0.17",
    "s2": "0.26 ",
    "s3": "6.37 ",
    "s4": "41",
    "s5": "0.00 ",
    "s6": "0.54 ",
    "s7": "0.32 ",
    "s8": "0.01 ",
    "s9": "0.32%"
  },
  {
    "name": "新宫",
    "s1": "2.48",
    "s2": "11.83 ",
    "s3": "10.19 ",
    "s4": "107",
    "s5": "0.00 ",
    "s6": "0.48 ",
    "s7": "1.29 ",
    "s8": "0.03 ",
    "s9": "1.43%"
  },
  {
    "name": "西红门",
    "s1": "0",
    "s2": "9.87 ",
    "s3": "5.09 ",
    "s4": "157",
    "s5": "0.00 ",
    "s6": "0.48 ",
    "s7": "0.00 ",
    "s8": "0.03 ",
    "s9": "7.98%"
  },
  {
    "name": "高米店北",
    "s1": "0",
    "s2": "10.43 ",
    "s3": "11.46 ",
    "s4": "122",
    "s5": "0.00 ",
    "s6": "0.55 ",
    "s7": "0.11 ",
    "s8": "0.00 ",
    "s9": "5.20%"
  },
  {
    "name": "高米店南",
    "s1": "0.52",
    "s2": "0.29 ",
    "s3": "7.64 ",
    "s4": "184",
    "s5": "0.00 ",
    "s6": "0.59 ",
    "s7": "1.68 ",
    "s8": "0.00 ",
    "s9": "0.79%"
  },
  {
    "name": "枣园",
    "s1": "5.72",
    "s2": "9.67 ",
    "s3": "7.64 ",
    "s4": "72.5",
    "s5": "0.00 ",
    "s6": "0.58 ",
    "s7": "0.45 ",
    "s8": "0.03 ",
    "s9": "1.74%"
  },
  {
    "name": "清源路",
    "s1": "1.40",
    "s2": "0.51 ",
    "s3": "5.09 ",
    "s4": "82.5",
    "s5": "0.39 ",
    "s6": "0.62 ",
    "s7": "0.96 ",
    "s8": "0.00 ",
    "s9": "1.44%"
  },
  {
    "name": "黄村西大街",
    "s1": "1.20",
    "s2": "3.06 ",
    "s3": "6.37 ",
    "s4": "168.5",
    "s5": "1.62 ",
    "s6": "0.60 ",
    "s7": "0.46 ",
    "s8": "0.01 ",
    "s9": "5.11%"
  },
  {
    "name": "黄村火车站",
    "s1": "3.35",
    "s2": "10.54 ",
    "s3": "7.64 ",
    "s4": "177",
    "s5": "0.00 ",
    "s6": "0.56 ",
    "s7": "0.16 ",
    "s8": "0.14 ",
    "s9": "1.82%"
  },
  {
    "name": "义和庄",
    "s1": "0",
    "s2": "0.00 ",
    "s3": "19.10 ",
    "s4": "126",
    "s5": "0.00 ",
    "s6": "0.57 ",
    "s7": "1.78 ",
    "s8": "0.00 ",
    "s9": "0.00%"
  },
  {
    "name": "生物医药基地",
    "s1": "0",
    "s2": "0.00 ",
    "s3": "10.19 ",
    "s4": "102",
    "s5": "0.00 ",
    "s6": "0.59 ",
    "s7": "41.60 ",
    "s8": "0.00 ",
    "s9": "0.00%"
  },
  {
    "name": "天宫院",
    "s1": "0",
    "s2": "0.00 ",
    "s3": "10.19 ",
    "s4": "154.66",
    "s5": "0.00 ",
    "s6": "0.48 ",
    "s7": "0.00 ",
    "s8": "0.00 ",
    "s9": "0.00%"
  }
];

function filterHandler(value: any, row: any, column: any) {
  const property = column.property;
  const cellValue = row[property];
  return cellValue > 0.5;
}

function getCellStyleS1(value) {
  if (value > 3.6) {
    return {
      color: '#33bd8e',
    };
  } else if (value > 2.7) {
    return {
      color: '#335fbd',
    };
  } else {
    return {

      color: '#bd3333',
    };
  }
}


function getCellStyleS2(value) {
  if (value > 1) {
    return {

      color: '#33bd8e',
    };
  } else if (value > 0.8) {
    return {

      color: '#335fbd',
    };
  } else {
    return {

      color: '#bd3333',
    };
  }
}


function getCellStyleS3(value) {
  if (value > 7) {
    return {

      color: '#33bd8e',
    };
  } else if (value > 5) {
    return {

      color: '#335fbd',
    };
  } else {
    return {

      color: '#bd3333',
    };
  }
}


function getCellStyleS4(value) {
  if (value > 100) {
    return {

      color: '#33bd8e',
    };
  } else if (value > 50) {
    return {

      color: '#335fbd',
    };
  } else {
    return {

      color: '#bd3333',
    };
  }
}


function getCellStyleS5(value) {
  if (value > 0.8) {
    return {
      color: '#33bd8e',
    };
  } else if (value > 0.6) {
    return {
      color: '#335fbd',
    };
  } else {
    return {
      color: '#bd3333',
    };
  }
}

function getCellStyleS6(value) {
  if (value > 0.75) {
    return {
      color: '#33bd8e',

    };
  } else if (value > 0.5) {
    return {
      color: '#335fbd',

    };
  } else {
    return {
      color: '#bd3333',
    };
  }
}

function getCellStyleS7(value) {
  if (value > 1) {
    return {

      color: '#33bd8e',
    };
  } else if (value > 0.8) {
    return {

      color: '#335fbd',
    };
  } else {
    return {

      color: '#bd3333',
    };
  }
}

function getCellStyleS8(value) {
  if (value > 0.08) {
    return {
      color: '#33bd8e',
    };
  } else if (value > 0.06) {
    return {
      color: '#335fbd',
    };
  } else {
    return {
      color: '#bd3333',
    };
  }
}

function getCellStyleS9(value) {
  if (value > '5%') {
    return {
      color: '#33bd8e',
    };
  } else if (value > '3%') {
    return {
      color: '#335fbd',
    };
  } else {
    return {
      color: '#bd3333',
    };
  }
}


</script>


<template>
  <div>
    <el-input v-model="searchValue" placeholder="Search Name" style="margin-bottom: 10px"/>

    <el-table
        :data="filterTableData"
        border
        stripe
        height="600"
        style="width: 700px"
    >
      <el-table-column fixed="left" prop="name" label="站点名" sortable width="100"/>
      <el-table-column
          prop="s1"
          label="人均教育用地面积"
          sortable
          :sort-method="sortMethodForS1"
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS1(scope.row.s1)">
            {{ scope.row.s1 }}
          </div>
        </template>
      </el-table-column>

      <el-table-column
          prop="s2"
          label="公共服务设施供需比"
          sortable
          :sort-method="sortMethodForS2"
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS2(scope.row.s2)">
            {{ scope.row.s2 }}
          </div>
        </template>
      </el-table-column>


      <el-table-column
          prop="s3"
          label="站点交叉口密度"
          sortable
          :sort-method="sortMethodForS3"
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS3(scope.row.s3)">
            {{ scope.row.s3 }}
          </div>
        </template>
      </el-table-column>


      <el-table-column
          prop="s4"
          label="平均交通换乘距离"
          sortable
          :sort-method="sortMethodForS4"
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS4(scope.row.s4)">
            {{ scope.row.s4 }}
          </div>
        </template>
      </el-table-column>


      <el-table-column
          prop="s5"
          label="人均医疗用地面积"
          sortable
          :sort-method="sortMethodForS5"
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS5(scope.row.s5)">
            {{ scope.row.s5 }}
          </div>
        </template>
      </el-table-column>

      <el-table-column
          prop="s6"
          label="功能混合度"
          sortable
          :sort-method="sortMethodForS6"
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS6(scope.row.s6)">
            {{ scope.row.s6 }}
          </div>
        </template>
      </el-table-column>


      <el-table-column
          prop="s7"
          label="产业建筑总面积/住宅密度"
          sortable
          :sort-method="sortMethodForS7"
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS7(scope.row.s7)">
            {{ scope.row.s7 }}
          </div>
        </template>
      </el-table-column>


      <el-table-column
          prop="s8"
          label="交通设施用地密度"
          sortable
          :sort-method="sortMethodForS8"
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS8(scope.row.s8)">
            {{ scope.row.s8 }}
          </div>
        </template>
      </el-table-column>


      <el-table-column
          prop="s9"
          label="商业用地密度"
          sortable
          width="100"
          :filters="[{ text: '大于 0.5', value: 'gt0.5' }]"
          :filter-method="filterHandler"
      >
        <template v-slot:default="scope">
          <div :style="getCellStyleS9(scope.row.s9)">
            {{ scope.row.s9 }}
          </div>
        </template>
      </el-table-column>


    </el-table>
  </div>
</template>

<style scoped>

</style>