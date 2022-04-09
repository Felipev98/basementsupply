<template>
<div class="container">
    <div class="row">
        <div class="col-6">
            <h2>{{title}}</h2>
            <h3>{{subtitle}}</h3>
        </div>
        <div class="col-6">
        <img :src="require(`@/assets/img/${img_src}`)"> 
        </div>
    </div>
<span>©basement.studio LLC. All rights reserved.</span>
</div>

</template>

<script>
export default {
    data() {
        return {
            title: 'BASEMENT',
            img_src: 'globo.png',
            subtitle:'SUPPLY'
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Home/_Basementtitle.scss';

</style>
