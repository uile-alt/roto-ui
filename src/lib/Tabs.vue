<template>
  <div class="r-tabs">
    <div class="r-tabs-nav" ref="container">
      <div
        class="r-tabs-nav-item"
        v-for="(t, index) in titles"
        :ref="
          (el) => {
            //@ts-ignore
            if (el) navItems[index] = el;
          }
        "
        @click="select(t)"
        :class="{ selected: t === selected }"
        :key="index"
      >
        {{ t }}
      </div>
      <div class="r-tabs-nav-indicator" ref="indicator"></div>
    </div>

    <div class="r-tabs-content">
      <component
        class="r-tabs-content-item"
        :class="{ selected: c.props.title === selected }"
        v-for="(c, key) in defaults"
        :key="key"
        :is="c"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import Tab from "./Tab.vue";
import { useSlots, ref, computed, onMounted, onUpdated } from "vue";
const props = defineProps<{
  selected: string;
}>();

const defaults = useSlots().default();
const navItems = ref<HTMLDivElement[]>([]);
const indicator = ref<HTMLDivElement>(null);
const container = ref<HTMLDivElement>(null);
const x = () => {
  const divs = navItems.value;
  const result = divs.filter((div) => div.classList.contains("selected"))[0];
  const { width } = result.getBoundingClientRect();
  indicator.value.style.width = width + "px";
  const { left: left1 } = container.value.getBoundingClientRect();
  const { left: left2 } = result.getBoundingClientRect();
  const left = left2 - left1;
  indicator.value.style.left = left + "px";
  console.log(result);
};
onMounted(x);
onUpdated(x);
defaults.forEach((tag) => {
  if (tag.type !== Tab) {
    throw new Error("Tabs 子标签必须为 Tab");
  }
});
const emit = defineEmits(["update:selected"]);

function select(title: string) {
  emit("update:selected", title);
}
const current = computed(() => {
  return defaults.filter((tag) => {
    return tag.props.title === props.selected;
  })[0];
});

const titles = defaults.map((tag) => {
  return tag.props.title;
});
</script>
<style lang="scss">
$blue: #40a9ff;
$color: #333;
$border-color: #d9d9d9;
.r-tabs {
  &-nav {
    display: flex;
    color: $color;
    border-bottom: 1px solid $border-color;
    position: relative;
    &-item {
      padding: 8px 0;
      margin: 0 16px;
      cursor: pointer;

      &:first-child {
        margin-left: 0;
      }
      &.selected {
        color: $blue;
      }
    }
    &-indicator {
      position: absolute;
      height: 3px;
      background: $blue;
      left: 0;
      bottom: -1px;
      width: 100px;
      transition: all 250ms;
    }
  }
  &-content {
    padding: 8px 0;
    &-item {
      display: none;
      &.selected {
        display: block;
      }
    }
  }
}
</style>
