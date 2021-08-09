<template>
  <div class="features">
    <h1 class="section-heading">Thinking about Teaching with Swing?</h1>
    <div class="container features-cards">
      <div class="row">
        <template v-for="(feature, key) in features">
          <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12" v-bind:key="key">
            <card
              v-bind:image="feature.image"
              v-bind:title="feature.title"
              v-bind:description="feature.description"
            ></card>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import FeaturesCard from "./FeaturesCard.vue";
export default {
  name: "Features",
  components: { card: FeaturesCard },
  data() {
    return {
      features: [
        {
          title: "Access More Opportunities",
          description:
            "Teach at public, charter, and private schools, remote or in person.",
          image: "src/assets/icon-school.png"
        },
        {
          title: "Get Paid Weekly",
          description:
            "Earn great pay, sent direct to your bank account every week.",
          image: "src/assets/icon_paid.png"
        },
        {
          title: "Complete Flexibility",
          description: "Find opportunities that fit your schedule.",
          image: "src/assets/icon_schedule.png"
        }
      ]
    };
  }
};
</script>

<style>
.features {
  padding: 40px 0 45px 0;
}

.features .section-heading {
  text-align: center;
  color: #0073cf;
  font-weight: 700;
  font-size: 35px;
}

.features-cards {
  display: flex;
  align-items: center;
}
</style>
