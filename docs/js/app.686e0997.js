(function(t){function e(e){for(var r,i,s=e[0],l=e[1],c=e[2],p=0,d=[];p<s.length;p++)i=s[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,s=1;s<n.length;s++){var l=n[s];0!==a[l]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0713":function(t,e,n){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},2:function(t,e){},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("PixelBoard",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},o=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("div",{staticClass:"upperContainer"},[n("div",{staticStyle:{display:"flex","flex-direction":"column","align-item":"flex-end"}},[n("div",[n("span",[t._v("Color:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputColor,expression:"inputColor"}],attrs:{type:"color"},domProps:{value:t.inputColor},on:{input:function(e){e.target.composing||(t.inputColor=e.target.value)}}}),n("span",{staticStyle:{"margin-left":"8px"}},[t._v("Strength:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.inputStrength,expression:"inputStrength"}],staticStyle:{width:"5em"},attrs:{type:"number",min:"0.01",step:"0.01"},domProps:{value:t.inputStrength},on:{input:function(e){e.target.composing||(t.inputStrength=e.target.value)}}})]),n("div",[n("span",[t._v("send ")]),t._v(" "),n("input",{staticStyle:{width:"11em"},attrs:{type:"text",readonly:""},domProps:{value:t.sendAmount}}),t._v(" "),n("span",[t._v(" to ")]),t._v(" "),n("input",{staticStyle:{width:"7em"},attrs:{type:"text",readonly:""},domProps:{value:t.banAddr}})])]),n("div",{staticClass:"selectedDetails"},[n("span",[t._v("Weight of selected pixel:")]),n("span",[t._v(t._s(-1==t.selected?"---":t.cells[t.selected].strength))])])]),n("div",{staticClass:"gridFitBox"},[n("div",{staticClass:"gridContainer",style:"grid-template-columns:"+" auto".repeat(t.width)+";"},t._l(t.cells,(function(e,r){return n("div",{key:r,staticClass:"gridSquare",style:"backgroundColor:"+e.color+";"+(r==t.selected?"border:2px solid green;":""),on:{click:function(e){return t.cellClicked(r)}}})})),0)])])},s=[],l=n("c7eb"),c=n("1da1"),u=n("ade3"),p=(n("ac1f"),n("1276"),n("a434"),n("4d90"),n("d3b7"),n("25f0"),n("964e"));p.setBananodeApiUrl("https://kaliumapi.appditto.com/api");n("1c46");var d={name:"PixelBoard",data:function(){for(var t=100,e=100,n=[],r=0;r<t*e;r++)n.push({color:"rgb(100,100,100)",strength:0});return Object(u["a"])({banAddr:"ban_1oi5fxzt1t5h9keckenq18j8raapo1njxqdtyyfmed846pph9s8fig7944py",cells:n,width:t,height:e,inputColor:"#0000ff",inputStrength:.01,interval:void 0,selected:-1},"height",0)},props:{msg:String},mounted:function(){this.scan(),void 0!=this.interval&&clearInterval(this.interval),this.interval=setInterval(this.scan,5e3)},methods:{cellClicked:function(t){t==this.selected?this.selected=-1:this.selected=t},scan:function(){var t=this;return Object(c["a"])(Object(l["a"])().mark((function e(){return Object(l["a"])().wrap((function(e){while(1)switch(e.prev=e.next){case 0:""!=t.banAddr&&t.paint(t.banAddr);case 1:case"end":return e.stop()}}),e)})))()},paint:function(t){var e=this;return Object(c["a"])(Object(l["a"])().mark((function n(){var r,a,o,i,s,c,u,d,h;return Object(l["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,p.getAccountHistory(t,-1);case 2:for(r=n.sent,a=r.history.length-1;a>=0;a--)o=r.history[a],parseInt(o.height)>e.height&&"receive"==o.type&&(e.height=parseInt(o.height),i=e.decodeTransaction(o.amount),console.log(i),void 0!=i&&(s=i.pos[1]*e.width+i.pos[0],s<e.cells.length&&(c=e.cells[s],u=c.color.substr(4,c.color.length-5).split(","),d=i.color.substr(4,i.color.length-5).split(","),h=[Math.round((parseInt(u[0])*parseFloat(c.strength)+parseInt(d[0])*parseFloat(o.amount_decimal))/(parseFloat(c.strength)+parseFloat(o.amount_decimal))),Math.round((parseInt(u[1])*parseFloat(c.strength)+parseInt(d[1])*parseFloat(o.amount_decimal))/(parseFloat(c.strength)+parseFloat(o.amount_decimal))),Math.round((parseInt(u[2])*parseFloat(c.strength)+parseInt(d[2])*parseFloat(o.amount_decimal))/(parseFloat(c.strength)+parseFloat(o.amount_decimal)))],e.cells.splice(s,1,{color:"rgb("+h[0]+","+h[1]+","+h[2]+")",strength:parseFloat(c.strength)+parseFloat(o.amount_decimal)}))));case 4:case"end":return n.stop()}}),n)})))()},decodeTransaction:function(t){var e=parseInt(t.substr(t.length-2,2));if(!(e>26)){e=e.toString(3).padStart(3,"0");var n=Math.min(parseInt(e[0]+t.substr(t.length-8,2)),255),r=Math.min(parseInt(e[1]+t.substr(t.length-6,2)),255),a=Math.min(parseInt(e[2]+t.substr(t.length-4,2)),255),o=parseInt(t.substr(t.length-14,3)),i=parseInt(t.substr(t.length-11,3));return{pos:[o,i],color:"rgb("+n+","+r+","+a+")"}}console.log("invalid prefix")}},computed:{sendAmount:function(){var t=this.selected;if(-1==t)return 0;var e=t%this.width,n=Math.floor(t/this.width),r=e.toString().padStart(3,"0")+n.toString().padStart(3,"0"),a=parseInt(this.inputColor.substr(1,2),16).toString().padStart(3,"0"),o=parseInt(this.inputColor.substr(3,2),16).toString().padStart(3,"0"),i=parseInt(this.inputColor.substr(5,2),16).toString().padStart(3,"0"),s=a.substr(1,2)+o.substr(1,2)+i.substr(1,2)+parseInt(a[0]+o[0]+i[0],3).toString().padStart(2,"0");r+=s;var l="",c=this.inputStrength.toString().indexOf(".");return l=-1==c?this.inputStrength+"."+r.padStart(29,"0"):this.inputStrength+r.padStart(29-this.inputStrength.toString().length+(c+1),"0"),l}},beforeDestroy:function(){clearInterval(this.interval)}},h=d,f=(n("8e93"),n("2877")),g=Object(f["a"])(h,i,s,!1,null,"6ff1dbfe",null),v=g.exports,m={name:"App",components:{PixelBoard:v}},b=m,y=(n("5c0b"),Object(f["a"])(b,a,o,!1,null,null,null)),S=y.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(t){return t(S)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},6:function(t,e){},7:function(t,e){},8:function(t,e){},"8e93":function(t,e,n){"use strict";n("0713")},9:function(t,e){},"9c0c":function(t,e,n){}});
//# sourceMappingURL=app.686e0997.js.map