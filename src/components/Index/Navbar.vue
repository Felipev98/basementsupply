<template>
  <div>
      <nav class="navbar">
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
            <span>(0)</span>
          </div>      
      </nav>
  </div>
    <div class="modal" v-if="modal">
           <BaseCart/>
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
    }
},
components:{
  BaseCart
},
methods:{
  openModal(){
    this.modal=true
  },
  
}

}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Navbar.scss';
.modal{
  height: 30rem;
  position: absolute;
  width: 100%;
}

</style>