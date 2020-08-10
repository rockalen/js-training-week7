<template>
  <!-- cart Modal -->
  <div class="modal fade right" id="cartModalLong" tabindex="-1" role="dialog" aria-labelledby="cartModalLongTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
      <div class="modal-content p-3 p-md-7">
          <div class="modal-header p-0 pb-3">
              <h4 class="modal-title font-size-md-48" id="cartModalLongTitle">Cart List <sup class="text-main">3</sup></h4>
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span class="font-size-24 font-size-md-48" aria-hidden="true">×</span>
              </button>
          </div>
          <div class="modal-body p-0">
              <ul class="cart-list d-flex flex-column list-unstyled h-100">
                  <li class="media mb-2">
                      <div class="image">
                          <img src="./assets/images/img-1.jpg" alt="...">
                      </div>
                      <div class="media-body">
                          <div class="d-flex justify-content-between align-items-center">
                              <h6 class="mt-0 mb-1">Tatami Cup</h6>
                              <span class="font-size-24" aria-hidden="true">×</span>
                          </div>
                          <p class="mb-2">
                              NT$1,080
                              <del class="text-black-50 font-size-16">
                                  <small>NT$1,200</small>
                              </del>
                          </p>
                          <div class="d-flex justify-content-between align-items-center">
                              <!-- quantity button -->
                              <div class="row no-gutters mr-md-2 mb-0 bg-gray">
                                  <button class="sub btn col-4 px-0">
                                  <i class="material-icons align-middle">remove</i>
                                  </button>
                                  <input type="number" min="1" max="99" value="1" class="col-4 text-center border-0">
                                  <button class="add btn col-4 px-0">
                                  <i class="material-icons align-middle">add</i>
                                  </button>
                              </div>
                              <!-- price display -->
                              <p class="mb-0 font-weight-bold">NT$1,080</p>
                          </div>
                      </div>
                  </li>
                  <li class="media mb-4">
                      <div class="image">
                          <img src="./assets/images/img-4.jpg" alt="...">
                      </div>
                      <div class="media-body">
                          <div class="d-flex justify-content-between align-items-center">
                              <h6 class="mt-0 mb-1">Baifan Bowl</h6>
                              <span class="font-size-24" aria-hidden="true">×</span>
                          </div>
                          <p class="mb-2">
                              NT$1,800
                              <!-- <del class="text-black-50 font-size-16">
                                  <small>NT$1,200</small>
                              </del> -->
                          </p>
                          <div class="d-flex justify-content-between align-items-center">
                              <!-- quantity button -->
                              <div class="row no-gutters mr-md-2 mb-0 bg-gray">
                                  <button class="sub btn col-4 px-0">
                                  <i class="material-icons align-middle">remove</i>
                                  </button>
                                  <input type="number" min="1" max="99" value="2" class="col-4 text-center border-0">
                                  <button class="add btn col-4 px-0">
                                  <i class="material-icons align-middle">add</i>
                                  </button>
                              </div>
                              <!-- price display -->
                              <p class="mb-0 font-weight-bold">NT$3,600</p>
                          </div>
                      </div>
                  </li>
                  <li class="footer media bg-transparent h-100">
                      <div class="image">
                          <!-- <img src="./assets/images/img-4.jpg" alt="..."> -->
                      </div>
                      <div class="media-body p-0 d-flex flex-column justify-content-between">
                          <div class="row flex-wrap no-gutters h-auto">
                              <div class="col-6 text-secondary mb-3">Subtotal</div>
                              <div class="col-6 text-right text-secondary">NT$4,680</div>
                              <div class="col-6 text-secondary">Shipping</div>
                              <div class="col-6 text-right text-secondary">NT$80</div>
                              <div class="col-6 font-size-24 font-weight-bold my-4">Total</div>
                              <div class="col-6 text-right font-size-24 font-weight-bold my-4">NT$4,760</div>
                          </div>
                          <div class="row no-gutters">
                            <!-- Checkout button & Button trigger modal -->
                              <a class="checkout-btn btn btn-main btn-lg  font-weight-bold flex-grow-1" href="product-checkout.html">
                              Checkout
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
