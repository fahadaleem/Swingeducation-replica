<template>
    <div class="how-it-work-section container">
        <h1 class="text-center mb-4 pb-4 font-weight-bold">How it works</h1>
        <div class="row">
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <div class="right-section text-center px-3">
                    <img v-bind:src="image" alt="teacher writing somthing" />
                </div>
            </div>
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12">
                <steps></steps>
                <div class="apply-now-btn text-center">
                    <button type="button" id="apply-btn" class="btn btn-primary btn-lg">Apply Now</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import Stepper from "./components/HowItWorksStepper.vue"
export default {
    components:{
        'steps':Stepper
    },
    data(){
        return{
            image:"src/assets/photo_howitworks.png"
        }
    }
}
</script>
<style scoped>
*{
}
.how-it-work-section{
    padding:40px 0;
}
.right-section img{
    width:98%;
}
.container h1{
    color:#0073cf;
}
#apply-btn{
    background-color:#65a0d8 !important;
    font-size:17px;
    letter-spacing:0.5px;
    height: 40px;
    padding: 0px 60px 30px;
    border-radius: 4px;
    text-transform: uppercase;
    line-height: 40px;
    color:#fff;
    border-color:#65a0d8;
    font-weight:600;
}
</style>