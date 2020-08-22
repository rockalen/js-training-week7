<template>
  <div class="home">
     <SidebarOrder v-if="layer" />
     <Sidebar v-else />
     <!-- <classMenu :isDisplay="subMenuDisplay"></classMenu> -->
    <!-- <loading :active.sync="isLoading"></loading> -->
    <router-view></router-view>
    <FooterOrder v-if="layer" />
    <Footer v-else />
  </div>
</template>

<script>
// @ is an alias to /src
import Sidebar from '@/components/Frontend/Sidebar.vue'
import SidebarOrder from '@/components/Frontend/SidebarOrder.vue'
// import ClassMenu from '@/components/Frontend/ClassMenu.vue'
import Footer from '@/components/Frontend/Footer.vue'
import FooterOrder from '@/components/Frontend/FooterOrder.vue'
export default {
  name: 'Home',
  components: {
    Sidebar,
    SidebarOrder,
    // ClassMenu,
    Footer,
    FooterOrder
  },
  data () {
    return {
      layer: 0
      // subMenuDisplay: true
      // isLoading: false
    }
  },
  created () {
    this.$bus.$on('get-layer:layer', (layer) => {
      this.setLayer(layer)
    })
  },
  methods: {
    setLayer (layer) {
      this.layer = layer
      // console.log(this.layer)
    }
  },
  mounted () {
    // 視窗滑動時執行的事件
    window.$(window).scroll(() => {
      if (window.$(window).scrollTop() > 0) {
        // window.$('.navbar').removeClass('navbar-top')
        if (this.$route.name === '首頁') {
          window.$('.navbar').removeClass('navbar-dark')
          window.$('.navbar-cart').removeClass('text-white')
          window.$('.toggle-menu').removeClass('line-index')
          window.$('.logo').removeClass('logo-index')
          window.$('.navbar').addClass('navbar-light')
        }
        // else {
        //   window.$('.navbar').removeClass('navbar-light')
        //   window.$('.navbar').addClass('navbar-dark')
        // }
        window.$('.navbar').addClass('bg-white')
      } else {
        // window.$('.navbar').addClass('navbar-top')
        if (this.$route.name === '首頁') {
          window.$('.navbar').addClass('navbar-dark')
          window.$('.navbar').removeClass('navbar-light')
          window.$('.navbar-cart').addClass('text-white')
          window.$('.logo').addClass('logo-index')
          window.$('.toggle-menu').addClass('line-index')
        } else {
          window.$('.navbar').addClass('navbar-light')
          window.$('.navbar').removeClass('navbar-dark')
        }
        window.$('.navbar').removeClass('bg-white')
      }
    })
  }
  // props: ['isDisplay'] // 使用`props`聲明它所獲得的資料
}
</script>
