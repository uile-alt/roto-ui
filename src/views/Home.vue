<template>
  <div>
    <Topnav></Topnav>
    <div class="banner">
      <h1>RotoUI</h1>
      <p class="actions">
        <a href="">Github</a>
        <a href="">开始</a>
      </p>
    </div>
  </div>
</template>

<script lang='ts'>
import Topnav from "../components/Topnav.vue";
export default {
  name: "Home",
  components: {
    Topnav,
  },
};
</script>

<style lang="scss" scoped></style>
