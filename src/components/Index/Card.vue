<template>
<div class="col-4">
<div class="card-container">     
        <div class="card-content">
             <div @click="addToCar" class="imagen-hover">
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
    },
    },
    data() {
        return {
            quantity:1
        }
    },
    methods:{
            addToCar(){
            if(isNaN(this.quantity) || this.quantity <1 ){
                this.quantity =1
            }
            const item ={
                product : this.products,
                quantity : this.quantity
            }
            this.$store.commit('addToCar',item)
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Card.scss';

</style>