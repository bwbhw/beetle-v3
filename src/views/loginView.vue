<template>
  <div class="login">
    <el-form ref="ruleFormLoginRef"
             :model="ruleFormLogin"
             status-icon
             :rules="rules"
             class="ruleFormLogin">
      <el-form-item class="title">
        <span>越秀族库系统</span>
      </el-form-item>
      <el-form-item prop="username">
        <el-input v-model="ruleFormLogin.username"
                  type="text"
                  autocomplete="off"
                  :prefix-icon="User"
                  placeholder="请输入用户名" />
      </el-form-item>

      <el-form-item prop="password">
        <el-input v-model="ruleFormLogin.password"
                  type="password"
                  autocomplete="off"
                  :prefix-icon="Lock"
                  placeholder="请输入密码" />
      </el-form-item>

      <el-form-item class="code-container"
                    prop="answer">
        <el-input v-model="ruleFormLogin.answer"
                  class="code-input"
                  type="text"
                  :prefix-icon="Key"
                  placeholder="答案是" />
        <el-button class="code-btn">{{ firstValue }} + {{ secondValue }} = ?</el-button>
      </el-form-item>
      <el-form-item class="login-btn-container">
        <el-button @click="submitForm(ruleFormLoginRef)"
                   class="login-btn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script  setup>
import { ElMessage } from "element-plus";
import { reactive, ref } from "vue";
import { User, Lock, Key } from "@element-plus/icons-vue";

import { useRouter } from "vue-router";
import { useStore } from "vuex";

import { http } from "@/utils/api.js";


const router = useRouter();
const ruleFormLoginRef = ref();
const firstValue = ref(~~(Math.random() * 10));
const secondValue = ref(~~(Math.random() * 10));

const checkAnswer = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("请输入答案"));
  } else if (value != firstValue.value + secondValue.value) {
    console.log("value:", value);
    console.log(Number(firstValue.value + secondValue.value) == value);
    console.log(
      "firstValue.value + secondValue.value:",
      firstValue.value + secondValue.value
    );
    return callback(new Error("答案错误"));
  } else {
    callback();
  }
};

const validatePass = (rule, value, callback) => {
  if (value === "") {
    callback(new Error("请输入密码"));
  } else {
    if (ruleFormLogin.password !== "") {
      if (!ruleFormLoginRef.value) return;
      ruleFormLoginRef.value.validateField("password", () => null);
    }
    callback();
  }
};

const ruleFormLogin = reactive({
  username: "",
  password: "",
  answer: "",
});

const rules = reactive({
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    { min: 3, max: 15, message: "长度在3-15之间", trigger: "blur" },
  ],
  password: [{ validator: validatePass, trigger: "blur" }],
  answer: [{ validator: checkAnswer, trigger: "blur" }],
});

const store = useStore();

const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      http.login("/idp/restful/IDPAuthenticate", {
        appId: "BIMDesign1",
        userName: ruleFormLogin.username,
        password: ruleFormLogin.password,
        authnMethod: "UsernamePassword",
        remoteIp: "0.0.0.1",
      }).then((res) => {
        console.log(res.data.data);
        if (res.data.data) {
          ElMessage({
            type: "success",
            message: "登录成功",
          });

          localStorage.setItem("token", res.data.data.tokenId);
          store.commit("setUserName", ruleFormLogin.username);
          router.push("/Home");
        } else {
          ElMessage({
            type: "error",
            message: "账号或密码错误",
          });
        }
      }).catch((err) => {
        console.log(err);
      });


    } else {
      console.log("error submit!");
      return false;
    }
  });
};


</script>
<style lang="scss" scoped>
.login {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url("../assets/images/login-bg.gif");
  background-size: 100% 100%;
}
.ruleFormLogin {
  width: 300px;
  position: absolute;
  top: calc(50% - 150px);
  left: calc(50% - 150px);
  padding: 10px;
  .title {
    width: 100%;
    span {
      font-size: 20px;
      color: #fff;
      text-align: center;
      width: 100%;
      font-weight: bolder;
    }
  }
  .code-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;
    // background-color: red;
    .code-input {
      width: 50%;
      margin-right: 10%;
    }
    .code-btn {
      background-color: rgba(100, 100, 100, 0.2) !important;
      color: #fff;
      width: 40%;
    }
  }

  .login-btn-container {
    margin-top: 20px;
    width: 100%;
    .login-btn {
      width: 100%;
      background: orange;
      color: #fff;
      border: none;
    }
  }
}

:deep .el-form-item__error {
  color: orange !important;
}
</style>