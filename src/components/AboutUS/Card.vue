<template>
  <div class="card">
    <img
      class="card-img-top w-100"
      v-bind:src="teacherImg"
      alt="Teacher Image"
    />
    <div class="card-body">
      <h3 class="card-title mb-3 pb-3">{{name}}</h3>
      <a v-bind:href="redirectUrl" class="btn btn-primary" id="about-btn">Read More</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "teacherCard",
  props:["teacherImg","name","redirectUrl"]
};
</script>
<style scoped>
.card {
  box-shadow: 0 0 10px 2px rgb(0 0 0 / 39%);
  width: 330px;
  border: 0;
  margin:30px 0;
}
.card-body {
  padding: 35px;
}
.card-title {
  font-size: 24px;
}
#about-btn {
  display: inline-block;
  text-decoration: none;
  background-color: #fbb200;
  border-color: #fbb200;
  color: #283c5d;
  cursor: pointer;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-shadow: none;
  line-height: 40px;
  text-align: center;
  margin: 0;
  height: 40px;
  padding: 2px 30px;
  border-radius: 4px;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-weight: 600;
}
</style>
