"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=p(function(y,q){
var f=require('@stdlib/math-base-assert-is-nan/dist'),t=require('@stdlib/math-base-assert-is-infinite/dist'),N=require('@stdlib/math-base-special-pow/dist'),c=require('@stdlib/math-base-special-log10/dist'),o=require('@stdlib/math-base-special-ln/dist'),n=require('@stdlib/math-base-special-abs/dist'),v=require('@stdlib/math-base-special-floor/dist'),d=require('@stdlib/number-float64-base-exponent/dist');function g(r,e,i){var u,a,s;return f(r)||f(e)||e<1||t(e)?NaN:f(i)||i<=0||t(i)?NaN:t(r)||r===0||(i===10?u=c(n(r)):i===2?u=d(n(r)):u=o(n(r))/o(i),u=v(u-e+1),a=N(i,n(u)),t(a))||(u<0?s=v(r*a)/a:s=v(r/a)*a,t(s))?r:s}q.exports=g
});var m=l();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
