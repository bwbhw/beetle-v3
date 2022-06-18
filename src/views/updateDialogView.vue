<template>
  <el-dialog title="关于我们"
             width="400px"
             :before-close=" handleCloseDialog"
             :modal="false"
             
             :append-to-body="true"
             v-model="dialogVisible">
    <el-main>
      <el-progress :text-inside="true"
                   :stroke-width="40"
                   :percentage="10" 
                   stroke-linecap="butt"
      >
                   <span>越秀数字化设计族库</span>
      </el-progress>
      <div class="update-body">
        <img src="@/assets/images/YE.LOGO.jpg"><span>version:1.0.6.0</span>
        <el-button>检查更新</el-button>
      </div>
     
    </el-main>
    <el-footer class="footer">
      <el-button 
                 @click="handleCloseDialog">关闭</el-button>
    </el-footer>
  </el-dialog>

</template>
<script setup>
import {  ref } from "vue";
const dialogVisible = ref(false);


const changeUpdateDialogShow = (value) => {
  dialogVisible.value = value;
};
defineExpose({
  changeUpdateDialogShow,
});

const handleCloseDialog = (event) => {
  dialogVisible.value = false;
  let target = event.target;
  console.log(target.nodeName);
  if(target.nodeName == "SPAN") {
    target = target.parentNode;
  }
//   console.log(target);
  target.blur();
  
};

</script>
<style lang="scss" scoped>

.update-body {
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: auto;
    height: 100px;
  }
  span {
    margin-left: 10px;
    width: 300px;
  }
}

.footer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
</style>