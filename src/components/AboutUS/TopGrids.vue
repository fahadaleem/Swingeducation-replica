<template>
  <div class="top-div">
    <div class="container">
      <div
        v-bind:class="{
          'row align-items-center': true,
          'flex-row-reverse': reverse
        }"
      >
        <div class="col-lg-6 col-md-6 text-center p-0">
          <img
            v-bind:src="img"
            alt="teacher-teaching-somthing"
            class="side-image"
          />
        </div>
        <div class="col-lg-6 col-md-6" id="about-education">
          <h3 class="top-heading">
            {{ heading }}
          </h3>
          <div class="about">
            <template v-for="(contentParagraph, index) in content">
              <p v-bind:key="index">
                {{ contentParagraph }}
              </p>
            </template>
            <ul>
              <template v-for="(content, index) in listOfContent">
                <li v-bind:key="index">
                  {{ content }}
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "top-div",
  props: ["img", "content", "listOfContent", "reverse", "heading"],
  data() {
    return {};
  }
};
</script>
<style scoped>
.top-div {
  margin: 50px 0;
}
.side-image {
  height: auto;
  width: 100%;
  max-width: 100%;
  margin: 0 auto;
}
#about-education {
  /* padding: 70px 20px; */
  /* padding:0 25px; */
  padding-bottom: 50px;
}
.top-heading {
  font-family: "Lucky Fellas";
  font-size: 60px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: normal;
  letter-spacing: 3px;
  color: #0174cf;
}

.about p {
  font-weight: bold;
}
.about ul {
  display: block;
  list-style-type: disc;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  font-weight: bold;
}

@media screen and (max-width: 780px) {
  .top-heading {
    text-align: center;
  }
  .about {
    padding: 10px 20px;
  }
  .side-image {
    width: 80%;
  }
}
</style>
