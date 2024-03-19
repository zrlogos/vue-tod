<template>
  <el-container class="common-layout">
    <el-main>
      <el-scrollbar ref="scrollbar" max-height="600px" always>
        <div ref="innerRef">
          <div v-for="(item, index) in messageList" :key="index" class="dialog">
            <el-avatar :src="item.avatar"/>
            <p>{{ item.message }}</p>
          </div>
        </div>
      </el-scrollbar>
    </el-main>
    <el-footer>
      <div class="input-container">
        <el-input
            v-model="inputValue"
            :autosize="{ minRows: 1, maxRows: 8 }"
            type="textarea"
            placeholder="Please input"
            style="width: 700px; margin-right: 25px; border-color: #C0C4CC; border-radius: 50px;"
        ></el-input>
        <el-button type="success" :icon="Top" circle @click="sendMessage"></el-button>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
import {ref} from 'vue'
import axios from 'axios';
import {Top} from "@element-plus/icons";

export default {
  computed: {
    Top() {
      return Top
    }
  },

  watch: {
    messageList: {
      handler(newValue, oldValue) {
        this.$refs.scrollbar.scrollTo({
          top: this.$refs.innerRef.scrollHeight,
          behavior: 'smooth'
        });
      },
      deep: true // 深度监听，可以监听对象内部属性的变化
    }
  },


  setup() {
    const inputValue = ref('');
    const messageList = ref([]);
    const inner = null;
    const scrollbar = null;


    const sendMessage = async () => {
      if (inputValue.value.trim() !== '') {
        messageList.value.push({
          avatar: '/user.jpg',
          message: inputValue.value,
        });


        try {
          const response = await axios.post(
              '/123api/chat/completions',
              {
                model: 'gpt-3.5-turbo',
                messages: [
                  {
                    role: 'user',
                    content: inputValue.value,
                  },
                ],
                temperature: 0.7,
              },
              {
                headers: {
                  Authorization: 'Bearer sk-Ae0qvreDskQ3N2Ev51Fd83E2E2F94c36A58a7202Dd26AdB0',
                },
                timeout: 10000, // 设置超时时间为 10 秒
              }
          );

          // 处理 API 响应
          const assistantMessage = response.data.choices[0].message.content;
          messageList.value.push({
            avatar: '@/assets/gpt.png',
            message: assistantMessage,
          });
          inputValue.value = '';

        } catch (error) {
          if (error.code === 'ECONNABORTED') {
            // 请求超时的错误处理
            messageList.value.push({
              avatar: '/gpt.png',
              message: 'Request timed out. Please try again.',
            });

          } else {
            console.error('Error sending message:', error);
            messageList.value.push({
              avatar: '/gpt.png',
              message: 'An error occurred. Please try again.',
            });

          }
        }
      }
    };
    return {
      inputValue,
      messageList,
      sendMessage,
      inner,
    };
  }
}

</script>

<style>
.common-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  position: relative;
  margin-left: 20%;
  max-width: 800px;
}


.input-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-bottom: 40px;
}

.dialog {
  max-width: 60%;
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