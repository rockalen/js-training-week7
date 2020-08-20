<template>
   <div class="checkout container-fluid end-bg">
   <div class="row justify-content-end">
      <div class="col-md-6 end-bg-cover">
      </div>
    </div>
    <div class="container h-100 d-flex flex-column justify-content-between justify-content-md-center px-0 px-md-gutter">
        <!-- 手機板時向下推擠用 -->
        <div class="row d-block d-md-none">
        </div>
        <div class="row flex-column justify-content-center text-white text-md-dark">
            <div class="col-md-6 text-center text-md-left">
                <h1 class="mb-4 display-5">
                    Well Done!
                </h1>
                <p class="font-size-md-24 font-size-16 font-weight-normal text-secondary mb-md-7">The Your order has been received. We’II email you an order confirmation with details.
                </p>
            </div>
        </div>
        <div class="row mb-4">
            <div class="col-12 col-md-3">
            <a class="btn btn-main btn-lg w-100" href="product.html" role="button">Continue shopping</a>
            </div>
        </div>
    </div>
    </div>
</template>
<script>
export default {
  name: 'Checkout',
  data () {
    return {}
  },
  created () {
    this.$bus.$emit('get-layer:layer', 1)
  }
}
</script>
<style lang="scss" scoped>
.end-bg{
    height: 100vh;
    position: relative;
}

.end-bg-cover{
    position: absolute;
    background-size: cover;
    background-position: center center;
    top: 0;
    bottom: 0;
    object-fit: cover;
    background-image: url(../assets/images/annie-spratt-TEhfafMgFSM-unsplash.jpg);
}
</style>
