<template>
  <div>Switch组件</div>
  <br />
  <button class="r-switch" @click="toggle" :class="{ 'r-checked': value }">
    <span></span>
  </button>
  <div>{{ value }}</div>
</template>

<script setup lang="ts">
const props = defineProps<{
  value: Boolean;
}>();
const emit = defineEmits(["update:value"]);

function toggle() {
  emit("update:value", !props.value);
}
</script>
<style lang="scss">
$h: 22px;
$h2: $h - 4px;
.r-switch {
  height: $h;
  width: $h * 2;
  border: none;
  background: #bfbfbf;
  border-radius: $h/2;
  position: relative;
  > span {
    position: absolute;
    top: 2px;
    left: 2px;
    height: $h2;
    width: $h2;
    background: white;
    border-radius: $h2 / 2;
    transition: all 250ms;
  }
  &.r-checked {
    background: #1890ff;
    > span {
      left: calc(100% - #{$h2} - 2px);
    }
  }
  &:focus {
    outline: none;
  }
  &:active {
    > span {
      width: $h2 + 4px;
    }
  }
  &.r-checked:active {
    > span {
      width: $h2 + 4px;
      margin-left: -4px;
    }
  }
}
</style>
