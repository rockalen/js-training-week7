<template>
  <div class="home">
     <Sidebar />
     <!-- <classMenu :isDisplay="subMenuDisplay"></classMenu> -->
    <!-- <loading :active.sync="isLoading"></loading> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/Frontend/Sidebar.vue'
// import ClassMenu from '@/components/Frontend/ClassMenu.vue'
import Footer from '@/components/Frontend/Footer.vue'
export default {
  name: 'Home',
  components: {
    Sidebar,
    // ClassMenu,
    Footer
  },
  data () {
    return {
      // subMenuDisplay: true
      // isLoading: false
    }
  }
  // props: ['isDisplay'] // 使用`props`聲明它所獲得的資料
}
</script>
