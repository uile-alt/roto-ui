<template>
  <div>导航栏
    <router-link to='/'>demo</router-link>|
    <router-link to='/hi'>hello</router-link>
  </div>
  <hr>
  <router-view />
</template>

<script>

export default {
  name: 'App',
}
</script>
