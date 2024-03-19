<template>
  <el-container class="outer-box">
    <el-main style="height: 65vh">
      <div v-if="showLogo">

      </div>

      <el-scrollbar ref="scrollbar" max-height="600px" always class="content">
        <div ref="innerRef" style="margin: auto">
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
            placeholder="询问我一些关于TOD的知识吧"
            style="width: 700px; margin-right: 25px; border-color: #C0C4CC; border-radius: 20%;
            font-size: large;
          "
        ></el-input>
        <el-button type="success" :icon="Top" circle @click="sendMessage"
                   style="height: 2.3rem ;width :2.3rem ;font-size: large;"
        ></el-button>
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
        console.log("changed")
        this.$nextTick(() => {
          this.$refs.scrollbar.scrollTo({
            top: this.$refs.innerRef.scrollHeight + 100,
            behavior: 'smooth'
          });
        });
      },
      deep: true // 深度监听，可以监听对象内部属性的变化
    }
  },


  setup() {
    const inputValue = ref('');
    const messageList = ref([]);
    const inner = ref('innerRef')
    const sendMessage = async () => {
      if (inputValue.value.trim() !== '') {
        messageList.value.push({
          avatar: '/user.jpg',
          message: inputValue.value,
        });
        inputValue.value = ''


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

<style scoped>


.outer-box {
  display: flex;
  flex-direction: column;
  position: relative;
  margin-left: auto;
  margin-right: auto;
  max-width: 800px;
  height: 85vh;
  font-size: large;


}


.input-container {
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: flex-end;
  width: 100%;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.dialog {
  max-width: 60%;
}


</style>

