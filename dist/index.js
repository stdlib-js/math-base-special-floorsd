"use strict";var p=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var l=p(function(y,q){
var v=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-infinite/dist'),c=require('@stdlib/math-base-special-pow/dist'),N=require('@stdlib/math-base-special-log10/dist'),o=require('@stdlib/math-base-special-ln/dist'),n=require('@stdlib/math-base-special-abs/dist'),f=require('@stdlib/math-base-special-floor/dist'),d=require('@stdlib/number-float64-base-exponent/dist');function g(r,e,i){var u,a,t;return v(r)||v(e)||e<1||s(e)||v(i)||i<=0||s(i)?NaN:s(r)||r===0||(i===10?u=N(n(r)):i===2?u=d(n(r)):u=o(n(r))/o(i),u=f(u-e+1),a=c(i,n(u)),s(a))||(u<0?t=f(r*a)/a:t=f(r/a)*a,s(t))?r:t}q.exports=g
});var m=l();module.exports=m;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
