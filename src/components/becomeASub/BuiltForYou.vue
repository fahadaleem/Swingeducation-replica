<template>
  <div class="built-for-you-section">
    <div class="container">
      <h1 class="text-center section-heading">Built for You</h1>
      <p class="text-center font-weight-bold">
        We created our online system specifically for educators. We make it easy
        for you to find the right assignments, teach when you want, get paid
        weekly, and contact support when you need us.
      </p>
      <div class="features mt-4 pt-4 row align-items-center">
        <template v-for="(cardDetail, index) in cardData">
          <div class="col-lg-4 col-md-6 col-sm-12 col-xs-12" :key="index">
            <builtCard
              :icon="cardDetail.icon"
              :title="cardDetail.title"
              :content="cardDetail.content"
            />
          </div>
        </template>
      </div>
    </div>
  </div>
</template>
<script>
import BuiltCard from "../becomeASub/BuiltCards.vue";
export default {
  name: "BuildForYou",
  components: { builtCard: BuiltCard },
  data() {
    return {
      cardData: [
        {
          title: "Track your performance",
          icon: "src/assets/gauge.png",
          content:
            "See your past assignments, upcoming payments, and even how you’re performing in the classroom."
        },
        {
          title: "Access hundreds of schools",
          icon: "src/assets/icon_checklist-1.png",
          content:
            "Teach at all the schools in our system, without registering with each school individually."
        },
        {
          title: "Broaden your experience",
          icon: "src/assets/icon_subjects.png",
          content:
            "You’ll gain exposure to a variety of subjects, different types of schools, and various grade levels."
        },
        {
          title: "Earn special perks",
          icon: "src/assets/icon_priority.png",
          content:
            "The best-performing Swing educators earn access to special benefits and priority access to popular assignments."
        },
        {
          title: "Get texts, not phone calls",
          icon: "src/assets/icon_texts.png",
          content:
            "Receive requests via text and online, so you won’t be interrupted at 5 am by a phone ringing."
        },
        {
          title: "Filter assignments",
          icon: "src/assets/icon_filter.png",
          content:
            "Whether it’s a charter school across town or a math class after-school, you choose which requests to take."
        }
      ]
    };
  }
};
</script>
<style scoped>
.built-for-you-section {
  background-color: #eff7fd;
  padding: 100px 20px;
}
.built-for-you-section .container {
  padding: 0em 5em 3em 5em !important;
}

.container p {
  font-size: 1rem;
}
.section-heading {
  text-align: center;
  font-family: "Lucky Fellas";
  color: #0073cf;
  font-size: calc(60px + 60 * ((100vw - 320px) / 680));
}
</style>
