<template>
    <el-header class="header">
        <div class="header-left">
            <img src="../assets/images/YE39.png" />
        </div>
        <div class="header-right">
            <el-badge class="item">
                <el-button size="small"
                           @click="handleDocClick()"><i class="item-doc">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>文档</el-button>
            </el-badge>
            <el-badge class="item">
                <el-button size="small"
                           @click="handleSettingClick()"><i class="item-setting">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>设置</el-button>
            </el-badge>
            <el-badge :value="200"
                      :max="99"
                      class="item3">
                <el-button size="small"
                           @click="handleNoticeClick()"><i class="item-notice">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>通知</el-button>
            </el-badge>
            <el-badge value="new"
                      class="item4">
                <el-button size="small"
                           @click="handleUpdateClick()"><i class="item-updating">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>更新</el-button>
            </el-badge>
            <person-info-view></person-info-view>
        </div>
        <update-dialog-view ref="updateDialogRef"></update-dialog-view>
    </el-header>
  
</template>
<script setup>
import personInfoView from "@/views/personInfoView.vue";
import updateDialogView from "@/views/updateDialogView.vue";
import { ref } from "vue";
const handleDocClick = () => {
    window.location.href = "https://docs.ljsbim.com/docs/intro/";
    document.body.innerHTML = "<h6 onclick='window.history.back()'>返回<h6>";
    console.log("点击了");
};
const handleSettingClick = () => {
    window.location.href = "https://www.baidu.com/";
    document.body.innerHTML = "<h6 onclick='window.history.back()'>返回<h6>";
    console.log("点击了");
};
const handleNoticeClick = () => {
    window.location.href = "https://www.sogou.com/";
    document.body.innerHTML = "<h6 onclick='window.history.back()'>返回<h6>";
    console.log("点击了");
};

const updateDialogRef = ref(false);

const handleUpdateClick = () => {
    updateDialogRef.value.changeUpdateDialogShow(true);
};

</script>
<style lang="scss" scoped>
.header {
    width: 100%;
     height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
   
    .header-left {
        img {
            width: auto;
            height: 50px;
        }
    }
    .header-right {
        padding-right: 20px;
    }
}

.item {
    margin-left: 10px;
    .item-doc {
        background: url(../assets/icons/document.png) no-repeat;
        background-size: 100% 100%;
        width: auto;
        height: 16px;
    }
    .item-setting {
        background: url(../assets/icons/setting.png) no-repeat;
        background-size: 100% 100%;
        width: auto;
        height: 16px;
    }
}

.item3 {
    margin-left: 10px;
    .item-notice {
        background: url(../assets/icons/email.png) no-repeat;
        background-size: 100% 100%;
        width: auto;
        height: 16px;
    }
}

.item4 {
    margin-left: 30px;
    .item-updating {
        background: url(../assets/icons/update.png) no-repeat;
        background-size: 100% 100%;
        width: auto;
        height: 16px;
    }
}
</style>