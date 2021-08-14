<template>
  <header class="header">
    <div class="header__wrapper container">
      <div class="header-content text-center">
        <h1 class="heading-text">A Better Way to Teach</h1>
        <p class="text-white lead font-weight-normal">
          Substitute Teachers are our top priority, and we’re with you every
          step of the way.
        </p>
        <div class="button-section">
          <button
            type="button"
            name=""
            id="find-job-btn"
            class="btn btn-primary btn-lg"
          >
            Find Teaching Jobs
          </button>
        </div>
      </div>
    </div>
  </header>
</template>
<script>
import Header from "../header/Header.vue";
export default {
  components: { Header },
  name: "Header"
};
</script>
<style scoped>
.header {
  background: url(/src/assets/hero_sub-detail.jpg);
  /* background-size:cover; */
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
}

.header-content {
  padding: 150px 25px;
}

.heading-text {
  font-size: 8em;
  /* font-size: 160px; */
  font-family: "Lucky Fellas";
  color: #fff;
}
.header-content p {
  font-size: 1em;
}
#find-job-btn {
  background-color: rgb(251, 178, 0);
  color: rgb(40, 60, 93);
  padding: 5px 35px;
  border-radius: 5px;
  margin-right: 25px;
  border: none;
  font-weight: bold;
}

@media (max-width: 950px) {
  .header-content .heading-text {
    font-size: 5em;
  }
  .header-content p {
    font-size: 0.8em;
  }
}
@media (max-width: 360px) {
  .header-content .heading-text {
    font-size: 4em;
  }
  .header-content p {
    font-size: 0.6em;
  }
  #find-job-btn {
    padding: 5px 20px;
    font-size: 1em;
  }
}
</style>
