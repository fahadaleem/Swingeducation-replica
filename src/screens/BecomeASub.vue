<template>
  <div class="become-a-sub">
    <topNavbar />
    <topHeader />
    <partners />
    <howItWorks :image="howItWorksImage" />
    <hr class="divider" />
    <!-- <markets /> -->
    <builtForYou />
    <weAreHere />
    <webFooter />
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Header from "../components/becomeASub/Header.vue";
import Partners from "../components/partners/Partners.vue";
import HowItWorks from "../components/howItWorks/HowItWorks.vue";
import Markets from "../components/becomeASub/Markets.vue";
import BuiltForYou from "../components/becomeASub/BuiltForYou.vue";
import WeAreHere from "../components/becomeASub/WeAreHere.vue";
import Footer from "../components/footer/Footer.vue"




export default {
  name: "BecomeASub",
  components: {
    topNavbar: Navbar,
    topHeader: Header,
    partners: Partners,
    howItWorks: HowItWorks,
    markets:Markets,
    builtForYou: BuiltForYou,
    weAreHere: WeAreHere,
    webFooter:Footer,

  },
  data() {
    return {
      howItWorksImage: "src/assets/photo_product.jpg"
    };
  }
};
</script>
<style scoped>
.divider {
  background-color: #000000;
  width:80%;
  margin:25px auto;
  max-width:1000px;
}
</style>
