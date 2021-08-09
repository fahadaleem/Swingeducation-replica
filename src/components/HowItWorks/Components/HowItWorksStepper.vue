<template>
  <div class="container">
    <!-- completed -->
    <div class="step completed">
      <div class="v-stepper">
        <div class="circle">
          <label class="number">1</label>
        </div>
        <div class="line"></div>
      </div>

      <div class="content">
        <h4 class="step-name">Signup For Free</h4>
        <p class="lead step-description">Complete the registration form to get your Swing account.</p>
      </div>
    </div>

    <!-- active -->
    <div class="step completed">
      <div class="v-stepper">
        <div class="circle">
          <label class="number">2</label>
        </div>
        <div class="line"></div>
      </div>

      <div class="content">
        <h4 class="step-name">Get set up to teach</h4>
        <p class="lead step-description">Log into your account to complete background screening and submit your documents.</p>
      </div>
    </div>

    <!-- empty -->
    <div class="step completed">
      <div class="v-stepper">
        <div class="circle">
          <label class="number">3</label>
        </div>
        <div class="line"></div>
      </div>

      <div class="content">
         <h4 class="step-name">Teach and get paid!</h4>
        <p class="lead step-description">Receive requests by text or online, choose when and where to work, then get paid at the end of each week.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "stepper"
};
</script>
<style scoped>
/* .container {
  width: 50%;
} */

.step {
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;

  background-color: cream;
}

.v-stepper {
  position: relative;
  /*   visibility: visible; */
}

/* regular step */
.step .circle {
  background-color: white;
  border: 3px solid gray;
  border-radius: 100%;
  width: 40px; /* +6 for border */
  height: 40px;
  display: inline-block;
  text-align: center;
}

label.number {
  color: #0073cf !important;
  font-size: 20px !important;
}

.step .line {
  top: 38px;
  left: 20px;
  /*   height: 120px; */
  height: 100%;

  position: absolute;
  border-left: 3px solid gray;
}

.step.completed .circle {
  visibility: visible;
  background-color: #fff;
  border-color: #0073cf;
}

.step.completed .line {
  border-left: 3px solid #0073cf;
}

.step.active .circle {
  visibility: visible;
  border-color: #0073cf;
}

.step.empty .circle {
  visibility: hidden;
}

.step.empty .line {
  top: 0;
  height: 150%;
}

.step:last-child .line {
  border-left: 3px solid white;
  z-index: -1; /* behind the circle to completely hide */
}

.content {
  margin-left: 20px;
  display: inline-block;
  height:140px;
}

.content .step-name{
  font-size:18px;
  font-weight:700;
}

.content .step-description{
  font-size:15px;
  font-weight:500;
}

</style>
