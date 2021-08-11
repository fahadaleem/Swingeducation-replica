<template>
  <div class="team-member-card">
    <div class="card-top">
      <img :src="memberImage" class="member-image" alt="member image" />
      <div class="about-member">
        <h4 class="designation">{{ designation }}</h4>
        <p class="intro">
          {{ intro }}
        </p>
      </div>
      <h5 class="text-center font-weight-bold my-2">{{ name }}</h5>
    </div>
  </div>
</template>
<script>
export default {
  name: "TeamMemberCard",
  props: ["memberImage", "designation", "intro", "name"]
};
</script>
<style scoped>
.team-member-card {
  margin: 30px 0;
}
.card-top {
  width: 268px;
  margin: auto;
  position: relative;
}

.about-member {
  color: #fff;
  position: absolute;
  top: 0;
  padding: 20px;
  line-height: 33px;
  background: #0574cf;
  /* display: none; */
  height: 268px;
  transition: 1s;
  visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 0.3s linear;
}

.card-top:hover .about-member {
  display: block;
  transition: 1s;
  visibility: visible;
  opacity: 1;
}
</style>
