<template>
  <div id="app">
   <home></home>
  </div>
</template>

<script>
import Home from "./screens/Home.vue";
export default {
  components: { home: Home },
  data() {
    return {
    };
  }
};
</script>

<style scoped>
  *{
    margin: 0 !important;
font-family: 'Raleway', sans-serif;
  }
</style>
