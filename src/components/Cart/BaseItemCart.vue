<template>
<div class="container">
    <div class="row card-cart">
        <div class="col-6">
            <div class="imagen">
            <img :src="item.product.image" alt="">
            </div>
            </div>
            <div class="col-6">
            <div class="cart-info">
                <h2>{{item.product.title}}</h2>
                <span>{{item.product.material}}</span>
            </div>
            <div class="cart-info-product">
                <h3>QUANTITY:</h3>
                <div class="quantity-product">
               <span  @click="decrementQuantity(item)" class="decrement-quantity">-</span> <span>{{item.quantity}}</span> <span class="increment-quantity" @click="incrementQuantity(item)">+</span> 
                </div>
            </div>
            <div class="cart-info-product">
                <h3>SIZE:</h3>
                <div >
               <span >S</span> <span>M</span> L<span> <span></span> <span>XL</span> </span>
                </div>
                <div class="item-total"> <span >${{ getItemTotal(item).toFixed(2)}}</span> </div>
            </div>
            </div>
    </div>
</div>

</template>
<script>
export default {
    name:"BaseItemCart",
        props:{
        initialItem:Object 
    },
    data() {
        return {
            item:this.initialItem
        }

    },
    methods:{
        getItemTotal(item){
            return item.quantity * item.product.price
        },
        decrementQuantity(item){
        item.quantity -=1
        if(item.quantity === 0){
            this.$emit('removeFromCar',item)
        }
        this.updateCar()
        },
        incrementQuantity(item){
            item.quantity +=1
            this.updateCar()
        },
        updateCar(){
            localStorage.setItem('car',JSON.stringify(this.$store.state.car))
        },
        removeFromCar(item){
            this.$emit('removeFromCar',item)
            this.updateCar()
        }        
    },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Cart/BaseItemCart.scss';
</style>