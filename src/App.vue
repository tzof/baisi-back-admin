<template>
  <div id="app">
    <router-view />
    <Layout />
  </div>
</template>

<script>
import Layout from "components/Layout/Layout.vue";
export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style lang="less">
#app {
  font-size: 10px;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
