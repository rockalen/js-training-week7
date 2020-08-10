<template>
    <div class="products">
      <ClassMenu/>
        <loading :active.sync="isLoading"></loading>
        <div id="productList" class="product-item container card-columns mb-5">
            <div v-for="(item, index) in products" :key="index" class="card"
             :class="{'d-md-none':index == 9}"
             @click="getproduct(item.id)">
                <img :src="item.imageUrl[0]" class="card-img">
                  <div v-if="item.options.onSale" class="card-img-overlay p-3">
                    <p class="card-text text-right text-white font-size-14 text-capitalize">
                      on sale
                    </p>
                  </div>
                <div class="card-body text-left p-0 pt-1">
                    <h5 class="card-title mb-1 text-capitalize font-size-md-24 font-weight-bold">
                      {{item.title}}
                    </h5>
                    <p class="card-text font-size-16 text-truncate">
                    {{item.content}}
                    <!-- <br>{{item.origin_price | money }}
                    <del class="text-black-50 ml-2">NT$1200</del> -->
                    </p>
                    <div class="d-flex align-items-baseline">
                        <div class="font-size-20" v-if="item.price >= item.origin_price"> {{ item.origin_price | money }}元</div>
                        <del class="text-muted font-size-16" v-if="item.price < item.origin_price"> {{ item.origin_price | money }}元</del>
                        <div v-if="item.price < item.origin_price" class="ml-2 font-weight-bold font-size-20 "> {{item.price | money}}元</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- 分頁元件 :pages 取得外層 pagination 頁面資訊 ; @emit-pages 刷新頁面-->
        <div class="mb-7">
          <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
        </div>
        <!-- <h2> -->
        <!-- 這是產品列表
        </h2>
        <table class="table">
            <tr v-for="item in products" :key="item.id">
                <td>{{item.title}}</td>
                <td>{{item.content}}</td>
                <td>
                    <router-link :to="`/product/${item.id}`" class="btn btn-outline-primary">看產品</router-link>
                    <a href="#" class="btn btn-outline-primary">
                        看詳細
                    </a>
                 </td>
            </tr>
        </table> -->
    </div>
</template>

<script>
import Pagination from '@/components/Frontend/Pagination.vue'
import ClassMenu from '@/components/Frontend/ClassMenu'
export default {
  name: 'Products',
  components: {
    Pagination,
    ClassMenu
  },
  data () {
    return {
      isLoading: false,
      products: [],
      pagination: {}
      // subMenuDisplay: true
    }
  },
  created () {
    this.getProducts()
  },
  methods: {
    getProducts (page = 1, paged = 10) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=${paged}`
      // console.log(api)
      this.axios.get(api).then((response) => {
        this.products = response.data.data
        // 將遠端頁數回應資料存入產品頁數資料並給 pagination 元件做後續處理
        this.pagination = response.data.meta.pagination
        this.isLoading = false
      //   console.log(this.products)
      })
    },
    getproduct (id) {
      this.$router.push({ path: `/product/${id}` }) // -> /user/123
    }
  }

}
</script>
