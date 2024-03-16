<template>
  <div>
    <div style="margin: 30px 20px">
      <el-steps :active="active" finish-status="success" align-center>
        <el-step title="验证电子邮件"/>
        <el-step title="重新设定密码"/>
      </el-steps>
    </div>
    <transition name="el-fade-in-linear" mode="out-in">
      <div style="text-align: center;margin: 0 20px;height: 100%" v-if="active === 0">
        <div style="margin-top: 80px">
          <div style="font-size: 25px;font-weight: bold">重置密码</div>
          <div style="font-size: 14px;color: grey">请输入需要重置密码的电子邮件地址</div>
        </div>
        <div style="margin-top: 50px">
          <el-form :model="form" :rules="rules" @validate="onValidate" ref="formRef">
            <el-form-item prop="email">
              <el-input v-model="form.email" type="email" placeholder="电子邮件地址">
                <template #prefix>
                  <el-icon>
                    <Message/>
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="code">
              <el-row :gutter="10" style="width: 100%">
                <el-col :span="17">
                  <el-input v-model="form.code" :maxlength="6" type="text" placeholder="请输入验证码">
                    <template #prefix>
                      <el-icon>
                        <EditPen/>
                      </el-icon>
                    </template>
                  </el-input>
                </el-col>
                <el-col :span="5">
                  <el-button type="success" @click="validateEmail"
                             :disabled="!isEmailValid || coldTime > 0">
                    {{ coldTime > 0 ? '请稍后 ' + coldTime + ' 秒' : '获取验证码' }}
                  </el-button>
                </el-col>
              </el-row>
            </el-form-item>
          </el-form>
        </div>
        <div style="margin-top: 70px">
          <el-button @click="startReset()" style="width: 270px;" type="danger" plain>开始重置密码</el-button>
        </div>
      </div>
    </transition>
    <transition name="el-fade-in-linear" mode="out-in">
      <div style="text-align: center;margin: 0 20px;height: 100%" v-if="active === 1">
        <div style="margin-top: 80px">
          <div style="font-size: 25px;font-weight: bold">重置密码</div>
          <div style="font-size: 14px;color: grey">请填写您的新密码，务必牢记，防止丢失</div>
        </div>
        <div style="margin-top: 50px">
          <el-form :model="form" :rules="rules" @validate="onValidate" ref="formRef">
            <el-form-item prop="password">
              <el-input v-model="form.password" :maxlength="16" type="password" placeholder="新密码">
                <template #prefix>
                  <el-icon>
                    <Lock/>
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password_repeat">
              <el-input v-model="form.password_repeat" :maxlength="16" type="password" placeholder="重复新密码">
                <template #prefix>
                  <el-icon>
                    <Lock/>
                  </el-icon>
                </template>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
        <div style="margin-top: 70px">
          <el-button @click="doReset()" style="width: 270px;" type="danger" plain>立即重置密码</el-button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {reactive, ref} from "vue";

import {ElMessage} from "element-plus";
import router from "@/router";
import axios from "axios";

const active = ref(0)

const form = reactive({
  email: '',
  code: '',
  password: '',
  password_repeat: '',
})

const validatePassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('请再次输入密码'))
  } else if (value !== form.password) {
    callback(new Error("两次输入的密码不一致"))
  } else {
    callback()
  }
}

const rules = {
  email: [
    {required: true, message: '请输入邮件地址', trigger: 'blur'},
    {type: 'email', message: '请输入合法的电子邮件地址', trigger: ['blur', 'change']}
  ],
  code: [
    {required: true, message: '请输入获取的验证码', trigger: 'blur'},
  ],
  password: [
    {required: true, message: '请输入密码', trigger: 'blur'},
    {min: 6, max: 16, message: '密码的长度必须在6-16个字符之间', trigger: ['blur', 'change']}
  ],
  password_repeat: [
    {validator: validatePassword, trigger: ['blur', 'change']},
  ],
}

const formRef = ref()
const isEmailValid = ref(false)
const coldTime = ref(0)

const onValidate = (prop, isValid) => {
  if (prop === 'email')
    isEmailValid.value = isValid
}

const validateEmail = () => {
  coldTime.value = 60
  axios.post('/api/auth/valid-reset-email', {
    email: form.email
  })
      .then(response => {
        ElMessage.success(response.data.message)
        const timer = setInterval(() => {
          coldTime.value--
          if (coldTime.value === 0) {
            clearInterval(timer)
          }
        }, 1000)
      })
      .catch(error => {
        ElMessage.warning(error.response.data.message)
        coldTime.value = 0
      })
}

const startReset = () => {
  formRef.value.validate((isValid) => {
    if (isValid) {
      axios.post('/api/auth/valid-reset-email', null, {
        params: {
          email: form.email
        }
      })
          .then(() => {
            active.value++
          })
          .catch(error => {
            console.error(error)
            ElMessage.warning('重置密码失败,请稍后重试')
          })
    } else {
      ElMessage.warning('请填写电子邮件地址和验证码')
    }
  })
}

formRef.value.validate((isValid) => {
  if (isValid) {
    axios.post('/api/auth/do-reset', null, {
      params: {
        password: form.password
      }
    }).then((response) => {
      const message = response.data.message
      ElMessage.success(message)
      router.push('/')
    }).catch((error) => {
      console.error(error)
      ElMessage.error('重置密码失败，请重试')
    })
  } else {
    ElMessage.warning('请填写新的密码')
  }
})
</script>

<style scoped>

</style>