<template>
  <div class="hello">
    <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="banner in banners">
          <img :src="banner">
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>

export default {
    name: 'helloworld',
    data() {
        return {
          banners: [ '/1.jpg', '/2.jpg', '/3.jpg' ],
          swiperOption: {
            pagination: {
              el: '.swiper-pagination'
            },
            // some swiper options...
          }
        }
    },
    mounted() {
      // setTimeout(() => {
      //   this.banners.push('/4.jpg')
      //   console.log('banners update')
      // }, 3000)
      // console.log(
      //   'This is current swiper instance object', this.mySwiper,
      //   'It will slideTo banners 3')
      // this.mySwiper.slideTo(3, 1000, false)
    }
}

</script>

<style lang="stylus">

</style>
