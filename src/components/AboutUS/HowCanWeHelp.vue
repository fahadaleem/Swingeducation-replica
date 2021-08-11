<template>
  <div class="how-can-help-partner-section">
    <div class="container">
      <h1 class="text-center section-heading">How We Help Our Partners</h1>
      <p class="section-content">
        Swing Education works with 2,000-plus partners, including district,
        charter, and private schools, across the country. Here are some examples
        of how we help.
      </p>
      <div class="partners row align-items-center justify-content-between">
          <template v-for="(partner, index) in partners">
              <div class="col-lg-4 col-sm-12" v-bind:key="index">
                  <partnerCard  :partnerImg="partner.image"></partnerCard>
              </div>
          </template>
      </div>
    </div>
  </div>
</template>
<script>
import PartnerCard from "../AboutUS/PartnerCard.vue"
export default {
  name: "HowCanWeHelp",
  components:{partnerCard:PartnerCard},
  data(){
      return{
          partners:[{
              image:"src/assets/st-paul.png",
              redirectUrl:"#",
          },
          {
              image:"src/assets/rocketship.png",
              redirectUrl:"#",
          },
          {
              image:"src/assets/cajon-valley.png",
              redirectUrl:"#",
          }]
      }
  }
};
</script>
<style scoped>
.how-can-help-partner-section {
  background-color: #eff7fd;
  padding: 45px 0;
  overflow: hidden;
}
.section-heading {
  font-family: "Lucky Fellas";
  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 5px;
  text-align: center;
  color: #0574cf;
}
.section-content {
  font-size: 18px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.56;
  text-align: center;
  color: #273c5e;
  width: 80%;
  margin: 20px auto auto auto;
}
</style>
