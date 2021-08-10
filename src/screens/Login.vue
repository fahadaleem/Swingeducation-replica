<template>
  <div class="login">
    <div class="d-flex flex-wrap">
      <div class="right-section">
        <img
          v-bind:src="loginImage"
          alt="teacher teaching something"
        />
      </div>
      <div class="left-section">
        <loginForm></loginForm>
      </div>
    </div>
  </div>
</template>
<script>
import LoginForm from "../components/loginPage/LoginForm.vue";
export default {
  data() {
    return {
      // this is the image of the right section
      loginImage: "src/assets/login-photo.png"
    };
  },
  components: {
    loginForm: LoginForm
  }
};
</script>
<style scoped>
* {
  overflow-x: hidden;
}

.right-section {
  width: 60%;
  height: 120vh;
  overflow:hidden;
}
.right-section img{
    width:100%;
    height: 100%;
}
.left-section {
  width: 40%;
}

@media screen and (max-width: 780px) {
  .right-section {
    display: none;
  }
  .left-section {
    width: 100%;
  }
}
</style>
