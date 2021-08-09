<template>
  <div>
    <navbar></navbar>
    <features></features>
    <howItWorks></howItWorks>
    <specializedSub></specializedSub>

  </div>
</template>
<script>
import Features from "../components/Features.vue"
import HowItWorks from "../components/howItWorks/HowItWorks.vue"
import SepcializedSub from "../components/specializedSub/SpecializedSub.vue"

export default {
  name: "Home",
  components:{'features':Features,'howItWorks':HowItWorks, 'specializedSub':SepcializedSub}
};
</script>
<style>

</style>
