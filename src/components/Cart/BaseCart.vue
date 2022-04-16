<template>
<div id="app" class="modal-vue">
  <div class="overlay"></div>
  <div class="base-modal">
  <div class="modal">
          <button class="close">x</button>
      <div class="modal-title">
    <span class="title-1">{{title1}}</span> 
    <span class="title-2">{{title2}}</span>
      </div>
      <div class="modal-footer">
          <div class="total">
              <span class="total-price">TOTAL: $37,50</span>
            <span class="checkout">Checkout</span>
          </div>
      </div>
  </div>
  </div>

</div>
</template>

<script>
export default {
    data() {
        return {
            title1: 'YOUR',
            title2: 'CART',
        }
    },

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Cart/_BaseCart.scss';
</style>