<template>
<div class="carousel">
  <loading :active.sync="isLoading"></loading>
    <swiper :options="swiperOption" ref="mySwiper">
    <swiper-slide v-for="(item, index) in products" :key=index >
       <div @click="emitProduct(item.id)" class="card border-0">
          <img :src="item.imageUrl[0]" class="card-img-top slide-img-top" alt="...">
          <div class="card-img-overlay p-3">
            <p v-if="item.price < item.origin_price" class="card-text text-right text-white font-size-14 text-capitalize">on sale</p>
          </div>
          <div class="card-body text-left p-0 pt-1">
            <h4 class="card-title mb-1 text-capitalize">{{item.title}}</h4>
            <p class="card-text font-size-16">{{item.price | money}}
              <del v-if="item.price < item.origin_price" class="text-black-50 ml-2">{{item.origin_price | money }}</del>
            </p>
            <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
          </div>
        </div>
    </swiper-slide>
    <!-- <swiper-slide>Slide 2</swiper-slide>
    <swiper-slide>Slide 10</swiper-slide> -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</div>
</template>

<script>
// import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import '../../assets/style/swiper.min.css'
// import 'swiper/css/swiper.css'
export default {
  name: 'Carousel',
  title: 'Centered slides',
  // components: {
  //   Swiper,
  //   SwiperSlide
  // },
  data () {
    return {
      isLoading: false,
      products: [],
      swiperOption: {
        // slidesPerView: 4,
        // spaceBetween: 30,
        // slidesPerView: 1.46,
        // spaceBetween: 16,
        // slidesOffsetBefore: 15,
        centeredSlides: false,
        // pagination: '.swiper-pagination',
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type: 'bullets'
        },
        slidesPerView: 4.2,
        spaceBetween: 30,
        slidesOffsetBefore: 186,
        // 設定RWD顯示參數
        breakpoints: {
          320: {
            slidesOffsetBefore: 15,
            slidesPerView: 1.4,
            spaceBetween: 16
          },
          480: {
            slidesOffsetBefore: 18,
            slidesPerView: 1.5,
            spaceBetween: 16
          },
          640: {
            slidesOffsetBefore: 25,
            slidesPerView: 2,
            spaceBetween: 20
          },
          768: {
            slidesOffsetBefore: 50,
            slidesPerView: 2,
            spaceBetween: 25
          },
          1024: {
            slidesOffsetBefore: 76,
            slidesPerView: 2.5,
            spaceBetween: 30
          },
          1280: {
            slidesOffsetBefore: 89,
            slidesPerView: 3,
            spaceBetween: 30
          },
          1440: {
            slidesOffsetBefore: 89,
            slidesPerView: 3.5,
            spaceBetween: 30
          }
        }
      }
    }
  },
  // computed: {
  //   swiper () {
  //     return this.$refs.mySwiper.swiper
  //   }
  // },
  // mounted () {
  //   setTimeout(() => {
  //     this.slides = [2]
  //   }, 2000)
  // },
  created () {
    this.getProducts()
    // console.log(this.swiperOption.breakpoints)
  },
  methods: {
    getProducts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products`
      this.$http.get(api).then((response) => {
        this.products = response.data.data
        this.isLoading = false
        // console.log(this.products)
      })
    },
    emitProduct (item) {
      if (this.$route.name !== '產品詳細頁') {
        this.$router.push({ path: `/product/${item}` })
      }
      this.$emit('emit-product', item)
      // console.log(item)
    }
  }
}
</script>

<style lang="scss" scoped>
  // @import '../../assets/scss/components/Frontend/Carousel';
  .swiper-container {
    padding-bottom: 48px;
  }
  .swiper-slide {
    // width: 60%;
    img {
      object-fit: cover;
      height: 240px;
    }
  }
  .swiper-slide:nth-child(2n) {
      width: 40%;
  }
  .swiper-slide:nth-child(3n) {
      width: 20%;
  }
  .card {
    cursor: pointer;
  }
  @media (min-width: 576px){
    .swiper-container {
      padding-bottom: 52px;
      // height: 458px;
    }
    .swiper-slide {
    // width: 60%;
    img {
      object-fit: cover;
      height: 320px;
    }
  }
  }

  @media (min-width: 768px){
    .swiper-container {
      padding-bottom: 64px;
      // height: 458px;
    }
    .swiper-slide {
    // width: 60%;
    img {
      object-fit: cover;
      height: 350px;
    }
  }
  }
</style>
