<template>
  <div>
    <topNavbar></topNavbar>
    <topHeader></topHeader>
    <features></features>
    <howItWorks v-bind:image="howItWorksImage"></howItWorks>
    <specializedSub></specializedSub>
    <partners></partners>
    <webFooter></webFooter>
  </div>
</template>
<script>
import TopHeader from "../components/header/Header.vue";
import Features from "../components/Features.vue";
import HowItWorks from "../components/howItWorks/HowItWorks.vue";
import SepcializedSub from "../components/specializedSub/SpecializedSub.vue";
import Partners from "../components/partners/Partners.vue";
import Footer from "../components/footer/Footer.vue";
import Navbar from "../components/Navbar.vue";

// home component that is a homepage of the application
export default {
  name: "Home",
  components: {
    features: Features,
    howItWorks: HowItWorks,
    specializedSub: SepcializedSub,
    partners: Partners,
    webFooter: Footer,
    topHeader: TopHeader,
    topNavbar: Navbar
  },
  data() {
    return {
      howItWorksImage: "src/assets/photo_howitworks.png"
    };
  }
};
</script>
<style></style>
