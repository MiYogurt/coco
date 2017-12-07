<template>
    <div class="search">
        <input type="text" placeholder="找点什么？">
        <i class="fa fa-search"></i>
    </div>
</template>

<script>
export default {

  name: 'search',

  data () {
    return {

    }
  }
}
</script>

<style lang="stylus" scoped>
gary = #A3AEC3

littleGary = #E8ECF3

blue = #49a8fc

.search
    height 80px
    position relative
    .fa
        position absolute
        font-size 15px
        top 33px
        left 10px
        color gary
    input
        height 40px
        line-height 40px
        font-size 13px
        outline none
        padding-left 30px
        color gary
        background littleGary
        border 1px solid #fff
        transition width cubic-bezier(0.34,-0.18, 0.07, 1.25) 1s
        border-radius 3px
        width 180px
        &:focus
            width 320px
            border 1px solid blue
            background #fff
        &:focus ~ i
            color blue

@media screen and (max-width: 768px)
    .fr
        display block
        position fixed
        top 0
        background #fff
        bottom 0
        left 0
        right 0
        min-height 100vh
        text-align center
        input
            width 95%
            padding-left 40px

            &:focus
                width 95%
        .fa
            left 30px
</style>