<template>
  <div class="index">
    <section class="container-fluid index-bg index-md-bg" >
      <div class="row justify-content-end">
        <div class="col-md-6 index-bg-cover">
        </div>
      </div>
      <div class="index-banner container d-flex flex-column justify-content-between justify-content-md-center px-0 px-md-gutter">
        <div class="row d-block d-md-none">
        </div>
        <div class="row flex-column justify-content-center text-white banner-H">
          <div class="col-md-6 text-center text-md-left">
              <h1 class="mb-4 display-5">
                手作療癒魔力<br>打造生活幸福感.
              </h1>
              <p class="banner-text font-size-md-24 font-size-16 font-weight-normal mb-md-7">生活裡總有一些東西可以讓你著迷，找到它，擁抱它，神奇的事自然會發生.
              </p>
          </div>
        </div>
        <div class="row mb-4">
          <div class="col-12 col-md-3 col-lg-2">
            <router-link class="btn btn-main btn-lg w-100" to="/products?category=all" role="button">開始擁有</router-link>
          </div>
        </div>
      </div>
    </section>
    <!-- 首頁商品介紹 & 載入animate-->
    <section class="indexp-roducts">
      <ul class="list-unstyled container">
        <li class="card row d-flex flex-md-row justify-content-between align-items-center border-0"  data-aos="fade-up" >
          <div class="col-12 col-md-6 mb-3 pl-md-0" >
            <img src="https://images.unsplash.com/photo-1561435351-c668934d89de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" class="card-img-top" alt="...">
          </div>
          <div class="col-md-1"></div>
          <div class="card-body col-12 col-md-4 p-0 px-3">
            <h4 class="card-title">特別的材料</h4>
            <p class="card-text">我們的材料都是特別挑選過的，不管是原木、陶土符合每個作品適合的創作元素.</p>
            <a href="#" class="nav-link text-main px-0 font-weight-bold">繼續了解...</a>
          </div>
          <div class="col-md-1"></div>
        </li>
        <li class="card row d-flex flex-md-row-reverse justify-content-between align-items-center border-0 my-4 my-md-5"  data-aos="fade-up" data-aos-offset="150">
          <div class="col-12 col-md-6 mb-3 pr-md-0" data-aos="animate__flipInY">
            <img src="@/../public/images/index-3.jpg" class="card-img-top" alt="...">
          </div>
          <div class="col-md-1"></div>
          <div class="card-body col-12 col-md-4 p-0 px-3 text-md-right">
            <h4 class="card-title">獨一無二</h4>
            <p class="card-text">當你很專心投入在「手作」上，且不斷重複動作時，其實是透過手作過程和自我對話，同時也在進行自我療癒，包括捏陶、做木工都是，更重要是每一個都是唯一的。 </p>
            <a href="#" class="nav-link text-main px-0 font-weight-bold">繼續了解...</a>
          </div>
          <div class="col-md-1"></div>
        </li>
        <li class="card row d-flex flex-md-row justify-content-between align-items-center border-0 mb-7 mb-md-8"  data-aos="fade-up" data-aos-offset="100">
          <div class="col-12 col-md-6 mb-3 pl-md-0" data-aos="animate__flipInY">
            <img src="@/../public/images/index-5.jpg" class="card-img-top" alt="...">
          </div>
          <div class="col-md-1"></div>
          <div class="card-body col-12 col-md-4 p-0 px-3">
            <h4 class="card-title">感受手作溫度</h4>
            <p class="card-text">拋開制式的生活，從生活中的靈感、體驗創造出獨一無二的手作品，每一個步驟都是用愛與手感溫度累積而成.</p>
            <a href="#" class="nav-link text-main px-0 font-weight-bold">繼續了解...</a>
          </div>
          <div class="col-md-1"></div>
        </li>
      </ul>
    </section>
      <h3 class="container mb-5 font-size-20 font-size-md-24">您可以馬上擁有以下的<ins>手做幸福</ins></h3>
      <Carousel ref="mySwiper"></Carousel>
  </div>
</template>

<script>
import Carousel from '@/components/Frontend/Carousel'
export default {
  name: 'index',
  components: {
    Carousel
  },
  data () {
    return {}
  },
  created () {
    this.$bus.$emit('get-layer:layer', 0)
  },
  methods: {}

}
</script>

<style lang="scss" scoped>
.navbar-cart {
  color: #fff !important;
}
.index-banner {
  height: 90%;
}
.banner-text {
  color: rgba(255, 255, 255, 0.7) !important;
}
.card-img, .card-img-top {
  height: 220px;
  object-fit: cover;
}
@media (min-width: 576px) {
 .banner-text {
    color: rgba(255, 255, 255, 0.7) !important;
  }
  .card-img, .card-img-top {
    height: 370px;
    object-fit: cover;
  }
}
@media (min-width: 768px) {
  .banner-H {
    color: #333 !important;
  }
 .banner-text {
    color:  #6c757d !important;
  }
  .card-img, .card-img-top {
    height: 370px;
    object-fit: cover;
  }
}
</style>
