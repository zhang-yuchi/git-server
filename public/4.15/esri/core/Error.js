// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define("require exports ./tsSupport/extendsHelper ./lang ./Logger ./Message".split(" "),function(d,m,g,h,k,l){d=function(d){function c(a,b,e){var f=d.call(this,a,b,e)||this;return f instanceof c?f:new c(a,b,e)}g(c,d);c.prototype.toJSON=function(){if(null!=this.details)try{var a=h.clone(this.details);return{name:this.name,message:this.message,details:a,dojoType:this.dojoType}}catch(b){throw k.getLogger("esri.core.Error").error(b),b;}return{name:this.name,message:this.message,details:this.details,dojoType:this.dojoType}};
c.fromJSON=function(a){var b=new c(a.name,a.message,a.details);null!=a.dojoType&&(b.dojoType=a.dojoType);return b};return c}(l);d.prototype.type="error";return d});