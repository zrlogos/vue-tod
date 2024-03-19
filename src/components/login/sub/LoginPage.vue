<template>
  <div style="text-align: center;margin: 0 20px">
    <div style="margin-top: 70px">
      <el-image style="width: 30%;height: 30%" fit="cover"
                src="/bjtu.png"/>
      <div style="font-size: 22px;font-weight: bold;margin-top: 30px">登录</div>


    </div>
    <div style="margin-top: 50px">
      <el-input v-model="form.username" type="text" placeholder="用户名/邮箱">
        <template #prefix>
          <el-icon>
            <User/>
          </el-icon>
        </template>
      </el-input>
      <el-input v-model="form.password" type="password" style="margin-top: 10px" placeholder="密码">
        <template #prefix>
          <el-icon>
            <Lock/>
          </el-icon>
        </template>
      </el-input>
    </div>
    <el-row style="margin-top: 5px">
      <el-col :span="12" style="text-align: left">
        <el-checkbox v-model="form.remember" label="记住我"/>
      </el-col>
      <el-col :span="12" style="text-align: right">
        <el-link @click="router.push('/forget')">忘记密码？</el-link>
      </el-col>
    </el-row>
    <div style="margin-top: 40px;display: flex">
      <el-button @click="login()" style="width: 270px" type="success" plain>立即登录</el-button>
      <el-button @click="router.push('/main')" style="width: 270px; "  plain>游客登录</el-button>
    </div>
    <el-divider>
      <span style="color: grey;font-size: 13px">没有账号</span>
    </el-divider>
    <div>
      <el-button style="width: 270px" @click="router.push('/register')" type="warning" plain>注册账号</el-button>
    </div>
  </div>
</template>

<script setup>
import {reactive} from "vue";
import {ElMessage} from "element-plus";
import router from "@/router";
import axios from 'axios' // 导入 axios 库
import {useStore} from "vuex";

const store = useStore()

const form = reactive({
  username: '',
  password: '',
  remember: false
})

const login = () => {
  if (!form.username || !form.password) {
    ElMessage.warning('请填写用户名和密码！')
  } else {
    axios.post('/api/auth/login', null, {
      params: {
        username: form.username,
        password: form.password,
        remember: form.remember
      }
    })
        .then(response => {
          ElMessage.success(response.data.message)
          router.push('/about')
        })
        .catch(error => {
          console.error(error)
        })
  }
}
</script>

<style scoped>

</style>