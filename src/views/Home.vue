<template>
  <div class="home">
     <Sidebar />
    <!-- <loading :active.sync="isLoading"></loading> -->
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Sidebar from '@/components/Frontend/Sidebar.vue'
import Footer from '@/components/Frontend/Footer.vue'
export default {
  name: 'Home',
  components: {
    Sidebar,
    Footer
  },
  data () {
    return {
      // isLoading: false
    }
  }
}
</script>
