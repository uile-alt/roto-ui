<template>
  <div>示例1</div>
  <Button @click="onClick">hi</Button>
  <Button theme="button">hi</Button>
  <Button theme="link">hi</Button>
  <Button theme="text">hi</Button>
  <div>示例2</div>
  <div>
    <Button size="big">大大大</Button>
    <Button>普普通</Button>
    <Button size="small">小小小</Button>
  </div>
  <div>
    <Button theme="link" size="big">大大大</Button>
    <Button theme="link">普普通</Button>
    <Button size="small" theme="link">小小小</Button>
  </div>
  <div>
    <Button size="big" theme="text">大大大</Button>
    <Button theme="text">普普通</Button>
    <Button size="small" theme="text">小小小</Button>
  </div>
  <div>示例3</div>
  <div>
    <Button level="main">主要按钮</Button>
    <Button>普通按钮</Button>
    <Button level="danger">危险按钮</Button>
  </div>
  <div>
    <Button theme="link" level="main">主要链接按钮</Button>
    <Button theme="link">普通链接按钮</Button>
    <Button theme="link" level="danger">危险链接按钮</Button>
  </div>
  <div>
    <Button theme="text" level="main">主要文字按钮</Button>
    <Button theme="text">普通文字按钮</Button>
    <Button theme="text" level="danger">危险文字按钮</Button>
  </div>
  <div>示例4</div>
  <Button disabled>按钮</Button>
  <Button theme="link" :disabled="true">按钮</Button>
  <Button theme="text" disabled>按钮</Button>
  <Button theme="text" :disabled="false">按钮</Button>
  <div>示例5</div>
  <Button loading>加载中</Button>
</template>
<script setup lang="ts">
import Button from "../lib/Button.vue";
const onClick = () => {
  console.log("hi");
};
</script>
