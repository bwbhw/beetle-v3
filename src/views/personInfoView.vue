<template>

  <el-dropdown trigger="click" class="info">
    <span class="el-dropdown-link">
       {{ store.state.userName }}
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item :icon="UserFilled">个人中心</el-dropdown-item>
        <el-dropdown-item :icon="CircleCloseFilled" @click="LoginOut">退出</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>

</template>

<script setup>
import { useStore } from "vuex";

import { UserFilled, CircleCloseFilled } from "@element-plus/icons-vue";
import { useRouter } from "vue-router";
const store = useStore();
const router = useRouter();
const LoginOut = () => {
  store.commit("loginOut");
  router.push("/login");
};
</script>

<style lang="scss" scoped>
    .info {
        margin-left: 40px;
        // background-color: red;
        text-align: center;
        .el-dropdown-link{
            color: #333;
            font-size: 14px;
            font-weight: bold;
            padding: 0;
            margin: 0;
            cursor: pointer;
        }
    }
</style>

