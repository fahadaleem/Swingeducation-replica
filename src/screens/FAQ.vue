<template>
  <div class="faq-section">
    <topNavbar></topNavbar>
    <div class="container">
      <h1 class="faq-heading text-center">Frequently Asked Questions</h1>
      <p class="text-center content">
        To help you determine if subbing with Swing is the right fit for you, we
        have compiled a list of frequently asked questions and answers.
      </p>
      <div class="questions">
        <template v-for="(faq, index) in faqs">
          <accordion
            :key="index"
            :id="index"
            :question="faq.question"
            :answer="faq.answers.answer"
            :list="faq.answers.list"
          ></accordion>
        </template>
      <em>Looking for more? <a href="#">Contact us</a> if you'd like additional information about partnering with Swing Education.</em>
      </div>
    </div>
    <webFooter></webFooter>
  </div>
</template>
<script>
import Navbar from "../components/Navbar.vue";
import Accordion from "../components/faq/Accordion.vue";
import Footer from "../components/footer/Footer.vue"

export default {
  name: "faq",
  components: {
    topNavbar: Navbar,
    accordion: Accordion,
    webFooter:Footer,

    
  },
  data() {
    return {
      faqs: [
        {
          question: "How much money will I make?",
          answers: {
            answer:
              "Each of our school partners sets their own pay rates -- and as a SwingSub, you’ll know the pay for an assignment before you accept it. That way, you decide what rate you are willing to work for. Here are ballpark pay ranges for some of our regions: ",
            list: [
              "Bay Area (CA): up to $225 ",
              "Los Angeles (CA): up to $190",
              "Orange County (CA): up to $175",
              "San Diego (CA): up to $160",
              "Inland Empire (CA): up to $140",
              "Central Valley (CA): up to $140",
              "New Jersey: up to $130",
              "Washington D.C.: up to $145"
            ]
          }
        },
        {
          question: "What schools and districts work with Swing Education?",
          answers: {
            answer:
              "We currently work with more than 1,500 schools/district partners, including public, charter, and private schools. These range from large public districts that serve tens of thousands of students to single-site private schools with just a few dozen. <br />We currently work with schools in California, Illinois (Chicago), New Jersey, New York, Texas, and Washington D.C. Contact us if you’d like more information about how we serve your region."
          }
        },
        {
          question: "Why do substitute teachers work for Swing Education?",
          answers: {
            answer:
              "Here’s why our substitute teachers tell us they like working with Swing:",
            list: [
              "We pay them each week.",
              "We provide access to more schools and districts with a single application.",
              "They enjoy working in a variety of school and classroom settings.",
              "We support our substitute teachers with teaching resources, networking events, access to a supportive community, and more."
            ]
          }
        },
        {
          question: "How much does Swing Education cost?",
          answers: {
            answer:
              "We offer several flexible pricing plans, including a pay-as-you-go option with no upfront fees. \n A service fee is added to each successful fill that covers recruiting costs, background checks and fees, data-driven matching, monthly reporting, substitute teacher payment processing, and access to substitute teacher profiles and metrics. \n Our service fee plus your substitute teacher pay rate (which you set) comprise the total cost to use Swing Education. \n Contact us for more information on pricing for your school or district."
          }
        },
        {
          question:
            "How long will it take to implement Swing Education in my school, and are there any implementation fees?",
          answers: {
            answer:
              "We get your administrators trained and system set up for no cost to you, and you should be up and running within a week."
          }
        },
        {
          question: "How reliable are Swing Education’s substitute teachers?",
          answers: {
            answer:
              "Very Reliable! It’s very rare that a Swing substitute teacher fails to show up for an assignment. In fact, our reliability rate is north of 99.7%."
          }
        },
        {
          question: "How long does it take to fill a request?",
          answers: {
            answer:
              "Not long at all. Although the specifics will vary depending on the type of request (i.e. single-day vs. long-term) and the time the request is issued (i.e. it will likely be accepted more quickly if issued at 6 p.m. rather than 2 a.m.), it generally takes less than a minute to issue a request, and you’ll generally be matched with a substitute teacher within 10 minutes."
          }
        }
      ]
    };
  }
};
</script>
<style scoped>

.faq-heading {
  margin: 30px 5px;
  padding: 5px;
  font-size: 6em;
  font-family: "Lucky Fellas";
}
.content {
  margin: 0em;
  padding: 0em;
  font-family: inherit;
  font-size: 1em;
  font-style: normal;
  font-weight: 600;
  line-height: 1.4;
  letter-spacing: 0em;
  text-transform: none;
  color: rgba(0, 0, 0, 1);
  background-color: transparent;
}
.questions{
    padding-bottom: 40px;
}
</style>
