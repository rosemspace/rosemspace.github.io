(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{196:function(t,e,n){},201:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));n(15);var r=n(2);n(52),n(202);function c(){return{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,path,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,path=t.route.path,r=t.error,e.next=3,n("/"===path?"index":path.slice(1)).fetch().catch((function(){r({statusCode:404,message:"Page not found"})}));case 3:return c=e.sent,e.abrupt("return",{document:c});case 5:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.document.title,meta:[{hid:"description",name:"description",content:this.document.description},{hid:"og:description",name:"og:description",property:"og:description",content:this.document.description}]}}}}},202:function(t,e,n){"use strict";n(137)("trimLeft",(function(t){return function(){return t(this,1)}}),"trimStart")},203:function(t,e,n){"use strict";var r=n(196);n.n(r).a},231:function(t,e,n){"use strict";n.r(e);n(44),n(21),n(22),n(12),n(34);var r=n(13),c=n(1),content=n(201);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var f=c.a.extend(function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({scrollToTop:!0,transition:"fade"},Object(content.a)())),d=(n(203),n(14)),component=Object(d.a)(f,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("NuxtContent",{attrs:{document:this.document}})],1)}),[],!1,null,null,null);e.default=component.exports}}]);