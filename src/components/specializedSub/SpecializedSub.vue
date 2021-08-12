<template>
    <div class="specialized-subject-section container">
        <h1 class="text-center font-weight-bold">{{ headingText }}</h1>
        <p class="lead font-weight-normal text-center section-description font-weight-bold">Learning looks a little different lately, and Swing is offering new, flexible solutions. Access our on-demand network of qualified educators to meet this year’s unique needs.</p>
        <div class="row mx-0 my-4 py-4">
            <template v-for="(data,index) in cardData">
                <div class="col-lg-4 col-md-4 col-sm-12 col-xs-12 my-3" v-bind:key="index">
                <subCard v-bind:title="data.title" v-bind:description="data.description"></subCard>
            </div>
            </template>
        </div>
        <div class="find-teacher-btn text-center mt-n4">
            <button type="button" class="btn btn-primary" id="find-teacher-btn">Find Teachers</button>
        </div>
    </div>
</template>
<script>

import SubCard from "./components/Card.vue"

export default {
    name:'SepcializedSub',
    components:{
        'subCard':SubCard
    },
    data(){
        return{
            headingText:"Specialized Subs For New Challenges",
            cardData:[{
                title:"Long-Term Requests",
                description:"Need Extended Support? We can provide consistency while taking care of the employment costs and liabilities."
            },
            {
                title:"Virtual Subs",
                description:"If you need a credentialed teacher to fully manage a remote classroom or an aide to support students 1:1 or in small groups.",
            },
            {
                title:"On-Site Co-Teacher",
                description:"Keep everyone on task when the teacher is teaching remotely and you need help overseeing students in the classroom."
            }]
        }
    }
}
</script>
<style scoped>
.specialized-subject-section{
    padding:45px 0;
}
.container h1{
  color: #0073cf;
}
.section-description{
    font-size:18px !important;
    color:#6c757d;
}

#find-teacher-btn{
    background-color:#ffe16d !important;
    cursor: pointer;
    font-family: Helvetica, Arial, sans-serif;
    font-size: 17px;
    letter-spacing: 0.5px;
    text-shadow: none;
    line-height: 40px;
    text-transform: uppercase;
    text-align: center;
    margin: 0px;
    height: 40px;
    padding: 0px 80px 30px;
    border-radius: 4px;
    max-width: 100%;
    border-color: #ffe16d !important;
    box-shadow: rgb(0 0 0 / 25%) 0px 3px 10px 0px;
    outline: none !important;
    color:#283c5d;
    font-weight:600;
}
</style>