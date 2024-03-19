<template>
  <router-view></router-view>
</template>


<style>


body, html {
  height: 100%;
  margin: 0;
  padding: 0;
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