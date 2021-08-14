<template>
  <div id="app">
    <!-- <home></home> -->
    <!-- <login></login> -->
    <!-- <aboutUs></aboutUs> -->
    <!-- <faq></faq> -->
    <router-view></router-view>
  </div>
</template>

<script>
import Home from "./screens/Home.vue";
import Login from "./screens/Login.vue";
import AboutUs from "./screens/AboutUs.vue";
import FAQ from "./screens/FAQ.vue"

export default {
  components: { home: Home, login: Login, aboutUs: AboutUs, faq:FAQ },
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
