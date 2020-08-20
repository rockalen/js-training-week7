<template>
  <div class="carts container mt-2 mb-7">
    <loading :active.sync="isLoading"></loading>
    <!-- <div class="text-center" v-if="!carts.length">
      <h2 class="mb-3 h5">購物車內無商品，請返回商城選購</h2>
        <a @click.prevent="goBack"
          href="#"
          class="nav-link text-main py-3 px-0">
            <span class="material-icons align-middle">
            keyboard_arrow_left
            </span>
            返回商店
        </a>
    </div> -->
    <div>
      <!-- pay list button -->
      <div class="row justify-content-center">
          <div class="col-12 d-md-none">
              <a @click="subMenuToogle" class="pay-list-btn btn btn-sec-2 btn-lg d-flex d-md-none justify-content-between align-items-center" data-toggle="collapse" href="#collapse-pay-list" role="button" aria-expanded="true" aria-controls="collapse-pay-list">
                      <h6 class="mb-0 font-weight-bold">訂單明細</h6>
                      <p class="mb-0 font-weight-bold">
                          {{totalMoney + shipping | money}}
                          <span class="pay-list-arrow_down material-icons align-middle text-main">
                              keyboard_arrow_down
                          </span>
                      </p>
              </a>
          </div>
      </div>
      <!-- 產品付款主要內容 -->
      <div class="row flex-column-reverse flex-md-row justify-content-center">
          <!-- pay 麵包屑 -->
          <div class="col-12 col-md-10  order-1 order-md-1 my-4 mt-md-0">
              <!-- <nav aria-label="breadcrumb" class="path-icon">
                  <ol class="breadcrumb bg-transparent p-0">
                  <li class="breadcrumb-item"><a href="#" class="text-main">Cart</a></li>
                  <li class="breadcrumb-item"><a href="#" class="font-weight-bold">Information</a></li>
                  <li class="breadcrumb-item active" aria-current="page">PaymentHome</li>
                  </ol>
              </nav> -->
              <ul class="list-unstyled d-flex justify-content-around mb-1">
                <!-- <li class="d-flex flex-column align-items-center">
                  <span
                    class="rounded-circle bg-primary
                  d-flex justify-content-center
                  align-items-center text-white"
                    style="width:20px; height:20px"
                    >1</span
                  >購物車
                </li> -->
                <li class="d-flex flex-column align-items-center">
                  <!-- <span
                    class="rounded-circle bg-main
                  d-flex justify-content-center
                  align-items-center text-white"
                    style="width:20px; height:20px"
                    >1</span
                  >填寫訂單資料 -->
                   <h6><span class="badge badge-main">1</span> 填寫訂單資料</h6>
                </li>
                <li class="d-flex flex-column align-items-center">
                  <!-- <span
                    class="rounded-circle bg-main
                  d-flex justify-content-center
                  align-items-center text-white"
                    style="width:20px; height:20px"
                    >2</span
                  >訂單確認 -->
                   <h6><span class="badge badge-main">2</span> 完成訂單</h6>
                </li>
              </ul>
              <div class="progress">
                <div
                  class="progress-bar progress-bar-striped progress-bar-animated"
                  role="progressbar"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 100%"
                ></div>
              </div>
          </div>
          <!-- pay form表單 -->
          <!-- <div class="col-12 col-md-6 order-md-2"> -->
          <!-- <div class="row flex-column justify-content-center text-white text-md-dark"> -->
            <div class="col-12 col-md-6 order-md-2 text-center text-md-left">
                <h1 class="mb-4 font-size-md-40 font-size-32">
                    太好了，您已完成訂購!
                </h1>
                <p class="font-size-md-24 font-size-16 font-weight-normal text-secondary mb-md-7">您的訂單已收到。我們會透過電子郵件將詳細的訂單確認信息發送給您。
                </p>
            <!-- </div>
            <div class="col-12 col-md-6 order-md-2"> -->
              <ul class="list-unstyled mb-md-7">
                <li class="d-flex justify-content-between border-bottom mb-3">
                  <h5>收件人</h5>
                  <p class="mb-0">{{ order.user.name }}</p>
                </li>
                <li class="d-flex justify-content-between border-bottom mb-3">
                  <h5>信箱</h5>
                  <p class="mb-0">{{ order.user.email }}</p>
                </li>
                <li class="d-flex justify-content-between border-bottom mb-3">
                  <h5>收件地址</h5>
                  <p class="mb-0">{{ order.user.address }}</p>
                </li>
                <!-- <li class="cart-complete-item">
                  <h3>付款狀態</h3>
                  <p style="color: green">已完成付款</p>
                </li> -->
            </ul>
            <router-link class="btn btn-main btn-lg w-50" to="/products" role="button">
              繼續選購
            </router-link>
            </div>
        <!-- </div> -->
          <!-- </div> -->
          <!-- pay list -->
          <div class="col-12 col-md-4 order-2 order-md-3">
              <ul class="list-unstyled pay-list p-3 p-md-4 collapse d-md-block" id="collapse-pay-list">
                  <li v-for="(item, index) in order.products" :key="index" class="mb-3">
                      <img :src="item.product.imageUrl[0]" alt="">
                      <div>
                          <p class="font-weight-bold pl-3">
                            {{item.product.title}} x {{item.quantity}}
                          </p>
                          <p>{{item.product.price | money}}</p>
                      </div>
                  </li>
                  <!-- <li class="mb-3">
                      <img src="./assets/images/img-4.jpg" alt="">
                      <div>
                          <p class="font-weight-bold pl-3">Baifan Bowl ×2</p>
                          <p>NT$3,600</p>
                      </div>
                  </li> -->
                  <li class="border-top pt-3 mb-3">
                      <div>
                          <p>小計</p>
                          <p>{{totalMoney | money}}</p>
                      </div>
                  </li>
                  <li class="mb-3">
                      <div>
                          <p>運費</p>
                          <p>{{shipping | money}}</p>
                      </div>
                  </li>
                  <li class="mb-3 pt-3 border-top">
                      <div class="font-size-24 font-weight-bold">
                          <p>總計</p>
                          <p>{{totalMoney + shipping | money}}</p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cookie } from '../components/JS/cookie'
export default {
  name: 'Checkout',
  data () {
    return {
      isLoading: false,
      order: {
        products: [],
        user: {}
      },
      carts: {},
      // subTotal: 0,
      shipping: 80
    }
  },
  mixins: [cookie],
  created () {
    this.$bus.$emit('get-layer:layer', 1)
    const orderId = this.getCookie('orderId')
    this.getOrders(orderId)
  },
  methods: {
    getOrders (id) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders/${id}`

      this.$http.get(api).then((response) => {
        this.order = response.data.data
        console.log(this.order)
        // this.isNew = true
        this.isLoading = false
        // this.carts.forEach((item) => {
        //   this.subTotal += (item.product.price * item.quantity)
        // })
        // console.log(this.cart)
      })
    },
    subMenuToogle () {
      window.$('.pay-list-arrow_down').toggleClass('arrow-active')
    },
    successOrder () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/orders`
      this.form.address = this.country + this.city + this.form.address
      console.log(this.form.address)
      const order = { ...this.form }
      // if (this.coupon.enabled) {
      //   order.coupon = this.coupon.code
      // }
      this.$http.post(api, order)
        .then((response) => {
          this.$bus.$emit('get-cart')
          // this.$router.push('/checkout')
          this.isLoading = false
          console.log(order)
        })
        .catch(() => {
          this.isLoading = false
          // swal({
          //   title: '訂單失敗',
          //   text: '系統忙碌中，請稍後再嘗試',
          //   icon: 'error',
          //   buttons: false,
          //   timer: 1000,
          // });
        })
    },
    goBack () {
      this.$router.go(-1)
    }
  },
  computed: {
    totalMoney () {
      const products = this.order.products
      let total = 0
      if (this.order.products.length) {
        total = products.reduce((prev, item) => {
          return prev + item.product.price * item.quantity
        }, 0)
      }
      return total
    }
  }
}
</script>

<style lang="scss" scoped>
$pay-list-bg:#F2F2F2;
.pay-list{
    background-color: $pay-list-bg;
    p{
        margin: 0;
    }
    li{
        div{
            width: 100%;
            // padding-left: 16px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        display: flex;
    }
    img{
        height: 48px;
        width: 48px;
        object-fit: cover;
    }
}

.pay-list-btn{
    background: $pay-list-bg;
}
</style>
