(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{316:function(e,t,c){"use strict";function n(){return(n=Object.assign||function(e){for(var t,c=1;c<arguments.length;c++)for(var n in t=arguments[c])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)}var r=["attrs","props","domProps"],i=["class","style","directives"],s=["on","nativeOn"],o=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var c in t)if(e[c])if(-1!==r.indexOf(c))e[c]=n({},e[c],t[c]);else if(-1!==i.indexOf(c)){var a=e[c]instanceof Array?e[c]:[e[c]],u=t[c]instanceof Array?t[c]:[t[c]];e[c]=a.concat(u)}else if(-1!==s.indexOf(c))for(var d in t[c])if(e[c][d]){var l=e[c][d]instanceof Array?e[c][d]:[e[c][d]],f=t[c][d]instanceof Array?t[c][d]:[t[c][d]];e[c][d]=l.concat(f)}else e[c][d]=t[c][d];else if("hook"==c)for(var h in t[c])e[c][h]=e[c][h]?o(e[c][h],t[c][h]):t[c][h];else e[c]=t[c];else e[c]=t[c];return e}),{})}},362:function(e,t,c){},435:function(e,t,c){"use strict";c(362)},529:function(e,t,c){"use strict";c.r(t);var n=c(316),r=c.n(n),i=(c(67),c(100),c(68),c(167),c(49),{name:"JsxVModel",components:{},props:{},data:function(){return{checkboxs:[{name:"vue"},{name:"react"},{name:"angular"}],checkedList:[]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{},render:function(){var e=this,t=arguments[0];return t("div",[t("div",{class:"d-flex pb-3 border-bottom"},[this.checkboxs.map((function(c){return t("div",{class:"custom-control custom-checkbox mr-3"},[t("input",r()([{on:{change:function(t){var n=e.checkedList,r=t.target,i=!!r.checked;if(Array.isArray(n)){var s=c.name,o=e._i(n,s);r.checked?o<0&&(e.checkedList=n.concat([s])):o>-1&&(e.checkedList=n.slice(0,o).concat(n.slice(o+1)))}else e.checkedList=i}},attrs:{type:"checkbox",id:c.name},class:"custom-control-input",domProps:{checked:Array.isArray(e.checkedList)?e._i(e.checkedList,c.name)>-1:e.checkedList}},{directives:[{name:"model",value:e.checkedList,modifiers:{}}]}])),t("label",{class:"custom-control-label",attrs:{for:c.name}},[c.name])])}))]),t("p",{class:"mb-0"},["Checked items：",JSON.stringify(this.checkedList)])])}}),s=(c(435),c(46)),o=Object(s.a)(i,void 0,void 0,!1,null,null,null);t.default=o.exports}}]);