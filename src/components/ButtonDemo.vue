<template>
  <div>Button的文档</div>
  <Button >hi</Button>
  <Button theme="button">hi</Button>
  <Button theme="link">hi</Button>
  <Button theme="text">hi</Button>
</template>
<script lang='ts'>
import Button from "../lib/Button.vue";
export default {
  name: "ButtonDemo",
  components: { Button },
  setup() {
    const onClick = () => {
      console.log("hi");
    };
    return { onClick };
  },
};
</script>