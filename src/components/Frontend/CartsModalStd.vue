<template>
  <!-- cart Modal -->
  <div class="modal fade right" id="cartModalLongStd" tabindex="-1" role="dialog" aria-labelledby="cartModalLongStdTitle" aria-hidden="true">
    <loading :active.sync="isLoading"></loading>
      <div class="modal-dialog" role="document">
        <div class="modal-content p-3 p-md-7">
          <div class="modal-header p-0 pb-3">
            <h4 class="modal-title font-size-md-48" id="cartModalLongStdTitle">購物列表 <sup class="text-main">{{carts.length}}</sup></h4>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span class="font-size-24 font-size-md-48" aria-hidden="true">×</span>
            </button>
          </div>
          <div class="modal-body p-0">
            <ul v-if="carts.length" class="cart-list d-flex flex-column list-unstyled h-100">
                <li v-for="(item, index) in carts" :key="index" class="media mb-2">
                    <div class="image">
                        <img :src="item.product.imageUrl[0]" alt="...">
                    </div>
                    <div class="media-body pt-1 py-md-2">
                        <div class="d-flex justify-content-between align-items-center">
                            <h6 class="mt-0 mb-1">{{item.product.title}}（{{item.product.unit}}）</h6>
                            <i v-if="status.loadingBtn === item.product.id" class="spinner-grow spinner-grow-sm" role="status"></i>
                            <a v-else @click="delFromCart(item.product.id)" class="font-size-24 btn border-0 p-0" aria-hidden="true" >×</a>
                        </div>
                        <p class="mb-2">
                            {{item.product.price | money}}
                            <del v-if="item.product.price < item.product.origin_price" class="text-black-50 font-size-16">
                                <small>{{item.product.origin_price | money}}</small>
                            </del>
                        </p>
                        <div class="d-flex justify-content-between align-items-center">
                            <!-- quantity button -->
                            <div class="row no-gutters mr-md-2 mb-0 bg-gray">
                                <button @click="updateQuantity(item.product.id, item.quantity - 1)" class="sub btn col-4 px-0"
                                :disabled = "item.quantity === 1">
                                  <i v-if="status.loadingBtn === item.product.id" class="spinner-grow spinner-grow-sm" role="status"></i>
                                  <i v-else class="material-icons align-middle">remove</i>
                                </button>
                                <!-- <i v-if="status.loadingBtn === item.product.id" class="spinner-grow spinner-grow-sm" role="status"></i> -->
                                <input @keyup.enter="updateQuantity(item.product.id, $event.target.value)" type="number" min="1" max="99" :value="item.quantity" class="col-4 text-center border-0"
                                :disabled = "status.loadingBtn === item.product.id">
                                <button @click="updateQuantity(item.product.id, item.quantity + 1)" class="add btn col-4 px-0">
                                  <i v-if="status.loadingBtn === item.product.id" class="spinner-grow spinner-grow-sm" role="status"></i>
                                  <i v-else class="material-icons align-middle">add</i>
                                </button>
                            </div>
                            <!-- price display -->
                            <p class="mb-0 font-weight-bold">{{item.quantity * item.product.price | money}}</p>
                        </div>
                    </div>
                </li>
                <li class="footer media bg-transparent">
                    <div class="image">
                        <!-- <img src="./assets/images/img-4.jpg" alt="..."> -->
                    </div>
                    <div class="media-body p-0 d-flex flex-column justify-content-between">
                        <div class="row flex-wrap no-gutters h-auto">
                            <div class="col-6 text-secondary mb-3">小計</div>
                            <div class="col-6 text-right text-secondary">{{this.subTotal | money}}</div>
                            <div class="col-6 text-secondary">運費</div>
                            <div class="col-6 text-right text-secondary">{{this.shipping | money}}</div>
                            <div class="col-6 font-size-24 font-weight-bold my-4">總計</div>
                            <div class="col-6 text-right font-size-24 font-weight-bold my-4">{{this.subTotal + this.shipping | money}}</div>
                        </div>
                        <!-- <div class="row no-gutters"> -->
                          <!-- Checkout button & Button trigger modal -->
                            <!-- <a class="checkout-btn btn btn-main btn-lg  font-weight-bold flex-grow-1" href="product-checkout.html">
                            結帳確認
                            </a>
                        </div> -->
                    </div>
                </li>
                <li class="bg-transparent h-100 row no-gutters align-items-md-start align-items-end">
                  <div class="col-12 col-md-8 order-md-2">
                      <!-- Checkout button & Button trigger modal -->
                      <a @click.prevent="goCheckout" class="checkout-btn btn btn-main btn-lg font-weight-bold w-100" href="#">
                      結帳確認
                      </a>
                  </div>
                  <div class="col-12 col-md-4 text-center">
                        <!-- <img src="./assets/images/img-4.jpg" alt="..."> -->
                        <a @click.prevent="removeCartsAll" href="#" class="nav-link align-middle text-main py-md-3 px-0">
                          <!-- <span class="material-icons align-middle">
                          keyboard_arrow_left
                          </span> -->
                          <font-awesome-icon icon="trash-alt"/>
                          清除重來
                      </a>
                  </div>
                </li>
                <!-- <li class="media footer my-2 bg-transparent align-items-end align-items-md-start">
                    <div class="image ">
                    </div>
                    <div class="media-body p-0 "> -->
                          <!-- Checkout button & Button trigger modal -->
                        <!-- <button class="checkout-btn btn btn-main btn-lg flex-md-grow-1 font-weight-bold w-100" data-toggle="modal" data-target="#checkoutModal">
                            Checkout
                        </button>
                    </div>
                </li> -->
              </ul>
              <span v-else>目前購物車內無任何商品!</span>
            </div>
            <!-- <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary">Save changes</button>
            </div> -->
        </div>
      </div>
  </div>
</template>
<script>
export default {
  name: 'CartsModal',
  data () {
    return {
      isLoading: false,
      carts: {},
      subTotal: 0,
      shipping: 80,
      status: {
        loadingBtn: ''
      }
    }
  },
  props: {
    productid: {
      type: String,
      default: ''
    },
    msgStatus: {
      type: Object,
      default () {
        return {
        }
      }
    },
    isNew: {
      type: Boolean,
      default: true
    }
  },
  created () {
    this.$bus.$emit('get-layer:layer', 0)
    this.getCarts()
  },
  methods: {
    getCarts () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((response) => {
        this.subTotal = 0
        this.carts = response.data.data
        this.carts.forEach((item) => {
          this.subTotal += (item.product.price * item.quantity)
        })
        this.isLoading = false
      })
    },
    updateQuantity (id, quantity) {
      // this.isLoading = true
      this.status.loadingBtn = id
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      let httpMethod = 'post'
      this.statusMsg = '已加入購物車喔!'
      if (!this.isNew) {
        httpMethod = 'patch'
        this.statusMsg = '購物車本筆資料已完成更新!'
      }
      if (quantity < 1) {
        quantity = 1
      }
      const data = {
        product: id,
        quantity: quantity
      }
      this.$http[httpMethod](api, data).then((response) => {
        // this.isLoading = false
        this.getCarts()
        this.status.loadingBtn = ''
        // console.log(this.statusMsg)
        if (response.status === 200) {
          // 參考範例製作吐司提示訊息
          this.$bus.$emit('message:push',
            this.statusMsg,
            'success')
          this.$emit('update')
          // window.$('#cartModalLong').modal('show')
        } else {
          this.$bus.$emit('message:push',
            `喔歐~加入時發生錯誤!
        ${response.data.message}(${response.status})`,
            'danger')
        }
      }).catch((error) => {
        this.isLoading = false
        this.status.loadingBtn = ''
        if (error.response.status === 422) {
          this.$bus.$emit('message:push', `閒置過久且該品項已在購物車中，請重新操作 ${error.response.data.message}(${error.response.status})`, 'danger')
          this.$emit('update')
        } else {
          this.$bus.$emit('message:push', `喔歐~加入時發生錯誤!
        ${error.response.data.message}(${error.response.status})`,
          'danger')
        }
      })
    },
    delFromCart (id) {
      this.isLoading = true
      this.status.loadingBtn = id
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/${id}`
      this.$http.delete(api).then((response) => {
        this.isLoading = false
        this.status.loadingBtn = ''
        if (response.status === 200) {
          this.$bus.$emit('message:push', '已移除此項購物')
          this.getCarts()
          this.$emit('update')
          this.$bus.$emit('get-cart')
          console.log(this.carts.length)
          // 判斷如果購物車內無項目則關閉 modal
          if (this.carts.length <= 1) {
            window.$('#cartModalLongStd').modal('hide')
          }
          // this.$router.go(this.$router.push({ path: `/product/${id}` }))
        } else {
          this.$bus.$emit('message:push', `喔歐~移除時發生錯誤!
        ${response.data.message}(${response.status})`,
          'danger')
        }
      })
    },
    removeCartsAll () {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping/all/product`
      this.axios.delete(api).then((response) => {
        this.$bus.$emit('message:push', '已清空購物車')
        this.isLoading = false
        this.getCarts()
        this.$emit('update')
        this.$bus.$emit('get-cart')
        window.$('#cartModalLongStd').modal('hide')
      })
    },
    goCheckout () {
      window.$('#cartModalLongStd').modal('hide')
      this.$router.push('/orders')
    }
  }
}
</script>

<style lang="scss" scoped>
.btn {
  &:hover{
    font-weight: bold;
    }
}
.modal.right .modal-dialog{
    position: fixed;
    right: 0;
    margin: auto;
    width: 100%;
    height: 100%;
    transform: translate3d(0%, 0, 0);
}

.modal.right .modal-content{
    height: 100%;
    overflow-y: auto;
}

.modal-header{
    border: none;
    .close{
        opacity: 1;
        span{
           line-height: 2rem;
        }
        // padding: 0;
    }
}

.modal-content{
    border-radius: 0;
    border: none;
}

.modal-body{
    border: none;
}

.modal-footer{
    border: none;
}

.cart-list {

    .add, .sub, input{
        padding: 0;
    }
    .media, input{
        background: #F2F2F2;
    }

    .image{
        // width: 96px;
        // display: none;
        height: 100px;
        img{
            height: 100px;
            width: 100px;
            object-fit: cover;
        }
    }
    .media-body{
        // width: 75%;
        padding: 0.5rem;
        div{
            line-height: 20px;
        }
        .row{
            height: 20px;
        }
    }
}
.footer{
    .media-body{
        height: 100%;
        padding-bottom: 2rem !important;
    }

}
@media(min-width: 768px){
    .cart-list {
        .media-body{
            // width: 75%;
            padding: 1rem;
        }

        .image{
            display: block;
            width: 112px;
            height: 112px;
            img{
                height: 112px;
                width: 112px;
                object-fit: cover;
            }
        }
        .row{
            height: 24px;
        }
    }
    .footer{
        .media-body{
            height: auto;
        }
    }

    .modal.right .modal-dialog{
        width: 540px;
    }

    .modal-header{
        h4{
            line-height: 57px;
        }
        .close{
            // opacity: 1;
            span{
               line-height: 2rem;
            }
            // padding: 0;
        }
    }
}
</style>
