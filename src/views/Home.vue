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
  }
  // props: ['isDisplay'] // 使用`props`聲明它所獲得的資料
}
</script>
