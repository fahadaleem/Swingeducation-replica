<template>
  <div class="built-card">
    <div class="card-top text-center">
      <img :src="icon" width="auto" height="40px" />
      <h5 class="text-center my-3 font-weight-bold">{{ title }}</h5>
      <p class="text-center my-3 card-details">
        {{ content }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "BuiltCard",
  props: ["icon", "title", "content"]
};
</script>
<style scoped>
.card-details {
  font-size: 15px;
}
</style>
