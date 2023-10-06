"use strict";var N=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var p=N(function(y,q){
var v=require('@stdlib/math-base-assert-is-nan/dist'),s=require('@stdlib/math-base-assert-is-infinite/dist'),c=require('@stdlib/math-base-special-pow/dist'),g=require('@stdlib/math-base-special-log10/dist'),l=require('@stdlib/math-base-special-ln/dist'),f=require('@stdlib/math-base-special-abs/dist'),o=require('@stdlib/math-base-special-floor/dist'),m=require('@stdlib/number-float64-base-exponent/dist');function d(r,e,t){var a,i,u,n;if(v(r)||v(e)||e<1||s(e))return NaN;if(arguments.length>2){if(v(t)||t<=0||s(t))return NaN;a=t}else a=10;return s(r)||r===0||(a===10?i=g(f(r)):a===2?i=m(f(r)):i=l(f(r))/l(a),i=o(i-e+1),u=c(a,f(i)),s(u))||(i<0?n=o(r*u)/u:n=o(r/u)*u,s(n))?r:n}q.exports=d
});var h=p();module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
