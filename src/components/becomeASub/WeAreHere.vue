<template>
  <div class="we-are-here-section">
    <div class="container">
      <div class="row m-0">
        <div class="col-lg-6">
          <img
            src="src/assets/photo_support@1x.jpg"
            width="100%"
            alt="cheers"
          />
        </div>
        <div class="col-lg-6 col-md-12 col-sm-12 col-xs-12">
          <div class="we-are-here-section-content">
            <h2 class="we-are-here-section-heading">We’re Here for You!</h2>
            <p class="we-are-here-section-para ">
              Our Talent Advocate team is available when you need us.
            </p>
            <div class="our-services d-flex my-4 align-items-center">
              <img src="src/assets/icon_chat-1.png" height="50px" />
              <h6 class="service-details mx-4 font-weight-normal">
                We’re available via text, live chat, email, and phone.
              </h6>
            </div>
            <div class="our-services d-flex my-4 align-items-center">
              <img src="src/assets/icon_support-1.png" height="50px" />
              <h6 class="service-details mx-4 font-weight-normal">
                Contact us for help navigating the set up process, or for
                assistance before, during, and after teaching requests.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WeAreHere"
};
</script>
<style scoped>
.container {
  padding: 75px 0;
}
.we-are-here-section-heading {
  font-size: calc(35px + 10 * ((100vw - 320px) / 680));
  color: rgb(40, 60, 93);
  font-weight: bold;
}
.we-are-here-section-content {
  padding: 55px 25px;
}
</style>
