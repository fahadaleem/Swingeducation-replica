import Home from "./screens/Home.vue";
import AboutUs from "./screens/AboutUs.vue";
import FAQ from "./screens/FAQ";
import Login from "./screens/Login";
export default [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: AboutUs
  },
  {
    path: "/faq",
    component: FAQ
  },
  ,
  {
    path: "/login",
    component: Login
  }
];
