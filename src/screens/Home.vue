

<template>
  <div>
    <navbar></navbar>
    <topHeader></topHeader>
    <features></features>
    <howItWorks></howItWorks>
    <specializedSub></specializedSub>
    <partners></partners>
    <webFooter></webFooter>
  </div>
</template>
<script>
import TopHeader from "../components/header/Header.vue"
import Features from "../components/Features.vue";
import HowItWorks from "../components/howItWorks/HowItWorks.vue";
import SepcializedSub from "../components/specializedSub/SpecializedSub.vue";
import Partners from "../components/partners/Partners.vue";
import Footer from "../components/footer/Footer.vue"



// home component that is a homepage of the application
export default {
  name: "Home",
  components: {
    features: Features,
    howItWorks: HowItWorks,
    specializedSub: SepcializedSub,
    partners: Partners,
    webFooter:Footer,
    topHeader:TopHeader
  }
};
</script>
<style></style>
