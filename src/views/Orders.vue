<template>
  <div class="carts container mt-2 mb-7">
    <loading :active.sync="isLoading"></loading>
    <div class="text-center" v-if="!carts.length">
      <h2 class="mb-3 h5">購物車內無商品，請返回商城選購</h2>
        <a @click.prevent="goBack"
          href="#"
          class="nav-link text-main py-3 px-0">
            <span class="material-icons align-middle">
            keyboard_arrow_left
            </span>
            返回商店
        </a>
    </div>
    <div v-else>
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
                    >1</span> -->
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
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style="width: 50%"
                ></div>
              </div>
          </div>
          <!-- pay form表單 -->
          <!-- <div class="col-12 col-md-6 order-md-2"> -->
          <validation-observer v-slot="{ invalid }" tag="div" class="col-12 col-md-6 order-md-2">
              <form @submit.prevent="successOrder">
                  <div class="mb-5">
                    <h5 class="Shipping-addr font-weight-bold">聯絡資訊</h5>
                     <div class="form-row">
                      <div class="col-12 col-md mb-2" >
                        <validation-provider rules="required" v-slot="{ errors, classes }">
                        <input type="text"
                          class="form-control form-control-lg"
                          :class="classes"
                          id="username"
                          name="收件人姓名"
                          aria-describedby="username"
                          placeholder="收件人姓名"
                          v-model="form.name"
                          />
                        <span class="text-danger"> {{ errors[0] }} </span>
                        </validation-provider>
                      </div>
                      <div class="col-12 col-md mb-2">
                        <validation-provider rules="required" v-slot="{ errors, classes }">
                        <input type="text"
                          class="form-control form-control-lg"
                          :class="classes"
                          id="tel"
                          name="電話"
                          aria-describedby="tel"
                          placeholder="請輸入電話"
                          v-model="form.tel"
                          />
                        <span class="text-danger"> {{ errors[0] }} </span>
                        </validation-provider>
                      </div>
                    </div>
                    <div class="form-group mb-2 ">
                      <validation-provider rules="required" v-slot="{ errors, classes }">
                      <!-- <label for="InputEmail1">Contact information</label> -->
                      <input type="email"
                        class="form-control form-control-lg"
                        :class="classes"
                        id="email"
                        name="電子郵件"
                        aria-describedby="emailHelp"
                        placeholder="Email"
                        v-model="form.email"
                       />
                       <span class="text-danger"> {{ errors[0] }} </span>
                      </validation-provider>
                    </div>
                  </div>
                  <!-- <div class="form-group">
                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
                  </div> -->
                  <!-- <div class="checkBoxArea cursor-pointer">
                      <div class="checkBoxArea__content cursor-pointer">
                        <input class="input d-none" type="checkbox" id="customAccess_edit_1" name="customAccess" value="Coupon" checked>
                        <label class="selectCheckBox mb-0 cursor-pointer" for="customAccess_edit_1"></label>
                        <label class="label cursor-pointer" for="customAccess_edit_1">lecture</label>
                      </div>
                  </div> -->
                  <!-- <div class=" mb-5">
                      <label class="chk-container" for="Check1"> <small id="emailHelp" class="form-text text-muted m-0">Keep me up to date on news and special offers</small>
                          <input type="checkbox" checked="checked" id="Check1">
                          <span class="check-mark"></span>
                      </label> -->
                    <!-- <input type="checkbox" class="form-check-input" id="Check1">
                      <label class="form-check-label align-text-top" for="Check1">
                          <small id="emailHelp" class="form-text text-muted m-0">Keep me up to date on news and special offers</small>
                      </label>
                  </div> -->
                  <div class="mb-4 mb-md-5">
                  <h5 class="Shipping-addr font-weight-bold">送貨資訊</h5>
                  <!-- <div class="form-row">
                      <div class="col-12 col-md mb-2" >
                        <input type="text" class="form-control form-control-lg" placeholder="Name">
                      </div>
                      <div class="col-12 col-md mb-2">
                        <input type="text" class="form-control form-control-lg" placeholder="Phone">
                      </div>
                  </div> -->
                  <div class="form-row">
                      <div class="form-group col-12 col-md mb-2">
                      <validation-provider rules="required" v-slot="{ errors, classes }">
                        <select
                         class="custom-select custom-select-lg"
                          :class="classes"
                            id="country"
                            name="國家"
                            aria-describedby="country"
                            v-model="country"
                            >
                          <option value="" disabled>國家/地區</option>
                          <option>臺灣</option>
                          <!-- <option>...</option> -->
                          </select>
                            <span class="text-danger"> {{ errors[0] }} </span>
                        </validation-provider>
                      </div>
                      <div class="form-group col-12 col-md mb-2">
                        <validation-provider rules="required" v-slot="{ errors, classes }">
                          <select
                            class="custom-select custom-select-lg"
                             :class="classes"
                            id="city"
                            name="縣市"
                            aria-describedby="city"
                            v-model="city"
                            >
                              <option value="" disabled>縣市</option>
                              <option>臺北市</option>
                              <option>花蓮縣</option>
                          </select>
                          <span class="text-danger"> {{ errors[0] }} </span>
                        </validation-provider>
                      </div>
                  </div>
                  <div class="form-row mb-2">
                      <div class="col-12" >
                         <validation-provider rules="required" v-slot="{ errors, classes }">
                          <input type="text"
                            class="form-control form-control-lg"
                            :class="classes"
                            id="address"
                            name="地址"
                            aria-describedby="address"
                            placeholder="收件地址"
                            v-model="form.address"
                            />
                            <span class="text-danger"> {{ errors[0] }} </span>
                          </validation-provider>
                      </div>
                  </div>
                    <!-- 付款方式 -->
                    <div class="form-row mb-2">
                      <div class="col-12" >
                      <validation-provider rules="required" v-slot="{ errors, classes }">
                        <!-- <label for="payment">付款方式 <span class="text-danger align-middle">*</span></label> -->
                        <select
                          name="付款方式"
                          id="payment"
                          class="custom-select custom-select-lg"
                          :class="classes"
                          v-model="form.payment"
                        >
                          <option value="" disabled>請選擇付款方式</option>
                          <option value="WebATM">WebATM</option>
                          <option value="ATM">ATM</option>
                          <option value="ATM">Barcode</option>
                          <option value="Credit">Credit</option>
                          <option value="ApplePay">ApplePay</option>
                          <option value="GooglePay">GooglePay</option>
                        </select>
                        <span class="text-danger"> {{ errors[0] }} </span>
                      </validation-provider>
                      </div>
                    </div>
                    <!-- 備註 -->
                    <div class="form-row mb-2">
                      <div class="col-12" >
                      <!-- <label for="message">備註</label> -->
                      <textarea
                        name="message"
                        id="message"
                        class="form-control"
                        cols="30"
                        rows="3"
                        placeholder="如果還有其他問題，可以在這裡告訴我們，我們會儘快幫您處理喔!"
                        v-model="form.message"
                      ></textarea>
                      </div>
                    </div>
                  </div>
                  <div class="form-row align-items-center">
                      <div class="col-12 col-md order-md-2">
                          <button type="submit" class="btn btn-lg btn-main w-100 font-weight-bold" :disabled="invalid">送出訂單</button>
                      </div>
                      <div class="col-12 col-md text-center text-md-left">
                          <a @click.prevent="goBack"
                            href="#"
                            class="nav-link text-main py-3 px-0">
                              <span class="material-icons align-middle">
                              keyboard_arrow_left
                              </span>
                              繼續選購
                          </a>
                      </div>
                  </div>
              </form>
          </validation-observer>
          <!-- </div> -->
          <!-- pay list -->
          <div class="col-12 col-md-4 order-2 order-md-3">
            <div class="form-group d-flex coupon-box mb-0 p-3 p-md-4">
                    <label for="couponCode" class="sr-only">couponCode</label>
                    <input
                      type="text"
                      class="form-control w-75 mr-2"
                      id="couponCode"
                      placeholder="請輸入優惠碼"
                      v-model="couponCode"
                      @keyup.enter="addCoupon"
                    />
                    <button type="button" class="btn btn-outline-main w-25" @click="addCoupon">
                      套用
                    </button>
              </div>
              <ul class="list-unstyled pay-list p-3 p-md-4 collapse d-md-block" id="collapse-pay-list">
                  <li v-for="(item, index) in carts" :key="index" class="mb-3">
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
                  <li
                    class="d-flex
                justify-content-between align-items-center pt-3 mb-3 border-top "
                    v-if="coupon.enabled"
                  >
                    <h5 class="mb-0">優惠碼</h5>
                    <p class="mb-0 h5">
                      -
                      {{
                        Math.round(totalMoney * (coupon.percent / 100)) | money
                      }}
                    </p>
                  </li>
                  <li class="mb-3" :class="{'pt-3':!coupon.enabled}">
                      <div>
                          <p>小計</p>
                          <p v-if="coupon.enabled">{{totalMoney - Math.round((totalMoney * (coupon.percent / 100))) | money}}</p>
                          <p v-else>{{totalMoney | money}}</p>
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
                          <p v-if="coupon.enabled">
                            {{totalMoney - Math.round((totalMoney * (coupon.percent / 100))) + shipping | money}}
                          </p>
                          <p v-else>
                            {{totalMoney + shipping | money}}
                          </p>
                      </div>
                  </li>
              </ul>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Orders',
  data () {
    return {
      isLoading: false,
      country: '',
      city: '',
      address1: '',
      form: {
        name: '',
        email: '',
        tel: '',
        address: '',
        payment: '',
        message: ''
      },
      carts: {},
      coupon: {},
      couponCode: '',
      // subTotal: 0,
      shipping: 80
    }
  },
  created () {
    this.$bus.$emit('get-layer:layer', 1)
    this.getCarts()
  },
  methods: {
    getCarts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((response) => {
        this.carts = response.data.data
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
      if (this.coupon.enabled) {
        order.coupon = this.coupon.code
      }
      this.$http.post(api, order)
        .then((response) => {
          document.cookie = `orderId=${response.data.data.id}; expires=/; path=/`
          this.$bus.$emit('get-cart')
          this.$router.push('/checkout')
          this.isLoading = false
          // console.log(order)
        })
        .catch((error) => {
          this.isLoading = false
          this.$bus.$emit('message:push', `喔歐~訂單失敗，請稍後再嘗試!
          ${error.response.data.message}(${error.response.status})`,
          'danger')
        })
    },
    goBack () {
      this.$router.go(-1)
    },
    addCoupon () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/coupon/search`
      this.$http.post(api, { code: this.couponCode })
        .then((res) => {
          this.coupon = res.data.data
          this.$emit('addCoupon', this.coupon)
          this.isLoading = false
        })
        .catch((error) => {
          this.$bus.$emit('message:push', `喔歐~優惠碼失敗，請確認優惠碼後再重新嘗試!
          ${error.response.data.message}(${error.response.status})`,
          'danger')
          this.isLoading = false
        })
    }
  },
  computed: {
    totalMoney () {
      const total = this.carts.reduce((prev, item) => {
        return prev + item.product.price * item.quantity
      }, 0)
      return total
    }
  }
}
</script>

<style lang="scss" scoped>
$pay-list-bg:#F2F2F2;
.coupon-box {
  background-color: $pay-list-bg;
}
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
