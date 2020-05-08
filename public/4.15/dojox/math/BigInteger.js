//>>built
define(["dojo","dojox","dojo/has"],function(p,t,m){function h(a,b,c){null!=a&&("number"==typeof a?this._fromNumber(a,b,c):b||"string"==typeof a?this._fromString(a,b):this._fromString(a,256))}function l(){return new h(null)}function A(a,b,c,d,e,f){for(;0<=--f;){var g=b*this[a++]+c[d]+e;e=Math.floor(g/67108864);c[d++]=g&67108863}return e}function B(a,b,c,d,e,f){var g=b&32767;for(b>>=15;0<=--f;){var h=this[a]&32767,k=this[a++]>>15,l=b*h+k*g,h=g*h+((l&32767)<<15)+c[d]+(e&1073741823);e=(h>>>30)+(l>>>15)+
b*k+(e>>>30);c[d++]=h&1073741823}return e}function y(a,b){a=n[a.charCodeAt(b)];return null==a?-1:a}function w(a){var b=l();b._fromInt(a);return b}function v(a){var b=1,c;if(c=a>>>16)a=c,b+=16;if(c=a>>8)a=c,b+=8;if(c=a>>4)a=c,b+=4;if(c=a>>2)a=c,b+=2;if(c=a>>1)a=c,b+=1;return b}function z(a){this.m=a}function x(a){this.m=a;this.mp=a._invDigit();this.mpl=this.mp&32767;this.mph=this.mp>>15;this.um=(1<<a._DB-15)-1;this.mt2=2*a.t}p.getObject("math.BigInteger",!0,t);p.experimental("dojox.math.BigInteger");
m("ie")?(h.prototype.am=B,m=30):(h.prototype.am=A,m=26);var n=[],q,k;q=48;for(k=0;9>=k;++k)n[q++]=k;q=97;for(k=10;36>k;++k)n[q++]=k;q=65;for(k=10;36>k;++k)n[q++]=k;p.extend(z,{convert:function(a){return 0>a.s||0<=a.compareTo(this.m)?a.mod(this.m):a},revert:function(a){return a},reduce:function(a){a._divRemTo(this.m,null,a)},mulTo:function(a,b,c){a._multiplyTo(b,c);this.reduce(c)},sqrTo:function(a,b){a._squareTo(b);this.reduce(b)}});p.extend(x,{convert:function(a){var b=l();a.abs()._dlShiftTo(this.m.t,
b);b._divRemTo(this.m,null,b);0>a.s&&0<b.compareTo(h.ZERO)&&this.m._subTo(b,b);return b},revert:function(a){var b=l();a._copyTo(b);this.reduce(b);return b},reduce:function(a){for(;a.t<=this.mt2;)a[a.t++]=0;for(var b=0;b<this.m.t;++b){var c=a[b]&32767,d=c*this.mpl+((c*this.mph+(a[b]>>15)*this.mpl&this.um)<<15)&a._DM,c=b+this.m.t;for(a[c]+=this.m.am(0,d,a,b,0,this.m.t);a[c]>=a._DV;)a[c]-=a._DV,a[++c]++}a._clamp();a._drShiftTo(this.m.t,a);0<=a.compareTo(this.m)&&a._subTo(this.m,a)},mulTo:function(a,
b,c){a._multiplyTo(b,c);this.reduce(c)},sqrTo:function(a,b){a._squareTo(b);this.reduce(b)}});p.extend(h,{_DB:m,_DM:(1<<m)-1,_DV:1<<m,_FV:Math.pow(2,52),_F1:52-m,_F2:2*m-52,_copyTo:function(a){for(var b=this.t-1;0<=b;--b)a[b]=this[b];a.t=this.t;a.s=this.s},_fromInt:function(a){this.t=1;this.s=0>a?-1:0;0<a?this[0]=a:-1>a?this[0]=a+_DV:this.t=0},_fromString:function(a,b){if(16==b)b=4;else if(8==b)b=3;else if(256==b)b=8;else if(2==b)b=1;else if(32==b)b=5;else if(4==b)b=2;else{this._fromRadix(a,b);return}this.s=
this.t=0;for(var c=a.length,d=!1,e=0;0<=--c;){var f=8==b?a[c]&255:y(a,c);0>f?"-"==a.charAt(c)&&(d=!0):(d=!1,0==e?this[this.t++]=f:e+b>this._DB?(this[this.t-1]|=(f&(1<<this._DB-e)-1)<<e,this[this.t++]=f>>this._DB-e):this[this.t-1]|=f<<e,e+=b,e>=this._DB&&(e-=this._DB))}8==b&&0!=(a[0]&128)&&(this.s=-1,0<e&&(this[this.t-1]|=(1<<this._DB-e)-1<<e));this._clamp();d&&h.ZERO._subTo(this,this)},_clamp:function(){for(var a=this.s&this._DM;0<this.t&&this[this.t-1]==a;)--this.t;this.t=0===this.t?1:this.t},_dlShiftTo:function(a,
b){var c;for(c=this.t-1;0<=c;--c)b[c+a]=this[c];for(c=a-1;0<=c;--c)b[c]=0;b.t=this.t+a;b.s=this.s},_drShiftTo:function(a,b){for(var c=a;c<this.t;++c)b[c-a]=this[c];b.t=Math.max(this.t-a,0);b.s=this.s},_lShiftTo:function(a,b){var c=a%this._DB,d=this._DB-c,e=(1<<d)-1;a=Math.floor(a/this._DB);var f=this.s<<c&this._DM,g;for(g=this.t-1;0<=g;--g)b[g+a+1]=this[g]>>d|f,f=(this[g]&e)<<c;for(g=a-1;0<=g;--g)b[g]=0;b[a]=f;b.t=this.t+a+1;b.s=this.s;b._clamp()},_rShiftTo:function(a,b){b.s=this.s;var c=Math.floor(a/
this._DB);if(c>=this.t)b.t=0;else{a%=this._DB;var d=this._DB-a,e=(1<<a)-1;b[0]=this[c]>>a;for(var f=c+1;f<this.t;++f)b[f-c-1]|=(this[f]&e)<<d,b[f-c]=this[f]>>a;0<a&&(b[this.t-c-1]|=(this.s&e)<<d);b.t=this.t-c;b._clamp()}},_subTo:function(a,b){for(var c=0,d=0,e=Math.min(a.t,this.t);c<e;)d+=this[c]-a[c],b[c++]=d&this._DM,d>>=this._DB;if(a.t<this.t){for(d-=a.s;c<this.t;)d+=this[c],b[c++]=d&this._DM,d>>=this._DB;d+=this.s}else{for(d+=this.s;c<a.t;)d-=a[c],b[c++]=d&this._DM,d>>=this._DB;d-=a.s}b.s=0>d?
-1:0;-1>d?b[c++]=this._DV+d:0<d&&(b[c++]=d);b.t=c;b._clamp()},_multiplyTo:function(a,b){var c=this.abs(),d=a.abs(),e=c.t;for(b.t=e+d.t;0<=--e;)b[e]=0;for(e=0;e<d.t;++e)b[e+c.t]=c.am(0,d[e],b,e,0,c.t);b.s=0;b._clamp();this.s!=a.s&&h.ZERO._subTo(b,b)},_squareTo:function(a){for(var b=this.abs(),c=a.t=2*b.t;0<=--c;)a[c]=0;for(c=0;c<b.t-1;++c){var d=b.am(c,b[c],a,2*c,0,1);(a[c+b.t]+=b.am(c+1,2*b[c],a,2*c+1,d,b.t-c-1))>=b._DV&&(a[c+b.t]-=b._DV,a[c+b.t+1]=1)}0<a.t&&(a[a.t-1]+=b.am(c,b[c],a,2*c,0,1));a.s=
0;a._clamp()},_divRemTo:function(a,b,c){var d=a.abs();if(!(0>=d.t)){var e=this.abs();if(e.t<d.t)null!=b&&b._fromInt(0),null!=c&&this._copyTo(c);else{null==c&&(c=l());var f=l(),g=this.s;a=a.s;var k=this._DB-v(d[d.t-1]);0<k?(d._lShiftTo(k,f),e._lShiftTo(k,c)):(d._copyTo(f),e._copyTo(c));d=f.t;e=f[d-1];if(0!=e){var m=e*(1<<this._F1)+(1<d?f[d-2]>>this._F2:0),p=this._FV/m,m=(1<<this._F1)/m,q=1<<this._F2,u=c.t,n=u-d,r=null==b?l():b;f._dlShiftTo(n,r);0<=c.compareTo(r)&&(c[c.t++]=1,c._subTo(r,c));h.ONE._dlShiftTo(d,
r);for(r._subTo(f,f);f.t<d;)f[f.t++]=0;for(;0<=--n;){var t=c[--u]==e?this._DM:Math.floor(c[u]*p+(c[u-1]+q)*m);if((c[u]+=f.am(0,t,c,n,0,d))<t)for(f._dlShiftTo(n,r),c._subTo(r,c);c[u]<--t;)c._subTo(r,c)}null!=b&&(c._drShiftTo(d,b),g!=a&&h.ZERO._subTo(b,b));c.t=d;c._clamp();0<k&&c._rShiftTo(k,c);0>g&&h.ZERO._subTo(c,c)}}}},_invDigit:function(){if(1>this.t)return 0;var a=this[0];if(0==(a&1))return 0;var b=a&3,b=b*(2-(a&15)*b)&15,b=b*(2-(a&255)*b)&255,b=b*(2-((a&65535)*b&65535))&65535,b=b*(2-a*b%this._DV)%
this._DV;return 0<b?this._DV-b:-b},_isEven:function(){return 0==(0<this.t?this[0]&1:this.s)},_exp:function(a,b){if(4294967295<a||1>a)return h.ONE;var c=l(),d=l(),e=b.convert(this),f=v(a)-1;for(e._copyTo(c);0<=--f;)if(b.sqrTo(c,d),0<(a&1<<f))b.mulTo(d,e,c);else var g=c,c=d,d=g;return b.revert(c)},_intAt:y,toString:function(a){if(0>this.s)return"-"+this.negate().toString(a);if(16==a)a=4;else if(8==a)a=3;else if(2==a)a=1;else if(32==a)a=5;else if(4==a)a=2;else return this._toRadix(a);var b=(1<<a)-1,
c,d=!1,e="",f=this.t,g=this._DB-f*this._DB%a;if(0<f--)for(g<this._DB&&0<(c=this[f]>>g)&&(d=!0,e="0123456789abcdefghijklmnopqrstuvwxyz".charAt(c));0<=f;)g<a?(c=(this[f]&(1<<g)-1)<<a-g,c|=this[--f]>>(g+=this._DB-a)):(c=this[f]>>(g-=a)&b,0>=g&&(g+=this._DB,--f)),0<c&&(d=!0),d&&(e+="0123456789abcdefghijklmnopqrstuvwxyz".charAt(c));return d?e:"0"},negate:function(){var a=l();h.ZERO._subTo(this,a);return a},abs:function(){return 0>this.s?this.negate():this},compareTo:function(a){if(this.s!==a.s)return this.s>
a.s?1:-1;if(this.t!==a.t)return 0===this.s?this.t>a.t?1:-1:this.t<a.t?1:-1;for(var b=this.t;0<=--b;)if(this[b]!==a[b])return this[b]>a[b]?1:-1;return 0},bitLength:function(){return 0>=this.t?0:this._DB*(this.t-1)+v(this[this.t-1]^this.s&this._DM)},mod:function(a){var b=l();this.abs()._divRemTo(a,null,b);0>this.s&&0<b.compareTo(h.ZERO)&&a._subTo(b,b);return b},modPowInt:function(a,b){b=256>a||b._isEven()?new z(b):new x(b);return this._exp(a,b)}});p._mixin(h,{ZERO:w(0),ONE:w(1),_nbi:l,_nbv:w,_nbits:v,
_Montgomery:x});t.math.BigInteger=h;return t.math.BigInteger});