// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.15/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(l,m){return function(){function c(a){this.readFile=a}c.prototype.resolveIncludes=function(a){return this.resolve(a)};c.prototype.resolve=function(a,b){var c=this;void 0===b&&(b=new Map);if(b.has(a))return b.get(a);var d=this.read(a);if(!d)throw Error("cannot find shader file "+a);for(var h=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm,e=h.exec(d),k=[];null!=e;)k.push({path:e[1],start:e.index,length:e[0].length}),e=h.exec(d);var g=0,f="";k.forEach(function(a){f+=d.slice(g,
a.start);f+=b.has(a.path)?"":c.resolve(a.path,b);g=a.start+a.length});f+=d.slice(g);b.set(a,f);return f};c.prototype.read=function(a){return this.readFile(a)};return c}()});