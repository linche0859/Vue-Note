(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{341:function(e,t,n){"use strict";function c(){return(c=Object.assign||function(e){for(var t,n=1;n<arguments.length;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e}).apply(this,arguments)}var r=["attrs","props","domProps"],i=["class","style","directives"],s=["on","nativeOn"],o=function(e,t){return function(){e&&e.apply(this,arguments),t&&t.apply(this,arguments)}};e.exports=function(e){return e.reduce((function(e,t){for(var n in t)if(e[n])if(-1!==r.indexOf(n))e[n]=c({},e[n],t[n]);else if(-1!==i.indexOf(n)){var a=e[n]instanceof Array?e[n]:[e[n]],u=t[n]instanceof Array?t[n]:[t[n]];e[n]=a.concat(u)}else if(-1!==s.indexOf(n))for(var d in t[n])if(e[n][d]){var l=e[n][d]instanceof Array?e[n][d]:[e[n][d]],f=t[n][d]instanceof Array?t[n][d]:[t[n][d]];e[n][d]=l.concat(f)}else e[n][d]=t[n][d];else if("hook"==n)for(var h in t[n])e[n][h]=e[n][h]?o(e[n][h],t[n][h]):t[n][h];else e[n]=t[n];else e[n]=t[n];return e}),{})}},346:function(e,t,n){},417:function(e,t,n){"use strict";var c=n(346);n.n(c).a},502:function(e,t,n){"use strict";n.r(t);n(166),n(94),n(65),n(46),n(66);var c=n(341),r=n.n(c),i={name:"JsxVModel",components:{},props:{},data:function(){return{checkboxs:[{name:"vue"},{name:"react"},{name:"angular"}],checkedList:[]}},computed:{},watch:{},created:function(){},mounted:function(){},methods:{},render:function(){var e=this,t=arguments[0];return t("div",[t("div",{class:"d-flex pb-3 border-bottom"},[this.checkboxs.map((function(n){return t("div",{class:"custom-control custom-checkbox mr-3"},[t("input",r()([{on:{change:function(t){var c=e.checkedList,r=t.target,i=!!r.checked;if(Array.isArray(c)){var s=n.name,o=e._i(c,s);r.checked?o<0&&(e.checkedList=c.concat([s])):o>-1&&(e.checkedList=c.slice(0,o).concat(c.slice(o+1)))}else e.checkedList=i}},attrs:{type:"checkbox",id:n.name},class:"custom-control-input",domProps:{checked:Array.isArray(e.checkedList)?e._i(e.checkedList,n.name)>-1:e.checkedList}},{directives:[{name:"model",value:e.checkedList,modifiers:{}}]}])),t("label",{class:"custom-control-label",attrs:{for:n.name}},[n.name])])}))]),t("p",{class:"mb-0"},["Checked items：",JSON.stringify(this.checkedList)])])}},s=(n(417),n(43)),o=Object(s.a)(i,void 0,void 0,!1,null,null,null);t.default=o.exports}}]);