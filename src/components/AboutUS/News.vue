<template>
  <div class="container news-section">
    <h2 class="news-heading">In the News</h2>
    <div class="press-inquiries-btn m-auto" style="width:220px">
      <a
        type="button"
        name=""
        id="btn"
        href="#"
        class="btn btn-primary btn-lg btn-block"
        >Press Inquiries</a
      >
    </div>
    <div class="partners">
      <newsPartner></newsPartner>
    </div>
  </div>
</template>
<script>
import NewsPartner from "./NewsPartners.vue";
export default {
  name: "News",
  components: { newsPartner: NewsPartner }
};
</script>
<style scoped>
.news-section {
  padding: 45px 0;
}
.news-heading {
  font-size: 50px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  text-align: center;
  color: #273c5e;
}
.press-inquiries-btn #btn {
  display: inline-block;
  text-decoration: none;
  background-color: #fbb200;
  border-color: #fbb200;
  color: #283c5d;
  cursor: pointer;
  font-size: 15px;
  letter-spacing: 0.5px;
  text-shadow: none;
  line-height: 20px;
  text-align: center;
  margin: 0;
  height: 40px;
  border-radius: 4px;
  max-width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-transform: uppercase;
  font-weight: 600;
}



</style>
