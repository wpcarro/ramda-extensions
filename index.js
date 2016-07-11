const R = require('ramda');

const {
  always, add, addIndex, anyPass, ap, append, apply,
  compose, construct, converge, curry,
  divide,
  either, equals,
  filter, forEach, flatten, flip,
  has, head,
  indexOf, identity, ifElse, isNil, is, isEmpty, intersperse,
  join,
  last, length, lens, lensIndex, lensPath,
  map, max, min, modulo, multiply,
  not,
  of, or, omit, over,
  path, pipe, prop,
  slice,
  take, takeLast, toUpper, trim,
  range, replace, reduce, reduced,
  split, subtract, sum,
  times, type, toString,
  view,
  when,
  zip
} = R;

// see addIndex in Ramda.js docs
const reduceX = addIndex(reduce);
const mapX = addIndex(map);
const filterX = addIndex(filter);


// useful when testing Ramda out in a REPL (e.g. Chrome's text snippets + console)
// floods global scope with Ramda methods so they do not need to be prefixed with 'R.'
// 
// this is useful because you cannot always rely on require(..) statements in REPL environments
function attachToWindow(subset, backup) {
  /* BEGIN -- Require ramda.min.js */
  (function(){"use strict";var t={"@@functional/placeholder":!0},n=function(t,n){switch(t){case 0:return function(){return n.apply(this,arguments)};case 1:return function(t){return n.apply(this,arguments)};case 2:return function(t,r){return n.apply(this,arguments)};case 3:return function(t,r,e){return n.apply(this,arguments)};case 4:return function(t,r,e,u){return n.apply(this,arguments)};case 5:return function(t,r,e,u,i){return n.apply(this,arguments)};case 6:return function(t,r,e,u,i,o){return n.apply(this,arguments)};case 7:return function(t,r,e,u,i,o,c){return n.apply(this,arguments)};case 8:return function(t,r,e,u,i,o,c,s){return n.apply(this,arguments)};case 9:return function(t,r,e,u,i,o,c,s,a){return n.apply(this,arguments)};case 10:return function(t,r,e,u,i,o,c,s,a,f){return n.apply(this,arguments)};default:throw new Error("First argument to _arity must be a non-negative integer no greater than ten")}},r=function(t){for(var n,r=[];!(n=t.next()).done;)r.push(n.value);return r},e=function(t){return new RegExp(t.source,(t.global?"g":"")+(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.sticky?"y":"")+(t.unicode?"u":""))},u=function(t){return function(){return!t.apply(this,arguments)}},i=function(t,n){t=t||[],n=n||[];var r,e=t.length,u=n.length,i=[];for(r=0;e>r;)i[i.length]=t[r],r+=1;for(r=0;u>r;)i[i.length]=n[r],r+=1;return i},o=function(t,n,r){for(var e=0,u=r.length;u>e;){if(t(n,r[e]))return!0;e+=1}return!1},c=function(t,n){for(var r=0,e=n.length,u=[];e>r;)t(n[r])&&(u[u.length]=n[r]),r+=1;return u},s=function(t){return{"@@transducer/value":t,"@@transducer/reduced":!0}},a=function(t,n){return Object.prototype.hasOwnProperty.call(n,t)},f=function(t){return t},l=function(){var t=Object.prototype.toString;return"[object Arguments]"===t.call(arguments)?function(n){return"[object Arguments]"===t.call(n)}:function(t){return a("callee",t)}}(),p=Array.isArray||function(t){return null!=t&&t.length>=0&&"[object Array]"===Object.prototype.toString.call(t)},h=Number.isInteger||function(t){return t<<0===t},g=function(t){return"[object Number]"===Object.prototype.toString.call(t)},d=function(t){return"[object Object]"===Object.prototype.toString.call(t)},y=function(t){return null!=t&&"object"==typeof t&&t["@@functional/placeholder"]===!0},m=function(t){return"[object RegExp]"===Object.prototype.toString.call(t)},v=function(t){return"[object String]"===Object.prototype.toString.call(t)},x=function(t){return"function"==typeof t["@@transducer/step"]},b=function(t,n){for(var r=0,e=n.length,u=Array(e);e>r;)u[r]=t(n[r]),r+=1;return u},w=function(t){return[t]},j=function(t,n){return function(){return n.call(this,t.apply(this,arguments))}},O=function(t,n){return function(){var r=this;return t.apply(r,arguments).then(function(t){return n.call(r,t)})}},A=function(t){var n=t.replace(/\\/g,"\\\\").replace(/[\b]/g,"\\b").replace(/\f/g,"\\f").replace(/\n/g,"\\n").replace(/\r/g,"\\r").replace(/\t/g,"\\t").replace(/\v/g,"\\v").replace(/\0/g,"\\0");return'"'+n.replace(/"/g,'\\"')+'"'},S=function(t){return t&&t["@@transducer/reduced"]?t:{"@@transducer/value":t,"@@transducer/reduced":!0}},E=function Iu(t,n,r){switch(arguments.length){case 1:return Iu(t,0,t.length);case 2:return Iu(t,n,t.length);default:for(var e=[],u=0,i=Math.max(0,Math.min(t.length,r)-n);i>u;)e[u]=t[n+u],u+=1;return e}},k=function(){var t=function(t){return(10>t?"0":"")+t};return"function"==typeof Date.prototype.toISOString?function(t){return t.toISOString()}:function(n){return n.getUTCFullYear()+"-"+t(n.getUTCMonth()+1)+"-"+t(n.getUTCDate())+"T"+t(n.getUTCHours())+":"+t(n.getUTCMinutes())+":"+t(n.getUTCSeconds())+"."+(n.getUTCMilliseconds()/1e3).toFixed(3).slice(2,5)+"Z"}}(),N={init:function(){return this.xf["@@transducer/init"]()},result:function(t){return this.xf["@@transducer/result"](t)}},I=function(){function t(t){this.f=t}return t.prototype["@@transducer/init"]=function(){throw new Error("init not implemented on XWrap")},t.prototype["@@transducer/result"]=function(t){return t},t.prototype["@@transducer/step"]=function(t,n){return this.f(t,n)},function(n){return new t(n)}}(),q=function(t,n){for(var r=0,e=n.length-(t-1),u=new Array(e>=0?e:0);e>r;)u[r]=E(n,r,r+t),r+=1;return u},W=function(t,n){return function(){var r=arguments.length;if(0===r)return n();var e=arguments[r-1];return p(e)||"function"!=typeof e[t]?n.apply(this,arguments):e[t].apply(e,E(arguments,0,r-1))}},P=function(t){return function n(r){return 0===arguments.length||y(r)?n:t.apply(this,arguments)}},C=function(t){return function n(r,e){switch(arguments.length){case 0:return n;case 1:return y(r)?n:P(function(n){return t(r,n)});default:return y(r)&&y(e)?n:y(r)?P(function(n){return t(n,e)}):y(e)?P(function(n){return t(r,n)}):t(r,e)}}},M=function(t){return function n(r,e,u){switch(arguments.length){case 0:return n;case 1:return y(r)?n:C(function(n,e){return t(r,n,e)});case 2:return y(r)&&y(e)?n:y(r)?C(function(n,r){return t(n,e,r)}):y(e)?C(function(n,e){return t(r,n,e)}):P(function(n){return t(r,e,n)});default:return y(r)&&y(e)&&y(u)?n:y(r)&&y(e)?C(function(n,r){return t(n,r,u)}):y(r)&&y(u)?C(function(n,r){return t(n,e,r)}):y(e)&&y(u)?C(function(n,e){return t(r,n,e)}):y(r)?P(function(n){return t(n,e,u)}):y(e)?P(function(n){return t(r,n,u)}):y(u)?P(function(n){return t(r,e,n)}):t(r,e,u)}}},R=function qu(t,r,e){return function(){for(var u=[],i=0,o=t,c=0;c<r.length||i<arguments.length;){var s;c<r.length&&(!y(r[c])||i>=arguments.length)?s=r[c]:(s=arguments[i],i+=1),u[c]=s,y(s)||(o-=1),c+=1}return 0>=o?e.apply(this,u):n(o,qu(t,u,e))}},U=function(t,n,r){return function(){var e=arguments.length;if(0===e)return r();var u=arguments[e-1];if(!p(u)){var i=E(arguments,0,e-1);if("function"==typeof u[t])return u[t].apply(u,i);if(x(u)){var o=n.apply(null,i);return o(u)}}return r.apply(this,arguments)}},B=function(t,n){for(var r=n.length-1;r>=0&&t(n[r]);)r-=1;return E(n,0,r+1)},T=function(){function t(t,n){this.xf=n,this.f=t,this.all=!0}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.all&&(t=this.xf["@@transducer/step"](t,!0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)||(this.all=!1,t=S(this.xf["@@transducer/step"](t,!1))),t},C(function(n,r){return new t(n,r)})}(),L=function(){function t(t,n){this.xf=n,this.f=t,this.any=!1}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.any||(t=this.xf["@@transducer/step"](t,!1)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.any=!0,t=S(this.xf["@@transducer/step"](t,!0))),t},C(function(n,r){return new t(n,r)})}(),F=function(){function t(t,n){this.xf=n,this.pos=0,this.full=!1,this.acc=new Array(t)}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.store(n),this.full?this.xf["@@transducer/step"](t,this.getCopy()):t},t.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},t.prototype.getCopy=function(){return i(E(this.acc,this.pos),E(this.acc,0,this.pos))},C(function(n,r){return new t(n,r)})}(),D=function(){function t(t,n){this.xf=n,this.n=t}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=N.result,t.prototype["@@transducer/step"]=function(t,n){return this.n>0?(this.n-=1,t):this.xf["@@transducer/step"](t,n)},C(function(n,r){return new t(n,r)})}(),V=function(){function t(t,n){this.xf=n,this.pos=0,this.full=!1,this.acc=new Array(t)}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.acc=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.full&&(t=this.xf["@@transducer/step"](t,this.acc[this.pos])),this.store(n),t},t.prototype.store=function(t){this.acc[this.pos]=t,this.pos+=1,this.pos===this.acc.length&&(this.pos=0,this.full=!0)},C(function(n,r){return new t(n,r)})}(),z=function(){function t(t,n){this.xf=n,this.pred=t,this.lastValue=void 0,this.seenFirstValue=!1}return t.prototype["@@transducer/init"]=function(){return this.xf["@@transducer/init"]()},t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){var r=!1;return this.seenFirstValue?this.pred(this.lastValue,n)&&(r=!0):this.seenFirstValue=!0,this.lastValue=n,r?t:this.xf["@@transducer/step"](t,n)},C(function(n,r){return new t(n,r)})}(),K=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=N.result,t.prototype["@@transducer/step"]=function(t,n){if(this.f){if(this.f(n))return t;this.f=null}return this.xf["@@transducer/step"](t,n)},C(function(n,r){return new t(n,r)})}(),_=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=N.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):t},C(function(n,r){return new t(n,r)})}(),$=function(){function t(t,n){this.xf=n,this.f=t,this.found=!1}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,void 0)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.found=!0,t=S(this.xf["@@transducer/step"](t,n))),t},C(function(n,r){return new t(n,r)})}(),H=function(){function t(t,n){this.xf=n,this.f=t,this.idx=-1,this.found=!1}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.found||(t=this.xf["@@transducer/step"](t,-1)),this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.found=!0,t=S(this.xf["@@transducer/step"](t,this.idx))),t},C(function(n,r){return new t(n,r)})}(),X=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.last))},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)&&(this.last=n),t},C(function(n,r){return new t(n,r)})}(),Y=function(){function t(t,n){this.xf=n,this.f=t,this.idx=-1,this.lastIdx=-1}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.xf["@@transducer/result"](this.xf["@@transducer/step"](t,this.lastIdx))},t.prototype["@@transducer/step"]=function(t,n){return this.idx+=1,this.f(n)&&(this.lastIdx=this.idx),t},C(function(n,r){return new t(n,r)})}(),Z=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=N.result,t.prototype["@@transducer/step"]=function(t,n){return this.xf["@@transducer/step"](t,this.f(n))},C(function(n,r){return new t(n,r)})}(),G=function(){function t(t,n){this.xf=n,this.n=t}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=N.result,t.prototype["@@transducer/step"]=function(t,n){return 0===this.n?S(t):(this.n-=1,this.xf["@@transducer/step"](t,n))},C(function(n,r){return new t(n,r)})}(),J=function(){function t(t,n){this.xf=n,this.f=t}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=N.result,t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.xf["@@transducer/step"](t,n):S(t)},C(function(n,r){return new t(n,r)})}(),Q=C(function(t,n){return t+n}),tt=M(function(t,n,r){if(n>=r.length||n<-r.length)return r;var e=0>n?r.length:0,u=e+n,o=i(r);return o[u]=t(r[u]),o}),nt=C(U("all",T,function(t,n){for(var r=0;r<n.length;){if(!t(n[r]))return!1;r+=1}return!0})),rt=P(function(t){return function(){return t}}),et=C(function(t,n){return t&&n}),ut=C(U("any",L,function(t,n){for(var r=0;r<n.length;){if(t(n[r]))return!0;r+=1}return!1})),it=C(U("aperture",F,q)),ot=C(function(t,n){return i(n,[t])}),ct=C(function(t,n){return t.apply(this,n)}),st=M(function(t,n,r){var e={};for(var u in r)e[u]=r[u];return e[t]=n,e}),at=M(function Wu(t,n,r){switch(t.length){case 0:return n;case 1:return st(t[0],n,r);default:return st(t[0],Wu(E(t,1),n,Object(r[t[0]])),r)}}),ft=C(function(t,r){return n(t.length,function(){return t.apply(r,arguments)})}),lt=C(function(t,n){return function(){return t.apply(this,arguments)&&n.apply(this,arguments)}}),pt=P(function(t){return function(n,r){return t(n,r)?-1:t(r,n)?1:0}}),ht=P(function(t){return function(){for(var n=0;n<t.length;){if(t[n][0].apply(this,arguments))return t[n][1].apply(this,arguments);n+=1}}}),gt=C(function(t,n){for(var r={},e=n.length,u=0;e>u;){var i=t(n[u]);r[i]=(a(i,r)?r[i]:0)+1,u+=1}return r}),dt=C(function(t,r){return 1===t?P(r):n(t,R(t,[],r))}),yt=Q(-1),mt=C(function(t,n){return null==n||n!==n?t:n}),vt=M(function(t,n,r){for(var e=[],u=0,i=n.length;i>u;)o(t,n[u],r)||o(t,n[u],e)||e.push(n[u]),u+=1;return e}),xt=C(function(t,n){var r={};for(var e in n)e!==t&&(r[e]=n[e]);return r}),bt=C(function Pu(t,n){switch(t.length){case 0:return n;case 1:return xt(t[0],n);default:var r=t[0],e=E(t,1);return null==n[r]?n:st(r,Pu(e,n[r]),n)}}),wt=C(function(t,n){return t/n}),jt=C(U("dropWhile",K,function(t,n){for(var r=0,e=n.length;e>r&&t(n[r]);)r+=1;return E(n,r)})),Ot=C(function(t,n){return function(){return t.apply(this,arguments)||n.apply(this,arguments)}}),At=P(function(t){return null!=t&&"function"==typeof t.empty?t.empty():null!=t&&null!=t.constructor&&"function"==typeof t.constructor.empty?t.constructor.empty():p(t)?[]:v(t)?"":d(t)?{}:l(t)?function(){return arguments}():void 0}),St=C(function Cu(t,n){var r,e,u,i={};for(e in n)r=t[e],u=typeof r,i[e]="function"===u?r(n[e]):"object"===u?Cu(t[e],n[e]):n[e];return i}),Et=C(U("find",$,function(t,n){for(var r=0,e=n.length;e>r;){if(t(n[r]))return n[r];r+=1}})),kt=C(U("findIndex",H,function(t,n){for(var r=0,e=n.length;e>r;){if(t(n[r]))return r;r+=1}return-1})),Nt=C(U("findLast",X,function(t,n){for(var r=n.length-1;r>=0;){if(t(n[r]))return n[r];r-=1}})),It=C(U("findLastIndex",Y,function(t,n){for(var r=n.length-1;r>=0;){if(t(n[r]))return r;r-=1}return-1})),qt=C(W("forEach",function(t,n){for(var r=n.length,e=0;r>e;)t(n[e]),e+=1;return n})),Wt=P(function(t){for(var n=0,r=t.length,e={};r>n;)p(t[n])&&t[n].length&&(e[t[n][0]]=t[n][1]),n+=1;return e}),Pt=C(function(t,n){return t>n}),Ct=C(function(t,n){return t>=n}),Mt=C(a),Rt=C(function(t,n){return t in n}),Ut=C(function(t,n){return t===n?0!==t||1/t===1/n:t!==t&&n!==n}),Bt=P(f),Tt=M(function(t,n,r){return dt(Math.max(t.length,n.length,r.length),function(){return t.apply(this,arguments)?n.apply(this,arguments):r.apply(this,arguments)})}),Lt=Q(1),Ft=M(function(t,n,r){t=t<r.length&&t>=0?t:r.length;var e=E(r);return e.splice(t,0,n),e}),Dt=M(function(t,n,r){return t=t<r.length&&t>=0?t:r.length,i(i(E(r,0,t),n),E(r,t))}),Vt=C(W("intersperse",function(t,n){for(var r=[],e=0,u=n.length;u>e;)e===u-1?r.push(n[e]):r.push(n[e],t),e+=1;return r})),zt=C(function(t,n){return null!=n&&n.constructor===t||n instanceof t}),Kt=P(function(t){return p(t)?!0:t?"object"!=typeof t?!1:t instanceof String?!1:1===t.nodeType?!!t.length:0===t.length?!0:t.length>0?t.hasOwnProperty(0)&&t.hasOwnProperty(t.length-1):!1:!1}),_t=P(function(t){return null==t}),$t=function(){var t=!{toString:null}.propertyIsEnumerable("toString"),n=["constructor","valueOf","isPrototypeOf","toString","propertyIsEnumerable","hasOwnProperty","toLocaleString"],r=function(){return arguments.propertyIsEnumerable("length")}(),e=function(t,n){for(var r=0;r<t.length;){if(t[r]===n)return!0;r+=1}return!1};return P("function"!=typeof Object.keys||r?function(u){if(Object(u)!==u)return[];var i,o,c=[],s=r&&l(u);for(i in u)!a(i,u)||s&&"length"===i||(c[c.length]=i);if(t)for(o=n.length-1;o>=0;)i=n[o],a(i,u)&&!e(c,i)&&(c[c.length]=i),o-=1;return c}:function(t){return Object(t)!==t?[]:Object.keys(t)})}(),Ht=P(function(t){var n,r=[];for(n in t)r[r.length]=n;return r}),Xt=P(function(t){return null!=t&&zt(Number,t.length)?t.length:NaN}),Yt=C(function(t,n){return n>t}),Zt=C(function(t,n){return n>=t}),Gt=M(function(t,n,r){for(var e=0,u=r.length,i=[],o=[n];u>e;)o=t(o[0],r[e]),i[e]=o[1],e+=1;return[o[0],i]}),Jt=M(function(t,n,r){for(var e=r.length-1,u=[],i=[n];e>=0;)i=t(i[0],r[e]),u[e]=i[1],e-=1;return[i[0],u]}),Qt=C(function(t,n){return n.match(t)||[]}),tn=C(function(t,n){return h(t)?!h(n)||1>n?NaN:(t%n+n)%n:NaN}),nn=C(function(t,n){return n>t?n:t}),rn=M(function(t,n,r){return t(r)>t(n)?r:n}),en=M(function(t,n,r){var e,u={};for(e in n)a(e,n)&&(u[e]=a(e,r)?t(e,n[e],r[e]):n[e]);for(e in r)a(e,r)&&!a(e,u)&&(u[e]=r[e]);return u}),un=C(function(t,n){return t>n?n:t}),on=M(function(t,n,r){return t(r)<t(n)?r:n}),cn=C(function(t,n){return t%n}),sn=C(function(t,n){return t*n}),an=C(function(t,n){switch(t){case 0:return function(){return n.call(this)};case 1:return function(t){return n.call(this,t)};case 2:return function(t,r){return n.call(this,t,r)};case 3:return function(t,r,e){return n.call(this,t,r,e)};case 4:return function(t,r,e,u){return n.call(this,t,r,e,u)};case 5:return function(t,r,e,u,i){return n.call(this,t,r,e,u,i)};case 6:return function(t,r,e,u,i,o){return n.call(this,t,r,e,u,i,o)};case 7:return function(t,r,e,u,i,o,c){return n.call(this,t,r,e,u,i,o,c)};case 8:return function(t,r,e,u,i,o,c,s){return n.call(this,t,r,e,u,i,o,c,s)};case 9:return function(t,r,e,u,i,o,c,s,a){return n.call(this,t,r,e,u,i,o,c,s,a)};case 10:return function(t,r,e,u,i,o,c,s,a,f){return n.call(this,t,r,e,u,i,o,c,s,a,f)};default:throw new Error("First argument to nAry must be a non-negative integer no greater than ten")}}),fn=P(function(t){return-t}),ln=C(u(U("any",L,ut))),pn=P(function(t){return!t}),hn=C(function(t,n){var r=0>t?n.length+t:t;return v(n)?n.charAt(r):n[r]}),gn=P(function(t){return function(){return hn(t,arguments)}}),dn=C(function(t,n){var r={};return r[t]=n,r}),yn=P(w),mn=P(function(t){var r,e=!1;return n(t.length,function(){return e?r:(e=!0,r=t.apply(this,arguments))})}),vn=C(function(t,n){return t||n}),xn=function(){var t=function(n){return{value:n,map:function(r){return t(r(n))}}};return M(function(n,r,e){return n(function(n){return t(r(n))})(e).value})}(),bn=C(function(t,n){return[t,n]}),wn=C(function(t,n){for(var r=n,e=0;e<t.length;){if(null==r)return;r=r[t[e]],e+=1}return r}),jn=M(function(t,n,r){return mt(t,wn(n,r))}),On=M(function(t,n,r){return n.length>0&&t(wn(n,r))}),An=C(function(t,n){for(var r={},e=0;e<t.length;)t[e]in n&&(r[t[e]]=n[t[e]]),e+=1;return r}),Sn=C(function(t,n){for(var r={},e=0,u=t.length;u>e;){var i=t[e];r[i]=n[i],e+=1}return r}),En=C(function(t,n){var r={};for(var e in n)t(n[e],e,n)&&(r[e]=n[e]);return r}),kn=C(function(t,n){return i([t],n)}),Nn=C(function(t,n){return n[t]}),In=M(function(t,n,r){return null!=r&&a(n,r)?r[n]:t}),qn=M(function(t,n,r){return t(r[n])}),Wn=C(function(t,n){for(var r=t.length,e=[],u=0;r>u;)e[u]=n[t[u]],u+=1;return e}),Pn=C(function(t,n){if(!g(t)||!g(n))throw new TypeError("Both arguments to range must be numbers");for(var r=[],e=t;n>e;)r.push(e),e+=1;return r}),Cn=M(function(t,n,r){for(var e=r.length-1;e>=0;)n=t(n,r[e]),e-=1;return n}),Mn=P(S),Rn=M(function(t,n,r){return i(E(r,0,Math.min(t,r.length)),E(r,Math.min(r.length,t+n)))}),Un=M(function(t,n,r){return r.replace(t,n)}),Bn=P(function(t){return v(t)?t.split("").reverse().join(""):E(t).reverse()}),Tn=M(function(t,n,r){for(var e=0,u=r.length,i=[n];u>e;)n=t(n,r[e]),i[e+1]=n,e+=1;return i}),Ln=M(function(t,n,r){return xn(t,rt(n),r)}),Fn=M(W("slice",function(t,n,r){return Array.prototype.slice.call(r,t,n)})),Dn=C(function(t,n){return E(n).sort(t)}),Vn=C(function(t,n){return E(n).sort(function(n,r){var e=t(n),u=t(r);return u>e?-1:e>u?1:0})}),zn=C(function(t,n){return[Fn(0,t,n),Fn(t,Xt(n),n)]}),Kn=C(function(t,n){if(0>=t)throw new Error("First argument to splitEvery must be a positive integer");for(var r=[],e=0;e<n.length;)r.push(Fn(e,e+=t,n));return r}),_n=C(function(t,n){for(var r=0,e=n.length,u=[];e>r&&!t(n[r]);)u.push(n[r]),r+=1;return[u,E(n,r)]}),$n=C(function(t,n){return t-n}),Hn=W("tail",Fn(1,1/0)),Xn=C(U("take",G,function(t,n){return Fn(0,0>t?1/0:t,n)})),Yn=C(function(t,n){for(var r=n.length-1;r>=0&&t(n[r]);)r-=1;return E(n,r+1,1/0)}),Zn=C(U("takeWhile",J,function(t,n){for(var r=0,e=n.length;e>r&&t(n[r]);)r+=1;return E(n,0,r)})),Gn=C(function(t,n){return t(n),n}),Jn=C(function(t,n){var r,e=Number(n),u=0;if(0>e||isNaN(e))throw new RangeError("n must be a non-negative number");for(r=new Array(e);e>u;)r[u]=t(u),u+=1;return r}),Qn=P(function(t){var n=[];for(var r in t)a(r,t)&&(n[n.length]=[r,t[r]]);return n}),tr=P(function(t){var n=[];for(var r in t)n[n.length]=[r,t[r]];return n}),nr=P(function(t){for(var n=0,r=[];n<t.length;){for(var e=t[n],u=0;u<e.length;)"undefined"==typeof r[u]&&(r[u]=[]),r[u].push(e[u]),u+=1;n+=1}return r}),rr=function(){var t="	\n\f\r   ᠎             　\u2028\u2029\ufeff",n="​",r="function"==typeof String.prototype.trim;return P(r&&!t.trim()&&n.trim()?function(t){return t.trim()}:function(n){var r=new RegExp("^["+t+"]["+t+"]*"),e=new RegExp("["+t+"]["+t+"]*$");return n.replace(r,"").replace(e,"")})}(),er=P(function(t){return null===t?"Null":void 0===t?"Undefined":Object.prototype.toString.call(t).slice(8,-1)}),ur=P(function(t){return function(){return t(E(arguments))}}),ir=P(function(t){return an(1,t)}),or=C(function(t,n){return dt(t,function(){for(var r,e=1,u=n,i=0;t>=e&&"function"==typeof u;)r=e===t?arguments.length:i+u.length,u=u.apply(this,E(arguments,i,r)),e+=1,i=r;return u})}),cr=C(function(t,n){for(var r=t(n),e=[];r&&r.length;)e[e.length]=r[0],r=t(r[1]);return e}),sr=C(function(t,n){for(var r,e=0,u=n.length,i=[];u>e;)r=n[e],o(t,r,i)||(i[i.length]=r),e+=1;return i}),ar=M(function(t,n,r){return t(r)?r:n(r)}),fr=M(function(t,n,r){return tt(rt(n),t,r)}),lr=C(function(t,n){return dt(n.length,function(){for(var r=[],e=0;e<n.length;)r.push(n[e].call(this,arguments[e])),e+=1;return t.apply(this,r.concat(E(arguments,n.length)))})}),pr=P(function(t){for(var n=$t(t),r=n.length,e=[],u=0;r>u;)e[u]=t[n[u]],u+=1;return e}),hr=P(function(t){var n,r=[];for(n in t)r[r.length]=t[n];return r}),gr=function(){var t=function(t){return{value:t,map:function(){return this}}};return C(function(n,r){return n(t)(r).value})}(),dr=M(function(t,n,r){return t(r)?n(r):r}),yr=C(function(t,n){for(var r in t)if(a(r,t)&&!t[r](n[r]))return!1;return!0}),mr=C(function(t,n){return dt(t.length,function(){return n.apply(this,i([t],arguments))})}),vr=C(function(t,n){for(var r,e=0,u=t.length,i=n.length,o=[];u>e;){for(r=0;i>r;)o[o.length]=[t[e],n[r]],r+=1;e+=1}return o}),xr=C(function(t,n){for(var r=[],e=0,u=Math.min(t.length,n.length);u>e;)r[e]=[t[e],n[e]],e+=1;return r}),br=C(function(t,n){for(var r=0,e=t.length,u={};e>r;)u[t[r]]=n[r],r+=1;return u}),wr=M(function(t,n,r){for(var e=[],u=0,i=Math.min(n.length,r.length);i>u;)e[u]=t(n[u],r[u]),u+=1;return e}),jr=rt(!1),Or=rt(!0),Ar=function Mu(t,n,r){var u=function(e){for(var u=n.length,i=0;u>i;){if(t===n[i])return r[i];i+=1}n[i+1]=t,r[i+1]=e;for(var o in t)e[o]=Mu(t[o],n,r);return e};switch(er(t)){case"Object":return u({});case"Array":return u([]);case"Date":return new Date(t.valueOf());case"RegExp":return e(t);default:return t}},Sr=function(t){return C(function(r,e){return n(Math.max(0,r.length-e.length),function(){return r.apply(this,t(e,arguments))})})},Er=function(t,n){return Xn(t<n.length?n.length-t:0,n)},kr=function Ru(t,n,e,u){if(Ut(t,n))return!0;if(er(t)!==er(n))return!1;if(null==t||null==n)return!1;if("function"==typeof t.equals||"function"==typeof n.equals)return"function"==typeof t.equals&&t.equals(n)&&"function"==typeof n.equals&&n.equals(t);switch(er(t)){case"Arguments":case"Array":case"Object":break;case"Boolean":case"Number":case"String":if(typeof t!=typeof n||!Ut(t.valueOf(),n.valueOf()))return!1;break;case"Date":if(!Ut(t.valueOf(),n.valueOf()))return!1;break;case"Error":return t.name===n.name&&t.message===n.message;case"RegExp":if(t.source!==n.source||t.global!==n.global||t.ignoreCase!==n.ignoreCase||t.multiline!==n.multiline||t.sticky!==n.sticky||t.unicode!==n.unicode)return!1;break;case"Map":case"Set":if(!Ru(r(t.entries()),r(n.entries()),e,u))return!1;break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":break;case"ArrayBuffer":break;default:return!1}var i=$t(t);if(i.length!==$t(n).length)return!1;for(var o=e.length-1;o>=0;){if(e[o]===t)return u[o]===n;o-=1}for(e.push(t),u.push(n),o=i.length-1;o>=0;){var c=i[o];if(!a(c,n)||!Ru(n[c],t[c],e,u))return!1;o-=1}return e.pop(),u.pop(),!0},Nr=function(t){return function n(r){for(var e,u,i,o=[],c=0,s=r.length;s>c;){if(Kt(r[c]))for(e=t?n(r[c]):r[c],i=0,u=e.length;u>i;)o[o.length]=e[i],i+=1;else o[o.length]=r[c];c+=1}return o}},Ir=function(){function t(t,n,r){for(var e=0,u=r.length;u>e;){if(n=t["@@transducer/step"](n,r[e]),n&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e+=1}return t["@@transducer/result"](n)}function n(t,n,r){for(var e=r.next();!e.done;){if(n=t["@@transducer/step"](n,e.value),n&&n["@@transducer/reduced"]){n=n["@@transducer/value"];break}e=r.next()}return t["@@transducer/result"](n)}function r(t,n,r){return t["@@transducer/result"](r.reduce(ft(t["@@transducer/step"],t),n))}var e="undefined"!=typeof Symbol?Symbol.iterator:"@@iterator";return function(u,i,o){if("function"==typeof u&&(u=I(u)),Kt(o))return t(u,i,o);if("function"==typeof o.reduce)return r(u,i,o);if(null!=o[e])return n(u,i,o[e]());if("function"==typeof o.next)return n(u,i,o);throw new TypeError("reduce: list must be array or iterable")}}(),qr=function(){function t(t,n){this.f=t,this.retained=[],this.xf=n}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){return this.retained=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){return this.f(n)?this.retain(t,n):this.flush(t,n)},t.prototype.flush=function(t,n){return t=Ir(this.xf["@@transducer/step"],t,this.retained),this.retained=[],this.xf["@@transducer/step"](t,n)},t.prototype.retain=function(t,n){return this.retained.push(n),t},C(function(n,r){return new t(n,r)})}(),Wr=function(){function t(t,n){this.xf=n,this.f=t,this.inputs={}}return t.prototype["@@transducer/init"]=N.init,t.prototype["@@transducer/result"]=function(t){var n;for(n in this.inputs)if(a(n,this.inputs)&&(t=this.xf["@@transducer/step"](t,this.inputs[n]),t["@@transducer/reduced"])){t=t["@@transducer/value"];break}return this.inputs=null,this.xf["@@transducer/result"](t)},t.prototype["@@transducer/step"]=function(t,n){var r=this.f(n);return this.inputs[r]=this.inputs[r]||[r,[]],this.inputs[r][1]=ot(n,this.inputs[r][1]),t},C(function(n,r){return new t(n,r)})}(),Pr=P(function(t){return dt(t.length,function(){var n=0,r=arguments[0],e=arguments[arguments.length-1],u=E(arguments);return u[0]=function(){var t=r.apply(this,i(arguments,[n,e]));return n+=1,t},t.apply(this,u)})}),Cr=P(function(t){return an(2,t)}),Mr=P(function(t){return null!=t&&"function"==typeof t.clone?t.clone():Ar(t,[],[])}),Rr=P(function(t){return dt(t.length,t)}),Ur=C(U("drop",D,function(t,n){return Fn(Math.max(0,t),1/0,n)})),Br=C(U("dropLast",V,Er)),Tr=C(U("dropLastWhile",qr,B)),Lr=C(function(t,n){return kr(t,n,[],[])}),Fr=C(U("filter",_,function(t,n){return d(n)?Ir(function(r,e){return t(n[e])&&(r[e]=n[e]),r},{},$t(n)):c(t,n)})),Dr=P(Nr(!0)),Vr=P(function(t){return Rr(function(n,r){var e=E(arguments);return e[0]=r,e[1]=n,t.apply(this,e)})}),zr=C(U("groupBy",Wr,function(t,n){return Ir(function(n,r){var e=t(r);return n[e]=ot(r,n[e]||(n[e]=[])),n},{},n)})),Kr=hn(0),_r=C(function(t,n){return Ir(function(n,r){var e=t(r);return n[e]=r,n},{},n)}),$r=Fn(0,-1),Hr=M(function(t,n,r){for(var e=[],u=0;u<n.length;)o(t,n[u],r)&&(e[e.length]=n[u]),u+=1;return sr(t,e)}),Xr=P(function(t){for(var n=$t(t),r=n.length,e=0,u={};r>e;){var i=n[e],o=t[i],c=a(o,u)?u[o]:u[o]=[];c[c.length]=i,e+=1}return u}),Yr=P(function(t){for(var n=$t(t),r=n.length,e=0,u={};r>e;){var i=n[e];u[t[i]]=i,e+=1}return u}),Zr=P(function(t){return null!=t&&Lr(t,At(t))}),Gr=hn(-1),Jr=C(function(t,n){if("function"!=typeof n.lastIndexOf||p(n)){for(var r=n.length-1;r>=0;){if(Lr(n[r],t))return r;r-=1}return-1}return n.lastIndexOf(t)}),Qr=C(U("map",Z,function(t,n){switch(Object.prototype.toString.call(n)){case"[object Function]":return dt(n.length,function(){return t.call(this,n.apply(this,arguments))});case"[object Object]":return Ir(function(r,e){return r[e]=t(n[e]),r},{},$t(n));default:return b(t,n)}})),te=C(function(t,n){return Ir(function(r,e){return r[e]=t(n[e],e,n),r},{},$t(n))}),ne=M(function(t,n,r){return en(function(n,r,e){return t(r,e)},n,r)}),re=Sr(i),ee=Sr(Vr(i)),ue=C(function(t,n){return Ir(function(n,r){var e=n[t(r)?0:1];return e[e.length]=r,n},[[],[]],n)}),ie=M(function(t,n,r){return Lr(wn(t,r),n)}),oe=C(function(t,n){return Qr(Nn(t),n)}),ce=lr(b,[Sn,Bt]),se=M(function(t,n,r){return qn(Lr(n),t,r)}),ae=M(function(t,n,r){return qn(zt(t),n,r)}),fe=M(Ir),le=C(function(t,n){return Fr(u(t),n)}),pe=C(function(t,n){return Jn(rt(t),n)}),he=fe(Q,0),ge=C(function(t,n){return Ur(t>=0?n.length-t:0,n)}),de=dt(4,function(t,n,r,e){return Ir(t("function"==typeof n?I(n):n),r,e)}),ye=M(function(t,n,r){return sr(t,i(n,r))}),me=C(function(t,n){return yr(Qr(Lr,t),n)}),ve=function(){var t=function(t){return{"@@transducer/init":N.init,"@@transducer/result":function(n){return t["@@transducer/result"](n)},"@@transducer/step":function(n,r){var e=t["@@transducer/step"](n,r);return e["@@transducer/reduced"]?s(e):e}}};return function(n){var r=t(n);return{"@@transducer/init":N.init,"@@transducer/result":function(t){return r["@@transducer/result"](t)},"@@transducer/step":function(t,n){return Kt(n)?Ir(r,t,n):Ir(r,t,[n])}}}}(),xe=function(t,n,r){var e,u;if("function"==typeof t.indexOf)switch(typeof n){case"number":if(0===n){for(e=1/n;r<t.length;){if(u=t[r],0===u&&1/u===e)return r;r+=1}return-1}if(n!==n){for(;r<t.length;){if(u=t[r],"number"==typeof u&&u!==u)return r;r+=1}return-1}return t.indexOf(n,r);case"string":case"boolean":case"function":case"undefined":return t.indexOf(n,r);case"object":if(null===n)return t.indexOf(n,r)}for(;r<t.length;){if(Lr(t[r],n))return r;r+=1}return-1},be=C(function(t,n){return Qr(t,ve(n))}),we=P(function(t){return dt(fe(nn,0,oe("length",t)),function(){for(var n=0,r=t.length;r>n;){if(!t[n].apply(this,arguments))return!1;n+=1}return!0})}),je=P(function(t){for(var n=t.length,r=0;n>r;){if(xe(t,t[r],r+1)>=0)return!1;r+=1}return!0}),Oe=P(function(t){return dt(fe(nn,0,oe("length",t)),function(){for(var n=0,r=t.length;r>n;){if(t[n].apply(this,arguments))return!0;n+=1}return!1})}),Ae=C(function(t,n){return"function"==typeof t.ap?t.ap(n):"function"==typeof t?dt(Math.max(t.length,n.length),function(){return t.apply(this,arguments)(n.apply(this,arguments))}):Ir(function(t,r){return i(t,Qr(r,n))},[],t)}),Se=Rr(function(t){return t.apply(this,E(arguments,1))}),Ee=C(U("chain",be,function(t,n){return"function"==typeof n?function(){return n.call(this,t.apply(this,arguments)).apply(this,arguments)}:Nr(!1)(Qr(t,n))})),ke=M(function(t,n,r){function e(n,r){return Ae(Qr(kn,t(r)),n)}return Cn(e,n([]),r)}),Ne=C(function(t,n){if(t>10)throw new Error("Constructor with greater than ten arguments");return 0===t?function(){return new n}:Rr(an(t,function(t,r,e,u,i,o,c,s,a,f){switch(arguments.length){case 1:return new n(t);case 2:return new n(t,r);case 3:return new n(t,r,e);case 4:return new n(t,r,e,u);case 5:return new n(t,r,e,u,i);case 6:return new n(t,r,e,u,i,o);case 7:return new n(t,r,e,u,i,o,c);case 8:return new n(t,r,e,u,i,o,c,s);case 9:return new n(t,r,e,u,i,o,c,s,a);case 10:return new n(t,r,e,u,i,o,c,s,a,f)}}))}),Ie=C(function(t,n){return dt(Math.max.apply(Math,oe("length",n)),function(){var r=arguments,e=this;return t.apply(e,b(function(t){return t.apply(e,r)},n))});
  }),qe=C(U("dropRepeatsWith",z,function(t,n){var r=[],e=1,u=n.length;if(0!==u)for(r[0]=n[0];u>e;)t(Gr(r),n[e])||(r[r.length]=n[e]),e+=1;return r})),We=M(function(t,n,r){return Lr(t(n),t(r))}),Pe=M(function(t,n,r){return Lr(n[t],r[t])}),Ce=C(function(t,n){return"function"!=typeof n.indexOf||p(n)?xe(n,t,0):n.indexOf(t)}),Me=P(function(n){return function(){return Qr(ct(t,arguments),n)}}),Re=C(function(t,n){return function(r){return function(e){return Qr(function(t){return n(t,e)},r(t(e)))}}}),Ue=P(function(t){return Re(hn(t),fr(t))}),Be=P(function(t){return Re(wn(t),at(t))}),Te=P(function(t){return Re(Nn(t),st(t))}),Le=C(function(t,n){var r=dt(t,n);return dt(t,function(){return Ir(Ae,Qr(r,arguments[0]),E(arguments,1))})}),Fe=P(function(t){return he(t)/t.length}),De=P(function(t){var n=t.length;if(0===n)return NaN;var r=2-n%2,e=(n-r)/2;return Fe(E(t).sort(function(t,n){return n>t?-1:t>n?1:0}).slice(e,e+r))}),Ve=ne(function(t,n){return n}),ze=P(function(t){return fe(Ve,{},t)}),Ke=function(){if(0===arguments.length)throw new Error("pipe requires at least one argument");return n(arguments[0].length,fe(j,arguments[0],Hn(arguments)))},_e=function(){if(0===arguments.length)throw new Error("pipeP requires at least one argument");return n(arguments[0].length,fe(O,arguments[0],Hn(arguments)))},$e=fe(sn,1),He=C(function(t,n){return"function"==typeof n.sequence?n.sequence(t):Cn(function(t,n){return Ae(Qr(kn,n),t)},t([]),n)}),Xe=M(function(t,n,r){return He(t,Qr(n,r))}),Ye=Ee(f),Ze=function(t,n){return xe(n,t,0)>=0},Ge=function(){var t={"@@transducer/init":Array,"@@transducer/step":function(t,n){return i(t,[n])},"@@transducer/result":f},n={"@@transducer/init":String,"@@transducer/step":function(t,n){return t+n},"@@transducer/result":f},r={"@@transducer/init":Object,"@@transducer/step":function(t,n){return Ve(t,Kt(n)?dn(n[0],n[1]):n)},"@@transducer/result":f};return function(e){if(x(e))return e;if(Kt(e))return t;if("string"==typeof e)return n;if("object"==typeof e)return r;throw new Error("Cannot create transformer for "+e)}}(),Je=function Uu(t,n){var r=function(r){var e=n.concat([t]);return Ze(r,e)?"<Circular>":Uu(r,e)},e=function(t,n){return b(function(n){return A(n)+": "+r(t[n])},n.slice().sort())};switch(Object.prototype.toString.call(t)){case"[object Arguments]":return"(function() { return arguments; }("+b(r,t).join(", ")+"))";case"[object Array]":return"["+b(r,t).concat(e(t,le(function(t){return/^\d+$/.test(t)},$t(t)))).join(", ")+"]";case"[object Boolean]":return"object"==typeof t?"new Boolean("+r(t.valueOf())+")":t.toString();case"[object Date]":return"new Date("+(isNaN(t.valueOf())?r(NaN):A(k(t)))+")";case"[object Null]":return"null";case"[object Number]":return"object"==typeof t?"new Number("+r(t.valueOf())+")":1/t===-(1/0)?"-0":t.toString(10);case"[object String]":return"object"==typeof t?"new String("+r(t.valueOf())+")":A(t);case"[object Undefined]":return"undefined";default:if("function"==typeof t.toString){var u=t.toString();if("[object Object]"!==u)return u}return"{"+e(t,$t(t)).join(", ")+"}"}},Qe=ke(Bt),tu=function(){if(0===arguments.length)throw new Error("compose requires at least one argument");return Ke.apply(this,Bn(arguments))},nu=function(){return tu.apply(this,kn(Bt,Qr(Ee,arguments)))},ru=function(){if(0===arguments.length)throw new Error("composeP requires at least one argument");return _e.apply(this,Bn(arguments))},eu=P(function(t){return Ne(t.length,t)}),uu=C(Ze),iu=C(function(t,n){for(var r=[],e=0,u=t.length;u>e;)Ze(t[e],n)||Ze(t[e],r)||(r[r.length]=t[e]),e+=1;return r}),ou=P(U("dropRepeats",z(Lr),qe(Lr))),cu=M(function(t,n,r){return x(t)?Ir(n(t),t["@@transducer/init"](),r):Ir(n(Ge(t)),t,r)}),su=P(function(t){return Le(t.length,t)}),au=C(function(t,n){var r={};for(var e in n)Ze(e,t)||(r[e]=n[e]);return r}),fu=function(){return nu.apply(this,Bn(arguments))},lu=P(function(t){return Je(t,[])}),pu=C("undefined"==typeof Set?function(t,n){for(var r,e,u=0,i=[],o=[];u<n.length;)e=n[u],r=t(e),Ze(r,i)||(o.push(e),i.push(r)),u+=1;return o}:function(t,n){for(var r,e,u,i=new Set,o=[],c=0,s=[],a=!1,f=!1,l=0;l<n.length;){switch(e=n[l],r=t(e),typeof r){case"number":if(0===r&&!f&&1/r===-(1/0)){f=!0,s.push(e);break}case"string":case"boolean":case"function":case"undefined":i.add(r),u=i.size,u>c&&(s.push(e),c=u);break;case"object":if(null===r){a||(a=!0,s.push(null));break}default:Ze(r,o)||(o.push(r),s.push(e))}l+=1}return s}),hu=C(function(t,n){return le(Vr(Ze)(t),n)}),gu=su(pn),du=C(function(t,n){return dt(t+1,function(){var r=arguments[t];if(null!=r&&zt(Function,r[n]))return r[n].apply(r,E(arguments,0,t));throw new TypeError(lu(r)+' does not have a method named "'+n+'"')})}),yu=du(1,"join"),mu=P(function(t){var r={};return n(t.length,function(){var n=lu(arguments);return a(n,r)||(r[n]=t.apply(this,arguments)),r[n]})}),vu=du(1,"split"),xu=C(function(t,n){if(!m(t))throw new TypeError("‘test’ requires a value of type RegExp as its first argument; received "+lu(t));return e(t).test(n)}),bu=du(0,"toLowerCase"),wu=du(0,"toUpperCase"),ju=pu(Bt),Ou=Vr(du(1,"concat")),Au=C(function(t,n){return ju(c(Vr(Ze)(t),n))}),Su=C(function(t,n){return Ou(iu(t,n),iu(n,t))}),Eu=M(function(t,n,r){return Ou(vt(t,n,r),vt(t,r,n))}),ku=C(tu(ju,i)),Nu={F:jr,T:Or,__:t,add:Q,addIndex:Pr,adjust:tt,all:nt,allPass:we,allUniq:je,always:rt,and:et,any:ut,anyPass:Oe,ap:Ae,aperture:it,append:ot,apply:ct,assoc:st,assocPath:at,binary:Cr,bind:ft,both:lt,call:Se,chain:Ee,clone:Mr,commute:Qe,commuteMap:ke,comparator:pt,complement:gu,compose:tu,composeK:nu,composeP:ru,concat:Ou,cond:ht,construct:eu,constructN:Ne,contains:uu,converge:Ie,countBy:gt,curry:Rr,curryN:dt,dec:yt,defaultTo:mt,difference:iu,differenceWith:vt,dissoc:xt,dissocPath:bt,divide:wt,drop:Ur,dropLast:Br,dropLastWhile:Tr,dropRepeats:ou,dropRepeatsWith:qe,dropWhile:jt,either:Ot,empty:At,eqBy:We,eqProps:Pe,equals:Lr,evolve:St,filter:Fr,find:Et,findIndex:kt,findLast:Nt,findLastIndex:It,flatten:Dr,flip:Vr,forEach:qt,fromPairs:Wt,groupBy:zr,gt:Pt,gte:Ct,has:Mt,hasIn:Rt,head:Kr,identical:Ut,identity:Bt,ifElse:Tt,inc:Lt,indexBy:_r,indexOf:Ce,init:$r,insert:Ft,insertAll:Dt,intersection:Au,intersectionWith:Hr,intersperse:Vt,into:cu,invert:Xr,invertObj:Yr,invoker:du,is:zt,isArrayLike:Kt,isEmpty:Zr,isNil:_t,join:yu,juxt:Me,keys:$t,keysIn:Ht,last:Gr,lastIndexOf:Jr,length:Xt,lens:Re,lensIndex:Ue,lensPath:Be,lensProp:Te,lift:su,liftN:Le,lt:Yt,lte:Zt,map:Qr,mapAccum:Gt,mapAccumRight:Jt,mapObjIndexed:te,match:Qt,mathMod:tn,max:nn,maxBy:rn,mean:Fe,median:De,memoize:mu,merge:Ve,mergeAll:ze,mergeWith:ne,mergeWithKey:en,min:un,minBy:on,modulo:cn,multiply:sn,nAry:an,negate:fn,none:ln,not:pn,nth:hn,nthArg:gn,objOf:dn,of:yn,omit:au,once:mn,or:vn,over:xn,pair:bn,partial:re,partialRight:ee,partition:ue,path:wn,pathEq:ie,pathOr:jn,pathSatisfies:On,pick:An,pickAll:Sn,pickBy:En,pipe:Ke,pipeK:fu,pipeP:_e,pluck:oe,prepend:kn,product:$e,project:ce,prop:Nn,propEq:se,propIs:ae,propOr:In,propSatisfies:qn,props:Wn,range:Pn,reduce:fe,reduceRight:Cn,reduced:Mn,reject:le,remove:Rn,repeat:pe,replace:Un,reverse:Bn,scan:Tn,sequence:He,set:Ln,slice:Fn,sort:Dn,sortBy:Vn,split:vu,splitAt:zn,splitEvery:Kn,splitWhen:_n,subtract:$n,sum:he,symmetricDifference:Su,symmetricDifferenceWith:Eu,tail:Hn,take:Xn,takeLast:ge,takeLastWhile:Yn,takeWhile:Zn,tap:Gn,test:xu,times:Jn,toLower:bu,toPairs:Qn,toPairsIn:tr,toString:lu,toUpper:wu,transduce:de,transpose:nr,traverse:Xe,trim:rr,type:er,unapply:ur,unary:ir,uncurryN:or,unfold:cr,union:ku,unionWith:ye,uniq:ju,uniqBy:pu,uniqWith:sr,unless:ar,unnest:Ye,update:fr,useWith:lr,values:pr,valuesIn:hr,view:gr,when:dr,where:yr,whereEq:me,without:hu,wrap:mr,xprod:vr,zip:xr,zipObj:br,zipWith:wr};"object"==typeof exports?module.exports=Nu:"function"==typeof define&&define.amd?define(function(){return Nu}):this.R=Nu}).call(this);
  /* END -- Require ramda.min.js */

  // create hash to store backups of window methods (collisions) that will be overwritten
  window.W = {};

  if (backup === undefined) {
    backup = true;
  }

  subset = subset || 'default';
  subset = subset.toLowerCase();

  const fnsHash = {
    all: [
      "always", "add", "addIndex", "ap",
      "call", "compose", "concat", "converge", "curry",
      "divide",
      "equals",
      "F", "filter", "forEach", "flip",
      "gt", "gte",
      "head",
      "identity", "ifElse", "isNil", "is", "isEmpty",
      "join",
      "lt", "lte", "length", "lensIndex",
      "map", "multiply",
      "not",
      "of", "omit", "over",
      "path", "pipe", "prepend", "prop",
      "T", "toUpper", "trim",
      "range", "reduce", "reduced",
      "split", "sum",
      "times", "type", "toString",
      "values", "view",
      "when"
    ],
    math: [
      "add", "subtract", "multiply", "divide",
      "gte", "gt", "lte", "lt"
    ],
    lenses: [
      "lens", "lensPath", "lensIndex",
      "view", "set", "set"
    ],
    default: [
      "identity", "curry", "compose", "pipe"
    ]
  };

  const fnNames = fnsHash[subset];
  window._ = R.__;
  
  return fnNames.map(function(fnName) {
    var result = {};

    if (R[fnName] === undefined) {
      result[fnName] = false;
      return result;
    }

    try {
      if (window[fnName]) {
        window.W[fnName] = backup && window[fnName];
      }

      window[fnName] = R[fnName];
      result[fnName] = true;
      return result;
    }
    catch (err) {
      result[fnName] = false;
      return result;
    }
  });
}

// useful when debugging as clog(identity)
// ex. 1
// compose(
//   clog(identity), // logs "2468"
//   ifElse(isArray,
//     join(''),
//     always(false))
// )([2, 4, 6, 8])
//
// ex. 2
// compose(
//   ifElse(isArray,
//     join(''),
//     always(false))
//   clog(isArray), // logs true
// )([2, 4, 6, 8])
function clog(fn) {
  return function(x) {
    console.log(fn(x));
    return x;
  };
}

// filters
function isNumber(x) {
  return is(Number, x);
}

function isString(x) {
  return is(String, x);
}

function isObject(x) {
  return is(Object, x);
}

function isArray(x) {
  return is(Array, x);
}

function isFunction(x) {
  return is(Function, x);
}

function isEven(x) {
  return pipe(flip(modulo)(2), equals(0))(x);
}

function isOdd(x) {
  return pipe(isEven, not)(x);
}

// returns a new array with the predicate values removed
// semantically convenient
function filterOut(predicate) {
  return function(xs) {
    return filter(pipe(predicate, not), xs);
  };
}

// filters out values and leaves null in their place
// the length of the array remains the same
function filterOutGap(predicate) {
  return function(xs) {
    return map(ifElse(predicate,
      always(null),
      identity)
    )(xs);
  };
}

// see filterOutGap
function filterGap(predicate) {
  return function(xs) {
    return filterOutGap(pipe(predicate, not))(xs);
  };
}

// converts an array to an object where the indices
// are the keys. This may already exist in Ramda
function rToO(r) {
  function buildO(a, b, i) {
    a[i] = b;
    return a;
  }   

  return reduceX(buildO, {})(r);
}

// converts an object to an array. 
// Ramda has a function, values(..) that has the same functionality
function oToR(o) {
  return map(
    prop(_, o)
  )(keys(o));
}

// useful for error-handling
// example:
//   tryCatch(
//     split(''), splitNum('')
//   )(13) // => [1, 3]
// split('')(13) will error-out; splitNum('') will be called instead
function tryCatch(fn0, fn1) {
  return function(x) {
    try {
      return fn0(x);
    }
    catch (err) {
      return fn1(x);
    }
  };
}

// see split documentation
function splitNum(seperator, x) {
  return pipe(
    String, split(separator), map(Number)
  )(x);
}

// returns the constructor function of x
function typeCtor(x) {
  const ctorHash = {
    "String": String,
    "Number": Number,
    "Object": Object,
    "Array": Array,
    "Function": Function
  };

  return ctorHash[type(x)];
}

// makes a copy of an array
function copy(r) {
  return converge(
    slice,
    [always(0), length, identity]
  )(r);
}

// takes a collection and breaks pulverizes it into atomic pieces
// example:
//   feed([10, 21, 199, {fname: 'William'}, 'a', 'b', 'schoolbus'])
//     => [1, 0, 2, 1, 1, 9, 9, {fname: 'William'}, 'a', 'b', 's', 'c', 'h', 'o', 'o', 'l', 'b', 'u', 's']
//
// const xs = [10, 21, 409];
// sum(xs);       // => 440
// sum(feed(xs)); // => 17
//
// NOTE: Objects, Arrays, and Functions are not copied
function feed(xs) {
  const mapIndexed = addIndex(map);
  
  function cookifyNumStr(x) {
    return converge(
      ((a, b) => { return {type: a, val: b}; }),
      [typeCtor, tryCatch(split(''), splitNum)]
    )(x);
  }
  
  function varPipe(xs) {
    xs = copy(xs);
    
    const queue = filter(anyPass([isObject, isArray, isFunction]), xs);
    let xsCp = filterOutGap(anyPass([isObject, isArray, isFunction]), xs);

    let cookified = map(
      ifElse(isNil,
        always(queue.shift()),
        cookifyNumStr
    ))(xsCp);
    
    function isCookie(x) {
      return has('val', x);
    }
    
    let result = map(ifElse(isCookie,
        prop('val'),
        identity)
    )(cookified);
    
    return flatten(result);
  }
  
  return varPipe(xs);
}

// semantic convenience function
// TODO: curry properly
function reduceUntil(iterator, cond, v0, xs) {
  return reduce(
    pipe(iterator, when(cond, reduced)),
    v0
  )(xs);
}

// returns an array of the phonetic alphabet, lowercase
// example:
//
//   const FULL_ALPHABET = ap([identity, toUpper], alphabet());
//     => ["a", "b", "c" ...  "x", "y", "z", "A", "B", "C" ... "X", "Y", "Z"]
// 
function alphabet() {
  return map(String.fromCharCode, range(97, 97 + 26));
}

// maps over two collections at once
// function parallelMap(iterator) {
//   return function(xs0, xs1) {
//     return ap(
//       [map(_, xs0), map(_, xs1)],
//       [iterator]
//     );
//   };
// }
function parallelMap(iterator) {
  return function() {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments);
    var maps = map(xs => map(_, xs), args);

    return ap(
      maps,
      [iterator]
    );
  };
}

// reduces two collections
function parallelReduce(reducer, init) {
  return function() {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments);
    var reduces = map(xs => reduce(_, init, xs), args);

    return ap(
      reduces,
      [reducer]
    );
  };
}

// filters two collections
function parallelFilter(predicate) {
  return function() {
    var slice = Array.prototype.slice;
    var args = slice.call(arguments);
    var filters = map(xs => filter(_, xs), args);
    
    return ap(
      filters,
      [predicate]
    );
  };
}

// returns a mask indicating which predicates the value passes
// ex. 1
// passesPredicates([isString, isArray, isObject])('test string')
//   => [true, false, false]
//
// ex. 2
// const gte6 = flip(gte)(6);
// passesPredicates([flip(gte)(6), isEven])(8)
//  => [true, true]
function passesPredicates(predicates) {
  return function(a) {
    return map(
      call(_, a)
    )(predicates);
  }
}

// returns a randomly generated index within the bounds of the supplied array
function randomIdx(r) {
  return compose(
    Math.floor,
    multiply(Math.random()),
    length
  )(r);
}

// returns a randomly selected item from the supplied array
function randomElement(r) {
  return r[randomIdx(r)];
}

// convenience math fn when composing
function round(x) {
  return Math.round(x);
}

// dilutes an array based off a desired concentration
function diluteArray(array, concentration) {
  const numKeep = compose(round, multiply(concentration), length)(array);
  
  const length0 = length(array);
  const numIdxs = range(0, numKeep);
  
  const idxMap = map(
    compose(round, multiply(length0 / numKeep))
  )(numIdxs);
  
  const indexMap = (xs, indexMap) => map(prop(_, xs), indexMap);
  
  return indexMap(array, idxMap);
}

// trim end
function shortestListTrimEnd(l0, l1) {
  const lengthShortest = (l0, l1) => converge(
    min,
    [pipe(head, length),
     pipe(last, length)]
  )([l0, l1]);
  
  const takeShortest = (l0, l1) => compose(
    take(_),
    lengthShortest
  )(l0, l1);
  
  const finale = (l0, l1) => {
    const ts = takeShortest(l0, l1);
    return [ts(l0), ts(l1)];
  };
  
  return finale(l0, l1);
}

// trim start
function shortestListTrimStart(l0, l1) {
  const lengthShortest = (l0, l1) => converge(
    min,
    [pipe(head, length),
     pipe(last, length)]
  )([l0, l1]);
  
  const takeShortest = (l0, l1) => compose(
    takeLast(_),
    lengthShortest
  )(l0, l1);
  
  const finale = (l0, l1) => {
    const ts = takeShortest(l0, l1);
    return [ts(l0), ts(l1)];
  };
  
  return finale(l0, l1);
}

// when given two lists of variable lengths, this function returns
// two arrays where the longer one's length has been reduced to match
// the shorter one's length
function shortestListInterpolate(l0, l1) {
  const longer = longestArray(l0, l1);
  const shorter = shortestArray(l0, l1);
  
  const concentration = shorter.length / longer.length;
  return [
      diluteArray(longer, concentration),
      shorter    
    ];
}

// returns the array with the most amount of elements
function longestArray(...arrays) {
  const toLengths = (rOfRs) => map(length, rOfRs);
  const maxs = r => Math.max.apply(this, r);
  
  const returnMax = (rOfRs) => {
    const el = compose(maxs, toLengths)(rOfRs);
    const i = compose(indexOf(el), toLengths)(rOfRs);
    return rOfRs[i];
  };

  return returnMax(arrays);
}

// returns the array with the least amount of elements
function shortestArray(...arrays) {
  const toLengths = (rOfRs) => map(length, rOfRs);
  const mins = r => Math.min.apply(this, r);
  
  const returnMin = (rOfRs) => {
    const el = compose(mins, toLengths)(rOfRs);
    const i = compose(indexOf(el), toLengths)(rOfRs);
    return rOfRs[i];
  };

  return returnMin(arrays);
}

// applies the result of calling each detourFn
// e.g. destinationFn = a => b => c => a * b * c // notice the arity of 3
//      detourFns = [add(1), subtract(_, 1)]
//      a = 17          (18, 16)(17)
//
//      add(1)(17)         => 18 assigned to first open parameter
//      subtract(_, 1)(17) => 16 assigned to second open parameter
//      original value        17 reserved for the last open parameter
//                  
// arity of destinationFn should equal detourFns.length + 1
//
function detour(detourFns, destinationFn) {
  return function(a) {
    return converge(
      destinationFn,
      [...detourFns, identity]
    )(a);
  };
}

// fork + converge
// arity of convergefn should match length of forkfns
function forkverge(convergefn, forkfns) {
  return function(...args) {
    const callfn = rOfArgs => (fn, i) => fn(rOfArgs[i]);
    const applyResults = pipe(
      mapX(callfn(args)),
      apply(convergefn)
    );
    return applyResults(forkfns);
  };
}

// wraps arbitrary number of args in an array
function wrap(...args) {
  return args;
}

// threads x arguments through x functions
// fns.length should equal args.length
function threadArgs(...fns) {
  return function(...args) {
    
    const callEach = (tuple) => {
      const fn = tuple[0];
      const arg = tuple[1];
      return fn(arg);
    };
    
    return compose(
      map(callEach),
      zip
    )(fns, args)
  };
}

// clamp generator
function createClamp(range) {
  return function(x) {
    if (x > range[1]) { return range[1]; }
    if (x < range[0]) { return range[0]; }
    return x;
  };
}

// creates a function that maps values from a domain to a desired range
function remap(domain, range) {
  return function(x) {
    const offset = x - domain[0];
    const domainSz = domain[1] - domain[0];
    const rangeSz = range[1] - range[0];
    const scaleFactor = rangeSz / domainSz;

    return offset * scaleFactor + range[0];
  };
}