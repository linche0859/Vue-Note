(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{328:function(n,t,c){},374:function(n,t,c){"use strict";var e=c(328);c.n(e).a},386:function(n,t,c){"use strict";c.r(t);var e={name:"PropsObject",components:{editComponent:{template:'\n  <div class="card p-3">\n    <form>\n      <div class="form-group row align-items-center">\n        <label :for="\'name\' + comic.id" class="col-3">漫畫名</label>\n        <div class="col-9">\n          <input type="text" class="form-control" :id="\'name\' + comic.id" v-model="comic.name">\n        </div>\n      </div>\n      <div class="form-group row align-items-center mb-0">\n        <label :for="\'time\' + comic.id" class="col-3">觀看時間</label>\n        <div class="col-9">\n          <input type="text" class="form-control" :id="\'time\' + comic.id" v-model="comic.time">\n        </div>\n      </div>\n    </form>\n  </div>',props:{comic:{type:Object}}}},props:{},data:function(){return{comics:[{id:"c001",name:"鬼滅之刃",time:"2020/07/09"},{id:"c002",name:"我的英雄學院",time:"2020/07/10"}]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},o=(c(374),c(43)),i=Object(o.a)(e,(function(){var n=this,t=n.$createElement,c=n._self._c||t;return c("div",{staticClass:"propsObject"},[c("div",{staticClass:"mb-3 border-bottom"},n._l(n.comics,(function(t){return c("ul",[c("li",[n._v(n._s(t.name))]),n._v(" "),c("li",[n._v(n._s(t.time))])])})),0),n._v(" "),n._l(n.comics,(function(n){return c("edit-component",{key:n.id,ref:"editComponent",refInFor:!0,attrs:{comic:n}})}))],2)}),[],!1,null,null,null);t.default=i.exports}}]);