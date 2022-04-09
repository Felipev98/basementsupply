<template>
  <div class="container">
      <nav class="navbar">
          <ul class="navbar-data">
          <li><router-link to="/">{{link}}</router-link></li>
          <li><img :src="require(`@/assets/img/${icono1}`)"></li>
        <li><img :src="require(`@/assets/img/${icono2}`)"></li>
          <li><img :src="require(`@/assets/img/${icono3}`)"></li>
          <li><img :src="require(`@/assets/img/${icono4}`)"></li>
            <li>
                <span>Cart</span>
                <span>0</span>
            </li>
          </ul>
      </nav>
  </div>
</template>

<script>
export default {
data() {
    return {
        link: 'basement',
        icono1:'1-1.png',
        icono2:'1-2.png',
        icono3:'1-3.png',
        icono4:'1-4.png',
    }
},
}
</script>

<style lang="scss" scoped>
@import '../../assets/styles/components/Index/Navbar.scss';

</style>