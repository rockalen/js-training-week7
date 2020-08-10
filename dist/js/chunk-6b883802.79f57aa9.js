(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b883802"],{"853e":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),e("div",{staticClass:"row mt-5"},t._l(t.products,(function(a,s){return e("div",{key:s,staticClass:"col-md-4 mb-4"},[e("div",{staticClass:"card"},[e("img",{staticClass:"card-img-top cardBg",attrs:{src:a.imageUrl[0],alt:"..."}}),e("div",{staticClass:"card-body"},[e("span",{staticClass:"badge badge-secondary float-right ml-2"},[t._v(t._s(a.category))]),e("h5",{staticClass:"card-title"},[t._v(t._s(a.title))]),e("p",{staticClass:"card-text",domProps:{innerHTML:t._s(a.content)}},[t._v(t._s(a.content))]),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[a.price>=a.origin_price?e("div",{staticClass:"w-100 text-right"},[t._v(t._s(t._f("money")(a.origin_price))+"元")]):t._e(),a.price<a.origin_price?e("del",[t._v("原價"+t._s(t._f("money")(a.origin_price))+"元")]):t._e(),a.price<a.origin_price?e("div",{staticClass:"font-size-20"},[t._v("現在只要"+t._s(t._f("money")(a.price))+"元")]):t._e()])]),e("div",{staticClass:"card-footer d-flex"},[e("button",{staticClass:"btn btn-outline-secondary btn-sm",attrs:{type:"button",disabled:t.status.loadingBtn===a.id},on:{click:function(e){return t.getProduct(a.id)}}},[t.status.loadingBtn===a.id?e("i",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}):t._e(),t._v(" 查看更多 ")]),e("button",{staticClass:"btn btn-outline-danger btn-sm ml-auto",attrs:{type:"button",disabled:t.status.loadingBtn===a.id},on:{click:function(e){return t.addToCart(a)}}},[t.status.loadingBtn===a.id?e("i",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}):t._e(),t._v(" 加到購物車 ")])])])])})),0),e("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"productModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"productModalLabel"}},[t._v(t._s(t.tempProduct.title))]),t._m(0)]),e("div",{staticClass:"modal-body"},[e("p",{staticClass:"mb-0",domProps:{innerHTML:t._s(t.tempProduct.content)}}),e("p",{staticClass:"font-size-16"},[t._v(t._s(t.tempProduct.description))]),e("div",{staticClass:"d-flex justify-content-between align-items-baseline"},[t.tempProduct.price>=t.tempProduct.origin_price?e("div",[t._v(t._s(t._f("money")(t.tempProduct.origin_price))+"元")]):t._e(),t.tempProduct.price<t.tempProduct.origin_price?e("del",[t._v("原價"+t._s(t._f("money")(t.tempProduct.origin_price))+"元")]):t._e(),t.tempProduct.price<t.tempProduct.origin_price?e("div",{staticClass:"font-size-20"},[t._v("現在只要"+t._s(t._f("money")(t.tempProduct.price))+"元")]):t._e()]),e("select",{staticClass:"form-control mt-3",attrs:{name:""},on:{change:function(a){return t.changeSelected(a)}}},[e("option",{attrs:{value:"0",disabled:""},domProps:{selected:0===t.tempProduct.selectNum}},[t._v("請選擇數量")]),t._l(10,(function(a){return e("option",{key:a,domProps:{value:a,selected:t.tempProduct.selectNum===a}},[t._v(" 選購 "+t._s(a)+" "+t._s(t.tempProduct.unit)+" ")])}))],2)]),e("div",{staticClass:"modal-footer"},[t.tempProduct.selectNum?e("div",{staticClass:"text-mute mr-3"},[t._v(" 小計 "),e("strong",[t._v(t._s(t._f("money")(t.tempProduct.selectNum*t.tempProduct.price)))]),t._v("元 ")]):t._e(),e("button",{staticClass:"btn btn-primary",attrs:{type:"button",disabled:!t.tempProduct.selectNum},on:{click:function(a){return t.addToCart(t.tempProduct,t.tempProduct.selectNum)}}},[t.status.loadingBtn===t.tempProduct.id?e("i",{staticClass:"spinner-grow spinner-grow-sm",attrs:{role:"status"}}):t._e(),t._v(" 加到購物車 ")])])])])]),e("div",{staticClass:"row justify-content-center my-5"},[e("div",{staticClass:"col-6"},[e("div",{staticClass:"text-right mb-3"},[e("button",{staticClass:"btn btn-outline-danger",attrs:{type:"button"},on:{click:function(a){return t.removeCartAll()}}},[e("font-awesome-icon",{attrs:{icon:"trash-alt"}}),t._v(" 刪除所有品項 ")],1)]),e("table",{staticClass:"table"},[t._m(1),e("tbody",t._l(t.cart,(function(a){return e("tr",{key:a.id},[e("td",[e("button",{staticClass:"btn btn-outline-danger btn-sm",attrs:{type:"button"},on:{click:function(e){return t.delFromCart(a.product.id)}}},[e("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)]),e("td",[t._v(t._s(a.product.title))]),e("td",[e("div",{staticClass:"input-group"},[e("div",{staticClass:"input-group-prepend"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button"},on:{click:function(e){return t.quantityCalc(a.product.id,a.quantity+1)}}},[t._v(" + ")])]),e("input",{staticClass:"form-control text-center px-1",attrs:{type:"number",min:"1"},domProps:{value:a.quantity},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.quantityCalc(a.product.id,e.target.value)}}}),e("div",{staticClass:"input-group-append"},[e("button",{staticClass:"btn btn-outline-secondary",attrs:{type:"button",disabled:1===a.quantity},on:{click:function(e){return t.quantityCalc(a.product.id,a.quantity-1)}}},[t._v(" - ")])])])]),e("td",[t._v(t._s(a.product.unit))]),e("td",{staticClass:"text-right"},[t._v(t._s(t._f("money")(a.product.price))+" 元")])])})),0),e("tfoot",[e("tr",[e("td",{staticClass:"text-right",attrs:{colspan:"4"}},[t._v(" 總計 ")]),e("td",{staticClass:"text-right"},[t._v(" "+t._s(t._f("money")(t.cartTotal))+" 元 ")])])])])])]),e("div",{staticClass:"row justify-content-center"},[e("validation-observer",{staticClass:"col-md-6",scopedSlots:t._u([{key:"default",fn:function(a){var s=a.invalid;return[e("form",{on:{submit:function(a){return a.preventDefault(),t.successOrder()}}},[e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"user-name"}},[t._v("收件人姓名")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.name,expression:"form.name"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"user-name",placeholder:"請輸入姓名"},domProps:{value:t.form.name},on:{input:function(a){a.target.composing||t.$set(t.form,"name",a.target.value)}}}),s[0]?e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"email|required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"email"}},[t._v("Email")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.email,expression:"form.email"}],staticClass:"form-control",class:o,attrs:{type:"email",id:"email",placeholder:"請輸入Email"},domProps:{value:t.form.email},on:{input:function(a){a.target.composing||t.$set(t.form,"email",a.target.value)}}}),s[0]?e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required|min:8"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"tel"}},[t._v("電話")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.tel,expression:"form.tel"}],staticClass:"form-control",class:o,attrs:{type:"tel",id:"tel",placeholder:"請輸入電話"},domProps:{value:t.form.tel},on:{input:function(a){a.target.composing||t.$set(t.form,"tel",a.target.value)}}}),s[0]?e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(a){var s=a.errors,o=a.classes;return[e("label",{attrs:{for:"address"}},[t._v("地址")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",class:o,attrs:{type:"text",id:"address",placeholder:"請輸入地址"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}}),s[0]?e("span",{staticClass:"text-danger"},[t._v(t._s(s[0]))]):t._e()]}}],null,!0)})],1),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"payment"}},[t._v("付款方式")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.form.payment,expression:"form.payment"}],staticClass:"form-control",attrs:{name:"payment",id:"payment"},on:{change:function(a){var e=Array.prototype.filter.call(a.target.options,(function(t){return t.selected})).map((function(t){var a="_value"in t?t._value:t.value;return a}));t.$set(t.form,"payment",a.target.multiple?e:e[0])}}},[e("option",{attrs:{value:"",disabled:""}},[t._v(" 請選擇付款方式 ")]),e("option",{attrs:{value:"WebATM"}},[t._v(" WebATM ")]),e("option",{attrs:{value:"ATM"}},[t._v(" ATM ")]),e("option",{attrs:{value:"CVS"}},[t._v(" CVS ")]),e("option",{attrs:{value:"Barcode"}},[t._v(" Barcode ")]),e("option",{attrs:{value:"Credit"}},[t._v(" Credit ")]),e("option",{attrs:{value:"ApplePay"}},[t._v(" ApplePay ")]),e("option",{attrs:{value:"GooglePay"}},[t._v(" GooglePay ")])])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"message"}},[t._v("備註")]),e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.form.message,expression:"form.message"}],staticClass:"form-control",attrs:{id:"message",cols:"30",rows:"3"},domProps:{value:t.form.message},on:{input:function(a){a.target.composing||t.$set(t.form,"message",a.target.value)}}})]),e("div",{staticClass:"text-right"},[e("button",{staticClass:"btn btn-primary my-5",attrs:{type:"submit",disabled:s}},[t._v(" 確認送出 ")])])])]}}])})],1),t._m(2)],1)},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("th",[t._v("刪除")]),e("th",[t._v("品名")]),e("th",{attrs:{width:"140"}},[t._v("數量")]),e("th",[t._v("單位")]),e("th",[t._v("單價")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal fade",attrs:{id:"successModal",tabindex:"-1",role:"dialog","aria-labelledby":"successModalLabel","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"successModalLabel"}},[t._v("完成訂單")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])]),e("div",{staticClass:"modal-body"},[t._v(" 恭喜你已完成訂單。 ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")])])])])])}],i=(e("99af"),e("4160"),e("159b"),{name:"CustomerOrder",data:function(){return{products:[],tempProduct:{selectNum:0},form:{name:"",email:"",tel:"",address:"",payment:"",message:""},cart:{},cartTotal:0,isLoading:!1,status:{loadingBtn:""}}},created:function(){this.getProducts(),this.getCart()},methods:{getProducts:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/products?page=").concat(a);this.axios.get(e).then((function(a){t.products=a.data.data,t.isLoading=!1})).catch((function(t){console.log(t)}))},getProduct:function(t){var a=this;this.status.loadingBtn=t;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/product/").concat(t);this.axios.get(e).then((function(t){a.tempProduct=t.data.data,a.$set(a.tempProduct,"selectNum",0),a.cart.length&&a.cart.forEach((function(t){t.product.id===a.tempProduct.id&&a.$set(a.tempProduct,"selectNum",t.quantity)})),window.$("#productModal").modal("show"),a.status.loadingBtn=""})).catch((function(t){console.log(t)}))},changeSelected:function(t){this.$set(this.tempProduct,"selectNum",t.target.value)},getCart:function(){var t=this;this.isLoading=!0,this.cartTotal=0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping");this.axios.get(a).then((function(a){t.cart=a.data.data,t.cart.forEach((function(a){t.cartTotal+=a.product.price*a.quantity})),t.isLoading=!1}))},addToCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.status.loadingBtn=t.id;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping"),o={product:t.id,quantity:e};this.axios.post(s,o).then((function(t){a.getCart(),a.status.loadingBtn="",window.$("#productModal").modal("hide")})).catch((function(t){console.log(t.response.data.errors[0]),alert(t.response.data.errors[0]),a.status.loadingBtn="",window.$("#productModal").modal("hide")}))},quantityCalc:function(t,a){var e=this;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping"),o={product:t,quantity:a};this.axios.patch(s,o).then((function(){e.isLoading=!1,e.getCart(),window.$("#productModal").modal("hide")})).catch((function(t){e.isLoading=!1,window.$("#productModal").modal("hide"),alert(t.response.data.errors[0])}))},delFromCart:function(t){var a=this;this.isLoading=!0;var e="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping/").concat(t);this.axios.delete(e).then((function(){a.isLoading=!1,a.getCart()}))},removeCartAll:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/shopping/all/product");this.axios.delete(a).then((function(){t.isLoading=!1,t.getCart()}))},successOrder:function(){var t=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/orders");this.axios.post(a,this.form).then((function(a){a.data.data.id&&(window.$("#successModal").modal("show"),t.isLoading=!1,t.getCart())})).catch((function(a){t.isLoading=!1,console.log(a.response.data.message)}))}}}),r=i,n=e("2877"),c=Object(n["a"])(r,s,o,!1,null,null,null);a["default"]=c.exports},"99af":function(t,a,e){"use strict";var s=e("23e7"),o=e("d039"),i=e("e8b5"),r=e("861d"),n=e("7b0b"),c=e("50c4"),l=e("8418"),d=e("65f0"),u=e("1dde"),p=e("b622"),m=e("2d00"),v=p("isConcatSpreadable"),f=9007199254740991,g="Maximum allowed index exceeded",_=m>=51||!o((function(){var t=[];return t[v]=!1,t.concat()[0]!==t})),h=u("concat"),b=function(t){if(!r(t))return!1;var a=t[v];return void 0!==a?!!a:i(t)},C=!_||!h;s({target:"Array",proto:!0,forced:C},{concat:function(t){var a,e,s,o,i,r=n(this),u=d(r,0),p=0;for(a=-1,s=arguments.length;a<s;a++)if(i=-1===a?r:arguments[a],b(i)){if(o=c(i.length),p+o>f)throw TypeError(g);for(e=0;e<o;e++,p++)e in i&&l(u,p,i[e])}else{if(p>=f)throw TypeError(g);l(u,p++,i)}return u.length=p,u}})}}]);
//# sourceMappingURL=chunk-6b883802.79f57aa9.js.map