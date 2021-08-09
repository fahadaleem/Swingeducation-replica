<template>
  <div class="bottom-footer">
      <div class="container">
      <div class="row">
          <div class="col-lg-4 d-flex justify-content-around">
              <div class="security-locks">
                  <img src="src/assets/trust-seal-business-badge.png" alt="privacy-security-lock" />
              </div>
               <div class="security-locks">
                  <img src="src/assets/trust-seal-privacy-badge.png" alt="privacy-security-lock" />
              </div>
               <div class="security-locks">
                  <img src="src/assets/trust-seal-ssl-badge.png" alt="privacy-security-lock" />
              </div>
          </div>
          <div class="col-lg-4">
              <div class="social-icons text-center">
                  <label class="icon">
                      <i class="fa fa-facebook" aria-hidden="true"></i>
                  </label>
                   <label class="icon">
                      <i class="fa fa-twitter" aria-hidden="true"></i>
                  </label>
                   <label class="icon">
                      <i class="fa fa-instagram" aria-hidden="true"></i>
                  </label>
                   <label class="icon">
                      <i class="fa fa-linkedin" aria-hidden="true"></i>
                  </label>
              </div>
              <div class="content text-center text-white">
                  <p>© SWING EDUCATION, SAN MATEO, CA 94402 <br />Swing, Swing Education, and the logo at the top of this page
are trademarks of Swing Education, Inc.
Terms of Service</p>
              </div>
          </div>
      </div>
      </div>
  </div>

</template>
<script>
export default {

};
</script>
<style scoped>
.bottom-footer {
  background-color: #283c5d;
  padding: 40px 0;
}
.security-locks img{
    width:90px;
}

.social-icons .icon{
    background-color: #9bb3dab4;
    height:50px;
    width:50px;
    border-radius:50%;
    color:#fff;
    font-size:20px;
    text-align: center;
    margin:5px 10px;
}

.social-icons .icon i{
    position: relative;
    top:10px;
}
.content p{
    font-size:13px;
}
</style>
