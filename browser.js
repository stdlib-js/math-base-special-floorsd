// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var r,e;r=this,e=function(){"use strict";function r(r){return r!=r}var e=Number.POSITIVE_INFINITY,n=Number,t=n.NEGATIVE_INFINITY;function i(r){return r===e||r===t}var a=Math.floor;function o(r){return a(r)===r}function u(r){return o(r/2)}function f(r){return u(r>0?r-1:r+1)}var c=Math.sqrt;function s(r){return Math.abs(r)}var l="function"==typeof Object.defineProperty?Object.defineProperty:null,p=Object.defineProperty;function y(r){return"number"==typeof r}function g(r){var e,n="";for(e=0;e<r;e++)n+="0";return n}function d(r,e,n){var t=!1,i=e-r.length;return i<0||(function(r){return"-"===r[0]}(r)&&(t=!0,r=r.substr(1)),r=n?r+g(i):g(i)+r,t&&(r="-"+r)),r}var h=String.prototype.toLowerCase,v=String.prototype.toUpperCase;function w(r){var e,n,t;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,t=parseInt(n,10),!isFinite(t)){if(!y(n))throw new Error("invalid integer. Value: "+n);t=0}return t<0&&("u"===r.specifier||10!==e)&&(t=4294967295+t+1),t<0?(n=(-t).toString(e),r.precision&&(n=d(n,r.precision,r.padRight)),n="-"+n):(n=t.toString(e),t||r.precision?r.precision&&(n=d(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===v.call(r.specifier)?v.call(n):h.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}function b(r){return"string"==typeof r}var m=Math.abs,I=String.prototype.toLowerCase,A=String.prototype.toUpperCase,N=String.prototype.replace,_=/e\+(\d)$/,E=/e-(\d)$/,T=/^(\d+)$/,F=/^(\d+)e/,S=/\.0$/,U=/\.0*e/,x=/(\..*[^0])0*e/;function V(r){var e,n,t=parseFloat(r.arg);if(!isFinite(t)){if(!y(r.arg))throw new Error("invalid floating-point number. Value: "+n);t=r.arg}switch(r.specifier){case"e":case"E":n=t.toExponential(r.precision);break;case"f":case"F":n=t.toFixed(r.precision);break;case"g":case"G":m(t)<1e-4?((e=r.precision)>0&&(e-=1),n=t.toExponential(e)):n=t.toPrecision(r.precision),r.alternate||(n=N.call(n,x,"$1e"),n=N.call(n,U,"e"),n=N.call(n,S,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=N.call(n,_,"e+0$1"),n=N.call(n,E,"e-0$1"),r.alternate&&(n=N.call(n,T,"$1."),n=N.call(n,F,"$1.e")),t>=0&&r.sign&&(n=r.sign+n),n=r.specifier===A.call(r.specifier)?A.call(n):I.call(n)}function k(r){var e,n="";for(e=0;e<r;e++)n+=" ";return n}function j(r,e,n){var t=e-r.length;return t<0?r:r=n?r+k(t):k(t)+r}var O=String.fromCharCode,G=isNaN,$=Array.isArray;function P(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function H(r){var e,n,t,i,a,o,u,f,c;if(!$(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(o="",u=1,f=0;f<r.length;f++)if(b(t=r[f]))o+=t;else{if(e=void 0!==t.precision,!(t=P(t)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+f+"`. Value: `"+t+"`.");for(t.mapping&&(u=t.mapping),n=t.flags,c=0;c<n.length;c++)switch(i=n.charAt(c)){case" ":t.sign=" ";break;case"+":t.sign="+";break;case"-":t.padRight=!0,t.padZeros=!1;break;case"0":t.padZeros=n.indexOf("-")<0;break;case"#":t.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===t.width){if(t.width=parseInt(arguments[u],10),u+=1,G(t.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+t.width+"`.");t.width<0&&(t.padRight=!0,t.width=-t.width)}if(e&&"*"===t.precision){if(t.precision=parseInt(arguments[u],10),u+=1,G(t.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+t.precision+"`.");t.precision<0&&(t.precision=1,e=!1)}switch(t.arg=arguments[u],t.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(t.padZeros=!1),t.arg=w(t);break;case"s":t.maxWidth=e?t.precision:-1;break;case"c":if(!G(t.arg)){if((a=parseInt(t.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+t.arg);t.arg=G(a)?String(t.arg):O(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(t.precision=6),t.arg=V(t);break;default:throw new Error("invalid specifier: "+t.specifier)}t.maxWidth>=0&&t.arg.length>t.maxWidth&&(t.arg=t.arg.substring(0,t.maxWidth)),t.padZeros?t.arg=d(t.arg,t.width||t.precision,t.padRight):t.width&&(t.arg=j(t.arg,t.width,t.padRight)),o+=t.arg||"",u+=1}return o}var W=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function Y(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function C(r){var e,n,t,i;for(n=[],i=0,t=W.exec(r);t;)(e=r.slice(i,W.lastIndex-t[0].length)).length&&n.push(e),n.push(Y(t)),i=W.lastIndex,t=W.exec(r);return(e=r.slice(i)).length&&n.push(e),n}function L(r){return"string"==typeof r}function R(r){var e,n;if(!L(r))throw new TypeError(R("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[C(r)],n=1;n<arguments.length;n++)e.push(arguments[n]);return H.apply(null,e)}var Z=Object.prototype,M=Z.toString,X=Z.__defineGetter__,q=Z.__defineSetter__,z=Z.__lookupGetter__,B=Z.__lookupSetter__,D=function(){try{return l({},"x",{}),!0}catch(r){return!1}}()?p:function(r,e,n){var t,i,a,o;if("object"!=typeof r||null===r||"[object Array]"===M.call(r))throw new TypeError(R("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof n||null===n||"[object Array]"===M.call(n))throw new TypeError(R("invalid argument. Property descriptor must be an object. Value: `%s`.",n));if((i="value"in n)&&(z.call(r,e)||B.call(r,e)?(t=r.__proto__,r.__proto__=Z,delete r[e],r[e]=n.value,r.__proto__=t):r[e]=n.value),a="get"in n,o="set"in n,i&&(a||o))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return a&&X&&X.call(r,e,n.get),o&&q&&q.call(r,e,n.set),r};function J(r,e,n){D(r,e,{configurable:!1,enumerable:!1,writable:!1,value:n})}var K,Q="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),rr=Object.prototype.toString,er=Object.prototype.hasOwnProperty,nr="function"==typeof Symbol?Symbol:void 0,tr="function"==typeof nr?nr.toStringTag:"",ir=Q&&"symbol"==typeof Symbol.toStringTag?function(r){var e,n,t,i,a;if(null==r)return rr.call(r);n=r[tr],a=tr,e=null!=(i=r)&&er.call(i,a);try{r[tr]=void 0}catch(e){return rr.call(r)}return t=rr.call(r),e?r[tr]=n:delete r[tr],t}:function(r){return rr.call(r)},ar="function"==typeof Uint32Array,or="function"==typeof Uint32Array?Uint32Array:null,ur="function"==typeof Uint32Array?Uint32Array:void 0;K=function(){var r,e,n;if("function"!=typeof or)return!1;try{e=new or(e=[1,3.14,-3.14,4294967296,4294967297]),n=e,r=(ar&&n instanceof Uint32Array||"[object Uint32Array]"===ir(n))&&1===e[0]&&3===e[1]&&4294967293===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?ur:function(){throw new Error("not implemented")};var fr,cr=K,sr="function"==typeof Float64Array,lr="function"==typeof Float64Array?Float64Array:null,pr="function"==typeof Float64Array?Float64Array:void 0;fr=function(){var r,e,n;if("function"!=typeof lr)return!1;try{e=new lr([1,3.14,-3.14,NaN]),n=e,r=(sr&&n instanceof Float64Array||"[object Float64Array]"===ir(n))&&1===e[0]&&3.14===e[1]&&-3.14===e[2]&&e[3]!=e[3]}catch(e){r=!1}return r}()?pr:function(){throw new Error("not implemented")};var yr,gr=fr,dr="function"==typeof Uint8Array,hr="function"==typeof Uint8Array?Uint8Array:null,vr="function"==typeof Uint8Array?Uint8Array:void 0;yr=function(){var r,e,n;if("function"!=typeof hr)return!1;try{e=new hr(e=[1,3.14,-3.14,256,257]),n=e,r=(dr&&n instanceof Uint8Array||"[object Uint8Array]"===ir(n))&&1===e[0]&&3===e[1]&&253===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?vr:function(){throw new Error("not implemented")};var wr,br=yr,mr="function"==typeof Uint16Array,Ir="function"==typeof Uint16Array?Uint16Array:null,Ar="function"==typeof Uint16Array?Uint16Array:void 0;wr=function(){var r,e,n;if("function"!=typeof Ir)return!1;try{e=new Ir(e=[1,3.14,-3.14,65536,65537]),n=e,r=(mr&&n instanceof Uint16Array||"[object Uint16Array]"===ir(n))&&1===e[0]&&3===e[1]&&65533===e[2]&&0===e[3]&&1===e[4]}catch(e){r=!1}return r}()?Ar:function(){throw new Error("not implemented")};var Nr,_r={uint16:wr,uint8:br};(Nr=new _r.uint16(1))[0]=4660;var Er,Tr,Fr=52===new _r.uint8(Nr.buffer)[0];!0===Fr?(Er=1,Tr=0):(Er=0,Tr=1);var Sr={HIGH:Er,LOW:Tr},Ur=new gr(1),xr=new cr(Ur.buffer),Vr=Sr.HIGH,kr=Sr.LOW;function jr(r,e,n,t){return Ur[0]=r,e[t]=xr[Vr],e[t+n]=xr[kr],e}function Or(r){return jr(r,[0,0],1,0)}J(Or,"assign",jr);var Gr=!0===Fr?0:1,$r=new gr(1),Pr=new cr($r.buffer);function Hr(r,e){return $r[0]=r,Pr[Gr]=e>>>0,$r[0]}function Wr(r){return 0|r}var Yr,Cr,Lr=n.NEGATIVE_INFINITY,Rr=Number.POSITIVE_INFINITY,Zr=2147483647,Mr=!0===Fr?1:0,Xr=new gr(1),qr=new cr(Xr.buffer);function zr(r){return Xr[0]=r,qr[Mr]}!0===Fr?(Yr=1,Cr=0):(Yr=0,Cr=1);var Br={HIGH:Yr,LOW:Cr},Dr=new gr(1),Jr=new cr(Dr.buffer),Kr=Br.HIGH,Qr=Br.LOW;function re(r,e){return Jr[Kr]=r,Jr[Qr]=e,Dr[0]}var ee=[0,0];function ne(r,e){var n,t;return Or.assign(r,ee,1,0),n=ee[0],n&=Zr,t=zr(e),re(n|=t&=2147483648,ee[1])}var te=!0===Fr?1:0,ie=new gr(1),ae=new cr(ie.buffer);function oe(r,e){return ie[0]=r,ae[te]=e>>>0,ie[0]}var ue=1023,fe=1048576,ce=[1,1.5],se=[0,.5849624872207642],le=[0,1.350039202129749e-8],pe=Number.POSITIVE_INFINITY,ye=n.NEGATIVE_INFINITY;function ge(e,n,t,a){return r(e)||i(e)?(n[a]=e,n[a+t]=0,n):0!==e&&s(e)<22250738585072014e-324?(n[a]=4503599627370496*e,n[a+t]=-52,n):(n[a]=e,n[a+t]=0,n)}function de(r){var e=zr(r);return(e=(2146435072&e)>>>20)-ue|0}J((function(r){return ge(r,[0,0],1,0)}),"assign",ge);var he=[0,0],ve=[0,0],we=1048575,be=1048576;function me(e,n,t){var a,o,u,f,c,s,l,p,y,g,d,h,v,w;return y=((p=e&Zr|0)>>20)-ue|0,l=0,p>1071644672&&(o=oe(0,((l=e+(be>>y+1)>>>0)&~(we>>(y=((l&Zr)>>20)-ue|0)))>>>0),l=(l&we|be)>>20-y>>>0,e<0&&(l=-l),n-=o),e=Wr(e=zr(s=1-((s=(u=.6931471824645996*(o=Hr(o=t+n,0)))+(f=.6931471805599453*(t-(o-n))+-1.904654299957768e-9*o))*(a=s-(o=s*s)*(0===(g=o)?.16666666666666602:.16666666666666602+g*(g*(6613756321437934e-20+g*(4.1381367970572385e-8*g-16533902205465252e-22))-.0027777777777015593)))/(a-2)-((c=f-(s-u))+s*c)-s))),(e+=l<<20>>>0)>>20<=0?(d=s,s=0===(h=l)||0===d||r(d)||i(d)?d:(ge(d,he,1,0),h+=he[1],(h+=de(d=he[0]))<-1074?ne(0,d):h>1023?d<0?ye:pe:(h<=-1023?(h+=52,w=2220446049250313e-31):w=1,Or.assign(d,ve,1,0),v=ve[0],v&=2148532223,w*re(v|=h+ue<<20,ve[1])))):s=oe(s,e),s}var Ie=1083179008,Ae=1e300,Ne=1e-300,_e=[0,0],Ee=[0,0];function Te(e,n){var t,a,u,l,p,y,g,d,h,v,w,b,m,I;if(r(e)||r(n))return NaN;if(Or.assign(n,_e,1,0),p=_e[0],0===_e[1]){if(0===n)return 1;if(1===n)return e;if(-1===n)return 1/e;if(.5===n)return c(e);if(-.5===n)return 1/c(e);if(2===n)return e*e;if(3===n)return e*e*e;if(4===n)return(e*=e)*e;if(i(n))return function(r,e){return-1===r?(r-r)/(r-r):1===r?1:s(r)<1==(e===Rr)?0:Rr}(e,n)}if(Or.assign(e,_e,1,0),l=_e[0],0===_e[1]){if(0===l)return function(r,e){return e===Lr?Rr:e===Rr?0:e>0?f(e)?r:0:f(e)?ne(Rr,r):Rr}(e,n);if(1===e)return 1;if(-1===e&&f(n))return-1;if(i(e))return e===Lr?Te(-0,-n):n<0?0:Rr}if(e<0&&!1===o(n))return(e-e)/(e-e);if(u=s(e),t=l&Zr|0,a=p&Zr|0,g=p>>>31|0,y=(y=l>>>31|0)&&f(n)?-1:1,a>1105199104){if(a>1139802112)return function(r,e){return(zr(r)&Zr)<=1072693247?e<0?1/0:0:e>0?1/0:0}(e,n);if(t<1072693247)return 1===g?y*Ae*Ae:y*Ne*Ne;if(t>1072693248)return 0===g?y*Ae*Ae:y*Ne*Ne;w=function(r,e){var n,t,i,a,o,u;return n=(o=1.9259629911266175e-8*(i=e-1)-i*i*(0===(u=i)?.5:.5+u*(.25*u-.3333333333333333))*1.4426950408889634)-((t=Hr(t=(a=1.4426950216293335*i)+o,0))-a),r[0]=t,r[1]=n,r}(Ee,u)}else w=function(r,e,n){var t,i,a,o,u,f,c,s,l,p,y,g,d,h,v,w,b,m,I,A,N;return m=0,n<fe&&(m-=53,n=zr(e*=9007199254740992)),m+=(n>>20)-ue|0,n=1072693248|(I=1048575&n|0),I<=235662?A=0:I<767610?A=1:(A=0,m+=1,n-=fe),o=Hr(i=(w=(e=oe(e,n))-(c=ce[A]))*(b=1/(e+c)),0),t=524288+(n>>1|536870912),f=oe(0,t+=A<<18),v=(a=i*i)*a*(0===(N=a)?.5999999999999946:.5999999999999946+N*(.4285714285785502+N*(.33333332981837743+N*(.272728123808534+N*(.23066074577556175+.20697501780033842*N))))),f=Hr(f=3+(a=o*o)+(v+=(u=b*(w-o*f-o*(e-(f-c))))*(o+i)),0),d=(y=-7.028461650952758e-9*(l=Hr(l=(w=o*f)+(b=u*f+(v-(f-3-a))*i),0))+.9617966939259756*(b-(l-w))+le[A])-((g=Hr(g=(p=.9617967009544373*l)+y+(s=se[A])+(h=m),0))-h-s-p),r[0]=g,r[1]=d,r}(Ee,u,t);if(b=(v=(n-(d=Hr(n,0)))*w[0]+n*w[1])+(h=d*w[0]),Or.assign(b,_e,1,0),m=Wr(_e[0]),I=Wr(_e[1]),m>=Ie){if(0!=(m-Ie|I))return y*Ae*Ae;if(v+8008566259537294e-32>b-h)return y*Ae*Ae}else if((m&Zr)>=1083231232){if(0!=(m-3230714880|I))return y*Ne*Ne;if(v<=b-h)return y*Ne*Ne}return y*(b=me(m,h,v))}var Fe=n.NEGATIVE_INFINITY,Se=1048575,Ue=.4342944818781689;function xe(e){var n,t,i,a,o,u,f;return r(e)||e<0?NaN:0===e?Fe:(o=0,(t=zr(e))<1048576&&(o-=54,t=zr(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-ue|0,u=o+=(a=614244+(t&=1048575)&1048576|0)>>20|0,i=function(r){var e,n,t,i,a,o,u,f,c,s,l;return i=zr(r),a=r-1,(Se&2+i)<3?0===a?0:a*a*(.3333333333333333*a-.5):(s=(i&=Se)-398458|0,l=440401-i|0,n=(c=(u=(o=a/(2+a))*o)*u)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(c),t=u*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(c),f=t+n,(s|=l)>0?o*((e=.5*a*a)+f)-e:o*(f-a))}(e=oe(e,t|1072693248^a)),f=3694239077158931e-28*u+25082946711645275e-27*((e-=1)+i),(f+=(e-(n=Hr(e,0))+i)*Ue+n*Ue)+.30102999566361177*u))}var Ve=n.NEGATIVE_INFINITY,ke=.6931471803691238,je=1.9082149292705877e-10,Oe=1048575;function Ge(e){var n,t,i,a,o,u,f,c,s,l,p,y;return 0===e?Ve:r(e)||e<0?NaN:(o=0,(t=zr(e))<1048576&&(o-=54,t=zr(e*=0x40000000000000)),t>=2146435072?e+e:(o+=(t>>20)-ue|0,o+=(c=614244+(t&=Oe)&1048576|0)>>20|0,f=(e=oe(e,t|1072693248^c))-1,(Oe&2+t)<3?0===f?0===o?0:o*ke+o*je:(u=f*f*(.5-.3333333333333333*f),0===o?f-u:o*ke-(u-o*je-f)):(c=t-398458|0,s=440401-t|0,a=(p=(y=(l=f/(2+f))*l)*y)*function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)}(p),i=y*function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))}(p),u=i+a,(c|=s)>0?(n=.5*f*f,0===o?f-(n-l*(n+u)):o*ke-(n-(l*(n+u)+o*je)-f)):0===o?f-l*(f-u):o*ke-(l*(f-u)-o*je-f))))}return function(e,n,t){var o,u,f,c;if(r(e)||r(n)||n<1||i(n))return NaN;if(arguments.length>2){if(r(t)||t<=0||i(t))return NaN;o=t}else o=10;return i(e)||0===e?e:(u=10===o?xe(s(e)):2===o?de(s(e)):Ge(s(e))/Ge(o),i(f=Te(o,s(u=a(u-n+1))))||i(c=u<0?a(e*f)/f:a(e/f)*f)?e:c)}},"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).floorsd=e();
//# sourceMappingURL=browser.js.map