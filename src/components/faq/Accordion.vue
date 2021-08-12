<template>
  <div id="accordion">
    <div class="card">
      <div class="card-header" id="headingOne">
        <h5 class="mb-0 p-0">
          <button
            class="btn btn-link shadow-none collapsed"
            data-toggle="collapse"
            :data-target="'#' + accordionId"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            <label class="indicator">▸</label>
            {{ question }}
          </button>
        </h5>
      </div>

      <div
        :id="accordionId"
        class="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordion"
      >
        <div class="card-body border-top">
          <p>{{ answer }}</p>
          <ul class="answer-list">
            <li v-for="(list, index) in list" :key="index">{{ list }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "faq",
  props: ["question", "answer", "list", "id"],
  data() {
    return {
      accordionId: `collapse-${this.id}`
    };
  }
};
</script>
<style scoped>
.card {
  margin: 20px 0;
  border-radius: 5px !important;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0em 0.15em 0.65em 0em rgb(0 0 0 / 25%);
  overflow: hidden;
}

.card-header {
  border-width: 0px;
  border-style: none;
  border-color: transparent;
  padding: 5px 15px;
  font-family: inherit;
  font-size: 1em;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  text-align: left;
  background-color: rgba(255, 255, 255, 1);
}

.btn-link {
  border-width: 0px;
  border-style: none;
  border-color: transparent;
  border-radius: 0px 0px 0px 0px;
  padding: 5px 10px;
  font-family: inherit;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
  text-align: left;
  text-decoration: none;
}
.indicator {
  transition: 0.3s;
  transform: rotate(90deg);
  margin-right: 10px;
}

.collapsed .indicator {
  transform: rotate(0deg);
  transition: 0.3s;
}

.collapsed {
  color: #283c5d;
}

.answer-list {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  font-weight: bold;
}
</style>
