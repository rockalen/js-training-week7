(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ae5d6"],{"0a6e":function(t,a,s){"use strict";s.r(a);var n=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"dashboard"},[s("loading",{attrs:{active:t.isLoading},on:{"update:active":function(a){t.isLoading=a}}}),s("div",{staticClass:"navbar navbar-expand-lg navbar-dark bg-secondary rounded-lg mb-3"},[t._m(0),t._m(1),s("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarNav"}},[s("ul",{staticClass:"navbar-nav"},[s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/products","active-class":"active"}},[t._v(" 產品列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"訂單列表"},"active-class":"active"}},[t._v(" 訂單列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"優惠卷列表"},"active-class":"active"}},[t._v(" 優惠卷列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:{name:"圖庫列表"},"active-class":"active"}},[t._v(" 圖庫列表 ")])],1),s("li",{staticClass:"nav-item"},[s("router-link",{staticClass:"nav-link",attrs:{to:"/admin/customerOrders","active-class":"active"}},[t._v(" 模擬訂單 ")])],1)])]),s("router-link",{staticClass:"btn btn-outline-success mr-2",attrs:{to:"/"}},[t._v("回前台")]),s("button",{staticClass:"btn btn-success my-2 my-sm-0",attrs:{type:"button"},on:{click:function(a){return t.logout()}}},[t._v("登出")])],1),this.checkSucess?s("router-view",{staticClass:"container",attrs:{token:t.token}}):t._e()],1)},e=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("a",{staticClass:"navbar-brand font-weight-bolder shadow px-2",attrs:{href:"#"}},[t._v(" 後台 "),s("sub",[t._v("管理")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"}},[s("span",{staticClass:"navbar-toggler-icon"})])}],i=(s("ac1f"),s("5319"),{name:"Dashboard",data:function(){return{token:"",checkSucess:!1}},created:function(){this.checkLogin()},methods:{checkLogin:function(){var t=this;this.isLoading=!0,this.token=document.cookie.replace(/(?:(?:^|.*;\s*)token\s*=\s*([^;]*).*$)|^.*$/,"$1"),this.axios.defaults.headers.common.Authorization="Bearer ".concat(this.token);var a="".concat("https://course-ec-api.hexschool.io/api","/auth/check");this.$http.post(a,{api_token:this.token}).then((function(a){a.data.success&&(t.checkSucess=!0,t.isLoading=!1)})).catch((function(a){console.log(a),t.isLoading=!1,t.$router.push("/login")}))},logout:function(){document.cookie="token=;expires=;path=/",console.log("已清空token"),this.$router.push("/login")}}}),c=i,o=s("2877"),r=Object(o["a"])(c,n,e,!1,null,null,null);a["default"]=r.exports}}]);
//# sourceMappingURL=chunk-2d0ae5d6.4513b041.js.map