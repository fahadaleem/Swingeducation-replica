<template>
  <div class="signup-actions">
    <h4 class="font-weight-bold">SIGN UP</h4>
    <div class="action-btns">
      <button type="button" class="btn btn-primary d-block">I'M A SUB</button>
      <button type="button" class="btn btn-primary d-block">I'M A SHOOL</button>
    </div>
    <a href="#">Contact Support</a>
  </div>
</template>
<script>
export default {
  name: "signupActions"
};
</script>
<style scoped>
.signup-actions {
  background-color: #fff;
  border-radius: 12px;
  padding: 60px 65px;
  width: 100%;
  text-align: center;
}

.action-btns button {
  width: 100%;
  margin: 25px 0;
  background-color: #fbb200;
  border-color: #fbb200;
  color: #283c5d;
  font-weight: bold;
}
</style>
