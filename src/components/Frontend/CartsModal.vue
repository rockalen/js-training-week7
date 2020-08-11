<template>
  <!-- cart Modal -->
  <div class="modal fade right" id="cartModalLong" tabindex="-1" role="dialog" aria-labelledby="cartModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
      <div class="modal-content p-3 p-md-7">
          <div class="modal-header p-0 pb-3">
              <h4 class="modal-title font-size-md-48" id="cartModalLongTitle">購物列表 <sup class="text-main">{{carts.length}}</sup></h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="font-size-24 font-size-md-48" aria-hidden="true">×</span>
              </button>
          </div>
          <div class="modal-body p-0">
              <ul class="cart-list d-flex flex-column list-unstyled h-100">
                  <li v-for="(item, index) in carts" :key="index" class="media mb-2">
                      <div class="image">
                          <img :src="item.product.imageUrl[0]" alt="...">
                      </div>
                      <div class="media-body">
                          <div class="d-flex justify-content-between align-items-center">
                              <h6 class="mt-0 mb-1">{{item.product.title}}（{{item.product.unit}}）</h6>
                              <span class="font-size-24" aria-hidden="true">×</span>
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
                  <!-- <li class="media mb-4">
                      <div class="image">
                          <img src="./assets/images/img-4.jpg" alt="...">
                      </div>
                      <div class="media-body">
                          <div class="d-flex justify-content-between align-items-center">
                              <h6 class="mt-0 mb-1">Baifan Bowl</h6>
                              <span class="font-size-24" aria-hidden="true">×</span>
                          </div>
                          <p class="mb-2">
                              NT$1,800 -->
                              <!-- <del class="text-black-50 font-size-16">
                                  <small>NT$1,200</small>
                              </del> -->
                          <!-- </p>
                          <div class="d-flex justify-content-between align-items-center"> -->
                              <!-- quantity button -->
                              <!-- <div class="row no-gutters mr-md-2 mb-0 bg-gray">
                                  <button class="sub btn col-4 px-0">
                                  <i class="material-icons align-middle">remove</i>
                                  </button>
                                  <input type="number" min="1" max="99" value="2" class="col-4 text-center border-0">
                                  <button class="add btn col-4 px-0">
                                  <i class="material-icons align-middle">add</i>
                                  </button>
                              </div> -->
                              <!-- price display -->
                              <!-- <p class="mb-0 font-weight-bold">NT$3,600</p>
                          </div>
                      </div>
                  </li>-->
                  <li class="footer media bg-transparent h-100">
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
                          <div class="row no-gutters">
                            <!-- Checkout button & Button trigger modal -->
                              <a class="checkout-btn btn btn-main btn-lg  font-weight-bold flex-grow-1" href="product-checkout.html">
                              結帳確認
                              </a>
                          </div>
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
    this.getCarts()
  },
  methods: {
    getCarts () {
      this.isLoading = true
      this.subTotal = 0
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/shopping`
      this.$http.get(api).then((response) => {
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

      const data = {
        product: id,
        quantity: quantity
      }
      this.$http[httpMethod](api, data).then((response) => {
        // this.isLoading = false
        this.getCarts()
        this.status.loadingBtn = ''
      })
    }
  }
}
</script>

<style lang="scss" scoped>

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
        height: 96px;
        img{
            height: 96px;
            width: 96px;
            object-fit: cover;
        }
    }
    .media-body{
        // width: 75%;
        padding: 0.5rem;
        div{
            line-height: 24px;
        }
        .row{
            height: 24px;
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
