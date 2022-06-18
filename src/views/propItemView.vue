<template>


    <el-container class="right-aside">
      <h6 class="right-aside-header">属性栏</h6>
      <el-main class="main">

        <el-select placeholder="请选择"
                   class="select-options"
                   v-model="selectedValue"
        >
          <el-option v-for="item in props.options"
                     :key="item.value"
                     :label="item.value"
                     :value="item.value"
                     class="select-option"
          >
          </el-option>
         
        </el-select>
         <ul>
            <li v-for="item in props.propertyList"
                :key="item.value"
                class="prop-item"
            >
               <span> {{ item.label }}</span> <el-input v-model="item.model" placeholder=""></el-input>
            </li>
          </ul>
      </el-main>
      <el-footer class="footer">
        <el-button class="btn" @click="loadProject">载入项目</el-button>
      </el-footer>
    </el-container>


</template>
<script setup>
import { ref, defineProps } from "vue";
// select列表和属性列表
const props = defineProps({
  options: {
    type: Array,
    default: () => [],
  },
  propertyList: {
    type: Array,
    default: () => [],
 },
});

const selectedValue = ref('');

// 载入项目
const loadProject = () => {
  console.log('loadProject');
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.right-aside {
  display: flex;
  flex-direction: column;
  height: calc(100vh - 88px);
 
  h6 {
    height: 20px;
    border: 1px solid #eeeeee;
    background-color: #eeeeee;
    margin-bottom: 5px;
    text-align: center;
    padding: 5px;
    border-radius: 5px;
    color: #333333;
  }
  .main {
    // height: calc(100% - 100px);
    border: 1px solid #eeeeee;
    background-color: #eeeeee;
    border-radius: 5px;
    padding: 5px;
    .select-options {
      width: 100%;
      line-height: 40px;
      span {
        padding: 0 10px;
      }
    }
   
    .prop-item {
      display: flex;
      align-items: center;
      margin-bottom: 2px;
      padding: 5px;
      border-radius: 5px;

      cursor: pointer;
      span {
        width: 100px;
        text-align: left;
        margin-right: 10px;
        font-size: 12px;
      }
      &:hover {
        background-color: #477BF4;
      }
    }
  }
  .footer {
    height: 20px;
    margin-top: 16px;
    padding: 0;
    .btn {
      width: 100%;
      height: 30px;
      background: #477bf4;
      color: white;
      font-size: 12px;
      padding: 0;
    }
  }
}
</style>