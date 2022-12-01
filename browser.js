// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).ceil=t()}(this,(function(){"use strict";var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,r=Object.prototype,i=r.toString,o=r.__defineGetter__,u=r.__defineSetter__,a=r.__lookupGetter__,f=r.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?e:function(n,t,e){var l,c,s,p;if("object"!=typeof n||null===n||"[object Array]"===i.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(n,t)||f.call(n,t)?(l=n.__proto__,n.__proto__=r,delete n[t],n[t]=e.value,n.__proto__=l):n[t]=e.value),s="get"in e,p="set"in e,c&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&o&&o.call(n,t,e.get),p&&u&&u.call(n,t,e.set),n};var l=t;function c(n,t,e){l(n,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=Math.floor;function p(n){return s(n)===n}var g=4294967295;function m(n){return"number"==typeof n}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function d(){return y&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var b=Object.prototype.hasOwnProperty;function h(n,t){return null!=n&&b.call(n,t)}var w="function"==typeof Symbol?Symbol.toStringTag:"";var j=d()?function(n){var t,e,r;if(null==n)return v.call(n);e=n[w],t=h(n,w);try{n[w]=void 0}catch(t){return v.call(n)}return r=v.call(n),t?n[w]=e:delete n[w],r}:function(n){return v.call(n)},E=Number,O=E.prototype.toString;var T=d();function _(n){return"object"==typeof n&&(n instanceof E||(T?function(n){try{return O.call(n),!0}catch(n){return!1}}(n):"[object Number]"===j(n)))}function x(n){return m(n)||_(n)}c(x,"isPrimitive",m),c(x,"isObject",_);var S=Number.POSITIVE_INFINITY,I=E.NEGATIVE_INFINITY;function P(n){return n<S&&n>I&&p(n)}function V(n){return m(n)&&P(n)}function F(n){return _(n)&&P(n.valueOf())}function k(n){return V(n)||F(n)}function A(n){return V(n)&&n>=0}function B(n){return F(n)&&n.valueOf()>=0}function N(n){return A(n)||B(n)}function M(n){return Object.keys(Object(n))}c(k,"isPrimitive",V),c(k,"isObject",F),c(N,"isPrimitive",A),c(N,"isObject",B);var R,L=void 0!==Object.keys;function G(n){return"[object Arguments]"===j(n)}R=function(){return G(arguments)}();var U=R;function Y(n){return"string"==typeof n}var C=String.prototype.valueOf;var X=d();function H(n){return"object"==typeof n&&(n instanceof String||(X?function(n){try{return C.call(n),!0}catch(n){return!1}}(n):"[object String]"===j(n)))}function W(n){return Y(n)||H(n)}function q(n){return n!=n}function D(n){return m(n)&&q(n)}function z(n){return _(n)&&q(n.valueOf())}function J(n){return D(n)||z(n)}c(W,"isPrimitive",Y),c(W,"isObject",H),c(J,"isPrimitive",D),c(J,"isObject",z);var K=Object.prototype.propertyIsEnumerable;var Q=!K.call("beep","0");function Z(n,t){var e;return null!=n&&(!(e=K.call(n,t))&&Q&&W(n)?!D(t=+t)&&V(t)&&t>=0&&t<n.length:e)}var $=Array.isArray?Array.isArray:function(n){return"[object Array]"===j(n)};var nn=U?G:function(n){return null!==n&&"object"==typeof n&&!$(n)&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=4294967295&&h(n,"callee")&&!Z(n,"callee")},tn=Array.prototype.slice;function en(n){return null!==n&&"object"==typeof n}c(en,"isObjectLikeArray",function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var e,r;if(!$(t))return!1;if(0===(e=t.length))return!1;for(r=0;r<e;r++)if(!1===n(t[r]))return!1;return!0}}(en));var rn=Z((function(){}),"prototype"),on=!Z({toString:null},"toString");function un(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=9007199254740991}function an(n,t,e){var r,i;if(!un(n)&&!Y(n))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(0===(r=n.length))return-1;if(3===arguments.length){if(!V(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;i=e}else(i=r+e)<0&&(i=0)}else i=0;if(J(t)){for(;i<r;i++)if(J(n[i]))return i}else for(;i<r;i++)if(n[i]===t)return i;return-1}var fn=/./;function ln(n){return"boolean"==typeof n}var cn=Boolean.prototype.toString;var sn=d();function pn(n){return"object"==typeof n&&(n instanceof Boolean||(sn?function(n){try{return cn.call(n),!0}catch(n){return!1}}(n):"[object Boolean]"===j(n)))}function gn(n){return ln(n)||pn(n)}function mn(){return new Function("return this;")()}c(gn,"isPrimitive",ln),c(gn,"isObject",pn);var yn="object"==typeof self?self:null,dn="object"==typeof window?window:null,vn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},bn="object"==typeof vn?vn:null;var hn=function(n){if(arguments.length){if(!ln(n))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+n+"`.");if(n)return mn()}if(yn)return yn;if(dn)return dn;if(bn)return bn;throw new Error("unexpected error. Unable to resolve global object.")}(),wn=hn.document&&hn.document.childNodes,jn=Int8Array;function En(){return/^\s*function\s*([^(]*)/i}var On=/^\s*function\s*([^(]*)/i;function Tn(n){var t,e,r,i;if(("Object"===(e=j(n).slice(8,-1))||"Error"===e)&&n.constructor){if("string"==typeof(r=n.constructor).name)return r.name;if(t=On.exec(r.toString()))return t[1]}return en(i=n)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":e}c(En,"REGEXP",On);var _n="function"==typeof fn||"object"==typeof jn||"function"==typeof wn?function(n){return Tn(n).toLowerCase()}:function(n){var t;return null===n?"null":"object"===(t=typeof n)?Tn(n).toLowerCase():t};function xn(n){return n.constructor&&n.constructor.prototype===n}var Sn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],In="undefined"==typeof window?void 0:window;var Pn=function(){var n;if("undefined"===_n(In))return!1;for(n in In)try{-1===an(Sn,n)&&h(In,n)&&null!==In[n]&&"object"===_n(In[n])&&xn(In[n])}catch(n){return!0}return!1}(),Vn="undefined"!=typeof window;var Fn,kn=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Fn=L?function(){return 2!==(M(arguments)||"").length}(1,2)?function(n){return nn(n)?M(tn.call(n)):M(n)}:M:function(n){var t,e,r,i,o,u,a;if(i=[],nn(n)){for(a=0;a<n.length;a++)i.push(a.toString());return i}if("string"==typeof n){if(n.length>0&&!h(n,"0"))for(a=0;a<n.length;a++)i.push(a.toString())}else{if(!1==(r="function"==typeof n)&&!en(n))return i;e=rn&&r}for(o in n)e&&"prototype"===o||!h(n,o)||i.push(String(o));if(on)for(t=function(n){if(!1===Vn&&!Pn)return xn(n);try{return xn(n)}catch(n){return!1}}(n),a=0;a<kn.length;a++)u=kn[a],t&&"constructor"===u||!h(n,u)||i.push(String(u));return i};var An=Fn;function Bn(n){return"function"===_n(n)}var Nn,Mn=Object.getPrototypeOf;Nn=Bn(Object.getPrototypeOf)?Mn:function(n){var t=function(n){return n.__proto__}(n);return t||null===t?t:"[object Function]"===j(n.constructor)?n.constructor.prototype:n instanceof Object?Object.prototype:null};var Rn=Nn;var Ln=Object.prototype;function Gn(n){var t;return!!function(n){return"object"==typeof n&&null!==n&&!$(n)}(n)&&(t=function(n){return null==n?null:(n=Object(n),Rn(n))}(n),!t||!h(n,"constructor")&&h(t,"constructor")&&Bn(t.constructor)&&"[object Function]"===j(t.constructor)&&h(t,"isPrototypeOf")&&Bn(t.isPrototypeOf)&&(t===Ln||function(n){var t;for(t in n)if(!h(n,t))return!1;return!0}(n)))}function Un(n,t){var e,r,i,o,u,a,f,l=!0;if(!en(n))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+n+"`.");if(arguments.length>1){if(!Gn(t))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+t+"`.");if(h(t,"duplicates")&&!ln(l=t.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=An(n)).length,u={},l)for(f=0;f<r;f++)h(u,o=n[i=e[f]])?(a=u[o],$(a)?u[o].push(i):u[o]=[a,i]):u[o]=i;else for(f=0;f<r;f++)u[n[i=e[f]]]=i;return u}var Yn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Cn(){return Yn.slice()}var Xn=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Hn(){return Xn.slice()}function Wn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function qn(n,t,e){l(n,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}c(Hn,"enum",Wn),function(n,t){var e,r,i;for(e=An(t),i=0;i<e.length;i++)qn(n,r=e[i],t[r])}(Hn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Dn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function zn(){return{bool:Dn.bool,int8:Dn.int8,uint8:Dn.uint8,uint8c:Dn.uint8c,int16:Dn.int16,uint16:Dn.uint16,int32:Dn.int32,uint32:Dn.uint32,int64:Dn.int64,uint64:Dn.uint64,float32:Dn.float32,float64:Dn.float64,complex64:Dn.complex64,complex128:Dn.complex128,binary:Dn.binary,generic:Dn.generic,notype:Dn.notype,userdefined_type:Dn.userdefined_type}}c(Cn,"enum",zn),function(n,t){var e,r,i;for(e=An(t),i=0;i<e.length;i++)qn(n,r=e[i],t[r])}(Cn,zn());var Jn=Un(zn(),{duplicates:!1});var Kn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Qn(n){var t=typeof n;return"string"===t?null===function(n){var t=Kn[n];return"number"==typeof t?t:null}(n)?null:n:"number"===t?function(n){var t=Jn[n];return"string"==typeof t?t:null}(n):null}function Zn(n,t,e){var r,i,o,u,a,f,l,c,s;if(!("object"==typeof(s=n)&&null!==s&&"number"==typeof s.length&&p(s.length)&&s.length>=0&&s.length<=g))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(!A(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(!A(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=n.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=t+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(i=[],o=[],f=2*a,c=2*t,l=0;l<=f;l++)0===l?l===c?o.push("() => ("):o.push("("):l===f?l===c?o.push(") => ()"):o.push(")"):l===c?o.push(") => ("):l%2==1?o.push(""):o.push(", ");for(l=0;l<r;l++)null===(u=Qn(n[l]))&&(u=n[l]),o[2*(c=l%a)+1]=u,c===a-1&&i.push(o.join(""));return i}function $n(n,t,e,r){return c(e,"nargs",r?n.nargs+n.nin+n.nout:n.nargs),c(e,"nin",n.nin),c(e,"nout",n.nout),function(n,t,e){l(n,t,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return Zn(t,n.nin,n.nout)})),e}var nt={nargs:7,nin:1,nout:1},tt=[11,11,11,15,10,10,10,11,10,15,15,15,6,6,6,11,6,15,4,4,4,6,4,10,4,11,4,15,1,1,1,4,1,6,1,10,1,11,1,15,7,7,7,11,7,15,5,6,5,5,5,7,5,10,5,11,5,15,2,4,2,6,2,2,2,3,2,5,2,7,2,10,2,11,2,15,3,4,3,6,3,2,3,3,3,5,3,7,3,10,3,11,3,15];function et(n){return V(n)&&n>0}function rt(n){return F(n)&&n.valueOf()>0}function it(n){return et(n)||rt(n)}c(it,"isPrimitive",et),c(it,"isObject",rt);var ot=function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var e,r;if(!function(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=g}(t))return!1;if(0===(e=t.length))return!1;for(r=0;r<e;r++)if(!1===n(t[r]))return!1;return!0}}(Bn);function ut(n){return Math.abs(n)}function at(n,t,e,r,i,o,u,a,f){var l,c,s,p;for(l=o,s=0;s<n;s++){for(c=f,p=0;p<t&&e[l+p*i]===u[c];p++)c+=a;if(p===t)return s;l+=r}return-1}function ft(n,t,e,r,i,o){var u,a,f,l,c,s;if(Bn(n))s=n;else if(!ot(n))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+n+"`.");if(!un(t))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+t+"`.");if(!un(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!it(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!A(i))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+i+"`.");if(!A(o))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+o+"`.");if(0===(f=i+o))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(!V(l=t.length/f))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=n.length,t.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===r)a=!1;else{if(4*f+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=i*(u=a?4:3)+1,function(){var p,g,m,y,d,v,b,h,w,j,E,O;if((v=arguments.length)!==r){if(v<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!V(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(d=[h],y=[],E=1;E<r;E+=u)y.push(arguments[E]);for(p=[],E=3;E<r;E+=u){if(!V(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");p.push(w)}if(a)for(g=[],E=4;E<r;E+=u){if(!A(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");g.push(w)}for(m=[],E=2;E<r;E+=u){if(!un(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(O=(E-2)/u,a){if(b=g[O]+(h-1)*p[O],h>0&&(b<0||b>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*ut(p[O])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");m.push(w)}if((b=at(l,f,t,f,1,0,y,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||n[b];e?a?j(m,d,p,g,e[b]):j(m,d,p,e[b]):a?j(m,d,p,g):j(m,d,p);if(1===o)return m[f-1];if(0===o)return;return m.slice(i)}}function lt(n,t){return n[t]}function ct(n,t){return n.get(t)}function st(n,t,e){n[t]=e}function pt(n,t,e){n.set(e,t)}function gt(n,t,e,r){var i,o,u,a;return(u=n[0]).get&&u.set&&(i=ct),(a=n[1]).get&&a.set&&(o=pt),i||o?function(n,t,e,r,i){var o,u,a,f,l,c,s,p,g,m;if(!((g=t[0])<=0))for(l=(a=e[0])<0?(1-g)*a:0,c=(f=e[1])<0?(1-g)*f:0,s=n[0],p=n[1],o=r[0],u=r[1],m=0;m<g;m++)u(p,c,i(o(s,l))),l+=a,c+=f}(n,t,e,[i=i||lt,o=o||st],r):function(n,t,e,r){var i,o,u,a,f,l,c,s;if(!((c=t[0])<=0))for(u=(i=e[0])<0?(1-c)*i:0,a=(o=e[1])<0?(1-c)*o:0,f=n[0],l=n[1],s=0;s<c;s++)l[a]=r(f[u]),u+=i,a+=o}(n,t,e,r)}function mt(n,t,e,r,i){var o,u,a,f;return(a=n[0]).get&&a.set&&(o=ct),(f=n[1]).get&&f.set&&(u=pt),o||u?function(n,t,e,r,i,o){var u,a,f,l,c,s,p,g,m,y;if(!((m=t[0])<=0))for(c=r[0],s=r[1],f=e[0],l=e[1],p=n[0],g=n[1],u=i[0],a=i[1],y=0;y<m;y++)a(g,s,o(u(p,c))),c+=f,s+=l}(n,t,e,r,[o=o||lt,u=u||st],i):function(n,t,e,r,i){var o,u,a,f,l,c,s,p;if(!((s=t[0])<=0))for(a=r[0],f=r[1],o=e[0],u=e[1],l=n[0],c=n[1],p=0;p<s;p++)c[f]=i(l[a]),a+=o,f+=u}(n,t,e,r,i)}c(gt,"ndarray",mt);var yt=Un(zn(),{duplicates:!1});var dt=zn();function vt(n){var t=typeof n;return"number"===t?function(n){var t=yt[n];return"string"==typeof t?t:null}(n)?n:null:"string"===t?function(n){var t=dt[n];return"number"==typeof t?t:null}(n):null}var bt=Math.ceil;function ht(n){return n}var wt=[bt,bt,Math.ceil,bt,bt,bt,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht,ht],jt=ft(gt,tt,wt,nt.nargs,nt.nin,nt.nout);function Et(n,t,e,r,i,o,u){return jt(n,vt(t),e,r,vt(i),o,u)}var Ot=ft(mt,tt,wt,nt.nargs+nt.nin+nt.nout,nt.nin,nt.nout);return c(Et,"ndarray",(function(n,t,e,r,i,o,u,a,f){return Ot(n,vt(t),e,r,i,vt(o),u,a,f)})),$n(nt,tt,Et,!1),$n(nt,tt,Et.ndarray,!0),Et}));
//# sourceMappingURL=browser.js.map
