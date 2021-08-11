<template>
  <div class="card text-center">
    <div class="card-img">
        <img
      class="card-img-top w-100"
      v-bind:src="partnerImg"
      alt="Teacher Image"
    />
    </div>
    <div class="card-body">
      <a v-bind:href="redirectUrl" class="btn btn-primary" id="about-btn">Read More</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "PartnerCard",
  props:["partnerImg","name","redirectUrl"]
};
</script>
<style scoped>
.card {
  width: 330px;
  border: 0;
  margin:30px auto;
  background-color: transparent;
  padding:35px;
}
.card-body {
  padding: 35px;
}
.card-title {
  font-size: 24px;
}

.card-img-top{
    /* width:180px; */
    width: 100%;
    margin:0 auto;
    height:58px;
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
