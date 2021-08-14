import Vue from "vue";
import App from "./App.vue";
import Navbar from "./components/Navbar.vue";
import vueRouter from "vue-router";
import Routes from "./routes";

Vue.use(vueRouter);

const router = new vueRouter({
  routes: Routes
});

Vue.component("navbar", Navbar);

new Vue({
  el: "#app",
  render: h => h(App),
  router: router
});
