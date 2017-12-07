<template>
  <div id="app">
    <o-header></o-header>
    <hello></hello>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>

<script>
  import OHeader from './components/layouts/Header.vue'
  import Hello from './views/helloworld.vue'
  export default {
    name: 'App',
    components: {
      OHeader,
      Hello
    }
  }
</script>

<style lang="stylus">
body
  background:  #f8faff

.fr
  float: right

.cls
  clear both

.linear
  background linear-gradient(to right, #49A8FC 0%, #52C1ED 100%);
  &:hover
    box-shadow 0px 4px 20px 0 #cae1ea

.container
  max-width 100vw !important
</style>
