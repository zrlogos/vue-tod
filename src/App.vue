<template>
  <router-view></router-view>
</template>


<style>


body, html {
  height: 100%;
  margin: 0;
  padding: 0;
}
::-webkit-scrollbar {
  width: 6px;   /* 滚动条宽度， width：对应竖滚动条的宽度  height：对应横滚动条的高度*/
  background: rgb(246, 246, 246);
}
/*定义滚动条轨道（凹槽）样式*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);    /* 较少使用 */
  border-radius: 3px;
}
/*定义滑块 样式*/
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  height: 100px;    /* 滚动条滑块长度 */
  background-color: #3c7ca4;
}
#app {
  height: 100%;
  margin: 0;
  padding: 0;
}

.el-textarea {


  .el-textarea__inner::-webkit-scrollbar {
    width: 7px;
    height: 7px;
  }

  /*滚动条的轨道*/

  .el-textarea__inner::-webkit-scrollbar-track {
    background-color: #ffffff;
  }

  /*滚动条里面的小方块，能向上向下移动*/

  .el-textarea__inner::-webkit-scrollbar-thumb {
    background-color: rgba(144, 147, 153, 0.3);
    border-radius: 5px;
    border: 1px solid #f1f1f1;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  }

  .el-textarea__inner::-webkit-scrollbar-thumb:hover {
    background-color: rgba(144, 147, 153, 0.3);
  }

  .el-textarea__inner::-webkit-scrollbar-thumb:active {
    background-color: rgba(144, 147, 153, 0.3);
  }

  /*边角，即两个滚动条的交汇处*/

  .el-textarea__inner::-webkit-scrollbar-corner {
    background-color: #ffffff;
  }
}
</style>