<template>
  <div>Tabs 示例</div>
  <Tabs v-model:selected="x">
    <Tab title="标签1">内容1</Tab>
    <Tab title="标签2">内容2</Tab>
  </Tabs>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Tab from "../lib/Tab.vue";
import Tabs from "../lib/Tabs.vue";
const x = ref("标签2");
</script>
