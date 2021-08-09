<template>
  <div>
    <navbar></navbar>
    <features></features>

  </div>
</template>
<script>
import Features from "../components/Features.vue"

export default {
  name: "Home",
  components:{'features':Features}
};
</script>
<style>

</style>
