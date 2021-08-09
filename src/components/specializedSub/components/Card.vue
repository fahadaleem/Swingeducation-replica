<template>
    <div class="sub-card">
        <h5 class="title font-weight-bold text-center">{{ title }}</h5>
        <p class="description text-center">{{ description }}</p>
    </div>
</template>
<script>
export default {
    name:'SubCard',
    props:['title','description']
}
</script>
<style>
.description{
    font-size:15px;
    font-weight:500;
    padding: 10px 15px;
    letter-spacing:0.5px;
}
</style>