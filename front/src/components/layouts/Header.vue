<template>
    <div class="wrapper">
        <div class="container">
            <div class="nav cls">
                <a href="/" class="nav-item"><img src="/public/logo.png" alt="logo" class="logo"></a>
                <a href="#" class="nav-item">讨论</a>
                <a href="#" class="nav-item">广告</a>
                <a href="#" class="nav-item">关于</a>
                <div class="fr" :class="{ 'show': toggle }">
                    <search></search>
                    <div class="oprator">
                        <div class="btn linear"><a href="#">登录</a> · <a href="#">注册</a></div>
                    </div>

                </div>
                <i class="open fa fa-align-justify" @click="toggleMenu"></i>
                <i class="close fa fa-close" @click="toggleMenu"></i>
            </div>

        </div>
    </div>
</template>

<script>
import Search from '../Search.vue'

export default {

  name: 'o-header',
  components: {
    Search
  },

  data () {
    return {
        toggle: false
    }
  },

  methods: {
    toggleMenu(){
        console.log("123")
        this.toggle = !this.toggle;
    }
  }
}
</script>

<style lang="stylus" scoped>

.open,
.close
    display none

.wrapper
    height 80px
    background #fff
    box-shadow 0px 11px 16px 0px rgba(224, 235, 241, 0.49)

.nav-item
    display inline-block
    height 80px
    line-height 80px
    padding 0 20px
    color #1D1D1F
    transition all .2s
    &:hover
        background rgba(224, 235, 241, 0.3)
        color #6190E8
    &:first-of-type:hover
        background transparent
        color #fff

.logo
    object-fit contain
    max-width 48px
    position relative
    top 16px

.fr
    line-height 80px
    height 80px
    display flex

.oprator
    margin 0 20px
    .btn
        display inline
        padding 10px 20px
        color #fff
        border-radius 3px
        a
            color #fff

@media screen and (max-width: 768px)
    .open
        position: absolute
        right: 20px
        top: 21px
        font-size: 19px
        width: 30px
        padding: 10px 20px
        cursor: pointer
        text-align: center
        display: inline-block

    .close
        width: 32px
        height: 32px
        position: absolute
        top: 15px
        line-height: 26px
        right: 8px
        font-size: 19px
        cursor: pointer
        text-align: center
        border: 3px solid #b75f5fb5
        border-radius: 100%
        color: #b75f5fb5

    .fr
        padding-top 50px
        &.show
            & ~ .open
                display none
            & ~ .close
                display inline-block

        display none
        position fixed
        top 0
        background #fff
        bottom 0
        left 0
        right 0
        min-height 100vh
        text-align center

</style>