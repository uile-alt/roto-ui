<template>
  <div>Tabs 示例</div>
  <Tabs selected="标签2">
    <Tab title="标签1">内容1</Tab>
    <Tab title="标签2">内容2</Tab>
  </Tabs>
</template>

<script lang='ts'>
  import Tab from '../lib/Tab.vue'
  import Tabs from '../lib/Tabs.vue'
export default {
  components:{Tab,Tabs}
};
</script>