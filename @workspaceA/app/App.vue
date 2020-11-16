<template>
  <div class="example-app">
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/a">Page A</router-link>
      <router-link to="/b">Page B</router-link>
      <router-link to="/c">Page C</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: "App",
  components: {},
};
</script>

<style lang="less" >
.example-app {
  width: 600px;
  margin: 2em auto;
  font-family: helvetica;
  a {
    padding: 1rem;
  }
}
</style>