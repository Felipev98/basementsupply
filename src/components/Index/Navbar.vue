<template>
  <div>
      <nav class="navbar" @close="closeModal">
      <div class="logo">
      <li><router-link to="/">{{link}}</router-link></li>
      </div>
          <ul class="navbar-data">         
          <li><img :src="require(`@/assets/img/${icono1}`)"></li>
        <li><img :src="require(`@/assets/img/${icono2}`)"></li>
          <li><img :src="require(`@/assets/img/${icono3}`)"></li>
          <li><img :src="require(`@/assets/img/${icono4}`)"></li>
          <li><img :src="require(`@/assets/img/${icono5}`)"></li>
          </ul>
          <div @click="openModal" class="car">
           <span>Cart</span>
            <span>({{carTotalLength}})</span>
          </div>      
      </nav>
  </div>
    <div class="modal"  v-if="modal">
           <BaseCart @close="closeModal"/>
         </div>
</template>
<script>
import BaseCart from '@/components/Cart/BaseCart.vue'
export default {
data() {
    return {
      modal:false,
        link: 'basement',
        icono1:'1-1.png',
        icono2:'1-2.png',
        icono3:'1-3.png',
        icono4:'1-4.png',
        icono5:'1-5.png',
        car:{
        items:[]
      }
    }
},
components:{
  BaseCart
},
beforeCreate() {
    this.$store.commit('initializeStore')
  },
  computed:{
    carTotalLength(){
      let totalLength = 0
      for (let i = 0; i < this.car.items.length; i++) {
        totalLength += this.car.items[i].quantity        
      }
      return totalLength
    }
  },
    mounted() {
    this.car = this.$store.state.car
  },
methods:{
  openModal(){
    this.modal=true
  },
  closeModal(){
    this.modal=false
  }
}

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Navbar.scss';

</style>