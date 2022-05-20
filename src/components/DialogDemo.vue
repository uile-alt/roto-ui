<template>
  <div>示例1</div>
  <Button @click="toggle">toggle</Button>

  <Dialog
    v-model:visible="x"
    :close-on-click-overlay="false"
    :ok="f1"
    :cancel="f2"
  >
    <template v-slot:title>实例</template>
    <template v-slot:content><div>内容</div></template>
  </Dialog>
  <div>示例2</div>
  <Button @click="showDialog">show</Button>
</template>

<script setup lang="ts">
import Dialog from "../lib/Dialog.vue";
import Button from "../lib/Button.vue";
import { openDialog } from "../lib/openDialog";
import { ref, h } from "vue";
const x = ref(false);
const toggle = () => {
  x.value = !x.value;
};
const f1 = () => {};
const f2 = () => {};
const showDialog = () => {
  openDialog({
    title: h("strong", {}, "标题"),
    content: "你好",
    closeOnClickOverlay: false,
    ok() {
      console.log("ok");
    },
    cancel() {
      console.log("cancel");
    },
  });
};
</script>
