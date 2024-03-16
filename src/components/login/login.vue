<template>
  <div class="loginbody">
    <div class="logindata">
      <div class="logintext">
        <h2>北京地铁 TOD</h2>
      </div>
      <div class="formdata">
        <el-form ref="form" :model="form" :rules="rules">
          <el-form-item prop="username">
            <el-input
                v-model="form.username"
                clearable
                placeholder="请输入账号"
            ></el-input>
          </el-form-item>
          <el-form-item prop="password">
            <el-input
                v-model="form.password"
                clearable
                placeholder="请输入密码"
                show-password
            ></el-input>
          </el-form-item>
        </el-form>
      </div>
      <div class="tool">
        <div>
          <el-checkbox v-model="checked" @change="remenber"
          >记住密码</el-checkbox
          >
        </div>
        <div>
          <span class="shou" @click="forgetpas">忘记密码？</span>
        </div>
      </div>
      <div class="butt">
        <el-button type="primary" @click="login"
        >登录</el-button
        >
        <el-button class="shou" @click="register">注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>


import router from "@/router.js";
import axios from "axios";

export default {
  name: "login",
  // 在 login 组件的 created 钩子中
  created() {
    localStorage.setItem('isLoggedIn', 'false');
  },
  data() {
    return {
      form: {
        password: "",
        username: "",
      },
      checked: false,
      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { max: 10, message: "不能大于10个字符", trigger: "blur" },
        ],
      },
    };
  },
  mounted() {
    if(localStorage.getItem("news")){
      this.form=JSON.parse(localStorage.getItem("news"))
      this.checked=true
    }
  },
  methods: {
    login() {
      axios.post('/api/auth/login', null, {
        params: {
          username: this.form.username,
          password: this.form.password
        }
      })
          .then(response => {
            if (response.data.data==="true") {
              // 登录成功,存储登录状态
              console.log(response.data)
              localStorage.setItem('isLoggedIn', 'true');
              // 跳转到其他页面
              router.push('/about')

            } else {
              // 登录失败,显示错误提示
              alert(response.data.message);
            }
          })
          .catch(error => {
            console.error('登录请求出错', error);
          });
    },

    remenber(data){
      this.checked=data
      if(this.checked){
        localStorage.setItem("news",JSON.stringify(this.form))
      }else{
        localStorage.removeItem("news")
      }
    },
    forgetpas() {
      this.$message({
        type:"info",
        message:"功能尚未开发额😥",
        showClose:true
      })
    },
    register() {},

    nextPage() {
      localStorage.setItem('isLoggedIn', 'true')
      router.push('/about')
    }
  },
};
</script>

<style scoped>
.loginbody {
  width: 100%;
  height: 100%;
  background-image: url("/transformed.jpeg");
  background-size: cover; /* 或者使用 background-size: contain; */
  background-position: center center;
  background-repeat: no-repeat;
  position: fixed;
  line-height: 100%;
  padding-top: 150px;

}


.logintext {
  margin-bottom: 20px;
  line-height: 50px;
  text-align: center;
  font-size: 30px;
  font-weight: bolder;
  color: #f6f6f6;
  text-shadow: 2px 2px 4px #225569;
}

.logindata {
  width: 400px;
  height: 300px;
  transform: translate(-50%);
  margin-left: 50%;

}


.tool {
  display: flex;
  justify-content: space-between;
  color: #606266;
}

.butt {
  margin-top: 10px;
  text-align: center;
}

.shou {
  cursor: pointer;
  color: #606266;
}


</style>

