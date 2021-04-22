<template>
  <div>示例</div>
  <Button @click="toggle">toggle</Button>
  <Dialog v-model:visible="x" :close-on-click-overlay="true"
  :ok="f1" :cancel="f2"></Dialog>
</template>
<script lang='ts'>
  import Dialog from "../lib/Dialog.vue";
  import Button from "../lib/Button.vue";
  import {ref} from 'vue'
export default {
  components:{Dialog,Button},
  setup(){
    const x = ref(false)
    const toggle = ()=>{
      x.value = !x.value
    }
    const f1 = ()=>{
      console.log(1);
      return true
    }
    const f2 = ()=>{}
    return {x, toggle,f1,f2}
  }
};
</script>