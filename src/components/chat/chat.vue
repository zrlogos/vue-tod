<template>
  <div class="outer-box">
      <div v-if="showLogo" style="display: flex; flex-direction: column; align-items: center; margin-top: 20%">
        <el-image style="width: 4rem; height: 4rem; margin-bottom: 5rem;" fit="cover" src="/gpt.png"/>
        <div class="prompt" style="display: flex; flex-wrap: wrap; justify-content: center;
            font-size: medium;
          ">
          <el-card
              v-for="(card, index) in cards"
              :key="index"
              style="max-width: 480px; width: 45%; margin: 10px;"
              shadow="hover"
              @click="handleClick(card)"
          >
            {{ card }}
          </el-card>
        </div>
      </div>
      <el-scrollbar v-else ref="scrollbar" max-height="600px" always>
        <div ref="innerRef" style="margin: auto">
          <div v-for="(item, index) in messageList" :key="index" class="dialog">
            <el-avatar :src="item.avatar"/>
            <p>{{ item.message }}</p>
          </div>
        </div>
      </el-scrollbar>
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
        <el-button type="success" :icon="Top" circle @click="handleInput"
                   style="height: 2.3rem ;width :2.3rem ;font-size: large;"
        ></el-button>
      </div>
  </div>
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
  methods: {
    handleClick(content) {
      this.sendRequest(content)
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
  data() {
    return {
      cards: [
        '什么是Transit-oriented development（TOD）？它如何影响城市规划和发展？',
        'TOD在全球范围内的应用情况如何？是否有一些成功的案例可以参考？',
        'TOD是如何与公共交通系统相关联的？它与传统城市规划有何不同？',
        'TOD的历史是什么样的？它是如何发展演变至今的？'
      ]
    }
  },


  setup() {
    const inputValue = ref('');
    const messageList = ref([]);
    const inner = ref('innerRef')
    const showLogo = ref(true)

    const handleInput = () => {
      if (inputValue.value.trim() !== '') {
        sendRequest(inputValue.value)
      }
    };

    const sendRequest = async (content) => {

      showLogo.value = false;
      inputValue.value = '';
      messageList.value.push({
        avatar: '/user.jpg',
        message: content,
      });
      try {
        const response = await axios.post(
            'https://burn.hair/v1/chat/completions',
            {
              model: 'gpt-3.5-turbo',
              messages: [
                {
                  role: 'user',
                  content: content,
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
          avatar: '/gpt.png',
          message: assistantMessage,
        });
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
    };

    return {
      inputValue,
      messageList,
      handleInput,
      sendRequest,
      inner,
      showLogo,
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




</style>

