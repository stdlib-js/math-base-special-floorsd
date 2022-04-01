// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(r="undefined"!=typeof globalThis?globalThis:r||self).floorsd=n()}(this,(function(){"use strict";var r=function(r){return r!=r},n=Number.POSITIVE_INFINITY,t=Number.NEGATIVE_INFINITY,e=n,u=t;var i=function(r){return r===e||r===u},f=Math.floor,o=f;var a=function(r){return o(r)===r},c=a;var v=function(r){return c(r/2)};var y=function(r){return v(r>0?r-1:r+1)},l=Math.sqrt;var p=function(r){return Math.abs(r)};var A=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return A&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,d=w;var s=function(r){return d.call(r)},U=Object.prototype.hasOwnProperty;var m=function(r,n){return null!=r&&U.call(r,n)},h="function"==typeof Symbol?Symbol.toStringTag:"",N=m,I=h,g=w;var F=s,S=function(r){var n,t,e;if(null==r)return g.call(r);t=r[I],n=N(r,I);try{r[I]=void 0}catch(n){return g.call(r)}return e=g.call(r),n?r[I]=t:delete r[I],e},H=b()?S:F,O=H,T="function"==typeof Uint32Array;var j="function"==typeof Uint32Array?Uint32Array:null,E=function(r){return T&&r instanceof Uint32Array||"[object Uint32Array]"===O(r)},G=j;var x=function(){var r,n;if("function"!=typeof G)return!1;try{n=new G(n=[1,3.14,-3.14,4294967296,4294967297]),r=E(n)&&1===n[0]&&3===n[1]&&4294967293===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var L="function"==typeof Uint32Array?Uint32Array:void 0,W=function(){throw new Error("not implemented")},M=x()?L:W,P=H,V="function"==typeof Float64Array;var Y="function"==typeof Float64Array?Float64Array:null,_=function(r){return V&&r instanceof Float64Array||"[object Float64Array]"===P(r)},q=Y;var k=function(){var r,n;if("function"!=typeof q)return!1;try{n=new q([1,3.14,-3.14,NaN]),r=_(n)&&1===n[0]&&3.14===n[1]&&-3.14===n[2]&&n[3]!=n[3]}catch(n){r=!1}return r};var z="function"==typeof Float64Array?Float64Array:void 0,B=function(){throw new Error("not implemented")},C=k()?z:B,D=H,J="function"==typeof Uint8Array;var K="function"==typeof Uint8Array?Uint8Array:null,Q=function(r){return J&&r instanceof Uint8Array||"[object Uint8Array]"===D(r)},R=K;var X=function(){var r,n;if("function"!=typeof R)return!1;try{n=new R(n=[1,3.14,-3.14,256,257]),r=Q(n)&&1===n[0]&&3===n[1]&&253===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var Z="function"==typeof Uint8Array?Uint8Array:void 0,$=function(){throw new Error("not implemented")},rr=X()?Z:$,nr=H,tr="function"==typeof Uint16Array;var er="function"==typeof Uint16Array?Uint16Array:null,ur=function(r){return tr&&r instanceof Uint16Array||"[object Uint16Array]"===nr(r)},ir=er;var fr=function(){var r,n;if("function"!=typeof ir)return!1;try{n=new ir(n=[1,3.14,-3.14,65536,65537]),r=ur(n)&&1===n[0]&&3===n[1]&&65533===n[2]&&0===n[3]&&1===n[4]}catch(n){r=!1}return r};var or,ar="function"==typeof Uint16Array?Uint16Array:void 0,cr=function(){throw new Error("not implemented")},vr={uint16:fr()?ar:cr,uint8:rr};(or=new vr.uint16(1))[0]=4660;var yr,lr,pr=52===new vr.uint8(or.buffer)[0];!0===pr?(yr=1,lr=0):(yr=0,lr=1);var Ar=M,br={HIGH:yr,LOW:lr},wr=new C(1),dr=new Ar(wr.buffer),sr=br.HIGH,Ur=br.LOW;var mr=function(r,n){return wr[0]=n,r[0]=dr[sr],r[1]=dr[Ur],r};var hr=function(r,n){return 1===arguments.length?mr([0,0],r):mr(r,n)},Nr=hr,Ir=M,gr=!0===pr?0:1,Fr=new C(1),Sr=new Ir(Fr.buffer);var Hr=function(r,n){return Fr[0]=r,Sr[gr]=n>>>0,Fr[0]},Or=Hr;var Tr=function(r){return 0|r},jr=M,Er=!0===pr?1:0,Gr=new C(1),xr=new jr(Gr.buffer);var Lr,Wr,Mr=function(r){return Gr[0]=r,xr[Er]};!0===pr?(Lr=1,Wr=0):(Lr=0,Wr=1);var Pr=M,Vr={HIGH:Lr,LOW:Wr},Yr=new C(1),_r=new Pr(Yr.buffer),qr=Vr.HIGH,kr=Vr.LOW;var zr=function(r,n){return _r[qr]=r,_r[kr]=n,Yr[0]},Br=zr,Cr=Nr,Dr=Mr,Jr=Br,Kr=[0,0];var Qr=function(r,n){var t,e;return Cr(Kr,r),t=Kr[0],t&=2147483647,e=Dr(n),Jr(t|=e&=2147483648,Kr[1])},Rr=y,Xr=Qr,Zr=t,$r=n;var rn=function(r,n){return n===Zr?$r:n===$r?0:n>0?Rr(n)?r:0:Rr(n)?Xr($r,r):$r},nn=Mr;var tn=function(r,n){return(2147483647&nn(r))<=1072693247?n<0?1/0:0:n>0?1/0:0},en=p,un=n;var fn=function(r,n){return-1===r?(r-r)/(r-r):1===r?1:en(r)<1==(n===un)?0:un},on=M,an=!0===pr?1:0,cn=new C(1),vn=new on(cn.buffer);var yn=function(r,n){return cn[0]=r,vn[an]=n>>>0,cn[0]};var ln=Mr,pn=Or,An=yn,bn=function(r){return 0===r?.5999999999999946:.5999999999999946+r*(.4285714285785502+r*(.33333332981837743+r*(.272728123808534+r*(.23066074577556175+.20697501780033842*r))))},wn=1048576,dn=[1,1.5],sn=[0,.5849624872207642],Un=[0,1.350039202129749e-8];var mn=Or,hn=function(r){return 0===r?.5:.5+r*(.25*r-.3333333333333333)};var Nn=i,In=r,gn=p;var Fn=function(r,n){return In(n)||Nn(n)?(r[0]=n,r[1]=0,r):0!==n&&gn(n)<22250738585072014e-324?(r[0]=4503599627370496*n,r[1]=-52,r):(r[0]=n,r[1]=0,r)};var Sn=function(r,n){return 1===arguments.length?Fn([0,0],r):Fn(r,n)},Hn=Mr;var On=function(r){var n=Hn(r);return(n=(2146435072&n)>>>20)-1023|0},Tn=n,jn=t,En=r,Gn=i,xn=Qr,Ln=Sn,Wn=On,Mn=Nr,Pn=Br,Vn=[0,0],Yn=[0,0];var _n=function(r,n){var t,e;return 0===n||0===r||En(r)||Gn(r)?r:(Ln(Vn,r),n+=Vn[1],(n+=Wn(r=Vn[0]))<-1074?xn(0,r):n>1023?r<0?jn:Tn:(n<=-1023?(n+=52,e=2220446049250313e-31):e=1,Mn(Yn,r),t=Yn[0],t&=2148532223,e*Pn(t|=n+1023<<20,Yn[1])))};var qn=Mr,kn=yn,zn=Or,Bn=Tr,Cn=_n,Dn=function(r){return 0===r?.16666666666666602:.16666666666666602+r*(r*(6613756321437934e-20+r*(4.1381367970572385e-8*r-16533902205465252e-22))-.0027777777777015593)},Jn=2147483647,Kn=1048575,Qn=1048576;var Rn=r,Xn=y,Zn=i,$n=a,rt=l,nt=p,tt=Nr,et=Or,ut=Tr,it=t,ft=n,ot=rn,at=tn,ct=fn,vt=function(r,n,t){var e,u,i,f,o,a,c,v,y,l,p,A,b,w,d,s,U,m,h,N;return m=0,t<wn&&(m-=53,t=ln(n*=9007199254740992)),m+=(t>>20)-1023|0,t=1072693248|(h=1048575&t|0),h<=235662?N=0:h<767610?N=1:(N=0,m+=1,t-=wn),e=524288+(t>>1|536870912),o=(U=1/((n=An(n,t))+(c=dn[N])))*((s=n-c)-(f=pn(u=s*U,0))*(a=An(0,e+=N<<18))-f*(n-(a-c))),d=(i=u*u)*i*bn(i),a=pn(a=3+(i=f*f)+(d+=o*(f+u)),0),b=(p=-7.028461650952758e-9*(y=pn(y=(s=f*a)+(U=o*a+(d-(a-3-i))*u),0))+.9617966939259756*(U-(y-s))+Un[N])-((A=pn(A=(l=.9617967009544373*y)+p+(v=sn[N])+(w=m),0))-w-v-l),r[0]=A,r[1]=b,r},yt=function(r,n){var t,e,u,i,f;return t=(f=1.9259629911266175e-8*(u=n-1)-1.4426950408889634*(u*u*hn(u)))-((e=mn(e=(i=1.4426950216293335*u)+f,0))-i),r[0]=e,r[1]=t,r},lt=function(r,n,t){var e,u,i,f,o,a,c,v,y;return y=((v=r&Jn|0)>>20)-1023|0,c=0,v>1071644672&&(u=kn(0,((c=r+(Qn>>y+1)>>>0)&~(Kn>>(y=((c&Jn)>>20)-1023|0)))>>>0),c=(c&Kn|Qn)>>20-y>>>0,r<0&&(c=-c),n-=u),o=(f=.6931471805599453*(t-((u=zn(u=t+n,0))-n))+-1.904654299957768e-9*u)-((a=(i=.6931471824645996*u)+f)-i),e=a-(u=a*a)*Dn(u),r=qn(a=1-(a*e/(e-2)-(o+a*o)-a)),r=Bn(r),a=(r+=c<<20>>>0)>>20<=0?Cn(a,c):kn(a,r)},pt=2147483647,At=1083179008,bt=1e300,wt=1e-300,dt=[0,0],st=[0,0];var Ut=function r(n,t){var e,u,i,f,o,a,c,v,y,l,p,A,b,w;if(Rn(n)||Rn(t))return NaN;if(tt(dt,t),o=dt[0],0===dt[1]){if(0===t)return 1;if(1===t)return n;if(-1===t)return 1/n;if(.5===t)return rt(n);if(-.5===t)return 1/rt(n);if(2===t)return n*n;if(3===t)return n*n*n;if(4===t)return(n*=n)*n;if(Zn(t))return ct(n,t)}if(tt(dt,n),f=dt[0],0===dt[1]){if(0===f)return ot(n,t);if(1===n)return 1;if(-1===n&&Xn(t))return-1;if(Zn(n))return n===it?r(-0,-t):t<0?0:ft}if(n<0&&!1===$n(t))return(n-n)/(n-n);if(i=nt(n),e=f&pt|0,u=o&pt|0,c=o>>>31|0,a=(a=f>>>31|0)&&Xn(t)?-1:1,u>1105199104){if(u>1139802112)return at(n,t);if(e<1072693247)return 1===c?a*bt*bt:a*wt*wt;if(e>1072693248)return 0===c?a*bt*bt:a*wt*wt;p=yt(st,i)}else p=vt(st,i,e);if(l=(t-(v=et(t,0)))*p[0]+t*p[1],y=v*p[0],tt(dt,A=l+y),b=ut(dt[0]),w=ut(dt[1]),b>=At){if(0!=(b-At|w))return a*bt*bt;if(l+8008566259537294e-32>A-y)return a*bt*bt}else if((b&pt)>=1083231232){if(0!=(b-3230714880|w))return a*wt*wt;if(l<=A-y)return a*wt*wt}return a*(A=lt(b,y,l))};var mt=Mr,ht=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Nt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},It=1048575;var gt=Mr,Ft=yn,St=Or,Ht=r,Ot=t,Tt=function(r){var n,t,e,u,i,f,o,a,c,v;return e=mt(r),u=r-1,(It&2+e)<3?0===u?0:u*u*(.3333333333333333*u-.5):(c=(e&=It)-398458|0,v=440401-e|0,t=(a=(f=(i=u/(2+u))*i)*f)*ht(a),o=f*Nt(a)+t,(c|=v)>0?i*((n=.5*u*u)+o)-n:i*(o-u))},jt=.4342944818781689;var Et=Mr,Gt=yn,xt=r,Lt=t,Wt=function(r){return 0===r?.3999999999940942:.3999999999940942+r*(.22222198432149784+.15313837699209373*r)},Mt=function(r){return 0===r?.6666666666666735:.6666666666666735+r*(.2857142874366239+r*(.1818357216161805+.14798198605116586*r))},Pt=.6931471803691238,Vt=1.9082149292705877e-10,Yt=1048575;var _t=r,qt=i,kt=Ut,zt=function(r){var n,t,e,u,i,f,o;return Ht(r)||r<0?NaN:0===r?Ot:(i=0,(t=gt(r))<1048576&&(i-=54,t=gt(r*=0x40000000000000)),t>=2146435072?r+r:(i+=(t>>20)-1023|0,r=Ft(r,(t&=1048575)|1072693248^(u=t+614244&1048576|0)),f=i+=u>>20|0,e=Tt(r),o=3694239077158931e-28*f+25082946711645275e-27*((r-=1)+e),(o+=(r-(n=St(r,0))+e)*jt+n*jt)+.30102999566361177*f))},Bt=function(r){var n,t,e,u,i,f,o,a,c,v,y;return 0===r?Lt:xt(r)||r<0?NaN:(u=0,(t=Et(r))<1048576&&(u-=54,t=Et(r*=0x40000000000000)),t>=2146435072?r+r:(u+=(t>>20)-1023|0,u+=(o=(t&=Yt)+614244&1048576|0)>>20|0,f=(r=Gt(r,t|1072693248^o))-1,(Yt&2+t)<3?0===f?0===u?0:u*Pt+u*Vt:(i=f*f*(.5-.3333333333333333*f),0===u?f-i:u*Pt-(i-u*Vt-f)):(o=t-398458|0,a=440401-t|0,e=(v=(y=(c=f/(2+f))*c)*y)*Wt(v),i=y*Mt(v)+e,(o|=a)>0?(n=.5*f*f,0===u?f-(n-c*(n+i)):u*Pt-(n-(c*(n+i)+u*Vt)-f)):0===u?f-c*(f-i):u*Pt-(c*(f-i)-u*Vt-f))))},Ct=p,Dt=f,Jt=On;var Kt=function(r,n,t){var e,u,i,f;if(_t(r)||_t(n)||n<1||qt(n))return NaN;if(arguments.length>2){if(_t(t)||t<=0||qt(t))return NaN;e=t}else e=10;return qt(r)||0===r?r:(u=10===e?zt(Ct(r)):2===e?Jt(Ct(r)):Bt(Ct(r))/Bt(e),u=Dt(u-n+1),i=kt(e,Ct(u)),qt(i)?r:(f=u<0?Dt(r*i)/i:Dt(r/i)*i,qt(f)?r:f))};return Kt}));
//# sourceMappingURL=bundle.js.map
