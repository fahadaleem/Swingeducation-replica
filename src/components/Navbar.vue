<template>
  <nav class="navbar navbar-expand-lg navbar-light">
    <a class="navbar-brand" href="#" style="text-align: center;width:240px;">
      <img v-bind:src="logo" alt="logo" class="logo" />
    </a>
    <button
      class="navbar-toggler d-lg-none"
      type="button"
      data-toggle="collapse"
      data-target="#collapsibleNavId"
      aria-controls="collapsibleNavId"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="collapsibleNavId">
      <ul class="navbar-nav mt-2 mt-lg-0">
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >For Teachers</a
          >
          <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="#">Action 1</a>
            <a class="dropdown-item" href="#">Action 2</a>
          </div>
        </li>
        <li class="nav-item dropdown">
          <a
            class="nav-link dropdown-toggle"
            href="#"
            id="dropdownId"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
            >For Schools</a
          >
          <div class="dropdown-menu" aria-labelledby="dropdownId">
            <a class="dropdown-item" href="#">Action 1</a>
            <a class="dropdown-item" href="#">Action 2</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About Us</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Reading + Resources</a>
        </li>
        <li class="nav-item link-btn">
          <a class="nav-link" href="#">Apply Now</a>
        </li>
        <li class="nav-item link-btn">
          <a class="nav-link" href="#">Login</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      isActive: false,
      logo: "src/assets/good morning teacher-01.png"
    };
  },
  methods: {
    toggle() {
      console.log(this.isActive);
      this.isActive = !this.isActive;
    }
  }
};
</script>

<style scoped>
/* give background color to the navbar and some padding */
.navbar {
  padding: 0.3rem 0.1rem !important ;
  background-color: #283c5d !important;
}
/* fixed the size of navbar logo and give some margin from left */
.navbar-brand {
  width: 150px !important;
  margin-left: 40px;
}
/* set the height and width of navbar logo */
.navbar-brand img {
  width: 100%;
  height: 80px;
}
/* align both logo and navlink to center and set the adjustment */
.navbar-nav {
  align-items: center;
  padding: 0 45px;
  width: 100%;
  justify-content: flex-end;
  flex-wrap: wrap;
}
.nav-item {
  margin: 5px 35px 5px 0;
}

.nav-item .nav-link {
  font-size: 14px;
  color: #fff;
  font-weight: 600;
}
.nav-item .nav-link:hover {
  color: rgb(251, 178, 0);
}

.link-btn {
  background-color: rgb(251, 178, 0);
  color: rgb(40, 60, 93);
  padding: 2px 35px;
  border-radius: 5px;
  margin-right: 25px;
}

.link-btn .nav-link {
  color: #283c5d !important;
  font-weight: 700;
}
.navbar-toggler {
  background-color: #fff !important;
}

@media only screen and (max-width: 760px) {
  .navbar-brand {
    width: 180px !important;
  }
  .link-btn {
    padding: 0;
    width: 160px;
    text-align: center;
  }
  .navbar-nav {
    align-items: flex-start;
  }
}
</style>
