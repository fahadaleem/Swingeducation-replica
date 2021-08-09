<template>
  <div>
    <navbar></navbar>
    <features></features>
    <howItWorks></howItWorks>
    <specializedSub></specializedSub>
    <partners></partners>
  </div>
</template>
<script>
import Features from "../components/Features.vue";
import HowItWorks from "../components/howItWorks/HowItWorks.vue";
import SepcializedSub from "../components/specializedSub/SpecializedSub.vue";
import Partners from "../components/partners/Partners.vue";

export default {
  name: "Home",
  components: {
    features: Features,
    howItWorks: HowItWorks,
    specializedSub: SepcializedSub,
    partners: Partners
  }
};
</script>
<style></style>
