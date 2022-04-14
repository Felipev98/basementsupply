<template>
<div class="col-4">
<div class="card-container">     
        <div class="card-content">
             <div class="imagen-hover">
                <h3>ADD TO CART</h3>
                <img src="../../assets/img/CircleHover.png" alt="">
            </div>
            <img :src="products.image" alt="">           
        </div>
       <div class="card-footer">
            <span>{{products.title}}</span>
            <span>${{products.price}}</span>
        </div>
    </div>
</div>
    
       
</template>

<script>
export default {
    props:{
    products:{
        type:Object,
        required:true
    }
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Card.scss';
span{
    color: #ffff;
}
</style>