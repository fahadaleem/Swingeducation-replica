<template>
  <div class="about-us">
    <topNavbar></topNavbar>
    <aboutContainer
      img="src/assets/what-is-swing-education.png"
      heading="What is Swing Education"
      v-bind:content="[
        'Every school day is a valuable learning opportunity, and we think every class should be led by a high-quality educator. We help make this possible by connecting schools with qualified substitute teachers.'
      ]"
      v-bind:listOfContent="[
        'We recruit, screen, and support thousands of substitute teachers across the country.',
        'We connect schools with the right substitutes via an easy-to-use, web-based platform.'
      ]"
    ></aboutContainer>
    <aboutContainer
      img="src/assets/out-story.png"
      heading="Our Story"
      v-bind:content="[
        'Swing Education was founded in 2015 by a former K-12 administrator who knows what it’s like to spend frustrating early mornings and late nights trying to find the right substitute teachers -- only for things to fall through.',
        'Our team is driven by a common goal: To make it easier for you to find reliable, high-quality substitute teachers, when you need them.',
        'With 200,000-plus absence days filled to date -- and countless administrative hours saved along the way -- we’re excited about how we’ve been able to help schools improve the education experience for staff and students alike.'
      ]"
      reverse="true"
    ></aboutContainer>
    <subsituteTeacher></subsituteTeacher>
    <news></news>
    <howCanWeHelp></howCanWeHelp>
    <ourTeam></ourTeam>
    <webFooter></webFooter>
  </div>
</template>
<script>
import aboutContainer from "../components/AboutUS/TopGrids.vue";
import Navbar from "../components/Navbar.vue";
import SubstituteTeacher from "../components/AboutUS/SubstituteTeachers.vue";
import News from "../components/AboutUS/News.vue";
import HowCanWeHelp from "../components/AboutUS/HowCanWeHelp.vue";
import OurTeam from "../components/AboutUS/OurTeam.vue"
import Footer from "../components/footer/Footer.vue"


export default {
  components: {
    aboutContainer: aboutContainer,
    topNavbar: Navbar,
    subsituteTeacher: SubstituteTeacher,
    news: News,
    howCanWeHelp: HowCanWeHelp,
    ourTeam:OurTeam,
    webFooter:Footer,

  },
  data() {
    return {};
  }
};
</script>
<style scoped></style>
