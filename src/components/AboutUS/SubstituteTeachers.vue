<template>
  <div class="substitute-teacher">
    <div class="container">
      <div class="about-content">
        <h2 class="text-center font-weight-bold section-heading">
          Who are Swing Education Substitute Teachers?
        </h2>
        <p class="text-center font-weight-bold about-substitute-teacher">
          Swing Education substitute teachers come from varied backgrounds, but
          share a passion for helping students learn.
        </p>
      </div>
      <div class="teachers d-flex justify-content-between flex-wrap">
        <template v-for="(teacherData, index) in substituteData">
          <teacherCard
            v-bind:teacherImg="teacherData.teacherImg"
            :name="teacherData.name"
            :redirectUrl="teacherData.redirectUrl"
            v-bind:key="index"
          ></teacherCard>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import TeacherCard from "./Card.vue";

export default {
  name: "SubstituteTeacher",
  components: {
    teacherCard: TeacherCard
  },
  data() {
    return {
      substituteData: [
        {
          teacherImg: "src/assets/sub-story-1.png",
          name: "Meet Haley Brucato",
          redirectUrl: "#"
        },
        {
          teacherImg: "src/assets/sub-story-2.png",
          name: "Meet Mamie Dinani",
          redirectUrl: "#"
        }
      ]
    };
  }
};
</script>
<style scoped>
.substitute-teacher {
  background-image: url(/src/assets/substitute-teachers-bg.png);
  background-size: cover;
  padding: 80px 0px 10px 0;
}

.container .section-heading {
  color: #0574cf;
  font-size: 32px;
}
.about-substitute-teacher {
  font-size: 18px;
  margin: 20px auto auto auto;
  width: 70%;
  line-height: 1.56;
  font-style: normal;
  font-stretch: normal;
}
.teachers {
  width: 70%;
  margin: 70px auto;
}
</style>
