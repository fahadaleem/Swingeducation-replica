<template>
  <div class="feature-card">
    <div class="image-section p-4">
      <img v-bind:src="image" alt="feature-icon" height="50" />
    </div>
    <div>
      <h5 class="feature-title">
        {{ title }}
      </h5>
      <p class="lead feature-description">
        {{ description }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  props: ["image", "title", "description"],
  data() {
    return {
      image: "src/assets/icon_schedule.png"
    };
  }
};
</script>

<style scoped>
.feature-card {
  text-align: center;
}

.image-section img {
  height: 100px;
}
.feature-title {
  font-size: 18px;
  font-weight: 700;
  margin-top:1.75em;
  margin-bottom:0.75em;
}

.feature-description {
  font-size: 15px;
  font-weight: 500;
}
</style>
