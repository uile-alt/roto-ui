<template>
  <div>
    <Switch v-model:value="bool"></Switch>
  </div>
</template>

<script setup lang="ts">
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
const bool = ref<boolean>(false);
</script>
>
