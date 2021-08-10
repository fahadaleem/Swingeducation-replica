<template>
  <div>
    <header class="container-fluid header">
      <div class="header-content ml-auto">
        <h1 class="text-center">We're hiring!</h1>
        <p class="lead font-weight-bold text-center">
          Prevent further interruptions in the classroom this school year as a
          qualified, reliable SwingSub.
        </p>
      </div>
    </header>
    <div class="mobile-header">
      <div class="header-content">
        <h1 class="text-center text-white">We're hiring!</h1>
        <p class="lead font-weight-bold text-center text-white">
          Prevent further interruptions in the classroom this school year as a
          qualified, reliable SwingSub.
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style scoped>
.header {
  background-image: url("/src/assets/Banner Image.jpg");
  background-size: cover;
  background-position: center;
  /* height:550px; */
  padding: 80px 0px;
}

.header-content {
  width: 550px;
  /* background-color: red; */
  margin-right: 80px;
}

.header-content h1 {
  font-family: "Lucky Fellas";
  color: #0073cf;
  font-size: 120px;
  padding-top: 160px;
}

.header-content p {
  font-size: 15px;
}

.mobile-header {
  display: none;
  background-image: url("/src/assets/homepage.png");
  background-size: cover;
  background-position: center;
  padding: 100px 20px;
}

@media screen and (max-width: 780px) {
  .header {
    display: none;
  }
  .mobile-header {
    display: block;
  }
  .header-content {
    width: auto;
    margin: 0;
  }
}
</style>
