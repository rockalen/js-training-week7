<template>
    <div class="products mt-8">
      <!-- <ClassMenu/> -->
      <div class="static-sub-menu  container-fluid mb-4 mb-md-7 d-none d-md-block" id="staticSubMenu">
      <ul class="nav sub-menu-item text-capitalize container" id="sub-menu-item">
        <li v-for="(item, index) in classMenu" :key="index"
         class="nav-item border-0 font-size-16 font-size-md-24 my-3">
            <a class="font-weight-bold nav-link p-0"
             :class="item.link == category ? 'text-main':''"
              data-toggle="list"
              href="#list-filter"
              @click="category = item.link, getItem"
            >
          {{ item.name }}<sup>{{item.number}}</sup></a>
        </li>
      </ul>
    </div>
        <loading :active.sync="isLoading"></loading>
        <div id="productList" class="product-item container card-columns mb-5">
            <div v-for="(item, index) in filterProducts" :key="index" class="card"
             @click="getProduct(item.id)"><!-- :class="{'d-md-none':index == 9}" -->
                <img :src="item.imageUrl[0]" class="card-img">
                  <div v-if="item.price < item.origin_price" class="card-img-overlay p-3">
                    <p class="card-text text-right text-white font-size-14 text-capitalize">
                      on sale
                    </p>
                  </div>
                <div class="card-body text-left p-0 pt-1">
                    <h5 class="card-title mb-1 text-capitalize font-size-md-24 font-weight-bold">
                      {{item.title}}
                    </h5>
                    <p class="card-text font-size-16 text-truncate mb-1">
                    {{item.content}}
                    <!-- <br>{{item.origin_price | money }}
                    <del class="text-black-50 ml-2">NT$1200</del> -->
                    </p>
                    <div class="d-flex align-items-baseline">
                        <!-- <div class="font-size-20" v-if="item.price >= item.origin_price"> {{ item.origin_price | money }}元</div> -->
                        <del class="text-muted font-size-16 mr-2" v-if="item.price < item.origin_price"> {{ item.origin_price | money }}</del>
                        <div class="font-weight-bold font-size-16 font-size-md-20"> {{item.price | money}}</div>
                    </div>
                </div>
            </div>
            <div :class="{'d-md-none':filterProducts.length % 2 == 1, 'd-none':filterProducts.length%2 == 0}" class="card" style="height:245px">
              <div class="card-body"></div>
            </div>
        </div>
        <!-- 分頁元件 :pages 取得外層 pagination 頁面資訊 ; @emit-pages 刷新頁面-->
        <div class="mb-7">
          <Pagination :pages="pagination" @emit-pages="getProducts"></Pagination>
        </div>
    </div>
</template>

<script>
import Pagination from '@/components/Frontend/Pagination.vue'
// import ClassMenu from '@/components/Frontend/ClassMenu'
export default {
  name: 'Products',
  components: {
    Pagination
    // ClassMenu
  },
  data () {
    return {
      isLoading: false,
      category: this.$route.query.category,
      products: [],
      pagination: {},
      activeClass: 0,
      classMenu: [
        { name: '全部', number: 12, link: 'all' },
        { name: '手做陶器', number: 5, link: '手做陶器' },
        { name: '木作小物', number: 2, link: '木作小物' },
        { name: '多元文創', number: 1, link: '多元文創' },
        { name: '其他', number: 1, link: '其他' }
      ]
      // subMenuDisplay: true
    }
  },
  created () {
    // 設定主選單
    this.$bus.$emit('get-layer:layer', 0)
    this.getProducts()
  },
  methods: {
    getProducts (page = 1, paged = 20) {
      this.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/${process.env.VUE_APP_UUID}/ec/products?page=${page}&paged=${paged}`
      // console.log(api)
      this.axios.get(api).then((response) => {
        this.products = response.data.data
        // 將遠端頁數回應資料存入產品頁數資料並給 pagination 元件做後續處理
        this.pagination = response.data.meta.pagination
        // 設定產品類別件數
        this.filterClassNum()
        this.isLoading = false
      //   console.log(this.products)
      })
    },
    getProduct (id) {
      this.$router.push({ path: `/product/${id}` }) // -> /user/123
    },
    getItem (index) {
      this.activeClass = index // 把當前點擊元素的index，赋值给activeClass
      // console.log(this.activeClass)
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
    }
  },
  computed: {
    filterProducts () {
      let category = this.category
      if (category === '') {
        category = 'all'
      }
      // console.log(category)
      if (this.$route.query.category !== undefined) {
        category = this.$route.query.category
        this.$router.replace('/products')
      }
      // console.log(category)
      if (category === 'all') {
        return this.products
      }
      return this.products.filter((item) => item.category === category)
    }
    // filterClass () {
    //   if (this.category === 'all') {
    //     return this.products
    //   }
    //   return this.products.find((item) => item.category === this.category)
    // }
  }

}
</script>
<style lang="scss" scoped>
  .active {
    background-color: #F2F2F2 !important;
  }
</style>
