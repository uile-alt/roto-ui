<template>
  <div>
    <Switch :value="a" @input="a = $event"></Switch>
  </div>
</template>
<script lang='ts'>
import Switch from "../lib/Switch.vue";
import { ref } from "vue";
export default {
  components: { Switch },
  setup() {
    const a = ref(true);
    return { a };
  },
};
</script>