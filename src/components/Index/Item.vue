<template>
<section class="item">
 <div class="container">
      <div class="row" >
          <Card v-for="products in productss" :key="products.id" :products="products" class="card"/>
      </div>
  </div>
</section>
</template>

<script>
import Card from './Card';
import EventService from '../../helpers/EventService'
export default {
    data() {
        return {
            productss: null
        }
    },
    components:{
        Card
    },
    created() {
        this.getProducts();
        
    },
    methods: {
        async getProducts(){
            const products = await EventService.getProducts();
            this.productss = products.data;
            
}
        
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Item.scss';

</style>