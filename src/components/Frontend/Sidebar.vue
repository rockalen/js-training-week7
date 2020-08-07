<template>
  <div class="mainMenu">
    <nav class="navbar navbar-expand-lg bg-transparent navbar-light px-15 w-100 mb-3 mb-md-0" >
      <div class="container">
        <button @click="toggle" class="navbar-btn navbar-toggler p-0 border-0" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <!-- <span class="navbar-toggler-icon"></span> -->
            <div class="toggle-menu">
                <div class="line line1 bg-dark"></div>
                <div class="line line2 bg-dark"></div>
                <div class="line line3 bg-dark"></div>
            </div>
        </button>
        <router-link class="navbar-brand logo text-dark mr-0"
         to="/">
         <img src="@/assets/images/slowly4_logo.png" alt="" width="52" class="logo pr-md-2">
           DoSlowly
        </router-link>
        <router-link class="navbar-cart nav-link text-dark px-0 order-md-3 material-icons"
         to="/carts"
         active-class="active"
         >
          shopping_cart
        </router-link>
        <div class="nav-bar collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul class="navbar-nav align-items-md-center flex-column flex-md-row font-size-24 font-size-md-16">
            <!-- <li class="nav-item active">
                <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li> -->
            <li class="nav-item mr-md-7 pb-3 py-md-0">
                <!-- <div class="nav-product-item d-flex justify-content-between"> -->
                    <router-link class="nav-link p-0 d-none d-md-flex font-weight-bold"
                      to="/products"
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
                            <a :href="item.link">{{item.name}}<sup>{{item.number}}</sup></a>
                        </li>
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
             <!-- <li class="nav-item mr-7 py-3 py-md-0">
                <router-link class="nav-link" to="/products"
                  active-class="active">
                  產品列表
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: '訂單列表' }"
                  active-class="active">
                  訂單列表
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: '優惠卷列表' }"
                  active-class="active">
                  優惠卷列表
                </router-link>
            </li>
            <li class="nav-item">
                <router-link class="nav-link" :to="{ name: '圖庫列表' }"
                  active-class="active">
                  圖庫列表
                </router-link>
            </li>
              <li class="nav-item">
              <router-link class="nav-link" to="/admin/customerOrders"
                active-class="active">
                模擬訂單
              </router-link>
            </li> -->
            </ul>
        </div>
      </div>
    </nav>
    <div class="static-sub-menu container-fluid mb-4 mb-md-7 d-none d-md-block" id="staticSubMenu">
      <ul class="nav sub-menu-item text-capitalize container" id="sub-menu-item">
        <li v-for="(item, index) in classMenu" :key="index" class="nav-item border-0 font-size-16 font-size-md-24 my-3">
            <a v-bind:href="item.link" class="font-weight-bold nav-link p-0"
             :class="activeClass == index ? 'text-main':''" @click="getItem(index)">
          {{ item.name }}<sup>{{item.number}}</sup></a>
        </li>
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
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Sidebar',
  data () {
    return {
      activeClass: 0,
      classMenu: [
        { name: '全部', number: 24, link: '#/products' },
        { name: '手做陶器', number: 10, link: '#/products' },
        { name: '木做小物', number: 8, link: '#/' },
        { name: '多元素文創', number: 8, link: '#/' },
        { name: '其他', number: 5, link: '#/' }
      ]
    }
  },
  methods: {
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
      this.activeClass = index // 把当前点击元素的index，赋值给activeClass
      // console.log(this.activeClass)
    }
  }
}
</script>
