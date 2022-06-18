<template>
    <ul
        ref="contextMenuRef"
        class="context-menu"
        v-if="contextMenuShow"
    >
        <li
            v-for="(item, index) in menuList"
            :key="index"
            class="context-menu-item"
            @click="menuClick(item)"
        >
            {{ item.label }}
        </li>
    </ul>
</template>
<script setup>
/*
 * 右键菜单
 */
import { ref, watch } from "vue";

 defineProps({
    menuList: {
        type: Array,
        default: () => [],
    },
});
const emit = defineEmits(["clickCallBack"]);

const contextMenuShow = ref(false);
let refId = '';

const changeContextMenuShow = (value, id) => {
    contextMenuShow.value = value;
    refId = id;
};

defineExpose({
    changeContextMenuShow,
});

const menuClick =( data, id) => {
    emit('clickCallBack', data, refId)
};

watch(contextMenuShow, (val) => {
    if (val) {
        document.body.addEventListener("click", () => {
            contextMenuShow.value = false;
        });
    } else {
        document.body.removeEventListener("click", () => {
            contextMenuShow.value = false;
        });
    }
});
</script>


<style lang="scss" scoped>
.context-menu {
    position: absolute;
    top: 0;
    left: 0;
    min-width: 80px;
    // min-height: 80px;
    background-color: #fff;
    box-shadow: 0px 0px 0px 2px rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    z-index: 3000;
    .context-menu-item {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        width: 100%;
        cursor: pointer;
        font-size: 12px;
        color: #333333;
        background-color: #eeeeee;
        &:hover {
            background-color: #cccccc;
            color: #000;
        }
    }
}
</style>