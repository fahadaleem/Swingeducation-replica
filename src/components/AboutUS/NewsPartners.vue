<template>
  <div class="partners container">
    <div class="row">
      <template v-for="(brand, index) in partners">
        <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" v-bind:key="index">
          <div class="partner-brand">
            <img v-bind:src="brand" alt="partner brand logo" />
          </div>
        </div>
      </template>
    </div>
  </div>
</template>
<script>
export default {
  name: "NewsPartners",
  data() {
    return {
      partners: [
        "src/assets/Fortune-Logo.jpg",
        "src/assets/edutopia-Logo.jpg",
        "src/assets/az-Logo.jpg",
        "src/assets/inc-Logo.jpg",
        "src/assets/EdSurge.jpg",
        "src/assets/dj.jpg"
      ]
    };
  }
};
</script>
<style scoped>
.partners {
  padding: 40px 0;
}
.partner-brand {
  margin: 0 5px;
  box-shadow: 2px 2px 6px #afafaf;
  cursor: pointer;
  min-width: 230px;
  margin: 10px auto;
  max-width: 280px;
}
.partner-brand:hover {
  box-shadow: 2px 2px 10px #afafaf;
}

.partner-brand img {
  width: 100%;
}
</style>
