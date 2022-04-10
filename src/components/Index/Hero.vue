<template>
  <div class="title">
      <h1>{{title}}</h1>
      <h3>{{subtitle}}</h3>
        <div class="left-bubble">
      <Bubble data="EST"/>
        </div>
      <div class="right-bubble">
    <Bubble data="2019"/>
      </div>
      <Marquee text1="A man can’t have enough base­ment swag " text2="—"/>
      <div class="left-vector">
        <img :src="require(`@/assets/img/${left_vector}`)"> 
      </div>
         <div class="right-vector">
        <img :src="require(`@/assets/img/${right_vector}`)"> 
      </div>
  </div>
</template>

<script>
import  Bubble from './Bubble.vue'
import Marquee from './Marquee.vue'
export default {
    data() {
        return {
            title:"BASEMENT",
            subtitle:"SUPPLY",
            left_vector:"left-vector.png",
            right_vector:"right-vector.png"

        }
    },
    components:{
        Bubble,Marquee
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Hero.scss';

</style>