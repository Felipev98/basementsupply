<template>
<div id="app" class="modal-vue">
  <div class="overlay"></div>
  <div class="base-modal">
  <div class="modal">
        <div @click="closeModal" class="close-button">
          <span class="close">&#8594 CLOSE</span>
        </div>
      <div class="modal-title">
    <span class="title-1">{{title1}}</span> 
    <span class="title-2">{{title2}}</span>
      </div>
      <div class="" v-if="carTotalLength">
    <BaseItemCart v-for="item in car.items" :key="item.product.id" :initialItem="item" v-on:removeFromCar="removeFromCar"/>
      <div class="modal-footer">
          <div class="total">
              <span class="total-price">TOTAL: ${{carTotalPrice.toFixed(2)}}</span>
            <span class="checkout">Checkout</span>
          </div>
      </div>
      </div>
  <div v-else class="cart-message">
    <h2>Aún no has agregado un producto</h2>
  </div>
  </div>
  </div>
</div>
</template>

<script>
import BaseItemCart from '../Cart/BaseItemCart'
export default {
  components:{
    BaseItemCart
  },
    data() {
        return {
            title1: 'YOUR',
            title2: 'CART',
            car:{
            items:[]
            }
        }
    },
        mounted() {
        this.car = this.$store.state.car
        
    },
    methods:{
          removeFromCar(item){
        this.car.items = this.car.items.filter(i => i.product.id !== item.product.id)
          },
      closeModal(){
        this.$emit('close')
      }
    },
        computed:{
        carTotalLength() {
            return this.car.items.reduce((acc, curVal) => {
                return acc += curVal.quantity
            }, 0)
        },
        carTotalPrice(){
        return this.car.items.reduce((acc, curVal) => {
        return acc += curVal.product.price * curVal.quantity
        }, 0)
}
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Cart/_BaseCart.scss';
</style>