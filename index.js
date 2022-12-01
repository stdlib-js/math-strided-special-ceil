// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).ceil=n()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var n,e=Object.defineProperty,r=Object.prototype,i=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,a=r.__lookupGetter__,f=r.__lookupSetter__;n=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,n,e){var l,c,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(t,n)||f.call(t,n)?(l=t.__proto__,t.__proto__=r,delete t[n],t[n]=e.value,t.__proto__=l):t[n]=e.value),s="get"in e,p="set"in e,c&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(t,n,e.get),p&&u&&u.call(t,n,e.set),t};var l=n;function c(t,n,e){l(t,n,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=Math.floor;function p(t){return s(t)===t}var g=4294967295;function m(t){return"number"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function h(t,n){return null!=t&&b.call(t,n)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(t){var n,e,r;if(null==t)return v.call(t);e=t[w],n=h(t,w);try{t[w]=void 0}catch(n){return v.call(t)}return r=v.call(t),n?t[w]=e:delete t[w],r}:function(t){return v.call(t)},E=Number,O=E.prototype.toString;var T=d();function _(t){return"object"==typeof t&&(t instanceof E||(T?function(t){try{return O.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function x(t){return m(t)||_(t)}c(x,"isPrimitive",m),c(x,"isObject",_);var S=Number.POSITIVE_INFINITY,I=E.NEGATIVE_INFINITY;function P(t){return t<S&&t>I&&p(t)}function V(t){return m(t)&&P(t)}function F(t){return _(t)&&P(t.valueOf())}function k(t){return V(t)||F(t)}function A(t){return V(t)&&t>=0}function B(t){return F(t)&&t.valueOf()>=0}function N(t){return A(t)||B(t)}function M(t){return Object.keys(Object(t))}c(k,"isPrimitive",V),c(k,"isObject",F),c(N,"isPrimitive",A),c(N,"isObject",B);var R,L=void 0!==Object.keys;function G(t){return"[object Arguments]"===j(t)}R=function(){return G(arguments)}();var U=R;function Y(t){return"string"==typeof t}var C=String.prototype.valueOf;var X=d();function H(t){return"object"==typeof t&&(t instanceof String||(X?function(t){try{return C.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function W(t){return Y(t)||H(t)}function q(t){return t!=t}function D(t){return m(t)&&q(t)}function z(t){return _(t)&&q(t.valueOf())}function J(t){return D(t)||z(t)}c(W,"isPrimitive",Y),c(W,"isObject",H),c(J,"isPrimitive",D),c(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(t,n){var e;return null!=t&&(!(e=K.call(t,n))&&Q&&W(t)?!D(n=+n)&&V(n)&&n>=0&&n<t.length:e)}var $=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};var tt=U?G:function(t){return null!==t&&"object"==typeof t&&!$(t)&&"number"==typeof t.length&&p(t.length)&&t.length>=0&&t.length<=4294967295&&h(t,"callee")&&!Z(t,"callee")},nt=Array.prototype.slice;function et(t){return null!==t&&"object"==typeof t}c(et,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!$(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(et));var rt=Z((function(){}),"prototype"),it=!Z({toString:null},"toString");function ot(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&p(t.length)&&t.length>=0&&t.length<=9007199254740991}function ut(t,n,e){var r,i;if(!ot(t)&&!Y(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(r=t.length))return-1;if(3===arguments.length){if(!V(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(J(n)){for(;i<r;i++)if(J(t[i]))return i}else for(;i<r;i++)if(t[i]===n)return i;return-1}var at=/./;function ft(t){return"boolean"==typeof t}var lt=Boolean.prototype.toString;var ct=d();function st(t){return"object"==typeof t&&(t instanceof Boolean||(ct?function(t){try{return lt.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function pt(t){return ft(t)||st(t)}function gt(){return new Function("return this;")()}c(pt,"isPrimitive",ft),c(pt,"isObject",st);var mt="object"==typeof self?self:null,yt="object"==typeof window?window:null,dt="object"==typeof global?global:null;var vt=function(t){if(arguments.length){if(!ft(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return gt()}if(mt)return mt;if(yt)return yt;if(dt)return dt;throw new Error("unexpected error. Unable to resolve global object.")}(),bt=vt.document&&vt.document.childNodes,ht=Int8Array;function wt(){return/^\s*function\s*([^(]*)/i}var jt=/^\s*function\s*([^(]*)/i;function Et(t){var n,e,r,i;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(r=t.constructor).name)return r.name;if(n=jt.exec(r.toString()))return n[1]}return et(i=t)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}c(wt,"REGEXP",jt);var Ot="function"==typeof at||"object"==typeof ht||"function"==typeof bt?function(t){return Et(t).toLowerCase()}:function(t){var n;return null===t?"null":"object"===(n=typeof t)?Et(t).toLowerCase():n};function Tt(t){return t.constructor&&t.constructor.prototype===t}var _t=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xt="undefined"==typeof window?void 0:window;var St=function(){var t;if("undefined"===Ot(xt))return!1;for(t in xt)try{-1===ut(_t,t)&&h(xt,t)&&null!==xt[t]&&"object"===Ot(xt[t])&&Tt(xt[t])}catch(t){return!0}return!1}(),It="undefined"!=typeof window;var Pt,Vt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Pt=L?function(){return 2!==(M(arguments)||"").length}(1,2)?function(t){return tt(t)?M(nt.call(t)):M(t)}:M:function(t){var n,e,r,i,o,u,a;if(i=[],tt(t)){for(a=0;a<t.length;a++)i.push(a.toString());return i}if("string"==typeof t){if(t.length>0&&!h(t,"0"))for(a=0;a<t.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof t)&&!et(t))return i;e=rt&&r}for(o in t)e&&"prototype"===o||!h(t,o)||i.push(String(o));if(it)for(n=function(t){if(!1===It&&!St)return Tt(t);try{return Tt(t)}catch(t){return!1}}(t),a=0;a<Vt.length;a++)u=Vt[a],n&&"constructor"===u||!h(t,u)||i.push(String(u));return i};var Ft=Pt;function kt(t){return"function"===Ot(t)}var At,Bt=Object.getPrototypeOf;At=kt(Object.getPrototypeOf)?Bt:function(t){var n=function(t){return t.__proto__}(t);return n||null===n?n:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var Nt=At;var Mt=Object.prototype;function Rt(t){var n;return!!function(t){return"object"==typeof t&&null!==t&&!$(t)}(t)&&(n=function(t){return null==t?null:(t=Object(t),Nt(t))}(t),!n||!h(t,"constructor")&&h(n,"constructor")&&kt(n.constructor)&&"[object Function]"===j(n.constructor)&&h(n,"isPrototypeOf")&&kt(n.isPrototypeOf)&&(n===Mt||function(t){var n;for(n in t)if(!h(t,n))return!1;return!0}(t)))}function Lt(t,n){var e,r,i,o,u,a,f,l=!0;if(!et(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!Rt(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(h(n,"duplicates")&&!ft(l=n.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=Ft(t)).length,u={},l)for(f=0;f<r;f++)h(u,o=t[i=e[f]])?(a=u[o],$(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(f=0;f<r;f++)u[t[i=e[f]]]=i;return u}var Gt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ut(){return Gt.slice()}var Yt=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Ct(){return Yt.slice()}function Xt(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Ht(t,n,e){l(t,n,{configurable:!1,enumerable:!0,writable:!1,value:e})}c(Ct,"enum",Xt),function(t,n){var e,r,i;for(e=Ft(n),i=0;i<e.length;i++)Ht(t,r=e[i],n[r])}(Ct,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Wt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function qt(){return{bool:Wt.bool,int8:Wt.int8,uint8:Wt.uint8,uint8c:Wt.uint8c,int16:Wt.int16,uint16:Wt.uint16,int32:Wt.int32,uint32:Wt.uint32,int64:Wt.int64,uint64:Wt.uint64,float32:Wt.float32,float64:Wt.float64,complex64:Wt.complex64,complex128:Wt.complex128,binary:Wt.binary,generic:Wt.generic,notype:Wt.notype,userdefined_type:Wt.userdefined_type}}c(Ut,"enum",qt),function(t,n){var e,r,i;for(e=Ft(n),i=0;i<e.length;i++)Ht(t,r=e[i],n[r])}(Ut,qt());var Dt=Lt(qt(),{duplicates:!1});var zt={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Jt(t){var n=typeof t;return"string"===n?null===function(t){var n=zt[t];return"number"==typeof n?n:null}(t)?null:t:"number"===n?function(t){var n=Dt[t];return"string"==typeof n?n:null}(t):null}function Kt(t,n,e){var r,i,o,u,a,f,l,c,s;if(!("object"==typeof(s=t)&&null!==s&&"number"==typeof s.length&&p(s.length)&&s.length>=0&&s.length<=g))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(!A(n))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+n+"`.");if(!A(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=t.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=n+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],f=2*a,c=2*n,l=0;l<=f;l++)0===l?l===c?o.push("() => ("):o.push("("):l===f?l===c?o.push(") => ()"):o.push(")"):l===c?o.push(") => ("):l%2==1?o.push(""):o.push(", ");for(l=0;l<r;l++)null===(u=Jt(t[l]))&&(u=t[l]),o[2*(c=l%a)+1]=u,c===a-1&&i.push(o.join(""));return i}function Qt(t,n,e,r){return c(e,"nargs",r?t.nargs+t.nin+t.nout:t.nargs),c(e,"nin",t.nin),c(e,"nout",t.nout),function(t,n,e){l(t,n,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return Kt(n,t.nin,t.nout)})),e}var Zt={nargs:7,nin:1,nout:1},$t=[11,11,11,15,10,10,10,11,10,15,15,15,6,6,6,11,6,15,4,4,4,6,4,10,4,11,4,15,1,1,1,4,1,6,1,10,1,11,1,15,7,7,7,11,7,15,5,6,5,5,5,7,5,10,5,11,5,15,2,4,2,6,2,2,2,3,2,5,2,7,2,10,2,11,2,15,3,4,3,6,3,2,3,3,3,5,3,7,3,10,3,11,3,15];function tn(t){return V(t)&&t>0}function nn(t){return F(t)&&t.valueOf()>0}function en(t){return tn(t)||nn(t)}c(en,"isPrimitive",tn),c(en,"isObject",nn);var rn=function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var e,r;if(!function(t){return null!=t&&"function"!=typeof t&&"number"==typeof t.length&&p(t.length)&&t.length>=0&&t.length<=g}(n))return!1;if(0===(e=n.length))return!1;for(r=0;r<e;r++)if(!1===t(n[r]))return!1;return!0}}(kt);function on(t){return Math.abs(t)}function un(t,n,e,r,i,o,u,a,f){var l,c,s,p;for(l=o,s=0;s<t;s++){for(c=f,p=0;p<n&&e[l+p*i]===u[c];p++)c+=a;if(p===n)return s;l+=r}return-1}function an(t,n,e,r,i,o){var u,a,f,l,c,s;if(kt(t))s=t;else if(!rn(t))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+t+"`.");if(!ot(n))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+n+"`.");if(!ot(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!en(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!A(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!A(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(f=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(!V(l=n.length/f))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=t.length,n.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===r)a=!1;else{if(4*f+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=i*(u=a?4:3)+1,function(){var p,g,m,y,d,v,b,h,w,j,E,O;if((v=arguments.length)!==r){if(v<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!V(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(d=[h],y=[],E=1;E<r;E+=u)y.push(arguments[E]);for(p=[],E=3;E<r;E+=u){if(!V(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");p.push(w)}if(a)for(g=[],E=4;E<r;E+=u){if(!A(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");g.push(w)}for(m=[],E=2;E<r;E+=u){if(!ot(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(O=(E-2)/u,a){if(b=g[O]+(h-1)*p[O],h>0&&(b<0||b>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*on(p[O])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");m.push(w)}if((b=un(l,f,n,f,1,0,y,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||t[b];e?a?j(m,d,p,g,e[b]):j(m,d,p,e[b]):a?j(m,d,p,g):j(m,d,p);if(1===o)return m[f-1];if(0===o)return;return m.slice(i)}}function fn(t,n){return t[n]}function ln(t,n){return t.get(n)}function cn(t,n,e){t[n]=e}function sn(t,n,e){t.set(e,n)}function pn(t,n,e,r){var i,o,u,a;return(u=t[0]).get&&u.set&&(i=ln),(a=t[1]).get&&a.set&&(o=sn),i||o?function(t,n,e,r,i){var o,u,a,f,l,c,s,p,g,m;if(!((g=n[0])<=0))for(l=(a=e[0])<0?(1-g)*a:0,c=(f=e[1])<0?(1-g)*f:0,s=t[0],p=t[1],o=r[0],u=r[1],m=0;m<g;m++)u(p,c,i(o(s,l))),l+=a,c+=f}(t,n,e,[i=i||fn,o=o||cn],r):function(t,n,e,r){var i,o,u,a,f,l,c,s;if(!((c=n[0])<=0))for(u=(i=e[0])<0?(1-c)*i:0,a=(o=e[1])<0?(1-c)*o:0,f=t[0],l=t[1],s=0;s<c;s++)l[a]=r(f[u]),u+=i,a+=o}(t,n,e,r)}function gn(t,n,e,r,i){var o,u,a,f;return(a=t[0]).get&&a.set&&(o=ln),(f=t[1]).get&&f.set&&(u=sn),o||u?function(t,n,e,r,i,o){var u,a,f,l,c,s,p,g,m,y;if(!((m=n[0])<=0))for(c=r[0],s=r[1],f=e[0],l=e[1],p=t[0],g=t[1],u=i[0],a=i[1],y=0;y<m;y++)a(g,s,o(u(p,c))),c+=f,s+=l}(t,n,e,r,[o=o||fn,u=u||cn],i):function(t,n,e,r,i){var o,u,a,f,l,c,s,p;if(!((s=n[0])<=0))for(a=r[0],f=r[1],o=e[0],u=e[1],l=t[0],c=t[1],p=0;p<s;p++)c[f]=i(l[a]),a+=o,f+=u}(t,n,e,r,i)}c(pn,"ndarray",gn);var mn=Lt(qt(),{duplicates:!1});var yn=qt();function dn(t){var n=typeof t;return"number"===n?function(t){var n=mn[t];return"string"==typeof n?n:null}(t)?t:null:"string"===n?function(t){var n=yn[t];return"number"==typeof n?n:null}(t):null}var vn=Math.ceil;function bn(t){return t}var hn=[vn,vn,Math.ceil,vn,vn,vn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn,bn],wn=an(pn,$t,hn,Zt.nargs,Zt.nin,Zt.nout);function jn(t,n,e,r,i,o,u){return wn(t,dn(n),e,r,dn(i),o,u)}var En=an(gn,$t,hn,Zt.nargs+Zt.nin+Zt.nout,Zt.nin,Zt.nout);return c(jn,"ndarray",(function(t,n,e,r,i,o,u,a,f){return En(t,dn(n),e,r,i,dn(o),u,a,f)})),Qt(Zt,$t,jn,!1),Qt(Zt,$t,jn.ndarray,!0),jn}));
//# sourceMappingURL=index.js.map
