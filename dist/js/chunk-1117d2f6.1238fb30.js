(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1117d2f6"],{"6a85":function(t,e,a){},"99af":function(t,e,a){"use strict";var n=a("23e7"),i=a("d039"),s=a("e8b5"),r=a("861d"),c=a("7b0b"),o=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),p=a("b622"),g=a("2d00"),f=p("isConcatSpreadable"),m=9007199254740991,v="Maximum allowed index exceeded",_=g>=51||!i((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=d("concat"),h=function(t){if(!r(t))return!1;var e=t[f];return void 0!==e?!!e:s(t)},C=!_||!b;n({target:"Array",proto:!0,forced:C},{concat:function(t){var e,a,n,i,s,r=c(this),d=u(r,0),p=0;for(e=-1,n=arguments.length;e<n;e++)if(s=-1===e?r:arguments[e],h(s)){if(i=o(s.length),p+i>m)throw TypeError(v);for(a=0;a<i;a++,p++)a in s&&l(d,p,s[a])}else{if(p>=m)throw TypeError(v);l(d,p++,s)}return d.length=p,d}})},bcf8:function(t,e,a){"use strict";var n=a("6a85"),i=a.n(n);i.a},e6dc:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"products"},[a("ClassMenu"),a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),a("div",{staticClass:"product-item container card-columns mb-5",attrs:{id:"productList"}},t._l(t.products,(function(e,n){return a("div",{key:n,staticClass:"card",class:{"d-md-none":9==n},on:{click:function(a){return t.getproduct(e.id)}}},[a("img",{staticClass:"card-img",attrs:{src:e.imageUrl[0]}}),e.options.onSale?a("div",{staticClass:"card-img-overlay p-3"},[a("p",{staticClass:"card-text text-right text-white font-size-14 text-capitalize"},[t._v(" on sale ")])]):t._e(),a("div",{staticClass:"card-body text-left p-0 pt-1"},[a("h5",{staticClass:"card-title mb-1 text-capitalize font-size-md-24 font-weight-bold"},[t._v(" "+t._s(e.title)+" ")]),a("p",{staticClass:"card-text font-size-16 text-truncate"},[t._v(" "+t._s(e.content)+" ")]),a("div",{staticClass:"d-flex align-items-baseline"},[e.price>=e.origin_price?a("div",{staticClass:"font-size-20"},[t._v(" "+t._s(t._f("money")(e.origin_price))+"元")]):t._e(),e.price<e.origin_price?a("del",{staticClass:"text-muted font-size-16"},[t._v(" "+t._s(t._f("money")(e.origin_price))+"元")]):t._e(),e.price<e.origin_price?a("div",{staticClass:"ml-2 font-weight-bold font-size-20 "},[t._v(" "+t._s(t._f("money")(e.price))+"元")]):t._e()])])])})),0),a("div",{staticClass:"mb-7"},[a("Pagination",{attrs:{pages:t.pagination},on:{"emit-pages":t.getProducts}})],1)],1)},i=[],s=(a("99af"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{attrs:{"aria-label":"Page navigation"}},[a("ul",{staticClass:"pagination font-size-24  justify-content-center"},[a("li",{staticClass:"page-item mx-0",class:{disabled:1===t.pages.current_page}},[a("a",{staticClass:"page-link border-0",attrs:{href:"#","aria-label":"Previous"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[a("span",{staticClass:"material-icons align-middle",attrs:{"aria-hidden":"true"}},[t._v(" navigate_before ")])])]),t._l(t.pages.total_pages,(function(e,n){return a("li",{key:n,staticClass:"page-item mx-0",class:{active:e===t.pages.current_page,"font-weight-bold":e===t.pages.current_page}},[a("a",{staticClass:"page-link border-0",attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.emitPages(e)}}},[e===t.pages.current_page?a("u",[t._v(t._s(e))]):a("span",[t._v(t._s(e))])])])})),a("li",{staticClass:"page-item mx-0",class:{disabled:t.pages.current_page===t.pages.total_pages}},[a("a",{staticClass:"page-link border-0",attrs:{href:"#","aria-label":"Next"},on:{click:function(e){return e.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[a("span",{staticClass:"material-icons align-middle",attrs:{"aria-hidden":"true"}},[t._v(" navigate_next ")])])])],2)])}),r=[],c={name:"Pagination",data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},o=c,l=(a("bcf8"),a("2877")),u=Object(l["a"])(o,s,r,!1,null,null,null),d=u.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"static-sub-menu container-fluid mb-4 mb-md-7 d-none d-md-block",attrs:{id:"staticSubMenu"}},[a("ul",{staticClass:"nav sub-menu-item text-capitalize container",attrs:{id:"sub-menu-item"}},t._l(t.classMenu,(function(e,n){return a("li",{key:n,staticClass:"nav-item border-0 font-size-16 font-size-md-24 my-3"},[a("a",{staticClass:"font-weight-bold nav-link p-0",class:t.activeClass==n?"text-main":"",attrs:{href:e.link},on:{click:function(e){return t.getItem(n)}}},[t._v(" "+t._s(e.name)),a("sup",[t._v(t._s(e.number))])])])})),0)])},g=[],f={name:"ClassMenu",data:function(){return{activeClass:0,classMenu:[{name:"全部",number:12,link:"#/products"},{name:"手做陶器",number:5,link:"#/products"},{name:"木做小物",number:2,link:"#/"},{name:"多元素文創",number:1,link:"#/"},{name:"其他",number:1,link:"#/"}]}},methods:{getItem:function(t){this.activeClass=t}}},m=f,v=Object(l["a"])(m,p,g,!1,null,null,null),_=v.exports,b={name:"Products",components:{Pagination:d,ClassMenu:_},data:function(){return{isLoading:!1,products:[],pagination:{}}},created:function(){this.getProducts()},methods:{getProducts:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;this.isLoading=!0;var n="".concat("https://course-ec-api.hexschool.io/api","/").concat("1e46f421-bbae-4212-8539-55ea1c5329cf","/ec/products?page=").concat(e,"&paged=").concat(a);this.axios.get(n).then((function(e){t.products=e.data.data,t.pagination=e.data.meta.pagination,t.isLoading=!1}))},getproduct:function(t){this.$router.push({path:"/product/".concat(t)})}}},h=b,C=Object(l["a"])(h,n,i,!1,null,null,null);e["default"]=C.exports}}]);
//# sourceMappingURL=chunk-1117d2f6.1238fb30.js.map