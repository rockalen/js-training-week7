(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e82d018"],{1799:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation example"}},[a("ul",{staticClass:"pagination"},[a("li",{staticClass:"page-item mx-0",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(e,s){return a("li",{key:s,staticClass:"page-item mx-0",class:{active:e===t.pages.current_page}},[a("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[t._v(t._s(e))])])})),a("li",{staticClass:"page-item mx-0",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},o=[],i={name:"Pagination",data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},r=i,c=a("2877"),n=Object(c["a"])(r,s,o,!1,null,null,null);e["a"]=n.exports},d416:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products"},[a("div",{staticClass:"text-right mt-3"},[a("button",{staticClass:"btn btn-outline-primary",on:{click:function(e){return t.openModal("new")}}},[a("font-awesome-icon",{attrs:{icon:"plus-square"}}),a("span",{staticClass:"align-middle"},[t._v(" 新增產品")])],1)]),a("table",{staticClass:"table mt-4"},[t._m(0),a("tbody",t._l(t.products,(function(e){return a("tr",{key:e.id},[a("td",[t._v(t._s(e.category))]),a("td",[t._v(t._s(e.title))]),a("td",[t._v(t._s(t._f("money")(e.origin_price)))]),a("td",[t._v(t._s(t._f("money")(e.price)))]),a("td",[e.enabled?a("span",{staticClass:"text-success d-flex align-items-center justify-content-center"},[a("a",{staticClass:"btn text-success p-0",class:{disabled:t.loadingBtn===e.id},attrs:{href:"#",role:"button"},on:{click:function(a){return t.setProductEnabled(e)}}},[a("font-awesome-icon",{attrs:{icon:"toggle-off"}}),t.loadingBtn===e.id?a("sup",{staticClass:"spinner-grow spinner-grow-sm text-success",attrs:{role:"status"}}):a("sup",[t._v(" on")])],1)]):a("span",{staticClass:"text-danger d-flex align-items-center justify-content-center"},[a("a",{staticClass:"btn text-danger p-0",class:{disabled:t.loadingBtn===e.id},attrs:{href:"#",role:"button"},on:{click:function(a){return t.setProductEnabled(e)}}},[a("font-awesome-icon",{attrs:{icon:"toggle-on"}}),t.loadingBtn===e.id?a("sub",{staticClass:"spinner-grow spinner-grow-sm text-danger",attrs:{role:"status"}}):a("sub",[t._v(" off")])],1)])]),a("td",[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-success py-1",on:{click:function(a){return t.openModal("edit",e)}}},[a("font-awesome-icon",{attrs:{icon:"edit"}})],1),a("button",{staticClass:"btn btn-outline-danger py-1",on:{click:function(a){return t.openModal("delete",e)}}},[a("font-awesome-icon",{attrs:{icon:"trash-alt"}})],1)])])])})),0)]),a("div",{staticClass:"d-flex justify-content-center"},[a("Pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getProducts}})],1),a("product-modal",{ref:"productModel",attrs:{status:t.status,"is-new":t.isNew},on:{update:t.getProducts}}),a("del-product-modal",{attrs:{"temp-product":t.tempProduct},on:{update:t.getProducts}}),a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}})],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("thead",[a("tr",[a("th",{attrs:{width:"150"}},[t._v("分類")]),a("th",[t._v("產品名稱")]),a("th",{attrs:{width:"120"}},[t._v("原價")]),a("th",{attrs:{width:"100"}},[t._v("售價")]),a("th",{attrs:{width:"120"}},[t._v("是否上架")]),a("th",{attrs:{width:"120"}},[t._v("編輯 / 刪除")])])])}],i=(a("99af"),a("1799")),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"productModal",tabindex:"-1",role:"dialog","aria-labelledby":"productModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog modal-xl",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header text-white",class:{"bg-primary":t.isNew,"bg-success":!t.isNew}},[t.isNew?a("h5",{staticClass:"modal-title",attrs:{id:"productModalLabel"}},[t._v("新增資料")]):a("h5",{staticClass:"modal-title",attrs:{id:"productModalLabel"}},[t._v("編輯資料")]),t._m(0)]),a("div",{staticClass:"modal-body"},[a("form",[a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[t._l(5,(function(e){return a("div",{key:e+"img",staticClass:"form-group"},[a("label",{attrs:{for:"img"+e}},[t._v("輸入圖片網址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.imageUrl[e-1],expression:"tempProduct.imageUrl[i - 1]"}],staticClass:"form-control",attrs:{id:"img"+e,type:"text",placeholder:"請輸入圖片連結"},domProps:{value:t.tempProduct.imageUrl[e-1]},on:{input:function(a){a.target.composing||t.$set(t.tempProduct.imageUrl,e-1,a.target.value)}}})])})),a("div",{staticClass:"form-group"},[a("label",{attrs:{for:"customFile"}},[t._v(" 或 上傳圖片 "),t.status.fileUploading?a("i",{staticClass:"fas fa-spinner fa-spin"}):t._e()]),a("input",{ref:"file",staticClass:"form-control",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})]),a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:t.tempProduct.imageUrl[0],alt:""}}),a("div",{staticClass:"card-body"},[t.isNew?a("p",{staticClass:"card-text"},[t._v("輸入圖片網址後立即預覽圖片")]):t._e()])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"imgStyle"}},[t._v("Image Style:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.options.imgStyle,expression:"tempProduct.options.imgStyle"}],staticClass:"form-control",attrs:{type:"text",id:"imgStyle",placeholder:"請輸入圖片樣式(css)"},domProps:{value:t.tempProduct.options.imgStyle},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.options,"imgStyle",e.target.value)}}})])],2),a("div",{staticClass:"col-8"},[a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"title"}},[t._v("標題")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.title,expression:"tempProduct.title"}],staticClass:"form-control",attrs:{type:"text",id:"title",placeholder:"請輸入產品標題"},domProps:{value:t.tempProduct.title},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"title",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{staticClass:"col-form-label",attrs:{for:"category"}},[t._v("類別")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.category,expression:"tempProduct.category"}],staticClass:"form-control",attrs:{type:"text",id:"category",placeholder:"請輸入類別"},domProps:{value:t.tempProduct.category},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"category",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{staticClass:"col-form-label",attrs:{for:"unit"}},[t._v("單位")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.unit,expression:"tempProduct.unit"}],staticClass:"form-control",attrs:{type:"text",id:"unit",placeholder:"請輸入單位"},domProps:{value:t.tempProduct.unit},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"unit",e.target.value)}}})])]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-6"},[a("label",{staticClass:"col-form-label",attrs:{for:"origin_price"}},[t._v("原價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.origin_price,expression:"tempProduct.origin_price"}],staticClass:"form-control",attrs:{type:"number",id:"origin_price",placeholder:"請輸入原價"},domProps:{value:t.tempProduct.origin_price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"origin_price",e.target.value)}}})]),a("div",{staticClass:"form-group col-md-6"},[a("label",{staticClass:"col-form-label",attrs:{for:"price"}},[t._v("售價")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.price,expression:"tempProduct.price"}],staticClass:"form-control",attrs:{type:"number",id:"price",placeholder:"請輸入售價"},domProps:{value:t.tempProduct.price},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"price",e.target.value)}}})])]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"description"}},[t._v("產品介紹")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.content,expression:"tempProduct.content"}],staticClass:"form-control",attrs:{id:"description",placeholder:"請輸入產品描述"},domProps:{value:t.tempProduct.content},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"content",e.target.value)}}})]),a("div",{staticClass:"form-group"},[a("label",{staticClass:"col-form-label",attrs:{for:"content"}},[t._v("產品描述")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.description,expression:"tempProduct.description"}],staticClass:"form-control",attrs:{id:"content",placeholder:"請輸入產品內容介紹"},domProps:{value:t.tempProduct.description},on:{input:function(e){e.target.composing||t.$set(t.tempProduct,"description",e.target.value)}}})]),a("div",{staticClass:"form-row"},[a("div",{staticClass:"form-group col-md-4"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.options.onSale,expression:"tempProduct.options.onSale"}],staticClass:"form-check-input",attrs:{id:"onSale",type:"checkbox","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(t.tempProduct.options.onSale)?t._i(t.tempProduct.options.onSale,null)>-1:t.tempProduct.options.onSale},on:{change:function(e){var a=t.tempProduct.options.onSale,s=e.target,o=!!s.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.tempProduct.options,"onSale",a.concat([i])):r>-1&&t.$set(t.tempProduct.options,"onSale",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct.options,"onSale",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"onSale"}},[t._v("是否特價")])])]),a("div",{staticClass:"form-group col-md-5"},[a("div",{staticClass:"form-check"},[a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.enabled,expression:"tempProduct.enabled"}],staticClass:"form-check-input",attrs:{id:"is_enabled",type:"checkbox","true-value":!0,"false-value":!1},domProps:{checked:Array.isArray(t.tempProduct.enabled)?t._i(t.tempProduct.enabled,null)>-1:t.tempProduct.enabled},on:{change:function(e){var a=t.tempProduct.enabled,s=e.target,o=!!s.checked;if(Array.isArray(a)){var i=null,r=t._i(a,i);s.checked?r<0&&t.$set(t.tempProduct,"enabled",a.concat([i])):r>-1&&t.$set(t.tempProduct,"enabled",a.slice(0,r).concat(a.slice(r+1)))}else t.$set(t.tempProduct,"enabled",o)}}}),a("label",{staticClass:"form-check-label",attrs:{for:"is_enabled"}},[t._v("是否上架(顯示於前台)")])])]),a("div",{staticClass:"form-group col-md-3"},[a("label",{staticClass:"col-form-label",attrs:{for:"order"}},[t._v("顯示序號")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.tempProduct.options.order,expression:"tempProduct.options.order"}],staticClass:"form-control",attrs:{type:"number",name:"order",id:"order",placeholder:"請輸入顯示序號"},domProps:{value:t.tempProduct.options.order},on:{input:function(e){e.target.composing||t.$set(t.tempProduct.options,"order",e.target.value)}}})])])])])])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn",class:{"btn-primary":t.isNew,"btn-success":!t.isNew},attrs:{type:"button"},on:{click:function(e){return t.updateProduct()}}},[t._v("確認送出")])])])]),a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}})],1)},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{staticClass:"text-white",attrs:{"aria-hidden":"true"}},[t._v("×")])])}],n={name:"ProductModal",data:function(){return{tempProduct:{imageUrl:[],options:{onSale:!1}},isLoading:!1,statusMsg:""}},props:{productid:{type:String,default:""},status:{type:Object,default:function(){return{}}},isNew:{type:Boolean,default:!0},user:{type:Object,default:function(){return{}}}},methods:{getProduct:function(t){var e=this;this.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/admin/ec/product/").concat(t);this.axios.get(a).then((function(t){e.tempProduct=t.data.data,e.isLoading=!1})).catch((function(t){console.log(t)}))},updateProduct:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf"),a="".concat(e,"/admin/ec/product");this.statusMsg="本筆資料已成功新增!";var s="post";this.isNew||(a="".concat(e,"/admin/ec/product/").concat(this.tempProduct.id),s="patch",this.statusMsg="本筆資料已完成更新!"),this.axios[s](a,this.tempProduct).then((function(e){window.$("#productModal").modal("hide"),200===e.status?(t.$bus.$emit("message:push",t.statusMsg,"success"),t.$emit("update")):t.$bus.$emit("message:push","喔歐~更新資料時發生錯誤!\n        ".concat(e.data.message,"(").concat(e.status,")"),"danger")})).catch((function(e){t.$bus.$emit("message:push","喔歐~發生錯誤惹:\n        ".concat(e.response.data.message,"(").concat(e.response.status,")"),"danger"),window.$("#productModal").modal("hide")}))},uploadFile:function(){var t=this,e=this.$refs.file.files[0],a=new FormData;a.append("file",e);var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/admin/storage");this.status.fileUploading=!0,this.axios.post(s,a,{headers:{"Content-Type":"multipart/form-data"}}).then((function(e){t.status.fileUploading=!1,200===e.status&&(t.tempProduct.imageUrl.push(e.data.data.path),t.$bus.$emit("message:push","圖片已上傳成功!","success"))})).catch((function(e){t.$bus.$emit("message:push","喔歐~上傳圖片不可超過 2 MB\n        ".concat(e.response.data.message,"(").concat(e.response.status,")"),"danger"),t.status.fileUploading=!1}))}}},l=n,d=a("2877"),u=Object(d["a"])(l,r,c,!1,null,null,null),p=u.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal fade",attrs:{id:"delProductModal",tabindex:"-1",role:"dialog","aria-labelledby":"delModalLabel","aria-hidden":"true"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[t._m(0),a("div",{staticClass:"modal-body"},[t._v(" 確定要刪除 "),a("strong",{staticClass:"text-danger font-weight-bold"},[t._v(" "+t._s(t.tempProduct.title)+" ")]),t._v(" 嗎? "),a("p",{staticClass:"text-danger text-right mb-0"},[t._v("注意!!刪除後將無法復原")])]),a("div",{staticClass:"modal-footer"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),a("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.delProduct()}}},[t._v("確認刪除")])])])])])},g=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"modal-header text-white bg-danger border-danger"},[a("h5",{staticClass:"modal-title font-weight-normal",attrs:{id:"delModalLabel"}},[t._v("刪除產品")]),a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[a("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],f={name:"DelProductModal",data:function(){return{}},props:{tempProduct:{type:Object,default:function(){return{imageUrl:[]}}},user:{type:Object,default:function(){return{}}}},methods:{delProduct:function(){var t=this,e="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/admin/ec/product/").concat(this.tempProduct.id);this.axios.delete(e).then((function(e){window.$("#delProductModal").modal("hide"),t.$emit("update")})).catch((function(t){console.log(t)}))}}},v=f,h=Object(d["a"])(v,m,g,!1,null,null,null),b=h.exports,P={name:"Products",components:{Pagination:i["a"],ProductModal:p,DelProductModal:b},data:function(){return{isLoading:!1,products:[],pagination:{},tempProduct:{imageUrl:[],options:{}},isNew:!0,status:{fileUploading:!1},loadingBtn:""}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.isLoading=!0;var s="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/admin/ec/products?page=").concat(e,"&paged=").concat(a);this.axios.get(s).then((function(e){t.products=e.data.data,t.pagination=e.data.meta.pagination,t.isLoading=!1}))},openModal:function(t,e){switch(t){case"new":this.$refs.productModel.tempProduct={imageUrl:[],options:{}},this.isNew=!0,window.$("#productModal").modal("show");break;case"edit":this.loadingBtn=this.tempProduct.id,this.isNew=!1,this.tempProduct=JSON.parse(JSON.stringify(e)),this.$refs.productModel.getProduct(this.tempProduct.id),window.$("#productModal").modal("show"),this.loadingBtn="";break;case"delete":this.tempProduct=JSON.parse(JSON.stringify(e)),window.$("#delProductModal").modal("show");break;default:break}},setProductEnabled:function(t){var e=this;this.loadingBtn=t.id,this.tempProduct=JSON.parse(JSON.stringify(t));var a="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/admin/ec/product/").concat(this.tempProduct.id);this.tempProduct.enabled?this.tempProduct.enabled=!1:this.tempProduct.enabled=!0,this.axios.patch(a,this.tempProduct).then((function(){e.loadingBtn="",e.getProducts()})).catch((function(t){console.log(t)}))}}},C=P,_=Object(d["a"])(C,s,o,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-7e82d018.917b0460.js.map