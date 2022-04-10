<template>
  <div class="bubble">
      <span>{{data}}</span>
  </div>
</template>

<script>
export default {
props:{
    data:{
        type:String,
        default:"",
        required:true
    }
}
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Bubble.scss';

</style>