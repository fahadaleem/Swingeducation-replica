import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'


Vue.component('navbar', Navbar)

new Vue({
  el: '#app',
  render: h => h(App)
})
