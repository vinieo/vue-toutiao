<template>
  <div id="app">
    <router-view name="top"></router-view>
    <router-view name="main"></router-view>
    <router-view name="bottom"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  background-color: #fbf9fe;
}
</style>
