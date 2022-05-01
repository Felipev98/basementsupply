<template>
  <div id="nav">
  </div>
  <transition name="fade">
      <router-view>
  </router-view>
  </transition>

</template>

<style lang="scss">
@import './assets/styles/settings/_colors.settings.scss';
@import './assets/styles/generics/_reset.generics.scss';
body{
  background-color: $backgroundColor;
}
h2{
  color: $primaryColor;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>>

