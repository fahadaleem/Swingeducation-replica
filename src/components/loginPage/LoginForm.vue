<template>
  <form class="login-form">
    <img v-bind:src="logo" alt="logo" height="35px" width="106px" />
    <div class="form">
      <h3>Log in to your account</h3>
      <div class="form-group mt-4 pt-4">
        <label for="Email" class="font-weight-bold">Email</label>
        <input
          type="text"
          class="form-control"
          v-model="email"
          name="email"
          id="email-input"
          aria-describedby="helpId"
          @change="email.length>0?btnDisabled=false:btnDisabled=true" 
        />
      </div>
      <div class="submit-btn-group my-4 py-2">
        <button
          type="button"
          v-bind:disabled="btnDisabled"
          id="login-btn"
          v-bind:class="{
            btn: true,
            'btn-primary': true,
            'btn-lg': true,
            'btn-block': true,
            disabled: btnDisabled
          }"
        >
          Log In
        </button>
      </div>
      <div class="divider text-center justify-content-between my-3 d-flex">
        <hr class="line w-50" />
        <span class="px-4">OR</span>
        <hr class="line w-50" />
      </div>
      <div class="register-new-account-link text-center">
        <a href="#">register new account</a>
      </div>
      <div class="google-btn w-100">
        <div class="google-icon-wrapper">
          <img
            class="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
          />
        </div>
        <p class="btn-text text-center"><b>Sign in with google</b></p>
      </div>
      <p class="need-help-content">Need help? Email <a href="mailto:support@swingeducation.com">support@swingeducation.com</a></p>
    </div>
  </form>
</template>
<script>
export default {
  data() {
    return {
      logo: "src/assets/swing-logo-blue.png",
      email: "",
      // use to disable or enable button when someone type text in the textbox
      btnDisabled: true
    };
  },
};
</script>
<style scoped>
.login-form {
  padding: 150px 80px 10px 80px;
}
.form h3 {
  padding-top: 40px;
  font-size: 20px;
  font-weight: bold;
}
#email-input {
  box-shadow: none;
  color: rgb(40, 60, 93);
  font-size: 18px;
  font-weight: 400;
  flex: 0 0 auto;
  max-width: 100%;
  padding: 13px 12px;
  appearance: none;
  border: 2px solid rgb(190, 197, 208);
  border-radius: 4px;
  height: 48px;
}
#email-input:focus {
  border-color: #0bb4c4;
}

#login-btn {
  box-shadow: none;
  color: rgb(255, 255, 255);
  font-size: 20px;
  transition: background-color 0.3s ease 0s;
  font-weight: 600;
  flex: 0 0 auto;
  /* width: 360px; */
  max-width: 100%;
  border: none;
  border-radius: 4px;
  height: 48px;
  background-color: #0bb4c4;
}
#login-btn.disabled {
  opacity: 1;
  background-color: #e9e9e9 !important;
  color: #9b9b9b !important;
  cursor: default;
  pointer-events: all;
}

.divider {
  align-items: center;
}
.google-btn {
  /* width: 184px; */
  height: 43px;
  background-color: #4285f4;
  border-radius: 2px;
  box-shadow: 0 3px 4px 0 rgba(0,0,0,.25);
  margin:30px 0;
}
  .google-icon-wrapper {
    position: absolute;
    margin-top: 1px;
    margin-left: 1px;
    width: 40px;
    height: 40px;
    border-radius: 2px;
    background-color: #fff;
  }
  .google-icon {
    position: absolute;
    margin-top: 11px;
    margin-left: 11px;
    width: 18px;
    height: 18px;
  }
  .btn-text {
    /* margin: 11px 11px 0 0; */
    color: #fff;
    font-size: 14px;
    letter-spacing: 0.2px;
    padding:10px 0;
  }
  .google-btn:hover {
    box-shadow: 0 0 6px #4285f4;
  }
  .google-btn:active {
    background: #1669F2;
  }
  .need-help-content{
      font-size: 14px;
      color: rgb(155, 155, 155);
      text-align: center;
  }
  .need-help-content a{
      text-decoration: none;
            color: rgb(155, 155, 155);

  }

</style>
