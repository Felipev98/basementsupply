<template>
<div class="footer">
    <div class="contenido">
        <img src="../../assets/img/dibujo2.png" alt="">
    </div>
    <div class="texto">
    <h2>{{footer1}}</h2>
    </div>

</div>
    <h3>{{footer2}}</h3>
</template>

<script>
export default {
    data() {
        return {
            footer1: "Wear",
            footer2: "EVERYDAY"
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Footer.scss';

</style>