(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b029ae6"],{"389a":function(t,n,a){"use strict";a.r(n);var e=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"rank"},[a("ul",{staticClass:"list"},t._l(t.rankList,(function(n){return a("li",{key:n.rankid,on:{click:function(a){return t.goRankInfo(n)}}},[a("div",{staticClass:"text"},[a("div",{staticClass:"img-wrap"},[a("img",{attrs:{src:n.imgurl.replace("{size}",400)}})]),a("div",{staticClass:"title"},[t._v(t._s(n.rankname))])]),a("van-icon",{attrs:{name:"arrow"}})],1)})),0)])},i=[],r=a("9948"),s={name:"Rank",data:function(){return{rankList:[]}},created:function(){this.getRankList()},methods:{getRankList:function(){var t=this;Object(r["b"])().then((function(n){t.rankList=n.rank.list}))},goRankInfo:function(t){var n=t.rankid,a=t.rankname;this.$store.dispatch("settings/changeSetting",{key:"titleBarText",value:a}),this.$router.push({path:"/rank/info",query:{id:n}})}}},c=s,u=(a("e678"),a("2877")),o=Object(u["a"])(c,e,i,!1,null,"579779cb",null);n["default"]=o.exports},9948:function(t,n,a){"use strict";a.d(n,"b",(function(){return r})),a.d(n,"a",(function(){return s}));a("99af");var e=a("b775"),i=a("809e");function r(){return Object(e["a"])({url:"".concat(i["a"],"/rank/list&json=true"),method:"get"})}function s(t){return Object(e["a"])({url:"".concat(i["a"],"/rank/info/?rankid=").concat(t,"&page=1&json=true"),method:"get"})}},dcef:function(t,n,a){},e678:function(t,n,a){"use strict";a("dcef")}}]);