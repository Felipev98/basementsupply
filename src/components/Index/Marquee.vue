<template>
 <div class="marquee">
<div class="marqueeScroll">
    <span>{{text1}}</span>
    <span>{{text2}}</span>
    <span>{{text1}}</span>
    <span>{{text2}}</span>
    <span>{{text1}}</span>
    <span>{{text2}}</span>
    <span>{{text1}}</span>
    <span>{{text2}}</span>
</div>
</div>

</template>

<script>
export default {
    props:{
        text1:{
        type:String,
        default:"",
        required:true
        },
        text2:{
        type:String,
        default:"—",
        required:true
        }
    },

    }

</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Marquee.scss';

</style>