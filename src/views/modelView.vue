<template>
  <div class="main-container">
    <div class="model-view">
      <img :src="imgSrc"  />
      <h6>标题1</h6>
      <p>+</p>
    </div>
  </div>

</template>

<script setup>
import { ref,defineExpose } from "vue";

const imgSrc = ref("/static/images/cad-fill.png");
const setImgSrc = (src) => {
  imgSrc.value = src;
};

defineExpose({
  setImgSrc,
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.main-container {
    width: 160px;
    height: 160px;
    padding: 5px;
  .model-view {
    width: 150px;
    height: 150px;
    border: 1px solid #eeeeee;
    border-radius: 5px;
    margin: 0 auto;
    img {
      display: block;
      width: 60%;
      height: 60%;
      margin: 0 auto;
    }
    h6 {
      height: 20px;
      background-color: #eeeeee;
      margin-bottom: 5px;
      text-align: center;
      padding: 5px;

      color: #333333;
    }
    p {
      height: 20px;
    }
  }
  &:hover {
    .model-view {
      border: 1px solid #333333;
    }
  }
}
</style>