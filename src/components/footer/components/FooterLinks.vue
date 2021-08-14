<template>
  <div class="teacher-links">
    <h4>{{ menuName }}</h4>
    <ul class="footer-menu">
      <template v-for="(menu, index) in menuLinks">
        <li v-bind:key="index" class="footer-item">
          <router-link v-bind:to="menu.pageLink">
            {{ menu.pageName }}</router-link
          >
        </li>
      </template>
    </ul>
  </div>
</template>
<script>
export default {
  name: "teacherLinks",
  props: ["menuName", "menuLinks"],
  data() {
    return {
      // menuName:"Teacher"
    };
  }
};
</script>
<style scoped>
.teacher-links {
  padding: 40px 10px;
}

.teacher-links h4 {
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}

.teacher-links ul {
  list-style: none;
}

.teacher-links ul li {
  color: #fff;
  margin: 30px 0;
}

.teacher-links ul li a {
  color: #fff;
  font-weight: 600;
  text-decoration: none;
}
</style>
