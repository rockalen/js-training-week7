<template>
  <div class="mainMenu">
    <!-- :class="{'navbar-dark':$route.name == '首頁', 'navbar-light':$route.name !== '首頁'}" -->
    <nav :class="{'navbar-dark':$route.name == '首頁', 'navbar-light':$route.name !== '首頁'}" class="navbar fixed-top navbar-top navbar-expand-lg px-15 w-100 mb-3 mb-md-0" >
      <div class="container">
        <button @click="toggle" class="navbar-btn navbar-toggler p-0 border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <!-- <span class="navbar-toggler-icon"></span> -->
            <div class="toggle-menu" :class="{'line-index':$route.name == '首頁'}">
                <div class="line line1"></div>
                <div class="line line2"></div>
                <div class="line line3"></div>
            </div>
        </button>
        <router-link class="navbar-brand logo text-dark mr-0"
         to="/" :class="{'logo-index':$route.name == '首頁'}">
          <img src="@/assets/images/slowly4_logo.png" alt="logo" class="pr-md-2">
           DoSlowly
        </router-link>
        <a @click.prevent="openCarts" href="#" class="navbar-cart nav-link px-0 order-md-3"  :class="{'text-white':$route.name == '首頁', 'text-dark':$route.name !== '首頁'} " >
          <!-- <i class="material-icons" >shopping_cart</i> -->
          <span class="d-none">Cart</span>
          <svg class="navbar-cart-icon"
          :class="{'cart-icon-white':$route.name == '首頁', 'cart-icon-dark':$route.name !== '首頁'} "
          id="cart-bold" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
            <path d="M72.848 70.25c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11 4.925-11 11-11zm-35 0c6.075 0 11 4.925 11 11s-4.925 11-11 11-11-4.925-11-11c0-6.074 4.926-11 11-11zm35 7a4 4 0 10.002 8.001 4 4 0 00-.002-8.001zm-35 0a4 4 0 100 8 4 4 0 000-8zM13.892 3.75c2.287 0 4.376 1.55 5.058 3.72l.064.22 2.97 11.187h68.128a4.727 4.727 0 014.661 5.786l-.048.2-9.559 36.291c-.583 2.216-2.618 3.842-4.894 3.944l-.228.005H30.06c-2.287 0-4.377-1.55-5.06-3.72l-.063-.219-13.124-49.413-10.7.006-.004-8 12.782-.007zm72.03 23.127H24.108l8.027 30.226H77.96l7.962-30.226z"></path>
          </svg>
          <span v-if="cart.length" class="carts-quantity badge badge-pill badge-main">{{cart.length}}</span>
        </a>
        <div class="nav-bar collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-md-center flex-column flex-md-row font-size-24 font-size-md-16">
            <!-- <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li> -->
            <li class="nav-item mr-md-7 pb-3 py-md-0">
                <!-- <div class="nav-product-item d-flex justify-content-between"> -->
                    <router-link :class="{'active':$route.name == '產品列表'}" class="nav-link p-0 d-none d-md-flex font-weight-bold"
                      :to="{ name: '產品列表', query:{ category: 'all' }}"
                      active-class="active"
                      >慢慢手做
                    </router-link>
                    <a class="sub-menu-btn nav-link  font-weight-bold p-0 text-md-down-dark d-md-none d-flex justify-content-between" data-toggle="collapse" href="#collapseSubMenu" role="button" aria-expanded="false" aria-controls="collapseSubMenu" @click="subMenuToogle">
                      <span>慢慢手做</span><i class="material-icons arrow-down py-2">  keyboard_arrow_down</i>
                    </a>
                <!-- </div> -->
                <div class="sub-menu collapse bg-white mt-3" id="collapseSubMenu">
                    <ul class="list-unstyled sub-menu-item text-capitalize" id="sub-menu-item">
                        <li v-for="(item, index) in classMenu" :key="index" class="border-0 font-size-16 font-size-md-24 my-3">
                            <a :class="item.link == category ? 'text-main':''"
                                data-toggle="list"
                                href="#list-filter"
                                @click="goProducts(item.link)"
                              >{{item.name}}<sup>{{item.number}}</sup></a>
                        </li>
                    </ul>
                </div>
            </li>
            <li class="nav-item mr-7 py-3 py-md-0">
                <router-link class="nav-link p-0 text-md-down-dark font-weight-bold"
                 to="/about"
                 active-class="active"
                 >
                  手作理念
                </router-link>
            </li>
            <li class="nav-item mr-7 py-3 py-md-0">
                <router-link class="nav-link p-0 text-md-down-dark  font-weight-bold"
                 to="/Contact"
                 active-class="active"
                >
                  聯絡我們
                </router-link>
            </li>
            </ul>
        </div>
      </div>
    </nav>
    <!-- <div class="static-sub-menu container-fluid mb-4 mb-md-7 d-none d-md-block" id="staticSubMenu">
      <ul class="nav sub-menu-item text-capitalize container" id="sub-menu-item">
        <li v-for="(item, index) in classMenu" :key="index" class="nav-item border-0 font-size-16 font-size-md-24 my-3">
            <a v-bind:href="item.link" class="font-weight-bold nav-link p-0"
             :class="activeClass == index ? 'text-main':''" @click="getItem(index)">
          {{ item.name }}<sup>{{item.number}}</sup></a>
        </li> -->
        <!-- <li class="border-0 font-size-16 font-size-md-24 my-3">
            <a href="#">bowl<sup>10</sup></a>
        </li>
        <li class="border-0 font-size-16 font-size-md-24 my-3">
            <a href="#">cup<sup>8</sup></a>
        </li>
        <li class="border-0 font-size-16 font-size-md-24 my-3">
            <a href="#">plate<sup>3</sup></a>
        </li>
        <li class="border-0 font-size-16 font-size-md-24 mt-3">
            <a href="#">vase<sup>3</sup></a>
        </li> -->
      <!-- </ul> -->
    <!-- </div> -->
    <CartsModalStd ref="CartsModalStd" :msgStatus="msgStatus" :is-new="isNew" ></CartsModalStd>
  </div>
</template>
<script>
import CartsModalStd from '@/components/Frontend/CartsModalStd'
export default {
  name: 'Sidebar',
  components: {
    CartsModalStd
  },
  data () {
    return {
      activeClass: 0,
      category: 'all',
      products: [],
      msgStatus: {},
      cart: {},
      isNew: false,
      classMenu: [
        { name: '全部', number: 12, link: 'all' },
        { name: '手做陶器', number: 5, link: '手做陶器' },
        { name: '木作小物', number: 2, link: '木作小物' },
        { name: '多元文創', number: 1, link: '多元文創' },
        { name: '其他', number: 1, link: '其他' }
      ]
    }
  },
  created () {
    this.getCart()
    this.getProducts()
    this.$bus.$on('get-cart', () => {
      this.getCart()
    })
  },
  methods: {
    getProducts (page = 1, paged = 20) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=${paged}`
      // console.log(api)
      this.axios.get(api).then((response) => {
        this.products = response.data.data
        // 將遠端頁數回應資料存入產品頁數資料並給 pagination 元件做後續處理
        // this.pagination = response.data.meta.pagination
        // 設定產品類別件數
        this.filterClassNum()
        this.isLoading = false
        // console.log(this.products)
      })
    },
    toggle () {
      window.$('.navbar-btn').toggleClass('toggle')
      setTimeout(function () {
        window.$('.navbar-cart').toggleClass('text-md-down-dark')
      }, 500)
    },
    subMenuToogle () {
      window.$('.arrow-down').toggleClass('arrow-active')
    },
    getItem (index) {
      this.activeClass = index // 把當前點擊元素的index，赋值给activeClass
      // console.log(this.activeClass)
    },
    openCarts () {
      this.$refs.CartsModalStd.getCarts()
      window.$('#cartModalLongStd').modal('show')
      const vm = this
      // 監聽 modal 關閉後重刷資料及畫面，為避免購物車內資訊不一致
      window.$('#cartModalLongStd').on('hide.bs.modal',
        function (e) {
          // console.log(e)
          // vm.$router.go(vm.$router.push({ path: '/products/' }))
          // vm.$router.go()
          vm.$bus.$emit('get-product-cart')
        })
    },
    getCart () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((response) => {
        this.cart = response.data.data
        this.isNew = true
        // 取得該商品於購物車內數量
        if (this.cart.length) {
        //   this.cart.forEach((item) => {
        //     if (item.product.id === this.tempProduct.id) {
        //       this.tempQuantity = item.quantity
        //       this.cartQuantity = item.quantity
        //       console.log(this.tempQuantity)
        //       console.log(this.cartQuantity)
          this.isNew = false
        //     }
        //   })
        }
        this.isLoading = false
        // console.log(this.cart)
      })
    },
    filterClassNum () {
      this.classMenu.forEach((item) => {
        if (item.link === 'all') {
          item.number = this.products.length
        } else {
          item.number = this.products.filter((product) => product.category === item.link).length
        }
        // console.log(item.number)
      })
    },
    goProducts (category) {
      this.toggle()
      window.$('#navbarNav').toggleClass('show')
      this.$router.push({ path: `/products?category=${category}` }) // -> /user/123
    }
  }
  // computed: {
  //   filterProducts () {
  //     if (this.category === 'all') {
  //       return this.products
  //     }
  //     return this.products.filter((item) => item.category === this.category)
  //   }
  // }
}
</script>

<style lang="scss" scoped>
.navbar-cart-icon {
    // position: absolute;
    // left: 8px;
    // top: 8px;
    width: 24px;
    height: 24px;
    transition: 0.5s;
    &:hover {
      fill:#69403e;
    }
}
.cart-icon-white {
  fill: #fff;
}
.cart-icon-dark {
  fill: #000;
}

nav.bar {
  transition: 0.5s;
}
.navbar-top {
  background-color: transparent;
}
.navbar-top a {
  // color: white;
  transition: 0.5s;
}
.navbar-top a:hover {
  color: #69403e !important;
}

.logo-index {
  color: #fff !important;
  img {
    content:url("../../assets/images/slowly_logo2_white.png")
  }
}
.carts-quantity {
  // transform: translateX(-9px) translateY(4px);
  transform: translateX(-8px) translateY(-8px);
}
.line-index {
  div {
    background-color:#fff;
  }
}

@media (min-width: 576px) {
  .logo-index{
    color: #fff !important;
    img {
      content:url("../../assets/images/slowly_logo2_white.png")
    }
  }
}

@media (min-width: 768px) {
  .logo-index{
    color: #000 !important;
    img {
      content:url("../../assets/images/slowly4_logo.png")
    }
  }
}
</style>
