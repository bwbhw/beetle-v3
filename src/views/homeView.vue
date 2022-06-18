<template>
    <div>
        <el-container class="home">
			<ye-head></ye-head>
            <el-container class="main">
                <el-aside class="left">
                    <el-tree :data="treeData"
                             :props="defaultProps"
                             @node-click="handleNodeClick"
                             @node-contextmenu="handleNodeRightClick"
                             class="tree-list"></el-tree>

                </el-aside>
                <el-main class="center">
                    <div class="top">
                        <h6>三维模型</h6>
                        <div draggable="true">
                            <div class="view-container">
                                <model-view ref="modelThreeRef"
                                            @contextmenu.prevent="threeModelRightClick"></model-view>
                            </div>
                        </div>
                    </div>
                    <div class="bottom">
                        <h6>二维图例</h6>
                        <div>
                            <div class="view-container">
                                <model-view ref="modelTwoRef"
                                            @contextmenu.prevent="twoModelRightClick"></model-view>
                            </div>
                        </div>
                    </div>
                </el-main>
                <el-aside class="right">
                    <prop-item-view :options="rightPropertyOption"
                                    :propertyList="rightPropertyList"></prop-item-view>
                </el-aside>
            </el-container>
        </el-container>
        <ye-context-menu ref="contextMenuRef"
            @clickCallBack="menuClickCallBack"
            :menuList="menuList"
            :style="{
				left: clientX + 'px',
				top: clientY + 'px',
		}"></ye-context-menu>
       
    </div>
</template>

<script setup>
import yeHead from "@/components/yeHead.vue";
import yeContextMenu from "@/components/yeContextMenu.vue";
import propItemView from "./propItemView.vue";
import modelView from "./modelView.vue";

import { ref } from "vue";


const defaultProps = {
    children: "children",
    label: "label",
    icon: "icon",
    id: "id",
    type: "type",
    name: "name",
    path: "path",
    isLeaf: "isLeaf",
};

const treeData = ref([
    {
        label: "建筑",
        id: "1",
        type: "folder",
        name: "三维模型",
        path: "/threeModel",
        children: [
            {
                label: "模型1",
                id: "1-1",
                type: "folder",
                name: "模型1",
                pathThree: "https://s3.bmp.ovh/imgs/2022/06/17/b22a0e402b743a50.webp",
                pathTwo:   "https://s3.bmp.ovh/imgs/2022/06/17/b22a0e402b743a50.png",
                content: {
                    option: [{
                        value: 'option19999999999',
                        label: 'option1',
                    },
                    {
                        value: 'option2',
                        label: 'option2',
                    },
                    {
                        value: 'option3',
                        label: 'option3',
                    },
                    {
                        value: 'option4',
                        label: 'option4',
                    },
                    {
                        value: 'option5',
                        label: 'option5',
                    }],
                    propertyList: [
                        {
                            label: "属性1",
                            value: "属性1的值",
                        },
                        {
                            label: "属性2",
                            value: "属性2的值",
                        },
                        {
                            label: "属性3",
                            value: "属性3的值",
                        },
                        {
                            label: "属性4",
                            value: "属性4的值",
                        },
                        {
                            label: "属性5",
                            value: "属性5的值",
                        },
                    ],
                }
            },
            {
                label: "模型2",
                id: "1-2",
                type: "folder",
                name: "模型2",
                pathThree: "https://s3.bmp.ovh/imgs/2022/06/17/ff741aa8cc0d1448.png",
                pathTwo: "https://s3.bmp.ovh/imgs/2022/06/17/ff741aa8cc0d1448.png",
                content: {
                    option: [{
                        value: 'option17777777',
                        label: 'option1',
                    },
                    {
                        value: 'option2',
                        label: 'option2',
                    },
                    {
                        value: 'option3',
                        label: 'option3',
                    },
                    {
                        value: 'option4',
                        label: 'option4',
                    },
                    {
                        value: 'option5',
                        label: 'option5',
                    }],
                    propertyList: [
                        {
                            label: "属性1111",
                            value: "属性111的值",
                        },
                        {
                            label: "属性112",
                            value: "属性112的值",
                        },
                        {
                            label: "属性1113",
                            value: "属性1113的值",
                        },
                        {
                            label: "属性114",
                            value: "属性1114的值",
                        },
                        {
                            label: "属性1115",
                            value: "属性1115的值",
                        },
                    ],
                }
            },
        ]
    },
    {
        label: "结构",
        id: "1",
        type: "folder",
        name: "三维模型",
        path: "/threeModel",
        children: [
            {
                label: "模型1",
                id: "1-1",
                type: "folder",
                name: "模型1",
                pathThree: "https://s3.bmp.ovh/imgs/2022/06/17/19725da0da9288df.webp",
                pathTwo: "https://s3.bmp.ovh/imgs/2022/06/17/19725da0da9288df.png",
                content: {
                    option: [{
                        value: 'option111111',
                        label: 'option1',
                    },
                    {
                        value: 'option2',
                        label: 'option2',
                    },
                    {
                        value: 'option3',
                        label: 'option3',
                    },
                    {
                        value: 'option4',
                        label: 'option4',
                    },
                    {
                        value: 'option5',
                        label: 'option5',
                    }],
                    propertyList: [
                        {
                            label: "属性222",
                            value: "属性1的值",
                        },
                        {
                            label: "属性2222",
                            value: "属性2的值",
                        },
                        {
                            label: "属性3222",
                            value: "属性3的值",
                        },
                        {
                            label: "属性4",
                            value: "属性4的值",
                        },
                        {
                            label: "属性5",
                            value: "属性5的值",
                        },
                    ],
                }
            },
            {
                label: "模型2",
                id: "1-2",
                type: "folder",
                name: "模型2",
                pathThree: "https://s3.bmp.ovh/imgs/2022/06/17/7c8e373bc539748f.webp",
                pathTwo: "https://s3.bmp.ovh/imgs/2022/06/17/7c8e373bc539748f.png",
                content: {
                    option: [{
                        value: 'option1',
                        label: 'option1',
                    },
                    {
                        value: 'option2',
                        label: 'option2',
                    },
                    {
                        value: 'option3',
                        label: 'option3',
                    },
                    {
                        value: 'option4',
                        label: 'option4',
                    },
                    {
                        value: 'option5',
                        label: 'option5',
                    }],
                    propertyList: [
                        {
                            label: "属性4444",
                            value: "属性1的值",
                        },
                        {
                            label: "属性24444",
                            value: "属性2的值",
                        },
                        {
                            label: "属性34444",
                            value: "属性3的值",
                        },
                        {
                            label: "属性4",
                            value: "属性4的值",
                        },
                        {
                            label: "属性5",
                            value: "属性5的值",
                        },
                    ],
                }
            },
        ]
    },
]);

const modelTwoRef = ref();

const modelThreeRef = ref()

const rightPropertyOption = ref([]);
const rightPropertyList = ref([]);

const handleNodeClick = (data) => {

    if (Object.prototype.hasOwnProperty.call(data, "children")) {
        return;
    } else {
        modelThreeRef.value.setImgSrc(data.pathThree);
        modelTwoRef.value.setImgSrc(data.pathTwo);

        rightPropertyOption.value = data.content.option;

        rightPropertyList.value = data.content.propertyList;
	}
};




const zoomRightMenu = [
    {
        label: "创建子项",
        action: "add",
    },
    {
        label: "删除",
        action: "delete",
    },
    {
        label: "重命名项",
        action: "rename",
    },
    {
        label: "上传文件",
        action: "upload",
    },
    {
        label: "批量添加属性",
        action: "multiAddProp",
    },
    {
        label: "批量删除属性",
        action: "multiDeleteProp",
    },
];

const handleNodeRightClick = (event, data) => {
    menuList.value = zoomRightMenu;
    clickEntity = "tree";
    if (Object.prototype.hasOwnProperty.call(data, "children")) {
        return;
    } else {
        console.log("节点右击了！！", data);
        showMenu(event, data);
    }

};

const threeModelRightMenu = [
    {
        label: "创建子项",
        action: "add",
    },
    {
        label: "删除2",
        action: "delete",
    },
    {
        label: "重命名项",
        action: "rename",
    },
    {
        label: "上传文件",
        action: "upload",
    },


]


const threeModelRightClick = (event, data) => {
    menuList.value = threeModelRightMenu;
    clickEntity = "threeModel";
   showModelMenu(event, data);

    console.log("三维模型右击了！！", data);
};


const twoModelRightMenu = [
    {
        label: "创建子项",
        action: "add",
    },
    {
        label: "删除",
        action: "delete",
    },
    {
        label: "重命名项",
        action: "rename",
    },
    {
        label: "上传文件",
        action: "upload",
    },
    {
        label: "批量添加属性",
        action: "multiAddProp",
    },
]

const twoModelRightClick = (event, data) => {
	menuList.value = twoModelRightMenu;
    clickEntity = "twoModel";
	showModelMenu(event, data);

	console.log("二维模型右击了！！", data);
}



/*
 * 右键菜单控制
*/
let clickEntity = '';
let clientX = ref(0);
let clientY = ref(0);
let menuList = ref([]);

const contextMenuRef = ref()
const showMenu = (e, data) => {
    // console.log(data)
    clientX.value = e.clientX;
    clientY.value = e.clientY;
	
    contextMenuRef.value.changeContextMenuShow(true, data.id);
};

const showModelMenu = (e) => {
	clientX.value = e.clientX;
    clientY.value = e.clientY;
	contextMenuRef.value.changeContextMenuShow(true);
	console.log("eeeee:",e)
};

const addTreeNode = () => {};
const addThreeModelNode = () => {};
const addTwoModelNode = () => {};


const deleteTree = (id) => {console.log("删除树:", id);};
const deleteThreeModel = (id) => {console.log("删除三维模型:", id);};
const deleteTwoModel = (id) => {console.log("删除二维模型:", id);}

const renameTree = (id) => {console.log("重命名树:", id);};
const renameThreeModel = (id) => {console.log("重命名三维模型:", id);};
const renameTwoModel = (id) => {console.log("重命名二维模型:", id);};

const uploadTree = (id) => {console.log("上传树:", id);};
const uploadThreeModel = (id) => {console.log("上传三维模型:", id);};
const uploadTwoModel = (id) => {console.log("上传二维模型:", id);};

const multiAddPropTree = (id) => {console.log("批量添加属性:", id);};
const multiAddPropThreeModel = (id) => {console.log("批量添加属性:", id);};
const multiAddPropTwoModel = (id) => {console.log("批量添加属性:", id);};

const multiDeletePropTree = (id) => {console.log("批量删除属性:", id);};
const multiDeletePropThreeModel = (id) => {console.log("批量删除属性:", id);};
const multiDeletePropTwoModel = (id) => {console.log("批量删除属性:", id);};




const menuClickCallBack = (data, id) => {
    switch (data.action) {
        case "add":
            console.log("添加子项");
            if(clickEntity === "tree"){
               addTreeNode(id);
            } else if(clickEntity === "threeModel"){
                addThreeModelNode(id);
            } else if(clickEntity === "twoModel"){
                addTwoModelNode(id);
            }
            break;
        case "delete":
            if (clickEntity == "tree") {
                deleteTree(id);
            } else if (clickEntity == "threeModel") {
                deleteThreeModel(id);
            } else if (clickEntity == "twoModel") {
                deleteTwoModel(id);
            }
            break;
        case "rename":
            console.log("重命名项");
            if (clickEntity == "tree") {
                renameTree(id);
            } else if (clickEntity == "threeModel") {
                renameThreeModel(id);
            } else if (clickEntity == "twoModel") {
                renameTwoModel(id);
            }
            break;
        case "upload":
            console.log("上传文件");
            if (clickEntity == "tree") {
                uploadTree(id);
            } else if (clickEntity == "threeModel") {
                uploadThreeModel(id);
            } else if (clickEntity == "twoModel") {
                uploadTwoModel(id);
            }
            break;
        case "multiAddProp":
            console.log("批量添加属性");
            if (clickEntity == "tree") {
                multiAddPropTree(id);
            } else if (clickEntity == "threeModel") {
                multiAddPropThreeModel(id);
            } else if (clickEntity == "twoModel") {
                multiAddPropTwoModel(id);
            }
            break;
        case "multiDeleteProp":
            console.log("批量删除属性");
            if (clickEntity == "tree") {
                multiDeletePropTree(id);
            } else if (clickEntity == "threeModel") {
                multiDeletePropThreeModel(id);
            } else if (clickEntity == "twoModel") {
                multiDeletePropTwoModel(id);
            }
            break;

    }
};

</script>

<style lang="scss" scoped>
* {
    margin: 0;
    padding: 0;
}

.home {
    width: 100%;
    height: 100%;
	display:block;
}



.main {
    height: calc(100vh - 66px);
    .left {
        border: 1px solid #eeeeee;
        max-width: 280px;
        width: 20%;
        height: calc(100% - 12px);
        margin: 5px;
        overflow: auto;
        border-radius: 5px;
        color: #333;
        .tree-list {
            position: relative;
        }
    }
    .center {
        height: calc(100% - 12px);
        overflow: hidden;
        padding: 0;
        .top {
            margin-top: 5px;
            display: block;
            height: calc(50% - 40px);
            > h6 {
                border: 1px solid #eeeeee;
                text-align: center;
                padding: 5px;
                border-radius: 5px;
                background: #eeeeee;
                color: #333;
            }

            > div {
                margin-top: 10px;
                height: calc(100% - 25px);
                background: #eeeeee;
                border: 1px solid #eeeeee;
                border-radius: 5px;
                padding: 10px;
                .view-container {
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                }
            }
        }
        .bottom {
            margin-top: 45px;
            display: block;
            height: calc(50% - 40px);

            > h6 {
                border: 1px solid #eeeeee;
                text-align: center;
                padding: 5px;
                border-radius: 5px;
                background-color: #eeeeee;
                color: #333;
            }

            > div {
                height: calc(100% - 25px);
                margin-top: 10px;
                background: #eeeeee;
                border: 1px solid #eeeeee;
                border-radius: 5px;
                padding: 10px;
                .view-container {
                    width: 100%;
                    height: 100%;
                    background-color: #fff;
                }
            }
        }
    }
    .right {
        max-width: 280px;
        width: 20%;

        height: calc(100% - 12px);
        margin: 5px;
        overflow: auto;
        border-radius: 5px;
    }
}
</style>