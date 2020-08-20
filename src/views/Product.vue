<template>
    <div class="product">
        <loading :active.sync="isLoading"></loading>
        <div class="product-item container">
          <div class="row product-item-head position-relative align-items-md-center mt-md-7 mb-md-5 mb-4">
            <div class="product-item-image col-12 col-md-8 px-0">
              <div class="product-card card m-md-0">
                  <img class="card-img-top border-0" :src="tempProduct.imageUrl[0]" alt="Card image cap">
                  <div class="card-img-overlay p-3">
                      <p v-if="tempProduct.price < tempProduct.origin_price" class="card-text text-white font-size-14 text-capitalize">on sale</p>
                  </div>
              </div>
            </div>
            <div class="col-12 col-md-5 position-absolute product-item-cart">
              <div class="card-body bg-white p-3 py-md-5 pr-md-0 pl-md-5">
                  <nav aria-label="breadcrumb">
                      <ol class="breadcrumb p-0 bg-transparent border-0 mb-2 mb-md-3">
                        <li class="breadcrumb-item"><a href="#">首頁</a></li>
                        <li class="breadcrumb-item"><a href="#">慢慢手做</a></li>
                        <li class="breadcrumb-item active" aria-current="page">全部</li>
                      </ol>
                  </nav>
                  <h2 class="card-title font-size-md-48">{{tempProduct.title}}</h2>
                  <div class="d-flex flex-wrap">
                      <!-- quantity button -->
                      <div class="cart-quantity row  no-gutters mr-md-2 mb-3 mb-md-0 order-md-2">
                          <button @click="changeQuantity( tempQuantity - 1)" class="sub btn col-4 px-0" :disabled="tempQuantity === 1">
                            <i  class="material-icons align-bottom">remove</i>
                          </button>
                          <input type="number" min="1" max="99" :value="this.tempQuantity" class="col-4 text-center border-0 font-size-20">
                          <button @click="changeQuantity( tempQuantity + 1)" class="add btn col-4 px-0" >
                            <i  class="material-icons align-bottom">add</i>
                          </button>
                      </div>
                      <!-- price display -->
                      <p class="cart-price card-text w-md-100 font-size-24 text-right mb-md-4">
                        <del v-if="tempProduct.price < tempProduct.origin_price" class="text-black-50 font-size-16">
                          {{ tempProduct.origin_price | money }}
                        </del>
                        <br>{{ tempProduct.price | money }}
                      </p>
                      <!-- add to cart button & Button trigger modal -->
                      <button @click="addToCart()" class="add-cart-btn btn btn-main btn-lg flex-md-grow-1 font-weight-bold order-md-3" data-toggle="modal" data-target="#cartModalLong">
                          加入購物車
                      </button>
                  </div>
              </div>
            </div>
          </div>
        <CartsModal ref="CartsModal" :msgStatus="msgStatus" :is-new="isNew"  @update="getCart"></CartsModal>
        <div class="product-content row mb-md-8 mb-5">
          <div class="col-md-5 mb-3 mb-md-0">
            <p class="card-text font-size-md-20">
              {{tempProduct.content}}
            </p>
          </div>
          <div class="col-md-3 text-muted">
            <span v-html="tempProduct.description"></span>
            <!-- {{tempProduct.description}} -->
          </div>
        </div>
        </div>
        <h2 class="container mb-3 font-weight-bold font-size-24 font-size-md-36">這裡<sub > 應該還有您喜歡的手作...</sub></h2>
        <Carousel ref="mySwiper"></Carousel>
    </div>
</template>

<script>
import Carousel from '@/components/Frontend/Carousel'
import CartsModal from '@/components/Frontend/CartsModal'
export default {
  name: 'Product',
  components: {
    Carousel,
    CartsModal
  },
  data () {
    return {
      isLoading: false,
      tempProduct: {
        price: 0,
        imageUrl: [],
        options: {}
      },
      msgStatus: {},
      cart: {},
      isNew: true,
      tempQuantity: 1,
      cartQuantity: 0
    }
  },
  created () {
    this.getProduct()
    this.getCart()
    this.$bus.$on('get-product-cart', () => {
      this.getCart()
    })
  },
  methods: {
    getProduct () {
      this.isLoading = true
      // 取回產品ID
      const { id } = this.$route.params
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/product/${id}`
      this.$http.get(api).then((response) => {
        this.tempProduct = response.data.data
        this.isLoading = false
        // console.log(this.product)
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
          this.cart.forEach((item) => {
            if (item.product.id === this.tempProduct.id) {
              this.tempQuantity = item.quantity
              this.cartQuantity = item.quantity
              // console.log(this.tempQuantity)
              // console.log(this.cartQuantity)
              this.isNew = false
            }
          })
        }
        this.isLoading = false
        // console.log(this.cart)
      })
    },
    changeQuantity (num) {
      this.tempQuantity = num
    },
    addToCart () {
      // console.log(this.tempQuantity)
      // this.getCart()
      console.log(this.isNew)
      console.log(this.cart.length)
      if ((this.tempQuantity !== this.cartQuantity) || this.cart.length === 0) {
        // console.log('不依樣了')
        // 使用 refs 觸發子元件updateQuantity方法
        this.$refs.CartsModal.updateQuantity(this.tempProduct.id, this.tempQuantity)
      }
      this.$refs.CartsModal.getCarts()
      window.$('#cartModalLong').modal('show')
    },
    quantityUpdate (id, num) {
      const cart = {
        product: id,
        quantity: num
      }
      console.log(cart)
    }
  }
}
</script>

<style lang='scss' scoped>
  .product-item-cart {
    // right: 0;
    bottom: 0;
    // bottom: auto;
  }
  .product-item-head {
    height: 566px;
  }
  .cart-price {
    width: 50%;
    line-height: 22px;
  }
  .cart-quantity {
    background-color: #F2F2F2;
    border-radius: 0.25rem;
    height: 3.5rem;
    width: 50%;
    input {
      background-color: #F2F2F2;
    }
  }
  .add-cart-btn{
    width: 100%;
  }

  @media (min-width: 576px) {
    .product-item-cart {
        right: 0;
        bottom: auto;
    }
    .product-item-head {
      height: auto;
    }
    .product-item-image {
      padding-left: 15px !important;
      padding-right: 15px !important;
    }
    .cart-price {
      width: 100%;
    }
    .cart-quantity {
      width: 30%;
    }
    .add-cart-btn{
      width: auto;
    }
  }
</style>
