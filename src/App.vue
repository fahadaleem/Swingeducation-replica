<template>
  <div id="app">
    <!-- <home></home> -->
    <!-- <login></login> -->
    <aboutUs></aboutUs>
  </div>
</template>

<script>
import Home from "./screens/Home.vue";
import Login from "./screens/Login.vue";
import AboutUs from "./screens/AboutUs.vue";

export default {
  components: { home: Home, login: Login, aboutUs: AboutUs },
  data() {
    return {};
  }
};
</script>

<style scoped>
* {
  margin: 0 !important;
  font-family: "Raleway", sans-serif;
}

@font-face {
  font-family: "Lucky Fellas";
  src: local("Lucky Fellas W00 Regular.ttf"),
    url(/src/fonts/lucky.ttf) format("truetype");
}
</style>
