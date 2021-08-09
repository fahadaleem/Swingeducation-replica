<template>
  <div>
    <navbar></navbar>
    <features></features>
    <howItWorks></howItWorks>

  </div>
</template>
<script>
import Features from "../components/Features.vue"
import HowItWorks from "../components/HowItWorks/HowItWorks.vue"

export default {
  name: "Home",
  components:{'features':Features,'howItWorks':HowItWorks}
};
</script>
<style>

</style>
