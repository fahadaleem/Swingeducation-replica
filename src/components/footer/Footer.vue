<template>
  <footer class="footer">
    <div class="top-footer">
      <div class="container">
        <div class="row align-center">
          <div class="col-lg-7">
            <div class="row">
              <template v-for="(menu, index) in footerMenus">
                <div class="col-lg-4" v-bind:key="index">
                  <footerLinks
                    v-bind:menuName="menu.menuName"
                    v-bind:menuLinks="menu.menuLinks"
                  ></footerLinks>
                </div>
              </template>
            </div>
          </div>
          <div class="col-lg-5">
            <signupActions></signupActions>
          </div>
        </div>
      </div>
    </div>
    <footerBottom></footerBottom>
  </footer>
</template>
<script>
import FooterLinks from "./components/FooterLinks.vue";
import SignupActions from "./components/SignupActions.vue";
import FooterBottom from "./components/FooterBottom.vue";
export default {
  name: "Footer",
  data() {
    return {
      footerMenus: [
        {
          menuName: "Teachers",
          menuLinks: [
            {
              pageName: "How it works",
              pageLink: "#"
            },
            {
              pageName: "Jobs",
              pageLink: "#"
            },
            {
              pageName: "FAQ",
              pageLink: "#"
            },
            {
              pageName: "Support Center",
              pageLink: "#"
            }
          ]
        },
        {
          menuName: "Find a Sub",
          menuLinks: [
            {
              pageName: "For Districts",
              pageLink: "#"
            },
            {
              pageName: "For Charters",
              pageLink: "#"
            },
            {
              pageName: "For Private Schools",
              pageLink: "#"
            },
            {
              pageName: "Success Stories",
              pageLink: "#"
            },
            {
              pageName: "FAQ",
              pageLink: "#"
            },
            {
              pageName: "Support Center",
              pageLink: "#"
            },
            {
              pageName: "For Districts",
              pageLink: "#"
            }
          ]
        },
        {
          menuName: "About Swing",
          menuLinks: [
            {
              pageName: "About Us",
              pageLink: "#"
            },
            {
              pageName: "Careers at Corporate",
              pageLink: "#"
            },
            {
              pageName: "Hall of Fame",
              pageLink: "#"
            },
            {
              pageName: "Resources",
              pageLink: "#"
            }
          ]
        }
      ]
    };
  },
  components: {
    footerLinks: FooterLinks,
    signupActions: SignupActions,
    footerBottom: FooterBottom
  }
};
</script>
<style scoped>
.top-footer {
  background-image: url(/src/assets/tile-bg_paintdabs@2x.png);
  background-repeat: repeat;
  background-position: center;
  background-size: 40%;
  padding: 45px 0;
}
</style>
