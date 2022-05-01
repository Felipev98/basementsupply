<template>
<section class="item">
 <div class="container">
     <div v-if="loading" class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
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
            productss: null,
            loading:false
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
            this.loading = true;
            try {
                    const products = await EventService.getProducts();
                    this.productss = products.data;
            } catch (error) {
                
            }finally{
                this.loading = false;
}         
}
        
    }

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Item.scss';

</style>