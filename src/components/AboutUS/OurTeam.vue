<template>
  <div class="our-team-section">
    <div class="container">
      <h2 class="text-center section-heading">Our Team</h2>
      <h3 class="section-content">Founders</h3>
      <div class="team-member-card">
        <div class="row justify-content-between">
          <template v-for="(teamMember, index) in teamMembers">
            <div class="col-lg-4" :key="index">
              <teamMemberCard
                :name="teamMember.name"
                :memberImage="teamMember.memberImage"
                :designation="teamMember.designation"
                :intro="teamMember.intro"
              ></teamMemberCard>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import TeamMemberCard from "./TeamMemberCard.vue";
export default {
  name: "OurTeam",
  components: {
    teamMemberCard: TeamMemberCard
  },
  data() {
    return {
      teamMembers: [
        {
          memberImage: "src/assets/mike-teng.png",
          designation: "Co-founder/CEO",
          intro:
            "Mike uses a love of innovation and passion for education to guide our team, much like he did as the Director of Technology at Rocketship Education.",
          name: "Mike Teng"
        },
        {
          memberImage: "src/assets/oz-feng.png",
          designation: "Co-Founder/CTO",
          intro:
            "Oz leads our engineering team as we work to create software that makes it easy for schools to find the right substitute teachers.",
          name: "Oz Feng"
        },
        {
          memberImage: "src/assets/asha.png",
          designation: "Co-Founder/COO",
          intro:
            "Asha focuses on understanding the challenges our school partners face and how we can work together to address them.",
          name: "Asha Visweswaran"
        }
      ]
    };
  }
};
</script>
<style scoped>
.our-team-section {
  padding: 45px 0;
}
.section-heading {
  font-family: "Lucky Fellas";

  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 3px;
  color: #0174cf;
}
.section-content {
  font-size: 35px;
  font-weight: 800;
  font-style: normal;
  font-stretch: normal;
  line-height: 0.8;
  letter-spacing: 1.7px;
  text-align: center;
  color: #273c5e;
}
</style>
